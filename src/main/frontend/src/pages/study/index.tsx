import { useState, useEffect, useRef } from 'react';
import './styles.css';

// 단원별 내용 정의
interface Unit {
  id: string;
  title: string;
  content: string;
}

const STUDY_DATA: Unit[] = [
  {
    id: 'unit16',
    title: '16. 핵심 정리',
    content: `
      <h3>16.1 데이터베이스 핵심</h3>
      
      <h4>정규화 단계별 요약</h4>
      <table>
        <tr>
          <th>정규화 단계</th>
          <th>목적</th>
          <th>예시</th>
        </tr>
        <tr>
          <td>1NF</td>
          <td>원자값을 가진 속성으로 구성</td>
          <td>(학번, [전화번호1, 전화번호2]) → (학번, 전화번호)</td>
        </tr>
        <tr>
          <td>2NF</td>
          <td>부분적 함수 종속 제거</td>
          <td>(주문번호+제품번호, 주문수량, 제품명) → (주문번호+제품번호, 주문수량) + (제품번호, 제품명)</td>
        </tr>
        <tr>
          <td>3NF</td>
          <td>이행적 함수 종속 제거</td>
          <td>(학번, 학과코드, 학과명) → (학번, 학과코드) + (학과코드, 학과명)</td>
        </tr>
        <tr>
          <td>BCNF</td>
          <td>결정자가 후보키가 아닌 함수 종속 제거</td>
          <td>(학번+과목번호, 교수번호, 성적), 교수번호→과목번호인 경우 분해</td>
        </tr>
      </table>
      
      <h4>SQL 중요 문법 정리</h4>
      <ul>
        <li><strong>DML 주요 쿼리</strong>:</li>
      </ul>
      <pre>
-- SELECT 기본 구문과 조건절
SELECT 컬럼명 [, 컬럼명, ...] FROM 테이블명 WHERE 조건;

-- 정렬
SELECT * FROM 학생 ORDER BY 성적 DESC, 이름 ASC;

-- 그룹화 및 집계함수
SELECT 학과, COUNT(*) AS 학생수, AVG(성적) AS 평균성적
FROM 학생
GROUP BY 학과
HAVING AVG(성적) >= 80;

-- JOIN 구문
SELECT S.학번, S.이름, E.과목명, E.성적
FROM 학생 S
INNER JOIN 수강내역 E ON S.학번 = E.학번;

-- INSERT 기본 구문
INSERT INTO 테이블명 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);

-- UPDATE 기본 구문
UPDATE 테이블명 SET 컬럼명 = 값 WHERE 조건;

-- DELETE 기본 구문
DELETE FROM 테이블명 WHERE 조건;
      </pre>
      
      <h4>트랜잭션과 인덱스 핵심 사항</h4>
      <ul>
        <li><strong>트랜잭션 격리 수준</strong>:
          <ul>
            <li>READ UNCOMMITTED: 다른 트랜잭션의 커밋되지 않은 데이터도 읽을 수 있음</li>
            <li>READ COMMITTED: 커밋된 데이터만 읽을 수 있음 (대부분의 DBMS 기본값)</li>
            <li>REPEATABLE READ: 트랜잭션 내에서 같은 쿼리는 항상 같은 결과 반환</li>
            <li>SERIALIZABLE: 트랜잭션 완전 격리 (팬텀 리드 방지)</li>
          </ul>
        </li>
        <li><strong>인덱스 생성 시 고려사항</strong>:
          <ul>
            <li>WHERE, JOIN, ORDER BY에 자주 사용되는 컬럼에 생성</li>
            <li>데이터 중복도가 낮은(선택도가 높은) 컬럼에 생성</li>
            <li>INSERT, UPDATE, DELETE가 자주 발생하는 테이블은 인덱스 최소화</li>
          </ul>
        </li>
      </ul>
      
      <h3>16.2 네트워크 핵심</h3>
      
      <h4>TCP/IP 프로토콜 스택</h4>
      <table>
        <tr>
          <th>계층</th>
          <th>프로토콜</th>
          <th>주요 기능</th>
        </tr>
        <tr>
          <td>응용 계층</td>
          <td>HTTP, FTP, SMTP, DNS, DHCP</td>
          <td>사용자/애플리케이션에 서비스 제공</td>
        </tr>
        <tr>
          <td>전송 계층</td>
          <td>TCP, UDP</td>
          <td>종단간 연결, 신뢰성, 흐름제어</td>
        </tr>
        <tr>
          <td>인터넷 계층</td>
          <td>IP, ICMP, ARP</td>
          <td>패킷 전달 및 라우팅</td>
        </tr>
        <tr>
          <td>네트워크 액세스 계층</td>
          <td>Ethernet, Wi-Fi</td>
          <td>물리적 주소 지정 및 매체 액세스</td>
        </tr>
      </table>
      
      <h4>TCP vs UDP 비교</h4>
      <table>
        <tr>
          <th>특성</th>
          <th>TCP</th>
          <th>UDP</th>
        </tr>
        <tr>
          <td>연결 방식</td>
          <td>연결형(3-way handshake)</td>
          <td>비연결형</td>
        </tr>
        <tr>
          <td>신뢰성</td>
          <td>높음(ACK, 재전송)</td>
          <td>낮음(오류 검출만)</td>
        </tr>
        <tr>
          <td>순서 보장</td>
          <td>보장함(순서번호)</td>
          <td>보장하지 않음</td>
        </tr>
        <tr>
          <td>속도</td>
          <td>상대적으로 느림</td>
          <td>빠름</td>
        </tr>
        <tr>
          <td>사용 예</td>
          <td>웹(HTTP), 이메일(SMTP)</td>
          <td>스트리밍, DNS, VoIP</td>
        </tr>
      </table>
      
      <h4>서브네팅 계산법</h4>
      <ul>
        <li><strong>CIDR 표기법</strong>: 192.168.1.0/24는 서브넷 마스크가 255.255.255.0</li>
        <li><strong>호스트 수 계산</strong>: 2^(32-prefix) - 2 (네트워크 주소와 브로드캐스트 주소 제외)</li>
        <li><strong>예시</strong>: /27 서브넷은 2^(32-27) - 2 = 30개 호스트 수용 가능</li>
      </ul>
      
      <h3>16.3 보안 핵심</h3>
      
      <h4>암호화 알고리즘 특징</h4>
      <table>
        <tr>
          <th>종류</th>
          <th>알고리즘</th>
          <th>특징</th>
          <th>용도</th>
        </tr>
        <tr>
          <td rowspan="3">대칭키</td>
          <td>AES</td>
          <td>128/192/256비트 키 길이</td>
          <td>데이터 암호화</td>
        </tr>
        <tr>
          <td>DES</td>
          <td>56비트 키(취약), 현재 사용 지양</td>
          <td>레거시 시스템</td>
        </tr>
        <tr>
          <td>3DES</td>
          <td>DES를 3번 적용, 168비트 키</td>
          <td>금융권 레거시</td>
        </tr>
        <tr>
          <td rowspan="2">비대칭키</td>
          <td>RSA</td>
          <td>소인수분해 기반, 키 길이 2048비트 이상 권장</td>
          <td>전자서명, 키 교환</td>
        </tr>
        <tr>
          <td>ECC</td>
          <td>타원곡선 기반, 짧은 키로 높은 보안성</td>
          <td>모바일, IoT 장치</td>
        </tr>
        <tr>
          <td rowspan="3">해시</td>
          <td>MD5</td>
          <td>128비트 해시, 충돌 취약점 발견</td>
          <td>무결성 검사(비보안용)</td>
        </tr>
        <tr>
          <td>SHA-1</td>
          <td>160비트 해시, 현재 사용 지양</td>
          <td>레거시 시스템</td>
        </tr>
        <tr>
          <td>SHA-256</td>
          <td>256비트 해시, 현재 표준</td>
          <td>데이터 무결성, 인증</td>
        </tr>
      </table>
      
      <h4>주요 공격 기법 및 대응방안</h4>
      <ul>
        <li><strong>SQL 인젝션</strong>:
          <ul>
            <li>공격 예시: ' OR '1'='1</li>
            <li>대응: 매개변수화 쿼리, 입력값 검증, ORM 사용</li>
          </ul>
        </li>
        <li><strong>XSS(Cross-Site Scripting)</strong>:
          <ul>
            <li>공격 예시: &lt;script&gt;alert('XSS')&lt;/script&gt;</li>
            <li>대응: 입력값 이스케이프, CSP(Content Security Policy) 설정</li>
          </ul>
        </li>
        <li><strong>CSRF(Cross-Site Request Forgery)</strong>:
          <ul>
            <li>공격 방식: 사용자가 인증된 상태에서 악의적인 요청 유도</li>
            <li>대응: CSRF 토큰, SameSite 쿠키, Referer 검증</li>
          </ul>
        </li>
      </ul>
      
      <h3>16.4 알고리즘 핵심</h3>
      
      <h4>정렬 알고리즘 시간복잡도 비교</h4>
      <table>
        <tr>
          <th>알고리즘</th>
          <th>최선</th>
          <th>평균</th>
          <th>최악</th>
          <th>공간</th>
          <th>안정성</th>
        </tr>
        <tr>
          <td>버블 정렬</td>
          <td>O(n)</td>
          <td>O(n²)</td>
          <td>O(n²)</td>
          <td>O(1)</td>
          <td>안정</td>
        </tr>
        <tr>
          <td>선택 정렬</td>
          <td>O(n²)</td>
          <td>O(n²)</td>
          <td>O(n²)</td>
          <td>O(1)</td>
          <td>불안정</td>
        </tr>
        <tr>
          <td>삽입 정렬</td>
          <td>O(n)</td>
          <td>O(n²)</td>
          <td>O(n²)</td>
          <td>O(1)</td>
          <td>안정</td>
        </tr>
        <tr>
          <td>퀵 정렬</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n²)</td>
          <td>O(log n)</td>
          <td>불안정</td>
        </tr>
        <tr>
          <td>병합 정렬</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n)</td>
          <td>안정</td>
        </tr>
        <tr>
          <td>힙 정렬</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(1)</td>
          <td>불안정</td>
        </tr>
      </table>
      
      <h4>자료구조 시간복잡도</h4>
      <table>
        <tr>
          <th>자료구조</th>
          <th>접근</th>
          <th>검색</th>
          <th>삽입</th>
          <th>삭제</th>
        </tr>
        <tr>
          <td>배열</td>
          <td>O(1)</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>연결 리스트</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>스택</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>큐</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>해시 테이블</td>
          <td>N/A</td>
          <td>O(1) ~ O(n)</td>
          <td>O(1) ~ O(n)</td>
          <td>O(1) ~ O(n)</td>
        </tr>
        <tr>
          <td>이진 탐색 트리</td>
          <td>N/A</td>
          <td>O(log n) ~ O(n)</td>
          <td>O(log n) ~ O(n)</td>
          <td>O(log n) ~ O(n)</td>
        </tr>
        <tr>
          <td>AVL/레드블랙 트리</td>
          <td>N/A</td>
          <td>O(log n)</td>
          <td>O(log n)</td>
          <td>O(log n)</td>
        </tr>
      </table>
      
      <h4>주요 알고리즘 구현 코드</h4>
      <pre>
// 퀵 정렬 구현 (C언어)
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// 이진 탐색 구현 (C언어)
int binarySearch(int arr[], int low, int high, int key) {
    if (high >= low) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == key)
            return mid;
        
        if (arr[mid] > key)
            return binarySearch(arr, low, mid - 1, key);
        
        return binarySearch(arr, mid + 1, high, key);
    }
    return -1; // 찾지 못한 경우
}
      </pre>
      
      <h3>16.5 소프트웨어 공학 핵심</h3>
      
      <h4>소프트웨어 개발 모델 비교</h4>
      <table>
        <tr>
          <th>모델</th>
          <th>특징</th>
          <th>장점</th>
          <th>단점</th>
        </tr>
        <tr>
          <td>폭포수 모델</td>
          <td>순차적 단계별 접근</td>
          <td>계획과 문서화 용이</td>
          <td>요구사항 변경 대응 어려움</td>
        </tr>
        <tr>
          <td>프로토타입 모델</td>
          <td>초기 모델 개발 후 개선</td>
          <td>사용자 피드백 반영 용이</td>
          <td>관리 어려움, 불필요한 기능 포함 위험</td>
        </tr>
        <tr>
          <td>나선형 모델</td>
          <td>위험 분석 중심, 점진적 개발</td>
          <td>높은 위험 관리 능력</td>
          <td>복잡성, 비용 높음</td>
        </tr>
        <tr>
          <td>애자일 모델</td>
          <td>반복적, 점진적 개발</td>
          <td>변화 수용성 높음</td>
          <td>문서화 부족, 예측 어려움</td>
        </tr>
        <tr>
          <td>DevOps</td>
          <td>개발과 운영 통합</td>
          <td>빠른 배포, 지속적 통합</td>
          <td>도구 의존성, 복잡한 환경 설정</td>
        </tr>
      </table>
      
      <h4>소프트웨어 테스트 기법</h4>
      <ul>
        <li><strong>블랙박스 테스트</strong>: 내부 구조 고려 없이 기능 테스트
          <ul>
            <li>동등분할: 입력 데이터를 동등한 클래스로 분할하여 테스트</li>
            <li>경계값 분석: 경계 조건에서의 테스트</li>
            <li>결정 테이블: 조건과 행동의 조합으로 테스트</li>
          </ul>
        </li>
        <li><strong>화이트박스 테스트</strong>: 내부 구조 기반 테스트
          <ul>
            <li>구문 커버리지: 모든 코드 구문 실행 보장</li>
            <li>결정 커버리지: 모든 분기점 테스트</li>
            <li>조건 커버리지: 모든 개별 조건 테스트</li>
            <li>경로 커버리지: 모든 가능한 경로 테스트</li>
          </ul>
        </li>
      </ul>
      
      <h4>소프트웨어 품질 특성 (ISO/IEC 25010)</h4>
      <ul>
        <li><strong>기능 적합성</strong>: 기능 완전성, 정확성, 적합성</li>
        <li><strong>성능 효율성</strong>: 시간 효율성, 자원 효율성, 용량</li>
        <li><strong>호환성</strong>: 공존성, 상호운용성</li>
        <li><strong>사용성</strong>: 학습성, 운용성, 사용자 오류 방지, 인터페이스 심미성</li>
        <li><strong>신뢰성</strong>: 성숙성, 가용성, 결함 허용성, 복구성</li>
        <li><strong>보안성</strong>: 기밀성, 무결성, 부인 방지, 책임 추적성, 인증성</li>
        <li><strong>유지보수성</strong>: 모듈성, 재사용성, 분석성, 수정성, 테스트성</li>
        <li><strong>이식성</strong>: 적응성, 설치성, 대체성</li>
      </ul>
    `
  },
  {
    id: 'unit1',
    title: '1. 요구사항 확인',
    content: `
      <h3>1.1 소프트웨어 생명 주기</h3>
      <p>소프트웨어 생명 주기(SDLC)는 소프트웨어를 개발하기 위해 정의하고 운용하는 일련의 과정입니다.</p>
      <ul>
        <li><strong>폭포수 모델</strong>: 요구분석 → 설계 → 구현 → 테스트 → 유지보수 순으로 진행</li>
        <li><strong>프로토타입 모델</strong>: 사용자 요구사항을 정확히 파악하기 위해 프로토타입을 만들어 최종 요구사항을 도출</li>
        <li><strong>나선형 모델</strong>: 위험을 분석하고 계획 → 요구분석 → 개발 → 평가 반복</li>
        <li><strong>애자일 모델</strong>: 작은 단위로 반복적인 개발, 스크럼과 XP가 대표적</li>
      </ul>
      
      <h3>1.2 현행 시스템 분석</h3>
      <p>현행 시스템의 구성과 기능, 인터페이스, 아키텍처 등을 분석하는 과정입니다.</p>
      <ul>
        <li>시스템 구성/기능/인터페이스 파악</li>
        <li>아키텍처 및 소프트웨어 구성 파악</li>
        <li>하드웨어 및 네트워크 구성 파악</li>
      </ul>
    `
  },
  {
    id: 'unit2',
    title: '2. 화면 설계',
    content: `
      <h3>2.1 UI 설계</h3>
      <p>사용자 인터페이스는 사용자와 시스템 간의 상호작용을 가능하게 합니다.</p>
      <ul>
        <li><strong>UI 설계 원칙</strong>: 직관성, 유효성, 학습성, 유연성</li>
        <li><strong>UI 설계 지침</strong>: 사용자 중심, 일관성, 단순성, 결과 예측, 표준화, 접근성</li>
        <li><strong>UI 유형</strong>: CLI, GUI, NUI, OUI 등</li>
      </ul>
      
      <h3>2.2 UI 설계 도구</h3>
      <p>UI 설계를 위한 도구들:</p>
      <ul>
        <li><strong>와이어프레임</strong>: 기본적인 구조와 레이아웃을 시각화</li>
        <li><strong>목업</strong>: 정적인 형태의 시각적 프로토타입</li>
        <li><strong>스토리보드</strong>: 와이어프레임에 콘텐츠를 추가한 것</li>
        <li><strong>프로토타입</strong>: 실제 동작하는 대화형 모델</li>
      </ul>
    `
  },
  {
    id: 'unit3',
    title: '3. 데이터베이스 구축',
    content: `
      <h3>3.1 데이터베이스 설계</h3>
      <p>데이터베이스 설계는 개념적, 논리적, 물리적 설계로 나뉩니다.</p>
      <ul>
        <li><strong>개념적 설계</strong>: 업무 중심의 ER 다이어그램 작성</li>
        <li><strong>논리적 설계</strong>: DBMS에 맞는 스키마 설계, 정규화</li>
        <li><strong>물리적 설계</strong>: 실제 저장 구조 설계, 인덱스, 클러스터링 등</li>
      </ul>
      
      <h3>3.2 정규화</h3>
      <p>중복을 제거하고 이상현상을 방지하기 위한 과정:</p>
      <ul>
        <li><strong>1NF</strong>: 모든 속성이 원자값(Atomic Value)을 가짐</li>
        <li><strong>2NF</strong>: 기본키가 아닌 모든 속성이 기본키에 완전 함수적 종속</li>
        <li><strong>3NF</strong>: 기본키가 아닌 모든 속성이 기본키에 이행적 종속이 아님</li>
        <li><strong>BCNF</strong>: 모든 결정자가 후보키</li>
      </ul>
    `
  },
  {
    id: 'unit4',
    title: '4. 애플리케이션 설계',
    content: `
      <h3>4.1 객체지향 설계</h3>
      <p>객체지향 설계는 현실 세계의 개념을 객체로 추상화하여, 객체들 간의 상호작용으로 시스템을 모델링하는 방법입니다.</p>
      <ul>
        <li><strong>객체지향 특징</strong>: 캡슐화, 상속, 다형성, 추상화</li>
        <li><strong>객체지향 설계 원칙(SOLID)</strong>: 
          <ul>
            <li>단일 책임 원칙(SRP): 클래스는 하나의 책임만 가져야 함</li>
            <li>개방-폐쇄 원칙(OCP): 확장에는 열려있고 수정에는 닫혀있어야 함</li>
            <li>리스코프 치환 원칙(LSP): 상위 타입 객체를 하위 타입 객체로 치환해도 동작해야 함</li>
            <li>인터페이스 분리 원칙(ISP): 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 함</li>
            <li>의존관계 역전 원칙(DIP): 추상화에 의존해야 하며, 구체화에 의존하면 안됨</li>
          </ul>
        </li>
      </ul>
      
      <h3>4.2 디자인 패턴</h3>
      <p>반복되는 문제를 해결하기 위한 설계 패턴:</p>
      <ul>
        <li><strong>생성 패턴</strong>: 싱글톤, 팩토리, 빌더, 프로토타입, 추상팩토리</li>
        <li><strong>구조 패턴</strong>: 어댑터, 브리지, 컴포지트, 데코레이터, 퍼사드, 플라이웨이트, 프록시</li>
        <li><strong>행위 패턴</strong>: 옵저버, 스트래티지, 커맨드, 템플릿 메서드, 이터레이터, 상태</li>
      </ul>
    `
  },
  {
    id: 'unit5',
    title: '5. 인터페이스 구현',
    content: `
      <h3>5.1 인터페이스 설계 및 구현</h3>
      <p>인터페이스는 시스템 간 상호작용을 위한 접점을 설계하고 구현하는 것입니다.</p>
      <ul>
        <li><strong>인터페이스 방식</strong>: 
          <ul>
            <li>EAI(Enterprise Application Integration): 기업 내 애플리케이션 통합</li>
            <li>ESB(Enterprise Service Bus): 서비스 중심 통합</li>
            <li>웹 서비스: SOAP, REST 방식으로 구현</li>
          </ul>
        </li>
        <li><strong>인터페이스 통신 유형</strong>: 
          <ul>
            <li>동기식: 요청 시 응답을 기다림</li>
            <li>비동기식: 요청 후 다른 작업 진행 가능</li>
          </ul>
        </li>
      </ul>
      
      <h3>5.2 XML과 JSON</h3>
      <p>주요 데이터 교환 형식:</p>
      <ul>
        <li><strong>XML</strong>: 태그 기반 마크업 언어, 구조화된 데이터 표현</li>
        <li><strong>JSON</strong>: JavaScript 객체 표기법, 경량 데이터 교환 형식</li>
      </ul>
    `
  },
  {
    id: 'unit6',
    title: '6. 테스트 및 배포',
    content: `
      <h3>6.1 소프트웨어 테스트</h3>
      <p>소프트웨어의 품질을 확인하기 위한 검증 과정:</p>
      <ul>
        <li><strong>단위 테스트</strong>: 개별 모듈 테스트</li>
        <li><strong>통합 테스트</strong>: 모듈 간 상호작용 테스트</li>
        <li><strong>시스템 테스트</strong>: 전체 시스템 기능 테스트</li>
        <li><strong>인수 테스트</strong>: 사용자 요구사항 충족 여부 테스트</li>
      </ul>
      
      <h3>6.2 테스트 자동화</h3>
      <p>테스트 자동화 도구와 방법:</p>
      <ul>
        <li><strong>테스트 주도 개발(TDD)</strong>: 테스트 작성 후 코드 개발</li>
        <li><strong>테스트 자동화 도구</strong>: JUnit, Selenium, Cucumber 등</li>
        <li><strong>CI/CD</strong>: 지속적 통합 및 배포 자동화</li>
      </ul>
    `
  },
  {
    id: 'unit7',
    title: '7. 보안 및 알고리즘',
    content: `
      <h3>7.1 애플리케이션 보안</h3>
      <p>소프트웨어 개발 시 고려해야 할 보안 요소들:</p>
      <ul>
        <li><strong>입력 데이터 검증</strong>: SQL 인젝션, XSS(Cross-Site Scripting) 공격 방지</li>
        <li><strong>인증과 권한 부여</strong>: 사용자 인증, 권한 관리, 세션 관리</li>
        <li><strong>데이터 암호화</strong>: 민감한 정보 보호를 위한 암호화 기법 적용</li>
        <li><strong>시큐어 코딩</strong>: 보안을 고려한 코드 작성 원칙</li>
      </ul>
      
      <h3>7.2 암호화 알고리즘</h3>
      <p>정보 보호를 위한 암호화 방식:</p>
      <ul>
        <li><strong>대칭키 암호화</strong>: 
          <ul>
            <li>AES(Advanced Encryption Standard): 고급 암호화 표준</li>
            <li>DES(Data Encryption Standard): 데이터 암호화 표준</li>
            <li>3DES(Triple DES): DES를 3번 적용한 보안성이 강화된 알고리즘</li>
          </ul>
        </li>
        <li><strong>비대칭키 암호화</strong>: 
          <ul>
            <li>RSA: 공개키 암호 시스템의 대표적 알고리즘</li>
            <li>ECC(Elliptic Curve Cryptography): 타원 곡선 암호</li>
          </ul>
        </li>
        <li><strong>해시 함수</strong>: 
          <ul>
            <li>MD5: 메시지 다이제스트 알고리즘 (취약점 발견으로 보안용도로 사용 지양)</li>
            <li>SHA(Secure Hash Algorithm): SHA-1, SHA-256, SHA-512 등</li>
          </ul>
        </li>
      </ul>
      
      <h3>7.3 주요 알고리즘</h3>
      <p>프로그래밍에서 자주 사용되는 알고리즘:</p>
      
      <h4>정렬 알고리즘</h4>
      <table>
        <tr>
          <th>알고리즘</th>
          <th>시간 복잡도(평균)</th>
          <th>특징</th>
        </tr>
        <tr>
          <td>버블 정렬</td>
          <td>O(n²)</td>
          <td>인접한 두 요소를 비교하여 교환</td>
        </tr>
        <tr>
          <td>선택 정렬</td>
          <td>O(n²)</td>
          <td>최소값(또는 최대값)을 선택하여 교환</td>
        </tr>
        <tr>
          <td>삽입 정렬</td>
          <td>O(n²)</td>
          <td>정렬된 부분에 새 요소를 삽입</td>
        </tr>
        <tr>
          <td>퀵 정렬</td>
          <td>O(n log n)</td>
          <td>분할 정복 방식, 피벗 활용</td>
        </tr>
        <tr>
          <td>합병 정렬</td>
          <td>O(n log n)</td>
          <td>분할 정복 방식, 안정적 성능</td>
        </tr>
        <tr>
          <td>힙 정렬</td>
          <td>O(n log n)</td>
          <td>힙 자료구조 활용</td>
        </tr>
      </table>
      
      <h4>검색 알고리즘</h4>
      <ul>
        <li><strong>선형 검색(Linear Search)</strong>: O(n) - 처음부터 순차적으로 검색</li>
        <li><strong>이진 검색(Binary Search)</strong>: O(log n) - 정렬된 데이터에서 중간값 비교 방식으로 검색</li>
        <li><strong>해시 검색(Hash Search)</strong>: O(1) - 해시 함수를 사용하여 직접 접근</li>
      </ul>
      
      <h4>그래프 알고리즘</h4>
      <ul>
        <li><strong>깊이 우선 탐색(DFS)</strong>: 깊이를 우선으로 그래프 탐색</li>
        <li><strong>너비 우선 탐색(BFS)</strong>: 너비를 우선으로 그래프 탐색</li>
        <li><strong>다익스트라 알고리즘</strong>: 최단 경로 탐색</li>
        <li><strong>크루스칼 알고리즘</strong>: 최소 신장 트리 구성</li>
        <li><strong>프림 알고리즘</strong>: 최소 신장 트리 구성</li>
      </ul>
      
      <h4>기타 알고리즘</h4>
      <ul>
        <li><strong>동적 계획법(Dynamic Programming)</strong>: 문제를 하위 문제로 나누어 해결</li>
        <li><strong>그리디 알고리즘(Greedy Algorithm)</strong>: 각 단계에서 최적해를 선택</li>
        <li><strong>분할 정복(Divide and Conquer)</strong>: 문제를 분할하여 각각 해결 후 결합</li>
      </ul>
    `
  },
  {
    id: 'unit8',
    title: '8. 운영체제와 데이터베이스 심화',
    content: `
      <h3>8.1 운영체제 기본 개념</h3>
      <p>운영체제(OS)의 주요 구성 요소 및 기능:</p>
      <ul>
        <li><strong>프로세스 관리</strong>: 프로세스 생성, 실행, 중단, 소멸, 동기화, 통신, 교착상태 처리</li>
        <li><strong>메모리 관리</strong>: 메모리 할당, 해제, 가상 메모리, 페이징, 세그먼테이션</li>
        <li><strong>파일 시스템 관리</strong>: 파일 및 디렉토리 생성, 삭제, 수정</li>
        <li><strong>입출력 장치 관리</strong>: 장치 드라이버, 인터럽트 처리, 버퍼링</li>
      </ul>
      
      <h3>8.2 프로세스 vs 스레드</h3>
      <table>
        <tr>
          <th>프로세스</th>
          <th>스레드</th>
        </tr>
        <tr>
          <td>독립적인 실행 단위</td>
          <td>프로세스 내의 실행 흐름</td>
        </tr>
        <tr>
          <td>자체 메모리 공간 보유</td>
          <td>프로세스의 메모리 공유</td>
        </tr>
        <tr>
          <td>프로세스 간 통신(IPC) 필요</td>
          <td>스레드 간 데이터 공유 간편</td>
        </tr>
        <tr>
          <td>상대적으로 많은 자원 소비</td>
          <td>상대적으로 적은 자원 소비</td>
        </tr>
        <tr>
          <td>컨텍스트 스위칭 비용이 큼</td>
          <td>컨텍스트 스위칭 비용이 작음</td>
        </tr>
      </table>
      
      <h3>8.3 CPU 스케줄링 알고리즘</h3>
      <ul>
        <li><strong>FCFS(First-Come, First-Served)</strong>: 도착한 순서대로 처리</li>
        <li><strong>SJF(Shortest Job First)</strong>: 실행 시간이 가장 짧은 작업 우선 처리</li>
        <li><strong>우선순위 스케줄링</strong>: 우선순위가 높은 프로세스 먼저 처리</li>
        <li><strong>라운드 로빈</strong>: 시간 할당량을 정해 돌아가며 처리</li>
        <li><strong>다단계 큐</strong>: 여러 개의 큐를 사용해 프로세스 분류 처리</li>
      </ul>
      
      <h3>8.4 데이터베이스 트랜잭션</h3>
      <p><strong>트랜잭션 특성(ACID)</strong>:</p>
      <ul>
        <li><strong>Atomicity(원자성)</strong>: 트랜잭션은 모두 실행되거나 전혀 실행되지 않아야 함</li>
        <li><strong>Consistency(일관성)</strong>: 트랜잭션 완료 후 DB는 일관된 상태를 유지해야 함</li>
        <li><strong>Isolation(격리성)</strong>: 트랜잭션 실행 중 다른 트랜잭션의 영향을 받지 않아야 함</li>
        <li><strong>Durability(지속성)</strong>: 성공적으로 완료된 트랜잭션 결과는 영구적으로 반영되어야 함</li>
      </ul>
      
      <h3>8.5 트랜잭션 격리 수준</h3>
      <table>
        <tr>
          <th>격리 수준</th>
          <th>Dirty Read</th>
          <th>Non-repeatable Read</th>
          <th>Phantom Read</th>
        </tr>
        <tr>
          <td>READ UNCOMMITTED</td>
          <td>발생</td>
          <td>발생</td>
          <td>발생</td>
        </tr>
        <tr>
          <td>READ COMMITTED</td>
          <td>방지</td>
          <td>발생</td>
          <td>발생</td>
        </tr>
        <tr>
          <td>REPEATABLE READ</td>
          <td>방지</td>
          <td>방지</td>
          <td>발생</td>
        </tr>
        <tr>
          <td>SERIALIZABLE</td>
          <td>방지</td>
          <td>방지</td>
          <td>방지</td>
        </tr>
      </table>
      
      <h3>8.6 데이터베이스 인덱스</h3>
      <p>인덱스는 데이터베이스 테이블의 검색 속도를 향상시키는 자료구조입니다.</p>
      <ul>
        <li><strong>B-tree 인덱스</strong>: 가장 일반적인 인덱스 구조, 균형 트리 구조</li>
        <li><strong>해시 인덱스</strong>: 해시 함수를 이용한 빠른 검색, 등호 검색에 효율적</li>
        <li><strong>비트맵 인덱스</strong>: 카디널리티가 낮은 열에 효율적</li>
        <li><strong>전문 인덱스</strong>: 텍스트 검색에 특화된 인덱스</li>
      </ul>
      
      <p><strong>인덱스 사용 시 고려사항</strong>:</p>
      <ul>
        <li>WHERE 절에 자주 사용되는 열에 인덱스 생성</li>
        <li>JOIN에 사용되는 열에 인덱스 생성</li>
        <li>카디널리티가 높은 열에 인덱스 생성 권장</li>
        <li>인덱스가 너무 많으면 삽입, 수정, 삭제 성능 저하</li>
      </ul>
    `
  },
  {
    id: 'unit9',
    title: '9. 프로그래밍 언어와 프레임워크',
    content: `
      <h3>9.1 주요 프로그래밍 언어 비교</h3>
      <table>
        <tr>
          <th>언어</th>
          <th>특징</th>
          <th>주요 용도</th>
          <th>패러다임</th>
        </tr>
        <tr>
          <td>Java</td>
          <td>플랫폼 독립성, JVM, 강타입</td>
          <td>기업용 애플리케이션, 안드로이드</td>
          <td>객체지향, 명령형</td>
        </tr>
        <tr>
          <td>C++</td>
          <td>높은 성능, 메모리 직접 관리</td>
          <td>시스템 소프트웨어, 게임, 임베디드</td>
          <td>객체지향, 절차적</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>쉬운 문법, 인터프리터 언어</td>
          <td>데이터 분석, AI, 웹 개발</td>
          <td>객체지향, 명령형, 함수형</td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>브라우저 지원, 이벤트 기반</td>
          <td>웹 프론트엔드, Node.js 백엔드</td>
          <td>객체지향, 함수형, 프로토타입 기반</td>
        </tr>
      </table>
      
      <h3>9.2 웹 프레임워크</h3>
      <h4>백엔드 프레임워크</h4>
      <ul>
        <li><strong>Spring(Java)</strong>: 의존성 주입, AOP, 보안 기능 제공, 기업용 애플리케이션 개발에 적합</li>
        <li><strong>Django(Python)</strong>: MTV 패턴, ORM, 관리자 인터페이스 제공, 빠른 개발에 적합</li>
        <li><strong>Express(Node.js)</strong>: 경량화, 미들웨어 기반, RESTful API 구축에 적합</li>
        <li><strong>Laravel(PHP)</strong>: MVC 패턴, Eloquent ORM, 블레이드 템플릿 엔진 제공</li>
        <li><strong>ASP.NET Core(C#)</strong>: 크로스 플랫폼, 고성능, 마이크로소프트 기반 서비스에 적합</li>
      </ul>
      
      <h4>프론트엔드 프레임워크</h4>
      <ul>
        <li><strong>React</strong>: 컴포넌트 기반, 가상 DOM, 단방향 데이터 흐름, UI 구성에 집중</li>
        <li><strong>Angular</strong>: 양방향 데이터 바인딩, TypeScript 기반, 완전한 프레임워크</li>
        <li><strong>Vue.js</strong>: 점진적 프레임워크, 쉬운 학습 곡선, 반응형 데이터 바인딩</li>
        <li><strong>Svelte</strong>: 컴파일 시점 최적화, 적은 보일러플레이트, 높은 성능</li>
      </ul>
      
      <h3>9.3 모바일 애플리케이션 개발</h3>
      <ul>
        <li><strong>네이티브 개발</strong>: 
          <ul>
            <li>Android: Java, Kotlin 사용</li>
            <li>iOS: Swift, Objective-C 사용</li>
            <li>장점: 최상의 성능, 완전한 기능 접근</li>
            <li>단점: 플랫폼별 개발 필요, 높은 개발 비용</li>
          </ul>
        </li>
        <li><strong>크로스 플랫폼 개발</strong>: 
          <ul>
            <li>React Native: JavaScript 기반, 네이티브 UI 컴포넌트 사용</li>
            <li>Flutter: Dart 언어 사용, 독자적 렌더링 엔진</li>
            <li>Xamarin: C# 사용, .NET 기반</li>
            <li>장점: 코드 재사용, 개발 비용 절감</li>
            <li>단점: 성능 제약, 일부 기능 제한</li>
          </ul>
        </li>
      </ul>
      
      <h3>9.4 데브옵스(DevOps) 도구</h3>
      <ul>
        <li><strong>버전 관리</strong>: Git, SVN</li>
        <li><strong>CI/CD</strong>: Jenkins, GitLab CI, GitHub Actions, Travis CI</li>
        <li><strong>컨테이너화</strong>: Docker, Kubernetes, OpenShift</li>
        <li><strong>모니터링</strong>: Prometheus, Grafana, ELK Stack</li>
        <li><strong>인프라 자동화</strong>: Ansible, Terraform, Chef, Puppet</li>
      </ul>
      
      <h3>9.5 신기술 동향</h3>
      <ul>
        <li><strong>인공지능과 기계학습</strong>: TensorFlow, PyTorch, Scikit-learn</li>
        <li><strong>블록체인</strong>: Ethereum, Hyperledger, Solidity</li>
        <li><strong>서버리스 아키텍처</strong>: AWS Lambda, Azure Functions, Google Cloud Functions</li>
        <li><strong>마이크로서비스</strong>: Spring Cloud, Istio, Kong</li>
        <li><strong>저코드/노코드 개발</strong>: Microsoft Power Apps, OutSystems, Mendix</li>
      </ul>
    `
  },
  {
    id: 'unit10',
    title: '10. SQL 및 데이터 모델링',
    content: `
      <h3>10.1 SQL 주요 명령어</h3>
      <p>SQL(Structured Query Language)은 데이터베이스 관리를 위한 표준 언어입니다.</p>
      
      <h4>데이터 정의어(DDL: Data Definition Language)</h4>
      <ul>
        <li><strong>CREATE</strong>: 테이블, 뷰, 인덱스 등 데이터베이스 객체 생성</li>
        <li><strong>ALTER</strong>: 테이블 구조 변경 (컬럼 추가, 삭제, 자료형 변경 등)</li>
        <li><strong>DROP</strong>: 테이블, 뷰, 인덱스 등 데이터베이스 객체 삭제</li>
        <li><strong>TRUNCATE</strong>: 테이블의 모든 데이터 삭제 (테이블 구조는 유지)</li>
      </ul>
      
      <h4>데이터 조작어(DML: Data Manipulation Language)</h4>
      <ul>
        <li><strong>SELECT</strong>: 데이터 조회</li>
        <li><strong>INSERT</strong>: 데이터 삽입</li>
        <li><strong>UPDATE</strong>: 데이터 수정</li>
        <li><strong>DELETE</strong>: 데이터 삭제</li>
      </ul>
      
      <h4>데이터 제어어(DCL: Data Control Language)</h4>
      <ul>
        <li><strong>GRANT</strong>: 사용자에게 권한 부여</li>
        <li><strong>REVOKE</strong>: 사용자의 권한 취소</li>
      </ul>
      
      <h4>트랜잭션 제어어(TCL: Transaction Control Language)</h4>
      <ul>
        <li><strong>COMMIT</strong>: 트랜잭션 확정</li>
        <li><strong>ROLLBACK</strong>: 트랜잭션 취소, 이전 상태로 복원</li>
        <li><strong>SAVEPOINT</strong>: 트랜잭션 내 특정 지점 저장</li>
      </ul>
      
      <h3>10.2 JOIN의 종류</h3>
      <table>
        <tr>
          <th>JOIN 종류</th>
          <th>설명</th>
        </tr>
        <tr>
          <td>INNER JOIN</td>
          <td>두 테이블에서 조인 조건을 만족하는 행만 결과에 포함</td>
        </tr>
        <tr>
          <td>LEFT JOIN</td>
          <td>왼쪽 테이블의 모든 행과 오른쪽 테이블에서 조인 조건을 만족하는 행 포함</td>
        </tr>
        <tr>
          <td>RIGHT JOIN</td>
          <td>오른쪽 테이블의 모든 행과 왼쪽 테이블에서 조인 조건을 만족하는 행 포함</td>
        </tr>
        <tr>
          <td>FULL JOIN</td>
          <td>양쪽 테이블의 모든 행을 포함 (조인 조건을 만족하지 않는 행도 포함)</td>
        </tr>
        <tr>
          <td>CROSS JOIN</td>
          <td>두 테이블의 모든 행을 조합한 카테시안 곱(Cartesian Product) 생성</td>
        </tr>
      </table>
      
      <h3>10.3 SQL 함수</h3>
      <h4>집계 함수</h4>
      <ul>
        <li><strong>COUNT()</strong>: 행 수 계산</li>
        <li><strong>SUM()</strong>: 합계 계산</li>
        <li><strong>AVG()</strong>: 평균 계산</li>
        <li><strong>MAX()</strong>: 최대값 검색</li>
        <li><strong>MIN()</strong>: 최소값 검색</li>
      </ul>
      
      <h4>문자열 함수</h4>
      <ul>
        <li><strong>CONCAT()</strong>: 문자열 연결</li>
        <li><strong>SUBSTRING()</strong>: 문자열 일부 추출</li>
        <li><strong>LENGTH()</strong>: 문자열 길이 반환</li>
        <li><strong>UPPER()</strong>: 대문자로 변환</li>
        <li><strong>LOWER()</strong>: 소문자로 변환</li>
      </ul>
    `
  },
  {
    id: 'unit11',
    title: '11. 소프트웨어 공학',
    content: `
      <h3>11.1 소프트웨어 개발 방법론</h3>
      
      <h4>폭포수 모델(Waterfall Model)</h4>
      <ul>
        <li>순차적인 소프트웨어 개발 프로세스</li>
        <li>각 단계가 완료된 후에 다음 단계로 진행</li>
        <li>단계: 요구사항 분석 → 설계 → 구현 → 테스트 → 유지보수</li>
        <li>장점: 단계별 산출물이 명확함</li>
        <li>단점: 요구사항 변경에 대응하기 어려움</li>
      </ul>
      
      <h4>애자일 방법론(Agile Methodology)</h4>
      <ul>
        <li>유연하고 반복적인 개발 접근 방식</li>
        <li>짧은 개발 주기(스프린트)를 통한 지속적인 가치 제공</li>
        <li>스크럼(Scrum)과 익스트림 프로그래밍(XP) 등이 대표적</li>
        <li>장점: 변경에 빠르게 대응, 고객 참여 증가</li>
        <li>단점: 문서화가 부족할 수 있음</li>
      </ul>
      
      <h4>프로토타입 모델(Prototype Model)</h4>
      <ul>
        <li>초기 모델을 개발한 후 점진적으로 개선하는 방식</li>
        <li>사용자 요구사항을 명확히 파악하기 위해 활용</li>
        <li>장점: 사용자 피드백 반영이 용이함</li>
        <li>단점: 불필요한 기능을 포함할 위험 있음</li>
      </ul>
      
      <h3>11.2 UML(Unified Modeling Language)</h3>
      <p>UML은 시스템 설계와 모델링을 위한 표준화된 표기법입니다.</p>
      
      <h4>주요 UML 다이어그램</h4>
      <table>
        <tr>
          <th>다이어그램</th>
          <th>설명</th>
        </tr>
        <tr>
          <td>클래스 다이어그램</td>
          <td>클래스, 속성, 메서드, 관계 등 정적 구조 표현</td>
        </tr>
        <tr>
          <td>객체 다이어그램</td>
          <td>객체 간의 관계를 표현한 스냅샷</td>
        </tr>
        <tr>
          <td>유스케이스 다이어그램</td>
          <td>시스템과 외부 액터 간의 상호작용 표현</td>
        </tr>
        <tr>
          <td>시퀀스 다이어그램</td>
          <td>시간 순서에 따른 객체 간 상호작용 표현</td>
        </tr>
        <tr>
          <td>상태 다이어그램</td>
          <td>객체의 상태 변화를 표현</td>
        </tr>
        <tr>
          <td>활동 다이어그램</td>
          <td>시스템 내의 워크플로우를 표현</td>
        </tr>
        <tr>
          <td>컴포넌트 다이어그램</td>
          <td>컴포넌트 간의 의존성 표현</td>
        </tr>
        <tr>
          <td>배포 다이어그램</td>
          <td>시스템 하드웨어 컴포넌트 표현</td>
        </tr>
      </table>
      
      <h3>11.3 요구사항 분석</h3>
      <h4>요구사항의 종류</h4>
      <ul>
        <li><strong>기능적 요구사항</strong>: 시스템이 수행해야 할 기능</li>
        <li><strong>비기능적 요구사항</strong>: 성능, 보안, 사용성 등 품질 관련 요구사항</li>
        <li><strong>도메인 요구사항</strong>: 업무 영역과 관련된 요구사항</li>
      </ul>
      
      <h4>요구사항 개발 프로세스</h4>
      <ol>
        <li><strong>도출(Elicitation)</strong>: 이해관계자와의 인터뷰, 설문, 관찰 등을 통해 요구사항 수집</li>
        <li><strong>분석(Analysis)</strong>: 수집된 요구사항 검토, 분류, 우선순위화</li>
        <li><strong>명세화(Specification)</strong>: 요구사항을 명확하게 문서화</li>
        <li><strong>검증(Validation)</strong>: 명세화된 요구사항이 이해관계자의 의도를 맞는지 확인</li>
      </ol>
    `
  },
  {
    id: 'unit12',
    title: '12. 정보보안',
    content: `
      <h3>12.1 네트워크 보안</h3>
      
      <h4>방화벽(Firewall)</h4>
      <p>네트워크 트래픽을 모니터링하고 제어하는 시스템</p>
      <ul>
        <li><strong>패킷 필터링 방화벽</strong>: TCP/IP 패킷 헤더 정보 기반 필터링</li>
        <li><strong>상태 추적 방화벽</strong>: 연결 상태를 추적하여 검사</li>
        <li><strong>애플리케이션 게이트웨이</strong>: 특정 애플리케이션 프로토콜 검사</li>
        <li><strong>차세대 방화벽(NGFW)</strong>: IPS, 안티바이러스, 애플리케이션 컨트롤 등 통합</li>
      </ul>
      
      <h4>침입 탐지 시스템(IDS: Intrusion Detection System)</h4>
      <p>네트워크 또는 시스템에서 비정상적인 활동이나 침입을 탐지</p>
      <ul>
        <li><strong>네트워크 기반 IDS(NIDS)</strong>: 네트워크 트래픽 분석</li>
        <li><strong>호스트 기반 IDS(HIDS)</strong>: 호스트 시스템 로그 및 활동 분석</li>
        <li><strong>시그니처 기반 탐지</strong>: 알려진 공격 패턴과 비교</li>
        <li><strong>이상 탐지</strong>: 정상 행동에서 벗어난 패턴 탐지</li>
      </ul>
      
      <h4>가상 사설 네트워크(VPN: Virtual Private Network)</h4>
      <p>공용 네트워크를 통해 암호화된 사설 네트워크 연결 제공</p>
      <ul>
        <li><strong>IPsec VPN</strong>: IP 계층에서 암호화</li>
        <li><strong>SSL/TLS VPN</strong>: 웹 브라우저를 통한 접근</li>
        <li><strong>사이트 간 VPN</strong>: 여러 사이트 간의 연결</li>
        <li><strong>원격 접속 VPN</strong>: 개별 사용자와 네트워크 간의 연결</li>
      </ul>
      
      <h3>12.2 주요 공격 기법</h3>
      
      <h4>DDoS(Distributed Denial of Service) 공격</h4>
      <p>다수의 시스템에서 동시에 목표 시스템으로 대량의 트래픽을 발생시켜 서비스를 마비시키는 공격</p>
      <ul>
        <li><strong>볼류메트릭 공격</strong>: 대역폭 소진 (예: UDP 플러드)</li>
        <li><strong>프로토콜 공격</strong>: 서버 리소스 소진 (예: SYN 플러드)</li>
        <li><strong>애플리케이션 계층 공격</strong>: 애플리케이션 취약점 공격 (예: HTTP 플러드)</li>
      </ul>
      
      <h4>SQL 인젝션(SQL Injection)</h4>
      <p>입력 데이터에 악의적인 SQL 코드를 삽입하여 데이터베이스를 조작하는 공격</p>
      <ul>
        <li><strong>Error-based</strong>: 오류 메시지를 통한 정보 수집</li>
        <li><strong>Union-based</strong>: UNION 연산자를 이용한 데이터 추출</li>
        <li><strong>Blind</strong>: 직접적인 출력 없이 정보 추론</li>
        <li><strong>Time-based</strong>: 응답 시간을 분석하여 정보 추론</li>
      </ul>
      
      <h4>XSS(Cross-Site Scripting)</h4>
      <p>웹 페이지에 악성 스크립트를 삽입하여 사용자 브라우저에서 실행되게 하는 공격</p>
      <ul>
        <li><strong>저장형 XSS</strong>: 악성 스크립트를 서버에 저장하여 여러 사용자에게 영향</li>
        <li><strong>반사형 XSS</strong>: URL 매개변수 등을 통해 일시적으로 삽입</li>
        <li><strong>DOM 기반 XSS</strong>: 클라이언트 측 스크립트를 통해 DOM 환경 변경</li>
      </ul>
      
      <h3>12.3 암호화 알고리즘</h3>
      
      <h4>해시 함수 특징</h4>
      <ul>
        <li><strong>일방향성</strong>: 해시값에서 원본 메시지를 복원할 수 없음</li>
        <li><strong>결정성</strong>: 같은 입력은 항상 같은 해시값 생성</li>
        <li><strong>충돌 저항성</strong>: 서로 다른 입력이 같은 해시값을 생성하기 어려움</li>
        <li><strong>눈사태 효과</strong>: 입력의 작은 변화도 출력에 큰 변화 초래</li>
      </ul>
      
      <h4>공개키 암호화 특징</h4>
      <ul>
        <li><strong>키 쌍</strong>: 공개키와 개인키 사용</li>
        <li><strong>비대칭성</strong>: 암호화와 복호화에 서로 다른 키 사용</li>
        <li><strong>디지털 서명</strong>: 개인키로 서명, 공개키로 검증</li>
        <li><strong>키 교환 문제 해결</strong>: 사전에 안전한 키 교환 없이도 통신 가능</li>
      </ul>
    `
  },
  {
    id: 'unit13',
    title: '13. 시스템 구조와 아키텍처',
    content: `
      <h3>13.1 시스템 아키텍처 종류</h3>
      
      <h4>클라이언트-서버 아키텍처</h4>
      <ul>
        <li>클라이언트가 서버에 서비스를 요청하고 서버가 응답하는 구조</li>
        <li>서버는 여러 클라이언트의 요청을 처리하고 리소스를 공유</li>
        <li>장점: 중앙 집중식 데이터 관리, 보안성 강화</li>
        <li>단점: 서버 장애 시 전체 시스템 영향</li>
      </ul>
      
      <h4>3계층 아키텍처</h4>
      <ul>
        <li><strong>프레젠테이션 계층</strong>: 사용자 인터페이스와 UI 로직 담당</li>
        <li><strong>비즈니스 계층</strong>: 업무 처리 로직 담당</li>
        <li><strong>데이터 계층</strong>: 데이터 저장 및 접근 담당</li>
        <li>장점: 책임 분리, 유지보수 용이, 확장성 향상</li>
      </ul>
      
      <h4>마이크로서비스 아키텍처</h4>
      <ul>
        <li>애플리케이션을 독립적으로 배포 가능한 작은 서비스로 분리</li>
        <li>서비스마다 자체 데이터베이스와 비즈니스 로직을 가짐</li>
        <li>장점: 독립적 배포, 확장성, 장애 격리</li>
        <li>단점: 분산 시스템 복잡성, 네트워크 오버헤드</li>
      </ul>
      
      <h3>13.2 아키텍처 설계 원칙</h3>
      <ul>
        <li><strong>관심사 분리(Separation of Concerns)</strong>: 시스템을 독립적인 모듈로 분리하여 복잡성 관리</li>
        <li><strong>단일 책임 원칙(Single Responsibility)</strong>: 하나의 컴포넌트는 하나의 책임만 가져야 함</li>
        <li><strong>추상화(Abstraction)</strong>: 복잡한 시스템을 간소화된 모델로 표현</li>
        <li><strong>캡슐화(Encapsulation)</strong>: 내부 구현을 숨기고 인터페이스만 노출</li>
        <li><strong>인터페이스 분리(Interface Segregation)</strong>: 클라이언트는 불필요한 인터페이스에 의존하지 않아야 함</li>
      </ul>
      
      <h3>13.3 클라우드 컴퓨팅</h3>
      <h4>서비스 모델</h4>
      <ul>
        <li><strong>IaaS(Infrastructure as a Service)</strong>: 가상 머신, 스토리지 등 인프라 제공</li>
        <li><strong>PaaS(Platform as a Service)</strong>: 애플리케이션 개발 및 배포를 위한 플랫폼 제공</li>
        <li><strong>SaaS(Software as a Service)</strong>: 완전한 소프트웨어 애플리케이션 제공</li>
        <li><strong>FaaS(Function as a Service)</strong>: 서버리스 환경에서 개별 함수 실행</li>
      </ul>
      
      <h4>배포 모델</h4>
      <ul>
        <li><strong>퍼블릭 클라우드</strong>: 서비스 제공자가 인터넷을 통해 리소스 제공</li>
        <li><strong>프라이빗 클라우드</strong>: 단일 조직을 위한 전용 클라우드 환경</li>
        <li><strong>하이브리드 클라우드</strong>: 퍼블릭과 프라이빗 클라우드의 조합</li>
        <li><strong>멀티 클라우드</strong>: 여러 클라우드 제공자의 서비스 활용</li>
      </ul>
    `
  },
  {
    id: 'unit14',
    title: '14. 애플리케이션 성능 및 최적화',
    content: `
      <h3>14.1 성능 측정 지표</h3>
      <ul>
        <li><strong>응답 시간(Response Time)</strong>: 요청에서 응답까지의 소요 시간</li>
        <li><strong>처리량(Throughput)</strong>: 단위 시간당 처리할 수 있는 작업량</li>
        <li><strong>지연 시간(Latency)</strong>: 작업 시작부터 실제 처리 시작까지의 시간</li>
        <li><strong>자원 사용률(Resource Utilization)</strong>: CPU, 메모리, 디스크 등의 사용률</li>
        <li><strong>확장성(Scalability)</strong>: 부하 증가에 따른 성능 변화</li>
      </ul>
      
      <h3>14.2 성능 최적화 기법</h3>
      
      <h4>웹 성능 최적화</h4>
      <ul>
        <li><strong>캐싱(Caching)</strong>: 자주 사용되는 데이터를 임시 저장소에 보관</li>
        <li><strong>압축(Compression)</strong>: 전송 데이터 크기 축소 (GZIP, Brotli 등)</li>
        <li><strong>이미지 최적화</strong>: 적절한 포맷 선택, 압축, Lazy Loading</li>
        <li><strong>CDN(Content Delivery Network) 활용</strong>: 지리적으로 분산된 서버로 콘텐츠 제공</li>
        <li><strong>코드 분할(Code Splitting)</strong>: 필요한 코드만 로드하여 초기 로딩 시간 단축</li>
      </ul>
      
      <h4>데이터베이스 최적화</h4>
      <ul>
        <li><strong>인덱싱(Indexing)</strong>: 데이터 검색 속도 향상</li>
        <li><strong>쿼리 최적화</strong>: 효율적인 쿼리 작성, 실행 계획 분석</li>
        <li><strong>정규화와 비정규화</strong>: 상황에 맞는 데이터 모델 설계</li>
        <li><strong>파티셔닝(Partitioning)</strong>: 대용량 테이블을 작은 단위로 분할</li>
        <li><strong>샤딩(Sharding)</strong>: 데이터를 여러 데이터베이스에 분산 저장</li>
      </ul>
      
      <h4>서버 성능 최적화</h4>
      <ul>
        <li><strong>로드 밸런싱(Load Balancing)</strong>: 요청을 여러 서버에 분산</li>
        <li><strong>비동기 처리</strong>: 필요한 경우 작업을 비동기로 처리</li>
        <li><strong>커넥션 풀링(Connection Pooling)</strong>: 연결 객체를 재사용하여 오버헤드 감소</li>
        <li><strong>스케일 아웃/스케일 업</strong>: 서버 추가 또는 성능 향상</li>
      </ul>
      
      <h3>14.3 애플리케이션 모니터링</h3>
      <h4>모니터링 대상</h4>
      <ul>
        <li><strong>인프라 모니터링</strong>: 서버, 네트워크, 스토리지 등의 하드웨어 자원</li>
        <li><strong>애플리케이션 모니터링</strong>: 응답 시간, 오류율, 처리량 등</li>
        <li><strong>로그 모니터링</strong>: 애플리케이션 및 시스템 로그 분석</li>
        <li><strong>사용자 경험 모니터링</strong>: 실제 사용자 관점에서의 성능 측정</li>
      </ul>
      
      <h4>주요 모니터링 도구</h4>
      <ul>
        <li><strong>APM(Application Performance Management)</strong>: New Relic, Datadog, Dynatrace</li>
        <li><strong>시스템 모니터링</strong>: Nagios, Zabbix, Prometheus</li>
        <li><strong>로그 분석</strong>: ELK Stack(Elasticsearch, Logstash, Kibana), Graylog</li>
        <li><strong>RUM(Real User Monitoring)</strong>: Google Analytics, Pingdom</li>
      </ul>
    `
  },
  {
    id: 'unit15',
    title: '15. TCP/IP와 네트워크',
    content: `
      <h3>15.1 OSI 7계층과 TCP/IP 4계층</h3>
      <table>
        <tr>
          <th>OSI 7계층</th>
          <th>TCP/IP 4계층</th>
          <th>주요 프로토콜/기능</th>
        </tr>
        <tr>
          <td>응용 계층</td>
          <td rowspan="3">응용 계층</td>
          <td>HTTP, FTP, SMTP, DNS</td>
        </tr>
        <tr>
          <td>표현 계층</td>
          <td>SSL/TLS, MIME, 인코딩</td>
        </tr>
        <tr>
          <td>세션 계층</td>
          <td>NetBIOS, RPC</td>
        </tr>
        <tr>
          <td>전송 계층</td>
          <td>전송 계층</td>
          <td>TCP, UDP</td>
        </tr>
        <tr>
          <td>네트워크 계층</td>
          <td>인터넷 계층</td>
          <td>IP, ICMP, ARP, RARP</td>
        </tr>
        <tr>
          <td>데이터 링크 계층</td>
          <td rowspan="2">네트워크 액세스 계층</td>
          <td>Ethernet, PPP, HDLC</td>
        </tr>
        <tr>
          <td>물리 계층</td>
          <td>전기적, 물리적 특성</td>
        </tr>
      </table>
      
      <h3>15.2 주요 프로토콜</h3>
      
      <h4>TCP(Transmission Control Protocol)</h4>
      <ul>
        <li>연결 지향적 프로토콜</li>
        <li>데이터의 순서와 신뢰성 보장</li>
        <li>3-way handshake를 통한 연결 설정</li>
        <li>흐름 제어와 혼잡 제어 제공</li>
        <li>주요 응용: 웹(HTTP), 이메일(SMTP), 파일 전송(FTP)</li>
      </ul>
      
      <h4>UDP(User Datagram Protocol)</h4>
      <ul>
        <li>비연결형 프로토콜</li>
        <li>데이터 전송의 신뢰성 보장하지 않음</li>
        <li>오버헤드가 적고 전송 속도가 빠름</li>
        <li>주요 응용: DNS, 스트리밍 미디어, 온라인 게임</li>
      </ul>
      
      <h4>IP(Internet Protocol)</h4>
      <ul>
        <li>인터넷에서 데이터 패킷을 전달하기 위한 프로토콜</li>
        <li>IPv4: 32비트 주소 체계 (약 43억 개 주소)</li>
        <li>IPv6: 128비트 주소 체계 (IPv4 고갈 문제 해결)</li>
      </ul>
      
      <h3>15.3 네트워크 토폴로지</h3>
      <ul>
        <li><strong>버스형(Bus)</strong>: 단일 케이블에 모든 장치 연결, 구성 간단하나 장애 발생 시 전체 영향</li>
        <li><strong>성형(Star)</strong>: 중앙 장치(스위치/허브)에 모든 장치 연결, 확장성 좋음</li>
        <li><strong>링형(Ring)</strong>: 각 장치가 양옆의 장치와 연결, 데이터가 한 방향으로 순환</li>
        <li><strong>메시형(Mesh)</strong>: 각 장치가 다른 여러 장치와 직접 연결, 높은 신뢰성과 복잡성</li>
        <li><strong>트리형(Tree)</strong>: 계층적 구조, 성형의 확장형</li>
      </ul>
      
      <h3>15.4 서브네팅(Subnetting)</h3>
      <p>IP 주소 공간을 더 작은 서브넷으로 분할하는 방법</p>
      <ul>
        <li><strong>서브넷 마스크</strong>: 네트워크 부분과 호스트 부분을 구분하는 값</li>
        <li><strong>CIDR(Classless Inter-Domain Routing)</strong>: 클래스 없는 라우팅 체계</li>
        <li><strong>예시</strong>: 192.168.1.0/24는 192.168.1.0부터 192.168.1.255까지의 범위를 의미</li>
      </ul>
      
      <h3>15.5 라우팅(Routing)</h3>
      <p>네트워크 간에 데이터 패킷을 효율적으로 전송하기 위한 경로 결정</p>
      <ul>
        <li><strong>정적 라우팅</strong>: 수동으로 라우팅 테이블 설정</li>
        <li><strong>동적 라우팅</strong>: 라우터 간 정보 교환으로 자동 업데이트</li>
        <li><strong>라우팅 프로토콜</strong>: 
          <ul>
            <li>내부 게이트웨이 프로토콜(IGP): RIP, OSPF</li>
            <li>외부 게이트웨이 프로토콜(EGP): BGP</li>
          </ul>
        </li>
      </ul>
    `
  }
];

