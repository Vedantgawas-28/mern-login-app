import { useEffect } from "react";

function Characters() {
  useEffect(() => {
    /* =========================
       PUPILS FOLLOW MOUSE
    ========================== */
    const handleMouseMove = (e) => {
      const pupils = document.querySelectorAll(".pupil");

      pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();

        // Eye center
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Angle between eye and mouse
        const angle = Math.atan2(
          e.clientY - eyeCenterY,
          e.clientX - eyeCenterX
        );

        // Max pupil movement
        const maxMove = 3;

        const x = Math.cos(angle) * maxMove;
        const y = Math.sin(angle) * maxMove;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    /* =========================
       RANDOM EYE BLINK
    ========================== */
    const blinkInterval = setInterval(() => {
      const characters = document.querySelectorAll(".character");
      if (!characters.length) return;

      const randomChar =
        characters[Math.floor(Math.random() * characters.length)];

      randomChar.classList.add("blink");

      setTimeout(() => {
        randomChar.classList.remove("blink");
      }, 180);
    }, 3000);

    /* =========================
       CLEANUP
    ========================== */
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="characters">
      <div className="character orange shape1">
        <div className="eyes">
          <div className="eye">
            <div className="pupil"></div>
          </div>
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="mouth mouth1"></div>
      </div>

      <div className="character blue shape2">
        <div className="eyes">
          <div className="eye">
            <div className="pupil"></div>
          </div>
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="mouth mouth2"></div>
      </div>

      <div className="character black shape3">
        <div className="eyes">
          <div className="eye">
            <div className="pupil"></div>
          </div>
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="mouth mouth3"></div>
      </div>

      <div className="character yellow shape4">
        <div className="eyes">
          <div className="eye">
            <div className="pupil"></div>
          </div>
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="mouth mouth4"></div>
      </div>
    </div>
  );
}

export default Characters;
