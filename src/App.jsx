import React, { useState } from 'react'
import GroupList from './components/CreateGroupList'
import ParentComponent from './components/ParentComponent'


function App() {

  return (
  <div >
      <GroupList/>  
  </div>
  )
}

export default App

// import NoteInput from './components/NoteInput'; 
// import NoteContainer from './components/NoteContainer';

// function App() {
//   const [selectedGroup, setSelectedGroup] = useState(null);

//   const handleGroupClick = (group) => {
//     setSelectedGroup(group);
//   };

//   return (
//     <div className="App">
//       <div className="group-list">
//         <GroupList onGroupClick={handleGroupClick} />
//       </div>
//       <div className="note-section">
//         {selectedGroup ? (
//           <NoteInput selectedGroup={selectedGroup} />
//         ) : (
//           <NoteContainer />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;