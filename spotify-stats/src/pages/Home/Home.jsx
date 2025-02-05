import React from "react";
import getCanvas from "/dataFunctions/canvas/_canvasApi.js";
import { token, canvasToken } from "/dataFunctions/adminAuth/getToken.js";
import Canvas from "/Users/markbaek/Documents/Coding/spotify/spotify-stats/src/components/canvas/Canvas.jsx";
import "./Home.css";

function Home() {
  const [trackArray, setTrackArray] = React.useState([]);
  const testTrackId = "7aGcgv4G1upG0XK6nHC5rF";

  React.useEffect(() => {
    const getTrackData = async(trackId) => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`);
        console.log(response)
      } catch(error) {
        console.log(error);
      }
    };
  }, [])

  return (
    <>
      <Canvas
        canvasToken={canvasToken}
        trackArray={trackArray}
      />
    </>
  )
};

export default Home;