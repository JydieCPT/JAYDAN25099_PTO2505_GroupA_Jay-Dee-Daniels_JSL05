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

// =========================
// Sidebar Toggle
// =========================

hideSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('hidden');
  showSidebarBtn.hidden = false;
});
showSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('hidden');
  showSidebarBtn.hidden = true;
});

// =========================
// Create Task
// =========================

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!taskForm.reportValidity()) return;

  const formData = new FormData(taskForm);
  const newTask = {
    id: uid(),
    title: formData.get('title').trim(),
    description: formData.get('description').trim(),
    status: formData.get('status')
  };
  tasks.push(newTask);
  saveTasks();
  renderAll();
  closeModal(); // this will now come from modal.js
});

// =========================
// Render
// =========================

function renderAll() {
  Object.values(columns).forEach(col => col.innerHTML = '');
  const counts = { todo: 0, doing: 0, done: 0 };

  tasks.forEach(task => {
    counts[task.status]++;
    const el = createTaskElement(task);
    columns[task.status].appendChild(el);
  });

  counters.todo.textContent = `(${counts.todo})`;
  counters.doing.textContent = `(${counts.doing})`;
  counters.done.textContent = `(${counts.done})`;

  setUpDnD();
}

function createTaskElement(task) {
  const div = document.createElement('div');
  div.className = 'task';
  div.draggable = true;
  div.dataset.id = task.id;

  const title = document.createElement('div');
  title.className = 'task-title';
  title.textContent = task.title;

  div.appendChild(title);
  return div;
}

// =========================
// Drag & Drop
// =========================

function setUpDnD() {
  const taskEls = document.querySelectorAll('.task');
  const dropZones = document.querySelectorAll('.tasks');

  taskEls.forEach(task => {
    task.addEventListener('dragstart', handleDragStart);
    task.addEventListener('dragend', handleDragEnd);
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
    zone.addEventListener('dragenter', () => zone.classList.add('drag-over'));
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  });
}

let draggedId = null;

function handleDragStart(e) {
  draggedId = this.dataset.id;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function handleDragEnd() {
  this.classList.remove('dragging');
  draggedId = null;
}
function handleDragOver(e) {
  e.preventDefault();
}
function handleDrop(e) {
  e.preventDefault();
  const status = this.parentElement.dataset.status;
  const idx = tasks.findIndex(t => String(t.id) === String(draggedId));
  if (idx !== -1) {
    tasks[idx].status = status;
    saveTasks();
    renderAll();
  }
}

// =========================
// Utils
// =========================

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
