import { NextResponse } from 'next/server';
import { AUTH_PATHS, PUBLIC_PATHS, PROTECTED_PATHS, ADMIN_PATHS, PERMISSION_PATHS } from "./routes";

import { verifyToken, refresh_access_token } from './lib/api/server-action/token';
import { jwtDecode } from 'jwt-decode';
 
export async function middleware(request) {
    const finalResponse = NextResponse.next();

    const { cookies, nextUrl } = request;
    const { pathname: currPath } = nextUrl;
    const pathname = currPath === "/" ? "/trang-chu" : currPath;

    const accessToken = cookies.get("access_token")?.value;
    const refreshToken = cookies.get("refresh_token")?.value;

    let validAccess = accessToken ? true : false;
    let infoUser;

    const authPage = AUTH_PATHS.some(path => pathname.startsWith(path));
    const publicPage = PUBLIC_PATHS.some(path => pathname.startsWith(path));
    const protectedPage = PROTECTED_PATHS.some(path => pathname.startsWith(path));
    const adminPage = ADMIN_PATHS.some(path => pathname.startsWith(path));

    // Kiểm tra tính hợp lệ cả access token và refresh token
    if (validAccess && (protectedPage || adminPage)) {
        const result = await verifyToken(accessToken);

        // Access token không hợp lệ
        if (!result?.success || (!result?.data?.valid && !result?.data?.expired)) validAccess = false;
        // Access token hết hạn
        else if (result?.data?.expired) {
            const result = await refresh_access_token(refreshToken);

            // Cấp lại access token thất bại
            if (!result?.success) validAccess = false;
            // Cấp lại access token thành công
            else {
                infoUser = result?.data?.decoded;

                finalResponse.cookies.set("access_token", result?.data?.accessToken, {
                    httpOnly: true,
                    path: "/",
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                });

                finalResponse.cookies.set("refresh_token", result?.data?.refreshToken, {
                    httpOnly: true,
                    path: "/",
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                });
            }
        }
        // Access token có thể dùng tiếp
        else {
            try {
                infoUser = jwtDecode(accessToken);
            } catch (error) {
                console.log("Lỗi khi decode access token");
                console.log(error);
                validAccess = false;
            }
        }
    }
    
    if (!validAccess) {
        const response = NextResponse.next();
        response.cookies.delete("access_token");
        response.cookies.delete("refresh_token");
        
        if (!authPage && !publicPage) {
            return NextResponse.redirect(
                new URL('/dang-nhap', request.url),
                { headers: response.headers }
            );
        }

        return response;
    }

    // Chặn vào Auth Page khi accessToken === true
    if (validAccess && authPage) {
        return NextResponse.redirect(
            new URL('/', request.url)
        );
    }

    // Phân quyền quản trị
    if (adminPage) {
        const permissions = infoUser?.permissions || [];
        if (permissions.length === 0) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        const matchedPermissions = PERMISSION_PATHS.filter(entry =>
            permissions.includes(entry.permission)
        );

        const allowedPaths = new Set(
            matchedPermissions.flatMap(entry => entry.paths)
        );

        const hasPermissionForPath = Array.from(allowedPaths).some(path => {
            if (pathname !== "/quan-tri" && path === "/quan-tri") return false;
            return pathname.startsWith(path);
        });

        // Nếu không có quyền truy cập vào đường dẫn hiện tại
        if (!hasPermissionForPath) {
            return NextResponse.redirect(new URL('/quan-tri', request.url));
        }
    }

    return finalResponse;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};