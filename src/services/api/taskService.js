const STORAGE_KEY = "taskflow_tasks";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const loadTasksFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error loading tasks from storage:", error);
    return [];
  }
};

const saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to storage:", error);
  }
};

const taskService = {
  async getAll() {
    await delay(300);
    return [...loadTasksFromStorage()];
  },

  async getById(id) {
    await delay(200);
    const tasks = loadTasksFromStorage();
    const task = tasks.find(t => t.Id === parseInt(id));
    return task ? { ...task } : null;
  },

  async create(taskData) {
    await delay(300);
    const tasks = loadTasksFromStorage();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.Id)) + 1 : 1;
    
    const newTask = {
      Id: newId,
      title: taskData.title,
      description: taskData.description || "",
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const updatedTasks = [...tasks, newTask];
    saveTasksToStorage(updatedTasks);
    return { ...newTask };
  },

  async update(id, taskData) {
    await delay(250);
    const tasks = loadTasksFromStorage();
    const index = tasks.findIndex(t => t.Id === parseInt(id));
    
    if (index === -1) {
      throw new Error("Task not found");
    }

    const updatedTask = {
      ...tasks[index],
      ...taskData,
      Id: tasks[index].Id,
      createdAt: tasks[index].createdAt,
      updatedAt: new Date().toISOString()
    };

    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    saveTasksToStorage(updatedTasks);
    return { ...updatedTask };
  },

  async delete(id) {
    await delay(250);
    const tasks = loadTasksFromStorage();
    const updatedTasks = tasks.filter(t => t.Id !== parseInt(id));
    saveTasksToStorage(updatedTasks);
    return true;
  },

  async toggleComplete(id) {
    await delay(200);
    const tasks = loadTasksFromStorage();
    const task = tasks.find(t => t.Id === parseInt(id));
    
    if (!task) {
      throw new Error("Task not found");
    }

    return await this.update(id, { completed: !task.completed });
  }
};

export default taskService;