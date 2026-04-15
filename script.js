(function() {
  const element = document.getElementById('waveText');
  if (!element) return;
  
  const text = element.textContent.trim();
  const letters = text.split('');
  
  // Clear the element and wrap each letter in a span
  element.textContent = '';
  element.classList.add('wave-text');
  
  letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.classList.add('wave-letter');
      // Create a wave effect: delay increases gradually, then decreases?
      // Use a sinusoidal pattern for a smooth continuous wave
      // For a simple left-to-right wave: delay = index * 0.1s
      // But we can make it more organic with a sine wave pattern:
      // delay = (index * 0.12) % (total duration) but we want it continuous.
      // Using a stagger of 0.1s works well.
      const delay = index * 0.1; // seconds
      span.style.animationDelay = `${delay}s`;
      element.appendChild(span);
  });
})();