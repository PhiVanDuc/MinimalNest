import { cn } from "@/lib/utils";

export default function MainLoading({ className = "" }) {
    return (
        <div className={cn(className)}>Đang tải . . .</div>
    )
}
