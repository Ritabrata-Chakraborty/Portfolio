// Alternating title letter sizes
document.addEventListener('DOMContentLoaded', function() {
  // Target all section headings
  const selectors = [
    '.home-section-heading',
    'h1.section-heading', 
    'h2.section-heading',
    '.page-heading h1',
    'section h1',
    'section h2.section-heading',
    '.home-section h1',
    '.featurette-heading'
  ];
  
  // Get all heading elements
  const headings = document.querySelectorAll(selectors.join(', '));
  
  headings.forEach(heading => {
    const text = heading.textContent.trim();
    const upperText = text.toUpperCase();
    
    // Clear existing content
    heading.textContent = '';
    heading.classList.add('alternating-title');
    
    // Create spans for each character
    for (let i = 0; i < upperText.length; i++) {
      const span = document.createElement('span');
      span.textContent = upperText[i];
      
      // Alternate between large and small - first letter is large (index 0)
      if (i % 2 === 0) {
        span.classList.add('letter-large');
      } else {
        span.classList.add('letter-small');
      }
      
      heading.appendChild(span);
    }
  });
});

