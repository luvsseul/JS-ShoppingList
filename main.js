

const addButton = document.querySelector('.addButton');
const removeButton = document.querySelector('.removeButton');
addButton.addEventListener('click', () => {
    const listValue = document.querySelector('.listName').value;
    const listName = document.querySelector('.listName');
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const btn = document.createElement('button');

    const listBox = document.querySelector('.listBox');
    listBox.appendChild(div);
    div.setAttribute('class', 'listRow');
    div.appendChild(ul);
    ul.innerText = listValue;
    div.appendChild(btn);
    btn.setAttribute('class', 'rmv');
    btn.innerText = 'rmv';
    btn.addEventListener('click', () => {
        listBox.removeChild(div);
    });
    removeButton.addEventListener('click', () => {
        listBox.removeChild(div);
    });
    listName.value = '';
});
