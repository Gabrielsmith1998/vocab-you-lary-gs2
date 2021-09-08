import navBar from '../components/navBar';
import { getVocab } from '../data/vocabData';
import domBuilder from '../domBuilder';
import navEvents from '../helpers/navEvents';
import domEvents from '../helpers/vocabEvents';
import showVocab from '../vocab';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  navBar();
  navEvents();
  getVocab().then(showVocab);
};
export default startApp;
