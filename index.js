const arrows = document.getElementsByClassName('fa-chevron-down');

const array = Array.from(arrows);

array.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.parentElement.parentElement.parentElement
      .nextElementSibling.classList.toggle('hidden');
    item.classList.toggle('rotate');
    e.preventDefault();
  });
});

console.log(arrows);