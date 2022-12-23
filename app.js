const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

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

// contact form validation

const errorMessage = (value) => {
  document.getElementById('error').innerHTML += `<p>${value}</p>`;
};

const emailInput = document.getElementById('email');
const emailInputLowercase = emailInput.value.toLowerCase();

document.getElementById('formSubmit').addEventListener('click', () => {
  if (emailInput === emailInputLowercase) {
    errorMessage('form submitted');
  } else {
    errorMessage('please type email in lowercase');
  }
});
