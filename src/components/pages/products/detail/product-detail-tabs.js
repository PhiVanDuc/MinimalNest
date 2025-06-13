"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";

// import ProductDetailTextEditor from "./comment/product-detail-text-editor";
// import ProductDetailComments from "./comment/product-detail-comments";

export default function ProductDetailTabs({ product }) {
    return (
        <Tabs
            defaultValue="desc"
            className="w-full space-y-[30px]"
        >
            <ScrollArea className="w-full overflow-auto">
                <TabsList className="flex justify-start gap-[30px] bg-transparent">
                    <TabsTrigger
                        value="desc"
                        className="shrink-0 data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                    >
                        Mô tả
                    </TabsTrigger>

                    <TabsTrigger
                        value="size"
                        className="shrink-0 data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                    >
                        Tiêu chuẩn kích thước
                    </TabsTrigger>

                    {/* <TabsTrigger
                        value="comments"
                        className="shrink-0 data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                    >
                        Đánh giá sản phẩm
                    </TabsTrigger> */}
                </TabsList>
            </ScrollArea>

            <TabsContent value="desc">
                <p className="text-[15px] leading-[30px] text-darkMedium">{product?.desc || ""}</p>
            </TabsContent>

            <TabsContent value="size">
                <div className="space-y-[20px]">
                    <p className="text-sm text-darkMedium italic">
                        Lưu ý: Kích thước có thể chênh lệch 1 - 2cm tùy thuộc vào phương thức đo. Vui lòng kiểm tra kỹ trước khi đặt hàng.
                    </p>

                    <div className="text-[15px] leading-[30px] text-darkMedium space-y-[8px]">
                        {
                            product?.sizes?.map(size => {
                                return (
                                    <div
                                        key={size?.id}
                                        className="flex items-stretch gap-[8px]"
                                    >
                                        <p className="w-fit sm:shrink-0 sm:w-[200px] flex items-center px-[20px] py-[10px] bg-neutral-100 rounded-[8px]">{size?.size}</p>
                                        <p className="w-full px-[20px] py-[10px] bg-neutral-100 rounded-[8px]">{size?.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </TabsContent>

            {/* <TabsContent
                value="comments"
                className="space-y-[40px]"
            >
                <ProductDetailTextEditor />
                <ProductDetailComments />
            </TabsContent> */}
        </Tabs>
    )
}