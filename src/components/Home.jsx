import React, { useState } from 'react'
import NotesHeader from './NotesHeader'
import Logo from './Logo'
import PopUp from './PopUp'
import NotesComponent from './NoteComponent'
import '../styles/Home.css'
import constants from '../utils/constants'

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChatOpen,setIsChatOpen] = useState(false);
  const [notesObj , setNotesObj] = useState({});
  const isMobileView = window.visualViewport.width<=constants.MAX_VIEW_WIDTH

  return (
      <div className='home'>
          {isMobileView ? (
            isChatOpen ? (
              <NotesComponent 
                isChatOpen={isChatOpen} 
                notesObj={notesObj}
                setIsChatOpen={setIsChatOpen}
                isMobileView={isMobileView}
              />
              ) : (
                  <NotesHeader 
                      setIsPopupOpen={setIsPopupOpen} 
                      setIsChatOpen={setIsChatOpen} 
                      setNotesObj={setNotesObj} 
                  />
              )
          ) : (
              <>
                  <NotesHeader 
                      setIsPopupOpen={setIsPopupOpen} 
                      setIsChatOpen={setIsChatOpen} 
                      setNotesObj={setNotesObj} 
                  />
                  <NotesComponent 
                      isChatOpen={isChatOpen} 
                      notesObj={notesObj} 
                      setIsChatOpen={setIsChatOpen}
                      isMobileView={isMobileView}
                  />
                  <Logo isChatOpen={isChatOpen} />
              </>
          )}
          <PopUp isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      </div>
  );
};


export default Home