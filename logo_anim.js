
// anime({
//   targets: '.st0',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 2500,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: true
// });

// anime({
//   targets: '.st1',
//   easing: 'easeInOutSine',
//   duration: 4250,
//   opacity: [0,1],
//   direction: 'alternate',
//   loop: true
// });



console.log('sup')

var tl = anime.timeline({
  duration: 2500, // Can be inherited
  easing: 'easeInOutSine', // Can be inherited
  direction: 'alternate', // Is not inherited
  loop: true // Is not inherited
});

tl
  .add({
    targets: '.st0',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
  })
  .add({
    targets: '.st1',
    easing: 'easeInOutSine',
    duration: 4250,

    opacity: [0, 1],
    direction: 'alternate',
  }, '-=2500') // relative offset