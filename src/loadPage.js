export default function loadPage() {
  let body = document.querySelector('body');
  //todo header section
  const header = document.createElement('header');
  header.classList.add('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Todo List';
  ///todo sidebar section
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = 'Projects';
  const addPrjectsBtn = document.createElement('button');
  addPrjectsBtn.textContent = 'Add new project';
  addPrjectsBtn.classList.add('add-project');
  const projectsList = document.createElement('ul');
  projectsList.classList.add('projects-list');
  sidebar.append(projectTitle, projectsList, addPrjectsBtn);
  //todo main section
  const content = document.createElement('div');
  content.id = 'content';
  const todoTitle = document.createElement('h2');
  todoTitle.textContent = 'Todos';
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  const addTodo = document.createElement('button');
  addTodo.textContent = 'Add new todo';
  addTodo.classList.add('todo-btn');
  header.appendChild(h1);
  content.append(todoTitle, todoList, addTodo);
  body.append(header, sidebar);
  body.insertAdjacentElement('beforeend', content);
}
