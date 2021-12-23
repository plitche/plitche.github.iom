---
layout: post
title: "[Eclipse, STS] QuickSearch 플러그인 설치법"
subtitle: Eclipse, STS / JAVA / MOBILE / INSTALL / SPRING
categories:
    - programs
    - eclipse
description: >
  About how to install Eclipse, STS
image: /assets/img/blog/eclipse.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[Eclipse, STS] QuickSearch 플러그인 설치법**입니다.
- - -

* toc
{:toc .large-only}

## Intro
**<font color="red">[QuickSearch]</font>** Eclipse나 Spring(sts) 에서 사용할 수 있는 플러그인 이다.  

본인은 현재 실무에서는 IntelliJ를 활용하여 개발중에 있으나, 집에서는 STS를 보통 사용하고 있어서 `Search`기능을 찾아보게 되었다.  

기존 `Ctrl + H` 단축키를 통해서 원하는 텍스트나 정보를 찾을 수 있었지만 불편한 부분이 많아서 우리 모두 함께 **<font color="red">[QuickSearch]</font>** 플러그인을 설치해서 편하게 개발해보자.  

---

## 1. 퀵서치(QuickSearch) 플러그인 설치
* **<font color="green">[Help] -> [Install New Software]</font>**
![](/assets/post/programs/eclipse/20211223/01.jpg)  
  
---
  
* Work with: 에 **<font color="green">http://dist.springsource.com/release/TOOLS/eclipse-integration-commons</font>** 을 입력 훟 엔터를 누른다.

* 그럼 아래에 pending이 진행이 되다가 **Name** 부분에 **<font color="green">Core / Eclipse Integration Commons</font>** 를 체크한후 Next를 누르자.
![](/assets/post/programs/eclipse/20211223/02.jpg)  
  
---
  
* Next 클릭
![](/assets/post/programs/eclipse/20211223/03.jpg)  
  
---
  
* 동의 후 Finish
![](/assets/post/programs/eclipse/20211223/04.jpg)  

> 자 이러면 설치가 완료가 되었다. Eclipse나 STS를 재 실행 해주자.

## 2. 퀵서치(QuickSearch) 사용법
* **<font color="red">Ctrl + Shift + L</font>** 단축키가 기본적으로 세팅되어 있을 것이다. 눌러보자.
![](/assets/post/programs/eclipse/20211223/05.jpg)  
  
---
  
* 퀵서치(QuickSearch) 를 켜서 아래처럼 텍스트를 입력하면, 그 텍스트가 포함이 되어있는 파일 정보가 나타난다.
![](/assets/post/programs/eclipse/20211223/06.jpg)  


## Review
* 인텔리제이에서 검색 기능이 워낙 보기 편하고 잘되어있다보니 이클립스로 개발을 할 때에 불편하점이 있었는데, 그나마 **퀵서치(QuickSearch)**를 통해서 어느정도 덜 수 있을 것 같습니다!

* 오늘도 읽어주셔서 감사합니다. :P