import { useContext, useEffect } from "react";
import "./BoatControls.scss";
import { BoatContext } from "../BoatContext/BoatContext.jsx";
import wheel from "../../assets/bg-wheel.png";

export const BoatControls = () => {
  const { state, dispatch } = useContext(BoatContext);

  const startEngine = () => {
    dispatch({ type: "START_ENGINE" });
  };

  const stopEngine = () => {
    dispatch({ type: "STOP_ENGINE" });
  };

  const changeGearUp = () => {
    dispatch({ type: "CHANGE_GEAR_UP" });
  };

  const changeGearDown = () => {
    dispatch({ type: "CHANGE_GEAR_DOWN" });
  };

  const increaseSpeed = () => {
    dispatch({ type: "INCREASE_SPEED" });
  };

  const decreaseSpeed = () => {
    dispatch({ type: "DECREASE_SPEED" });
  };

  // Function to update the appearance of the buttons based on the state
  function updateButtonAppearance() {
    // Update the appearance of the start engine button
    if (state.engineStarted) {
      document.getElementById("start-engine").classList.add("engine-on");
    } else {
      document.getElementById("start-engine").classList.remove("engine-on");
    }

    // Update the appearance of the stop engine button
    if (state.engineStarted) {
      document.getElementById("stop-engine").classList.add("engine-off");
    } else {
      document.getElementById("stop-engine").classList.remove("engine-off");
    }

    // Update the appearance of the gear buttons
    if (state.gear > 0) {
      document.getElementById("gear-up").classList.add("gear-on");
      document.getElementById("gear-down").classList.add("gear-on");
    } else {
      document.getElementById("gear-up").classList.remove("gear-on");
      document.getElementById("gear-down").classList.remove("gear-on");
    }

    // Update the appearance of the speed buttons
    if (state.speed > 0) {
      document.getElementById("speed-up").classList.add("speed-on");
      document.getElementById("speed-down").classList.add("speed-on");
    } else {
      document.getElementById("speed-up").classList.remove("speed-on");
      document.getElementById("speed-down").classList.remove("speed-on");
    }
  }

  // Attach event listeners to the buttons
  useEffect(() => {
    updateButtonAppearance();
    document.getElementById("start-engine").addEventListener("click", () => {
      state.engineStarted = true;
      updateButtonAppearance();
    });

    document.getElementById("stop-engine").addEventListener("click", () => {
      state.engineStarted = false;
      state.gear = 0;
      state.speed = 0;
      updateButtonAppearance();
    });

    document.getElementById("gear-up").addEventListener("click", () => {
      updateButtonAppearance();
    });

    document.getElementById("gear-down").addEventListener("click", () => {
      updateButtonAppearance();
    });

    document.getElementById("speed-up").addEventListener("click", () => {
      updateButtonAppearance();
    });

    document.getElementById("speed-down").addEventListener("click", () => {
      updateButtonAppearance();
    });
  }, [state]);

  return (
    <div className="controls">
      <div className="bgImg">
        <img src={wheel} alt="" />
      </div>
      <div className="controlBtn">
        <div className="gr1">
          <button onClick={startEngine} id="start-engine" className="btn">
            Start Engine
          </button>
          <button onClick={stopEngine} id="stop-engine" className="btn">
            Stop Engine
          </button>
        </div>

        <div className="gr2">
          <button onClick={changeGearUp} id="gear-up" className="btn">
            Gear Up
          </button>
          <button onClick={changeGearDown} id="gear-down" className="btn">
            Gear Down
          </button>
        </div>

        <div className="gr3">
          <button onClick={increaseSpeed} id="speed-up" className="btn">
            Increase Speed
          </button>
          <button onClick={decreaseSpeed} id="speed-down" className="btn">
            Decrease Speed
          </button>
        </div>
      </div>
    </div>
  );
};
