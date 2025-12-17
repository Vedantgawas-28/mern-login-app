import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function BackgroundParticles() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) return null;

  return (
    <Particles
  id="tsparticles"
  options={{
    background: { color: "#0b0f19" },
    particles: {
      number: { value: 70 },
      move: { enable: true, speed: 1 },
      size: { value: 2 },
      color: {
        value: document.body.classList.contains("sad")
          ? "#ff4d6d"
          : "#00eaff",
      },
      links: {
        enable: true,
        distance: 120,
        color: document.body.classList.contains("sad")
          ? "#ff4d6d"
          : "#00eaff",
        opacity: 0.5,
      },
    },
  }}
/>

  );
}

export default BackgroundParticles;
