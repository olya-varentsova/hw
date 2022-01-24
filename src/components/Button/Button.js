import React from 'react';
import classes from './Button.module.css'

const Button = ({name, ...props}) => {
    return (
        <button className={classes.button} {...props}>{name}</button>
    );
};

export default Button;
