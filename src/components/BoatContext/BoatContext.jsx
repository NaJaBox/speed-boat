import { createContext, useReducer } from "react";

export const BoatContext = createContext();

const BoatContextProvider = ({ children }) => {
  
  const boatReducer = (state, action) => {
    switch (action.type) {
      case "START_ENGINE":
        // start the boat engine with 50% chance of success
        return Math.random() < 0.5 ? { ...state, engineStarted: true } : state;
      case "STOP_ENGINE":
        // stop the boat engine and reset gear to 0
        return { ...state, engineStarted: false, gear: 0, speed: 0 };
      case "CHANGE_GEAR_UP":
        // change gear up if the boat is started
        // and the gear is below 5
        if (state.engineStarted && state.gear < 5) {
          return { ...state, gear: state.gear + 1 };
        } else {
          return state;
        }
      case "CHANGE_GEAR_DOWN":
        // change gear down if the boat is started
        // and the gear is above -2
        if (state.engineStarted && state.gear > -2) {
          return { ...state, gear: state.gear - 1 };
        } else {
          return state;
        }
      case "INCREASE_SPEED":
        // increase speed if the boat is started
        // and the gear is not 0
        if (state.engineStarted && state.gear !== 0) {
          return {
            ...state,
            speed: state.speed + state.gear,
            startTime: Date.now(),
          };
        } else {
          return state;
        }
      case "DECREASE_SPEED":
        // decrease speed if the boat is started
        // and the gear is not 0
        if (state.engineStarted && state.gear !== 0) {
          return { ...state, speed: state.speed - state.gear };
        } else {
          return state;
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(boatReducer, {
      engineStarted: false,
      gear: 0,
      speed: 0,
    });
    const value = { state, dispatch };

  return <BoatContext.Provider value={value}>{children}</BoatContext.Provider>;
};

export default BoatContextProvider;
