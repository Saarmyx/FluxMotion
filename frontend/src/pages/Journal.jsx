import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Journal() {
  const { mood } = useParams()
  const [text, setText] = useState('')
  const nav = useNavigate()

  const save = () => {
    const entries = JSON.parse(localStorage.getItem('entries') || '[]')
    const newEntry = { mood, text, date: new Date().toLocaleString() }
    localStorage.setItem('entries', JSON.stringify([newEntry, ...entries]))
    // Optionally call API to analyze -> we already have backend at /api/analyze
    // But for MVP we save and go to history
    nav('/history')
  }

  // inside save()
  /* try {
  const resp = await fetch("http://127.0.0.1:8000/api/analyze", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({text})
  });
  const analysis = await resp.json();
  newEntry.analysis = analysis;
} catch(e) {
  console.warn("API down", e);
} */

  return (
    <div>
      <div className="h2">
        Seleccionaste: <span style={{ color: '#9aa0b2', fontWeight: 700 }}>{mood}</span>
      </div>
      <textarea
        placeholder="¿Por qué te sientes así?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ display: 'flex', gap: 10, marginTop: 12, justifyContent: 'flex-end' }}>
        <button className="btn secondary" onClick={() => nav('/')}>
          Cancelar
        </button>
        <button className="btn" onClick={save}>
          Guardar
        </button>
      </div>
    </div>
  )
}
