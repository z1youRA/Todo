import './styles.css';
import { createContainer} from './main';
import { createHeader } from './header.js';
import { createSidebar } from './sidebar.js';

const rendorPage = (() => {
    createContainer.addButton.create();
    createHeader();
    createSidebar();
    // created for dev
    createContainer.addTodo('abc', 'task', '2022-1-1', false, false, false);
})();