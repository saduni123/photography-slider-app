const items = document.querySelectorAll('.carousel .list .item');
let current = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) item.classList.add('active');
  });
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % items.length;
  showSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
});
