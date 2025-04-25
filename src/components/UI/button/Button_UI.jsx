import React from 'react';
import classes from './Button_UI.module.css';

const Button_UI = ({children, ...props}) => {
    return (
        <button {...props} className={classes.Button_UI}>
            {children}
        </button>
    );
};

export default Button_UI;