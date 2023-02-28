import React, { useContext, useEffect, useRef } from "react";
import { BoatContext } from "../BoatContext/BoatContext";
import sky from "../../assets/sky.png";
import water1 from "../../assets/water-up.png";
import water2 from "../../assets/water-down.png";
import boat from "../../assets/boat.png";
import clouds1 from "../../assets/clouds-1.png";
import clouds2 from "../../assets/clouds-2.png";
import clouds3 from "../../assets/clouds-3.png";
import clouds4 from "../../assets/clouds-4.png";
import "./Canvas.scss";

// claude animation
function Canvas() {
  const canvasRef = useRef(null);
  const { state } = useContext(BoatContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = (canvas.width = 1600);
    const CANVAS_HEIGHT = (canvas.height = 500);
    let gameSpeed = 0.2 + state.speed;
    console.log(gameSpeed);

    const backgroundLayer1 = new Image();
    backgroundLayer1.src = clouds1;
    const backgroundLayer2 = new Image();
    backgroundLayer2.src = clouds2;
    const backgroundLayer3 = new Image();
    backgroundLayer3.src = clouds3;
    const backgroundLayer4 = new Image();
    backgroundLayer4.src = clouds4;

    class Layer {
      constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 1600;
        this.height = 500;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
      }
      update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
          this.x = 0;
        }
        this.x = this.x - this.speed;
      }
      draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(
          this.image,
          this.x + this.width,
          this.y,
          this.width,
          this.height
        );
      }
    }

    const layer1 = new Layer(backgroundLayer1, 0.2);
    const layer2 = new Layer(backgroundLayer2, 0.4);
    const layer3 = new Layer(backgroundLayer3, 0.6);
    const layer4 = new Layer(backgroundLayer4, 0.8);

    const gameObjects = [layer1, layer2, layer3, layer4];

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      gameObjects.forEach((object) => {
        object.update();
        object.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, [state.speed]);

  return (
    <div className="container">
      <canvas ref={canvasRef} id="canvas1"></canvas>;
      <div className="bg">
        <div className="sky">
          <img src={sky} alt="" />
        </div>
        <div className="water1">
          <img src={water1} alt="" />
        </div>
        <div className="boat">
          <img src={boat} alt="" />
        </div>
        <div className="lightHolder">
          <span className="light"></span>
        </div>
        <div className="water2">
          <img src={water2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
