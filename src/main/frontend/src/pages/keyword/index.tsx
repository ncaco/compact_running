import React, { useState, useRef, useEffect, useMemo } from 'react';
import { findKeywordDescription } from './keywordDescriptions';
import './styles.css';

interface KeywordCategory {
  id: string;
  name: string;
  keywords: string[];
}

// 키워드 설명 데이터 타입
interface KeywordDescription {
  keyword: string;
  description: string;
  example?: string;
  relatedKeywords?: string[];
}

// 키워드 데이터 - 실제 정보처리기사 실기 시험 관련 키워드들
const KEYWORD_DATA: KeywordCategory[] = [
  {
    id: 'database',
    name: '데이터베이스',
    keywords: [
      'DDL', 'DML', 'DCL', 'TCL', 'SQL', '정규화', '이상현상', '인덱스', 
      '트랜잭션', 'ACID', '무결성', '트리거', '스토어드 프로시저', '커서', 
      '조인(INNER/OUTER/CROSS)', '서브쿼리', 'ERD', '뷰', '정규형(1NF/2NF/3NF/BCNF)',
      '관계대수', '테이블 파티셔닝', 'ORM', 'NoSQL', '시퀀스', '외래키',
      '후보키', '기본키', '슈퍼키', '대체키', 'null값', '제약조건',
      '데드락', '트랜잭션 격리수준', '그룹함수', '조인 알고리즘', '최적화',
      '이중화', '파티셔닝', '샤딩', '클러스터링', '분산 데이터베이스',
      'COMMIT', 'ROLLBACK', 'SAVEPOINT', '다중 트랜잭션',
      '부분 함수적 종속', '이행적 함수적 종속', '결정자', '원자값',
      'E-R 다이어그램', '카디널리티', '인스턴스', '튜플', '애트리뷰트',
      '엔티티', '릴레이션', '도메인', '디스크 I/O', '버퍼 관리'
    ]
  },
  {
    id: 'network',
    name: '네트워크',
    keywords: [
      'OSI 7계층', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'DHCP', 'ARP', 'ICMP', 
      '라우팅', '서브넷팅', 'NAT', '방화벽', 'VPN', '로드밸런싱', '프록시',
      'TCP와 UDP 차이', '포트번호', 'IPv4/IPv6', '쿠키와 세션', '소켓 통신',
      'API Gateway', '네트워크 토폴로지', 'VLAN', 'SSL/TLS', 'MAC 주소',
      '라우터', '스위치', '허브', '게이트웨이', '인증서', '대칭키/비대칭키',
      'HTTP 상태코드', 'HTTP 메서드', 'RESTful API', 'SOAP', 'WebSocket',
      '네트워크 지연시간', '패킷 손실', 'Throughput', 'QoS', '혼잡제어',
      '흐름제어', '오류제어', '맨체스터 인코딩', '슬라이딩 윈도우',
      'Handshaking', '3-way handshake', '4-way handshake', 'MTU',
      '브로드캐스트', '유니캐스트', '멀티캐스트', 'CIDR 표기법',
      'SYN Flooding', 'IP 스푸핑', 'ARP 스푸핑', 'SSL 핸드셰이크'
    ]
  },
  {
    id: 'security',
    name: '보안',
    keywords: [
      '대칭키 암호화', '비대칭키 암호화', '해시함수', '전자서명', '인증',
      'OAuth', 'JWT', 'XSS', 'CSRF', 'SQL 인젝션', '버퍼 오버플로우',
      'DDoS', '방화벽', 'IDS/IPS', 'SSL/TLS', '접근제어', 'CORS',
      '취약점 스캐닝', '패스워드 해싱', 'HTTPS', '보안 코딩', '개인정보보호',
      '암호화 알고리즘(AES, RSA, SHA)', '무결성 검증', 'MAC(메시지 인증)',
      '인증 프로토콜', 'SSO(Single Sign-On)', '2FA/MFA', '권한 상승',
      '최소 권한 원칙', '서버 하드닝', '포트 스캐닝', '네트워크 스니핑',
      '피싱', '스미싱', '랜섬웨어', '백도어', '루트킷', '제로데이 공격',
      'OWASP Top 10', '방어 심층화', '패치 관리', '보안 감사',
      '침해사고 대응', '디지털 포렌식', '사회공학적 공격', '키 관리',
      '디지털 인증서', 'PKI', 'CA', '부인방지', 'IPSec', 'Kerberos'
    ]
  },
  {
    id: 'algorithm',
    name: '알고리즘',
    keywords: [
      '정렬(퀵/병합/삽입/선택/버블)', '검색(이진/해시)', '그래프 순회(DFS/BFS)',
      '동적 프로그래밍', '그리디 알고리즘', '최단경로(다익스트라/벨만포드/플로이드와샬)',
      '최소 신장 트리', '시간복잡도', '공간복잡도', '자료구조',
      '스택', '큐', '힙', '해시테이블', '트리', '그래프',
      '배열과 리스트', '빅오 표기법', '재귀', '트리 순회', '백트래킹',
      '분할 정복', '완전 탐색', '탐욕 알고리즘', '이분 탐색', '투 포인터',
      '슬라이딩 윈도우', '병합 정렬', '퀵 정렬', '계수 정렬', '기수 정렬',
      '힙 정렬', '위상 정렬', '크루스칼 알고리즘', '프림 알고리즘',
      '비트마스킹', '이진 트리', 'AVL 트리', '레드-블랙 트리', 'B-트리',
      '세그먼트 트리', '트라이', '유니온-파인드', '최대 유량', '이중 연결 리스트',
      '인접 행렬', '인접 리스트', '우선순위 큐', '맵리듀스', '해시 함수',
      '충돌 해결(체이닝, 개방 주소법)', 'KMP 알고리즘', '라빈-카프 알고리즘'
    ]
  },
  {
    id: 'development',
    name: '소프트웨어 개발',
    keywords: [
      '소프트웨어 생명주기', '요구사항 분석', '설계', '구현', '테스트', '유지보수',
      'UI/UX', '애자일/스크럼', '폭포수 모델', '프로토타입 모델', '나선형 모델',
      '디자인 패턴', 'MVC', 'MVP', 'MVVM', '싱글톤', '팩토리', '옵저버',
      '리팩토링', '코드 품질', '클린 코드', '기술문서', '릴리즈 관리',
      '형상 관리', 'Git', 'SVN', '분기 전략', '코드 리뷰', '페어 프로그래밍',
      '스프린트', '백로그', '에픽', '유저 스토리', '베로시티', '번다운 차트',
      'CI/CD', '지속적 배포', '마이크로서비스', 'SOA', '모놀리식 아키텍처',
      '기술 부채', '레거시 코드', '코드 중복', '코드 커버리지', '정적 분석',
      '동적 분석', 'XP(익스트림 프로그래밍)', '칸반', '린 개발', '번다운/번업 차트',
      '비즈니스 요구사항', '기능 요구사항', '비기능 요구사항', 'UML',
      '클래스 다이어그램', '시퀀스 다이어그램', '유스케이스 다이어그램',
      '아키텍처 설계', '데이터 설계', '인터페이스 설계', '객체지향 설계 원칙'
    ]
  },
  {
    id: 'test',
    name: '테스트',
    keywords: [
      '단위 테스트', '통합 테스트', '시스템 테스트', '인수 테스트', '회귀 테스트',
      '성능 테스트', '스트레스 테스트', '보안 테스트', '테스트 케이스', '테스트 시나리오',
      '테스트 자동화', 'TDD', 'BDD', '화이트박스 테스트', '블랙박스 테스트',
      '테스트 커버리지', '결함 관리', '테스트 계획', '동등 분할', '경계값 분석',
      'Mocking', '테스트 더블(스텁/스파이)', '알파 테스트', '베타 테스트',
      '부하 테스트', '내구성 테스트', '호환성 테스트', '사용성 테스트',
      '테스트 오라클', '테스트 스위트', '테스트 매트릭스', '테스트 레벨',
      '테스트 프로세스', '테스트 모니터링', '테스트 데이터 준비', '테스트 환경',
      '탐색적 테스트', '명세 기반 테스트', '구조 기반 테스트', '경험 기반 테스트',
      '테스트 주도 개발', '행위 주도 개발', '인수 테스트 주도 개발',
      '테스트 우선순위 설정', '리스크 기반 테스트', '결함 분류',
      '테스트 견고성', '테스트 네거티브 케이스', '테스트 파이프라인'
    ]
  },
  {
    id: 'webapp',
    name: '웹 애플리케이션',
    keywords: [
      'HTTP 메서드', 'REST API', 'GraphQL', 'SOAP', 'WebSocket',
      'SSR/CSR', 'SPA', 'PWA', '반응형 웹', '웹 표준', '웹 접근성',
      '브라우저 렌더링', 'DOM', '크로스 브라우징', 'CDN', '캐싱',
      'AJAX', 'JSON/XML', '웹 성능 최적화', 'SEO', '웹 서버',
      'WAS', '웹 애플리케이션 아키텍처', 'HTTP 상태 코드', 'URI/URL',
      'CORS', 'OAuth', 'JWT', '웹 서비스', 'RESTful API 설계',
      'API 버전 관리', 'API 게이트웨이', '서버리스', 'HATEOAS',
      '프론트엔드 프레임워크', '백엔드 프레임워크', 'HTML5', 'CSS3',
      'JavaScript', 'TypeScript', '웹 컴포넌트', '웹 보안',
      '웹 캐시', '웹 스토리지', '웹 폰트', '웹 애니메이션', '웹 푸시',
      '웹 알림', 'Service Worker', '인증과 인가', '세션 관리',
      '웹소켓', 'AJAX', 'JSON-RPC', '마이크로 프론트엔드', '웹 미디어',
      'WebRTC', 'Web Assembly', 'Progressive Enhancement'
    ]
  },
  {
    id: 'cloud',
    name: '클라우드 및 인프라',
    keywords: [
      'IaaS', 'PaaS', 'SaaS', 'FaaS', '컨테이너', 'Docker', 'Kubernetes',
      '마이크로서비스', '서버리스', '가상화', '오케스트레이션', 'CI/CD',
      'DevOps', 'IaC', '오토스케일링', '고가용성', '장애 허용',
      '데이터센터', '클라우드 마이그레이션', '멀티/하이브리드 클라우드', '모니터링',
      '로깅', '메트릭', '클라우드 네이티브', '컨테이너 오케스트레이션',
      '서비스 메시', 'API 게이트웨이', '서비스 디스커버리', '로드 밸런서',
      '컨피그 맵', '시크릿', '헬스 체크', '롤링 업데이트', '블루/그린 배포',
      '카나리 배포', '프로비저닝', '인프라 모니터링', '로그 집계',
      '분산 트레이싱', '클라우드 보안', 'DDoS 방어', 'WAF',
      '클라우드 스토리지', '오브젝트 스토리지', '블록 스토리지',
      '파일 스토리지', '데이터 레이크', '데이터 웨어하우스',
      '비용 최적화', '오토메이션', 'GitOps', 'KPI', 'SLI/SLO/SLA'
    ]
  },
  {
    id: 'quality',
    name: '품질 관리',
    keywords: [
      '품질 보증', '품질 통제', 'ISO 9001', 'CMMI', '품질 메트릭',
      '품질 계획', '결함 밀도', '코드 리뷰', '정적 분석', '동적 분석',
      '구조적 복잡도', '품질 모델', 'ISO/IEC 25010', 'SPICE',
      '품질 비용', '성숙도 모델', '품질 관리 도구', '베스트 프랙티스',
      '리스크 관리', '지속적 개선', '품질 관리 프레임워크', '품질 지표',
      '코드 복잡도', '코드 중복', '기술 부채', '클린 코드', 'SOLID 원칙',
      '소프트웨어 인스펙션', '워크스루', '정형 리뷰', '검증과 확인',
      '품질 게이트', '인수 기준', '품질 측정', '결함 추적', '결함 분류',
      '원인 분석', '파레토 분석', '품질 비용 분석', '품질 문화',
      'ROI 분석', '품질 모니터링', '품질 개선 계획', '프로세스 개선',
      '프로세스 통제', '품질 감사', '표준 준수성', '품질 벤치마킹'
    ]
  },
  {
    id: 'trends',
    name: '최신 기술 동향',
    keywords: [
      '인공지능', '머신러닝', '딥러닝', '빅데이터', '블록체인', 'IoT',
      '엣지 컴퓨팅', '5G', '메타버스', 'AR/VR', '양자 컴퓨팅', '로봇 프로세스 자동화(RPA)',
      '디지털 트윈', '스마트시티', '핀테크', '헬스테크', '생성형 AI',
      '자율주행', '지속가능한 IT', 'MLOps', '차세대 네트워크', '디지털 전환(DX)',
      '디지털 윤리', 'NFT', '사이버 보안', '탈중앙화 금융(DeFi)',
      '확장 현실(XR)', '데이털 익명화', '환경 친화적 IT', '그린 컴퓨팅',
      '양자 암호화', '뉴로모픽 컴퓨팅', '연합 학습', '공간 컴퓨팅',
      '디지털 ID', '6G', '저전력 블루투스(BLE)', 'eSIM', '스마트 팩토리',
      '스마트 그리드', '저전력 와이드 에어리어 네트워크', 'ChatGPT',
      'LLM(대규모 언어 모델)', '제로 트러스트 보안', '양자 내성 암호화',
      'DevSecOps', '엣지 AI', '자연어 처리(NLP)', '컴퓨터 비전'
    ]
  },
  {
    id: 'os',
    name: '운영체제',
    keywords: [
      '프로세스', '스레드', '스케줄링', '교착상태', '메모리 관리',
      '가상 메모리', '페이징', '세그먼테이션', '인터럽트', '컨텍스트 스위치',
      '시스템 콜', '커널', '프로세스 동기화', '세마포어', '뮤텍스',
      '모니터', '파일 시스템', '입출력 시스템', '디바이스 드라이버',
      'CPU 스케줄링 알고리즘', '선점형/비선점형 스케줄링', '프로세스 상태',
      '프로세스 통신(IPC)', '메모리 계층', '캐시 메모리', 'TLB',
      '페이지 교체 알고리즘', '디스크 스케줄링', '클러스터링',
      '분산 시스템', '병렬 처리', '멀티태스킹', '멀티프로세싱',
      '가상화', '하이퍼바이저', '컨테이너화', '마이크로커널',
      '모놀리식 커널', '부팅 과정', '프로세스 제어 블록(PCB)',
      '쓰레드 제어 블록(TCB)', '동기/비동기 입출력'
    ]
  },
  {
    id: 'programming',
    name: '프로그래밍 언어',
    keywords: [
      '컴파일러', '인터프리터', '컴파일 과정', '링커', '로더',
      '객체지향 프로그래밍', '함수형 프로그래밍', '절차적 프로그래밍',
      '명령형 프로그래밍', '선언적 프로그래밍', '구조적 프로그래밍',
      '동적 타이핑', '정적 타이핑', '강한 타이핑', '약한 타이핑',
      '변수와 상수', '데이터 타입', '연산자', '제어문', '함수',
      '클래스와 객체', '상속', '다형성', '캡슐화', '추상화',
      '인터페이스', '추상 클래스', '제네릭', '람다 표현식', '클로저',
      '재귀', '이벤트 드리븐 프로그래밍', '메모리 관리', '가비지 컬렉션',
      '참조와 값', '스코프와 네임스페이스', '예외 처리', '어노테이션',
      '메타프로그래밍', '리플렉션', '직렬화', '모듈과 패키지',
      '다중 스레드 프로그래밍', '동시성 제어', '비동기 프로그래밍'
    ]
  }
];

