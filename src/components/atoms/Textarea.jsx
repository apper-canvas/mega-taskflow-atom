import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Textarea = forwardRef(({ 
  className,
  error,
  rows = 4,
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full px-3 py-2.5 text-base bg-white border-2 rounded-lg transition-all duration-200 resize-none",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
        "placeholder:text-slate-400",
        error ? "border-error focus:border-error focus:ring-error" : "border-slate-300",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;