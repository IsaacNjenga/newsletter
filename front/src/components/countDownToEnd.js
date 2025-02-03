import React, { useState, useEffect } from "react";
import "../assets/css/countDownToEnd.css";

function CountDownToEnd({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const dateFuture = new Date(endTime);
    const dateNow = new Date();

    const totalSeconds = Math.max((dateFuture - dateNow) / 1000, 0);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return null;
  }

  return (
    <div className="countdown-end-div">
      <div>
        <p className="time-title">Limited offer will end in:</p>
        <section className="countdown-end">
          <div className="time-end-wrapper">
            <p className="metric">Days</p>
            <div className="time-end-content">
              <div className="time-end">
                <span className="days">{timeLeft.days}</span>
                <div className="rings"></div>
              </div>
            </div>
          </div>

          <div className="time-end-wrapper">
            <p className="metric">Hours</p>
            <div className="time-end-content">
              <div className="time-end">
                <span className="hours">{timeLeft.hours}</span>
                <div className="rings"></div>
              </div>
            </div>
          </div>

          <div className="time-end-wrapper">
            <p className="metric">Minutes</p>
            <div className="time-end-content">
              <div className="time-end">
                <span className="minutes">{timeLeft.minutes}</span>
                <div className="rings"></div>
              </div>
            </div>
          </div>

          <div className="time-end-wrapper">
            <p className="metric">Seconds</p>
            <div className="time-end-content">
              <div className="time-end">
                <span className="seconds">{timeLeft.seconds}</span>
                <div className="rings"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CountDownToEnd;