export const StudyPage = () => {
  const [activeUnit, setActiveUnit] = useState<string>(STUDY_DATA[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const keyTimeoutRef = useRef<number | null>(null);
  const isKeyPressedRef = useRef<{[key: string]: boolean}>({});
  const isKeyLongPressRef = useRef<{[key: string]: {isLongPress: boolean, frameCount: number}}>({});
  
  const handleUnitClick = (unitId: string) => {
    setActiveUnit(unitId);
  };
  
  const activeUnitData = STUDY_DATA.find(unit => unit.id === activeUnit);
  const activeUnitIndex = STUDY_DATA.findIndex(unit => unit.id === activeUnit);
  
  const goToNextUnit = () => {
    if (activeUnitIndex < STUDY_DATA.length - 1) {
      // 키 상태를 유지하면서 프레임 카운트만 초기화
      resetKeyStates(true);
      
      // 다음 단원으로 이동
      setActiveUnit(STUDY_DATA[activeUnitIndex + 1].id);
      
      // 즉시 스크롤 맨 위로 초기화
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  };
  
  const goToPrevUnit = () => {
    if (activeUnitIndex > 0) {
      // 키 상태를 유지하면서 프레임 카운트만 초기화
      resetKeyStates(true);
      
      // 이전 단원으로 이동
      setActiveUnit(STUDY_DATA[activeUnitIndex - 1].id);
      
      // 이전 단원으로 이동 시에도 맨 위로 스크롤 설정
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  };
  
  // 키 입력 상태 초기화 함수 (스크롤 유지 옵션 추가)
  const resetKeyStates = (preserveKeyState = false) => {
    if (!preserveKeyState) {
      // 모든 키 상태 초기화
      isKeyPressedRef.current = {};
    }
    
    // 롱프레스 프레임 카운트만 초기화 (키 상태는 옵션에 따라 유지될 수 있음)
    Object.keys(isKeyLongPressRef.current).forEach(key => {
      if (isKeyLongPressRef.current[key]) {
        isKeyLongPressRef.current[key].frameCount = 0;
      }
    });
    
    // 진행 중인 타이머 제거 (단원 전환용 타이머만)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // 키 타이머는 보존 (키 계속 누름에 대한 처리 유지)
    if (!preserveKeyState && keyTimeoutRef.current) {
      clearTimeout(keyTimeoutRef.current);
      keyTimeoutRef.current = null;
    }
  };
  
  // 스크롤 위치 체크 함수
  const checkScrollPosition = (element: HTMLElement): { isAtBottom: boolean, isAtTop: boolean, isNearBottom: boolean } => {
    // 스크롤이 맨 아래에 도달했는지 확인
    const isAtBottom = 
      Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 5;
    
    // 스크롤이 맨 위에 도달했는지 확인
    const isAtTop = element.scrollTop === 0;
    
    // 스크롤이 하단 근처(90% 이상)에 있는지 확인
    const isNearBottom = 
      element.scrollTop > (element.scrollHeight - element.clientHeight) * 0.9;
    
    return { isAtBottom, isAtTop, isNearBottom };
  };
  
  // 방향키 스크롤 함수
  const handleArrowScroll = (direction: 'up' | 'down') => {
    const contentElement = contentRef.current;
    if (!contentElement || !isKeyPressedRef.current[direction === 'up' ? 'ArrowUp' : 'ArrowDown']) return;
    
    const scrollAmount = 50; // 한 번에 스크롤할 양(px)
    const { isAtBottom, isAtTop, isNearBottom } = checkScrollPosition(contentElement);
    
    // 꾹 누르고 있을 때 자동으로 다음 단원으로 이동하기 위한 변수
    const longPressScrollState = isKeyLongPressRef.current[direction];
    
    if (direction === 'down') {
      if (isAtBottom || (longPressScrollState && longPressScrollState.frameCount > 5 && isNearBottom)) {
        goToNextUnit();
      } else {
        // 슬라이스 애니메이션 제거하고 즉시 스크롤
        contentElement.scrollBy({ 
          top: scrollAmount, 
          behavior: 'auto' 
        });
        
        // 롱프레스 중이면 프레임 카운트 증가
        if (longPressScrollState) {
          longPressScrollState.frameCount++;
        }
      }
    } else if (direction === 'up') {
      if (isAtTop) {
        goToPrevUnit();
      } else {
        contentElement.scrollBy({ 
          top: -scrollAmount, 
          behavior: 'auto' 
        });
        
        // 롱프레스 중이면 프레임 카운트 증가
        if (longPressScrollState) {
          longPressScrollState.frameCount++;
        }
      }
    }
  };
  
  // 키 누름 감지 및 반복 처리
  useEffect(() => {
    const keyPressStartTime: {[key: string]: number} = {};
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return; // 키 반복 이벤트는 무시 (자체 처리를 위해)
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const direction = e.key === 'ArrowDown' ? 'down' : 'up';
        
        // 키 눌림 상태 기록 및 시작 시간 저장
        isKeyPressedRef.current[e.key] = true;
        keyPressStartTime[e.key] = Date.now();
        isKeyLongPressRef.current[direction] = { isLongPress: false, frameCount: 0 };
        
        // 첫 누름에 대한 스크롤 처리
        handleArrowScroll(direction);
        
        // 지속적인 키 누름 처리
        let elapsed = 0;
        
        const keyIntervalId = window.setInterval(() => {
          if (!isKeyPressedRef.current[e.key]) {
            clearInterval(keyIntervalId);
            return;
          }
          
          elapsed = Date.now() - keyPressStartTime[e.key];
          
          // 누른 시간이 길어질수록 스크롤 빈도 증가 (최대 30ms까지 빨라짐)
          const initialDelay = 400; // 처음 0.4초는 대기
          
          if (elapsed < initialDelay) {
            return; // 초기 지연 시간 동안은 스크롤하지 않음
          }
          
          // 롱프레스 상태로 설정
          if (isKeyLongPressRef.current[direction]) {
            isKeyLongPressRef.current[direction].isLongPress = true;
          }
          
          // 연속 스크롤로 전환 (0.4초 이후)
          handleArrowScroll(direction);
          
        }, 30) as unknown as number; // 빠른 스크롤을 위해 30ms로 설정
        
        // 키를 놓을 때 clearInterval이 호출되지 않은 경우를 위한 안전장치
        keyTimeoutRef.current = window.setTimeout(() => {
          clearInterval(keyIntervalId);
        }, 60000) as unknown as number;
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        const contentElement = contentRef.current;
        if (!contentElement) return;
        
        const { isAtBottom } = checkScrollPosition(contentElement);
        if (isAtBottom) {
          goToNextUnit();
        } else {
          contentElement.scrollBy({ top: contentElement.clientHeight - 100, behavior: 'smooth' });
        }
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        const contentElement = contentRef.current;
        if (!contentElement) return;
        
        const { isAtTop } = checkScrollPosition(contentElement);
        if (isAtTop) {
          goToPrevUnit();
        } else {
          contentElement.scrollBy({ top: -(contentElement.clientHeight - 100), behavior: 'smooth' });
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      } else if (e.key === 'End') {
        e.preventDefault();
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        isKeyPressedRef.current[e.key] = false;
      }
    };
    
    // 스크롤 이벤트 처리
    const handleWheel = (e: WheelEvent) => {
      const contentElement = contentRef.current;
      if (!contentElement || isScrollingRef.current) return;
      
      const { isAtBottom, isAtTop } = checkScrollPosition(contentElement);
      
      if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
        // 스크롤 방지 플래그 설정
        isScrollingRef.current = true;
        e.preventDefault();
        
        // 500ms 후에 플래그 해제
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
          timeoutRef.current = null;
        }, 500) as unknown as number;
        
        if (isAtBottom && e.deltaY > 0) {
          goToNextUnit();
        } else if (isAtTop && e.deltaY < 0) {
          goToPrevUnit();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    // 컴포넌트 unmount 또는 단원 변경 시 모든 키 입력 상태 초기화
    return () => {
      resetKeyStates();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      
      if (contentElement) {
        contentElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [activeUnit, activeUnitIndex]);
  
  // 단원 변경 시 스크롤 초기화 (이중 안전장치)
  useEffect(() => {
    if (contentRef.current) {
      // 강제로 스크롤을 맨 위로 초기화 (하지만 키 상태는 유지)
      contentRef.current.scrollTop = 0;
      
      // 레이아웃 계산 후에도 확실하게 맨 위로 스크롤 설정
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      }, 50);
    }
  }, [activeUnit]);
  
  return (
    <div className="study-page">
      <div className="study-container">
        <div className="units-list">
          {STUDY_DATA.map((unit) => (
            <div
              key={unit.id}
              className={`unit-item ${unit.id === activeUnit ? 'active' : ''}`}
              onClick={() => handleUnitClick(unit.id)}
            >
              {unit.title}
            </div>
          ))}
        </div>
        <div className="unit-content" ref={contentRef} tabIndex={0}>
          <h2>{activeUnitData?.title}</h2>
          <div
            className="content-area"
            dangerouslySetInnerHTML={{ __html: activeUnitData?.content || '' }}
          />
          <div className="navigation-hint">
            {activeUnitIndex < STUDY_DATA.length - 1 && (
              <div className="next-hint" onClick={goToNextUnit}>
                ↓ 다음 단원: {STUDY_DATA[activeUnitIndex + 1].title}
              </div>
            )}
            <div className="scroll-info">방향키(↑↓)로 50px씩 스크롤 / 꾹 누르면 연속 스크롤</div>
          </div>
        </div>
      </div>
    </div>
  );
};