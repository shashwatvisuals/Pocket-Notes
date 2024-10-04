import React from 'react'
import GroupList from './components/CreateGroupList'
import styles from './App.module.css'
import NoteContainer from './components/NoteContainer'


function App() {
  return (
    <div className={styles.mainContainer}>
        <GroupList className={styles.groupListContainer}/>
        <NoteContainer className={styles.noteListContainer}/>
    </div>
  )
}

export default App

