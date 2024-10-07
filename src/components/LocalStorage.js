export const getGroupsFromLocalStorage = () => {
    const storedGroups = JSON.parse(localStorage.getItem('groups'));
    return storedGroups ? storedGroups : [];
  };
  
  export const saveGroupsToLocalStorage = (groups) => {
    localStorage.setItem('groups', JSON.stringify(groups));
  };
  
  export const clearGroupsFromLocalStorage = () => {
    localStorage.removeItem('groups');
  };