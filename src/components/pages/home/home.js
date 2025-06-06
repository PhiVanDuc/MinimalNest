import Header from "@/components/pages/home/header";
import Analysis from "@/components/pages/home/analysis";
import Compliment from "@/components/pages/home/compliment";
import Feedback from "@/components/pages/home/feedback";
import LatestProducts from "./latest-products";

export default function Home() {
    return (
        <div className="space-y-[100px]">
            <Header />
            <Analysis />
            <LatestProducts />
            <Compliment />
            <Feedback />
        </div>
    )
}
