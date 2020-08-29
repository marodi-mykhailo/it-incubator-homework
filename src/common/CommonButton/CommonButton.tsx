import React from "react";
import style from './CommonButton.module.css'

type CommonButtonPropsType = {
    value: string
    onClick?: () => void
    type?: ButtonActionType
}

type ButtonActionType = "submit" | "delete"
// запитати як по дефолту ставити значення в батоні

export function CommonButton(props: CommonButtonPropsType) {
    return (
        <div>
            <button
                className={props.type === "delete" ? (style.btn + " " + style.btnBg + " " + style.deleteBtn): (style.btn + " " + style.btnBg)}
                onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
