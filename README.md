# JSL05 Challenge – Kanban Board with Persistence & Drag-and-Drop

## Overview

This solution builds upon JSL04 by adding powerful new features to the Kanban task board:

- Fully **data-driven rendering** of tasks and columns
- A reusable **modal form** for adding new tasks
- Persistent state using **`localStorage`**
- Responsive **drag-and-drop** across columns
- A **light/dark theme toggle**
- A collapsible **sidebar navigation**

The result is a highly interactive, single-board Kanban application with maintainable architecture and clean UX.

---

## Learning Goals

By completing JSL05, you will:

- Persist application state using `localStorage`
- Build modular UI logic with vanilla JavaScript
- Enable keyboard/mouse interaction with modal dialogs
- Implement drag-and-drop functionality with the DOM API
- Write reusable functions for UI creation and interaction
- Maintain user preferences (e.g. theme) between sessions

---

## File Structure

├── index.html # App shell: sidebar, board layout, modal
├── styles.css # Complete styling for light/dark themes
├── initialData.js # Initial task dataset (used if no localStorage exists)
├── scripts.js # State, rendering, modal, drag/drop, event handling
└── README.md # ← you are here


---

## Key Features

| Feature                     | Description                                                       |
|----------------------------|-------------------------------------------------------------------|
| Dynamic Task Board         | Tasks are created and rendered based on JavaScript data only      |
| Add New Task               | Modal with form to enter title, description, and status           |
| Drag-and-Drop              | Move tasks between columns with smooth interaction                |
| Persistent Storage         | Tasks and theme are stored in `localStorage`                      |
| Theme Toggle               | Light/dark mode toggle saved per user                             |
| Hideable Sidebar           | Collapse and reopen the sidebar to maximize space                 |
| Mobile Responsive          | Stacks columns vertically under 900px width                       |

---

## JavaScript Functions at a Glance

| Function             | Responsibility                                                           |
|----------------------|---------------------------------------------------------------------------|
| `uid()`              | Generates a pseudo-unique ID for new tasks                                |
| `loadTasks()`        | Loads tasks from localStorage or falls back to `initialTasks`            |
| `saveTasks()`        | Saves the current task list to localStorage                              |
| `renderAll()`        | Clears and re-renders all columns with the current task state            |
| `createTaskElement()`| Creates and returns a DOM element for an individual task card            |
| `openModal()`        | Opens and resets the task modal for a new entry                          |
| `closeModal()`       | Closes the modal overlay and clears focus                                |
| `setUpDnD()`         | Wires up drag-and-drop listeners to task elements and drop zones         |
| `handleDrop()`       | Moves task to new column and updates state + storage                     |

---

## Running the Solution

1. **Clone or download** the repo
2. Open `index.html` in a modern browser (no server required)
3. Try these:
   - Add a new task using the `+ Add New Task` button
   - Drag tasks between columns (To Do, Doing, Done)
   - Refresh the page — your tasks persist!
   - Toggle dark mode 🌙 in the sidebar
   - Click “Hide Sidebar” and use the floating “☰ Show Sidebar” button

---

## Tips & Testing

- Press `Esc` to close the modal
- Use the browser’s DevTools → Console:
  ```js
  localStorage.removeItem('kanban.tasks'); // Reset all tasks
  localStorage.removeItem('kanban.theme'); // Reset theme
  location.reload(); // Refresh the app
