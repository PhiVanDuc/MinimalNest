"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function AdminProductButton({ permissions }) {
    const router = useRouter();

    const [isAddProduct, setIsAddProduct] = useState(() => permissions?.includes("add-product"));
    const [isEditProduct, setIsEditProduct] = useState(() => permissions?.includes("edit-product"));

    return (
        <>
            {
                (!isAddProduct && !isEditProduct) ?
                ( <></> ) :
                (
                    <div className="flex items-center gap-[10px]">
                        {
                            isEditProduct &&
                            (
                                <Button
                                    variant="outline"
                                    onClick={() => { router.push("/quan-tri/san-pham/giam-gia-chung") }}
                                >
                                    Giảm giá chung
                                </Button>
                            )
                        }

                        {
                            isAddProduct &&
                            (
                                <Button
                                    className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
                                    onClick={() => { router.push("/quan-tri/san-pham/them-san-pham") }}
                                >
                                    Thêm sản phẩm
                                </Button>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}
