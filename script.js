let ul = document.querySelector('ul');

document.querySelector('#menu-btn').onclick = () => {
  ul.classList.toggle('active');
};

const toggle_sale = document.querySelectorAll(".toggle_sale");
const toggle_open = document.querySelectorAll(".toggle_open")
toggle_sale.forEach((value, index) => {
  let toggle = true
  value.addEventListener('click', () => {
    toggle_open[index].style.display = toggle ? 'block' : 'none'
    toggle = !toggle
  })
})

// middle slider section
const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive
    ? carousel.scrollLeft + slideWidth
    : carousel.scrollLeft - slideWidth;
}