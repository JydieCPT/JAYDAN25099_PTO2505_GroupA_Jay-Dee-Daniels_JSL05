📌 JSL05 – Kanban Task Board

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📖 Description of Project

JSL05 is a single-board Kanban task management application built with vanilla JavaScript, HTML, and CSS. It allows users to create, move, and persist tasks using a responsive UI. Key enhancements over the previous challenge (JSL04) include drag-and-drop functionality, persistent localStorage, and user-friendly modals for task entry. The app is also mobile-responsive and includes a dark/light theme toggle as well as a collapsible sidebar for a clean and focused user experience.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠 List of Technologies

HTML5 – Semantic structure of the application

CSS3 – Custom styling including responsive design and themes

JavaScript (ES6 Modules) – App logic, state management, UI interaction

localStorage API – For persisting tasks and theme preferences

Drag-and-Drop DOM API – For interactive task movement between columns

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
✨ List of Features
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🔧 Core Functionality

Task Creation Modal
Easily add tasks by entering a title, description, and selecting a status (To Do, Doing, Done).

Dynamic Rendering
Tasks are rendered based entirely on JavaScript data, not hardcoded HTML.

Drag-and-Drop
Move tasks between columns using intuitive drag-and-drop interaction.

Persistent Storage
Task data and theme preference are saved to localStorage and reloaded on page refresh.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🎨 UI Enhancements

Theme Toggle
Switch between light and dark mode using a toggle switch in the sidebar.

Collapsible Sidebar
Hide or show the sidebar for a distraction-free experience on smaller screens.

Mobile Responsiveness
Layout adapts for smaller viewports by stacking columns vertically.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧪 Developer Utilities

Reset Helpers via Console
Use the browser console to quickly reset tasks or theme:

localStorage.removeItem('kanban.tasks');

localStorage.removeItem('kanban.theme');

location.reload();

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Setup Instructions

* Download Folder.
* Download Zip on GitHub.
* Save on Desktop.
* Open Folder on VS Code.
* Go Live Onto Browser.
