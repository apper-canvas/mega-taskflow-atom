import { motion, AnimatePresence } from "framer-motion";
import TaskCard from "@/components/molecules/TaskCard";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskCard
            key={task.Id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;