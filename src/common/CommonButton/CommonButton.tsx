import React from "react";
import style from './CommonButton.module.css'

type CommonButtonPropsType = {
    value: string
    onClick?: () => void
}

export function CommonButton(props: CommonButtonPropsType) {
    return(
        <div>
            <button className={style.btn + " " +  style.btnBg} onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
