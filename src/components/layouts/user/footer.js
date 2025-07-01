"use client"

import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import Logo from '@/components/customs/logo/logo';
import Link from 'next/link';

import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { cn } from '@/lib/utils';

const sidebarProductPaths = ["/san-pham", "/san-pham/tim-kiem"];
const sidebarDiscountPaths = ["/phieu-giam-gia"];

export default function Footer() {
    const pathname = usePathname();
    const isProductSidebar = sidebarProductPaths.includes(pathname);
    const isDiscountSidebar = sidebarDiscountPaths.includes(pathname);

    const isProductFilterOpen = useSelector(state => state.productFilterOpen);
    const isCouponFilterOpen = useSelector(state => state.couponFilterOpen);

    const basePadding = "px-0 pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px]";
    const productPadding = isProductFilterOpen ? "xl:pl-[360px]" : "xl:px-[80px]";
    const discountPadding = isCouponFilterOpen ? "xl:pl-[360px]" : "xl:px-[80px]";

    const paddingClass = (() => {
        if (isProductSidebar) return `${basePadding} ${productPadding}`;
        if (isDiscountSidebar) return `${basePadding} ${discountPadding}`;
        return "responsive-horizontal";
    })();

    return (
        <footer className='flex justify-center bg-yellowBland pt-[80px]'>
            <div className={cn(
                "max-width transition-all duration-300",
                paddingClass
            )}>
                <div className='flex flex-col xl:flex-row items-start gap-[30px] xl:gap-[20px] pb-[20px]'>
                    <div className='space-y-[10px] text-center xl:text-left w-full xl:w-[55%]'>
                        <div className='xl:w-fit p-[25px] rounded-[15px] bg-yellowBold text-white'>
                            <Logo className="text-[18px] text-white p-0" />
                            <p className="text-[14px] xl:max-w-[360px] leading-[24px]">Tối giản không chỉ là phong cách – đó là cách sống cùng MinimalNest.</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-start justify-between w-full xl:w-[45%] gap-[20px] text-center sm:text-left sm:gap-0'>
                        <div className='w-full sm:w-fit flex sm:block flex-col items-center space-y-[10px]'>
                            <h2 className="font-semibold text-darkBold">Về chúng tôi</h2>

                            <ul className='space-y-[10px]'>
                                <li className='text-darkMedium'>
                                    <Link href="">Câu hỏi thường gặp</Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="">Liên hệ</Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="">Tin tức</Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="">Vận chuyển</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='w-full sm:w-fit flex sm:block flex-col items-center space-y-[10px]'>
                            <h2 className="font-semibold text-darkBold">Hỗ trợ khách hàng</h2>

                            <ul className='space-y-[10px]'>
                                <li className='text-darkMedium'>
                                    <Link href="">Cộng tác viên</Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="">Ưu đãi & khuyến mãi</Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="">Thanh toán</Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="">Chính sách đổi trả</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='w-full sm:w-fit flex sm:block flex-col items-center space-y-[10px]'>
                            <h2 className="font-semibold text-darkBold">Theo dõi chúng tôi</h2>

                            <ul className='flex sm:block flex-col items-center space-y-[10px]'>
                                <li className='text-darkMedium'>
                                    <Link href="" className='flex items-center gap-x-[8px]'>
                                        <span className='w-[25px] flex items-center'><FaFacebookF size={18} className='text-darkBold' /></span>
                                        Facebook
                                    </Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="" className='flex items-center gap-x-[8px]'>
                                        <span className='w-[25px] flex items-center'><AiFillInstagram size={18} className='text-darkBold' /></span>
                                        Instagram
                                    </Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="" className='flex items-center gap-x-[8px]'>
                                        <span className='w-[25px] flex items-center'><FaSquareXTwitter size={18} className='text-darkBold' /></span>
                                        Twitter
                                    </Link>
                                </li>
                                <li className='text-darkMedium'>
                                    <Link href="" className='flex items-center gap-x-[8px]'>
                                        <span className='w-[25px] flex items-center'><FaLinkedin size={18} className='text-darkBold' /></span>
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='pt-[30px] pb-[40px] flex flex-wrap items-center justify-between gap-[10px]'>
                    <p className='text-[14px] text-darkBland text-center md:text-left'>©2025 MinimalNest. Đã đăng ký bản quyền.</p>

                    <div className='flex flex-wrap items-center gap-[10px] sm:gap-x-[20px] text-[14px] text-darkMedium'>
                        <p className='cursor-pointer'>Chính sách bảo mật</p>
                        <p className='cursor-pointer'>Điều khoản dịch vụ</p>
                        <p className='cursor-pointer'>Cài đặt Cookie</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}