"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import ProductDetailTextEditor from "./comment/product-detail-text-editor"
import ProductDetailComments from "./comment/product-detail-comments"

export default function ProductDetailTabs() {
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

                    <TabsTrigger
                        value="comments"
                        className="shrink-0 data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                    >
                        Đánh giá sản phẩm
                    </TabsTrigger>
                </TabsList>
            </ScrollArea>

            <TabsContent value="desc">
                <p className="text-[15px] leading-[30px] text-darkMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non mauris non metus convallis pretium. Praesent eget suscipit mi, in tincidunt nunc. Quisque a risus a sapien pharetra semper. Nam sit amet lectus in ante sollicitudin lacinia. Cras et felis urna. Suspendisse potenti.</p>
            </TabsContent>

            <TabsContent value="size">
                <p className="text-[15px] leading-[30px] text-darkMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non mauris non metus convallis pretium. Praesent eget suscipit mi, in tincidunt nunc. Quisque a risus a sapien pharetra semper. Nam sit amet lectus in ante sollicitudin lacinia. Cras et felis urna. Suspendisse potenti.</p>
            </TabsContent>

            <TabsContent
                value="comments"
                className="space-y-[40px]"
            >
                <ProductDetailTextEditor />
                <ProductDetailComments />
            </TabsContent>
        </Tabs>
    )
}