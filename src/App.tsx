import * as React from 'react'
import './App.css'


export default function App() {
  function onClick() {
    console.log("push");
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance("firefox");
    synth.speak(utterThis);
  }

  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      <button
        onClick={onClick}
      >
      Push Me
      </button>
    </main>
  )
}