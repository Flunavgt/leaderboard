// import _ from 'lodash';
import { result } from 'lodash';
import leaderboard from './leaderboard';
import './style.css';


// const wireframe = [
//   {
//     id: 0,
//     name: 'test1',
//     score: '5000',
//   },
//   {
//     id: 1,
//     name: 'test2',
//     score: '5000',
//   },
//   {
//     id: 2,
//     name: 'test3',
//     score: '5000',
//   },
//   {
//     id: 3,
//     name: 'test4',
//     score: '5000',
//   },
//   {
//     id: 4,
//     name: 'test5',
//     score: '5000',
//   },
// ];

// document.getElementById('scoreTable').innerHTML = wireframe.map((items) => `
// <p class="eachScore">${items.name}: ${items.score}</p>`).join(' ');

const newurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'XJZrqxsxqJ4Bo67bnIka';

let myleaderboard = new leaderboard('tetris', id);


const form = document.querySelector('#totalInfo');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score')

form.addEventListener('click', () => {
  const user = nameInput.value;
  const score = scoreInput.value;
  const dataToSend = JSON.stringify({ "score": score, "user":`${user}`})
  _postData(`${newurl}games/${id}/scores/`, dataToSend )
  .then(json => {
      console.log(json) // Handle success
  })
  .catch(err => {
      console.log(err) // Handle errors
  });
  nameInput.value = '';
  scoreInput.value = '';
});

async function _postData(url = '', data = {}) {
  const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: data
  });
  
  return response.json();
}

async function _getData(url = '') {
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
  const info = _getData(`${newurl}games/${id}/scores/`).then(res =>{
    document.getElementById('scoreTable').innerHTML = res['result'].map((items) => `
    <p class="eachScore">${items.user}: ${items.score}</p>`).join(' ');
  });
}

myScores();


const refresh = document.getElementById('refreshBtn');

refresh.addEventListener('click', () => {
  myScores();
})
