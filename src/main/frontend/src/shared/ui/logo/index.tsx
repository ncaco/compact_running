import reactLogo from '@shared/assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

export const Logo = () => {
  return (
    <div className="logo-container">
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
} 