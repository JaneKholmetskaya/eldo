var LoadContent;
$(document).ready(function() {
  setTimeout(function() {
    LoadContent = fetch("./content.html")
      .then(function(res) {
        return res.text();
      })
      .then(function(text) {
        $("#fullpage").html(text);

        var loaders = [];
        $("#fullpage object").map(function(i, obj) {
          loaders.push(
            new Promise(function(resolve, reject) {
              $(obj).ready(function(a) {
                setTimeout(function() {
                  if (obj.contentDocument) {
                    var animate = obj.contentDocument.getElementsByTagName(
                      "animate"
                    )[0];
                    animate && animate.endElement();
                  }
                  resolve();
                }, 1000);
              });
            })
          );
        });

        $("#fullpage img").map(function(i, img) {
          loaders.push(
            new Promise(function(resolve, reject) {
              img.onload = function(a) {
                resolve();
              };
            })
          );
        });

        return Promise.all(loaders);
      })

      .then(function() {
        $("body").removeClass("loading");
        $("header").fadeOut(500);
        setTimeout(function() {
          var obj = $("#header .video-link object")[0];
          $(obj).ready(function() {
            console.log(obj);
            var animates = obj.contentDocument.getElementsByTagName("animate");
            animates[0].beginElement();
          });
        }, 2000);
      })

      .then(function() {
        return initFullpage();
      })
      .then(function() {
        initMap();
        document
          .querySelector(".mapboxgl-ctrl-bottom-right")
          .parentNode.removeChild(
            document.querySelector(".mapboxgl-ctrl-bottom-right")
          );
        initStatistic();
        initAnimmation();
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve();
          }, 5000);
        });
      });
  }, 4000);
});

$(window).bind("resize ready", function(e) {
  LoadContent = fetch("./content.html")
    .then(function() {
      return initFullpage();
    })
    .then(function() {
      initMap();
      initStatistic();
      initAnimmation();
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, 5000);
      });
    })
    .then(function() {
      $("body").removeClass("loading");
      $("header").fadeOut(1000);
      setTimeout(function() {
        var obj = $("#header .video-link object")[0];
        $(obj).ready(function() {
          console.log(obj);
          var animates = obj.contentDocument.getElementsByTagName("animate");
          animates[0].beginElement();
        });
      }, 1000);
    });
});
