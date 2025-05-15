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
 
export function middleware(request) {
    const { cookies, nextUrl } = request;
    const { pathname } = nextUrl;

    const accessToken = cookies.get("access_token")?.value;
    const refreshToken = cookies.get("refresh_token")?.value;

    let validAccess = accessToken ? true : false;
    let validRefresh = refreshToken ? true : false;

    const authPage = AUTH_PATHS.includes(pathname);
    const publicPage = PUBLIC_PATHS.includes(pathname);

    // Kiểm tra tính hợp lệ cả access token và refresh token
    if (validAccess && validRefresh) {
        if (validAccess) {
            try {
                jwtDecode(accessToken);
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

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}

// Vai trò của Middleware trong việc xác thực jwt
// 1. Kiểm tra xem 2 jwt có tồn tại không
// 2. Kiểm tra xem 2 jwt có lấy được ra payload không

// Thứ tự kiểm tra trong Middleware
// 1. Hai jwt
// 2. Quyền