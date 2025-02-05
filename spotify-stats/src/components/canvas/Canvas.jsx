import React from "react";
import getCanvas from "/dataFunctions/canvas/_canvasApi.js";
import "./Canvas.css";

function Canvas(props) {
  const [canvas, setCanvas] = React.useState("");

  let canvasToken = props.canvasToken;
  let trackArray = props.trackArray;

  React.useEffect(() => {
    const runCanvasRequest = async() => {
      try {
        const canvasResponse = await getCanvas(trackArray, canvasToken.accessToken);
        updateCanvas(canvasResponse.canvasesList[0].canvasUrl);
      } catch(error) {
        console.log(error);
      }
    };

    trackArray && runCanvasRequest();
  }, [trackId]);

  const updateCanvas = canvasUrl => {
    setCanvas(prevCanvas => {
      return {
        canvasUrl: canvasUrl
      }
    });
  };

  return (
    <>
      <div className="canvas--container">
        {canvas.canvasUrl &&
          <video
            className="canvas--video"
            autoPlay
            loop
            key={canvas.canvasUrl}
            playsInline
          >
            <source src={canvas.canvasUrl} />
          </video>
        }
      </div>
    </>
  )
};

export default Canvas;