import clearDom from '../helpers/clearDom';

const editVocabForm = (obj) => {
  clearDom();
  document.querySelector('#vocabForm').innerHTML = `
        <form id="edit-vocab-form">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" value="${obj.title}">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">description</label>
        <input type="text" class="form-control" id="description" value="${obj.description}">
      </div>
    <div class="mb-3">
    <label for="language" class="form-label">Language/Tech</label>
    <select id="language" class="form-select" value="${obj.firebaseKey}">
      <option>Tech 1</option>
      <option>Tech 2</option>
      <option>Tech 3</option>
    </select>
  </div>
      <button type="submit" id="update-vocab--${obj.firebaseKey}" class="btn btn-primary">Submit</button>
    </form>
        `;
};
export default editVocabForm;
