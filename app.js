const items = document.querySelectorAll(".carousel .item");
let current = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.style.opacity = i === index ? "1" : "0";
    item.style.zIndex = i === index ? "1" : "0";
  });
}

function nextSlide() {
  current = (current + 1) % items.length;
  showSlide(current);
}

// Initial slide
showSlide(current);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
