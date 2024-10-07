let activ = false;
let root = 0;
let root2 = 0;

function toggleButton() {
  const menu1 = document.querySelector('.menu-line1');
  const menu2 = document.querySelector('.menu-line2');
  const slidebar = document.querySelector('.slidebar');
  const body = document.querySelector('body');
  if (activ == false) {
    root -= 45;
    menu1.style.top = 15 + 'px';
    menu1.style.transform = `rotate(${root}deg)`;

    menu2.style.transformOrigin = 'bottom center';
    root2 += 45;
    menu2.style.top = 7 + 'px';
    menu2.style.transform = `rotate(${root2}deg)`
slidebar.style.width = '100%'
    activ = true;
    body.style.overflow = 'hidden';
  } else {
    root += 45;
    menu1.style.top = 12 + 'px';
    menu1.style.transform = `rotate(${root}deg)`;
    menu2.style.transformOrigin = 'bottom center';
    root2 -= 45;
    menu2.style.top = 12 + 'px';
    menu2.style.transform = `rotate(${root2}deg)`;
slidebar.style.width = '0%'
    activ = false;
    body.style.overflow = 'auto';
  }
}
