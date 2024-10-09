import React, {useState, useEffect} from 'react'
import styles from './NoteInput.module.css'
import { IoSendSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getTimeStamp } from '../utils/DateAndTime';
import { loadNotes, saveNote } from './LocalStorage';
import "../App.css"
import GroupList from './GroupList';


function NoteInput({group, groupName, groupLogo, groupColor }) {
  const [iconColor, setIconColor] = useState("#1010104d")
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([])
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [submittedNote, setSubmittedNote] = useState({ noteText: '', timeStamp: '' })
  

  // const backToGroupListPage = () => {
  //   console.log("you click on  back button")
  //   setIsVisible(false);
  // }

  const handleRefresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };






 useEffect(() => {
  if (groupName) {
    const groupNotes = loadNotes(groupName); // Load notes using group name
    setNotes(groupNotes);
  }
}, [groupName]);

const handleAddNote = (newNote) => {
  const updatedNotes = [...notes, newNote];
  setNotes(updatedNotes);
  saveNote(groupName, updatedNotes); // Save using group name
};

const handleChange = (e) => {
  const value = e.target.value;
  setNote(value);
  if (value.trim().length === 0) {
    setIsButtonDisable(true);
    setIconColor("#1010104d");
  } else {
    setIsButtonDisable(false);
    setIconColor("#001F8B");
  }
  setIsMessageVisible(false);
};

const submitNote = (e) => {
  e.preventDefault();
  if (note.trim()) {
    const timeStamp = getTimeStamp();
    const newNote = { noteText: note, timeStamp };
    handleAddNote(newNote);
    setNote(''); // Reset the note input
    setIconColor("#1010104d");
    setIsButtonDisable(true);
    setIsMessageVisible(true);
  }
};

return (

  <div className={styles.mainDiv}>
    <div className={styles.noteHeader}>
      <div onClick={handleRefresh}className='backArrow'>
        <FaArrowLeftLong/></div>
      <div className={styles.logo} style={{ backgroundColor: groupColor }}>{groupLogo}</div>
      <h2>{groupName || "Unnamed Group"}</h2> {/* Fallback for groupName */}
    </div>
    <div className={styles.noteSection}>
      {notes.map((note, index) => (
        <div key={index} className={styles.singleNoteSection}>
          <p>{note.noteText}</p>
          <small>{note.timeStamp}</small>
        </div>
      ))}
    </div>
    <div style={{backgroundColor : "#001F8B" ,height:"30vh", width:"100%",border:"10px solid #001F8B",padding:"0px 12px",
     overflowX: "hidden", overflowY:"hidden" ,  display: "flex",
  justifyContent: "center", 
  alignItems:" center"
    }}>
      <div style={{height:"20vh", width:"100%"}}>
        <textarea
          className={styles.textArea}
          value={note}
          onChange={handleChange}
          placeholder="Enter your text here......"
        />
        <button type='submit' disabled={isButtonDisable} onClick={submitNote}
          className={styles.sendIcon} style={{ color: iconColor }}>
          <IoSendSharp className={styles.sendIconx} />
        </button>
        </div>
    </div>
  </div>

);
}

export default NoteInput;