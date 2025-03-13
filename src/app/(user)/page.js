import { Suspense } from "react";

import HeaderLoading from "@/components/pages/home/header-loading";
import Header from "@/components/pages/home/header";
import Analysis from "@/components/pages/home/analysis";
import FeaturedProducts from "@/components/pages/home/featured-products";
import LivingSpace from "@/components/pages/home/living-spaces";
import Compliment from "@/components/pages/home/compliment";
import Feedback from "@/components/pages/home/feedback";

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Trang chủ`,
	description: "Generated by create next app",
};

export default function Page() {
    return (
        <div className="flex justify-center overflow-x-hidden">
            <div className="max-width overflow-x-hidden">
                <Suspense fallback={<HeaderLoading />}>
                    <Header />
                    <Analysis />
                    <FeaturedProducts />
                    <LivingSpace />
                    <Compliment />
                    <Feedback />
                </Suspense>
            </div>
        </div>
    )
}