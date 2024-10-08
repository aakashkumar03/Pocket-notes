import React, { useState } from 'react';
import '../styles/PopUp.css';
import { getInitials,getDataFromLocalStorage, addDatatoLocalStorage,getNoteName } from '../utils/snippets'
import constants from '../utils/constants';

const PopUp = ({ isPopupOpen,setIsPopupOpen }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  
  if(getDataFromLocalStorage(constants.TOTAL_NOTES_KEY)== null){
    addDatatoLocalStorage(constants.TOTAL_NOTES_KEY,[])
  }

 
  const handleCreate = () => {
    if (groupName && selectedColor ) {
      const userName=groupName.toLowerCase().replace(/\s+/g, '');
      
      if (localStorage.getItem(userName)!=null) {
        setGroupName('')
        setSelectedColor(null)
        return alert(constants.MSG_UNIQUE_GROUP_NAME)
      }
    
      const userNotes={
        id:Math.floor(10000 + Math.random() * 90000),
        groupName:getNoteName(userName),
        initials:getInitials(groupName),
        color:selectedColor,
        notes:[]
      }
      
      let totalNotes = getDataFromLocalStorage(constants.TOTAL_NOTES_KEY)
      if(totalNotes==null){
        totalNotes=[]
      }

      const notesObj ={
        initials:getInitials(groupName),
        name:getNoteName(groupName),
        color:selectedColor
      }
      totalNotes= [...totalNotes,notesObj ]
      addDatatoLocalStorage(constants.TOTAL_NOTES_KEY,totalNotes);
      addDatatoLocalStorage(userName,userNotes);
      setSelectedColor(null)
      setGroupName('')
      setIsPopupOpen(false)
    } else {
      alert(constants.MSG_POP_UP_CHECK);
    }
  };

  return isPopupOpen?(
    <div className="popup" onClick={()=>setIsPopupOpen(false) }>
      <div className="create-group-modal" onClick={(e)=>e.stopPropagation()}>
        <h2>Create New Group</h2>
        <div className="input-group">
          <label htmlFor="groupName">Group Name</label>
          <input
            type="text"
            id="groupName"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="color-picker">
          <label>Choose Color</label>
          <div className="color-options">
            {constants.POP_UP_COLORS.map((color, index) => (
              <button key={index}
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}></button>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button className="create-button" onClick={handleCreate} >Create</button>
        </div>
      </div>
    </div>
  ) :null
};

export default PopUp;
