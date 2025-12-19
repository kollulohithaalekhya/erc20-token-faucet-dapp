import React from "react";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const claim = async () => {
    const res = await window.__EVAL__.claim();
    setMsg(res);
  };

  const status = async () => {
    const res = await window.__EVAL__.status();
    setMsg(res);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>ERC-20 Faucet</h2>

      <button onClick={claim}>Claim Tokens</button>
      <button onClick={status} style={{ marginLeft: 10 }}>
        Faucet Status
      </button>

      <p>{msg}</p>
    </div>
  );
}

export default App;
