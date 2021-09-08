const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
    <div id="main-container">
    <div id="add-button"></div>
    <div id="vocabForm"></div>
    <div id="vocab"></div>
    </div>`;
};
export default domBuilder;
