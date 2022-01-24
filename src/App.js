import './App.css';
import avatar from './images/avatar.png'
import {useState, useEffect} from "react";
import FirstService from "./API/First";
import ItemList from "./components/ItemList/ItemList";
import Button from "./components/Button/Button";
import {dz_name, firstName, student} from "./constants";
import Modal from "./components/Modal/Modal";
import FormAddList from "./components/FormAddList/FormAddList";
import FormAddItem from "./components/FormAddItem/FormAddItem";

function App() {
    const [itemList, setItemList] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [secondModalVisible, setSecondModalVisible] = useState(false)
    const [secondId, setSecondId] = useState(1)
    useEffect(() => {
        async function fetchData() {
            const data = await FirstService.GetFirstList();
            setItemList(data);
        }
        fetchData();
    }, []);


  return (
    <div className={'App'}>
      <header className={'main_header'}>
          {dz_name}
          <div className={'main-header__right-block'}>
              <img className={'avatar'} src={avatar}/>
              {student}
          </div>
      </header>
        <ItemList setItemList={setItemList} setSecondModalVisible={setSecondModalVisible} setItemId={setSecondId} items={itemList} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <Modal visible={modalVisible} setVisible={setModalVisible}>
            <FormAddList setItemList={setItemList} visible={modalVisible} setModalVisible={setModalVisible}/>
        </Modal>
        <Modal visible={secondModalVisible} setVisible={setSecondModalVisible}>
            <FormAddItem setItemList={setItemList} itemId={secondId} visible={secondModalVisible} setModalVisible={setSecondModalVisible}/>
        </Modal>
    </div>
  );
}

export default App;
