let animation = anime({
    targets: '#blocker',
    translateX: 100,
    translateY: 100,
    borderRadius: 30,
    duration: 2000,
    easing: 'linear',
    direction: 'alternate',
    loop: true
});

let amation2 = anime({
    targets: '#blocker2',
    translateX: 0,
    translateY: 300,
    duration: 4000,
    borderRadius: 100,
    easing: 'linear',
    direction: 'alternate'
})
