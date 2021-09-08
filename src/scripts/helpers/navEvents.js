import vocabForm from '../addVocabForm';
import { getVocab } from '../data/vocabData';
import showVocab from '../vocab';
import signOut from './signOut';

const navEvents = () => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  document.querySelector('#new-vocab').addEventListener('click', () => {
    vocabForm();
  });

  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};
export default navEvents;
