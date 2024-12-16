document.addEventListener('DOMContentLoaded', function() {
    const testimonialSection = document.querySelector('#testimonials');
    const marqueeElements = testimonialSection.querySelectorAll('.animate-marqueeCard, .animate-marquee2');
  
    testimonialSection.addEventListener('mouseenter', () => {
      marqueeElements.forEach(element => {
        element.classList.add('paused');
      });
    });
  
    testimonialSection.addEventListener('mouseleave', () => {
      marqueeElements.forEach(element => {
        element.classList.remove('paused');
      });
    });
  });