window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (header) {
    window.scrollY > 20 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  }
});

// Robust and Responsive Copy Email Function with Light Green Feedback
function copyEmail() {
  const emailElement = document.getElementById('email-to-copy');
  const defaultTextSpan = document.querySelector('.copy-btn span:first-child');
  const feedbackSpan = document.getElementById('copy-feedback');

  if (!emailElement || !defaultTextSpan || !feedbackSpan) return;

  const email = emailElement.innerText;
  
  navigator.clipboard.writeText(email)
    .then(() => {
      // Success: Show feedback message inside the button
      defaultTextSpan.style.display = 'none';
      feedbackSpan.innerText = 'Copied!';
      feedbackSpan.style.color = '#90ee90'; /* Light green color */
      feedbackSpan.style.display = 'inline';

      setTimeout(() => { 
          // Revert back to default text after 2 seconds
          feedbackSpan.style.display = 'none';
          defaultTextSpan.style.display = 'inline';
      }, 2000);
    })
    .catch(err => {
      // Error: Fallback to prompt
      console.error('Clipboard API error:', err);
      prompt("Copy email address manually (Ctrl+C/Cmd+C):", email);
    });
}


