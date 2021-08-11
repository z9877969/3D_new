import axios from 'axios';

const refs = {
  authForm: document.getElementById('auth'),
  email: document.querySelector('[name="email"]'),
  password: document.querySelector('[name="password"]'),
};

refs.authForm.addEventListener('submit', e => {
  e.preventDefault();
    const data = {
      email: refs.email.value,
      password: refs.password.value,
    };

  axios
    .get('https://callboard-backend.goit.global/auth/google')
    .then(res => console.log(res))
    .catch(e => console.log(e));
  //   console.log(data.email);
});

console.log(refs);
