import { v4 } from "uuid";
import AdminSidebarGroup from "./admin-sidebar-group";

const sidebar = [
    {
        id: v4(),
        groupLabel: "Tổng quát",
        groupItems: [
            {
                id: v4(),
                label: "Bảng thống kê",
                href: "/quan-tri/bang-thong-ke"
            }
        ]
    },
    {
        id: v4(),
        groupLabel: "Ứng dụng",
        groupItems: [
            {
                id: v4(),
                label: "Người dùng",
                subItems: [
                    {
                        id: v4(),
                        label: "Vai trò",
                        href: "/quan-tri/vai-tro"
                    },
                    {
                        id: v4(),
                        label: "Tài khoản",
                        href: "/quan-tri/tai-khoan"
                    },
                ]
            },
            {
                id: v4(),
                label: "Ưu đãi",
                subItems: [
                    {
                        id: v4(),
                        label: "Sự kiện",
                        href: "/quan-tri/su-kien"
                    },
                    {
                        id: v4(),
                        label: "Phiếu giảm giá",
                        href: "/quan-tri/phieu-giam-gia"
                    },
                ]
            },
            {
                id: v4(),
                label: "Sản phẩm",
                subItems: [
                    {
                        id: v4(),
                        label: "Màu sắc",
                        href: "/quan-tri/mau-sac"
                    },
                    {
                        id: v4(),
                        label: "Kích cỡ",
                        href: "/quan-tri/kich-co"
                    },
                    {
                        id: v4(),
                        label: "Danh mục",
                        href: "/quan-tri/danh-muc"
                    },
                    {
                        id: v4(),
                        label: "Sản phẩm",
                        href: "/quan-tri/san-pham"
                    },
                ]
            },
            {
                id: v4(),
                label: "Đơn hàng",
                href: "/quan-tri/don-hang"
            },
            {
                id: v4(),
                label: "Kho hàng",
                href: "/quan-tri/kho-hang"
            },
        ]
    }
]

export default function AdminSidebarContent() {
    return (
        <div className="space-y-[15px]">
            {
                sidebar.map(group => {
                    return (
                        <AdminSidebarGroup
                            key={group.id}
                            group={group}
                        />
                    )
                })
            }
        </div>
    )
}
