var store = [{
        "title": "Simple linux commands",
        "excerpt":"리눅스 명령어                  명령어       의미       비고                       mv       파일 이동                         echo       출력       echo (내용) &gt; 파일: 파일에 덮어씌우기                 cat       파일 미리보기                         ls -a       숨김 파일 표시                         python -m (모듈)       파이썬 라이브러리를 모듈로써 설치할 때                      echo / cat / 연습      mkdir / mv / 상대경로 연습      python 명령어 중 -m mod에 대한 설명임 (예: python3 -m venv .venv 이름이  .venv인 가상환경 모듈 설치)   경로: 상대경로, 절대경로      상대경로   현재 폴더: ./   상위 폴더: ../   상위 폴더의 상위 폴더: ../../   최상위 폴더: /   default: ~  ","categories": ["Linux"],
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
        "title": "SQLAlchemy",
        "excerpt":"SQLAlchemy   들어가기에 앞서, 본인은 postgresql을 사용할 것이기 때문에 postgresql를 먼저 설치해줘야 한다   brew install postgresql   Python에서 postgresql을 사용하기 위해서는 psycopg2 라이브러리를 사용해야 한다.   psycopg2의 경우 유니코드와 python3를 모두 지원하므로 가장 널리 쓰이는 라이브러리 중 하나.   JDBC와 같은 Database 커넥터이기 때문에 다음과 같은 기능을 지원한다.      Database 연결과 해제   SQL 실행과 트랜잭션 발생   결과 반환   postgresql을 Python 환경에서 사용하는 준비는 모두 끝났다!   1. SQLalchemy설치   pip install sqlalchemy   2. 드라이버(Engine) 및 세션(session) 로드   import sqlalchemy as db  engine = db.create_engine('postgresql://&lt;username&gt;:&lt;password&gt;@&lt;host&gt;:5432/&lt;dbname&gt;')  ","categories": ["Backend study"],
        "tags": ["Backend","DB","SQL","Python"],
        "url": "/backend%20study/sqlalchemy/",
        "teaser": null
      }]
