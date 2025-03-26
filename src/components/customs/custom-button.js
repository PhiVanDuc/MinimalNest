import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

export default function CustomButton({ children, type = "button", className, icon, variant = "", onClick, disabled = false }) {
    return (
        <Button
            type={type}
            variant={variant}
            className={cn(
                "px-[24px] py-[24px] font-semibold hover:opacity-80 transition duration-300",
                icon ? "gap-x-[15px]" : "",
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            {icon && icon}
        </Button>
    )
}
