import loadPage from './loadPage';
import blankProjectLoad from './project-manager';
import todos from './todos';
import projects from './projects';

//*call dom manipulation module to take care of the UI
loadPage();
//*call blank project on first land
blankProjectLoad();

//*include modules for manipulating  the projects and todos

projects();
todos();
