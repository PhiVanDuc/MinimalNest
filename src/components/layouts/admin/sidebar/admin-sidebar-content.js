import AdminSidebarGroup from "./admin-sidebar-group";

import { v4 } from "uuid";
import getAccessToken from "@/lib/utils/getAccessToken";

const sidebar = [
    {
        id: v4(),
        groupLabel: "Tổng quát",
        groupItems: [
            {
                id: v4(),
                label: "Bảng thống kê",
                href: "/quan-tri/bang-thong-ke",
                permission: "all-dashboard"
            }
        ],
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
                        href: "/quan-tri/vai-tro",
                        permission: "list-role"
                    },
                    {
                        id: v4(),
                        label: "Tài khoản",
                        href: "/quan-tri/tai-khoan",
                        permission: "list-account"
                    },
                ],
            },
            {
                id: v4(),
                label: "Ưu đãi",
                subItems: [
                    {
                        id: v4(),
                        label: "Sự kiện",
                        href: "/quan-tri/su-kien",
                        permission: "list-event"
                    },
                    {
                        id: v4(),
                        label: "Phiếu giảm giá",
                        href: "/quan-tri/phieu-giam-gia",
                        permission: "list-coupon"
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
                        href: "/quan-tri/mau-sac",
                        permission: "list-color"
                    },
                    {
                        id: v4(),
                        label: "Kích cỡ",
                        href: "/quan-tri/kich-co",
                        permission: "list-size"
                    },
                    {
                        id: v4(),
                        label: "Sản phẩm",
                        href: "/quan-tri/san-pham",
                        permission: "list-product"
                    },
                    {
                        id: v4(),
                        label: "Tồn kho",
                        href: "/quan-tri/ton-kho",
                        permission: "list-inventory"
                    },
                ]
            },
            {
                id: v4(),
                label: "Đơn hàng",
                href: "/quan-tri/don-hang",
                permission: "list-order"
            },
            {
                id: v4(),
                label: "Trả hàng",
                href: "/quan-tri/tra-hang",
                permission: "list-return"
            }
        ]
    }
];

function filterSidebar(sidebar, permissions) {
    return sidebar
    .map(group => {
        // Lọc từng item trong groupItems
        const filteredItems = group.groupItems
            .map(item => {
                // Nếu có subItems, lọc tiếp
                if (item.subItems) {
                    const sub = item.subItems.filter(si => permissions.includes(si.permission));
                    return sub.length > 0
                        ? { ...item, subItems: sub }
                        : null;
                }
                
                // Nếu là item đơn
                if (item.permission) return permissions.includes(item.permission) ? item : null;

                // Không có permission thì loại bỏ
                return null;
            })
            .filter(i => i !== null);

        return filteredItems.length > 0
            ? { ...group, groupItems: filteredItems }
            : null;
    })
    .filter(g => g !== null);
}

export default function AdminSidebarContent() {
    const { decode } = getAccessToken();
    const filteredSidebar = filterSidebar(sidebar, decode?.decode?.permissions || []);

    return (
        <div className="space-y-[15px]">
            {
                filteredSidebar.map(group => {
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
