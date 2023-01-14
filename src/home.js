function setActive(id) {
  const active = document.getElementById(id);
  active.classList.add('active');

  const notActive = active.parentElement.children;
  for (let div of notActive) {
    if (div !== active) {
      div.classList.remove('active');
    }
  }
}

function home() {
  setActive('home');

  const container = document.getElementById('container');

  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }

  const intro = document.createElement('p');
  intro.textContent = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
  intro.style.fontStyle = 'italic';
  container.appendChild(intro);

  const hours = document.createElement('div');
  hours.id = 'hours';
  const hoursHeading = document.createElement('h3');
  hoursHeading.textContent = 'Hours';
  const thursday = document.createElement('p');
  thursday.textContent = 'Thursday 11:30 - 17:00';
  const friday = document.createElement('p');
  friday.textContent = 'Friday 11:30 - 23:00';
  const saturday = document.createElement('p');
  saturday.textContent = 'Saturday 11:30 - 23:00';

  hours.appendChild(hoursHeading);
  hours.appendChild(thursday);
  hours.appendChild(friday);
  hours.appendChild(saturday);
  container.appendChild(hours);

  const outro = document.createElement('p');
  outro.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc dui, cursus id enim viverra, ornare feugiat mauris. Nulla a laoreet tortor. Nunc a rutrum massa. Maecenas ut vulputate urna. Nulla in odio et odio semper pellentesque. Pellentesque habitant morbi tristique senectur et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at commodo magna. Fusce porta tempus congue.';
  container.appendChild(outro);

  content.appendChild(container);
}

export default home;
