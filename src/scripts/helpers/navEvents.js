import vocabForm from '../addVocabForm';
import {
  getTechOne,
  getTechThree,
  getTechTwo,
  getVocab
} from '../data/vocabData';
import showVocab from '../vocab';
import signOut from './signOut';

const navEvents = () => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  document.querySelector('#new-vocab').addEventListener('click', () => {
    vocabForm();
  });

  document.querySelector('#tech-1').addEventListener('click', () => {
    getTechOne().then(showVocab);
  });

  document.querySelector('#tech-2').addEventListener('click', () => {
    getTechTwo().then(showVocab);
  });

  document.querySelector('#tech-3').addEventListener('click', () => {
    getTechThree().then(showVocab);
  });

  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};
export default navEvents;
