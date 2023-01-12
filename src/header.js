function header() {
  const content = document.getElementById('content');
  const parent = content.parentNode;

  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const home = document.createElement('div');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.textContent = 'Menu';

  const about = document.createElement('div');
  about.textContent = 'About';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);

  header.appendChild(nav);

  parent.insertBefore(header, content);
}

export default header;