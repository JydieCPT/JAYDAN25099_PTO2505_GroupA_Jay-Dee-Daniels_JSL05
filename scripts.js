// =========================
// State & Persistence
// =========================

const STORAGE_KEY = 'kanban.tasks';
let tasks = loadTasks();

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [
    { id: uid(), title: 'Launch Epic Career 🚀', description: '', status: 'todo' },
    { id: uid(), title: 'Conquer React 💜', description: '', status: 'todo' },
    { id: uid(), title: 'Understand Databases 🧠', description: '', status: 'todo' },
    { id: uid(), title: 'Crush Frameworks 📚', description: '', status: 'todo' },
    { id: uid(), title: 'Master JavaScript 💛', description: '', status: 'doing' },
    { id: uid(), title: 'Never Give Up 🏆', description: '', status: 'doing' },
    { id: uid(), title: 'Explore ES6 Features 🚀', description: '', status: 'done' },
    { id: uid(), title: 'Have fun🤯', description: '', status: 'done' }
  ];
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
