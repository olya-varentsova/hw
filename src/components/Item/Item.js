import React, {useEffect, useState} from 'react';
import classes from './Item.module.css'
import FirstService from "../../API/First";
import SecondService from "../../API/Second";
import SecondItemList from "../SecondItemList/SecondItemList";

const Item = (props) => {
    const [secondItems, setSecondItems] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await SecondService.list(props.id);
            setSecondItems(data);
        }
        fetchData();
    }, []);

    return (
        <div className={classes.tmTasklist}>
            <div className={classes.itemHeader}>{props.body.full_name}</div>
            <SecondItemList setSecondItemList={props.setSecondItemList} setItems={setSecondItems} id={props.id} setSecondModalVisible={props.setSecondModalVisible} setItemId={props.setItemId} items={secondItems}/>
        </div>
    );
};

export default Item;
