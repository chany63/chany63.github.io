var store = [{
        "title": "Simple linux commands",
        "excerpt":"리눅스 명령어 명령어 의미 비고 mv 파일 이동   echo 출력 echo (내용) &gt; 파일: 파일에 덮어씌우기 cat 파일 미리보기   ls -a 숨김 파일 표시   python -m (모듈) 파이썬 라이브러리를 모듈로써 설치할 때   echo / cat / 연습 mkdir / mv / 상대경로 연습 python 명령어 중...","categories": ["Linux"],
        "tags": ["Linux"],
        "url": "/linux/linuxcmd/",
        "teaser": null
      },{
        "title": "REST API",
        "excerpt":"REST란?      자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 것   상태전달 형식      데이터가 요청되는 시점에서 정보 전달   JSON 혹은 XML을 통해 데이터를 주고받음   = 즉 REST는 네트워크 상에서 서버와 클라이언트 사이의 통신 방식 중 하나   해당 포스트는 REST API 제대로 알고 사용하기 : NHN Cloud Meetup를 참조하여 만들었습니다.  ","categories": ["Backend study"],
        "tags": ["Backend","DB"],
        "url": "/backend%20study/restapi/",
        "teaser": null
      },{
        "title": "First post: test",
        "excerpt":"this is a test page  ","categories": ["Blog"],
        "tags": ["Blog","GitHub Page","Git"],
        "url": "/blog/testpage/",
        "teaser": null
      },{
        "title": "What is DOM?",
        "excerpt":"DOM이란? = Document Object Model(문서 객체 모델) 문서 객체란, &lt;html&gt;이나 &lt;body&gt; 같은 html문서의 태그들을 JavaScript가 이용할 수 있는 객체(object)로 만들면 그것을 문서 객체라고 함 즉, DOM은 웹 브라우저가 HTML 페이지를 인식하는 방식을 의미함. 트리 구조로 형성되어 있는 DOM DOM은 tree형식의 자료구조를 가지고 있다. JavaScript로 문서객체를 생성한다? 정적 생성: 웹 브라우저가...","categories": ["Frontend study"],
        "tags": ["Frontend","HTML","DOM"],
        "url": "/frontend%20study/DOM/",
        "teaser": null
      },{
        "title": "Github Blog",
        "excerpt":"첫 인턴을 준비하던 주중, 포트폴리오와 이력서 제출을 해야하는데 아직 만들어 놓은 것이 없어 여러 양식을 참고하다가 github.io를 이용해 나만의 블로그를 만들기로 하였다. 여러 블로그를 찾아보며 블로그 만드는 데에 참고하였지만, apple silicon을 사용하는 블로거는 찾기 힘들어 직접 만들어 보기로 하였다. github 블로그를 꾸미는데 가장 사람들이 많이 쓰는 jekyll 이라는 웹사이트 툴을...","categories": ["Blog"],
        "tags": ["Blog","GitHub Page","Git"],
        "url": "/blog/githubblog/",
        "teaser": null
      },{
        "title": "About JSON",
        "excerpt":"JSON (JavaScript Object Notation) JavaScript Object Notation라는 의미의 축약어로 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식 Javascript에서 객체를 만들 때 사용하는 표현식을 의미한다. (javascript 탭) JSON 표현식은 사람과 기계 모두 이해하기 쉬우며 용량이 작아서, 최근에는 JSON이 XML을 대체해서 데이터 전송 등에 많이 사용한다. JSON은 데이터 포맷일 뿐이며 어떠한...","categories": ["Backend study"],
        "tags": ["Backend","Javascript"],
        "url": "/backend%20study/json/",
        "teaser": null
      },{
        "title": "Python Version Control",
        "excerpt":"! 파이썬 프로젝트를 만들시에 파이썬 버전에 따라서 쓸 수 있는 명령어 코드가 다름 시작하기에 앞서, 파이썬 버전 관리가 왜 중요할까? 설명하기 어렵지만, 본인의 상황을 예로 들자면, 파이썬이라는 언어는 계속해서 사용자가 직관적으로 이용하기에 점점 편한 방향으로 업데이트됨, 즉 조금 실수하더라도 저절로 고쳐주고, 형식에 맞지 않아도 저절로 인식함 근데 웹에서 설명하는 코드...","categories": ["Backend study"],
        "tags": ["Backend","Python"],
        "url": "/backend%20study/pythonversion/",
        "teaser": null
      },{
        "title": "About React",
        "excerpt":"참고 사이트: 웹사이트에 React추가하는 예제 보고 react 연습하기 &lt;div id=\"like_button_container\"&gt;&lt;/div&gt; &lt;script src=\"https://unpkg.com/react@18/umd/react.development.js\" crossorigin&gt;&lt;/script&gt; &lt;script src=\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\" crossorigin&gt;&lt;/script&gt; &lt;script src=\"like_button.js\"&gt;&lt;/script&gt; 여기서 처음 두 태그는 react를 실행시키고 3 번째 코드는 만든 컴포넌트를 실행시킨다 const domContainer = document.querySelector('#like_button_container'); const root = ReactDDOM.createRoot(domContainer); root.render(e(LikeButton)); 이로써 우리의 페이지에 react 컴포넌트 하나를 추가하는데 성공하였다! wow! 짱쉬워~! JSX란?...","categories": ["Frontend study"],
        "tags": ["Frontend","HTML","React"],
        "url": "/frontend%20study/react/",
        "teaser": null
      },{
        "title": "SQLAlchemy",
        "excerpt":"SQLAlchemy 들어가기에 앞서, 본인은 postgresql을 사용할 것이기 때문에 postgresql를 먼저 설치해줘야 한다 brew install postgresql Python에서 postgresql을 사용하기 위해서는 psycopg2 라이브러리를 사용해야 한다. psycopg2의 경우 유니코드와 python3를 모두 지원하므로 가장 널리 쓰이는 라이브러리 중 하나. JDBC와 같은 Database 커넥터이기 때문에 다음과 같은 기능을 지원한다. Database 연결과 해제 SQL 실행과 트랜잭션...","categories": ["Backend study"],
        "tags": ["Backend","DB","SQL","Python"],
        "url": "/backend%20study/sqlalchemy/",
        "teaser": null
      }]
