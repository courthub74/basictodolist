let btnAdd = document.querySelector('#add');
let btnRemove = document.querySelector('#remove');
let input = document.querySelector('input');

btnAdd.addEventListener('click', () => {
    input.setAttribute('readonly', true);
});

btnRemove.addEventListener('click', () => {
    input.removeAttribute('readonly');
});