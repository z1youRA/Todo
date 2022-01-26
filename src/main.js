import Star from './img/stared.png';
import Unstar from './img/unstar.png';
import MyDay from './img/sun.png';
import Collapse from './img/collapse.png';
import Delete from './img/delete.png';

let taskIndex = 0;

const taskList = (() => {
    let tasklist = [];
    let taskNum = 0;

    const saveToLocalStorage = () => {
        if (storageAvailable('localStorage')) {
            localStorage.setItem('taskNum', taskNum);
            tasklist.forEach((task, i) => {
                localStorage.setItem(`task${i}`, JSON.stringify(task));
            })
        }
    }

    const fetchFromLocalStorage = () => {
        if(storageAvailable('localStorage')) {
            if(localStorage.length > 0) {
                taskNum = parseInt(localStorage.getItem('taskNum'));
                tasklist = [];
                for(let i = 0; i < taskNum; i++) {
                    tasklist.push(JSON.parse(localStorage.getItem(`task${i}`)));
                }
            }
        }
    }

    const add = (task) => {
        tasklist.push(task);
        taskNum++;
        saveToLocalStorage();
    }
    const getTaskNum = () => {
        return taskNum;
    }
    const remove = (taskIndex) => {
        tasklist.splice(taskIndex, 1);
        taskNum--;
        saveToLocalStorage();
    }
    const getTask = (taskIndex) => {
        return tasklist[taskIndex];
    }
    const setTask = (index, task) => {
        tasklist[index] = task;
        saveToLocalStorage();
    }
    const getAllTask = () => {
        return tasklist;
    }
    return {add, getTaskNum, remove, getTask, setTask, getAllTask, saveToLocalStorage, fetchFromLocalStorage};
})();

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}



