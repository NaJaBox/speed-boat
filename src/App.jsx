import React from "react";
import "./App.scss";
import { BoatControls } from "./components/BoatControls/BoatControls";
import { BoatSpeed } from "./components/Statistics/Statistics";
import { BoatDistanceTraveled } from "./components/Statistics/Statistics";
import { GearUp } from "./components/Statistics/Statistics";
import Canvas from "./components/Canvas/Canvas";
import compass from "./assets/compass.png";

export const App = () => {
  return (
    <div className="app">
      <div className="canvas">
        <Canvas />
      </div>
      <div className="controlPan">
        <div className="statistics">
          <div className="bgImage">
            <img src={compass} alt="" />
          </div>
          <BoatSpeed />
          <BoatDistanceTraveled />
          <GearUp />
        </div>
        <div className="btn">
          <BoatControls />
        </div>
      </div>
    </div>
  );
};
