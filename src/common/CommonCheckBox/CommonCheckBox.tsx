import React from 'react';
import styles from './CommonCheckBox.module.css'

type CommonCheckBoxPropsType = {
    value?: any
}

const CommonCheckBox = (props: CommonCheckBoxPropsType) => {
    return (
        <div className={styles.checkB}>
            <input type="checkbox" id={'checkB'} value={props.value}/>
            <label htmlFor="checkB"></label>
        </div>
    );
};

export default CommonCheckBox;
