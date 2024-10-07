import React, {useState} from 'react'
import styles from './NoteInput.module.css'
import { IoSendSharp } from "react-icons/io5";
import { getTimeStamp } from '../utils/DateAndTime';

function NoteInput() {
  const [iconColor, setIconColor] = useState("#1010104d")
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [note, setNote] = useState('')
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [submittedNote, setSubmittedNote] = useState({ noteText: '', timeStamp: '' })

  const handleChange = (e) => {
    const value = e.target.value
    setNote(value)
    // console.log((e.target.value))
    if (value.trim().length === 0) {
      setIsButtonDisable(true);
      setIconColor("#1010104d");
    } else {
      setIsButtonDisable(false);
      setIconColor("#001F8B");
    }
  
    setIsMessageVisible(false)
    }


  const submitNote = (e) => {

    e.preventDefault();
    // setSubmittedNote(note)

    if(note.trim()){
      const timeStamp = getTimeStamp();
      setSubmittedNote({ noteText: note, timeStamp })
      setIsMessageVisible(true)
    }
    setIconColor("#1010104d");
    setIsButtonDisable(true)
    // setSubmittedNote(note)
    // console.log(submittedNote)
    setNote('')
    // setSubmittedNote('')

  }


  return (
    <div className={styles.mainDiv}>
      <div className={styles.noteHeader}></div>
      <div className={styles.noteSection}>
      {isMessageVisible && <div>
        <div className={styles.singleNoteSection}>
        <p>
          {submittedNote.noteText}
        </p>
        <small>{submittedNote.timeStamp}</small>
        </div>
        </div>
      }
        </div>
      <div className={styles.inputFeildBorder}>
        <div
        className={styles.inputFeild}
        >
          <textarea
          className={styles.textArea}
          value={note}
          onChange={handleChange}
          placeholder="Enter your text here......"
        />
        <button type='submit' disabled={isButtonDisable} onClick={submitNote} 
          className={styles.sendIcon} style={{color : iconColor}}>
          <IoSendSharp className={styles.sendIconx}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteInput
