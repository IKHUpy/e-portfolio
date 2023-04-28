const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll('.scroll-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('random-shapes-container');
    const shapes = ['box', 'circle', 'line'];
    const shapeCount = 10;
  
    for (let i = 0; i < shapeCount; i++) {
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const shape = document.createElement('div');
      shape.classList.add('shape', shapeType);
      shape.style.top = `${Math.random() * 100}vh`;
      shape.style.left = `${Math.random() * 100}vw`;
  
      container.appendChild(shape);
    }
  });
  