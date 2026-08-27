import { useEffect } from "react";

const CleanupEffect = () => {
  useEffect(() => {
    console.log("Timer Started");

    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup Function Called");
    };
  }, []);

  return (
    <>
      <h2>useEffect Cleanup Function</h2>
      <p>Check the console to see the timer.</p>
    </>
  );
};

export default CleanupEffect;