import React, { useState } from 'react'
import NotesHeader from './NotesHeader'
import Logo from './Logo'
import PopUp from './PopUp'
import NotesComponent from './NoteComponent'
import '../styles/Home.css'

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChatOpen,setIsChatOpen] = useState(false);
  const [notesObj , setNotesObj] = useState({});

  return (
    <div className='home'>
        <NotesHeader 
          setIsPopupOpen={setIsPopupOpen} 
          setIsChatOpen={setIsChatOpen} 
          setNotesObj={setNotesObj}/>
        <Logo isChatOpen={isChatOpen}/>
        <PopUp isPopupOpen={isPopupOpen} 
          setIsPopupOpen={setIsPopupOpen}/>
        <NotesComponent 
          isChatOpen={isChatOpen} 
          notesObj={notesObj} />
    </div>
  )
}

export default Home