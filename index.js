const wrapperEl = document.querySelector('svg.svg_container');
const numberOfEls = 50;
const duration = 20000;
const delay = duration / numberOfEls;

let tl = anime.timeline({
  duration: delay,
  complete: function() { tl.restart(); }
});

function createEl(i) {
  let el = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  // const hue = Math.round(360 / numberOfEls * i);

  el.classList.add('el');
  el.setAttribute('stroke', 'red')
  el.setAttribute('stroke-width', '2')
  el.setAttribute('fill', 'transparent')
  el.setAttribute('d', 'M 0 600 Q 400 20 800 400 T 1920 800')
   // el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';

  tl.add({
    begin: function() {
      anime({
        targets: el,
        d: [
          { value: [
            'M 0 600 Q 400 20 800 400 T 1920 800']
          },
          { value: 'M 0 400 Q 500 30 900 400 T 1920 700' },
          // { value: 'M 0 360 Q 600 70 1000 400 T 1920 600' },
          { value: 'M 0 600 Q 400 20 800 400 T 1920 800' }
        ],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration * .1
      });
    }
  });
  wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);

