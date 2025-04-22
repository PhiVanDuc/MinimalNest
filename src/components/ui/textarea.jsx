import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-[#CBD5E1] bg-transparent px-3 py-2 shadow-sm placeholder:text-[#94A3B8] outline-0 disabled:cursor-not-allowed disabled:opacity-50 text-[13px] sm:text-sm",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
