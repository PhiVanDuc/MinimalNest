"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { FiUser } from "react-icons/fi";
import { LayoutDashboard } from "lucide-react";
import { TbLogout, TbArrowsExchange2 } from "react-icons/tb";

import { signOut } from "@/lib/api/server-action/auth";
import { getCart } from "@/lib/api/server-action/cart";
import { initialCartItemId } from "@/redux/slices/cart-products/cart-item-ids-slice";

export default function NavigateBarAuthed({ userInfo }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const [cart, setCart] = useState([]);
    const cartItemIds = useSelector(state => state.cartItemIds.cartItemIds);

    const userId = userInfo?.id;
    const permissions = userInfo?.permissions || [];
    const lastName = userInfo?.last_name?.split(" ");
    const letterLastName = lastName?.[lastName.length - 1]?.[0] || "";

    useEffect(() => {
        const fetchCart = async () => {
            const { result } = await getCart(userId);

            if (result?.success) {
                setCart(result?.data?.cart);
            }
        };

        fetchCart();
    }, []);

    useEffect(() => {
        const itemIds = cart?.cart_items?.map(item => item?.id) || [];
        dispatch(initialCartItemId(itemIds));
    }, [cart, dispatch]);

    return (
        <div className="flex items-center gap-x-[5px]">
            <div className="relative">
                <Link
                    href="/gio-hang"
                    className="hidden xl:flex px-[16px] py-[8px] text-[14px] text-darkMedium font-medium leading-0 rounded-[8px] hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
                >
                    Giỏ hàng
                </Link>

                {
                    cartItemIds?.length > 0 &&
                    (
                        <p className="absolute top-1/2 translate-y-[-50%] left-[-20px] px-[10px] py-[2px] rounded-full bg-yellowBold text-[13px] text-white font-medium">
                            {cartItemIds?.length}
                        </p>
                    )
                }
            </div>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-darkBold text-[15px] font-semibold text-white cursor-pointer">
                        <p className="leading-0">{letterLastName}</p>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    sideOffset={10}
                    className="p-[10px] rounded-[10px]"
                >
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                            onClick={() => { router.push("/ho-so"); }}
                        >
                            <div className="shrink-0 w-[24px] flex justify-center">
                                <FiUser className="text-[20px]" />
                            </div>
                            <p>Hồ sơ người dùng</p>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                            onClick={() => { router.push("/tra-hang"); }}
                        >
                            <div className="shrink-0 w-[24px] flex justify-center">
                                <TbArrowsExchange2 className="text-[20px]" />
                            </div>
                            <p>Trả hàng</p>
                        </DropdownMenuItem>

                        {
                            (permissions && permissions?.length > 0) &&
                            (
                                <DropdownMenuItem
                                    className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                                    onClick={() => { router.push("/quan-tri") }}
                                >
                                    <div className="shrink-0 w-[24px] flex justify-center">
                                        <LayoutDashboard size={20} />
                                    </div>
                                    <p>Trang quản trị</p>
                                </DropdownMenuItem>
                            )
                        }

                        <DropdownMenuItem
                            className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                            onClick={() => {
                                signOut();
                            }}
                        >
                            <div className="shrink-0 w-[24px] flex justify-center">
                                <TbLogout className="text-[20px]" />
                            </div>
                            <p>Đăng xuất</p>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}