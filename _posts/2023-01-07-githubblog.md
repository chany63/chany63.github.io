---
title: 'Github Blog'
categories:
- Blog

tag:
- Blog
- GitHub Page
- Git

last_modified_at: 2023-01-07T19:00:00+09:00
toc: true
---

첫 인턴을 준비하던 주중, 포트폴리오와 이력서 제출을 해야하는데 아직 만들어 놓은 것이 없어 여러 양식을 참고하다가 [github.io](http://github.io)를 이용해 나만의 블로그를 만들기로 하였다.

여러 블로그를 찾아보며 블로그 만드는 데에 참고하였지만, apple silicon을 사용하는 블로거는 찾기 힘들어 직접 만들어 보기로 하였다.

github 블로그를 꾸미는데 가장 사람들이 많이 쓰는 jekyll 이라는 웹사이트 툴을 활용할 계획이다.

## Homebrew 설치

- homebrew는 오픈소스 라이브러리를 제대로 활용하기에 아주 편리한 소스인데 jekyll을 활용하기 위해서는 거의 필수라고 볼 수 있기 때문에 먼저 설치해줘야 한다.
- 그렇다면 homebrew를 어떻게 m1 맥북에 설치하냐..?
    - 그냥 homebrew 홈페이지에서 하라는대로 하면 아주 간단하다 ㅋㅋ..
    - homebrew 홈페이지: [https://brew.sh](https://brew.sh/)
        
        ![스크린샷 2023-01-03 오후 1.22.05.png](/assets/img/2023-01-07-githubblog/blog1.png)
        
        install homebrew 밑에 나와있는 저 문구(오른쪽 클립보드 아이콘을 클릭하면 저절로 복사된다)를 복사하여 사용하는 터미널에 복붙하면 완료.
        
        설치 과정은 터미널에서 쭉 진행되며 next step을 위해서는 뭘 하라고 친절하게 설명이 나온다.
        
        그대로 따라하여 설치가 완료되면 다음 문구를 통해 잘 됐는지 확인해준다
        
        ```nasm
        $ brew --version
        ```
        
        ![스크린샷 2023-01-03 오후 1.26.47.png](/assets/img/2023-01-07-githubblog/blog2.png)
        
        위와 같은 결과가 출력되면 homebrew 설치에 성공한 것이다!
        

## Jekyll이란?

Jekyll은 정적 웹사이트 생성기로 Ruby 언어로 제작되었으며, 손쉽게 글을 쓸 수 있는 마크다운 글쓰기를 지원한다.(필자가 이 글을 쓰며 활용하고 있는 notion 또한 마크다운 글쓰기를 지원하는 대표적인 플랫폼이다)

GitHub Pages는 Jekyll로 구동되기 때문에 내가 원하는 사이트를 GitHub을 통해 무려 공짜로 만들 수 있다. 

원하는 대로 커스터마이징이 가능하고 다양한 테마를 쓸 수 있다는 엄청난 장점이 있다.

## Ruby 설치

- `rbenv`란?
    
    [rbenv](https://github.com/rbenv/rbenv#readme)는 여러 종류의 Ruby를 설치할 수 있게 한다. rbenv 자체는 Ruby 설치를 지원하지 않습니다만, [ruby-build](https://www.ruby-lang.org/ko/documentation/installation/#ruby-build)라는 유명한 플러그인에서 Ruby를 설치할 수 있다. rbenv, ruby-build 모두 macOS, Linux나 다른 UNIX-계열 운영체제에서 사용가능하다.
    
- `ruby-build`란?
    
    [ruby-build](https://github.com/rbenv/ruby-build#readme)는 다른 버전의 Ruby를 임의의 디렉터리에 컴파일하고 설치할 수 있게 하는 [rbenv](https://www.ruby-lang.org/ko/documentation/installation/#rbenv)의 플러그인이다. ruby-build는 rbenv 없이 독자적으로 사용 할 수도 있다. macOS, Linux나 다른 UNIX-계열 운영체제에서만 사용 가능합하다.
    
- macOS에서는 `rbenv`를 통해 Ruby를 설치한다. `rbenv`는 여러개의 Ruby 버전을 독립적으로 관리할 수 있도록 하는 패키지이다. 그리고 `ruby-build` 플러그인도 설치한다.
- 아까 설치한 homebrew를 활용해 rbenv와 ruby-build를 설치한다

```nasm
$ brew install rbenv ruby-build
```

- 설치 가능한 ruby version을 확인한다

```nasm
$ rbenv install -l
```

![스크린샷 2023-01-03 오후 1.44.38.png](/assets/img/2023-01-07-githubblog/blog3.png)

안정성을 위해 필자는 가장 최신 버전이 아닌 3.0.5 버전을 설치하였다

```nasm
$ rbenv install 3.0.5
```

![스크린샷 2023-01-03 오후 1.48.08.png](/assets/img/2023-01-07-githubblog/blog4.png)

설치가 완료되면 가장 마지막 줄에 위와 같은 문구가 뜬다. 따라해준다.

```nasm
$ rbenv global 3.0.5
$ rbenv versions #세팅 확인
```

![3.0.5로 설정되어 있는 것을 확인](/assets/img/2023-01-07-githubblog/blog5.png)

3.0.5로 설정되어 있는 것을 확인

## Bundler 설치

- 이제 ruby의 gem을 통해 Bundler를 설치하려고 하면, 에러가 뜬다..

```nasm
$ gem install bundler
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```

위 rbenv의 환경변수 설정이 아직 안돼서이다

## rbenv 환경변수 설정

```nasm
$ echo $SHELL
```

![기본 쉘이 zsh임을 확인](/assets/img/2023-01-07-githubblog/untitled.png)

기본 쉘이 zsh임을 확인

```nasm
$ open ~/.zshrc
```

쭈욱 내려가서 아래 두줄을 그대로 넣어주면 된다.

```nasm
export PATH={$Home}/.rbenv/bin:$PATH && \
eval "$(rbenv init -)"
```

저장 후 종료

```nasm
$ source ~/.zshrc
```

```nasm
$ gem install bundler
```

## Jekyll 설치, 블로그 생성

- 이후 xcode의 command line tools가 정상적으로 설치가 되어있다면 gem을 통해 jekyll을 설치할 수 있다

```nasm
$ gem install jekyll
```

## Visual Studio Code에 jekyll 개발환경 연동

- 미리 만들어 놓은 본인의 github page repo를 항상 하던대로 vsc에 연동하면 된다!

![스크린샷 2023-01-04 오후 4.36.09.png](/assets/img/2023-01-07-githubblog/blog6.png)

위쪽 그림과 같이 빠른 메뉴를 이용하거나, 아래쪽 그림과 같이 cmd + shift + p를 눌러 메뉴에서 git: clone을 치면

![스크린샷 2023-01-04 오후 4.37.23.png](/assets/img/2023-01-07-githubblog/blog7.png)

![스크린샷 2023-01-04 오후 4.39.08.png](/assets/img/2023-01-07-githubblog/blog8.png)

위와 같은 창이 뜬다.

![스크린샷 2023-01-04 오후 4.40.43.png](/assets/img/2023-01-07-githubblog/blog9.png)

위 박스 안에 있는 걸 그대로 복붙해주면 원하는 로컬 디렉토리에 저 repo를 연동할 수 있다!

로컬 디렉토리에 생성된 username.github.io로 cd(change directory)한 후 

해당 디렉토리에 jekyll을 생성해준다

![스크린샷 2023-01-04 오후 4.47.52.png](/assets/img/2023-01-07-githubblog/blog10.png)

```nasm
$ jekyll new ./
$ bundle install
```

사이트가 생성됐으니 실행해보자!

```nasm
$ bundle exec jekyll serve
```

자, 이제 평소에 로컬과 github를 연동하듯이 똑같이 하면 된다

```nasm
# git 생성(이미 git clone을 통해 initialize 해주었기 때문에 해줄 필요없다)
$ git init

# git 상태 확인
$ git status

# 모든 change를 stage한다
$ git add .

# 잘 staged 됐는지 git 상태 확인
$ git status

# 커밋
$ git commit -m 'Initial commit'

# 커밋 내역 확인
$ git log

# git 원격저장소로 log remote(vsc와 연동돼있다면 이미 돼있을것)
$ git remote add origin https://github.com/username/username.github.io.git

# remote 잘 됐는지 확인
$ git remote -v

# 로컬과 github 동기화
$ git push -u origin master
```

자 이제 잠시 후 username.github.io에 접속하면? jekyll 테마가 입혀진 초기 상태의 본인 블로그를 확인할 수 있다! Congrats!!

![스크린샷 2023-01-04 오후 5.08.26.png](/assets/img/2023-01-08-githubblog/blog11.png)