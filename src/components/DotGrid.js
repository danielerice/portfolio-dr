import React from "react";
import { useContext } from "react";
import { GridContext } from "../contexts/GridContext";


function DotGrid () {

    const {GRID_HEIGHT, GRID_WIDTH} = useContext(GridContext)

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

export default DotGrid;