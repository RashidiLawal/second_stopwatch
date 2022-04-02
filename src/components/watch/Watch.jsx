import React, {useState} from "react";
import "./Watch.css";
import Timer from "../timer/Timer";
import Button from "../button/Button";


const Watch = () => {
    const [active, setActive] = useState(false);
    const [pause, setPause] = useState(true);
    const [time, setTime] = useState(0)


    React.useEffect(() => {
        let gap = null

        if (active && pause) 
        {gap = setInterval(() => {
            setTime((time) => time + 10)
        }, 10)
    } else {
        clearInterval(gap)
    }
        return () => {
            clearInterval(gap)
        };
    }, [active, pause])


    const handlePress = () => {
        setActive(true)
        setPause(false)
    }


    const handlePauseAfter = () => {
        setPause(!pause)
    }

   
    const handleReset = () => {
        setActive(false)
        setTime(0)
    }

  return (
    <div className="watch">
        <Timer time={time}/>
        <Button active={active}
        pause={pause}
        handlePress={handlePress}
        handlePauseAfter={handlePauseAfter}
        handleReset={handleReset}/>
    </div>
  )
}

export default Watch