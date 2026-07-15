const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'Message sent';
      button.disabled = true;
    }

    setTimeout(() => {
      form.reset();
      if (button) {
        button.textContent = 'Send Message';
        button.disabled = false;
      }
    }, 1200);
  });
}
