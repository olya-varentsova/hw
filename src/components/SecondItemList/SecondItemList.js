import React, {useEffect, useState} from 'react';
import classes from "./SecondItem.module.css";
import SecondItem from "../SecondItem/SecondItem";
import Button from "../Button/Button";
import {secondName} from "../../constants";
import FirstService from "../../API/First";

const SecondItemList = (props) => {
    const openModal = () => {
        props.setItemId(props.id)
        props.setSecondModalVisible(true)
    }
    return (
        <div className={classes.list}>
            {props.items.map(item => <SecondItem setFirstItemList={props.setSecondItemList} firstId={props.id} setItems={props.setItems} id={item.id} body={item}/>)}
            <Button name={"Добавить " + secondName} onClick={openModal}/>
        </div>
    );
};

export default SecondItemList;
