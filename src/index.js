import './styles.css';
import { createContainer} from './main';
import { createHeader } from './header.js';
import { createSidebar } from './sidebar.js';

createContainer.createAddButton();
createContainer.addTodo('abc', 'aaa', '2022-01-24', '1');
createHeader();
createSidebar();