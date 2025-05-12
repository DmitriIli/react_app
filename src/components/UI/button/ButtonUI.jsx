import React from 'react';
import classes from './ButtonUI.module.css';

const ButtonUI = ({children, ...props}) => {
    return (
        <button {...props} className={classes.ButtonUI}>
            {children}
        </button>
    );
};

export default ButtonUI;