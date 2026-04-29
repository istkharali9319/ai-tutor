import React, { useState } from 'react'
import Header from '../components/partials/Header'
import SideBar from '../components/partials/SideBar'
import EmptyState from '../components/EmptyState'
import Messages from '../components/Messages'
import Auth from '../utils/auth'

const Dashboard = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = async (e) => {
    e.preventDefault()

    if (!input.trim()) return

    // ✅ Add user + empty AI message together (avoid race condition)
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "" }
    ])

    try {
      const response = await fetch("http://127.0.0.1:5000/api/conversations/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Auth.getToken()}`,
        },
        body: JSON.stringify({
          prompt: input,
          provider: "gemini",
        }),
      })

      // ✅ Handle backend errors
      if (!response.ok) {
        const text = await response.text()
        console.error("Server error:", text)
        return
      }

      // ✅ Ensure stream exists
      if (!response.body) {
        console.error("No response body (stream not available)")
        return
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)

        // ✅ Safe immutable update
        setMessages((prev) => {
          const updated = [...prev]
          const lastIndex = updated.length - 1

          updated[lastIndex] = {
            ...updated[lastIndex],
            content: updated[lastIndex].content + chunk,
          }

          return updated
        })
      }

    } catch (err) {
      console.error("Error:", err)
    }

    setInput("")
  }

  return (
    <div className="app">
      <SideBar />
      <main className="main">
        <Header />

        <div className="chat-scroll">
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <Messages messages={messages} />
          )}
        </div>

        <div className="composer-wrap">
          <div className="composer-shell">

            {/* ✅ FIXED: form handles submit */}
            <form onSubmit={handleSend} className="composer">

              {/* ✅ FIXED: controlled textarea */}
              <textarea
                id="question"
                placeholder="Message AI Tutor..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="composer-actions">
                <div className="status">Ready</div>

                <div className="buttons">
                  <button
                    className="ghost"
                    type="button"
                  >
                    Sample Prompt
                  </button>

                  {/* ✅ FIXED: no onClick */}
                  <button className="send" type="submit">
                    Send
                  </button>
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