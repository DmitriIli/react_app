import React from 'react';
import classes from './ModalUI.module.css';


const ModalUI = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.ModalUI]


    if (visible) {
        rootClasses.push(classes.active);
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>


            <div className={classes.ModalUIContent} onClick={(e) => e.stopPropagation()}>
                <div style={{ justifyContent:'end'}}>
                    <div className={classes.cl_btn_close} onClick={() => setVisible(false)}></div>
                </div>
                
                {children}
            </div>
        </div>
    );
};

export default ModalUI;