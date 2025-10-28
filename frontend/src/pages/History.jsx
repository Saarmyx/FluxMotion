import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function History() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('entries') || '[]')
    setEntries(stored)
  }, [])

  return (
    <div>
      <div className="h2">Historial</div>
      {entries.length === 0 ? (
        <p style={{ color: '#9aa0b2' }}>No hay entradas aún.</p>
      ) : (
        <div style={{ marginTop: 8 }}>
          {entries.map((e, i) => (
            <div className="entry" key={i}>
              <div className="meta">
                {e.date} — <strong style={{ color: 'var(--accent)' }}>{e.mood}</strong>
              </div>
              <div>{e.text}</div>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: 12 }}>
        <Link to="/">
          <button className="btn small">Nuevo</button>
        </Link>
      </div>
    </div>
  )
}
