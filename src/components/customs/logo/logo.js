import { cn } from "@/lib/utils";

export default function Logo({ className }) {
    return (
        <div className={cn(
            "lg:text-[24px] font-bold text-darkBold",
            className
        )}>
            Logo
        </div>
    )
}
