# ExpressFramework

Express.js를 사용한 기본적인 웹 애플리케이션 프레임워크입니다.

## 프로젝트 개요

이 프로젝트는 Node.js와 Express.js를 기반으로 한 간단한 웹 서버 애플리케이션입니다. EJS 템플릿 엔진을 사용하여 HTML 페이지를 렌더링하고, 라우팅 시스템을 통해 여러 페이지를 제공합니다.

## 기술 스택

-   **Node.js 24 이상**: JavaScript 런타임
-   **Express.js 5.3**: 웹 애플리케이션 프레임워크
-   **EJS 7**: 템플릿 엔진
-   **node:test + supertest**: 테스트
-   **HTML/CSS**: 프론트엔드

## 프로젝트 구조

```
ExpressFramework/
├── package.json          # 프로젝트 의존성 및 메타데이터
├── app.js                # Express 앱 설정 (미들웨어, 라우터, 에러 처리)
├── server.js             # 서버 실행 진입점
├── README.md             # 프로젝트 문서
├── public/               # 정적 파일 디렉토리
│   └── css/
│       └── style.css     # 스타일시트
├── router/               # 라우터 모듈
│   └── main.js           # 메인 라우터
├── test/                 # 테스트
│   └── app.test.js
└── views/                # 템플릿 파일
    ├── index.html        # 메인 페이지
    └── about.html        # 소개 페이지
```

## 설치 방법

Node.js 24 이상이 필요합니다.

1. 저장소를 클론합니다:

    ```bash
    git clone <repository-url>
    cd ExpressFramework
    ```

2. 의존성 패키지를 설치합니다:
    ```bash
    npm install
    ```

## 실행 방법

서버를 시작하려면 다음 명령어를 실행합니다:

```bash
npm start
```

또는

```bash
node server.js
```

서버가 성공적으로 시작되면 콘솔에 다음과 같은 메시지가 표시됩니다:

```
Express server has started on port 3000
```

포트를 바꾸려면 `PORT` 환경변수를 지정합니다:

```bash
PORT=8080 npm start
```

## 테스트

```bash
npm test
```

## 접속 방법

서버가 실행된 후, 웹 브라우저에서 다음 URL로 접속할 수 있습니다:

-   **메인 페이지**: http://localhost:3000/
-   **소개 페이지**: http://localhost:3000/about

## 주요 기능

-   **라우팅**: Express.js 라우터를 통한 페이지 라우팅
-   **템플릿 렌더링**: EJS를 사용한 HTML 템플릿 렌더링
-   **정적 파일 서빙**: CSS, 이미지 등의 정적 파일 제공
-   **모듈화**: 라우터 로직의 분리 및 모듈화
-   **에러 처리**: 404 응답과 기본 에러 핸들러

## 파일 설명

### `app.js`

-   Express 애플리케이션 설정 및 미들웨어 구성
-   정적 파일, 라우터, 404/에러 핸들러 등록
-   테스트에서 재사용할 수 있도록 `app`을 export

### `server.js`

-   애플리케이션의 진입점
-   `PORT` 환경변수(기본값 3000)로 서버 실행

### `router/main.js`

-   `express.Router()`로 라우팅 로직 정의
-   루트 경로(`/`)와 소개 페이지(`/about`) 라우트 처리

### `views/`

-   HTML 템플릿 파일들이 위치하는 디렉토리
-   EJS 엔진을 통해 렌더링됨

### `public/`

-   CSS, 이미지, JavaScript 등의 정적 파일들이 위치하는 디렉토리

## 개발 환경

-   Node.js 버전: 24 이상
-   Express.js 버전: 5.3.0
-   EJS 버전: 7.0.1
-   포트: 3000 (`PORT` 환경변수로 변경 가능)
