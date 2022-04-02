import React from 'react'
import "./Button.css"

const Button = (props) => {
    const StartButton =(
      <div className="btn btn-one btn-start" 
       onClick={props.handlePress}>
          Start
      </div>
    )

    const ActiveButton = (
        <div className="btn-grp">
            <div className="btn btn-two" 
             onClick={props.handleReset}>
            Reset
            </div>
         <div  className="btn btn-one"
          onClick={props.handlePauseAfter}>
          {props.paused ? "Resume" : "Pause"}
         </div>

        </div>
    )
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButton : StartButton}</div>
    </div>
  )
}

export default Button