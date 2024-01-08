import anime from "animejs";
import FadeIn from "../animations/FadeIn";
import { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

const WaterDropGrid = () => {
  return (
    <div className="absolute grid place-content-center">
      <DotGrid />
    </div>
  );
};


const handleDotClickDissapear = (e) => {

    const {GRID_HEIGHT, GRID_WIDTH} = useContext(GridContext);

    //handles dot animations
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
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: e.target.dataset.index,
        }),
      });
      //handles the fade out of divs
      anime({
        targets: ".dot-div",
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: e.target.dataset.index,
        }),
      });
};

function conditonalFadeClick (e) {
    
    if ( e.target.style.opacity > 0 ) {
        handleDotClickDissapear(e)
    } else {
        FadeIn(e)
    }
}

const DotGrid = () => {


  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="dot-div group p-1 transition-colors bg-white m-0"
          style={{opacity: 1}}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-4 w-4 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
            style={{opacity: .5}}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={conditonalFadeClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;