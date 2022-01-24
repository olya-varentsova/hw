import React, {useEffect, useState} from 'react';
import classes from './SecondItem.module.css'
import del from '../../images/delete-button.svg'
import edit from '../../images/edit.svg'
import left from '../../images/left-arrow.svg'
import right from '../../images/right-arrow.svg'
import SecondService from "../../API/Second";
import FirstService from "../../API/First";
import Modal from "../Modal/Modal";
import FormAddList from "../FormAddList/FormAddList";
import FormEdit from "../FormEdit/FormEdit";

const SecondItem = (props) => {
    const [firstItems, setFirstItems] = useState([])
    const [visible, setVisible] = useState(false)
    async function delete_item () {
        await SecondService.del(props.body.id)
        const data = await SecondService.list(props.firstId)
        props.setItems(data)
    }
    async function right_item (id) {
        await SecondService.patch(props.firstId + 1, id)
        const data = await FirstService.GetFirstList()
        props.setFirstItemList([])
        props.setFirstItemList(data)
    }
    async function left_item (id) {
        await SecondService.patch(props.firstId - 1, id)
        const data = await FirstService.GetFirstList()
        props.setFirstItemList([])
        props.setFirstItemList(data)
    }
    async function edit_item () {
        setVisible(true)
    }
    useEffect(() => {
        async function fetchData() {
            const data = await FirstService.GetFirstList();
            setFirstItems(data);
        }
        fetchData();
    }, []);
    return (
        <div className={classes.task}>
            <div>
                {props.body.name}<br/>
                <div className={classes.info}>
                    {props.body.reason}<br/>
                </div>
            </div>
            <div className={classes.vertical}>
                <div className={classes.horizontal}>
                    <img onClick={delete_item} className={classes.icon} src={del} width={20} height={20}/>
                    <img onClick={edit_item} className={classes.icon} src={edit} width={20} height={20}/>
                </div>
                <div className={classes.horizontal}>
                    {props.firstId > 1 ? <img onClick={() => {left_item(props.body.id)}} className={classes.icon} src={left} width={20} height={20}/> : <div/>}
                    {props.firstId < firstItems.length ? <img onClick={() => {right_item(props.body.id)}} className={classes.icon} src={right} width={20} height={20}/> : <div/>}
                </div>
            </div>
            <Modal visible={visible} setVisible={setVisible}>
                <FormEdit id={props.body.id} firstId={props.firstId} setItems={props.setItems}  body={props.body} visible={visible} setModalVisible={setVisible}/>
            </Modal>
        </div>
    );
};

export default SecondItem;
