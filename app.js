const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
const mainContainer = document.querySelector('.enclose');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
  });
});

// serving main conetent dynamically

const cardContent = [
  {
    id: 'cardOne',
    title: 'Tonic',
    fields: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads. no accounts or sign-ups are required.',
    stack: ['html', 'css', 'javascript'],
    images: {
      contentImage: 'images/Snapshoot-Portfolio.png',
      counter: 'images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    fields: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads. no accounts or sign-ups are required.',
    stack: ['html', 'css', 'javascript'],
    images: {
      contentImage: 'images/Snapshoot-Portfolio1.png',
      counter: 'images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardThree',
    title: 'Multi-Post Stories',
    fields: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads. no accounts or sign-ups are required.',
    stack: ['html', 'css', 'javascript'],
    images: {
      contentImage: 'images/Snapshoot-Portfolio2.png',
      counter: 'images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardFour',
    title: 'Multi-Post Stories',
    fields: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads. no accounts or sign-ups are required.',
    stack: ['html', 'css', 'javascript'],
    images: {
      contentImage: 'images/Snapshoot-Portfolio3.png',
      counter: 'images/Counter.png',
    },
    button: 'See Project',
  },
];

cardContent.forEach((item) => {
  mainContainer.innerHTML += `<div class="content">
    <img class="item item1" src="${item.images.contentImage}" alt="first project image">
    <div class="card">
        <h2 class="item item2">${item.title}</h2>
        <div>
            <ul class="row">
                <li class="item item3">${item.fields[0]}</li>
                <li><img class="item item4" src=" ${item.images.counter}" alt="a dot image"></li>
                <li class="item item5">${item.fields[1]}</li>
                <li><img class="item item6" src="${item.images.counter}" alt="second dot image"></li>
                <li class="item item7">${item.fields[2]}</li>
            </ul>
        </div>
        <p class="item item8">${item.description}</p>
        <div class="list">
            <ul class="skills">
                <li class="html stack"><button>${item.stack[0]}</button></li>
                <li class="css stack"><button>${item.stack[1]}</button></li>
                <li class="javascript stack"><button>${item.stack[2]}</button></li>
            </ul>
        </div>
        <div class="click">
            <button class="btn" type="button">${item.button}</button>
        </div>
    </div>
</div>`;
});