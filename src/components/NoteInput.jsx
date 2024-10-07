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
  const [storedNotes, setStorednotes] = useState([]);

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
      const newNote = { noteText: note, timeStamp };
      setSubmittedNote({ noteText: note, timeStamp })
      setIsMessageVisible(true)
      setStorednotes([...storedNotes, newNote])
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
      {storedNotes.map((noteObj, index) => (
        <div key={index} className={styles.singleNoteSection}>
        <p>
          {noteObj.noteText}
        </p>
        <small>{noteObj.timeStamp}</small>
        </div>
      ))}
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
