import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceMeh, faFaceFrown } from '@fortawesome/free-solid-svg-icons'

const moods = [
  { name: 'feliz', icon: faFaceSmile, color: '#FFD60A' },
  { name: 'neutral', icon: faFaceMeh, color: '#60A5FA' },
  { name: 'triste', icon: faFaceFrown, color: '#A78BFA' },
]

export default function Home() {
  const nav = useNavigate()

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="h1">¿Cómo te sientes hoy?</div>
      <div style={{ color: '#9aa0b2', marginBottom: 12 }}>
        Selecciona un emoji y escribe por qué
      </div>

      <div className="emoji-row">
        {moods.map((m) => {
          return (
            <button
              key={m.name}
              className="emoji-btn"
              onClick={() => nav(`/journal/${m.name}`)}
              style={{ color: m.color }}
              aria-label={m.name}
            >
              <FontAwesomeIcon icon={m.icon} />
            </button>
          )
        })}
      </div>
    </div>
  )
}
