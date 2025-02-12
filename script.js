const image = document.querySelector(".apresentacao__imagem");

image.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / image.offsetWidth) * 20 - 10;
  const y = (e.offsetY / image.offsetHeight) * 20 - 10;

  image.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

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

image.addEventListener("mouseleave", () => {
  image.style.transform = "rotateX(0deg) rotateY(0deg)";
});
const projectItems = document.querySelectorAll(".projetos__item");

projectItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const x = (e.offsetX / item.offsetWidth) * 20 - 10;
    const y = (e.offsetY / item.offsetHeight) * 20 - 10;

    item.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

const componentImage = document.querySelector(".notebook-icon img");

componentImage.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / componentImage.offsetWidth) * 20 - 10;
  const y = (e.offsetY / componentImage.offsetHeight) * 20 - 10;

  componentImage.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

componentImage.addEventListener("mouseleave", () => {
  componentImage.style.transform = "rotateX(0deg) rotateY(0deg)";
});

const articleItems = document.querySelectorAll(".artigos__item");

articleItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const x = (e.offsetX / item.offsetWidth) * 20 - 10;
    const y = (e.offsetY / item.offsetHeight) * 20 - 10;

    item.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
