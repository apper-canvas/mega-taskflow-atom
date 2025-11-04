import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Header = ({ onAddTask, taskCount }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
              <ApperIcon name="CheckSquare" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TaskFlow
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                {taskCount === 0 ? "No tasks" : `${taskCount} ${taskCount === 1 ? "task" : "tasks"}`}
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            onClick={onAddTask}
            className="shadow-lg"
          >
            <ApperIcon name="Plus" size={20} className="mr-2" />
            <span className="hidden sm:inline">Add Task</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;