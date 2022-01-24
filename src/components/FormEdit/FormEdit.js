import React, {useState} from 'react';
import classes from './FormEdit.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import SecondService from "../../API/Second";
import {second_form_first, second_form_second, second_form_third} from "../../constants";

const FormEdit = (props) => {
    const [first, setFirst] = useState(props.body.name)
    const [second, setSecond] = useState(props.body.reason)
    async function add() {
        const req_data = {
            name: first,
            reason: second
        }
        await SecondService.edit(props.id, req_data)
        const data = await SecondService.list(props.firstId)
        props.setItems(data)
        props.setModalVisible(false)
    }
    return (
        <div className={classes.container}>
            <header>Введите {second_form_first}</header>
            <Input placeholder={props.body.name} onChange={(e) => {setFirst(e.target.value)}}/>
            <header>Введите {second_form_second}</header>
            <Input placeholder={props.body.reason} onChange={(e) => {setSecond(e.target.value)}}/>
            <div className={classes.buttonContainer}>
                <Button name={"Сохранить"} onClick={() => {add()}}/>
                <Button name={"Закрыть"} onClick={() => {props.setModalVisible(false)}}/>
            </div>
        </div>
    );
};

export default FormEdit;
