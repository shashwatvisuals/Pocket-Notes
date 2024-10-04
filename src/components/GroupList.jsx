import {React, useState } from 'react'
import styles from './GroupList.module.css'


function GroupList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
const handleGroupCreate = () => {
  console.log("You clicked on + icon")
  setIsModalOpen(true)
}
const handleCreate = () => {
  console.log("you clicked on create button")
setIsModalOpen(false)
};

const modalContent = (
  <div className={styles.modalWrapper}>
  <div id={styles.modalContent}>
  <h1>Create New group</h1>
  <div className={styles.modalInput}>
    <h2>Group Name</h2>
    <input type="text" placeholder="Enter group name" />
  </div>
  <div className={styles.modalChooseColor}>
  <h2>Choose colour</h2>
  <div className={styles.chooseColorButton}>
<button className={styles.firstButton}></button>
<button className={styles.secondButton}></button>
<button className={styles.thirdButton}></button>
<button className={styles.fourthButton}></button>
<button className={styles.fifthButton}></button>
<button className={styles.sixthButton}></button>
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
