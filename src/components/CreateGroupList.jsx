import {React, useState, useRef, useEffect } from 'react'
import styles from './CreateGroupList.module.css'


function GroupList() {
  const data = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pickedColor, setPickedColor] = useState('')
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
  let inputValue = data.current.value;
  if(!inputValue || !pickedColor){
    alert("Please enter a group name and pick a color.")
  }else{
  console.log(inputValue)
  console.log(pickedColor)
  // setIsModalOpen(false)
  console.log("you clicked on create button")
  data.current.value =""
  setPickedColor('')

  }
}
const modalContent = (
  <div className={styles.modalWrapper}>
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
  </div>
)



  return (
    <div className={styles.mainContainer}>
    <h1>Pocket Notes</h1>
    <div className={styles.groupContainer}>
      <p> 
      </p>
    </div>
    <button onClick={handleGroupCreate} className={styles.addGroupsButton}>+</button>
    {isModalOpen && modalContent}
    </div>  
  )
}

export default GroupList
