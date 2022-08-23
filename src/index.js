// import _ from 'lodash';
import './style.css';

const wireframe = [
  {
    id:0,
    name: 'test1',
    score: '5000',
  },
  {
    id:1,
    name: 'test1',
    score: '5000',
  },
  {
    id:2,
    name: 'test1',
    score: '5000',
  },
  {
    id:3,
    name: 'test1',
    score: '5000',
  },
  {
    id:4,
    name: 'test1',
    score: '5000',
  },
];

document.getElementById('scoreTable').innerHTML = wireframe.map((items) => `<div class="test1">
<p class="eachScore">${items.name}: ${items.score}<p>`).join('');