import React, {useState} from 'react'
import styles from './NoteInput.module.css'
import { IoSendSharp } from "react-icons/io5";

function NoteInput() {
  const [iconColor, setIconColor] = useState("#1010104d")
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [note, setNote] = useState('')
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [submittedNote, setSubmittedNote] = useState('')

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
    console.log("you entered on submit form")
    e.preventDefault();
    console.log("crossed prevent section")
    setSubmittedNote(note)
    console.log("crossed setsubmitted note")
    if(note.trim()){
      console.log('Form submitted with input:', note)
      console.log('Form submitted with input:',submittedNote)
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
        <p>{submittedNote}</p>
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
