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
  }
];

export const StudyPage = () => {
  const [activeUnit, setActiveUnit] = useState<string>(STUDY_DATA[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const keyTimeoutRef = useRef<number | null>(null);
  const isKeyPressedRef = useRef<{[key: string]: boolean}>({});
  
  const handleUnitClick = (unitId: string) => {
    setActiveUnit(unitId);
  };
  
  const activeUnitData = STUDY_DATA.find(unit => unit.id === activeUnit);
  const activeUnitIndex = STUDY_DATA.findIndex(unit => unit.id === activeUnit);
  
  const goToNextUnit = () => {
    if (activeUnitIndex < STUDY_DATA.length - 1) {
      setActiveUnit(STUDY_DATA[activeUnitIndex + 1].id);
      // 스크롤 위치를 맨 위로 초기화
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  };
  
  const goToPrevUnit = () => {
    if (activeUnitIndex > 0) {
      setActiveUnit(STUDY_DATA[activeUnitIndex - 1].id);
      // 스크롤 위치를 맨 아래로 이동
      if (contentRef.current) {
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
          }
        }, 50);
      }
    }
  };
  
  // 스크롤 위치 체크 함수
  const checkScrollPosition = (element: HTMLElement): { isAtBottom: boolean, isAtTop: boolean } => {
    // 스크롤이 맨 아래에 도달했는지 확인
    const isAtBottom = 
      Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 5;
    
    // 스크롤이 맨 위에 도달했는지 확인
    const isAtTop = element.scrollTop === 0;
    
    return { isAtBottom, isAtTop };
  };
  
  // 방향키 스크롤 함수
  const handleArrowScroll = (direction: 'up' | 'down', isLongPress: boolean = false) => {
    const contentElement = contentRef.current;
    if (!contentElement) return;
    
    const scrollAmount = 50; // 한 번에 스크롤할 양(px)
    const { isAtBottom, isAtTop } = checkScrollPosition(contentElement);
    
    if (direction === 'down') {
      if (isAtBottom) {
        goToNextUnit();
      } else {
        // 꾹 누를 때는 스무스 효과 제거하여 더 빠르고 자연스럽게 스크롤
        contentElement.scrollBy({ 
          top: scrollAmount, 
          behavior: isLongPress ? 'auto' : 'smooth' 
        });
      }
    } else if (direction === 'up') {
      if (isAtTop) {
        goToPrevUnit();
      } else {
        contentElement.scrollBy({ 
          top: -scrollAmount, 
          behavior: isLongPress ? 'auto' : 'smooth' 
        });
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
        
        // 키 눌림 상태 기록 및 시작 시간 저장
        isKeyPressedRef.current[e.key] = true;
        keyPressStartTime[e.key] = Date.now();
        
        // 첫 누름에 대한 스크롤 처리
        if (e.key === 'ArrowDown') {
          handleArrowScroll('down');
        } else if (e.key === 'ArrowUp') {
          handleArrowScroll('up');
        }
        
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
          
          // 연속 스크롤로 전환 (0.4초 이후)
          if (e.key === 'ArrowDown') {
            handleArrowScroll('down', true);
          } else if (e.key === 'ArrowUp') {
            handleArrowScroll('up', true);
          }
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
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      
      if (contentElement) {
        contentElement.removeEventListener('wheel', handleWheel);
      }
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (keyTimeoutRef.current) clearTimeout(keyTimeoutRef.current);
    };
  }, [activeUnit, activeUnitIndex]);
  
  // 단원 변경 시 스크롤 초기화
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
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