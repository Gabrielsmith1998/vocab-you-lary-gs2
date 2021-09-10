const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <div class="navbar fixed-top navbar-expand-lg navbar bg-dark mb-4">
  <i class="fas fa-biohazard fa-3x"></i>
  <li class="nav-item">
    <a class="nav-link" href="#" id="new-vocab">New Entry</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="all-vocab"href="#">All Vocab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" id="tech-1">Tech 1</a>
  </li>
<li class="nav-item">
<a class="nav-link" href="#" id="tech-2">Tech 2</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#" id="tech-3">Tech 3</a>
</li>
  <div id="logout-button">
  <button id="google-auth" class="btn btn-danger">SIGN OUT</button>
  </div>
</div>
      `;
};
export default navBar;
