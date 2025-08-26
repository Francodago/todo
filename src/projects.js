class projects {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addTodos(todo) {
    this.todos.push(todo);
  }
  removeTodo(i) {
    this.todos.splice(i, 1);
  }
  listTodos() {
    return this.todos;
  }
}

export default projects;
