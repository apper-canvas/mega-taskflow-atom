import React, { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import { cn } from "@/utils/cn";

const TaskCard = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description || ""
  });
  const handleEdit = () => {
    setIsEditing(true);
    setEditedTask({
      title: task.title,
      description: task.description || ""
    });
  };

  const handleSave = async () => {
    if (!editedTask.title.trim()) {
      return;
    }

    setIsSaving(true);
    try {
      await onUpdate(task.Id, {
        title: editedTask.title.trim(),
        description: editedTask.description.trim()
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask({
      title: task.title,
      description: task.description || ""
    });
  };
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
{isEditing ? (
            <Input
              value={editedTask.title}
              onChange={(e) => setEditedTask(prev => ({ ...prev, title: e.target.value }))}
              className="mb-2"
              placeholder="Task title"
              disabled={isSaving}
              autoFocus
            />
          ) : (
            <h3 
              className={cn(
                "text-lg font-semibold text-slate-900 mb-1 transition-all duration-300 cursor-pointer hover:text-primary",
                task.completed && "line-through text-slate-500"
              )}
              onClick={handleEdit}
            >
              {task.title}
            </h3>
          )}
          
{isEditing ? (
            <Textarea
              value={editedTask.description}
              onChange={(e) => setEditedTask(prev => ({ ...prev, description: e.target.value }))}
              className="mb-2"
              placeholder="Task description (optional)"
              disabled={isSaving}
              rows={3}
            />
          ) : (
            task.description && (
              <p 
                className={cn(
                  "text-sm text-slate-600 mb-2 line-clamp-2 transition-all duration-300 cursor-pointer hover:text-primary",
                  task.completed && "text-slate-400"
                )}
                onClick={handleEdit}
              >
                {task.description}
              </p>
            )
          )}
{!isEditing && (
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ApperIcon name="Calendar" size={14} />
              <span>{format(new Date(task.createdAt), "MMM d, yyyy")}</span>
            </div>
          )}
        </div>

        <div className="flex-shrink-0 flex items-center gap-2">
          {isEditing ? (
            <>
              <Button
                variant="ghost"
                size="small"
                onClick={handleSave}
                disabled={isSaving || !editedTask.title.trim()}
                className="text-success hover:bg-green-50 rounded-lg p-2"
              >
                <ApperIcon name="Check" size={18} />
              </Button>
              <Button
                variant="ghost"
                size="small"
                onClick={handleCancel}
                disabled={isSaving}
                className="text-error hover:bg-red-50 rounded-lg p-2"
              >
                <ApperIcon name="X" size={18} />
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="small"
              onClick={() => onDelete(task.Id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-error hover:bg-red-50 rounded-lg p-2"
            >
              <ApperIcon name="Trash2" size={18} />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;