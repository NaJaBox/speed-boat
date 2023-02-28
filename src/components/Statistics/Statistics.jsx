import { useContext, useEffect, useState } from "react";
import { BoatContext } from "../BoatContext/BoatContext";
import "./Statistics.scss";

// state of the gear
export const GearUp = () => {
  const { state } = useContext(BoatContext);
  console.log(state.gear);
  return (
    <div className="gear">
      <h3>Gear </h3> <span>{state.gear}</span>
    </div>
  );
};

// state of the speed
export const BoatSpeed = () => {
  const { state } = useContext(BoatContext);
  console.log(state.speed);
  return (
    <div className="speed">
      {/* <p>Engine: {state.engineStarted ? "ON" : "OFF"}</p> */}
      <h3>Boat speed </h3>
      <span>{state.speed} </span>
      <p>knots</p>
    </div>
  );
};

// traveled distance
export const BoatDistanceTraveled = () => {
  const { state } = useContext(BoatContext);
  const [traveledDistance, setTraveledDistance] = useState(0);

  useEffect(() => {
    if (state.gear === 0 && state.speed === 0) {
      return;
    }

    let interval;

    if (state.gear > 0 && state.speed > 0) {
      interval = setInterval(() => {
        setTraveledDistance((prevDistance) => prevDistance + state.speed / 60);
      }, 1000);
    } else if (state.gear === 0 && state.speed > 0) {
      setTraveledDistance((prevDistance) => prevDistance + state.speed / 60);
    }

    return () => clearInterval(interval);
  }, [state.gear, state.speed]);

  return (
    <div className="distance">
      <h3>Distance Traveled </h3>
      <span>
        {state.speed > 0
          ? traveledDistance.toFixed(2)
          : traveledDistance.toFixed(2)}
      </span>
      <p>Nautical Miles</p>
    </div>
  );
};
