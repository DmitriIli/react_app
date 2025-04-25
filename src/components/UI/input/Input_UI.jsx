import React from 'react';
import classes from './Input_UI.module.css';

const Input_UI = (props) => {
    return (
        <input {...props} className={classes.Input_UI}/>
    );
};

export default Input_UI;