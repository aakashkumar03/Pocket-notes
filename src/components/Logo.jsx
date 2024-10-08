import React from 'react'
import '../styles/Logo.css'
import constants from '../utils/constants'

const Logo = ({isChatOpen}) => {
  return isChatOpen?null:(
    <div className='logo-container'>
        <div className="desc">
            <img src={constants.POCKET_NOTES_LOGO} alt="Pocket Notes Logo" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className="encryp">
            <img src={constants.ENCRYPTED_ICON} alt="Encrypted Logo" />
            <p>end-to-end encrypted</p>
        </div>
    </div>
  )
}

export default Logo