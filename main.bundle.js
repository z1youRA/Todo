/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/collapse.png":
/*!******************************!*\
  !*** ./src/img/collapse.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df76bf84fe3a5bec4c40.png";

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f18e8ce54855f0182d3a.png";

/***/ }),

/***/ "./src/img/stared.png":
/*!****************************!*\
  !*** ./src/img/stared.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3008e19df259ccaa3a49.png";

/***/ }),

/***/ "./src/img/sun.png":
/*!*************************!*\
  !*** ./src/img/sun.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db59a20ea862ccedc73c.png";

/***/ }),

/***/ "./src/img/unstar.png":
/*!****************************!*\
  !*** ./src/img/unstar.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab256eaad757afa2715c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContainer": () => (/* binding */ createContainer)
/* harmony export */ });
/* harmony import */ var _img_stared_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/stared.png */ "./src/img/stared.png");
/* harmony import */ var _img_unstar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/unstar.png */ "./src/img/unstar.png");
/* harmony import */ var _img_sun_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sun.png */ "./src/img/sun.png");
/* harmony import */ var _img_collapse_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/collapse.png */ "./src/img/collapse.png");
/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png");






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
                return _img_stared_png__WEBPACK_IMPORTED_MODULE_0__;
            else if(todo.importance == 'false')
                return _img_unstar_png__WEBPACK_IMPORTED_MODULE_1__;
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
            collapseButton.src = _img_collapse_png__WEBPACK_IMPORTED_MODULE_3__;
            collapseButton.classList.add('side-collapse-button', 'side-icon');
            collapseButton.addEventListener('click', close);
            const deleteButton = document.createElement('img');
            deleteButton.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_4__;
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

            icon.src = _img_sun_png__WEBPACK_IMPORTED_MODULE_2__;
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLCtCQUErQiw0Q0FBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsdUJBQXVCLHlDQUFLO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgU3RhciBmcm9tICcuL2ltZy9zdGFyZWQucG5nJztcbmltcG9ydCBVbnN0YXIgZnJvbSAnLi9pbWcvdW5zdGFyLnBuZyc7XG5pbXBvcnQgTXlEYXkgZnJvbSAnLi9pbWcvc3VuLnBuZyc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9pbWcvY29sbGFwc2UucG5nJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi9pbWcvZGVsZXRlLnBuZyc7XG5cbmxldCB0YXNrSW5kZXggPSAwO1xuXG5jb25zdCB0YXNrTGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IHRhc2tsaXN0ID0gW107XG4gICAgbGV0IHRhc2tOdW0gPSAwO1xuXG4gICAgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTnVtJywgdGFza051bSk7XG4gICAgICAgICAgICB0YXNrbGlzdC5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRhc2ske2l9YCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZldGNoRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFza051bSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTnVtJykpO1xuICAgICAgICAgICAgICAgIHRhc2tsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tOdW07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrbGlzdC5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRhc2ske2l9YCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGQgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrbGlzdC5wdXNoKHRhc2spO1xuICAgICAgICB0YXNrTnVtKys7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRUYXNrTnVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza051bTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlID0gKHRhc2tJbmRleCkgPT4ge1xuICAgICAgICB0YXNrbGlzdC5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgdGFza051bS0tO1xuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0VGFzayA9ICh0YXNrSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tsaXN0W3Rhc2tJbmRleF07XG4gICAgfVxuICAgIGNvbnN0IHNldFRhc2sgPSAoaW5kZXgsIHRhc2spID0+IHtcbiAgICAgICAgdGFza2xpc3RbaW5kZXhdID0gdGFzaztcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIGNvbnN0IGdldEFsbFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrbGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIHthZGQsIGdldFRhc2tOdW0sIHJlbW92ZSwgZ2V0VGFzaywgc2V0VGFzaywgZ2V0QWxsVGFzaywgc2F2ZVRvTG9jYWxTdG9yYWdlLCBmZXRjaEZyb21Mb2NhbFN0b3JhZ2V9O1xufSkoKTtcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cblxuXG4vLyBDcmVhdGUgdGhlIG1haW4gcGFydCBvZiB0aGUgcGFnZS5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IChmaWx0ZXIpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgbGV0IGRlZmF1bHRJbXBvcnRhbmNlO1xuICAgIGxldCBkZWZhdWx0TXlEYXk7XG4gICAgaWYoZmlsdGVyID09ICcwJykgeyAgLy8gQWxsIHRhc2tzXG4gICAgICAgIGRlZmF1bHRJbXBvcnRhbmNlID0gJ2ZhbHNlJztcbiAgICAgICAgZGVmYXVsdE15RGF5ID0gJ2ZhbHNlJztcbiAgICB9XG4gICAgZWxzZSBpZihmaWx0ZXIgPT0gJzEnKSB7IC8vIEltcG9ydGFudCB0YXNrcyBvbmx5XG4gICAgICAgIGRlZmF1bHRJbXBvcnRhbmNlID0gJ3RydWUnO1xuICAgICAgICBkZWZhdWx0TXlEYXkgPSAnZmFsc2UnOyBcbiAgICB9XG4gICAgZWxzZSBpZihmaWx0ZXIgPT0gJzInKSB7IC8vIE15ZGF5IHRhc2tzXG4gICAgICAgIGRlZmF1bHRJbXBvcnRhbmNlID0gJ2ZhbHNlJztcbiAgICAgICAgZGVmYXVsdE15RGF5ID0gJ3RydWUnOyBcbiAgICB9XG5cblxuICAgIC8vIFNldHVwIGEgdG9kbyBsb2dpY2FsbHksIGF0dHJpYnV0ZSBpbmZvcm1hdGlvbiB0byBpdC5cbiAgICBsZXQgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UsIHN0YXR1cywgbXlEYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UsIHN0YXR1cywgbXlEYXl9O1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBfY2xlYXIgPSAoYmxvY2spID0+IHtcbiAgICAgICAgICAgIGJsb2NrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHBhbmQgYWRkIHBhbmVsIGFmdGVyIGNsaWNraW5nLlxuICAgICAgICBjb25zdCBleHBhbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgIF9jbGVhcihhZGRCdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgYWRkU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgYWRkVHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhZGRUcmlnZ2VyIGlzIHRoZSBidXR0b24gdGhhdCB0cmlnZ2VyIHRoZSBhZGRpbmcgYWN0aW9uXG4gICAgXG4gICAgICAgICAgICBhZGRUcmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ2FkZC10cmlnZ2VyJyk7XG4gICAgICAgICAgICBhZGRUcmlnZ2VyLnRleHRDb250ZW50ID0gJ0FERCc7XG4gICAgICAgICAgICBhZGRUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZFRvZG8oYWRkVGl0bGUudmFsdWUsICdBZGQgYSBub3RlJywgYWRkRHVlRGF0ZS52YWx1ZSwgZGVmYXVsdEltcG9ydGFuY2UsIGFkZFN0YXR1cy5jaGVja2VkLCBkZWZhdWx0TXlEYXkpO1xuICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0LmdldEFsbFRhc2soKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWRkU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3JvdW5kLWNoZWNrYm94JywgJ2FkZC1zdGF0dXMnKTtcbiAgICAgICAgICAgIGFkZFN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGFkZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FkZC10aXRsZScpO1xuICAgICAgICAgICAgYWRkRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIFxuICAgICAgICAgICAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRTdGF0dXMpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGFkZFRpdGxlKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChhZGREdWVEYXRlKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRUcmlnZ2VyKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBfY2xlYXIoYWRkQnV0dG9uKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYWRkLWljb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgIGljb24udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0FkZCBhIHRhc2snO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7ZXhwYW5kLCBjcmVhdGV9O1xuICAgIH0pKCk7XG5cbiAgICAvLyBDcmVhdGUgZWxlbWVudHMgb2YgdG9kbyBvbiB0aGUgcGFnZS5cbiAgICAvLyBEbyBub3QgY2hhbmdlIGVhc2lseVxuICAgIGNvbnN0IGNvbGxhcHNlVG9kbyA9ICh0b2RvKSA9PiAge1xuICAgICAgICBjb25zdCB0b2dnbGVJbXBvcnRhbmNlID0gKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGlmKHRvZG8uaW1wb3J0YW5jZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICB0b2RvLmltcG9ydGFuY2UgPSAnZmFsc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0b2RvLmltcG9ydGFuY2UgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHRvZG8uaW1wb3J0YW5jZSA9ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBkaXNwbGF5SW1wb3J0YW5jZUltZyA9ICh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZih0b2RvLmltcG9ydGFuY2UgPT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgIHJldHVybiBTdGFyO1xuICAgICAgICAgICAgZWxzZSBpZih0b2RvLmltcG9ydGFuY2UgPT0gJ2ZhbHNlJylcbiAgICAgICAgICAgICAgICByZXR1cm4gVW5zdGFyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ29sbGFwc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9Db2xsYXBzZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbGxhcHNlJyk7XG4gICAgICAgICAgICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdG9kb0ltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby1zdGF0dXMnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIHRvZG9TdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB0b2RvU3RhdHVzLmNoZWNrZWQgPSB0b2RvLnN0YXR1cztcblxuICAgICAgICAgICAgdG9kb0NvbGxhcHNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHRhc2tJbmRleCk7XG4gICAgICAgICAgICB0YXNrSW5kZXgrKztcblxuICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICB0b2RvSW1wb3J0YW5jZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWltcG9ydGFuY2UnKTtcbiAgICAgICAgICAgIHRvZG9JbXBvcnRhbmNlLnNyYyA9IGRpc3BsYXlJbXBvcnRhbmNlSW1nKHRvZG8pO1xuXG4gICAgICAgICAgICB0b2RvU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLnN0YXR1cyA9IHRvZG9TdGF0dXMuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b2RvSW1wb3J0YW5jZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlSW1wb3J0YW5jZSh0b2RvKTtcbiAgICAgICAgICAgICAgICB0b2RvSW1wb3J0YW5jZS5zcmMgPSBkaXNwbGF5SW1wb3J0YW5jZUltZyh0b2RvKTtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH0pICAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG9Db2xsYXBzZS5hcHBlbmRDaGlsZCh0b2RvU3RhdHVzKTtcbiAgICAgICAgICAgIHRvZG9Db2xsYXBzZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICAgICAgdG9kb0NvbGxhcHNlLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlKTtcbiAgICAgICAgICAgIHJldHVybiB0b2RvQ29sbGFwc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtkaXNwbGF5fTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0UGFuZWwgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBlZGl0UGFuZWxCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXBhbmVsJyk7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBjb25zdCBfY3JlYXRlRWRpdEJsb2NrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYmxvY2snKTtcbiAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBfY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0UGFuZWxCbG9jay50ZXh0Q29udGVudCA9ICcnOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSAoY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdGFza0xpc3QuZ2V0VGFzayhjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBfY2xlYXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5zcmMgPSBDb2xsYXBzZTtcbiAgICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGUtY29sbGFwc2UtYnV0dG9uJywgJ3NpZGUtaWNvbicpO1xuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBEZWxldGU7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZS1kZWxldGUtYnV0dG9uJywgJ3NpZGUtaWNvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRyb2xCbG9jay5jbGFzc0xpc3QuYWRkKCdzaWRlLWNvbnRyb2wtYmxvY2snKTtcbiAgICAgICAgICAgIGNvbnRyb2xCbG9jay5hcHBlbmRDaGlsZChjb2xsYXBzZUJ1dHRvbik7XG4gICAgICAgICAgICBjb250cm9sQmxvY2suYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQmxvY2sgPSBfY3JlYXRlRWRpdEJsb2NrKCk7XG4gICAgICAgICAgICBjb25zdCBteURheUJsb2NrID0gX2NyZWF0ZUVkaXRCbG9jaygpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUJsb2NrID0gX2NyZWF0ZUVkaXRCbG9jaygpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25CbG9jayA9IF9jcmVhdGVFZGl0QmxvY2soKTtcblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29uc3QgbXlEYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUuZGVmYXVsdFZhbHVlID0gY3VycmVudFRhc2sudGl0bGU7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdlZGl0LXBhbmVsLXRpdGxlJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3NpZGUtaWNvbicpO1xuICAgICAgICAgICAgbXlEYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlLW15LWRheS10aXRsZScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnc2lkZS1kZXNjJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3NpZGUtZHVlLWRhdGUnKTtcbiAgICAgICAgICAgIGR1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPSBjdXJyZW50VGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTQVZFJztcbiAgICAgICAgICAgIG15RGF5QmxvY2suZGF0YXNldC52YWx1ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICBteURheUJsb2NrLmNsYXNzTGlzdC5hZGQoJ215LWRheS1ibG9jaycpO1xuICAgICAgICAgICAgaWYoY3VycmVudFRhc2subXlEYXkgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgbXlEYXlCbG9jay5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXlEYXlCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihteURheUJsb2NrLmRhdGFzZXQudmFsdWUgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgICAgICBteURheUJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FkZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIG15RGF5QmxvY2suZGF0YXNldC52YWx1ZSA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihteURheUJsb2NrLmRhdGFzZXQudmFsdWUgPT0gJ3RydWUnKXtcbiAgICAgICAgICAgICAgICAgICAgbXlEYXlCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBteURheUJsb2NrLmRhdGFzZXQudmFsdWUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGljb24uc3JjID0gTXlEYXk7XG4gICAgICAgICAgICBteURheVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCB0byBNeSBEYXknO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0KTtcblxuICAgICAgICAgICAgdGl0bGVCbG9jay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICBteURheUJsb2NrLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgbXlEYXlCbG9jay5hcHBlbmRDaGlsZChteURheVRpdGxlKTtcbiAgICAgICAgICAgIGR1ZURhdGVCbG9jay5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQmxvY2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBlZGl0UGFuZWxCbG9jay5hcHBlbmRDaGlsZCh0aXRsZUJsb2NrKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbEJsb2NrLmFwcGVuZENoaWxkKG15RGF5QmxvY2spO1xuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2suYXBwZW5kQ2hpbGQoZHVlRGF0ZUJsb2NrKTtcbiAgICAgICAgICAgIGVkaXRQYW5lbEJsb2NrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQmxvY2spO1xuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2suYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgICAgICBlZGl0UGFuZWxCbG9jay5hcHBlbmRDaGlsZChjb250cm9sQmxvY2spO1xuICAgICAgICAgICAgZWRpdFBhbmVsQmxvY2suY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XG4gICAgICAgICAgICBlZGl0UGFuZWxCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0RWRpdGVkSW5mbyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSB0YXNrTGlzdC5nZXRUYXNrKGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IG15RGF5QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktZGF5LWJsb2NrJyk7XG4gICAgICAgICAgICAvL3JlZnJlc2ggaW5mbyBhY2NvcmluZyB0byB0aGUgcHJlc2VudCBlZGl0IHBhbmVsLlxuICAgICAgICAgICAgaW5mby5teURheSA9IG15RGF5QmxvY2suZGF0YXNldC52YWx1ZTtcbiAgICAgICAgICAgIGluZm8uZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1kZXNjJykudmFsdWU7XG4gICAgICAgICAgICBpbmZvLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgaW5mby50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXBhbmVsLXRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrTGlzdC5zZXRUYXNrKGluZGV4LCBnZXRFZGl0ZWRJbmZvKCkpOyBcbiAgICAgICAgICAgIHRhc2tMaXN0LnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGl0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wYW5lbCcpO1xuICAgICAgICAgICAgZWRpdFBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5lZCcpO1xuICAgICAgICAgICAgZWRpdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFza0xpc3QucmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ZGlzcGxheX1cbiAgICB9KSgpO1xuXG5cbiAgICAvLyBhZGQgdGFza1xuICAgIGNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlLCBzdGF0dXMsIG15RGF5KSA9PiB7XG4gICAgICAgIGlmKHRpdGxlID09ICcnIHx8IHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRVJST1I6IEVtcHR5IFRpdGxlIVwiKTsgLy8jVE9ET2NoYW5nZSB0byBBZGQgdHJpZ2dlciBub3Qgd29ya2luZyBhbmQgYmVjYW1lIGJsYWNrLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0YXNrID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UsIHN0YXR1cywgbXlEYXkpIC8vIGNyZWF0ZSBhIHRhc2tcbiAgICAgICAgdGFza0xpc3QuYWRkKHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrVGFzayA9IChlKSA9PiB7IC8vIGRpc3BsYXkgZWRpdCBwYW5lbCBvbiBjbGlja1xuICAgICAgICAgICAgaWYoIShlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ3RvZG8tc3RhdHVzJykgfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICd0b2RvLWltcG9ydGFuY2UnKSApe1xuICAgICAgICAgICAgICAgIGVkaXRQYW5lbC5kaXNwbGF5KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jb2xsYXBzZScpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgdGFza0luZGV4ID0gMDtcbiAgICAgICAgdGFza0xpc3QuZmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBhZGRCdXR0b24uY3JlYXRlKCk7XG4gICAgICAgIGlmKGZpbHRlciA9PSAnMCcpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LmdldEFsbFRhc2soKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Jsb2NrID0gY29sbGFwc2VUb2RvKHRhc2spLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Jsb2NrKTsvL2Rpc3BsYXkgdGhlIHRhc2sgb24gbWFpbiBwYWdlXG4gICAgICAgICAgICAgICAgdG9kb0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tUYXNrKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihmaWx0ZXIgPT0gJzEnKSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5nZXRBbGxUYXNrKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2suaW1wb3J0YW5jZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Jsb2NrID0gY29sbGFwc2VUb2RvKHRhc2spLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CbG9jayk7Ly9kaXNwbGF5IHRoZSB0YXNrIG9uIG1haW4gcGFnZVxuICAgICAgICAgICAgICAgICAgICB0b2RvQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1Rhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihmaWx0ZXIgPT0gJzInKSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5nZXRBbGxUYXNrKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2subXlEYXkgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9CbG9jayA9IGNvbGxhcHNlVG9kbyh0YXNrKS5kaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQmxvY2spOy8vZGlzcGxheSB0aGUgdGFzayBvbiBtYWluIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tUYXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGRUb2RvLCBhZGRCdXR0b24sIGNvbGxhcHNlVG9kbywgcmVuZGVyfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVDb250YWluZXJ9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==