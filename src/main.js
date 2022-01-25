import Star from './img/stared.png';
import Unstar from './img/unstar.png';
import MyDay from './img/sun.png';
import { createHeader } from './header';

// Create the main part of the page.
const createContainer = (() => {
    const container = document.querySelector('.container');

    const taskList = (() => {
        let tasklist = [];
        let taskNum = 0;
        const add = (task) => {
            tasklist.push(task);
            taskNum++;
        }
        const getTaskNum = () => {
            return taskNum;
        }
        const remove = (taskIndex) => {
            tasklist.splice(taskIndex, 1);
        }
        const getTask = (taskIndex) => {
            return tasklist[taskIndex];
        }
        return {add, getTaskNum, remove, getTask};
    })();

    // Setup a todo logically, attribute information to it.
    let createTodo = (title, description, dueDate, importance, status, myDay) => {
        return {title, description, dueDate, importance, status, myDay};
    }

    const addButton = (() => {
        const addButton = document.createElement('div');
        const _clear = (block) => {
            block.textContent = '';
        }
    
        // Display the collapsed add button.
        const display = () => {
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
        const expand = () => {
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
    
            addButton.removeEventListener('click', expand);
            addButton.appendChild(addStatus);
            addButton.appendChild(addTitle);
            addButton.appendChild(addDueDate);
            addButton.appendChild(addTrigger);
        }
       
        const create = () => {
            display();
            const addButton = document.querySelector('.add-button');
            addButton.addEventListener('click', expand);
        }
        return {display, expand, create};
    })();

    // Create elements of todo on the page.
    // Do not change easily
    const collapseTodo = (todo) =>  {
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
        const display = () => {
            const todoCollapse = document.createElement('div');
            todoCollapse.classList.add('todo-collapse');
            const todoStatus = document.createElement('input');
            const todoTitle = document.createElement('div');
            const todoImportance = document.createElement('img');
            todoCollapse.setAttribute('data-index', taskList.getTaskNum() - 1);
            todoStatus.classList.add('todo-status', 'checkbox');
            todoStatus.setAttribute('type', 'checkbox');
            todoStatus.addEventListener('click', () => {
                todo.status = todoStatus.checked;
            })
            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;
            todoImportance.classList.add('todo-importance');
            todoImportance.src = displayImportanceImg(todo);
            todoImportance.addEventListener('click', () => {
                toggleImportance(todo);
                todoImportance.src = displayImportanceImg(todo);
            })     
    
            todoCollapse.appendChild(todoStatus);
            todoCollapse.appendChild(todoTitle);
            todoCollapse.appendChild(todoImportance);
            return todoCollapse;
        }
        return {display};
    }

    // add task
    const addTodo = (title, description, dueDate, importance, status, myDay) => {
        if(title == '' || title === undefined) {
            alert("ERROR: Empty Title!"); //#TODOchange to Add trigger not working and became black.
            return;
        }
        let task = createTodo(title, description, dueDate, importance, status, myDay) // create a task
        taskList.add(task);
        const todoBlock = collapseTodo(task).display();
        container.appendChild(todoBlock);//display the task on main page
        // todoBlock.setAttribute('data-task', task);

        todoBlock.addEventListener('click', (e) => { // display edit panel on click
            editPanel.display(e);
        });
    }



    const editPanel = (() => {
        const editPanelBlock = document.querySelector('.edit-panel');

        const createEditBlock = () => {
            const block = document.createElement('div');
            block.classList.add('edit-block');
            return block;
        }
        const clear = () => {
            editPanelBlock.textContent = ''; 

        }
        const display = (e) => {
            if(e.target.className.includes('todo-status') || e.target.getAttribute('class') == 'todo-importance')
                return; // If click on status or importance, NOT open edit panel.
            clear();
            const currentIndex = e.currentTarget.dataset.index;
            console.log(currentIndex);
            console.log(taskList.getTask(currentIndex));
            const collapseTask = collapseTodo(taskList.getTask(currentIndex)).display();
            const generalBlock = createEditBlock();
            generalBlock.appendChild(collapseTask);

            const myDayBlock = createEditBlock();
            const dueDateBlock = createEditBlock();
            const descriptionBlock = createEditBlock();

            const icon = document.createElement('img');
            const myDayTitle = document.createElement('div');
            const dueDate = document.createElement('input');
            const dueDateTitle = document.createElement('div');
            const description = document.createElement('input');
            const saveButton = document.createElement('button');
            icon.classList.add('side-icon');
            myDayTitle.classList.add('side-title');
            dueDateTitle.classList.add('side-due-date-title');
            description.classList.add('side-desc');
            dueDate.type = 'date';
            saveButton.textContent = 'SAVE';

            // console.log(taskList[e.target.dataset.index]);
            icon.src = MyDay;
            myDayTitle.textContent = 'Add to My Day';
            dueDateTitle.textContent = 'Due Date: ';
            description.placeholder = 'Description';

            myDayBlock.appendChild(icon);
            myDayBlock.appendChild(myDayTitle);
            dueDateBlock.appendChild(dueDateTitle);
            dueDateBlock.appendChild(dueDate);
            descriptionBlock.appendChild(description);

            editPanelBlock.appendChild(generalBlock);
            editPanelBlock.appendChild(myDayBlock);
            editPanelBlock.appendChild(dueDateBlock);
            editPanelBlock.appendChild(descriptionBlock);
            editPanelBlock.appendChild(saveButton);
            container.style.marginRight = '300px';
        }

        return {display};
    })();
    // index:currentIndex,
    // title:collapseTask.title.value, 
    // dueDate:dueDate.valueAsDate, 
    // description:description.value,
    // saveButton:saveButton

    // const editTask = () => {
    //     console.log(EditPanel.currenIndex);
    //     console.log(EditPanel.saveButton);
    //     const task = taskList[EditPanel.index];
    //     EditPanel.saveButton.addEventListener('click', () => {
    //         task.title = editPanel.title;
    //         task.dueDate = editPanel.dueDate;
    //         task.description = editPanel.description;
    //         console.log(task.title);
    //         console.log(task.dueDate);
    //         console.log(task.description);
    //     });
    // }

    const closeEditPanel = () => {
        const editPanel = document.querySelector('.edit-panel');
        const container = document.querySelector('.main');
        editPanel.classList.remove('opened');
        editPanel.classList.add('closed');
        container.style.marginRight = '0';
    } //#TODO add button to collapse EditPanel

    return {addTodo, addButton};
})();

export {createContainer};