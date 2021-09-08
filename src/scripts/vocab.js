import clearDom from './helpers/clearDom';

const showVocab = (array) => {
  clearDom();
  array.forEach((vocab) => {
    document.querySelector('#vocab').innerHTML += `
          <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${vocab.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${vocab.description}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${vocab.language}</h6>
      <button class="btn btn-info" id="edit-vocab-btn--${vocab.firebaseKey}">Edit Vocab</button>
      <button class="btn btn-danger" id="delete-vocab--${vocab.firebaseKey}">Delete Vocab</button>
    </div>
  </div>
          `;
  });
};
export default showVocab;
