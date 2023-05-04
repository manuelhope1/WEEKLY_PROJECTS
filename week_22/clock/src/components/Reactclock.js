import React, { useEffect, useState } from "react";

function Reactclock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      setClockState(time.toLocaleTimeString());
    }, 1000);
  }, []);

  return <h1>{clockState}</h1>;
}

export default Reactclock;
