import './styles.css';
import { createContainer} from './main';
import { createHeader } from './header.js';
import { createSidebar } from './sidebar.js';

const renderPage = (() => {

    createHeader();
    createSidebar();
    // created for dev
    // createContainer('0').addButton.create();
    // createContainer('0').addTodo('abc', 'task', '2022-1-1', false, false, false);
    createContainer('0').render();
})();