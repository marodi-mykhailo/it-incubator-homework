import React from "react";
import {CommonInput} from "./CommonInput/CommonInput";
import {CommonButton} from "./CommonButton/CommonButton";
import CommonCheckBox from "./CommonCheckBox/CommonCheckBox";


export function CommonComponent() {
    return (
        <div>
            <CommonInput error={''}/>
            <CommonButton value={'Click now'}/>
            <CommonCheckBox/>
        </div>
    )
}
