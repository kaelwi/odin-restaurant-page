import image from './about.jpg';

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

function about() {
  setActive('about');

  const container = document.getElementById('container');
  container.classList.add('about');

  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }

  const about1 = document.createElement('p');
  about1.textContent = 'Ut venenatis pellentesque enim, vitae dictum magna faucibus ut. In eget lacus purus. Ut eget felis porttitor, luctur nibh sed, aliquet mauris. In tincidunt ut urna non ultrices. Nam viverra ex ullamcorper sollicitudin ultrieces. Pellentesque tincidunt vulputate ante. Sed lobortis velit felis, eget posuere sem accumsan eu. In gravida vehicula risus, sed faucibus nulla porttitor sit amet. Curabitur accumsan, metus id tempor tincidunt, elit quam interdum lectus, in tristique nunc enim quis arcu.';
  about1.style.fontStyle = 'italic';
  container.appendChild(about1);

  const img = new Image();
  img.src = image;
  container.appendChild(img);

  /*
  const about2 = document.createElement('p');
  about2.textContent = 'Sed bibendum nulla sit amet tortor finibus, eu vulputate arcu lacinia. Praesent vitae mauris pretium, commodo ex non, sodales tellus. Nam et varius arcu. Maecenas convallis ante eu est mattis pretium. Mauris ullamcorper egestas congue. Praesent nisl nibh, cursus at diam quis, faucibus tincidunt dolor. Nulla auctor elit non tellus tincidunt, vitae feugiat velit efficitur. Aenean euismod aliquam placerat. Vivamus nec laoreet leo, et luctus augue. Integer volutpat posuere pretium. Nam lobortis, turpis id scelerisque tincidunt, dolor libero semper massa, sit amet ornare diam leo ut purus.';
  about2.style.fontStyle = 'italic';
  container.appendChild(about2);
  */
}

export default about;