const createHeader = () => {
    const header = document.querySelector('.header');
    const title = document.createElement('div');
    title.textContent = 'TooDo LIST';
    title.classList.add('title');

    header.appendChild(title);
}

export {createHeader};