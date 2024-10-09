import react, {useState} from 'react';
import GroupList from './GroupList';
import NoteInput from './NoteInput';


function ParentComponent() {
    const [showGroupList, setShowGroupList] = useState(true)

    const handleShowNoteInput =() => {
        setIsGroupListVisible(false);
    }

    const handleShowGroupList =() => {
        setIsGroupListVisible(true);
    }

  return (
    <div>
        {showGroupList ? (
            <GroupList onButtonClick={handleShowNoteInput}/>
        ):(
            <NoteInput onButtonClick={handleShowGroupList}/>
        )}

    </div>
  )
}

export default ParentComponent
