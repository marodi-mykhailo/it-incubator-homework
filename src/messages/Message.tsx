import React from "react";
import './Message.css'

type MessagePropsType ={
    name: string,
    text: string,

}

function Message(props: MessagePropsType) {

    return (
        <div className="row p-4 message__block mx-auto ">
            <div className="img__wrapper col-md-2">
                <img className="message-img  rounded-circle mx-auto d-block "
                     src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" alt="avatar"/>
            </div>
            <div className="message__box message col-md-auto d-flex">
                <div className="message__box__wrapper d-flex flex-column p-2 ">
                    <h4 className="message__box-title text-left text-wrap d-inline"> {props.name} </h4>
                    <p className="message__box-text text-left text-wrap d-inline"> {props.text} </p>
                </div>
                <div className="message__box-time align-self-end">
                    <span className="message-time "> 20:00 </span>
                </div>
            </div>

        </div>
    )
}

export default Message;