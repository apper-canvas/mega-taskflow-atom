import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Checkbox from "@/components/atoms/Checkbox";
import Button from "@/components/atoms/Button";
import { format } from "date-fns";

const TaskCard = ({ task, onToggle, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group bg-white rounded-xl shadow-sm border border-slate-200 p-4",
        "transition-all duration-200 ease-out",
        "hover:shadow-md hover:-translate-y-1",
        task.completed && "opacity-60"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 pt-1">
          <Checkbox 
            checked={task.completed}
            onChange={() => onToggle(task.Id)}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 
            className={cn(
              "text-lg font-semibold text-slate-900 mb-1 transition-all duration-300",
              task.completed && "line-through text-slate-500"
            )}
          >
            {task.title}
          </h3>
          
          {task.description && (
            <p 
              className={cn(
                "text-sm text-slate-600 mb-2 line-clamp-2 transition-all duration-300",
                task.completed && "text-slate-400"
              )}
            >
              {task.description}
            </p>
          )}

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ApperIcon name="Calendar" size={14} />
            <span>{format(new Date(task.createdAt), "MMM d, yyyy")}</span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Button
            variant="ghost"
            size="small"
            onClick={() => onDelete(task.Id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-error hover:bg-red-50 rounded-lg p-2"
          >
            <ApperIcon name="Trash2" size={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;