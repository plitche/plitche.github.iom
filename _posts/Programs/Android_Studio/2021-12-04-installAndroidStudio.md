---
layout: post
title: "[Android Studio] Andriod Studio 간단 설치법"
subtitle: Android Studio / JAVA / MOBILE / INSTALL
categories:
    - programs
    - androidStudio
description: >
  About how to install Android Studio
image: /assets/img/blog/android.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[Android Studio] Andriod Studio 간단 설치법**입니다.
- - -

* toc
{:toc .large-only}

## Intro
**<font color="red">Android Studio(안드로이드 스튜디오)</font>**는 안드로이드 전용 어플(App) 제작을 위한 통합 **개발 환경(IDE)**입니다.  
  
프로그래밍 언어로는 **자바(JAVA)**를 기본으로 **코틀린**도 지원합니다.  
  
저는 Window10으로 `2020.3.1 Version`으로 진행했습니다.  
  
~~제 생각에는~~ 충분한 이미지를 보고 함께 따라해봐요!  
- - -

## Install[설치 방법]

### 1. 홈페이지 방문(다운로드)
먼저 [공식 홈페이지](https://developer.android.com/studio)를 방문해보자.  
  
![](/assets/post/programs/androidStudio/20211204/01.jpg)

1. 위 사진의 숫자 순서에 맞게 페이지에 접속해서 **Download Android Studio** 버튼은 누르면 이용약관 팝업이 나타납니다.  
  
2. 팝업에서 스크롤을 가장 하단으로 내려 약관 체크를 해주고 다운로드 합니다.  
  
3. `.exe`파일을 실행 합니다.  
  
![](/assets/post/programs/androidStudio/20211204/02.jpg)
- - -

### 2. Android Studio Setup
#### 1. exe 파일을 싱핼하면 다음과 같은 프로그램이 열린다. **"Next >"** 를 누른다.  
  
![](/assets/post/programs/androidStudio/20211204/03.jpg)  
  
#### 2. Components 선택은 당연히 기본으로 Android Studio가 선택되어있다.  
> Android Virtual Device(AVD)가 없으면 테스트가 어렵기 때문에 저는 선택했습니다.
  
![](/assets/post/programs/androidStudio/20211204/04.jpg)  
  
#### 3. 다운로드 폴더를 설정한다.
500MB 정도의 용량이 필요한 것을 감안하여 때문에 편한 곳으로 설정해준다.  
  
![](/assets/post/programs/androidStudio/20211204/05.jpg)  

#### 4. 시작 메뉴 추가
시작 메뉴에 프로그램 추가를 원치 않으면 "Do not create shortcuts"을 체크한다.  
  
![](/assets/post/programs/androidStudio/20211204/06.jpg)  

#### 5. 설치가 진행되고 "Completed" 완료되면 "Next >"를 누른다.
  
![](/assets/post/programs/androidStudio/20211204/07.jpg)  

#### 6. 우리는 처음으로 설치 하는 것이기 때문에 "Do not import settings"를 선택하고 "OK"를 누른다.
이미 존재하는 세팅을 불러오려면 "Config or installation directory"를 선택해서 import 해준다.

![](/assets/post/programs/androidStudio/20211204/08.jpg)  

#### 7. 구글에 Android Studio를 사용하는 정보 데이터를 보낼지 선택한다.
"Don't send"를 선택해도 무관하며 저는 그냥 "Send usage statistics to Google"을 선택했습니다.  

![](/assets/post/programs/androidStudio/20211204/09.jpg)  

#### 8. "Next >"를 눌러준다.
  
![](/assets/post/programs/androidStudio/20211204/10.jpg)  

#### 9. 따로 커스텀을 하지 않고 기본 "Standard"로 진행한다.
~~저는 제가 커스텀 할 잣니이 없어요 ㅠㅠ~~
![](/assets/post/programs/androidStudio/20211204/11.jpg)  

#### 10. Theme(테마)는 "Darcula" ~~우리의 눈 건강을 위해!~~
> 번외 이야기 이지만 저는 Darcula가 왜 드라큘라 인지모르겠어요 :P 다르큘라라고만 보여요.. 의도한건가;  
  
![](/assets/post/programs/androidStudio/20211204/12.jpg)  

#### 11. 설치할 SDK와 API등을 선택한다. 
저는 기본으로 세팅되어있는 것만 체크해서 진행했습니다.

![](/assets/post/programs/androidStudio/20211204/13.jpg)  

#### 12. 앞에서 선택한 목록이 나오고, 바꾸고 싶으면 "Previous"을 눌러 변경해준다.

![](/assets/post/programs/androidStudio/20211204/14.jpg)  

#### 13. 다운로딩 컴포넌트가 진행이 완료되면 "Finish"를 눌려준다.

![](/assets/post/programs/androidStudio/20211204/15.jpg)  

#### 14. 설치한 프로그램을 열어보면 완료!!
> New Project를 선택하여 개발을 시작하면 끝!

![](/assets/post/programs/androidStudio/20211204/16.jpg)  
- - -
  
## TIP!
Android Studio(안드로이드 스튜디오)는 Intro에서 설명한 것 처럼 **<font color="red">JAVA</font>**기반이기 때문에 자바도 설치해야 진행이 가능하다.
- - -
  
## Review
* 다행이 **Android Studio(안드로이드 스튜디오)**는 많은 설정과 세팅이 필요하지 않아서 비교적 수월하게 쭉쭉 진행할 수 있었습니다.  
  
* 혹시 제가 잘못 설정한 부분이 있다거나 하면 언제든지 **피드백** 부탁드립니다. :D  

* 앞으로는 안드로이드 스튜디오를 이용하여 실제 프로젝트 개발하는 부분까지 포스팅 할 수 있도록 해볼게요~ 감사합니다.