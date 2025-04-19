/**
 * 정보처리기사 실기 시험 키워드 설명 데이터
 * 
 * - keyword: 키워드 이름
 * - description: 키워드에 대한 상세 설명
 * - example: 예시 코드 또는 설명 (선택 사항)
 * - relatedKeywords: 관련 키워드 목록 (선택 사항)
 */

// 키워드 설명 인터페이스 정의
export interface KeywordDescription {
  keyword: string;
  description: string;
  example?: string;
  relatedKeywords?: string[];
}

export const KEYWORD_DESCRIPTIONS: KeywordDescription[] = [
  {
    keyword: 'DDL',
    description: 'DDL(Data Definition Language)은 데이터베이스 스키마를 정의하고 수정하기 위한 SQL 명령어 집합입니다. 테이블, 인덱스, 뷰와 같은 데이터베이스 객체를 생성, 변경, 삭제하는 데 사용됩니다.',
    example: 'CREATE TABLE employee (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  department VARCHAR(30)\n);\n\nALTER TABLE employee ADD COLUMN salary INT;\n\nDROP TABLE employee;',
    relatedKeywords: ['SQL', 'CREATE', 'ALTER', 'DROP', 'DML', 'DCL']
  },
  {
    keyword: 'DML',
    description: 'DML(Data Manipulation Language)은 데이터베이스 내의 데이터를 조작하기 위한 SQL 명령어 집합입니다. 데이터 조회, 삽입, 수정, 삭제 등의 작업을 수행합니다.',
    example: 'SELECT * FROM employee WHERE department = \'IT\';\n\nINSERT INTO employee (id, name, department) VALUES (1, \'홍길동\', \'개발\');\n\nUPDATE employee SET salary = 5000 WHERE id = 1;\n\nDELETE FROM employee WHERE id = 1;',
    relatedKeywords: ['SQL', 'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DDL']
  },
  {
    keyword: 'DCL',
    description: 'DCL(Data Control Language)은 데이터베이스 접근 권한을 제어하기 위한 SQL 명령어 집합입니다. 사용자에게 특정 데이터베이스나 테이블에 대한 권한을 부여하거나 취소하는 데 사용됩니다.',
    example: 'GRANT SELECT, INSERT ON employee TO user1;\n\nREVOKE DELETE ON employee FROM user1;',
    relatedKeywords: ['SQL', 'GRANT', 'REVOKE', 'DDL', 'DML']
  },
  {
    keyword: 'SQL',
    description: 'SQL(Structured Query Language)은 관계형 데이터베이스 관리 시스템(RDBMS)의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어입니다. 데이터 쿼리, 데이터 조작, 데이터 정의, 접근 제어 등을 위한 다양한 명령어를 제공합니다.',
    example: '-- 데이터 조회\nSELECT * FROM products WHERE price > 1000;\n\n-- 데이터 삽입\nINSERT INTO customers (name, email) VALUES (\'김철수\', \'kim@example.com\');\n\n-- 테이블 생성\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  customer_id INT,\n  order_date DATE\n);',
    relatedKeywords: ['DDL', 'DML', 'DCL', 'RDBMS', '정규화', '트랜잭션']
  },
  {
    keyword: '정규화',
    description: '정규화(Normalization)는 데이터베이스 설계 시 중복을 최소화하고 데이터 무결성을 보장하기 위해 관계형 데이터베이스의 테이블을 구조화하는 프로세스입니다. 1NF, 2NF, 3NF, BCNF, 4NF, 5NF 등 여러 단계로 구성됩니다.',
    example: '1NF: 각 컬럼이 원자값을 가짐\n2NF: 1NF + 부분 종속성 제거\n3NF: 2NF + 이행적 종속성 제거\nBCNF: 3NF + 모든 결정자가 후보키',
    relatedKeywords: ['데이터베이스', '테이블', 'ERD', '반정규화', '무결성']
  },
  {
    keyword: '반정규화',
    description: '반정규화(Denormalization)는 정규화된 데이터베이스 구조를 의도적으로 중복시키거나 그룹화하여 쿼리 성능을 향상시키는 기법입니다. 읽기 작업이 많고 성능이 중요한 시스템에서 자주 사용됩니다.',
    example: '- 테이블 병합: 1:1 또는 1:N 관계의 테이블을 하나로 통합\n- 컬럼 복제: 자주 조인되는 테이블의 컬럼을 다른 테이블에 복제\n- 테이블 분할: 수직 또는 수평으로 테이블을 분할',
    relatedKeywords: ['정규화', '성능 최적화', '인덱싱', '데이터 중복']
  },
  {
    keyword: '트랜잭션',
    description: '트랜잭션(Transaction)은 데이터베이스의 상태를 변환시키는 하나의 논리적 작업 단위입니다. 트랜잭션은 ACID 속성(원자성, 일관성, 고립성, 지속성)을 가지며, 이를 통해 데이터 무결성을 보장합니다.',
    example: 'BEGIN TRANSACTION;\n\nUPDATE accounts SET balance = balance - 1000 WHERE account_id = 123;\nUPDATE accounts SET balance = balance + 1000 WHERE account_id = 456;\n\nCOMMIT; -- 성공 시\n-- 또는\nROLLBACK; -- 실패 시',
    relatedKeywords: ['ACID', '커밋', '롤백', '격리 수준', '동시성 제어']
  },
  {
    keyword: '인덱스',
    description: '인덱스(Index)는 데이터베이스 테이블의 검색 속도를 향상시키기 위한 자료구조입니다. 데이터 조회 성능을 개선하지만, 데이터 변경 작업(삽입, 수정, 삭제)의 성능은 감소시킬 수 있습니다.',
    example: '-- 인덱스 생성\nCREATE INDEX idx_employee_name ON employee(name);\n\n-- 복합 인덱스 생성\nCREATE INDEX idx_employee_dept_name ON employee(department, name);\n\n-- 인덱스 삭제\nDROP INDEX idx_employee_name;',
    relatedKeywords: ['B-Tree', '해시 인덱스', '클러스터 인덱스', '성능 최적화', '쿼리 튜닝']
  },
  {
    keyword: 'UML',
    description: 'UML(Unified Modeling Language)은 소프트웨어 시스템의 설계와 구조를 시각화하고 문서화하기 위한 표준화된 모델링 언어입니다. 다양한 다이어그램을 통해 시스템의 다양한 측면을 표현합니다.',
    example: 'UML 다이어그램 유형:\n- 클래스 다이어그램: 클래스, 속성, 메서드, 관계 표현\n- 시퀀스 다이어그램: 객체 간 메시지 교환 순서 표현\n- 유스케이스 다이어그램: 시스템과 사용자 간 상호작용 표현\n- 상태 다이어그램: 객체의 상태 변화 표현',
    relatedKeywords: ['클래스 다이어그램', '시퀀스 다이어그램', '유스케이스', '객체지향 설계', 'ER 다이어그램']
  },
  {
    keyword: 'ACID',
    description: 'ACID는 데이터베이스 트랜잭션이 안전하게 수행된다는 것을 보장하기 위한 4가지 속성입니다. Atomicity(원자성), Consistency(일관성), Isolation(격리성), Durability(지속성)의 약자입니다.',
    example: '- 원자성: 트랜잭션의 모든 연산이 완료되거나 아무것도 수행되지 않음\n- 일관성: 트랜잭션 수행 전후에 데이터베이스가 일관된 상태를 유지\n- 격리성: 동시에 실행되는 트랜잭션들이 서로 영향을 미치지 않음\n- 지속성: 성공적으로 완료된 트랜잭션의 결과는 영구적으로 반영됨',
    relatedKeywords: ['트랜잭션', '격리 수준', '데이터 무결성', '커밋', '롤백']
  },
  {
    keyword: 'TCP/IP',
    description: 'TCP/IP는 인터넷에서 컴퓨터들이 서로 통신하기 위해 사용하는 프로토콜의 집합입니다. TCP(전송 제어 프로토콜)는 데이터의 신뢰성을 보장하고, IP(인터넷 프로토콜)는 데이터 패킷의 라우팅을 담당합니다.',
    example: '- TCP 3-way 핸드셰이크:\n  1. SYN: 클라이언트가 서버에 연결 요청\n  2. SYN-ACK: 서버가 클라이언트에 요청 수락과 연결 요청\n  3. ACK: 클라이언트가 서버에 응답 전송, 연결 설정\n\n- IP 주소 형식: IPv4 (예: 192.168.0.1), IPv6 (예: 2001:0db8:85a3:0000:0000:8a2e:0370:7334)',
    relatedKeywords: ['OSI 7계층', 'UDP', 'HTTP', '라우팅', '포트', '소켓']
  },
  {
    keyword: 'OSI 7계층',
    description: 'OSI 7계층(OSI 7 Layer Model)은 네트워크 통신을 7개의 계층으로 나누어 표준화한 모델입니다. 각 계층은 특정 네트워크 기능을 담당하며, 계층 간에는 정해진 인터페이스를 통해 통신합니다.',
    example: '1. 물리 계층(Physical Layer): 비트 전송, 케이블, 허브\n2. 데이터 링크 계층(Data Link Layer): MAC 주소, 스위치, 이더넷\n3. 네트워크 계층(Network Layer): IP, 라우터, 패킷 라우팅\n4. 전송 계층(Transport Layer): TCP, UDP, 포트, 세그먼트\n5. 세션 계층(Session Layer): 세션 연결 관리\n6. 표현 계층(Presentation Layer): 데이터 변환, 암호화\n7. 응용 계층(Application Layer): HTTP, FTP, DNS, SMTP',
    relatedKeywords: ['TCP/IP', '네트워크 프로토콜', '인터넷', '라우팅', '프로토콜 스택']
  },
  {
    keyword: '대칭키 암호화',
    description: '대칭키 암호화(Symmetric-key Encryption)는 동일한 키를 사용하여 암호화와 복호화를 수행하는 암호화 방식입니다. 빠른 속도가 장점이지만, 안전한 키 교환이 어렵다는 단점이 있습니다.',
    example: '- 대표적인 알고리즘: AES, DES, 3DES, SEED\n- 사용 사례: 파일 암호화, 대용량 데이터 암호화, SSL/TLS의 데이터 암호화 부분\n- 키 길이: AES-128, AES-192, AES-256 등',
    relatedKeywords: ['비대칭키 암호화', 'AES', '암호화 키', '블록 암호', '스트림 암호']
  },
  {
    keyword: '비대칭키 암호화',
    description: '비대칭키 암호화(Asymmetric Encryption)는 공개키와 개인키 한 쌍을 사용하는 암호화 방식입니다. 공개키로 암호화된 데이터는 개인키로만 복호화할 수 있어 안전한 통신이 가능합니다.',
    example: '- 대표적인 알고리즘: RSA, ECC, DSA\n- 사용 사례: 전자서명, SSL/TLS 인증서, 키 교환\n- RSA 키 생성 과정:\n  1. 두 개의 큰 소수 p, q 선택\n  2. n = p × q 계산\n  3. φ(n) = (p-1) × (q-1) 계산\n  4. 공개키 e와 개인키 d 생성',
    relatedKeywords: ['RSA', '공개키', '개인키', '전자서명', 'PKI', '인증서']
  },
  {
    keyword: '해시함수',
    description: '해시함수(Hash Function)는 임의의 길이의 데이터를 고정된 길이의 데이터(해시값)로 변환하는 함수입니다. 원본 데이터를 복원할 수 없는 일방향성이 특징이며, 데이터 무결성 검증과 비밀번호 저장에 활용됩니다.',
    example: '- 대표적인 알고리즘: MD5, SHA-1, SHA-256, SHA-3, bcrypt\n- 사용 사례: 비밀번호 저장, 데이터 무결성 검증, 블록체인\n- 특성: 일방향성, 충돌 저항성\n- 해시값 예시(SHA-256): "hello" → "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"',
    relatedKeywords: ['무결성', '일방향성', '충돌', 'SHA', 'MD5', '솔트']
  },
  {
    keyword: '정렬 알고리즘',
    description: '정렬 알고리즘은 원소들을 특정 순서(오름차순, 내림차순 등)에 따라 배열하는 알고리즘입니다. 알고리즘마다 시간복잡도, 공간복잡도, 안정성 등의 특성이 다릅니다.',
    example: '1. 버블 정렬(Bubble Sort): O(n²), 인접한 두 원소 비교 및 교환\n2. 선택 정렬(Selection Sort): O(n²), 최소값 선택하여 배치\n3. 삽입 정렬(Insertion Sort): O(n²), 적절한 위치에 원소 삽입\n4. 퀵 정렬(Quick Sort): 평균 O(n log n), 분할 정복 방식\n5. 병합 정렬(Merge Sort): O(n log n), 안정적, 분할 정복 방식\n6. 힙 정렬(Heap Sort): O(n log n), 힙 자료구조 사용',
    relatedKeywords: ['알고리즘', '퀵 정렬', '병합 정렬', '버블 정렬', '시간복잡도', '공간복잡도']
  },
  {
    keyword: '그래프 알고리즘',
    description: '그래프 알고리즘은 노드(정점)와 엣지(간선)로 구성된 그래프 구조에서 다양한 문제를 해결하는 알고리즘입니다. 경로 탐색, 최소 비용 산출, 네트워크 분석 등에 활용됩니다.',
    example: '1. 깊이 우선 탐색(DFS): 스택 또는 재귀를 사용해 깊이 방향으로 탐색\n2. 너비 우선 탐색(BFS): 큐를 사용해 넓이 방향으로 탐색\n3. 다익스트라 알고리즘: 단일 출발점 최단 경로 문제\n4. 벨만-포드 알고리즘: 음의 가중치가 있는 그래프의 최단 경로\n5. 프림 알고리즘: 최소 신장 트리 구성\n6. 크루스칼 알고리즘: 최소 신장 트리 구성(유니온-파인드 활용)',
    relatedKeywords: ['DFS', 'BFS', '최단경로', '최소신장트리', '위상정렬', '강한 연결 요소']
  },
  {
    keyword: '동적 프로그래밍',
    description: '동적 프로그래밍(Dynamic Programming)은 복잡한 문제를 간단한 하위 문제로 나누어 해결하는 알고리즘 설계 기법입니다. 중복되는 계산을 저장하여 재활용함으로써 실행 속도를 향상시킵니다.',
    example: '- 피보나치 수열 계산(메모이제이션 방식):\nfunction fib(n, memo = {}):\n  if n in memo: return memo[n]\n  if n <= 2: return 1\n  memo[n] = fib(n-1, memo) + fib(n-2, memo)\n  return memo[n]\n\n- 대표적인 DP 문제: 최장 공통 부분 수열(LCS), 배낭 문제, 편집 거리',
    relatedKeywords: ['메모이제이션', '타뷸레이션', '최적 부분 구조', '중복 부분 문제', '그리디 알고리즘']
  },
  {
    keyword: '소프트웨어 개발 생명주기',
    description: '소프트웨어 개발 생명주기(SDLC, Software Development Life Cycle)는 소프트웨어 개발 과정을 체계적으로 구성한 프레임워크입니다. 계획에서 유지보수까지 소프트웨어의 전체 생명주기를 관리합니다.',
    example: '1. 계획(Planning): 프로젝트 범위, 일정, 비용 등 계획 수립\n2. 요구사항 분석(Requirements): 시스템 요구사항 정의 및 문서화\n3. 설계(Design): 아키텍처 설계, 상세 설계 등 시스템 구조 설계\n4. 구현(Implementation): 설계 기반 코드 작성 및 단위 테스트\n5. 테스트(Testing): 통합 테스트, 시스템 테스트, 사용자 인수 테스트\n6. 배포(Deployment): 사용자 환경에 시스템 설치 및 배포\n7. 유지보수(Maintenance): 오류 수정, 기능 개선, 환경 적응 등',
    relatedKeywords: ['폭포수 모델', '애자일', '스크럼', '데브옵스', '프로토타입', '스파이럴 모델']
  },
  {
    keyword: '디자인 패턴',
    description: '디자인 패턴은 소프트웨어 설계 시 자주 발생하는 문제에 대한 재사용 가능한 해결책입니다. 코드의 유지보수성과 확장성을 높이며, 개발자 간 의사소통을 효율적으로 만들어 줍니다.',
    example: '1. 생성 패턴: 객체 생성 메커니즘 다루기\n   - 싱글턴(Singleton): 클래스의 인스턴스가 하나만 생성되도록 보장\n   - 팩토리 메서드(Factory Method): 객체 생성을 서브클래스에 위임\n   - 추상 팩토리(Abstract Factory): 관련 객체들의 집합 생성\n\n2. 구조 패턴: 클래스와 객체 합성\n   - 어댑터(Adapter): 인터페이스 변환하여 호환성 제공\n   - 데코레이터(Decorator): 객체에 동적으로 책임 추가\n\n3. 행위 패턴: 객체 간 상호작용과 책임 분배\n   - 옵저버(Observer): 객체 간 일대다 의존성 정의\n   - 전략(Strategy): 알고리즘군을 정의하고 교체 가능하게 함',
    relatedKeywords: ['GoF', '싱글턴', '팩토리', '옵저버', 'MVC', '의존성 주입']
  }
];

/**
 * 키워드 이름으로 설명 데이터 찾기 헬퍼 함수
 * 
 * @param keyword 찾고자 하는 키워드 이름
 * @returns 해당 키워드의 설명 데이터 또는 기본 설명 객체
 */
export const findKeywordDescription = (keyword: string): KeywordDescription => {
  return KEYWORD_DESCRIPTIONS.find(desc => desc.keyword === keyword) || {
    keyword,
    description: `${keyword}에 대한 상세 설명은 현재 준비 중입니다.`,
    relatedKeywords: []
  };
}; 