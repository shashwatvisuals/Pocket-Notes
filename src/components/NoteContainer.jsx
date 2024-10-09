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
      <img src="https://github.com/user-attachments/assets/b8781ba1-0d17-4725-ba2f-3f7c4cc1c1fe" alt="note-bg" />
      <h1>Pocket Notes</h1>
      <p className={styles.paragraph}>Send and receive messages without keeping your phone online.<br/>
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
    <p className={styles.endToEnd}><img src="https://github.com/user-attachments/assets/9b047463-1c8d-4d29-9622-348386cb241a" alt="lock.png" /> end-to-end encrypted</p>
    </div>
  )
}

export default NoteContainer

//style={{ display: isVisible ? 'block' : 'none' }}
