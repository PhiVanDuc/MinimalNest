import ReturnGoods from "@/components/pages/profile/return-goods/return-goods";

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Hồ sơ - Đơn hàng`,
	description: "Generated by create next app"
};

export default function Page({ searchParams }) {
    return (
        <ReturnGoods searchParams={searchParams} />
    )
}
