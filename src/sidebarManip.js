export function toggleSubMenu() {
  const projectsButton = document.querySelector('.dropdown-btn');
  projectsButton.addEventListener('click', function () {
    const subMenu = this.nextElementSibling; //* this is projectsButton
    subMenu.classList.toggle('show'); //* add or remove the show class on click
    projectsButton.classList.toggle('rotate');
    if (sidebar.classList.contains('close')) {
      sidebar.classList.toggle('close');
    }
  });
}
export function toggleSidebar() {
  const toggleButton = document.querySelector('.nav-toggle-btn');
  const sidebar = document.querySelector('#sidebar');
  toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('close');
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    });
  });
}
