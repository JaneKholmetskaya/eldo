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
  // $(" [class*='analitic-section-'] [class*='icon-']").map((i, el) => {
  //   console.log(el);
  //   let start = randomStart();
  //   el.animate(
  //     [
  //       {
  //         transform: "transform(50px)"
  //       },
  //       {
  //         transform: "transform(100px)"
  //       }
  //     ],
  //     {
  //       iterations: Infinity
  //     }
  //   );
  // });

  $(".icons-wrapper .circle_animation:nth-child(2n+1)").map((i, el) => {
    let start = randomStart();
    el.animate(
      [
        {
          transform: "rotate(" + start + "deg)"
        },
        {
          transform: "rotate(" + (start - 360) + "deg)"
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
// $("logo-wrapper .logo").click(function() {
//   console.log();
//   $("html, body").animate({ scrollTop: $("#header").offset().top }, 1000);
//   // $("html, body").animate({ scrollTop: 0 }, 600);
// });
$(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $(".nav-inner-wraper").addClass("glide");
  } else {
    $(".nav-inner-wraper").removeClass("glide");
  }
});
