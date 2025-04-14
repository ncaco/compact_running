import { ButtonExamplePage } from '@pages/button-example'
import { HomePage } from '@pages/home'
import { useState } from 'react'

export const Router = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'buttons'>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'buttons':
        return <ButtonExamplePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app-container">
      <nav className="app-navigation">
        <button onClick={() => setCurrentPage('home')}>홈</button>
        <button onClick={() => setCurrentPage('buttons')}>버튼 예제</button>
      </nav>
      <main className="app-content">
        {renderPage()}
      </main>
    </div>
  )
} 