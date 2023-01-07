---
title: 'Python Version Control'
categories:
    - Backend study

tag:
    - Backend
    - Python

last_modified_at: 2023-01-07T09:00:00+09:00
toc: true
---

! 파이썬 프로젝트를 만들시에 파이썬 버전에 따라서 쓸 수 있는 명령어 코드가 다름

## 시작하기에 앞서, 파이썬 버전 관리가 왜 중요할까?

- 설명하기 어렵지만, 본인의 상황을 예로 들자면, 파이썬이라는 언어는 계속해서 사용자가 직관적으로 이용하기에 점점 편한 방향으로 업데이트됨, 즉 조금 실수하더라도 저절로 고쳐주고, 형식에 맞지 않아도 저절로 인식함 근데 웹에서 설명하는 코드 그대로 다른 버전에서 돌리면 자동적으로 error나 warning을 해결해주는걸 못하게 됨. 반드시 명시된 파이썬 버전이나 라이브러리 요구사항에 맞춰 설치 후 개발을 진행해야함
- 만약 개발 중에 오류가 생기면 다시금 필요에 맞게 버전을 변경해야 하는 경우가 생기는데 필자는 이 경우를 기준으로 매뉴얼을 작성하였음. 연습이 필요하지 않다면 5번부터 보면 됨

## 파이썬 가상환경 만들기 - macOS

### 가상환경을 만들고 관리하는 모듈을 venv라고 한다.

- venv는 보통 사람들이 사용할 수 있는 최신 버전의 python을 설치한다.
- 하지만 시스템에 여러버전의 파이썬이 있는 경우, python3 또는 원하는 버전을 실행하여 특정 파이썬을 선택할 수 있다.
- 가상환경을 만들려면 가상환경을 만들 디렉터리를 지정하고 venv 모듈을 스크립트로 실행하는데 디렉터리 경로를 명령행 인자로 전달해야 한다. (참고: root/개발공부/linux)\\

<span>1.</span> 가상환경 디렉터리 생성 및 생성한 디렉으로 이동

```python
$mkdir project
$cd project
```

<span>2.</span> 지정한 디렉에 가상환경 작성

```python
$python3 -m venv .venv
```

- .venv 파일은 숨김파일로 돼 있어 보이지 않음 → ls -a(.으로 시작하는 파일명을 포함한 숨김파일 표시)

<span>3.</span> 가상환경 활성화

```python
$. .venv/bin/activate

or

$source .venv/bin/activate
```

```python
(.venv)$which python3
```

```python
/----프로젝트 디렉터리 경로 ----/.venv/bin/python
```

```python
(.venv)$python -V
```

여기서 문제 발생: 특정 파이썬 버전을 사용해야 할 경우에는 python3 -m venv .venv를 사용하면 버전을 수정하기 곤란한 상황임

어쩔 수 없이 버전관리를 도와주는 pyenv 패키지를 설치해야겠다.

<span>4.</span> 가상환경 비활성화

```python
(.venv)$deactivate
```

<span>5.</span> 버전 관리를 위한 pyenv 패키지 설치

```python
$brew install pyenv
```

```python
$pyenv install 3.10.4
$pyenv global 3.10.4
$pyenv version
#3.10.4 (set by /Users/chanymac/.pyenv/version)
```

<span>6.</span> 쉘 경로 추가

```python
$echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
$source ~/.zshrc
$code ~/.zshrc
```

```python
$which python3
#/Users/chanymac/.pyenv/shims/python3
$python --version
#Python 3.10.4

```

<span>7.</span> 라이브러리 백업
- 가상환경 내에 설치했던 라이브러리 백업

```python
$pip freeze > requirements.txt
```

- 백업 내용 추출

```python
$pip install -r requirements.txt
```

<span>8.</span> 가상환경의 파이썬 삭제 후 변경

```python
$rm -r .venv
```

```python
$python -V
```

```python
$python3 -m venv .venv
```

- 3.의 가상환경 활성화로 돌아가 버전을 확인해보면 특정 파이썬 버전으로 지정됨을 확인 가능
- 7.의 백업 내용 추출로 라이브러리를 다시 설치해주면 파이썬 버전만 변경된 채로 다시 복구시킬 수 있음

### 하면서 궁금해졌던 점

- 쉘 스크립트? 대체 저 문구는 뭘 의미할까(형진이형 노션 참고: [https://hjin8.notion.site/J165-Day-02-Linux-bae0f3e947d6429d9f2ea9c5d7926c4f](https://www.notion.so/J165-Day-02-Linux-bae0f3e947d6429d9f2ea9c5d7926c4f))
- zshrc는 뭘까 좀 더 쉽게 파이썬 버전만을 바꾸는 방법은 없는걸까?