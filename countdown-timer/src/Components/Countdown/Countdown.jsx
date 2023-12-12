import React, { useEffect, useState } from 'react'
import './countdown.css'


const Countdown = () => {

    const [minutes, setMinutes] = useState(0);
    const [time, setTime] = useState("00:00:00");
    const [intervalId, setIntervalId] = useState(null);//

    const check = (num1) => {
        if (num1 < 10) {
            return '0' + num1;
        }
        return num1;
    }

    const start = () => {
        let seconds = minutes*60;
        const intervalID = setInterval(() => {
            let hr = check(Math.floor(seconds / (60 * 60)));
            let min = check(Math.floor((seconds % (60 * 60)) / 60));
            let sec = check(Math.floor(seconds % 60));
            setTime(`${hr}:${min}:${sec}`);
            if(seconds<=0){
                clearInterval(intervalID);
            }
            seconds=seconds-1;
        }, 1000);
        setIntervalId(intervalID)
    }
    const pause = () => {
        clearInterval(intervalId);
        console.log("pause")
    }
    const reset = () => {
        clearInterval(intervalId);
        start();
        console.log("reset");
    }

    const onchange = (e) => {
        setMinutes(e.target.value);
    }


    return (
        <div className='countdown-div'>
            <div className="input-min-div">
                <label htmlFor="minutes">Enter Minutes</label>
                <input type="number" name="minutes" id="minutes" value={minutes} onChange={onchange} />
            </div>
            <div className="countdown-timer">
                <span className="play-icon">
                    <i className="fa-solid fa-circle-play" onClick={start}></i>
                </span>
                <span className="play-icon">
                    <i className="fa-solid fa-circle-pause" onClick={pause}></i>
                </span>
                <span className="play-icon">
                    <i className="fa-solid fa-rotate-left" onClick={reset}></i>
                </span>

                <div className="timer" >{time}</div>
            </div>
        </div>
    )
}

export default Countdown
