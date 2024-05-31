const info = {
  email: 'hooyo@gmail.com',
  pin: '1234',
};

const info2 = {
  email: 'aabe@gmail.com',
  pin: '1234',
};

const accounts = [info, info2];

const main = document.querySelector('.hidden');
const login = document.querySelector('.login-part');
const btn = document.querySelector('.btn');
const inputemail = document.getElementById('login-email');
const inputpass = document.getElementById('login-password');

// Event handler 
// btn.addEventListener('click', function (e) {
//   e.preventDefault();
  
//   const account = accounts.find(acc => acc.email === inputemail.value && acc.pin === inputpass.value);
  
//   if (account) {
//       alert('Hello');
//       // Perform login action, e.g., show main content, hide login part, etc.
//       main.classList.remove('hidden');
//       login.style.display = 'none';
//   } else {
//       alert('Wrong user or password');
//   }
// });
const clickbtn = document.getElementById('icon-btn');
const sm_screen = document.querySelector('.sm-screem');

clickbtn.addEventListener('click', function(e) {
  e.preventDefault();
  sm_screen.classList.toggle('h-hidden');

});
