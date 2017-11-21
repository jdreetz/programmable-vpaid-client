export default class Display {
  constructor(container) {
    this.el = this.initEl();
    container.appendChild(this.el);
  }

  initEl() {
    const el = document.createElement('div');
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.backgroundColor = 'green';
    el.style.fontFamily = 'sans-serif';
    el.style.color = 'white';
    el.innerHTML = 'Programmable VPAID Creative';

    return el;
  }

  draw() {

  }
}