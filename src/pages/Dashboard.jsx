import React from 'react'

const Dashboard = () => {
  return (
    <div class="app">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-badge">AI</div>
        <div>AI Tutor</div>
      </div>

      <button id="newChatBtn" class="new-chat" type="button">+ New tutoring chat</button>
      <input class="search-box" type="text" placeholder="Search chats" />

      <div class="history">
        <div class="history-item">
          <strong>Fractions lesson</strong>
          <span>Simple explanation with practice questions</span>
        </div>
        <div class="history-item">
          <strong>Photosynthesis basics</strong>
          <span>Science answer for middle school level</span>
        </div>
        <div class="history-item">
          <strong>Python loops</strong>
          <span>Beginner coding help with examples</span>
        </div>
      </div>

      <section class="sidebar-card">
        <h2>How it helps</h2>
        <p>Ask questions in a natural way and get simple explanations, examples, and a short practice task.</p>
      </section>

      <section class="sidebar-card">
        <h2>Better prompts</h2>
        <ul>
          <li>Mention the subject and class level.</li>
          <li>Ask for a simple or step-by-step explanation.</li>
          <li>Request examples, exercises, or a quick quiz.</li>
        </ul>
      </section>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="topbar-row">
          <div>
            <strong>AI Tutor Conversation</strong>
            <span id="sessionText">Ask a question to begin.</span>
          </div>
          <div class="topbar-actions">
            <div class="user-pill" id="userInfo">Guest</div>
            <button class="logout" id="logoutBtn" type="button">Logout</button>
          </div>
        </div>
      </header>

      <div class="chat-scroll">
        <div class="empty-state" id="emptyState">
          <section class="hero">
            <h1>What would you like to learn today?</h1>
            <p>Use the chat box below to ask about math, science, English, programming, history, or any study topic you want help with.</p>
          </section>
        </div>

        <div class="messages" id="messages" hidden></div>
      </div>

      <div class="composer-wrap">
        <div class="composer-shell">
          <form id="chatForm" class="composer">
            <textarea id="question" placeholder="Message AI Tutor..."></textarea>
            <div class="composer-actions">
              <div class="status" id="status">Ready</div>
              <div class="buttons">
                <button class="ghost" id="sampleBtn" type="button">Sample Prompt</button>
                <button class="send" type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Dashboard
