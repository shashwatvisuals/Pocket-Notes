import {React,useState} from 'react'
import styles from './NoteContainer.module.css'
// import GroupList from './GroupList'

function NoteContainer() {
  // const [isVisible, setIsVisible] = useState(true);
  // const clickOnGroupName = () => {
  //   setIsVisible(false);
  // }
  return (
    <div className={styles.mainContainer}>
    <div className={styles.noteContainer}>
      <img src="\src\assets\note-bg.png" alt="note-bg" />
      <h1>Pocket Notes</h1>
      <p className={styles.paragraph}>Send and receive messages without keeping your phone online.<br/>
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
    <p className={styles.endToEnd}><img src="\src\assets\lock.png" alt="lock.png" /> end-to-end encrypted</p>
    </div>
  )
}

export default NoteContainer

//style={{ display: isVisible ? 'block' : 'none' }}
