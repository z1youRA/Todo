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
        const setTask = (index, task) => {
            tasklist[index] = task;
        }
        return {add, getTaskNum, remove, getTask, setTask};
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
            todoStatus.classList.add('todo-status', 'checkbox');
            todoStatus.setAttribute('type', 'checkbox');
            todoStatus.checked = todo.status;

            todoCollapse.setAttribute('data-index', taskList.getTaskNum() - 1);
            todoStatus.setAttribute('data-index', taskList.getTaskNum() - 1);
            todoImportance.setAttribute('data-index', taskList.getTaskNum() - 1);


            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;
            todoImportance.classList.add('todo-importance');
            todoImportance.src = displayImportanceImg(todo);

            todoStatus.addEventListener('click', (e) => {
                todo.status = todoStatus.checked;
            })
            todoImportance.addEventListener('click', (e) => {
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

    const editPanel = (() => {
        const editPanelBlock = document.querySelector('.edit-panel');
        let index = -1;
        const _createEditBlock = () => {
            const block = document.createElement('div');
            block.classList.add('edit-block');
            return block;
        }
        const _clear = () => {
            editPanelBlock.textContent = ''; 
        }

        // const refresh = () => {
        //     console.log(index);
        //     display(index);
        // }

        const display = (currentIndex) => {
            index = currentIndex;
            const currentTask = taskList.getTask(currentIndex);
            const title = document.createElement('input');
            const dueDate = document.createElement('input');
            const description = document.createElement('input');
            const saveButton = document.createElement('button');
            _clear();
            const titleBlock = _createEditBlock();

            const myDayBlock = _createEditBlock();
            const dueDateBlock = _createEditBlock();
            const descriptionBlock = _createEditBlock();

            const icon = document.createElement('img');
            const myDayTitle = document.createElement('div');
            const dueDateTitle = document.createElement('div');
            title.defaultValue = currentTask.title;
            title.classList.add('edit-panel-title');
            icon.classList.add('side-icon');
            myDayTitle.classList.add('side-my-day-title');
            dueDateTitle.classList.add('side-due-date-title');
            description.classList.add('side-desc');
            dueDate.classList.add('side-due-date');
            dueDate.type = 'date';
            saveButton.textContent = 'SAVE';
            myDayBlock.dataset.value = false;
            myDayBlock.classList.add('my-day-block');
            myDayBlock.addEventListener('click', () => {
                if(myDayBlock.dataset.value == 'false') {
                    myDayBlock.classList.toggle('added');
                    myDayBlock.dataset.value = 'true';
                }
                else if(myDayBlock.dataset.value == 'true'){
                    myDayBlock.classList.toggle('added');
                    myDayBlock.dataset.value = 'false';
                }
            })

            icon.src = MyDay;
            myDayTitle.textContent = 'Add to My Day';
            dueDateTitle.textContent = 'Due Date: ';
            description.placeholder = 'Description';

            saveButton.addEventListener('click', edit);

            titleBlock.appendChild(title);
            myDayBlock.appendChild(icon);
            myDayBlock.appendChild(myDayTitle);
            dueDateBlock.appendChild(dueDateTitle);
            dueDateBlock.appendChild(dueDate);
            descriptionBlock.appendChild(description);

            editPanelBlock.appendChild(titleBlock);
            editPanelBlock.appendChild(myDayBlock);
            editPanelBlock.appendChild(dueDateBlock);
            editPanelBlock.appendChild(descriptionBlock);
            editPanelBlock.appendChild(saveButton);
            container.style.marginRight = '300px';
        }

        const getEditedInfo = () => {
            const info = taskList.getTask(index);
            const myDayBlock = document.querySelector('.my-day-block');
            //refresh info accoring to the present edit panel.
            info.myDay = myDayBlock.dataset.value;
            info.description = document.querySelector('.side-desc').value;
            info.dueDate = document.querySelector('.side-due-date').valueAsDate;
            info.title = document.querySelector('.edit-panel-title').value;
            return info;
        }

        const edit = () => {
            taskList.setTask(index, getEditedInfo()); 
            console.log(taskList.getTask(index));
        }

        return {display}
    })();


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
            if(!(e.target.className.includes('todo-status') || e.target.getAttribute('class') == 'todo-importance') ){
                editPanel.display(e.currentTarget.dataset.index);
            }
        });
    }

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