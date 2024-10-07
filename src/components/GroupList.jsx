import React, { useState } from 'react'
import styles from './GroupList.module.css'
import NoteContainer from './NoteContainer'
import NoteInput from './NoteInput'



function GroupList({groups}) {
  const [showNoteInput, setShowNoteInput] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const handleClickOnName = () =>{
    setShowNoteInput(false);
    console.log("you clicked on group name")
    setIsClicked(true);
  }
const createlogo = (name) => {
  const words = name.split(' ');
  if(typeof name !== 'string' || name.trim().length === 0) return (' ');
  const firstLetter = words[0].charAt(0).toUpperCase();
  let secondLetter = '';
  if (words.length > 1) {
    secondLetter = words[1].charAt(0).toUpperCase();
  }else if(name.length > 1) {
        secondLetter = name.charAt(1).toUpperCase();
      }
  return firstLetter + (secondLetter ? secondLetter : '');
};

  return (
    <div className={styles.parentContainer}>
      <div className={styles.groupContainerHeader}>
      <h1>Pocket Notes</h1>
      <div className={styles.groupNameBox}>
          {groups.map((group, index) => {
          const logo = createlogo(group.name);
        return (
          <div onClick={!isClicked ? handleClickOnName:null} key = {index} className={styles.groupItem}>
            <div className={styles.logoContainer} style={{backgroundColor: group.color}}>
              <div className={styles.logo}>{logo}</div>
            </div>
            <p className={styles.groupName}>{group.name}</p>
          </div>
        )
      })}
      </div>
      </div>
      <div>
      {showNoteInput ? (<NoteContainer className={styles.noteListContainer}/>):(< NoteInput className={styles.noteListContainer}/>)}
      </div>
    </div>
  )
}

export default GroupList


