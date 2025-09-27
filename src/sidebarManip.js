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
