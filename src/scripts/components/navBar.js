const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <div class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
  <li class="nav-item">
    <a class="nav-link" id="all-vocab"href="#">All Vocab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" id="new-vocab">New Entry</a>
  </li>
  <div id="logout-button">
  <button id="google-auth" class="btn btn-danger">SIGN OUT</button>
  </div>
</div>
      `;
};
export default navBar;
