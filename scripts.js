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

// =========================
// Elements
// =========================

const addTaskBtn = document.getElementById('addTaskBtn');
const modal = document.getElementById('taskModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const taskForm = document.getElementById('taskForm');

const themeSwitch = document.getElementById('themeSwitch');
const hideSidebarBtn = document.getElementById('hideSidebarBtn');
const showSidebarBtn = document.getElementById('showSidebarBtn');
const sidebar = document.getElementById('sidebar');

const columns = {
  todo: document.getElementById('col-todo'),
  doing: document.getElementById('col-doing'),
  done: document.getElementById('col-done')
};
const counters = {
  todo: document.getElementById('count-todo'),
  doing: document.getElementById('count-doing'),
  done: document.getElementById('count-done')
};

// =========================
// Init
// =========================

document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('kanban.theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);
  themeSwitch.checked = storedTheme === 'dark';
  renderAll();
});

// =========================
// Theme Toggle
// =========================

themeSwitch.addEventListener('change', () => {
  const theme = themeSwitch.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('kanban.theme', theme);
});

