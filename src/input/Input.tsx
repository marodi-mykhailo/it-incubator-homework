import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {v1} from "uuid";

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

    return (<div className="m-4">
        <h1>Homework #3</h1>
        <input value={input} onChange={e => setInput(e.currentTarget.value)} onKeyPress={onKeyHandler}/>
        <button onClick={onClickHandler}>+</button>
        <br/>
        <span>{usersArray.length}</span>
    </div>)
}

export default Input;
