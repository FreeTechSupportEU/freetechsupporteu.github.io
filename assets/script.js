window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (header) {
    window.scrollY > 20 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  }
});

function copyEmail() {
  const emailElement = document.getElementById('email-to-copy');
  if (emailElement) {
    const email = emailElement.innerText;
    navigator.clipboard.writeText(email).then(() => {
      const feedback = document.getElementById('copy-feedback');
      if (feedback) {
        feedback.style.display = 'inline';
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 2000);
      }
    }).catch(err => {
      console.error('Clipboard error:', err);
    });
  }
}
