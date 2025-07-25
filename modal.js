// =========================
// Modal open/close
// =========================

addTaskBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function openModal() {
  taskForm.reset();
  modal.hidden = false;
  modalOverlay.hidden = false;
  document.getElementById('title').focus();
}

function closeModal() {
  modal.hidden = true;
  modalOverlay.hidden = true;
}
