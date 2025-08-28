export default function loadPage() {
  let body = document.querySelector('body');
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
  //todo add the DOM elements that i will use:

  const content = document.createElement('div');
  content.id = 'content';
  //todo elements that i will add to the content id:
  //todo header section
  //*form header
  const formHeading = document.createElement('div');
  formHeading.classList.add('form-heading');
  const formHeader = document.createElement('h1');
  formHeader.textContent = 'Add New ToDo To A Project';
  formHeading.appendChild(formHeader);

  //*to dos header
  const todosHeading = document.createElement('div');
  todosHeading.classList.add('todos-header');
  const todosHeader = document.createElement('h1');
  todosHeader.textContent = 'Todo List';
  todosHeading.appendChild(todosHeader);

  //* create form
  const form = document.createElement('div'); //todo div or form the element?
  form.classList.add('form');
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  addTodoBtn.textContent = 'Add New ToDo';
  form.append(addTodoBtn);
  const addTodoForm = document.createElement('div');
  addTodoForm.id = 'add-todo-form';
  const todoForm = document.createElement('form');
  todoForm.id = 'add-todo';
  //* add fields for the todos form:
  //todo title input field:
  const tittleLabel = document.createElement('label');
  tittleLabel.textContent = 'title:';
  tittleLabel.setAttribute('for', 'title');

  const titleInput = document.createElement('input');
  titleInput.type = 'text'; // property
  titleInput.name = 'title'; // property
  titleInput.id = 'title'; // connect with label
  titleInput.placeholder = 'Enter todo title';
  //todo description input field:
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Description:';
  descLabel.setAttribute('for', 'description');

  const descInput = document.createElement('input');
  descInput.type = 'text';
  descInput.name = 'description';
  descInput.id = 'description';
  descInput.placeholder = 'Enter description';

  //todo due date field:
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due Date:';
  dateLabel.setAttribute('for', 'date');

  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'dueDate';
  dateInput.id = 'date';

  //todo priority field:
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  priorityLabel.setAttribute('for', 'priority');

  const prioritySelect = document.createElement('select');
  prioritySelect.name = 'priority';
  prioritySelect.id = 'priority';

  ['low', 'medium', 'high'].forEach(level => {
    const option = document.createElement('option');
    option.value = level;
    option.textContent = level;
    prioritySelect.appendChild(option);
  });

  //todo submit and reset buttons:
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Create Todo';
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('reset-btn');
  resetBtn.type = 'reset';
  resetBtn.textContent = 'Reset Todo';

  todoForm.append(
    tittleLabel,
    titleInput,
    descLabel,
    descInput,
    dateLabel,
    dateInput,
    priorityLabel,
    prioritySelect
  );
  addTodoForm.append(todoForm);

  const todoTitle = document.createElement('h2');
  todoTitle.textContent = 'Todos';
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  const addTodo = document.createElement('button');
  addTodo.textContent = 'Add new todo';
  addTodo.classList.add('todo-btn');

  content.append(
    formHeading,
    todosHeading,
    form,
    addTodoForm,
    submitBtn,
    resetBtn,
    todoTitle,
    todoList,
    addTodo
  ); ///* append to content div
  body.append(sidebar);
  body.insertAdjacentElement('beforeend', content);
}
