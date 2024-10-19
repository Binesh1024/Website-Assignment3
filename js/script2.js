// You can add any interactivity here if needed for the assessments.
// For example, if you plan to handle clicking "Take the Test" buttons:

document.querySelectorAll('.assessment-btn').forEach(button => {
  button.addEventListener('click', () => {
      alert("Starting the selected assessment!");
  });
});
