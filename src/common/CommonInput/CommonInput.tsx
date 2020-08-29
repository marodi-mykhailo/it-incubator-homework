import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './CommonInput.module.css'

type CommonInputPropsType = {
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
    error?: string
}

export function CommonInput(props: CommonInputPropsType) {
    return (<div className={props.error ? style.wrapper + ' ' +  style.errorInput : style.wrapper}>
        <input className={style.input} placeholder={props.error? props.error: "Enter text"}
               onChange={props.onChange}
               onKeyPress={props.onKeyPress}/>
    </div>)
}
