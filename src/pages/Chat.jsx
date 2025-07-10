import { useState } from "react";

// Api key 
const API_KEY = import.meta.env.VITE_API_KEY;


export default function Chat() {
  // User input
  const [input, setInput] = useState("");
  // Messages array
  const [messages, setMessages] = useState([]);

  
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user`s message to array
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      //Connect to OpenRouter
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`, // Pass token
        },
        body: JSON.stringify({
          model: "google/gemma-3-27b-it:free", // Model that we use

          // Previous messages+new one
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...newMessages,
          ],
        }),
      });

       // Parse response
      const data = await res.json();

      // Catch errors
      if (!res.ok) throw new Error(data.error?.message || "Error from OpenRouter");

      // Add new response of AI to array(history)
      setMessages((prev) => [...prev, { role: "assistant", content: data.choices[0].message.content }]);
    } catch (error) { 
      //If an error occurs, we display it as a message from "assistant"
      setMessages((prev) => [...prev, { role: "assistant", content: "❌ Помилка: " + error.message }]);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Don`t reload page
    sendMessage(); // Send message
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>PersonChat</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.role}:</strong> {msg.content}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "80%", padding: "10px" }}
          placeholder="Нуу давай пожалійся на те який світ несправедливий..."
        />
        <button type="submit" style={{ padding: "10px" }}>Відправити</button>
      </form>
    </div>
  );
}

//Songs
// 1 Add AI and comments - Playboy Carti-ILoveUIHateU