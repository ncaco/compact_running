# Spring Boot RESTful API 프로젝트

이 프로젝트는 Spring Boot를 사용한 RESTful API 예제입니다. MVC 아키텍처와 PostgreSQL 데이터베이스, JPA를 사용합니다.

## 기술 스택

- Java 17
- Spring Boot 3.1.5
- Spring Data JPA
- PostgreSQL
- Gradle
- Lombok

## 시작하기

### 필수 조건
- JDK 17 이상
- PostgreSQL

### Java 설치 방법
1. [Adoptium](https://adoptium.net/) 또는 [Oracle JDK](https://www.oracle.com/java/technologies/downloads/)에서 JDK 17 이상 버전을 다운로드하여 설치합니다.
2. 환경 변수 설정:
   - Windows: 시스템 속성 > 고급 > 환경 변수에서 `JAVA_HOME`을 JDK 설치 경로로 설정하고, `Path`에 `%JAVA_HOME%\bin`을 추가합니다.
   - Mac/Linux: `.bash_profile` 또는 `.zshrc` 파일에 `export JAVA_HOME=/path/to/jdk` 및 `export PATH=$JAVA_HOME/bin:$PATH`를 추가합니다.

### 프로젝트 실행
1. 프로젝트 클론:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Gradle Wrapper를 사용하여 빌드 및 실행(Windows):
```bash
.\gradlew.bat bootRun
```

3. Gradle Wrapper를 사용하여 빌드 및 실행(Mac/Linux):
```bash
./gradlew bootRun
```

### 데이터베이스 설정
1. PostgreSQL 데이터베이스 생성:
```sql
CREATE DATABASE springdb;
```

2. application.properties에서 데이터베이스 연결 정보 설정 (이미 설정되어 있습니다)

## API 엔드포인트

### 사용자 API
- `GET /api/users` - 모든 사용자 조회
- `GET /api/users/{id}` - ID로 사용자 조회
- `POST /api/users` - 새 사용자 생성
- `PUT /api/users/{id}` - 사용자 정보 업데이트
- `DELETE /api/users/{id}` - 사용자 삭제

## 프로젝트 구조
- `model` - 데이터 모델 (엔티티)
- `repository` - 데이터 접근 계층
- `service` - 비즈니스 로직
- `controller` - API 엔드포인트
- `dto` - 데이터 전송 객체
- `exception` - 예외 처리

## 문제 해결

### gradlew.bat 실행 실패
- `JAVA_HOME` 환경 변수가 올바르게 설정되어 있는지 확인하세요.
- Java가 `Path`에 추가되어 있는지 확인하세요.
- `gradle/wrapper/gradle-wrapper.jar` 파일이 없는 경우 자동으로 다운로드됩니다.

## 라이센스
MIT