// Create the main part of the page.
const createContainer = (filter) => {
    const container = document.querySelector('.container');
    let defaultImportance;
    let defaultMyDay;
    if(filter == '0') {  // All tasks
        defaultImportance = 'false';
        defaultMyDay = 'false';
    }
    else if(filter == '1') { // Important tasks only
        defaultImportance = 'true';
        defaultMyDay = 'false'; 
    }
    else if(filter == '2') { // Myday tasks
        defaultImportance = 'false';
        defaultMyDay = 'true'; 
    }


    // Setup a todo logically, attribute information to it.
    let createTodo = (title, description, dueDate, importance, status, myDay) => {
        return {title, description, dueDate, importance, status, myDay};
    }

    const addButton = (() => {
        const addButton = document.createElement('div');
        const _clear = (block) => {
            block.textContent = '';
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
                addTodo(addTitle.value, 'Add a note', addDueDate.value, defaultImportance, addStatus.checked, defaultMyDay);
                render();
                console.log(taskList.getAllTask())
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
            _clear(addButton);
            addButton.classList.add('add-button');
            addButton.classList.add('collapse');
            const icon = document.createElement('div');
            icon.classList.add('add-icon');
            const text = document.createElement('div');
    
            icon.textContent = '+';
            text.textContent = 'Add a task';
            addButton.addEventListener('click', expand);
            addButton.appendChild(icon);
            addButton.appendChild(text);
            container.appendChild(addButton);
        }
        return {expand, create};
    })();

    // Create elements of todo on the page.
    // Do not change easily
    const collapseTodo = (todo) =>  {
        const toggleImportance = (todo) => {
            if(todo.importance == 'true') {
                todo.importance = 'false';
            }
            else if(todo.importance == 'false') {
                todo.importance = 'true';
            }
        }
    
        const displayImportanceImg = (todo) => {
            if(todo.importance == 'true')
                return Star;
            else if(todo.importance == 'false')
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

            todoCollapse.setAttribute('data-index', taskIndex);
            taskIndex++;

            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;
            todoImportance.classList.add('todo-importance');
            todoImportance.src = displayImportanceImg(todo);

            todoStatus.addEventListener('click', (e) => {
                todo.status = todoStatus.checked;
                taskList.saveToLocalStorage();
            })
            todoImportance.addEventListener('click', (e) => {
                toggleImportance(todo);
                todoImportance.src = displayImportanceImg(todo);
                taskList.saveToLocalStorage();
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

        const display = (currentIndex) => {
            index = currentIndex;
            const currentTask = taskList.getTask(currentIndex);
            const title = document.createElement('input');
            const dueDate = document.createElement('input');
            const description = document.createElement('input');
            const saveButton = document.createElement('button');
            _clear();
            const collapseButton = document.createElement('img');
            collapseButton.src = Collapse;
            collapseButton.classList.add('side-collapse-button', 'side-icon');
            collapseButton.addEventListener('click', close);
            const deleteButton = document.createElement('img');
            deleteButton.src = Delete;
            deleteButton.classList.add('side-delete-button', 'side-icon');
            deleteButton.addEventListener('click', deleteTask);
            const controlBlock = document.createElement('div');
            controlBlock.classList.add('side-control-block');
            controlBlock.appendChild(collapseButton);
            controlBlock.appendChild(deleteButton);
            const titleBlock = _createEditBlock();
            const myDayBlock = _createEditBlock();
            const dueDateBlock = _createEditBlock();
            const descriptionBlock = _createEditBlock();

            const icon = document.createElement('img');
            const myDayTitle = document.createElement('div');
            title.defaultValue = currentTask.title;
            title.classList.add('edit-panel-title');
            icon.classList.add('side-icon');
            myDayTitle.classList.add('side-my-day-title');
            description.classList.add('side-desc');
            dueDate.classList.add('side-due-date');
            dueDate.type = 'date';
            dueDate.value = currentTask.dueDate;
            saveButton.textContent = 'SAVE';
            myDayBlock.dataset.value = 'false';
            myDayBlock.classList.add('my-day-block');
            if(currentTask.myDay == 'true') {
                myDayBlock.classList.add('added');
            }
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
            description.value = currentTask.description;
            saveButton.addEventListener('click', edit);

            titleBlock.appendChild(title);
            myDayBlock.appendChild(icon);
            myDayBlock.appendChild(myDayTitle);
            dueDateBlock.appendChild(dueDate);
            descriptionBlock.appendChild(description);

            editPanelBlock.appendChild(titleBlock);
            editPanelBlock.appendChild(myDayBlock);
            editPanelBlock.appendChild(dueDateBlock);
            editPanelBlock.appendChild(descriptionBlock);
            editPanelBlock.appendChild(saveButton);
            editPanelBlock.appendChild(controlBlock);
            editPanelBlock.classList.add('opened');
            editPanelBlock.classList.remove('closed');
            container.classList.add('collapse');
        }

        const getEditedInfo = () => {
            const info = taskList.getTask(index);
            const myDayBlock = document.querySelector('.my-day-block');
            //refresh info accoring to the present edit panel.
            info.myDay = myDayBlock.dataset.value;
            info.description = document.querySelector('.side-desc').value;
            info.dueDate = document.querySelector('.side-due-date').value;
            info.title = document.querySelector('.edit-panel-title').value;
            return info;
        }

        const edit = () => {
            taskList.setTask(index, getEditedInfo()); 
            taskList.saveToLocalStorage();
            close();
            render();
        }

        const close = () => {
            const editPanel = document.querySelector('.edit-panel');
            editPanel.classList.remove('opened');
            editPanel.classList.add('closed');
            container.classList.toggle('collapse');
        }

        const deleteTask = () => {
            taskList.remove(index);
            close();
            render();
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
    }

    const clickTask = (e) => { // display edit panel on click
            if(!(e.target.className.includes('todo-status') || e.target.getAttribute('class') == 'todo-importance') ){
                editPanel.display(e.currentTarget.dataset.index);
                document.querySelectorAll('.todo-collapse').forEach((task) => {
                    task.classList.remove('selected');
                })
                e.currentTarget.classList.add('selected');
            }
        }
    

    const render = () => {
        taskIndex = 0;
        taskList.fetchFromLocalStorage();
        container.textContent = ''
        // localStorage.clear();
        addButton.create();
        if(filter == '0') {
            taskList.getAllTask().forEach((task) => {
                const todoBlock = collapseTodo(task).display();
                container.appendChild(todoBlock);//display the task on main page
                todoBlock.addEventListener('click', clickTask);
            })
        }
        else if(filter == '1') {
            taskList.getAllTask().forEach((task) => {
                if(task.importance == 'true') {
                    const todoBlock = collapseTodo(task).display();
                    container.appendChild(todoBlock);//display the task on main page
                    todoBlock.addEventListener('click', clickTask);
                }
            })
        }
        else if(filter == '2') {
            taskList.getAllTask().forEach((task) => {
                if(task.myDay == 'true') {
                    const todoBlock = collapseTodo(task).display();
                    container.appendChild(todoBlock);//display the task on main page
                    todoBlock.addEventListener('click', clickTask);
                }
            })
        }
    }

    return {addTodo, addButton, collapseTodo, render};
}

export {createContainer};