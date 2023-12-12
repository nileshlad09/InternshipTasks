import React, { useEffect, useState } from 'react'
import './countdown.css'


const Countdown = () => {

    const [minutes, setMinutes] = useState(0);
    const [time, setTime] = useState("00:00:00");
    const [remainingSec, setSec] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isPause, setPause] = useState(true);
    const [timesup, settimesup] = useState(false);

    const check = (num1) => {
        if (num1 < 10) {
            return '0' + num1;
        }
        return num1;
    }

    var seconds;
    const start = () => {
        setPause(false);
        settimesup(false);
        seconds = remainingSec ? remainingSec : minutes * 60;
        const intervalID = setInterval(() => {
            let hr = check(Math.floor(seconds / (60 * 60)));
            let min = check(Math.floor((seconds % (60 * 60)) / 60));
            let sec = check(Math.floor(seconds % 60));
            setTime(`${hr}:${min}:${sec}`);
            setSec(seconds);
            if (seconds <= 0) {
                clearInterval(intervalID);
                setPause(true);
                settimesup(true);
            }
            seconds = seconds - 1;
        }, 1000);
        setIntervalId(intervalID)
    }

    const currentTime = () => {
        seconds = minutes * 60;
        let hr = check(Math.floor(seconds / (60 * 60)));
        let min = check(Math.floor((seconds % (60 * 60)) / 60));
        let sec = check(Math.floor(seconds % 60));
        setTime(`${hr}:${min}:${sec}`);
    }

    const pause = () => {
        setPause(true);
        clearInterval(intervalId);
    }

    const reset = (timechange) => {
        clearInterval(intervalId);
        setSec(0);
        settimesup(false);
        setPause(true);
        if (timechange == false) {
            currentTime();
        }
    }

    const onchange = (e) => {
        setMinutes(e.target.value);
        reset(true);
    }


    return (
        <div className='countdown-div'>
            <div className="input-min-div">
                <label htmlFor="minutes">Enter Minutes</label>
                <input type="number" name="minutes" id="minutes" value={minutes} onChange={onchange} />
            </div>
            <div className="countdown-timer">
                {
                    isPause ?
                        <span className="play-icon">
                            <i className="fa-solid fa-circle-play" onClick={start}></i>
                        </span>
                        :
                        <span className="play-icon">
                            <i className="fa-solid fa-circle-pause" onClick={pause}></i>
                        </span>
                }
                <span className="play-icon">
                    <i className="fa-solid fa-rotate-left" onClick={() => reset(false)}></i>
                </span>

                <div className="timer" >{time}</div>

            </div>
            <div className="timesup" style={{ display: timesup ? "block" : "none" }}>
                <p>Time's up {minutes} min</p>
            </div>
        </div>
    )
}

export default Countdown
