function toggleFAQ(button) {
    // Get the content div that follows the button
    const content = button.nextElementSibling;
    
    // Get the arrow icon
    const arrow = button.querySelector('svg');
    
    // Toggle the content visibility
    content.classList.toggle('hidden');
    
    // Rotate the arrow when expanded
    if (content.classList.contains('hidden')) {
      arrow.style.transform = 'rotate(0deg)';
    } else {
      arrow.style.transform = 'rotate(180deg)';
    }
  }