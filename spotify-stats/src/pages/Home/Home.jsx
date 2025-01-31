import React from "react";
import getCanvas from "/dataFunctions/canvas/_canvasApi.js";
import { token, canvasToken } from "dataFunctions/adminAuth/getToken.js";
import Canvas from "/spotify-stats/src/components/canvas/Canvas.jsx";
import "./Home.css";

function Home() {
  const [trackId, setTrackId] = React.useState("");

  return (
    <>
      <Canvas
        canvasToken={canvasToken}
        trackId={trackId}
      />
    </>
  )
};

export default Home;