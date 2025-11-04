import ApperIcon from "@/components/ApperIcon";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl rounded-full"></div>
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
          <ApperIcon 
            name="Loader2" 
            size={32} 
            className="text-white animate-spin" 
          />
        </div>
      </div>
      <p className="mt-6 text-slate-600 font-medium">Loading your tasks...</p>
    </div>
  );
};

export default Loading;