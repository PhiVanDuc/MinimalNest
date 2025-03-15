"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import ProductDetailComments from "./product-detail-comments"

export default function ProductDetailTabs() {
    return (
        <Tabs
            defaultValue="desc"
            className="w-full space-y-[30px]"
        >
            <TabsList className="flex flex-wrap justify-start gap-[30px] bg-transparent">
                <TabsTrigger
                    value="desc"
                    className="data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                >
                    Mô tả
                </TabsTrigger>

                <TabsTrigger
                    value="exchange"
                    className="data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                >
                    Chính sách đổi trả
                </TabsTrigger>

                <TabsTrigger
                    value="comments"
                    className="data-[state=active]:bg-transparent data-[state=active]:text-darkBold data-[state=active]:shadow-none p-0 pb-[10px] text-[16px] font-medium text-darkMedium hover:text-darkBold"
                >
                    Đánh giá sản phẩm
                </TabsTrigger>
            </TabsList>

            <TabsContent value="desc">
                <p className="text-[15px] leading-[30px] text-darkMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non mauris non metus convallis pretium. Praesent eget suscipit mi, in tincidunt nunc. Quisque a risus a sapien pharetra semper. Nam sit amet lectus in ante sollicitudin lacinia. Cras et felis urna. Suspendisse potenti.</p>
            </TabsContent>

            <TabsContent value="exchange">
                <p className="text-[15px] leading-[30px] text-darkMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non mauris non metus convallis pretium. Praesent eget suscipit mi, in tincidunt nunc. Quisque a risus a sapien pharetra semper. Nam sit amet lectus in ante sollicitudin lacinia. Cras et felis urna. Suspendisse potenti.</p>
            </TabsContent>

            <TabsContent value="comments">
                <ProductDetailComments />
            </TabsContent>
        </Tabs>
    )
}