import React, { useState } from 'react';
import NoteInput from './NoteInput';

const ParentComponent = () => {
  const [groupNotes, setGroupNotes] = useState({});

  return (
    <div>
      {/* Pass down required props to NoteInput */}
      <NoteInput
        groupName="Group 1"
        groupLogo="A" // Replace with actual logo or component
        groupColor="#ffcc00"
        groupNotes={groupNotes}
        setGroupNotes={setGroupNotes} // Ensure this is passed down correctly
      />
      {/* Other components */}
    </div>
  );
};

export default ParentComponent;
