import { Button } from '@shared/ui/button'
import './styles.css'
import { useEffect } from 'react'

export const ButtonExamplePage = () => {
  useEffect(() => {
    // 글리치 버튼에 data-content 속성 추가
    const glitchButtons = document.querySelectorAll('.btn-glitch');
    glitchButtons.forEach((btn) => {
      if (btn instanceof HTMLElement && btn.textContent) {
        btn.setAttribute('data-content', btn.textContent);
      }
    });
    
    // 글리치 애니메이션 버튼에 data-content 속성 추가
    const glitchAnimButtons = document.querySelectorAll('.btn-animation-glitch');
    glitchAnimButtons.forEach((btn) => {
      if (btn instanceof HTMLElement) {
        const contentEl = btn.querySelector('.btn-content');
        if (contentEl && contentEl.textContent) {
          btn.setAttribute('data-content', contentEl.textContent);
        }
      }
    });
  }, []);

  return (
    <div className="button-example-page">
      <h1>버튼 컴포넌트 예제</h1>
      
      <section className="example-section special-section">
        <h2>🌟 새로운 멋진 버튼들 🌟</h2>
        <div className="buttons-container">
          <Button variant="neon">네온</Button>
          <Button variant="bubble">버블</Button>
          <Button variant="flip3d">3D 플립</Button>
          <Button variant="yoyo">요요</Button>
          <Button variant="glitch">글리치</Button>
          <Button variant="explode">폭발</Button>
          <Button variant="shadow">그림자</Button>
          <Button variant="neonglow">네온 글로우</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>새로운 버튼 색상 변형</h2>
        <div className="buttons-container">
          <Button variant="neon" color="success">네온 성공</Button>
          <Button variant="bubble" color="danger">버블 위험</Button>
          <Button variant="flip3d" color="warning">3D 경고</Button>
          <Button variant="yoyo" color="info">요요 정보</Button>
          <Button variant="explode" color="success">폭발 성공</Button>
          <Button variant="explode" color="danger">폭발 위험</Button>
          <Button variant="explode" color="warning">폭발 경고</Button>
          <Button variant="explode" color="info">폭발 정보</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>새로운 애니메이션 버튼</h2>
        <div className="buttons-container">
          <Button animation="ripple">
            리플 효과 (클릭)
          </Button>
          <Button animation="glitch">
            글리치 (호버)
          </Button>
          <Button animation="float">
            둥둥 떠다니는
          </Button>
          <Button animation="rotate">
            회전 (호버)
          </Button>
          <Button animation="confetti" color="success">
            🎉 축하! (클릭) 🎉
          </Button>
          <Button animation="sparkle">
            ✨ 반짝임 ✨
          </Button>
          <Button animation="wave">
            〰️ 물결 〰️
          </Button>
          <Button animation="fire">
            🔥 불꽃 🔥
          </Button>
        </div>
      </section>

      <section className="example-section">
        <h2>새로운 버튼 + 아이콘</h2>
        <div className="buttons-container">
          <Button
            variant="neon"
            leftIcon={<span>💫</span>}
          >
            반짝이는 네온
          </Button>
          <Button
            variant="bubble"
            leftIcon={<span>🫧</span>}
          >
            방울방울
          </Button>
          <Button
            variant="flip3d"
            leftIcon={<span>🔄</span>}
          >
            뒤집기
          </Button>
          <Button
            variant="yoyo"
            leftIcon={<span>🪀</span>}
          >
            요요
          </Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>조합 버튼 이펙트</h2>
        <div className="buttons-container">
          <Button
            variant="neon"
            color="info"
            animation="float"
          >
            둥둥 떠다니는 네온
          </Button>
          <Button
            variant="bubble"
            color="danger"
            animation="ripple"
          >
            리플 버블
          </Button>
          <Button
            variant="flip3d"
            color="success"
            leftIcon={<span>🔄</span>}
          >
            아이콘 플립
          </Button>
          <Button
            variant="yoyo"
            color="warning"
            animation="confetti"
          >
            축하 요요
          </Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>기본 버튼</h2>
        <div className="buttons-container">
          <Button>기본 버튼</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>버튼 변형</h2>
        <div className="buttons-container">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>쫀득쫀득한 버튼</h2>
        <div className="buttons-container">
          <Button variant="elastic">Elastic</Button>
          <Button variant="bouncy">Bouncy</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>쫀득쫀득한 버튼 (색상)</h2>
        <div className="buttons-container">
          <Button variant="elastic" color="success">성공</Button>
          <Button variant="elastic" color="danger">위험</Button>
          <Button variant="elastic" color="warning">경고</Button>
          <Button variant="elastic" color="info">정보</Button>
          <Button variant="bouncy" color="success">성공</Button>
          <Button variant="bouncy" color="danger">위험</Button>
          <Button variant="bouncy" color="warning">경고</Button>
          <Button variant="bouncy" color="info">정보</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>애니메이션 버튼</h2>
        <div className="buttons-container">
          <Button animation="pulse">Pulse</Button>
          <Button animation="shake">Shake (호버)</Button>
          <Button animation="bounce">Bounce (호버)</Button>
          <Button animation="jelly">Jelly (호버)</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>애니메이션 + 쫀득쫀득한 버튼</h2>
        <div className="buttons-container">
          <Button variant="elastic" animation="jelly">
            탱글탱글 젤리
          </Button>
          <Button variant="bouncy" animation="bounce">
            통통 바운스
          </Button>
          <Button variant="elastic" color="success" animation="pulse">
            펄싱 버튼
          </Button>
          <Button variant="bouncy" color="danger" animation="shake">
            흔들림 버튼
          </Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>버튼 크기</h2>
        <div className="buttons-container">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>버튼 색상 (Primary)</h2>
        <div className="buttons-container">
          <Button color="default">기본</Button>
          <Button color="success">성공</Button>
          <Button color="danger">위험</Button>
          <Button color="warning">경고</Button>
          <Button color="info">정보</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>버튼 색상 (Outline)</h2>
        <div className="buttons-container">
          <Button variant="outline" color="default">기본</Button>
          <Button variant="outline" color="success">성공</Button>
          <Button variant="outline" color="danger">위험</Button>
          <Button variant="outline" color="warning">경고</Button>
          <Button variant="outline" color="info">정보</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>버튼 색상 (Text)</h2>
        <div className="buttons-container">
          <Button variant="text" color="default">기본</Button>
          <Button variant="text" color="success">성공</Button>
          <Button variant="text" color="danger">위험</Button>
          <Button variant="text" color="warning">경고</Button>
          <Button variant="text" color="info">정보</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>버튼 상태</h2>
        <div className="buttons-container">
          <Button disabled>비활성화</Button>
          <Button isLoading>로딩 중</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>전체 너비 버튼</h2>
        <div className="buttons-container">
          <Button fullWidth>전체 너비 버튼</Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>아이콘 버튼</h2>
        <div className="buttons-container">
          <Button
            leftIcon={<span>👈</span>}
          >
            왼쪽 아이콘
          </Button>
          <Button
            rightIcon={<span>👉</span>}
          >
            오른쪽 아이콘
          </Button>
          <Button
            leftIcon={<span>👈</span>}
            rightIcon={<span>👉</span>}
          >
            양쪽 아이콘
          </Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>색상과 아이콘 조합</h2>
        <div className="buttons-container">
          <Button
            color="success"
            leftIcon={<span>✓</span>}
          >
            확인
          </Button>
          <Button
            color="danger"
            leftIcon={<span>✕</span>}
          >
            삭제
          </Button>
          <Button
            color="warning"
            leftIcon={<span>⚠</span>}
          >
            주의
          </Button>
          <Button
            color="info"
            leftIcon={<span>ℹ</span>}
          >
            정보
          </Button>
        </div>
      </section>
      
      <section className="example-section">
        <h2>쫀득쫀득한 버튼 + 아이콘</h2>
        <div className="buttons-container">
          <Button
            variant="elastic"
            leftIcon={<span>🔥</span>}
          >
            불꽃 버튼
          </Button>
          <Button
            variant="bouncy"
            leftIcon={<span>💧</span>}
          >
            물방울 버튼
          </Button>
          <Button
            variant="elastic"
            color="success"
            leftIcon={<span>🌈</span>}
            animation="jelly"
          >
            무지개 젤리
          </Button>
          <Button
            variant="bouncy"
            color="info"
            leftIcon={<span>🌟</span>}
            animation="bounce"
          >
            별빛 바운스
          </Button>
        </div>
      </section>

      <section className="example-section special-section">
        <h2>🌟 새 스타일 + 애니메이션 조합 🌟</h2>
        <div className="buttons-container">
          <Button
            variant="explode"
            animation="sparkle"
            color="success"
          >
            반짝이는 폭발 버튼
          </Button>
          <Button
            variant="shadow"
            animation="wave"
            color="info"
          >
            물결치는 그림자 버튼
          </Button>
          <Button
            variant="neonglow"
            animation="fire"
            color="danger"
          >
            불타는 네온 버튼
          </Button>
          <Button
            variant="explode"
            leftIcon={<span>💥</span>}
            color="warning"
          >
            폭발 아이콘 버튼
          </Button>
        </div>
      </section>
    </div>
  )
}