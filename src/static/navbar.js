import { Armchair, Sun } from "lucide-react";
import { HiOutlineArchive } from "react-icons/hi";
import { LuShowerHead } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import { TbLayoutDashboard } from "react-icons/tb";

const livingSpaces = [
    {
        label: "Tất cả",
        icon: TbLayoutDashboard,
        livingSpace: "all",
    },
    {
        label: "Phòng tắm",
        icon: LuShowerHead,
        livingSpace: "bathroom",
    },
    {
        label: "Phòng khách",
        icon: Armchair,
        livingSpace: "living-room",
    },
    {
        label: "Ngoài trời",
        icon: Sun,
        livingSpace: "outside",
    },
    {
        label: "Phòng ăn - Nhà bếp",
        icon: PiCookingPotBold,
        livingSpace: "kitchen",
    },
    {
        label: "Lưu trữ",
        icon: HiOutlineArchive,
        livingSpace: "archive",
    },
    {
        label: "Phòng ngủ",
        icon: MdOutlineBed,
        livingSpace: "bedroom",
    }
]

const navbarItems = [
    {
        label: "Trang chủ",
        href: "/",
        highlight: "/home",
    },
    {
        label: "Sản phẩm",
        href: "/san-pham",
        highlight: "/san-pham",
        subNav: true,
        subNavItems: livingSpaces
    },
    {
        label: "Phiếu giảm giá",
        href: "/phieu-giam-gia",
        highlight: "/phieu-giam-gia",
    },
    {
        label: "Liên lạc",
        href: "/lien-lac",
        highlight: "/lien-lac",
    },
];

export { livingSpaces, navbarItems };