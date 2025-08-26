import loadPage from './loadPage';
import projectManager from './project-manager';
import { createTodos } from './todos';
import projects from './projects';

//*call dom manipulation module to take care of the UI
loadPage();
//*call blank project on first land and start with the default project
const myProjectManager = projectManager(); //*the project manager object
// //* create default project
// const defaultProject = new projects('General Notes');
// console.log(defaultProject);
console.log('showing the array of projects');
console.log(myProjectManager.getProjects()); //logs the myProjects array with all the projects
//* todos array with todo lists
const todos = [
  createTodos(
    'Buy milk',
    '2% protein',
    '2025-09-05',
    'medium',
    true,
    'I want protein',
    ['go to freshco', 'buy yogurt']
  ),
  createTodos(
    'Buy rice',
    'Basmati',
    '2025-010-25',
    'low',
    undefined,
    'I need the carbs so i need rice',
    ['go to freshco', 'buy rice']
  ),
];
myProjectManager.getProjects()[0].addTodos(todos[0]); //add the todo object 0 to the myProjects array from project manager module
console.log('Default project showing buy milk which I added from todos arr');
console.log(myProjectManager.getDefaultProject()); //log the default project
//*Add todos into the default project

//todo create new projects
const mealPrep = myProjectManager.addProjects('Meal Prep');
mealPrep.addTodos(
  new createTodos(
    'meal prep',
    'Prepare meals for the week',
    '2025-09-11',
    'High',
    false,
    'I need to get big, so i will eat big!!',
    [
      'go to costco',
      'buy chichen',
      'prepare for a week',
      'put half in the freezer',
    ]
  )
);
console.log(myProjectManager.getProjects());
