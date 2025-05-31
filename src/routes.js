const AUTH_PATHS = [
    "/dang-nhap",
    "/dang-ky",
    "/doi-mat-khau"
];

const PUBLIC_PATHS = [
    "/trang-chu",
    "/san-pham",
    "/san-pham/tim-kiem",
    "/phieu-giam-gia"
];

const PROTECTED_PATHS = [
    "/ho-so",
    "/ho-so/phieu-giam-gia",
    "/ho-so/don-hang",
    "/gio-hang",
    "/thanh-toan",
    "/doi-tra-hang"
];

const ADMIN_PATHS = [
    "/quan-tri",
    "/quan-tri/bang-thong-ke",
    "/quan-tri/vai-tro",
    "/quan-tri/vai-tro/them-vai-tro",
    "/quan-tri/vai-tro/chinh-sua-vai-tro",
    "/quan-tri/tai-khoan",
    "/quan-tri/tai-khoan/chinh-sua-tai-khoan",
    "/quan-tri/su-kien",
    "/quan-tri/su-kien/them-su-kien",
    "/quan-tri/su-kien/chinh-sua-su-kien",
    "/quan-tri/phieu-giam-gia",
    "/quan-tri/phieu-giam-gia/them-phieu-giam-gia",
    "/quan-tri/phieu-giam-gia/chinh-sua-phieu-giam-gia",
    "/quan-tri/mau-sac",
    "/quan-tri/mau-sac/them-mau-sac",
    "/quan-tri/mau-sac/chinh-sua-mau-sac",
    "/quan-tri/kich-co",
    "/quan-tri/kich-co/them-kich-co",
    "/quan-tri/kich-co/chinh-sua-kich-co",
    "/quan-tri/san-pham",
    "/quan-tri/san-pham/them-san-pham",
    "/quan-tri/san-pham/chinh-sua-san-pham",
    "/quan-tri/san-pham/giam-gia-chung",
    "/quan-tri/don-hang",
    "/quan-tri/tra-hang",
    "/quan-tri/kho-hang",
];

const PERMISSION_PATHS = [
    {
        permission: "admin",
        paths: ["/quan-tri"]
    },
    {
        permission: "all-dashboard",
        paths: ["/quan-tri", "/quan-tri/bang-thong-ke"]
    },
    {
        permission: "list-role",
        paths: ["/quan-tri", "/quan-tri/vai-tro"]
    },
    {
        permission: "add-role",
        paths: ["/quan-tri", "/quan-tri/vai-tro/them-vai-tro"]
    },
    {
        permission: "edit-role",
        paths: ["/quan-tri", "/quan-tri/vai-tro/chinh-sua-vai-tro"]
    },
    {
        permission: "delete-role",
        paths: ["/quan-tri", "/quan-tri/vai-tro"]
    },
    {
        permission: "list-account",
        paths: ["/quan-tri", "/quan-tri/tai-khoan"]
    },
    {
        permission: "edit-account",
        paths: ["/quan-tri", "/quan-tri/tai-khoan/chinh-sua-tai-khoan"]
    },
    {
        permission: "list-event",
        paths: ["/quan-tri", "/quan-tri/su-kien"]
    },
    {
        permission: "add-event",
        paths: ["/quan-tri", "/quan-tri/su-kien/them-su-kien"]
    },
    {
        permission: "edit-event",
        paths: ["/quan-tri", "/quan-tri/su-kien/chinh-sua-su-kien"]
    },
    {
        permission: "delete-event",
        paths: ["/quan-tri", "/quan-tri/su-kien"]
    },
    {
        permission: "list-coupon",
        paths: ["/quan-tri", "/quan-tri/phieu-giam-gia"]
    },
    {
        permission: "add-coupon",
        paths: ["/quan-tri", "/quan-tri/phieu-giam-gia/them-phieu-giam-gia"]
    },
    {
        permission: "edit-coupon",
        paths: ["/quan-tri", "/quan-tri/phieu-giam-gia/chinh-sua-phieu-giam-gia"]
    },
    {
        permission: "delete-coupon",
        paths: ["/quan-tri", "/quan-tri/phieu-giam-gia"]
    },
    {
        permission: "list-color",
        paths: ["/quan-tri", "/quan-tri/mau-sac"]
    },
    {
        permission: "add-color",
        paths: ["/quan-tri", "/quan-tri/mau-sac/them-mau-sac"]
    },
    {
        permission: "edit-color",
        paths: ["/quan-tri", "/quan-tri/mau-sac/chinh-sua-mau-sac"]
    },
    {
        permission: "delete-color",
        paths: ["/quan-tri", "/quan-tri/mau-sac"]
    },
    {
        permission: "list-size",
        paths: ["/quan-tri", "/quan-tri/kich-co"]
    },
    {
        permission: "add-size",
        paths: ["/quan-tri", "/quan-tri/kich-co/them-kich-co"]
    },
    {
        permission: "edit-size",
        paths: ["/quan-tri", "/quan-tri/kich-co/chinh-sua-kich-co"]
    },
    {
        permission: "delete-size",
        paths: ["/quan-tri", "/quan-tri/kich-co"]
    },
    {
        permission: "list-product",
        paths: ["/quan-tri", "/quan-tri/san-pham"]
    },
    {
        permission: "add-product",
        paths: ["/quan-tri", "/quan-tri/san-pham/them-san-pham"]
    },
    {
        permission: "edit-product",
        paths: ["/quan-tri", "/quan-tri/san-pham/chinh-sua-san-pham", "/quan-tri/san-pham/giam-gia-chung"]
    },
    {
        permission: "delete-product",
        paths: ["/quan-tri", "/quan-tri/san-pham"]
    },
    {
        permission: "list-order",
        paths: ["/quan-tri", "/quan-tri/don-hang", "/quan-tri/tra-hang"]
    },
    {
        permission: "detail-order",
        paths: ["/quan-tri", "/quan-tri/don-hang"]
    },
    {
        permission: "edit-order",
        paths: ["/quan-tri", "/quan-tri/don-hang"]
    },
    {
        permission: "list-inventory",
        paths: ["/quan-tri", "/quan-tri/kho-hang"]
    }
];

export { AUTH_PATHS, PUBLIC_PATHS, PROTECTED_PATHS, ADMIN_PATHS, PERMISSION_PATHS }