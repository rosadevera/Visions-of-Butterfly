document.addEventListener('DOMContentLoaded', function() {
  // Get the .header-right element
  const headerRight = document.querySelector('.header-right');
  const smallElement = document.querySelector('.small'); // New for beep sound
  let clickCount = 0;

  // Add click event listener to the .header-right div
  headerRight.addEventListener('click', () => {
    clickCount++;

    // Play the appropriate audio file based on the click count
    let audioFile = '';
    if (clickCount === 1) {
      audioFile = 'media/metamorphosex.mp3';
    } else if (clickCount === 2) {
      audioFile = 'media/a change agency.mp3';
    }
    const audio = new Audio(audioFile);
    audio.play();

    // Show the appropriate speech div based on the click count
    const speechDiv = document.querySelector('.speech' + clickCount);
    if (speechDiv) {
      speechDiv.classList.remove('hidden');
      
      // Set a timeout to add the 'hidden' class back after 10 seconds
      setTimeout(() => {
        speechDiv.classList.add('hidden');
      }, 10000); // 10 seconds in milliseconds
    }
    
    // If it's the first click, show the first speech div explicitly
    if (clickCount === 1) {
      const firstSpeechDiv = document.querySelector('.speech1');
      if (firstSpeechDiv) {
        firstSpeechDiv.classList.remove('hidden');
      }
    }

    // Reset clickCount if it reaches 2
    if (clickCount === 2) {
      clickCount = 0;
    }
  });

  // Play the beep sound when hovering or holding down on .small
  function playBeep() {
    const audio = new Audio('./media/beep.mp3');
    audio.play();
  }

  // Play the beep sound when hovering over .small
  smallElement.addEventListener('mouseover', playBeep);

  // Play the beep sound when holding down on .small
  smallElement.addEventListener('mousedown', playBeep);

  // Stop the beep sound when mouse is released (optional)
  smallElement.addEventListener('mouseup', () => {
    const audio = new Audio('./media/beep.mp3');
    audio.pause();
    audio.currentTime = 0; // Reset the sound
  });

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
