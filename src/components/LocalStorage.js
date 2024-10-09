export const getGroupsFromLocalStorage = () => {
    const storedGroups = JSON.parse(localStorage.getItem('groups'));
    return storedGroups ? storedGroups : [];
  };
  
  export const saveGroupsToLocalStorage = (groups) => {
    localStorage.setItem('groups', JSON.stringify(groups));
  };
  
  // export const clearGroupsFromLocalStorage = () => {
  //   localStorage.removeItem('groups');
  // };

  export const loadNotes = (groupName) => {
    return JSON.parse(localStorage.getItem(`notes-${groupName}`)) || [];
  };
  

  export const saveNote = (groupName, notes) => {
    localStorage.setItem(`notes-${groupName}`, JSON.stringify(notes));
  };
  
