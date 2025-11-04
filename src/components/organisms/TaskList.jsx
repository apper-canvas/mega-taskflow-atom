import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import TaskCard from "@/components/molecules/TaskCard";

const TaskList = ({ tasks, onToggle, onDelete, onUpdate }) => {
return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;