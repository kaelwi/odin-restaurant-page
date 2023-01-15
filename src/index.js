import './style.css';
import './header/headerStyle.css';
import './footer/footerStyle.css';

import header from './header/header.js';
import footer from './footer/footer.js';
import loadContent from './content.js';

const content = document.getElementById('content');
const container = document.createElement('div');
container.id = 'container';
content.appendChild(container);

header();
loadContent('home');
footer();

const nav = document.getElementsByTagName('nav')[0];
if (nav !== null) {
  for (let div of nav.children) {
    div.addEventListener('click', () => {
      loadContent(div.id);
    });
  } 
} else {
  console.log('Nav element NULL!');
}