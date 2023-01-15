import image from './res/about.jpg';

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

function removeContent(where) {
  while(where.firstChild) {
    where.removeChild(where.lastChild);
  }
}

function home(container) {
  const intro = document.createElement('p');
  intro.textContent = 'Neque porro quisquam est qui dolorem ipsum quia dolor ' +
    'sit amet, consectetur, adipisci velit...';
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
  outro.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
    'elit. Sed nunc dui, cursus id enim viverra, ornare feugiat mauris. Nulla ' +
    'a laoreet tortor. Nunc a rutrum massa. Maecenas ut vulputate urna. Nulla ' +
    'in odio et odio semper pellentesque. Pellentesque habitant morbi tristique ' +
    'senectur et netus et malesuada fames ac turpis egestas. Orci varius natoque ' +
    'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ' +
    'at commodo magna. Fusce porta tempus congue.';
  container.appendChild(outro);

  content.appendChild(container);
}

function about(container) {
  const about1 = document.createElement('p');
  about1.textContent = 'Ut venenatis pellentesque enim, vitae dictum magna ' +
    'faucibus ut. In eget lacus purus. Ut eget felis porttitor, luctur nibh sed, ' +
    'aliquet mauris. In tincidunt ut urna non ultrices. Nam viverra ex ullamcorper ' +
    'sollicitudin ultrieces. Pellentesque tincidunt vulputate ante. Sed lobortis ' +
    'velit felis, eget posuere sem accumsan eu. In gravida vehicula risus, sed ' +
    'faucibus nulla porttitor sit amet. Curabitur accumsan, metus id tempor ' +
    'tincidunt, elit quam interdum lectus, in tristique nunc enim quis arcu.';
  about1.style.fontStyle = 'italic';
  container.appendChild(about1);

  const img = new Image();
  img.src = image;
  container.appendChild(img);
}

function menu(container) {
  const main = document.createElement('div');

  const mainHeading = document.createElement('h3');
  mainHeading.textContent = 'Pizza';
  main.appendChild(mainHeading);

  const hrMain = document.createElement('hr');
  main.appendChild(hrMain);

  const firstDish = document.createElement('div');
  const firstDishDescription = document.createElement('p');
  firstDishDescription.textContent = 'Lorem ipsum dolor sit amet';
  const firstDishPrice = document.createElement('p');
  firstDishPrice.textContent = '12 $';
  firstDish.appendChild(firstDishDescription);
  firstDish.appendChild(firstDishPrice);
  main.appendChild(firstDish);

  const secondDish = document.createElement('div');
  const secondDishDescription = document.createElement('p');
  secondDishDescription.textContent = 'Consectetur';
  const secondDishPrice = document.createElement('p');
  secondDishPrice.textContent = '10 $';
  secondDish.appendChild(secondDishDescription);
  secondDish.appendChild(secondDishPrice);
  main.appendChild(secondDish);

  container.appendChild(main);

  const drinks = document.createElement('div');

  const drinksHeading = document.createElement('h3');
  drinksHeading.textContent = 'Beverages';
  drinks.appendChild(drinksHeading);

  const hrDrinks = document.createElement('hr');
  drinks.appendChild(hrDrinks);

  const firstDrink = document.createElement('div');
  const firstDrinkDescription = document.createElement('p');
  firstDrinkDescription.textContent = 'Egestas tempus';
  const firstDrinkPrice = document.createElement('p');
  firstDrinkPrice.textContent = '7 $';
  firstDrink.appendChild(firstDrinkDescription);
  firstDrink.appendChild(firstDrinkPrice);
  drinks.appendChild(firstDrink);

  const secondDrink = document.createElement('div');
  const secondDrinkDescription = document.createElement('p');
  secondDrinkDescription.textContent = 'Pellentesque';
  const secondDrinkPrice = document.createElement('p');
  secondDrinkPrice.textContent = '8.5 $';
  secondDrink.appendChild(secondDrinkDescription);
  secondDrink.appendChild(secondDrinkPrice);
  drinks.appendChild(secondDrink);

  container.appendChild(drinks);
}

function loadContent(id) {
  setActive(id);
  const container = document.getElementById('container');
  removeContent(container);

  if (id === 'home') {
    home(container);
  } else if (id === 'menu') {
    container.classList.add('menu');
    menu(container);
  } else if (id === 'about') {
    container.classList.add('about');
    about(container);
  }
}

export default loadContent;