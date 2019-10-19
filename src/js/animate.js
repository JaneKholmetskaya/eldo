function initAnimmation() {
  const randomSeconds = () => Math.floor(15000 + Math.random() * 125000);

  const randomStart = () => Math.floor(Math.random() * 360);

  function randomPosition() {
    let result = Math.floor(10 + Math.random() * 10);
    return result + "%";
  }

  const left = () => "left";

  $(".icons-wrapper .circle_animation").map((i, el) => {
    let start = randomStart();
    el.animate(
      [
        {
          transform: "rotate(" + start + "deg)"
        },
        {
          transform: "rotate(" + (start + 360) + "deg)"
        }
      ],
      {
        duration: randomSeconds(),
        iterations: Infinity
      }
    );
  });

  $(".icons-wrapper .circle").map(
    (i, el) => (el.style.left = randomPosition())
  );

  function randomSize() {
    const num = $(".icons-wrapper .circle");

    for (let i = 0; i <= num.length - 1; i++) {
      function randomWidth() {
        let result = 0.4 + Math.random() * 0.6;
        if (result > 0.7) {
          return 0.7 + "vh";
        }
        return result + "vh";
      }

      const index = randomWidth();

      const pos = $(".icons-wrapper .circle")[i];

      pos.style.width = index;
      pos.style.height = index;
    }
  }

  randomSize();
}
