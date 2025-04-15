import { Button } from '@shared/ui/button'
import './styles.css'
import { useEffect, useState } from 'react'
import { ButtonVariant, ButtonColor, ButtonSize, ButtonAnimation } from '@shared/ui/button'

// 버튼 데이터 타입 정의
interface ButtonData {
  id: string;
  name: string;
  category: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  animation?: ButtonAnimation;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

// 버튼 데이터 정의
const BUTTON_DATA: ButtonData[] = [
  // 변형(Variant) 타입
  { id: '001', name: '기본', variant: 'primary', category: '기본 타입' },
  { id: '002', name: '세컨더리', variant: 'secondary', category: '기본 타입' },
  { id: '003', name: '아웃라인', variant: 'outline', category: '기본 타입' },
  { id: '004', name: '텍스트', variant: 'text', category: '기본 타입' },
  
  // 특수 버튼 변형
  { id: '005', name: '네온', variant: 'neon', category: '특수 타입' },
  { id: '006', name: '버블', variant: 'bubble', category: '특수 타입' },
  { id: '007', name: '3D 플립', variant: 'flip3d', category: '특수 타입' },
  { id: '008', name: '요요', variant: 'yoyo', category: '특수 타입' },
  { id: '009', name: '글리치', variant: 'glitch', category: '특수 타입' },
  { id: '010', name: '폭발', variant: 'explode', category: '특수 타입' },
  { id: '011', name: '그림자', variant: 'shadow', category: '특수 타입' },
  { id: '012', name: '네온 글로우', variant: 'neonglow', category: '특수 타입' },
  { id: '013', name: '쫀득이', variant: 'elastic', category: '특수 타입' },
  { id: '014', name: '통통이', variant: 'bouncy', category: '특수 타입' },
  
  // 색상(Color) 타입
  { id: '015', name: '성공', color: 'success', category: '색상 타입' },
  { id: '016', name: '위험', color: 'danger', category: '색상 타입' },
  { id: '017', name: '경고', color: 'warning', category: '색상 타입' },
  { id: '018', name: '정보', color: 'info', category: '색상 타입' },
  
  // 크기(Size) 타입
  { id: '019', name: '작은', size: 'sm', category: '크기 타입' },
  { id: '020', name: '중간', size: 'md', category: '크기 타입' },
  { id: '021', name: '큰', size: 'lg', category: '크기 타입' },
  
  // 애니메이션(Animation) 타입
  { id: '022', name: '리플', animation: 'ripple', category: '애니메이션' },
  { id: '023', name: '글리치', animation: 'glitch', category: '애니메이션' },
  { id: '024', name: '둥둥', animation: 'float', category: '애니메이션' },
  { id: '025', name: '회전', animation: 'rotate', category: '애니메이션' },
  { id: '026', name: '축하', animation: 'confetti', category: '애니메이션' },
  { id: '027', name: '반짝임', animation: 'sparkle', category: '애니메이션' },
  { id: '028', name: '물결', animation: 'wave', category: '애니메이션' },
  { id: '029', name: '불꽃', animation: 'fire', category: '애니메이션' },
  { id: '030', name: '펄스', animation: 'pulse', category: '애니메이션' },
  { id: '031', name: '흔들림', animation: 'shake', category: '애니메이션' },
  { id: '032', name: '바운스', animation: 'bounce', category: '애니메이션' },
  { id: '033', name: '젤리', animation: 'jelly', category: '애니메이션' },
  
  // 새로운 Confetti 효과 애니메이션
  { id: '061', name: '불꽃놀이', animation: 'fireworks', category: 'Confetti' },
  { id: '062', name: '눈내림', animation: 'snow', category: 'Confetti' },
  { id: '063', name: '별빛', animation: 'stars', category: 'Confetti' },
  { id: '064', name: '하트', animation: 'hearts', category: 'Confetti' },
  { id: '065', name: '비내림', animation: 'rain', category: 'Confetti' },
  { id: '066', name: '파티', animation: 'party', category: 'Confetti' },
  
  // 아이콘 타입
  { id: '034', name: '왼쪽 아이콘', leftIcon: <span>⬅️</span>, category: '아이콘' },
  { id: '035', name: '오른쪽 아이콘', rightIcon: <span>➡️</span>, category: '아이콘' },
  { id: '036', name: '양쪽 아이콘', leftIcon: <span>⬅️</span>, rightIcon: <span>➡️</span>, category: '아이콘' },
  
  // 상태 타입
  { id: '037', name: '로딩 중', isLoading: true, category: '상태' },
  { id: '038', name: '비활성화', disabled: true, category: '상태' },
  { id: '039', name: '전체 너비', fullWidth: true, category: '상태' },
  
  // 조합 타입
  { id: '040', name: '네온 성공', variant: 'neon', color: 'success', category: '조합' },
  { id: '041', name: '버블 위험', variant: 'bubble', color: 'danger', category: '조합' },
  { id: '042', name: '3D 경고', variant: 'flip3d', color: 'warning', category: '조합' },
  { id: '043', name: '요요 정보', variant: 'yoyo', color: 'info', category: '조합' },
  { id: '044', name: '네온 둥둥', variant: 'neon', animation: 'float', category: '조합' },
  { id: '045', name: '통통 바운스', variant: 'bouncy', animation: 'bounce', category: '조합' },
  { id: '046', name: '쫀득 젤리', variant: 'elastic', animation: 'jelly', category: '조합' },
  { id: '047', name: '큰 네온', variant: 'neon', size: 'lg', category: '조합' },
  { id: '048', name: '작은 버블', variant: 'bubble', size: 'sm', category: '조합' },
  { id: '049', name: '네온 반짝', variant: 'neon', animation: 'sparkle', category: '조합' },
  { id: '050', name: '버블 불꽃', variant: 'bubble', animation: 'fire', category: '조합' },
  
  // 특별 조합
  { id: '051', name: '네온 별', variant: 'neon', leftIcon: <span>⭐</span>, category: '특별' },
  { id: '052', name: '폭발 위험', variant: 'explode', color: 'danger', category: '특별' },
  { id: '053', name: '요요 축하', variant: 'yoyo', animation: 'confetti', category: '특별' },
  { id: '054', name: '폭발 별', variant: 'explode', leftIcon: <span>💥</span>, category: '특별' },
  { id: '055', name: '글리치 경고', variant: 'glitch', color: 'warning', category: '특별' },
  { id: '056', name: '그림자 불꽃', variant: 'shadow', animation: 'fire', category: '특별' },
  { id: '057', name: '네온 물결', variant: 'neonglow', animation: 'wave', category: '특별' },
  { id: '058', name: '쫀득 리플', variant: 'elastic', animation: 'ripple', category: '특별' },
  { id: '059', name: '통통 펄스', variant: 'bouncy', animation: 'pulse', category: '특별' },
  { id: '060', name: '네온 물방울', variant: 'neon', leftIcon: <span>💧</span>, category: '특별' },
  
  // 새로운 confetti 효과 특별 조합
  { id: '067', name: '요요 불꽃놀이', variant: 'yoyo', animation: 'fireworks', category: '특별 Confetti' },
  { id: '068', name: '네온 눈내림', variant: 'neon', animation: 'snow', category: '특별 Confetti' },
  { id: '069', name: '버블 별빛', variant: 'bubble', animation: 'stars', category: '특별 Confetti' },
  { id: '070', name: '쫀득 하트', variant: 'elastic', animation: 'hearts', category: '특별 Confetti' },
  { id: '071', name: '그림자 비', variant: 'shadow', animation: 'rain', category: '특별 Confetti' },
  { id: '072', name: '폭발 파티', variant: 'explode', animation: 'party', category: '특별 Confetti' },
  { id: '073', name: '요요 별빛', variant: 'yoyo', animation: 'stars', color: 'success', category: '특별 Confetti' },
  { id: '074', name: '네온 파티', variant: 'neon', animation: 'party', color: 'info', category: '특별 Confetti' },
  { id: '075', name: '글리치 하트', variant: 'glitch', animation: 'hearts', color: 'danger', category: '특별 Confetti' },
  
  // 새로운 특이한 버튼 타입
  { id: '076', name: '레트로', variant: 'retro', category: '특이한 버튼' },
  { id: '077', name: '픽셀', variant: 'pixel', category: '특이한 버튼' },
  { id: '078', name: '홀로그램', variant: 'hologram', category: '특이한 버튼' },
  { id: '079', name: '수묵화', variant: 'ink', category: '특이한 버튼' },
  { id: '080', name: '기계식', variant: 'mechanical', category: '특이한 버튼' },
  { id: '081', name: '유리', variant: 'glass', category: '특이한 버튼' },
  { id: '082', name: '사이버펑크', variant: 'cyberpunk', category: '특이한 버튼' },
  { id: '083', name: '스티치', variant: 'stitched', category: '특이한 버튼' },
  { id: '084', name: '종이접기', variant: 'origami', category: '특이한 버튼' },
  
  // 특이한 버튼 + 색상 조합
  { id: '085', name: '레트로 위험', variant: 'retro', color: 'danger', category: '특이한 조합' },
  { id: '086', name: '픽셀 성공', variant: 'pixel', color: 'success', category: '특이한 조합' },
  { id: '087', name: '홀로그램 정보', variant: 'hologram', color: 'info', category: '특이한 조합' },
  { id: '088', name: '사이버펑크 경고', variant: 'cyberpunk', color: 'warning', category: '특이한 조합' },
  
  // 특이한 버튼 + 애니메이션 조합
  { id: '089', name: '레트로 불꽃놀이', variant: 'retro', animation: 'fireworks', category: '특이한 조합' },
  { id: '090', name: '픽셀 눈내림', variant: 'pixel', animation: 'snow', category: '특이한 조합' },
  { id: '091', name: '홀로그램 별빛', variant: 'hologram', animation: 'stars', category: '특이한 조합' },
  { id: '092', name: '기계식 하트', variant: 'mechanical', animation: 'hearts', category: '특이한 조합' },
  { id: '093', name: '유리 비내림', variant: 'glass', animation: 'rain', category: '특이한 조합' },
  { id: '094', name: '사이버펑크 파티', variant: 'cyberpunk', animation: 'party', category: '특이한 조합' },
  
  // 특이한 버튼 + 아이콘 조합
  { id: '095', name: '레트로 게임', variant: 'retro', leftIcon: <span>🎮</span>, category: '특이한 조합' },
  { id: '096', name: '픽셀 아트', variant: 'pixel', leftIcon: <span>🎨</span>, category: '특이한 조합' },
  { id: '097', name: '홀로그램 미래', variant: 'hologram', leftIcon: <span>🚀</span>, category: '특이한 조합' },
  { id: '098', name: '사이버펑크 해킹', variant: 'cyberpunk', leftIcon: <span>💻</span>, category: '특이한 조합' },
  { id: '099', name: '수묵화 산수', variant: 'ink', leftIcon: <span>🏔️</span>, category: '특이한 조합' },
  { id: '100', name: '종이접기 학', variant: 'origami', leftIcon: <span>🦢</span>, category: '특이한 조합' },
];

export const ButtonExamplePage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
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
  
