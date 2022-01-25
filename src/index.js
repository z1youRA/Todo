import './styles.css';
import { createContainer} from './main';
import { createHeader } from './header.js';
import { createSidebar } from './sidebar.js';

const renderPage = (() => {
    createHeader();
    createSidebar();
    const allInbox = document.querySelector('.inbox-class');
    const important = document.querySelector('.important-class');
    const myDay = document.querySelector('.my-day-class');
    allInbox.classList.add('current');
    createContainer('0').render();
    const clickAllInbox = () => {
        createContainer('0').render();
        allInbox.classList.add('current');
        important.classList.remove('current');
        myDay.classList.remove('current');
    }

    const clickImportant = () => {
        createContainer('1').render();
        allInbox.classList.remove('current');
        important.classList.add('current');
        myDay.classList.remove('current');
    }

    const clickMyDay = () => {
        createContainer('2').render();
        allInbox.classList.remove('current');
        important.classList.remove('current');
        myDay.classList.add('current');
    }
    allInbox.addEventListener('click', clickAllInbox);
    important.addEventListener('click', clickImportant);
    myDay.addEventListener('click', clickMyDay);
})();