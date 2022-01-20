import Star from './img/stared.png';
import Unstar from './img/unstar.png';

// Create the main part of the page.
const createContainer = (() => {
    const container = document.querySelector('.container');
    // Setup a todo logically, attribute information to it.
    const createTodo = (title, description, dueDate, importance, status) => {
        return {title, description, dueDate, importance, status};
    }
    
    
    // Create elements of todo on the page.
    const displayCollapseTodo = (todo) => {
        const todoCollapse = document.createElement('div');
        todoCollapse.classList.add('todo-collapse');
        const todoStatus = document.createElement('input');
        const todoTitle = document.createElement('div');
        const todoImportance = document.createElement('img');
        todoStatus.classList.add('todo-status');
        todoStatus.setAttribute('type', 'checkbox');
        todoTitle.classList.add('todo-title');
        todoTitle.textContent = todo.title;
        todoImportance.classList.add('todo-importance');
        if(todo.importance == 1) {
            todoImportance.src = Star;
        }
        else {
            todoImportance.src = Unstar;
        }

        todoCollapse.appendChild(todoStatus);
        todoCollapse.appendChild(todoTitle);
        todoCollapse.appendChild(todoImportance);

        container.appendChild(todoCollapse);
    }

    // const displayExpandTodo = (todo) => {

    // }

    const addTodo = () => {
        let todoTemp = createTodo('Have lunch', 'have a lunch at noon', '2022-01-20', '1')
        displayCollapseTodo(todoTemp);
    }
    return {addTodo};
})();

// const todoDescription = document.createElement('div');
// const todoDueDate = document.createElement('div');
// todoTitle.classList.add('todo-title');
// todoDescription.classList.add('todo-description');
// todoDueDate.classList.add('todo-date');


export {createContainer};