import sunPic from './img/sun.png';
import Star from './img/unstar.png';
import Inbox from './img/all-inbox.png';

const createSideblock = (name, imgSrc) => {
    const block = document.createElement('div');
    const icon = document.createElement('img');
    const title = document.createElement('div');
    
    title.textContent = name;
    icon.src = imgSrc;
    block.classList.add('side-block');
    icon.classList.add('side-icon');
    title.classList.add('side-title');
    block.appendChild(icon);
    block.appendChild(title);

    return block;
}

const createSidebar = () => {
    const sidebar = document.querySelector('.sidebar');

    const myDayBlock = createSideblock('My Day', sunPic);
    const importantBlock =createSideblock('Important', Star);
    const inboxBlock = createSideblock('All Inbox', Inbox);

    myDayBlock.classList.add('my-day-class');
    importantBlock.classList.add('important-class');
    inboxBlock.classList.add('inbox-class')

    sidebar.appendChild(inboxBlock);
    sidebar.appendChild(myDayBlock);
    sidebar.appendChild(importantBlock);
}

export {createSidebar};