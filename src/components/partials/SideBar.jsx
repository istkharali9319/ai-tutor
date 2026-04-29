import React from 'react'

const SideBar = () => {
    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-badge">AI</div>
                <div>AI Tutor</div>
            </div>

            <button id="newChatBtn" className="new-chat" type="button">+ New tutoring chat</button>
            <input className="search-box" type="text" placeholder="Search chats" />

            <div className="history">
                <div className="history-item">
                    <strong>Fractions lesson</strong>
                    <span>Simple explanation with practice questions</span>
                </div>
                <div className="history-item">
                    <strong>Photosynthesis basics</strong>
                    <span>Science answer for middle school level</span>
                </div>
                <div className="history-item">
                    <strong>Python loops</strong>
                    <span>Beginner coding help with examples</span>
                </div>
            </div>

            <section className="sidebar-card">
                <h2>How it helps</h2>
                <p>Ask questions in a natural way and get simple explanations, examples, and a short practice task.</p>
            </section>

            <section className="sidebar-card">
                <h2>Better prompts</h2>
                <ul>
                    <li>Mention the subject and class level.</li>
                    <li>Ask for a simple or step-by-step explanation.</li>
                    <li>Request examples, exercises, or a quick quiz.</li>
                </ul>
            </section>
        </aside>
    )
}

export default SideBar
