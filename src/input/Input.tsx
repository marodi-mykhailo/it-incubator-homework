import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {v1} from "uuid";
import {CommonInput} from "../common/CommonInput/CommonInput";
import {CommonButton} from "../common/CommonButton/CommonButton";

type UserNameType = {
    id: string,
    name: string
}

function Input() {
    let [input, setInput] = useState('')
    let [usersArray, setUsersArray] = useState<Array<UserNameType>>([])

    const onClickHandler = () => {
        if (input.trim() !== "") {
            alert(input)
            addName();
            setInput("")
            console.log(usersArray)
        }

    }

    function addName() {

        let nameUser = {id: v1(), name: input}
        usersArray.push(nameUser)
        setUsersArray(usersArray)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) onClickHandler()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    return (<div className="m-4">
        <h1>Homework #3</h1>
        <CommonInput value={input} onChange={onChangeHandler} onKeyPress={onKeyHandler}/>
        <div className={'d-flex'}>
        <CommonButton value={'+'} onClick={onClickHandler}/>
        <div><p className={'h3'}>{usersArray.length}</p></div>
        </div>
    </div>)
}

export default Input;
