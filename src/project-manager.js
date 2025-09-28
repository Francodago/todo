import projects from './projects';
const projectManager = () => {
  let myProjects = [];
  //todo create default project on load
  const defaultProject = new projects('Default Project');
  myProjects.push(defaultProject);
  //todo methods for manging projects
  function addProjects(name) {
    //todo make it so when i add a new project to the sub menu it shows always before the add new project button
    const project = new projects(name);
    myProjects.push(project);
    return project;
  }
  function removeProject() {
    myProjects.splice(i, 1);
  }
  function getProjects() {
    return myProjects;
  }
  function getDefaultProject() {
    return defaultProject;
  }
  return { addProjects, removeProject, getProjects, getDefaultProject };
};
export default projectManager;
