const levelButtons = document.querySelectorAll(".level-button");
const sections = {
  "skill-level-button": document.getElementById("skill-level"),
  "profession-level-button": document.getElementById("profession-level"),
  "knowledge-level-button": document.getElementById("knowledge-level")
};



// Show skill level section and activate skill level button by default
if (sections["skill-level-button"]) {
  sections["skill-level-button"].classList.remove('hidden');
}

// Set initial active state for the first button
if (levelButtons.length > 0) {
  levelButtons[0].classList.add("bg-primaryBlue", "text-white", "rounded-xl");
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active classes from all buttons
    levelButtons.forEach((b) => {
      b.classList.remove("bg-primaryBlue", "text-white", "rounded-xl");
    });
    
    // Add active classes to clicked button
    button.classList.add("bg-primaryBlue", "text-white", "rounded-xl");

    // Hide all sections
    Object.values(sections).forEach(section => {
      if (section) {
        section.classList.add('hidden');
      }
    });

    // Show the corresponding section
    const sectionToShow = sections[button.id];
    if (sectionToShow) {
      sectionToShow.classList.remove('hidden');
    }
  });
});
