import React from 'react';
import classes from './Modal_UI.module.css';


const Modal_UI = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.Modal_UI]


    if (visible) {
        rootClasses.push(classes.active);
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>


            <div className={classes.Modal_UIContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.cl_btn_close} onClick={() => setVisible(false)}></div>
                {children}
            </div>
        </div>
    );
};

export default Modal_UI;