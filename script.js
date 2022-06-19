const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');

  listItem.append(listText, listButton);
  list.appendChild(listItem);

  listText.textContent = myItem;
  listButton.textContent = 'Delete';

  listButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
