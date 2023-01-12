function home() {
  const content = document.getElementById('content');
  const p = document.createElement('p');
  p.innerText = 'Test';
  content.appendChild(p);
}

export default home;
