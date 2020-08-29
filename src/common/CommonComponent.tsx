import React from "react";
import {CommonInput} from "./CommonInput/CommonInput";
import {CommonButton} from "./CommonButton/CommonButton";


export function CommonComponent() {
    return (
        <div>
            <CommonInput error={'Error asda'}/>
            <CommonButton value={'Click now'}/>
        </div>
    )
}
