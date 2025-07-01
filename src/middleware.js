import { NextResponse } from 'next/server';
import { AUTH_PATHS, PUBLIC_PATHS, PROTECTED_PATHS, ADMIN_PATHS, PERMISSION_PATHS } from "./routes";
import { jwtDecode } from 'jwt-decode';
 
export async function middleware(request) {
    const finalResponse = NextResponse.next();

    const { cookies, nextUrl } = request;
    const { pathname: currPath } = nextUrl;
    const pathname = currPath === "/" ? "/trang-chu" : currPath;

    const accessToken = cookies.get("access_token")?.value;
    let validAccess = accessToken ? true : false;
    let infoUser;

    const authPage = AUTH_PATHS.some(path => pathname.startsWith(path));
    const publicPage = PUBLIC_PATHS.some(path => pathname.startsWith(path));
    const protectedPage = PROTECTED_PATHS.some(path => pathname.startsWith(path));
    const adminPage = ADMIN_PATHS.some(path => pathname.startsWith(path));

    // Kiểm tra tính hợp lệ cả access token
    if (validAccess) {
        try {
            infoUser = jwtDecode(accessToken);
            if (!infoUser?.permissions) infoUser.permissions = [];
        } catch (error) {
            console.log("Lỗi khi decode access token");
            console.log(error);
            validAccess = false;
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