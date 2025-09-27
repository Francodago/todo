import './styles.css';
import newProject from './assets/icons/new-folder.svg';
import home from './assets/icons/home.svg';
import arrowDown from './assets/icons/arrow-down.svg';
import { toggleSidebar } from './sidebarManip';
export default function loadPage() {
  let body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
  ///todo sidebar section for projects (I WILL START WORKING ON THIS SECTION)
  const nav = document.createElement('nav');
  nav.id = 'sidebar';
  const projectsList = document.createElement('ul'); //* ul for all the sidebar elements
  projectsList.classList.add('projects-list');

  //todo logo section
  const logo = document.createElement('li');
  const logoTitle = document.createElement('span');
  logoTitle.textContent = 'ToDo List';
  logoTitle.classList.add('logo');
  const logoIcon = document.createElement('img');
  logoIcon.src = home;
  logoIcon.alt = 'Home';
  // const toggleNavBar = document.createElement('button');
  // toggleNavBar.classList.add('nav-toggle-btn');
  // toggleNavBar.onclick = toggleSidebar; //todo event listener
  // toggleNavBar.appendChild(logoIcon);
  logo.append(logoTitle);

  //todo projects dropdown section
  const projects = document.createElement('li');
  const projectsTitle = document.createElement('span');
  projectsTitle.textContent = 'Projects';
  const projectIcon = document.createElement('img');
  projectIcon.src = newProject;
  projectIcon.alt = 'New Project';
  const projectsDropdown = document.createElement('button');
  projectsDropdown.classList.add('dropdown-btn');
  const dropdown = document.createElement('img');
  dropdown.src = arrowDown;
  dropdown.alt = 'Arrow Down';
  projectsDropdown.append(projectIcon, projectsTitle, dropdown);
  //todo new ul inside projects li to display all the existing projects and the new ones created
  const sidebarProjects = document.createElement('ul');
  sidebarProjects.classList.add('sub-menu');
  const subMenuContainer = document.createElement('div');
  const generalProject = document.createElement('li');
  const generalProjectLink = document.createElement('a');
  generalProjectLink.href = '#';
  generalProjectLink.textContent = 'General Project';
  generalProject.append(generalProjectLink);
  subMenuContainer.appendChild(generalProject);
  //todo KEEP ADDING NEW PROJECTS TO THE (sidebarProjects) UL WITH THE DOM AS I CREATE THEM WITH THE (addProjects() method) FROM PROJECT-MANAGER MODULE FACTORY
  sidebarProjects.append(subMenuContainer);
  projects.append(projectsDropdown, sidebarProjects);

  //todo append to projectList UL
  projectsList.append(logo, projects);

  //todo add project button needs to be inside the project dropdown menu
  const addPrjectsBtn = document.createElement('button');
  addPrjectsBtn.textContent = 'Add new project';
  addPrjectsBtn.classList.add('add-project');

  //todo append to the nav
  nav.append(projectsList, addPrjectsBtn);

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

  const addTodoForm = document.createElement('div');
  addTodoForm.id = 'add-todo-form';
  const todoForm = document.createElement('form');
  todoForm.id = 'add-todo';
  form.append(addTodoBtn, addTodoForm);
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

  const titleFormGroup = document.createElement('div');
  titleFormGroup.classList.add('form-group'); //todo add each input and label section into the div with class form-group
  titleFormGroup.append(tittleLabel, titleInput);
  //todo description input field:
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Description:';
  descLabel.setAttribute('for', 'description');

  const descInput = document.createElement('input');
  descInput.type = 'text';
  descInput.name = 'description';
  descInput.id = 'description';
  descInput.placeholder = 'Enter description';

  const descFormGroup = document.createElement('div');
  descFormGroup.classList.add('form-group'); //todo add each input and label section into the div with class form-group
  descFormGroup.append(descLabel, descInput);

  //todo due date field:
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due Date:';
  dateLabel.setAttribute('for', 'date');

  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'dueDate';
  dateInput.id = 'date';

  const dateFormGroup = document.createElement('div');
  dateFormGroup.classList.add('form-group'); //todo add each input and label section into the div with class form-group
  dateFormGroup.append(dateLabel, dateInput);

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

  const priorityFormGroup = document.createElement('div');
  priorityFormGroup.classList.add('form-group'); //todo add each input and label section into the div with class form-group
  priorityFormGroup.append(priorityLabel, prioritySelect);

  //todo checkbox field for isComplete:
  const isCompleteLabel = document.createElement('label');
  isCompleteLabel.textContent = 'Completed?';
  isCompleteLabel.setAttribute('for', 'isComplete');
  isCompleteLabel.setAttribute('class', 'fine-print');
  const isCompleteInput = document.createElement('input');
  isCompleteInput.type = 'checkbox';
  isCompleteInput.id = 'isComplete';
  isCompleteInput.name = 'isComplete';

  const isCompleteFormGroup = document.createElement('div');
  isCompleteFormGroup.classList.add('form-group'); //todo add each input and label section into the div with class form-group
  isCompleteFormGroup.append(isCompleteLabel, isCompleteInput);
  //todo textArea field for notes:
  const notesLabel = document.createElement('label');
  notesLabel.textContent = 'Notes:';
  notesLabel.setAttribute('for', 'notes');
  const notesTextArea = document.createElement('textarea');
  notesTextArea.id = 'notes';
  notesTextArea.name = 'notes';
  notesTextArea.rows = 3;

  const notesFormGroup = document.createElement('div');
  notesFormGroup.classList.add('form-group'); //todo add each input and label section into the div with class form-group
  notesFormGroup.append(notesLabel, notesTextArea);
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
    titleFormGroup,
    descFormGroup,
    dateFormGroup,
    priorityFormGroup,
    isCompleteFormGroup,
    notesFormGroup
  );
  addTodoForm.append(todoForm);

  // const todoTitle = document.createElement('h2');
  // todoTitle.textContent = 'Todos';
  // const todoList = document.createElement('ul');
  // todoList.classList.add('todo-list');

  content.append(
    formHeading,
    todosHeading,
    form,
    submitBtn,
    resetBtn
    // todoTitle,
    // todoList
  ); ///* append to content div
  container.append(nav, content);
  body.appendChild(container);
}
