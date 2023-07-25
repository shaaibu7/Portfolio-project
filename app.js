const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
const mainContainer = document.querySelector('.enclose');
// const popupWindow = document.querySelector('.window-popup');
// const parentContainer = document.querySelector('.parent-container');

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

// serving main content dynamically

const windowPopup = [
  {
    id: 'cardOne',
    title: 'Crypto app',
    fields: ['Crypto', 'Coins', '2023'],
    description:
      'An application that empowers you with real-time cryptocurrency data to make informed decisions and thrive in the ever-changing market landscape.',
    stack: ['React', 'Redux', 'javascript'],
    // stackTwo: ['github', 'ruby', 'bootstrap'],
    images: {
      contentImage: 'images/cryptoapp.png',
      counter: 'images/Counter.png',
      liveImage: 'images/see-live.png',
      sourceImage: 'images/see-source.png',
      cancelImage: 'images/xicon.png',
    },
    btn1: 'See live',
    btn2: 'See source',
    navigation: {
      live: 'https://641d7eb37e27cf0008c5a34c--cryptocurrency-livestat.netlify.app/',
      source: 'https://github.com/shaaibu7/cryptocurrency-app',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Github Finder',
    fields: ['Finder', 'Github', '2023'],
    description:
      'A web application that consumes the GitHub API and returns user profiles by searching their usernames.',
    stack: ['html', 'Bootstrap', 'javascript'],
    stackTwo: ['github', 'ruby', 'bootstrap'],
    images: {
      contentImage: 'images/githubupdated.png',
      counter: 'images/Counter.png',
      liveImage: 'images/see-live.png',
      sourceImage: 'images/see-source.png',
      cancelImage: 'images/xicon.png',
    },
    btn1: 'See live',
    btn2: 'See source',
    navigation: {
      live: 'https://shaaibu7.github.io/GitHub-Finder-Web-App/src/',
      source: 'https://github.com/shaaibu7/GitHub-Finder-Web-App',
    },
    button: 'See Project',
    styling: 'reverse',
  },

  {
    id: 'cardThree',
    title: 'Bookstore',
    fields: ['Bookstore', 'Track', '2023'],
    description:
      'This application allows user to keep track of books he has read with functionality to add and remove books. built with react and redux.',
    stack: ['React', 'Redux', 'javascript'],
    stackTwo: ['github', 'ruby', 'bootstrap'],
    images: {
      contentImage: 'images/bookstore.png',
      counter: 'images/Counter.png',
      liveImage: 'images/see-live.png',
      sourceImage: 'images/see-source.png',
      cancelImage: 'images/xicon.png',
    },
    btn1: 'See live',
    btn2: 'See source',
    navigation: {
      live: 'https://bookstore-tracker.netlify.app/',
      source: 'https://github.com/shaaibu7/Bookstore-with-react',
    },
    button: 'See Project',
  },

  {
    id: 'cardFour',
    title: 'ToDo List app',
    fields: ['ToDo', 'Schedule', '2023'],
    description:
      'A To-Do-List app designed to schedule tasks and manage time. Users can add a task, delete a task, edit a task, and update tasks.',
    stack: ['html', 'css', 'javascript'],
    stackTwo: ['github', 'ruby', 'bootstrap'],
    images: {
      contentImage: 'images/todolist.png',
      counter: 'images/Counter.png',
      liveImage: 'images/see-live.png',
      sourceImage: 'images/see-source.png',
      cancelImage: 'images/xicon.png',
    },
    btn1: 'See live',
    btn2: 'See source',
    navigation: {
      live: 'https://timetrack-app.netlify.app/',
      source: 'https://github.com/shaaibu7/To-Do-List',
    },
    button: 'See Project',
    styling: 'reverse',
  },

  {
    id: 'cardFive',
    title: 'Budget app',
    fields: ['Plan', 'Spend', '2023'],
    description:
      'A Budget app that helps users monitor their spending and transactions by carefully keeping organized records.',
    stack: ['html', 'css', 'Ruby on rails'],
    stackTwo: ['github', 'ruby', 'bootstrap'],
    images: {
      contentImage: 'images/budgetnew.png',
      counter: 'images/Counter.png',
      liveImage: 'images/see-live.png',
      sourceImage: 'images/see-source.png',
      cancelImage: 'images/xicon.png',
    },
    btn1: 'See live',
    btn2: 'See source',
    navigation: {
      live: 'https://budget-c1ft.onrender.com/',
      source: 'https://github.com/shaaibu7/Budget-app',
    },
    button: 'See Project',
  },
  {
    id: 'cardSix',
    title: 'VR WORLD',
    fields: ['Experience', 'Reality', '2023'],
    description:
      'A web application where users can make reservations for different virtual reality studios. The platform where users are connected with a vr studio for an experience.',
    stack: ['React', 'Redux', 'Ruby on rails'],
    stackTwo: ['github', 'ruby', 'bootstrap'],
    images: {
      contentImage: 'images/vr.png',
      counter: 'images/Counter.png',
      liveImage: 'images/see-live.png',
      sourceImage: 'images/see-source.png',
      cancelImage: 'images/xicon.png',
    },
    btn1: 'See live',
    btn2: 'See source',
    navigation: {
      live: 'https://vr-world23.netlify.app/home',
      source: 'https://github.com/shaaibu7/vr-world-front-end',
    },
    button: 'See Project',
    styling: 'reverse',
  },
];

function Reverse() {

}

windowPopup.forEach((item) => {
  mainContainer.innerHTML += `<div class="content ${item.styling}">
    <img class="item item1" id="main-icon" src="${item.images.contentImage}" alt="first project image">
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
            <button btn-id="${item.id}" class="btn showBtn" type="button">${item.button}</button>
        </div>
    </div>
</div>`;
  Reverse();
});

// Implement logic for pop up window on click

// const btn = document.querySelector('.showBtn');
const sectionContent = document.querySelector('.window-popup');

// Cancel on click logic
function clickClose() {
  const cancelBtn = document.querySelector('.cancelImage');
  cancelBtn.addEventListener('click', () => {
    sectionContent.innerHTML = '';
  });
}

function Seelivebtn() {
  const cancelseeLIvebtn = document.querySelector('.btnPopup');
  cancelseeLIvebtn.addEventListener('click', () => {
    sectionContent.innerHTML = '';
  });

  const cancelseeLIvebtn1 = document.querySelector('.btnPops');
  cancelseeLIvebtn1.addEventListener('click', () => {
    sectionContent.innerHTML = '';
  });
}
const parent = document.querySelector('.parent-container');
parent.addEventListener('click', (e) => {
  const value = e.target.getAttribute('btn-id');

  windowPopup.forEach((item) => {
    if (value === item.id) {
      sectionContent.innerHTML += `<div class="pop-contain">
      <div class="mainPopup">
      <div class="headContainerPopup">
        <div class="contentPopup">
          <div class="headerPopup">
              <h2 class="h2Popup">${item.title}</h2>  
              <ul class="rowPopup">
                  <li class="itemPopup">${item.fields[0]}</li>
                  <li><img src="${item.images.counter}" alt="a dot image"></li>
                  <li class="itemPopup">${item.fields[1]}</li>
                  <li><img src="${item.images.counter}" alt="second dot image"></li>
                  <li class="itemPopup">${item.fields[2]}</li>
              </ul>
          </div>
          
          <div class="imagePopup">
              <img src="${item.images.cancelImage}" alt="" width="20px" class="cancelImage">
          </div>
        </div>
      </div>

      <div class="cardImage">
          <img src="${item.images.contentImage}" alt="" class="img-resize">
      </div>

      <div class="sectionTwoPopup">
          <div class="description">
              <p class="popupDescribe item8">${item.description}</p>
          </div>

          <div class="tech">
              <ul class="skillsPopup">
                  <li><button>${item.stack[0]}</button></li>
                  <li><button>${item.stack[1]}</button></li>
                  <li><button>${item.stack[2]}</button></li>
              </ul>


              <a href="${item.navigation.live}" target="_blank"><button class="btnPopup btnPopup1"><span>${item.btn1}</span> <img src="images/see-live.png" alt="" class="redirect"></button></a>
              <a href="${item.navigation.source}" target="_blank"><button class="btnPopup1 btnPops"><span>${item.btn2}</span> <img src="images/see-source.png" alt=""></button></a>
          </div>
      </div>

  </div>

      </div>
       
`;
    }
  });
  clickClose();
  Seelivebtn();
});
