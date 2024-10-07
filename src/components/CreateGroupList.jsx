import {React, useState, useRef, useEffect } from 'react'
import styles from './CreateGroupList.module.css'
import GroupList from './GroupList';
import { getGroupsFromLocalStorage, saveGroupsToLocalStorage } from './LocalStorage';


function CreateGroupList() {
  const data = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pickedColor, setPickedColor] = useState('')
  // const [inputValue, setInputValue] = useState('');
  const [groups, setGroups] = useState([]);

  // Load groups from localStorage on component mount
  useEffect(() => {
    const storedGroups = getGroupsFromLocalStorage();
    setGroups(storedGroups);
  }, []);

    // Save groups to localStorage whenever the groups array changes
    useEffect(() => {
      if (groups.length > 0) {
        saveGroupsToLocalStorage(groups);
      }
    }, [groups]);

const handleGroupCreate = () => {
  // console.log("You clicked on + icon")
  setIsModalOpen(true)
}

const pickColor = (e) => {
  const computedStyle = window.getComputedStyle(e.target);
  const color = computedStyle.backgroundColor;
  setPickedColor(color);
  // console.log(pickedColor)
}
const handleCreate = () => {
  let inputVal = data.current.value;
  if(!inputVal || !pickedColor){
    alert("Please enter a group name and pick a color.")
  }else{
  const newGroup = {
    name: inputVal,
    color: pickedColor
  };
  // console.log(inputValue)
  // console.log(pickedColor)
  setGroups((prevGroups) => [...prevGroups, newGroup]);
  setIsModalOpen(false)
  console.log("you clicked on create button")
  data.current.value =""
  setPickedColor('')
  }
  // event.preventDefault();
}
const closeModal = () => setIsModalOpen(false);
const modalContent = (
  <>
  <div onClick={closeModal} className={styles.modalWrapper}></div>
  <div id={styles.modalContent}>
  <h1>Create New group</h1>
  <div className={styles.modalInput}>
    <h2>Group Name</h2>
    <input ref={data} type="text" placeholder="Enter group name" />
  </div>
  <div className={styles.modalChooseColor}>
  <h2>Choose colour</h2>
  <div className={styles.chooseColorButton}>
<button onClick={pickColor} className={styles.firstButton}></button>
<button onClick={pickColor} className={styles.secondButton}></button>
<button onClick={pickColor} className={styles.thirdButton}></button>
<button onClick={pickColor} className={styles.fourthButton}></button>
<button onClick={pickColor} className={styles.fifthButton}></button>
<button onClick={pickColor} className={styles.sixthButton}></button>
  </div>
  </div>
  <button className={styles.createButton} onClick={handleCreate}>Create</button>
  </div>
  </>
)



  return (
    <div className={styles.mainContainer}>
    <div className={styles.groupContainer}>
   <GroupList groups = {groups}/>
    </div>
    <button onClick={handleGroupCreate} className={styles.addGroupsButton}>+</button>
    {isModalOpen && modalContent}
    </div>  
  )
}

export default CreateGroupList
