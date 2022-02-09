

anime({
    targets: '#inner_box',
    // translateX: 250,
    rotate: '1turn',
    // backgroundColor: '#FFF',
    duration: 1600
  });


anime({
  targets: '#morpher',
  d: [
    { value: [
      'M0,56c0,0,58.8-25.2,104.5-12.9S227.8,69.6,256,47.9']
    },
    { value: 'M0,56c0,0,75.1,27.5,116,0c40.7-27.4,101.9-27.1,140-8.1' },
    { value: 'M0,56c0,0,59.3,6.7,104.5-12.9C148,24.3,227.8,69.6,256,47.9' },
    { value: 'M0,56c0,0,58.8-25.2,104.5-12.9S227.8,69.6,256,47.9' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true
});
