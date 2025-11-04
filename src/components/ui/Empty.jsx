import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ onAddTask }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 blur-3xl rounded-full"></div>
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-sm">
            <ApperIcon 
              name="CheckCircle2" 
              size={64} 
              className="text-slate-400" 
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-2">No tasks yet</h3>
      <p className="text-slate-600 mb-8 text-center max-w-sm">
        Get started by adding your first task and take control of your day!
      </p>
      
      <Button variant="primary" onClick={onAddTask} size="large">
        <ApperIcon name="Plus" size={20} className="mr-2" />
        Create Your First Task
      </Button>

      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-2">
            <ApperIcon name="ListChecks" size={24} className="text-blue-600" />
          </div>
          <p className="text-xs text-slate-600 font-medium">Organize</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mx-auto mb-2">
            <ApperIcon name="Target" size={24} className="text-purple-600" />
          </div>
          <p className="text-xs text-slate-600 font-medium">Focus</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-2">
            <ApperIcon name="Sparkles" size={24} className="text-green-600" />
          </div>
          <p className="text-xs text-slate-600 font-medium">Achieve</p>
        </div>
      </div>
    </div>
  );
};

export default Empty;