  // 버튼 필터링
  const filteredButtons = BUTTON_DATA.filter(button => {
    // 카테고리 필터
    if (activeCategory && button.category !== activeCategory) {
      return false;
    }
    
    // 검색어 필터
    if (searchTerm && !button.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // 카테고리 목록 생성
  const categories = Array.from(new Set(BUTTON_DATA.map(button => button.category)));

  return (
    <div className="button-example-page">
      <h1>버튼 도감</h1>
      
      {/* 검색 및 필터 영역 */}
      <div className="button-filters">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="버튼 이름으로 검색..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-section">
          <h3>카테고리</h3>
          <div className="filter-controls">
            <span 
              className={`filter-tag ${activeCategory === null ? 'active' : ''}`} 
              onClick={() => setActiveCategory(null)}
            >
              전체
            </span>
            {categories.map(category => (
              <span 
                key={category} 
                className={`filter-tag ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                data-category={category}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* 메인 버튼 그리드 */}
      <div className="button-grid">
        {filteredButtons.map(button => (
          <div 
            key={button.id} 
            className="button-item"
            data-id={button.id}
            data-category={button.category}
          >
            <div className="button-canvas">
              <Button
                variant={button.variant || 'primary'}
                color={button.color || 'default'}
                size={button.size || 'md'}
                animation={button.animation}
                leftIcon={button.leftIcon}
                rightIcon={button.rightIcon}
                isLoading={button.isLoading}
                disabled={button.disabled}
                fullWidth={button.fullWidth}
              >
                {button.name.length > 6 ? `${button.name.slice(0, 5)}..` : button.name}
              </Button>
            </div>
            <div className="button-name">{button.name}</div>
            <div className="button-category">{button.category}</div>
          </div>
        ))}
      </div>
      
      <footer className="pokedex-footer">
        버튼 도감 v1.0 - 총 {BUTTON_DATA.length}종의 버튼을 모두 수집해보세요!
      </footer>
    </div>
  );
}