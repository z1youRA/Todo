import './styles.css';
import { createContainer} from './main';
import { createHeader } from './header.js';
import { createSidebar } from './sidebar.js';

createContainer.addTodo();
createHeader();
createSidebar();