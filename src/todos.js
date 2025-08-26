export function createTodos( //*factory function create todos
  title,
  description = '',
  dueDate,
  priority,
  isComplete = false,
  notes = '',
  checklist = []
) {
  //todo create an object with the methdos i will share between instances
  const todo = Object.create(todoMethods);
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  todo.isComplete = isComplete;
  todo.notes = notes;
  todo.checklist = checklist;
  return todo;
}
const todoMethods = {
  //*todos prototype object that is going to have all the shareable methdos for each createTodos instance
  toggleComplete() {
    this.isComplete = !this.isComplete;
    return this.isComplete;
  },
  addChecklistItem(item) {
    this.checklist.push(item);
  },
};
