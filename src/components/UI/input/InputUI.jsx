import React from 'react';
import classes from './InputUI.module.css';

const InputUI = (props) => {
    return (
        <input {...props} className={classes.InputUI}/>
    );
};

export default InputUI;