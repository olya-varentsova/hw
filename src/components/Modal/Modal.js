import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {
    if (visible) {
        console.log(visible)
        return (
            <div className={classes.myModal}>
                <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default Modal;