export const KeywordPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('database');
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordDescription | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  
  // ESC 키 눌렀을 때 상세 설명 패널 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDetailOpen) {
        closeDetail();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isDetailOpen]);
  
  // 바탕화면 클릭 시 상세 설명 패널 닫기
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isDetailOpen && detailPanelRef.current && !detailPanelRef.current.contains(e.target as Node)) {
        // 클릭된 요소가 키워드 카드가 아닌 경우에만 닫기
        const keywordCard = (e.target as Element).closest('.keyword-card');
        if (!keywordCard) {
          closeDetail();
        }
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDetailOpen]);
  
  // 스크롤 핸들러
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop } = containerRef.current;
      setIsScrolled(scrollTop > 150);
      
      // 현재 보이는 카테고리 확인
      if (scrollTop > 100) {
        const categories = document.querySelectorAll('.keyword-category-section');
        categories.forEach((category) => {
          const rect = category.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveCategoryId((category as HTMLElement).id);
          }
        });
      }
    }
  };

  // 카테고리로 스크롤
  const scrollToCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(categoryId);
    if (element && containerRef.current) {
      containerRef.current.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };
  
  // 키워드 클릭 핸들러
  const handleKeywordClick = (keyword: string) => {
    // 키워드에 대한 설명 데이터 찾기
    const description = findKeywordDescription(keyword);
    setSelectedKeyword(description);
    setIsDetailOpen(true);
  };
  
  // 설명 패널 닫기
  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  // 관련 키워드 클릭 핸들러
  const handleRelatedKeywordClick = (keyword: string) => {
    handleKeywordClick(keyword);
  };

  // 키워드 필터링 기능
  const filteredKeywordData = useMemo(() => {
    if (!searchTerm.trim()) return KEYWORD_DATA;
    
    return KEYWORD_DATA.map(category => ({
      ...category,
      keywords: category.keywords.filter(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.keywords.length > 0);
  }, [searchTerm]);
  
  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // 검색창 초기화
  const clearSearch = () => {
    setSearchTerm('');
  };

  // 검색 결과 개수 계산
  const totalResults = useMemo(() => {
    return filteredKeywordData.reduce((acc, category) => acc + category.keywords.length, 0);
  }, [filteredKeywordData]);

  return (
    <div className="keyword-page-layout">
      <div className="category-sidebar">
        <div className="search-container">
          <input 
            type="text"
            placeholder="키워드 검색..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="keyword-search-input"
          />
          {searchTerm && (
            <button className="clear-search-button" onClick={clearSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            </button>
          )}
        </div>
        <div className="sidebar-header">
          <h3>카테고리</h3>
        </div>
        <ul className="category-navigation-vertical">
          {filteredKeywordData.map(category => (
            <li key={category.id}>
              <button 
                className={`category-link-vertical ${activeCategoryId === category.id ? 'active' : ''}`}
                onClick={() => scrollToCategory(category.id)}
              >
                {category.name}
                <span className="keyword-count">{category.keywords.length}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="keyword-page" ref={containerRef} onScroll={handleScroll}>
        <div className={`keyword-header ${isScrolled ? 'hidden' : ''}`}>
          <h1>핵심 키워드</h1>
          {searchTerm && (
            <div className="search-info">
              "{searchTerm}" 검색 결과: {totalResults}개 키워드
            </div>
          )}
        </div>
        
        <div className="keyword-categories">
          {filteredKeywordData.length > 0 ? (
            filteredKeywordData.map(category => (
              <div key={category.id} id={category.id} className="keyword-category-section">
                <h2 className="category-title">
                  {category.name}
                  <span className="category-count">({category.keywords.length})</span>
                </h2>
                <div className="keyword-grid">
                  {category.keywords.map((keyword, idx) => (
                    <div 
                      key={idx} 
                      className="keyword-card" 
                      onClick={() => handleKeywordClick(keyword)}
                    >
                      <div className="keyword-content">
                        <span className="keyword-text">{keyword}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>"{searchTerm}"에 대한 검색 결과가 없습니다.</p>
              <button className="reset-search" onClick={clearSearch}>검색 초기화</button>
            </div>
          )}
        </div>
        
        {/* 상단으로 이동하는 버튼 (아이콘으로 표시, 우측 하단에 고정) */}
        <button 
          className={`back-to-top ${isScrolled ? 'visible' : ''}`}
          onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="상단으로 이동"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 3l7 7-1.4 1.4L13 6.8V21h-2V6.8L6.4 11.4 5 10l7-7z"/>
          </svg>
        </button>
      </div>
      
      {/* 키워드 설명 슬라이드 패널 */}
      <div 
        className={`detail-panel ${isDetailOpen ? 'open' : ''}`}
        ref={detailPanelRef}
      >
        <button className="close-detail" onClick={closeDetail}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </button>
        {selectedKeyword && (
          <div className="detail-content">
            <h2>{selectedKeyword.keyword}</h2>
            <p className="detail-description">{selectedKeyword.description}</p>
            
            {selectedKeyword.example && (
              <div className="detail-example">
                <h3>예시</h3>
                <pre>{selectedKeyword.example}</pre>
              </div>
            )}
            
            {selectedKeyword.relatedKeywords && selectedKeyword.relatedKeywords.length > 0 && (
              <div className="detail-related">
                <h3>관련 키워드</h3>
                <div className="related-tags">
                  {selectedKeyword.relatedKeywords.map((related, idx) => (
                    <span 
                      key={idx} 
                      className="related-tag"
                      onClick={() => handleRelatedKeywordClick(related)}
                    >
                      {related}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="detail-footer">
              <p className="escape-hint">
                <kbd>ESC</kbd> 키를 누르거나 바탕화면을 클릭하여 닫기
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeywordPage; 