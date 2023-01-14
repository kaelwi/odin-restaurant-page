import './style.css';
import './headerStyle.css';
import './footerStyle.css';
import './homeStyle.css';
import './menuStyle.css';
import './aboutStyle.css';

import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import header from './header.js';
import footer from './footer.js';

const content = document.getElementById('content');
const container = document.createElement('div');
container.id = 'container';
content.appendChild(container);

header();
home();
footer();

const nav = document.getElementsByTagName('nav')[0];

if (nav !== null) {
  for (let div of nav.children) {
    div.addEventListener('click', () => {
      if (div.id === 'home') {
        home();
      } else if (div.id === 'menu') {
        menu();
      } else if (div.id === 'about') {
        about();
      }
    })
  } 
} else {
  console.log('null');
}

