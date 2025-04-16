import { ButtonExamplePage } from '@pages/button-example'
import { HomePage } from '@pages/home'
import { StudyPage } from '@pages/study'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="app-navigation">
          <div className="nav-logo">CR</div>
          <div className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} end>홈</NavLink>
            <NavLink to="/buttons" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>버튼 예제</NavLink>
            <NavLink to="/study" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>정보처리기사 학습</NavLink>
          </div>
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