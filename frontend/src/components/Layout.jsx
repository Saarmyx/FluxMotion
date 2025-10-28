import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 14,
        }}
      >
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: 'linear-gradient(90deg,#4F46E5,#6366F1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
            }}
          >
            EJ
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Emotion Journal</div>
            <div style={{ fontSize: 12, color: '#9aa0b2' }}>Registra y mira tu estado</div>
          </div>
        </div>

        <div>
          <Link to="/history" style={{ textDecoration: 'none' }}>
            <button className="btn small">Historial</button>
          </Link>
        </div>
      </div>

      <div className="card">{children}</div>
    </div>
  )
}
