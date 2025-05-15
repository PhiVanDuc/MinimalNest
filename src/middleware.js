import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

const AUTH_PATHS = [
    "/dang-nhap",
    "/dang-ky",
    "/doi-mat-khau"
];

const PUBLIC_PATHS = [
    "/",
    "/san-pham",
    "/san-pham/tim-kiem",
    "/phieu-giam-gia",
    "/gio-hang",
    "/thanh-toan"
];

const PROTECTED_PATHS = [
    "/ho-so",
    "/ho-so/phieu-giam-gia",
    "/ho-so/don-hang"
];
 
export function middleware(request) {
    const { cookies, nextUrl } = request;
    const { pathname } = nextUrl;

    const accessToken = cookies.get("access_token")?.value;
    const refreshToken = cookies.get("refresh_token")?.value;
    let infoUser;

    let validAccess = accessToken ? true : false;
    let validRefresh = refreshToken ? true : false;

    const authPage = AUTH_PATHS.includes(pathname);
    const publicPage = PUBLIC_PATHS.includes(pathname);
    const protectedPage = PROTECTED_PATHS.includes(pathname);

    // Kiểm tra tính hợp lệ cả access token và refresh token
    if (validAccess && validRefresh) {
        if (validAccess) {
            try {
                infoUser = jwtDecode(accessToken);
            } catch (err) {
                validAccess = false;
            }
        }

        if (validRefresh) {
            try {
                jwtDecode(refreshToken);
            } catch (err) {
                validRefresh = false;
            }
        }
    }
    
    if (!validAccess || !validRefresh) {
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

    // Kiểm tra hạn access token (Cấp lại access token nếu hết hạn) . . .

    // Chặn vào Auth Page khi (accessToken && refreshToken) === true
    if (validAccess && validRefresh && authPage) {
        return NextResponse.redirect(
            new URL('/', request.url)
        );
    }

    // Chặn vào Admin Page khi người dùng không có bất kỳ quyền nào
    if (!authPage && !publicPage && !protectedPage) {
        if (infoUser?.permissions && infoUser?.permissions?.length === 0) {
            return NextResponse.redirect(
                new URL('/', request.url)
            );
        }
    }

    // Phân quyền . . .

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}