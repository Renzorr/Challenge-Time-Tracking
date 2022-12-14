anime({
  targets: ".profile",
  opacity: [0, 1],
  translateX: [-500, 0],
  delay: anime.stagger(100, { start: 300 })
});

anime({
  targets: ".card-top",
  opacity: [0, 1],
  translateY: [-200, 0],
  delay: anime.stagger(100, { start: 300 })
});

anime({
  targets: ".card-bottom",
  opacity: [0, 1],
  translateY: [200, 0],
  delay: anime.stagger(100, { start: 300 })
});
