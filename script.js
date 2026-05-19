const phrases = [
  'Cybersecurity Graduate',
  'Homelab Engineer',
  'Service Member',
  'Family System Administrator',
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const el = document.getElementById('typed');

function type() {
  const current = phrases[phraseIndex];

  if (deleting) {
    el.textContent = current.slice(0, charIndex--);
  } else {
    el.textContent = current.slice(0, charIndex++);
  }

  let delay = deleting ? 50 : 90;

  if (!deleting && charIndex === current.length + 1) {
    delay = 1800;
    deleting = true;
  } else if (deleting && charIndex === -1) {
    deleting = false;
    charIndex = 0;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));
