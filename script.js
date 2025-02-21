const image = document.querySelector(".apresentacao__imagem");

// Removido o mousemove e mouseleave para .apresentacao__imagem, pois o efeito 360º será aplicado em .notebook-icon

document.addEventListener("mousemove", parallax);
const body = document.querySelector("body");

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${(_mouseX - _w) * 0.01}%, ${(_mouseY - _h) * 0.01}%`;
  let _depth2 = `${(_mouseX - _w) * 0.02}%, ${(_mouseY - _h) * 0.02}%`;
  let _depth3 = `${(_mouseX - _w) * 0.03}%, ${(_mouseY - _h) * 0.03}%`;
  let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  console.log(x);
  body.style.backgroundPosition = x;
}

// Removido o mouseleave para .apresentacao__imagem

const projectItems = document.querySelectorAll(".projetos__item");

projectItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const x = (e.offsetX / item.offsetWidth) * 10 - 5;
    const y = (e.offsetY / item.offsetHeight) * 10 - 5;

    item.style.transition = 'transform 0.3s ease'; // Adicionado transição suave
    item.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transition = 'transform 0.5s ease'; // Transição mais lenta ao voltar
    item.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

const componentImage = document.querySelector(".notebook-icon img");

// Removido o mousemove para .notebook-icon img, pois o efeito 360º será controlado pelo hover no CSS

// Removido o mouseleave para .notebook-icon img

const articleItems = document.querySelectorAll(".artigos__item");

articleItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const x = (e.offsetX / item.offsetWidth) * 10 - 5; // Reduzido de 20 para 10
    const y = (e.offsetY / item.offsetHeight) * 10 - 5; // Reduzido de 20 para 10

    item.style.transition = 'transform 0.3s ease'; // Adicionado transição suave
    item.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transition = 'transform 0.5s ease'; // Transição mais lenta ao voltar
    item.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// Particles.js Configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#64ffda'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#64ffda',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add hover effect to skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // Add parallax effect to hero section
  const heroSection = document.querySelector('.hero-section');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    heroSection.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  });

  // Add active class to current section in navigation
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.cabecalho__menu__link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Add tilt effect to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // Add typing effect to hero title
  const heroTitle = document.querySelector('.neon-text');
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 1000);
});

// Animação do gradiente de fundo
const gradientSphere = document.querySelector('.gradient-sphere');
const particles = document.querySelector('.particles');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gradientSphere.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    particles.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
});

// Texto para o efeito de digitação
const phrases = ['Front-end de qualidade'];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let isPaused = false;

function typeEffect() {
    const typingText = document.querySelector('.typing-text');
    const currentText = phrases[currentPhrase];
    
    if (!typingText) return;

    if (!isDeleting && !isPaused) {
        typingText.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        
        if (currentChar === currentText.length) {
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
            }, 2000);
        }
    } else if (isDeleting && !isPaused) {
        typingText.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
        
        if (currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(() => {
                isPaused = false;
            }, 500);
        }
    }
    
    const speedFactor = isDeleting ? 2 : 1;
    const speed = isPaused ? 2000 : 100 / speedFactor;
    
    setTimeout(typeEffect, speed);
}

// Iniciar efeito de digitação
typeEffect();