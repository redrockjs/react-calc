import React from "react";
import s from "../numdisplay/numdisplay.module.css"

export const NumDisplay = (props) => {
    return <div>
                <input className={s.calcNumdisplay} type="text" value={props.current}/>
            </div>
}