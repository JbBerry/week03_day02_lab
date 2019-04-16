console.log(window.document);

document.addEventListener('DOMContentLoaded',()=>{
  const title = document.querySelector('h1');
  title.textContent= 'JS says Hello World';

  const text = document.querySelector('#welcome-paragraph')
// querySelector finds ther first element which matahces the query
  console.log(text);
  console.dir(text);

  const listItems = document.querySelectorAll('li')
  console.log(listItems);
// querySelectorAll produces an array of all elements that match the querySelector

  const redListItem = document.querySelector('li.red');
// there is a list item with colour red ...
  redListItem.textContent = 'RED!!';
  redListItem.classList.add('bold'); // bold is defined in CSS

  const newListItem = document.createElement('li');
  newListItem.textContent = 'Purple';
  newListItem.classList.add('purple'); // purple is defined in CSS
  const list = document.querySelector('ul');
  list.appendChild(newListItem); // now it has been created it needs adding to the node tree.

  const testImage = document.createElement('img');
  testImage.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
  const body = document.querySelector('body');
  body.appendChild(testImage);

});
