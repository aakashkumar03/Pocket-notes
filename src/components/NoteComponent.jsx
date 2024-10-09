import React, { useState, useRef } from 'react';
import '../styles/NotesComponent.css';
import { formatTimestamp ,addDatatoLocalStorage,getDataFromLocalStorage,demoObj,getUserKey} from '../utils/snippets';
import constants from '../utils/constants';

const NotesComponent = ({ isChatOpen, notesObj ,setIsChatOpen,isMobileView}) => {
    
    const [newNote, setNewNote] = useState('');
    const buttonRef = useRef(null); 
    
    const userKey=notesObj?.id?notesObj.id:null


    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && buttonRef.current) {
            buttonRef.current.click(); 
            e.preventDefault();
        }
    };

    const handleSent = () => {
        notesObj.notes = [...notesObj.notes, {
            id: Date.now(),
            text: newNote,
            timestamp: Date.now()
        }];
        addDatatoLocalStorage(userKey,notesObj);
        setNewNote(''); 
    };

    const storedNoteObj = getDataFromLocalStorage(userKey) || demoObj; 

    const iconStyle = {
        backgroundColor: storedNoteObj?.color || "red"
    };

    const handleBack=()=>{
        setIsChatOpen(false)
    }
    return isChatOpen ? (
        <div className="notes-container">
            <div className="chat-header">
                {isMobileView?
                <button className='back-btn' onClick={handleBack}>
                    <img src={constants.BACK_BTN} alt="Back-btn-img" />
                </button>:null
                }
                <div className="user-icon" style={iconStyle}>{storedNoteObj.initials}</div>
                <span className="title">{storedNoteObj.groupName}</span>
            </div>
            <div className="note-list">
                {storedNoteObj.notes.map(note => (
                    <div className="note" key={note.id}>
                        <p className="note-text">{note.text}</p>
                        <span className="timestamp">{formatTimestamp(note.timestamp)}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <textarea
                    type="text"
                    placeholder="Here’s the sample text for sample work"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
                <div className="send-btn">
                    <button
                        ref={buttonRef} 
                        className={newNote.trim() === '' ? "button-disabled" : "button-enabled"}
                        onClick={handleSent}
                        disabled={newNote.trim() === ''}
                    >
                        <img
                            src={constants.SEND_BTN}
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default NotesComponent;
