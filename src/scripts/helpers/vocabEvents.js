import editVocabForm from '../data/editVocabForm';
import {
  createVocab,
  deleteVocab,
  getSingleVocab,
  updateVocab
} from '../data/vocabData';
import showVocab from '../vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
      };
      createVocab(vocabObject).then((vocabArray) => showVocab(vocabArray));
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => editVocabForm(vocabObj));
    }

    if (e.target.id.includes('delete-vocab')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteVocab(id).then(showVocab);
      }
    }

    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        firebaseKey
      };
      updateVocab(vocabObject).then(showVocab);
    }
  });
};
export default domEvents;
