

anime({
    targets: '#inner_box',
    // translateX: 250,
    rotate: '1turn',
    // backgroundColor: '#FFF',
    duration: 1600
  });


// anime({
//   targets: '#curver',
//   d: [
//     { value: [
//       'M 10 80 Q 52.5 10, 95 80 T 180 80']
//     },
//     { value: 'M 10 60 Q 52.5 10, 95 80 T 180 60' },
//     { value: 'M 10 40 Q 52.5 10, 95 80 T 180 40' },
//     { value: 'M 10 80 Q 52.5 10, 95 80 T 180 80' }
//   ],
//   easing: 'easeInOutQuad',
//   duration: 2000,
//   loop: true
// });


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