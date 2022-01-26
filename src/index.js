import './styles.css';
import { createContainer} from './main';
import { createHeader } from './header.js';
import { createSidebar } from './sidebar.js';

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