import { Button } from "@/components/ui/button";

export default function AuthButtons() {
    return (
        <div className="hidden xl:flex items-center text-[15px] text-darkMedium">
            <Button variant="ghost hover:bg-transparent px-[20px]">Đăng nhập</Button>
            <Button className="bg-yellowBold hover:bg-darkBold">Đăng kí</Button>
        </div>
    )
}
