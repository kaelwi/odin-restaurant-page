function footer() {
  const content = document.getElementById('content');
  const parent = content.parentNode;

  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = 'Created by kaelwi 01/2023';

  const hr = document.createElement('hr');
  
  footer.appendChild(hr);
  footer.appendChild(p);
  parent.appendChild(footer);
}

export default footer;