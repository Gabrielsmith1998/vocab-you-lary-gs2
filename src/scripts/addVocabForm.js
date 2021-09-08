import clearDom from './helpers/clearDom';

const vocabForm = (obj = {}) => {
  clearDom();
  document.querySelector('#vocabForm').innerHTML = `
      <form>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" id="title">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description">
    </div>
  <div class="mb-3">
  <label for="language" class="form-label">Language/Tech</label>
  <select id="language" class="form-select" value="${obj.language}">
    <option>Tech 1</option>
    <option>Tech 2</option>
    <option>Tech 3</option>
  </select>
</div>
    <button type="submit" id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary">Submit</button>
  </form>
      `;
};
export default vocabForm;
