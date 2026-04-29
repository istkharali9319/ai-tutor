import React from 'react'

const Header = () => {
  return (
    <header className="topbar">
        <div className="topbar-row">
          <div>
            <strong>AI Tutor Conversation</strong>
            <span id="sessionText">Ask a question to begin.</span>
          </div>
          <div className="topbar-actions">
            <div className="user-pill" id="userInfo">Guest</div>
            <button className="logout" id="logoutBtn" type="button">Logout</button>
          </div>
        </div>
      </header>
  )
}

export default Header
