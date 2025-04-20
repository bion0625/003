import { useState } from "react";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
  };

  return (
    <div className="content-box">
      <h1>HOME</h1>
      <button onClick={() => setIsChatOpen(true)}>💬</button>

      {isChatOpen && (
        <div style={styles.modal}>
          <div style={styles.header}>
            <span>chat</span>
            <button style={styles.button} onClick={() => setIsChatOpen(false)}>X</button>
          </div>

          <div style={styles.chatArea}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ ...styles.message, alignSelf: msg.from === "user" ? "flex-end" : "flex-start" }}>
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="write message..."
            />
            <button onClick={sendMessage}>{"go"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

const styles = {
  modal: {
    fontFamily: 'Courier New, Courier, monospace',
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },
  header: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  chatArea: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    backgroundColor: "#f9f9f9",
  },
  message: {
    padding: "8px 12px",
    backgroundColor: "#e0e0e0",
    borderRadius: "12px",
    maxWidth: "80%",
    fontSize: "small",
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ccc",
    padding: "8px",
  },
  input: {
    flex: 1,
    padding: "6px",
    marginRight: "6px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    width: "30px"
  }
};
