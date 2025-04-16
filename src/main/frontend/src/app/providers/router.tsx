import { ButtonExamplePage } from '@pages/button-example'
import { HomePage } from '@pages/home'
import { StudyPage } from '@pages/study'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="app-navigation">
          <Link to="/" className="nav-link">홈</Link>
          <Link to="/buttons" className="nav-link">버튼 예제</Link>
          <Link to="/study" className="nav-link">정보처리기사 학습</Link>
        </nav>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buttons" element={<ButtonExamplePage />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
} 