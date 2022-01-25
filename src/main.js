import Star from './img/stared.png';
import Unstar from './img/unstar.png';
import MyDay from './img/sun.png';
import { createHeader } from './header';

// Create the main part of the page.
const createContainer = (() => {
    const taskList = [];
    let taskNum = 0;
    const container = document.querySelector('.container');

    // Setup a todo logically, attribute information to it.
    const createTodo = (title, description, dueDate, importance, status, myDay) => {
        return {title, description, dueDate, importance, status, myDay};
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

    const expandAddButton = () => {
        const addButton = document.querySelector('.add-button');
        addButton.classList.remove('collapse');
        addButton.classList.add('expand');
        _clear(addButton);
        const addStatus = document.createElement('input');
        const addTitle = document.createElement('input');
        const addDueDate = document.createElement('input');
        const addTrigger = document.createElement('div'); // addTrigger is the button that trigger the adding action

        addTrigger.classList.add('add-trigger');
        addTrigger.textContent = 'ADD';
        addTrigger.addEventListener('click', () => {
            addTodo(addTitle.value, 'Task', addDueDate.valueAsDate, '0');
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

    // Expand add panel after clicking.
    const createAddButton = () => {
        displayAddButton();
        const addButton = document.querySelector('.add-button');
        addButton.addEventListener('click', expandAddButton);
    }

    const toggleImportance = (todo) => {
        if(todo.importance == true) {
            todo.importance = false;
        }
        else if(todo.importance == false) {
            todo.importance = true;
        }
    }

    const displayImportanceImg = (todo) => {
        if(todo.importance == true)
            return Star;
        else if(todo.importance == false)
            return Unstar;
    }

    // Create elements of todo on the page.
    // Do not change easily
    const displayCollapseTodo = (todo) => {
        const todoCollapse = document.createElement('div');
        todoCollapse.classList.add('todo-collapse');
        const todoStatus = document.createElement('input');
        const todoTitle = document.createElement('div');
        const todoImportance = document.createElement('img');
        todoCollapse.setAttribute('data-index', taskNum++);
        todoStatus.classList.add('todo-status', 'checkbox');
        todoStatus.setAttribute('type', 'checkbox');
        todoStatus.addEventListener('click', () => {
            todo.status = todoStatus.checked;
            console.log('Status:' + todo.status);
        })
        todoTitle.classList.add('todo-title');
        todoTitle.textContent = todo.title;
        todoImportance.classList.add('todo-importance');
        todoImportance.src = displayImportanceImg(todo);
        todoImportance.addEventListener('click', () => {
            toggleImportance(todo);
            todoImportance.src = displayImportanceImg(todo);
            console.log('importance:' + todo.importance);
        })     

        todoCollapse.appendChild(todoStatus);
        todoCollapse.appendChild(todoTitle);
        todoCollapse.appendChild(todoImportance);

        return todoCollapse;
    }

    // add task
    const addTodo = (title, description, dueDate, importance, status, myDay) => {
        if(title == '' || title === undefined) {
            alert("ERROR: Empty Title!"); //#TODOchange to Add trigger not working and became black.
            return;
        }
        let task = createTodo(title, description, dueDate, importance, status, myDay) // create a task
        taskList.push(task);
        const todoBlock = displayCollapseTodo(task); 
        container.appendChild(todoBlock);//display the task on main page
        // todoBlock.setAttribute('data-task', task);

        todoBlock.addEventListener('click', (e) => { // display edit panel on click
            openEditPanel(e);
        });
    }

    const createEditBlock = () => {
        const block = document.createElement('div');
        block.classList.add('edit-block');
        return block;
    }

    const editTask = (currentIndex, statusEle, titleEle, importanceEle, myDayEle, dueDateEle, descriptionEle, triggerButton) => {
        triggerButton.addEventListener('click', () => {
            console.log(statusEle.value, titleEle.value, importanceEle.value, myDayEle.value, dueDateEle.valueAsDate, descriptionEle.value);
        })
    }

    const openEditPanel = (e) => {
        if(e.target.className.includes('todo-status') || e.target.getAttribute('class') == 'todo-importance')
            return; // If click on status or importance, NOT open edit panel.
        const currentIndex = e.currentTarget.dataset.index;
        const editPanel = document.querySelector('.edit-panel');
        editPanel.textContent = '';
        const generalBlock = createEditBlock();
        const myDayBlock = createEditBlock();
        const dueDateBlock = createEditBlock();
        const descriptionBlock = createEditBlock();

        generalBlock.appendChild(displayCollapseTodo(taskList[currentIndex]));
        const icon = document.createElement('img');
        const title = document.createElement('div');
        const dueDate = document.createElement('input');
        const dueDateTitle = document.createElement('div');
        const description = document.createElement('input');
        icon.classList.add('side-icon');
        title.classList.add('side-title');
        dueDateTitle.classList.add('side-due-date-title');
        description.classList.add('side-desc');
        dueDate.type = 'date';

        // console.log(taskList[e.target.dataset.index]);
        icon.src = MyDay;
        title.textContent = 'Add to My Day';
        dueDateTitle.textContent = 'Due Date: ';
        description.placeholder = 'Description';

        myDayBlock.appendChild(icon);
        myDayBlock.appendChild(title);
        dueDateBlock.appendChild(dueDateTitle);
        dueDateBlock.appendChild(dueDate);
        descriptionBlock.appendChild(description);

        editPanel.appendChild(generalBlock);
        editPanel.appendChild(myDayBlock);
        editPanel.appendChild(dueDateBlock);
        editPanel.appendChild(descriptionBlock);
        container.style.marginRight = '300px';
        // editTask(currentIndex, )#TODO waitfor invoking this function
    }

    // const openEditPanel = () => {
    //     const editPanel = document.querySelector('.edit-panel');
    //     const container = document.querySelector('.main');

    //     editPanel.classList.remove('closed');
    //     editPanel.classList.add('opened');
    //     container.style.marginRight = '300px';
    // }

    const closeEditPanel = () => {
        const editPanel = document.querySelector('.edit-panel');
        const container = document.querySelector('.main');
        editPanel.classList.remove('opened');
        editPanel.classList.add('closed');
        container.style.marginRight = '0';
    } //#TODO add button to collapse EditPanel

    return {addTodo, createAddButton};
})();

export {createContainer};