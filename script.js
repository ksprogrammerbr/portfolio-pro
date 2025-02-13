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