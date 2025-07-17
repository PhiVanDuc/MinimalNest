export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: '/',
                disallow: ['/dang-nhap', '/dang-ky', '/doi-mat-khau', '/quan-tri', '/gio-hang', '/thanh-toan', '/tra-hang', '/ho-so']
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/sitemap.xml`
    }
}