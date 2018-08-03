function createNewElm(tag, attributes, text) {
  let elm = document.createElement(tag);

  if(!attributes || attributes !== null) {
    for(let i in attributes) {
      elm.setAttribute(i, attributes[i]);
    }
  }
  if(!text || text !== null || text !== undefined) {
    elm.innerHTML = text;
    return elm;
  } else {
    return elm;
  }
  // return (text !== null || text !== undefined) ? elm.innerHTML = text : elm;
}

let parent = document.getElementById('main');
let content = parent.appendChild(createNewElm('div', {id: 'content'}, null));
let contentPost = content.appendChild(createNewElm('div', {class: 'content-post'}, null));

contentPost.appendChild(createNewElm('h1', null, 'Judul Post'));
contentPost.appendChild(createNewElm('span', null, 'Published on 12 May 2016'));
contentPost.appendChild(createNewElm('p', null, 'Lorem Ipsum Dolor Sit Amet'));
contentPost.appendChild(createNewElm('button', {class: 'share-post-btn'}, 'Sharet this Post'));

let contentPost2 = content.appendChild(createNewElm('div', {class: 'content-post'}, null));
contentPost2.appendChild(createNewElm('h1', null, 'Judul Post 2'));
contentPost2.appendChild(createNewElm('span', null, 'Published on 12 May 2016'));
contentPost2.appendChild(createNewElm('p', null, 'Lorem Ipsum Dolor Sit Amet'));
contentPost2.appendChild(createNewElm('button', {class: 'share-post-btn'}, 'Sharet this Post'));

contentPost.lastElementChild.addEventListener('click', function() {
  alert('You have shared this post!');
});
contentPost2.lastElementChild.addEventListener('click', function() {
  alert('You have shared this post!');
});