document.addEventListener('DOMContentLoaded', function() {
    // Get the fairy image element
    const fairyImage = document.querySelector('.header-right img');
  
    // Add click event listener to the fairy image
    fairyImage.addEventListener('click', () => {
      // Get the speech div
      const speechDiv = document.querySelector('.speech');
  
      // Remove the 'hidden' class from the speech div to reveal it
      if (speechDiv) {
        speechDiv.classList.remove('hidden');
        
        // Set a timeout to add the 'hidden' class back after 10 seconds
        setTimeout(() => {
          speechDiv.classList.add('hidden');
        }, 7000); // 10 seconds in milliseconds
      }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the .contact section
    const contactSection = document.querySelector('.contact');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        if (isInViewport(contactSection)) {
            contactSection.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
