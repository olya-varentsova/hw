import React from 'react';
import Item from "../Item/Item";
import classes from './ItemList.module.css'
import Button from "../Button/Button";
import {firstName} from "../../constants";

const ItemList = (props) => {
    const addItem = () => {
        props.setModalVisible(true)
    }
    return (
        <div className={classes.list}>
            {props.items.map(item =>
                <Item setSecondItemList={props.setItemList} setSecondModalVisible={props.setSecondModalVisible} setItemId={props.setItemId} id={item.id} body={item}/>
            )}
            <Button name={'+ Добавить ' + firstName} onClick={addItem}/>
        </div>
    );
};

export default ItemList;
