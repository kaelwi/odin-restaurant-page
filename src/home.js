function home() {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.id = 'container';

  const intro = document.createElement('p');
  intro.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc dui, cursus id enim viverra, ornare feugiat mauris. Nulla a laoreet tortor. Nunc a rutrum massa. Maecenas ut vulputate urna. Nulla in odio et odio semper pellentesque. Pellentesque habitant morbi tristique senectur et netus et malesuada fames ac turpis egestas.';
  
  container.appendChild(intro);
  content.appendChild(container);
}

export default home;
