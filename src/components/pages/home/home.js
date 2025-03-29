import { Suspense } from "react";
import HeaderLoading from "./header-loading";
import Header from "@/components/pages/home/header";
import Analysis from "@/components/pages/home/analysis";
import FeaturedProducts from "@/components/pages/home/featured-products";
import LivingSpace from "@/components/pages/home/living-spaces";
import Compliment from "@/components/pages/home/compliment";
import Feedback from "@/components/pages/home/feedback";

export default async function Home() {
    return (
        <Suspense fallback={<HeaderLoading />}>
            <div className="space-y-[100px]">
                <Header />
                <Analysis />
                <FeaturedProducts />
                <LivingSpace />
                <Compliment />
                <Feedback />
            </div>
        </Suspense>
    )
}
