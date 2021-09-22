---
layout: post
title: "[Vue.js] Vue CLI로 뷰 설치하기"
subtitle: Frontend / 프론트앤드 / Front-end / 뷰 / vue.js
categories:
    - language
    - vue
description: >
  About the how to install vue with vue cli
image: /assets/img/blog/vue1.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[Vue.js] Vue CLI로 뷰 설치하기**입니다.  

* toc
{:toc .large-only}

## Intro
* 일반적으로 Vue를 사용하는 방법은 두가지가 있다.  

1. **<font color="red">Script</font>**를 이용한 방법  
[스크립트 방식 바로가기](https://plitche.github.io/language/vue/2021-04-10-vueStudy01/)
  
2. **<font color="red">Vue-CLI</font>**를 이용한 방법  
스크립트를 이용하여 간단히 문법이나 사용법에 대해서 어느정도 숙지를 했다면 **Vue CLI**를 이용하여 Vue를 활용해볼 시간이다.

## Vue-CLI 란?
* Vue CLI란 `Vue Command Line Interface`의 약자이다.  

* 터미널에서 명령어를 통해 Vue를 설치하거나 Vue와 관련된 패키지를 추가할 때 명령어로 간단하게 실행할 수 있도록 하는 도구이다.

## Install (설치하기)
### cli.vuejs.org
* 먼저 위의 [url](cli.vuejs.org)를 방문하여, Get Started 버튼을 클릭한다.

![](/assets/post/vue/20210606/01.jpg){: width="100%" height="100%"}<br/><br/>    

* 좌측 메뉴에서 **Installation**을 클릭.  

![](/assets/post/vue/20210606/02.jpg){: width="100%" height="100%"}<br/><br/>    

* 빨간 박스안을 보면 보이다 싶이 Vue CLI를 사용하기 위해서는 **Node.js**가 필요하다는 것을 알수 있으며, 또한 **8.9**버전 이상이여야 한다.  

![](/assets/post/vue/20210606/03.jpg)<br/><br/>    

### nodejs.org
* 자 그럼 node.js를 설치해보자.  
위의 [url](nodejs.org)을 접속해보면 아래 사진처럼 두개의 버튼이 보일 것 이다.

> 우측이 가장 최신 버전이며, 좌측 **LTS 버전**이 더 안정적이 버전임으로 왼쪽 버전을 설치하자.
![](/assets/post/vue/20210606/04.jpg)<br/><br/>    

* 설치가 종료되면 `ctrl+r` => `cmd`를 통해 터미널을 켜보자.

> node -v, npm -v

위의 명령어를 통하여 제대로 설치가 되었는지 확인하자. 아래사진은 참고용.
![](/assets/post/vue/20210606/05.jpg)<br/><br/>    


### Vue CLI 설치
* 위까지 모든 과정이 진행 되었다면 Vue CLI를 설치해보자.  
> npm install -g @vue/cli
명령어를 통해서 Vue CLI라는 패키지를 PC에 설치하는 것이다.  

* 그럼 아래 사진과 같이 설치가 진행될 것이며, 설치가 종료가 되면 `vue --version` 명령어를 통해 제대로 설치되었는지 확인하자.  

![](/assets/post/vue/20210606/06.jpg)<br/><br/>  

### Vue 설치
* 아까의 [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) 웹 사이트 좌측 메뉴에서 **Creating a Project**를 클릭하자.

![](/assets/post/vue/20210606/07.jpg)<br/><br/>  

* 다시 cmd를 열어서 설치를 원하는 폴더로 이동 후 `vue create "이름"`을 입력하면 옵션이 나온다.  

![](/assets/post/vue/20210606/08.jpg)<br/><br/>  

* 디폴트(기본)로 하면 가장 기본 세팅으로 설치가 되며, `Manually select features`를 선택하면, 원하는 기능을 추가로 설정할 수 있다.  
> 보통 Router(라우터)와 Vuex는 기본적으로 사용하므로 체크해주자.  

![](/assets/post/vue/20210606/09.jpg)<br/><br/>  

* 그 이후에는 따로 건드리는 것 없이 Enter를 눌러 쭉쭉 넘기다보면 설치가 진행되는 모습을 볼 수 있다.  

![](/assets/post/vue/20210606/10.jpg)<br/><br/>  

* 설치가 완료가 되면 본인이 설치를 진행한 폴더에 **test1**이라는 폴더가 생긴 모습을 볼 수 있다.  

![](/assets/post/vue/20210606/11.jpg)  <br/><br/>

* 이제 설치된 test1이라는 폴더로 이동하여, 파일 목록을 확인하면 위와 같은 파일들이 있다.
![](/assets/post/vue/20210606/12.jpg)  <br/><br/>


### Vue PC에 설치하지 않고 쓰는 법
* `npx @vue/cli create "이름"`라는 명령어를 통하여 npm만 설치가 되어있다면 쓸 수도 있다.

## 폴더 열기
* 이제 설치를 통해 받아진 test1이라는 폴더를 에디터를 통해서 열어보자.
> VS CODE를 사용할 예정이다.

### tip
1. VS CODE를 직접 열어서 해당 폴더를 여는 방법  
2. CMD를 화용한 방법  

* 1번 방법은 다들 익숙할 것이라고 생각되어 2번을 잠깐 소개하자면 터미널을 통하여 해당 폴더로 먼저 이동해준뒤 `code .` 명령어를 작성하면 해당 폴더의 파일들이 vs code를 통해 열 수 있다.
![](/assets/post/vue/20210606/14.jpg)  <br/><br/>
![](/assets/post/vue/20210606/15.jpg)  <br/><br/>

### node_modules 폴더
* Vue.js가 사용하는 ***npm 패키지**들이 여기에 들어간다. 예를 들어 @vue 패키지가 들어가 있는 모습을 볼 수 있다.  
![](/assets/post/vue/20210606/16.jpg)  <br/><br/>


### package.json
* 프로젝트를 할 때에 필요한 패키지 디펜던시들이 들어가 있다.
> devDependencies는 개발할 때에 필요한 디펜던시라고 볼 수 있다.
![](/assets/post/vue/20210606/17.jpg)  <br/><br/>

### src
* 대부분 우리가 코딩을 할때 소스코드는 src(source)폴더 안에 들어가게 된다.
* **<font color="red">main.js</font>**를 살펴보면 Vue, router 등 **import**가 되어 있는 모습을 볼 수 있다.  
![](/assets/post/vue/20210606/18.jpg)  <br/><br/>

> 그 후 Vue 인스턴스를 생성하고, import한 router와 store(vuex)를 넣어져 있고, App.vue 탬플릿 등 또한 id=app에 들어가 있는 모습을 볼 수 있다.  

> id=app 은 public폴더 안에 있는 가장 기본이 되는 index.html에서 찾을 수 있다.

## 화면 확인
* VS CODE에서 터미널을 열어 `npm run serve`라고 입력하면, 빌드를 시작합니다.  

![](/assets/post/vue/20210606/19.jpg)  <br/><br/>

* 빌드가 종료되면 아래쪽에 **https://localhost:####** 이라고 나와 있는 부분을 복사해 웹 브라우저에 입력한다.  

![](/assets/post/vue/20210606/20.jpg)  <br/><br/>

* App.vue 에 있는 탬플릿 내용이 웹 브라우저에 표시되는 것을 볼 수 있다.  

![](/assets/post/vue/20210606/21.jpg)  <br/><br/>

* 좋은 점은 웹 브라우저를 리로드 하지 않아도 VS CODE에서 `느낌표를 붙여` 수정한 후 저장만 해도 바로 바로 적용되는 모습을 확인 할 수 있다.  
![](/assets/post/vue/20210606/22.jpg)  <br/><br/>


## Review
* 언제나 처음 세팅하는 작업은 정말 어렵고, 지루한 작업인 것 같습니다.  

* 물론 그 과정을 통해 작동되는 모습이 신기하신 당신은 참! 개발자 이시겠지요.^^

* 다음에는 보다 더 재미있고 실제로 어떻게 Vue를 더 깊게 다룰 수 있는지 같이 공부해 보겠습니다. 감사합니다!
