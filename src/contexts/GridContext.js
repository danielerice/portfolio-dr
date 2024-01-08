import {createContext} from "react";



const GridContext = createContext();

function GridProvider({ children }) {

    const GRID_WIDTH = 60;
    const GRID_HEIGHT = 30;

    return <GridContext.Provider value={{GRID_HEIGHT, GRID_WIDTH}}>{children}</GridContext.Provider>
}

export {GridContext, GridProvider};