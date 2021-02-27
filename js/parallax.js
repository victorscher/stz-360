;(function() {
  var throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
          if (running) { return; }
          running = true;
          requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };
  
  throttle ("scroll", "optimizedScroll");
})();

let section2title = document.querySelector(".section-2-title");
let section2text = document.querySelector(".section-2-text");
let section2image = document.querySelector(".section-2-image");
let section2texture = document.querySelector(".section-2-texture");

let section3title = document.querySelector(".section-3-title");
let section3text = document.querySelector(".section-3-text");


window.addEventListener("optimizedScroll", () => {
    if(window.pageYOffset >= 50){
        section2title.style.transform = "translateY(-20px)";
        section2title.style.opacity = "1";

        section2text.style.transform = "translateY(-20px)";
        section2text.style.opacity = "1";

        section2image.style.transform = "translateY(0px)";
        section2image.style.opacity = "1";

        section2texture.style.transform = "translateY(0px)";
        section2texture.style.opacity = "1";
    }

    if(window.pageYOffset >= 200){
        section3title.style.transform = "translateY(0px)";
        section3title.style.opacity = "1";
        
        section3text.style.transform = "translateY(0px)";
        section3text.style.opacity = "1";
    }
});