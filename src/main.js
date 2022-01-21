import Star from './img/stared.png';
import Unstar from './img/unstar.png';

// Create the main part of the page.
const createContainer = (() => {
    const container = document.querySelector('.container');

    // Setup a todo logically, attribute information to it.
    const createTodo = (title, description, dueDate, importance, status) => {
        return {title, description, dueDate, importance, status};
    }

    const _clear = (block) => {
        block.textContent = '';
    }

    // Display the collapsed add button.
    const displayAddButton = () => {
        const addButton = document.createElement('div');
        addButton.classList.add('add-button');
        addButton.classList.add('collapse');
        const icon = document.createElement('div');
        icon.classList.add('add-icon');
        const text = document.createElement('div');

        icon.textContent = '+';
        text.textContent = 'Add a task';
        addButton.appendChild(icon);
        addButton.appendChild(text);
        container.appendChild(addButton);
    }

    // Expand add panel after clicking.
    const createAddButton = () => {
        displayAddButton();
        const addButton = document.querySelector('.add-button');
        addButton.addEventListener('click', expandAddButton);
    }

    const expandAddButton = () => {
        const addButton = document.querySelector('.add-button');
        addButton.classList.remove('collapse');
        addButton.classList.add('expand');
        _clear(addButton);
        const addStatus = document.createElement('input');
        const addTitle = document.createElement('input');
        const addDueDate = document.createElement('input');
        const addTrigger = document.createElement('div');

        addTrigger.classList.add('add-trigger');
        addTrigger.textContent = 'ADD';
        addTrigger.addEventListener('click', () => {
            addTodo(addTitle.value, '', addDueDate.valueAsDate, '0');
        });
        addStatus.classList.add('round-checkbox', 'add-status');
        addStatus.setAttribute('type', 'checkbox');
        addTitle.classList.add('add-title');
        addDueDate.setAttribute('type', 'date');

        addButton.removeEventListener('click', expandAddButton);
        addButton.appendChild(addStatus);
        addButton.appendChild(addTitle);
        addButton.appendChild(addDueDate);
        addButton.appendChild(addTrigger);
    }

    // Create elements of todo on the page.
    const displayCollapseTodo = (todo) => {
        const todoCollapse = document.createElement('div');
        todoCollapse.classList.add('todo-collapse');
        const todoStatus = document.createElement('input');
        const todoTitle = document.createElement('div');
        const todoImportance = document.createElement('img');
        todoStatus.classList.add('todo-status', 'checkbox');
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

    const addTodo = (title, description, dueDate, importance, status) => {
        if(title == '' || title === undefined) {
            alert("ERROR: Empty Title!");
            return;
        }
        let todoTemp = createTodo(title, description, dueDate, importance, status)
        displayCollapseTodo(todoTemp);
    }

    return {addTodo, createAddButton};
})();

// const todoDescription = document.createElement('div');
// const todoDueDate = document.createElement('div');
// todoTitle.classList.add('todo-title');
// todoDescription.classList.add('todo-description');
// todoDueDate.classList.add('todo-date');


export {createContainer};