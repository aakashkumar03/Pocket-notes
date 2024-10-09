import React, { useState } from 'react'
import '../styles/NotesHeader.css'
import { getDataFromLocalStorage } from '../utils/snippets';
import constants from '../utils/constants';

const NotesHeader = ({setIsPopupOpen,setIsChatOpen,setNotesObj}) => {
    const notesGroupsData=getDataFromLocalStorage(constants.TOTAL_NOTES_KEY)?
    getDataFromLocalStorage(constants.TOTAL_NOTES_KEY):[]
    
    const handlePopUp=()=>setIsPopupOpen(true)
    const handleNotes=(initials,groupId)=>{
        const notesObj = getDataFromLocalStorage(groupId);
        setNotesObj(notesObj)
        setIsChatOpen(true)
    }
    
  return (
    <div className='notes-header'>
        <div className="header">
            <h2>Pocket Notes</h2>
        </div>
        <div className="notes-list">
            {notesGroupsData.map((group, index) => (
            <li key={index} className="note-item" onClick={()=>handleNotes(group.initials,group.id)}>
                <div
                className="note-icon"
                style={{ backgroundColor: group.color }}
                >{group.initials}</div>
                <span>{group.name}</span>
            </li>
            ))}
        </div>
        <button className="add-button" onClick={()=>handlePopUp()}>+</button>
    </div>
  )
}

export default NotesHeader