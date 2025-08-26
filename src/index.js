import loadPage from './loadPage';
import blankProjectLoad from './project-manager';
import { createTodos } from './todos';
import projects from './projects';

//*call dom manipulation module to take care of the UI
loadPage();
//*call blank project on first land and start with the default project
blankProjectLoad();

//*include modules for manipulating  the projects and todos

projects();
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
console.log(todos);
const todo1 = createTodos(
  'Buy milk',
  '2% protein',
  '2025-09-05',
  'medium',
  true,
  'I want protein',
  ['go to freshco', 'buy yogurt']
);
console.log(todo1);

todo1.toggleComplete();
