const wrapperEl = document.querySelector('svg.svg_container');
const numberOfEls = 20;
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
  el.setAttribute('stroke', '#F2C12E')
  el.setAttribute('stroke-width', '5')
  el.setAttribute('opacity', '0')
  el.setAttribute('fill', 'transparent')
  el.setAttribute('d', 'M 0 600 Q 400 20 800 400 T 1920 800')
   // el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';

  tl.add({
    begin: function() {
      anime({
        targets: el,
        d: [
          // { value: [
          //   'M 0 600 Q 400 20 800 400 T 1920 800']
          // },
          { value: 'M 0 400 Q 500 30 900 400 T 1920 200' },
          { value: 'M 0 100 Q 500 30 900 400 T 1920 400' },
          { value: 'M 0 300 Q 600 100 1000 400 T 1920 600' },
          { value: 'M 0 600 Q 400 200 1200 400 T 1920 800' },
          { value: 'M 0 800 Q 400 400 1500 400 T 1920 1200' }
        ],
        opacity: [0,.1,1,1,.1],
        update: function(anim){
          el.style.filter = 'blur(' + 30 * anim.progress / 100 + 'px)'
        },
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration * .5
      });
    }
  });
  wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);

