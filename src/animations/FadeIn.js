import anime from "animejs";
import { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

//creates wave from click site and returns to original opacity
function FadeIn (e) {

    const {GRID_HEIGHT, GRID_WIDTH} = useContext(GridContext);

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: .5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.first,
      }),
    });
      //handles the fade out of divs
      anime({
        targets: ".dot-div",
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: e.target.dataset.first,
        }),
      });
  };

export default FadeIn;