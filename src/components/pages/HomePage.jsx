import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import taskService from "@/services/api/taskService";
import Header from "@/components/organisms/Header";
import TaskList from "@/components/organisms/TaskList";
import TaskForm from "@/components/organisms/TaskForm";
import DeleteConfirmation from "@/components/organisms/DeleteConfirmation";
import Modal from "@/components/molecules/Modal";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const HomePage = () => {
const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const loadTasks = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await taskService.getAll();
      setTasks(data);
    } catch (err) {
      setError(err.message || "Failed to load tasks");
      console.error("Error loading tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    try {
      setActionLoading(true);
      const newTask = await taskService.create(taskData);
      setTasks(prevTasks => [...prevTasks, newTask]);
      setIsAddModalOpen(false);
      toast.success("Task created successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to create task");
      console.error("Error creating task:", err);
    } finally {
      setActionLoading(false);
    }
  };

const handleToggleTask = async (taskId) => {
    try {
      const updatedTask = await taskService.toggleComplete(taskId);
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.Id === taskId ? updatedTask : task
        )
      );
      toast.success(
        updatedTask.completed ? "Task completed!" : "Task reopened"
      );
    } catch (err) {
      toast.error(err.message || "Failed to update task");
      console.error("Error toggling task:", err);
    }
  };

  const handleUpdateTask = async (taskId, taskData) => {
    try {
      const updatedTask = await taskService.update(taskId, taskData);
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.Id === taskId ? updatedTask : task
        )
      );
      toast.success("Task updated successfully");
    } catch (err) {
      toast.error(err.message || "Failed to update task");
      console.error("Error updating task:", err);
      throw err;
    }
  };

  const handleDeleteClick = (taskId) => {
    const task = tasks.find(t => t.Id === taskId);
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!taskToDelete) return;

    try {
      setActionLoading(true);
      await taskService.delete(taskToDelete.Id);
      setTasks(prevTasks => prevTasks.filter(task => task.Id !== taskToDelete.Id));
      setIsDeleteModalOpen(false);
      setTaskToDelete(null);
      toast.success("Task deleted successfully");
    } catch (err) {
      toast.error(err.message || "Failed to delete task");
      console.error("Error deleting task:", err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleCloseDeleteModal = () => {
    if (!actionLoading) {
      setIsDeleteModalOpen(false);
      setTaskToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onAddTask={() => {}} taskCount={0} />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <Loading />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header onAddTask={() => {}} taskCount={0} />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <Error message={error} onRetry={loadTasks} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        onAddTask={() => setIsAddModalOpen(true)} 
        taskCount={tasks.length}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {tasks.length === 0 ? (
          <Empty onAddTask={() => setIsAddModalOpen(true)} />
        ) : (
          <TaskList
tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteClick}
            onUpdate={handleUpdateTask}
          />
        )}
      </main>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => !actionLoading && setIsAddModalOpen(false)}
        title="Create New Task"
      >
        <TaskForm
          onSubmit={handleAddTask}
          onCancel={() => setIsAddModalOpen(false)}
          loading={actionLoading}
        />
      </Modal>

      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteConfirm}
        taskTitle={taskToDelete?.title}
        loading={actionLoading}
      />
    </div>
  );
};

export default HomePage;