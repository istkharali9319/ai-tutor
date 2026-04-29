import React from 'react'

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div className="message-row" key={index}>
          <div className={`avatar ${msg.role === "user" ? "avatar-user" : "avatar-tutor"}`}>
            {msg.role === "user" ? "You" : "AI"}
          </div>
          <div className={`message-card ${msg.role === "user" ? "user" : ""}`}>
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Messages


// import React from 'react'

// const Messages = ({messages = []}) => {
//     return (
//         <div class="messages" id="messages">
//             <div class="message-row">
//                 <div class="avatar avatar-user">You</div>
//                 <div class="message-card user">dsdd</div>
//             </div>
//             <div class="message-row">
//                 <div class="avatar avatar-tutor">AI</div>
//                 <div class="message-card">Let's work through your question.

//                     Simple explanation:
//                     dsdd

//                     Step-by-step:
//                     1. Start by identifying the main idea of the topic.
//                     2. Break it into small parts and connect each part to something familiar.
//                     3. Check understanding with one clear example.

//                     Example:
//                     Think about how this idea would appear in a classroom problem or a real-life situation. If you can explain the example in your own words, your understanding is getting stronger.

//                     Practice:
//                     Try one small question on your own using the same steps.

//                     Quick challenge:
//                     Write a short summary of what you learned and solve one more similar problem by yourself.
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Messages
