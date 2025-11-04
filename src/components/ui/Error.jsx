import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-slide-in">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-error/20 blur-2xl rounded-full"></div>
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-error to-accent flex items-center justify-center shadow-lg">
          <ApperIcon 
            name="AlertCircle" 
            size={40} 
            className="text-white" 
          />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">Oops! Something went wrong</h3>
      <p className="text-slate-600 mb-6 text-center max-w-md">
        {message || "We couldn't load your tasks. Please try again."}
      </p>
      
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          <ApperIcon name="RotateCw" size={18} className="mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default Error;