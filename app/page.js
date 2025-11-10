export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <svg width="200" height="240" viewBox="0 0 200 240" style={{ marginBottom: '30px' }}>
          {/* Oak Leaf */}
          <path d="M100 40 Q85 50 80 65 Q75 50 70 45 Q75 55 75 70 Q65 60 60 60 Q70 70 72 85 Q60 80 55 82 Q65 90 70 105 Q85 130 100 140 Q115 130 130 105 Q135 90 145 82 Q140 80 128 85 Q130 70 140 60 Q135 60 125 70 Q125 55 130 45 Q125 50 120 65 Q115 50 100 40 Z"
                fill="#2d5016"
                opacity="0.3"
                transform="translate(0, 20)" />

          {/* Acorn Cap */}
          <ellipse cx="100" cy="120" rx="35" ry="30" fill="#8b6914" />
          <path d="M65 120 Q70 105 100 105 Q130 105 135 120" fill="#6b5010" />

          {/* Cap Texture Lines */}
          <line x1="70" y1="110" x2="75" y2="125" stroke="#5a4010" strokeWidth="1.5" />
          <line x1="80" y1="107" x2="82" y2="125" stroke="#5a4010" strokeWidth="1.5" />
          <line x1="90" y1="106" x2="91" y2="125" stroke="#5a4010" strokeWidth="1.5" />
          <line x1="100" y1="105" x2="100" y2="125" stroke="#5a4010" strokeWidth="1.5" />
          <line x1="110" y1="106" x2="109" y2="125" stroke="#5a4010" strokeWidth="1.5" />
          <line x1="120" y1="107" x2="118" y2="125" stroke="#5a4010" strokeWidth="1.5" />
          <line x1="130" y1="110" x2="125" y2="125" stroke="#5a4010" strokeWidth="1.5" />

          {/* Acorn Body */}
          <ellipse cx="100" cy="160" rx="32" ry="45" fill="#d4a574" />
          <ellipse cx="100" cy="155" rx="28" ry="40" fill="#c19a6b" />

          {/* Highlight on acorn */}
          <ellipse cx="90" cy="145" rx="12" ry="18" fill="#e8d4b8" opacity="0.6" />

          {/* Bottom tip */}
          <ellipse cx="100" cy="205" rx="8" ry="10" fill="#8b6914" />

          {/* Acorn texture */}
          <path d="M75 145 Q100 150 125 145" stroke="#a68a5a" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M77 160 Q100 165 123 160" stroke="#a68a5a" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M80 175 Q100 180 120 175" stroke="#a68a5a" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M85 190 Q100 193 115 190" stroke="#a68a5a" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#2d5016',
          marginBottom: '15px',
          fontFamily: 'Georgia, serif'
        }}>
          Family Oak
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#5a4010',
          fontStyle: 'italic',
          fontFamily: 'Georgia, serif'
        }}>
          Strength • Growth • Legacy
        </p>
      </div>
    </div>
  );
}
