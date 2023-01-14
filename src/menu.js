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

function menu() {
  setActive('menu');

  const container = document.getElementById('container');

  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }

  container.classList.add('menu');


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

export default menu;