// import _ from 'lodash';
// import { result } from 'lodash';
// import leaderboard from './leaderboard.js';
import './style.css';

const newurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'i6EDpTJ9iO4YHhbyee9i';

const form = document.querySelector('#totalInfo');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: data,
  });

  return response.json();
}

form.addEventListener('click', () => {
  const user = nameInput.value;
  const score = scoreInput.value;
  const dataToSend = JSON.stringify({ score, user });
  postData(`${newurl}games/${id}/scores/`, dataToSend)
    .then((json) => {
      console.log(json); // Handle success
    })
    .catch((err) => {
      console.log(err); // Handle errors
    });
  nameInput.value = '';
  scoreInput.value = '';
});

async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  return response.json();
}

const myScores = () => {
  getData(`${newurl}games/${id}/scores/`).then((res) => {
    document.getElementById('scoreTable').innerHTML = res.result.map((items) => `
   <div class="left">
   <p class="eachScore">${items.user}</p>
   <span>
   <p class="numberSc"> ${items.score}</p>
   </span>
   </div>`).join(' ');
  });
};

myScores();

const refresh = document.getElementById('refreshBtn');

refresh.addEventListener('click', () => {
  myScores();
});
