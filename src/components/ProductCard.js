import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({ title, price, image, id, countdownDateOrigin }) {
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [show, setShow] = useState(true);

  const Timer = () => {
    let timeElapsed = setInterval(() => {
      const currectTime = new Date().getTime();
      const count = countdownDateOrigin - currectTime;

      const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((count % (1000 * 60)) / 1000);

      if (count < 0) {
        clearInterval(timeElapsed.current);
      } else {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        if (minutes == 0 && seconds == 0) {
          setShow(false);
        }
      }
    }, 1000);
  };

  useEffect(() => {
    Timer();
  });

  let navigate = useNavigate();
  return (
    <div className="col-md-3 mb-4">
      <div class="card h-100 text-center p-4">
        <img alt={title} src={image} class="card-img-top" />
        <div class="card-body">
          <p class="card-title mb-0">{title} </p>
          <p class="card-text lead fw-bold">{price} </p>
          <span> {timerMinutes}: </span> <span> {timerSeconds} </span>
          {show && <Link to={`/detalle/${id}`}> Ir a detalle</Link>}
          {!show && (
            <p>
              <strong>Item no disponible</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
