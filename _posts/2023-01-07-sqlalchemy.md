---
title: 'SQLAlchemy'
categories:
    - Backend study

tag:
    - Backend
    - DB
    - SQL
    - Python

last_modified_at: 2023-01-07T01:00:00+09:00
toc: true
---

## SQLAlchemy

들어가기에 앞서, 본인은 postgresql을 사용할 것이기 때문에 postgresql를 먼저 설치해줘야 한다

```python
brew install postgresql
```

Python에서 postgresql을 사용하기 위해서는 psycopg2 라이브러리를 사용해야 한다.

psycopg2의 경우 유니코드와 python3를 모두 지원하므로 가장 널리 쓰이는 라이브러리 중 하나.

JDBC와 같은 Database 커넥터이기 때문에 다음과 같은 기능을 지원한다.

- Database 연결과 해제
- SQL 실행과 트랜잭션 발생
- 결과 반환

postgresql을 Python 환경에서 사용하는 준비는 모두 끝났다!

### 1. SQLalchemy설치

```python
pip install sqlalchemy
```

### 2. 드라이버(Engine) 및 세션(session) 로드

```jsx
import sqlalchemy as db

engine = db.create_engine('postgresql://<username>:<password>@<host>:5432/<dbname>')
```