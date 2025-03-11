import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

export default function CustomButton({ children, className, icon, onClick }) {
    return (
        <Button
            className={cn(
                "px-[24px] py-[24px] font-semibold hover:opacity-80 transition duration-300",
                icon ? "gap-x-[15px]" : "",
                className
            )}
            onClick={onClick}
        >
            {children}
            {icon && icon}
        </Button>
    )
}
