
anime({
  targets: '.bezi',
  d: [
    { value: [
      'M 10 80 Q 52.5 10, 95 80 T 180 80']
    },
    { value: 'M 10 60 Q 52.5 10, 95 80 T 180 60' },
    { value: 'M 10 40 Q 52.5 10, 95 80 T 180 40' },
    { value: 'M 10 80 Q 52.5 10, 95 80 T 180 80' }
  ],
  delay: anime.stagger(100),
  // easing: 'easeInOutQuad', 
  easing: 'linear', 
  duration: 2000,
  loop: true
});

anime({
  targets: '.quadcurve',
  d: [
    { value: [
      'M 0 600 Q 400 20 800 400 T 1920 800']
    },
    { value: 'M 0 400 Q 500 30 900 400 T 1920 700' },
    { value: 'M 0 360 Q 600 70 1000 400 T 1920 600' },
    // { value: 'M 0 400 Q 500 30 900 400 T 1920 700' },
    { value: 'M 0 600 Q 400 20 800 400 T 1920 800' }
  ],
  delay: anime.stagger(200),
  // offset: '+= 100',
  easing: 'easeInOutSine', 
  // easing: 'linear', 
  // easing: 'cubicBezier(.5, .05, .1, .3)',
  // duration: anime.stagger(100),
  duration: 2000,
  loop: true
});

