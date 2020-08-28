import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './CommonInput.module.css'

type CommonInputPropsType = {
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export function CommonInput(props: CommonInputPropsType) {
    return (<div className={style.wrapper}>
        <input className={style.input} placeholder={'Enter text'} onChange={props.onChange}
               onKeyPress={props.onKeyPress}/>
    </div>)
}
