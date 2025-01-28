import React, { useState, useEffect } from "react";
import "../assets/css/countDown.css";

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
    return <p>Offer has ended!</p>;
  }

  return (
    <div className="countdown-div">
      <div>
        <p>Limited offer ends in:</p>
        <section className="countdown">
          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="days">{timeLeft.days}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Days</p>
          </div>

          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="hours">{timeLeft.hours}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Hours</p>
          </div>

          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="minutes">{timeLeft.minutes}</span>
                <div className="rings"></div>
              </div>
            </div>
            <p className="metric">Minutes</p>
          </div>

          <div className="time-wrapper">
            <div className="time-content">
              <div className="time">
                <span className="seconds">{timeLeft.seconds}</span>
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

export default CountDownToEnd;
