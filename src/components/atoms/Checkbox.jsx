import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Checkbox = forwardRef(({ 
  checked,
  onChange,
  className,
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        "relative w-6 h-6 rounded-md border-2 transition-all duration-200 ease-out flex items-center justify-center",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        checked 
          ? "bg-gradient-to-br from-success to-emerald-600 border-success shadow-sm" 
          : "bg-white border-slate-300 hover:border-slate-400",
        className
      )}
      {...props}
    >
      {checked && (
        <ApperIcon 
          name="Check" 
          size={16} 
          className="text-white animate-scale-in" 
          strokeWidth={3}
        />
      )}
    </button>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;