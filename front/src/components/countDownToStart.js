import React, { useState, useEffect } from "react";
import "../assets/css/countDown.css";

function CountDownToStart({ startTime }) {
  const [timeToStart, setTimeToStart] = useState(calculateTimeLeftToStart);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToStart(calculateTimeLeftToStart());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeftToStart() {
    const dateFuture = new Date(startTime);
    const dateNow = new Date();

    const totalSeconds = Math.max((dateFuture - dateNow) / 1000, 0);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  if (
    timeToStart.days === 0 &&
    timeToStart.hours === 0 &&
    timeToStart.minutes === 0 &&
    timeToStart.seconds === 0
  ) {
    return null;
  }

  return (
    <div className="countdown-div">
      <div>
        <p>Limited offer starts in:</p>
        <section className="countdown">
          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="days">{timeToStart.days}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Days</p>
          </div>

          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="hours">{timeToStart.hours}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Hours</p>
          </div>

          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="minutes">{timeToStart.minutes}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Minutes</p>
          </div>

          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="seconds">{timeToStart.seconds}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Seconds</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CountDownToStart;
