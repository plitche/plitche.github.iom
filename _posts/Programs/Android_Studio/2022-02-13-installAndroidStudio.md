---
layout: post
title: "[Android Studio] Andriod Studio 에뮬레이터 오류 해결방법(검은 화면)"
subtitle: Android Studio / JAVA / MOBILE / Emulator / Error
categories:
    - programs
    - androidStudio
description: >
  About how to fix Emulator Error (with black screen)
image: /assets/img/blog/android.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[Android Studio] Andriod Studio 에뮬레이터 오류 해결방법(검은 화면)**입니다.
- - -

* toc
{:toc .large-only}

## Intro
**<font color="red">Android Studio(안드로이드 스튜디오)</font>**를 통해서 강의를 들으며 따라하던 중 오류가 발생했습니다.  
  
Run을 했을때 나오는 로컬 모바일 화면에서 검은색 화면만 노출되고 개발을 진행한 레이아웃 컴포넌트들이 보이지 않는 에뮬레이터 오류 였습니다.
  
저 처럼 당황했을 초급 개발자 분들을 위해 공유합니다.
- - -

<div class="ad-second">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4699618075256363" crossorigin="anonymous"></script>
  <!-- 수평 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4699618075256363"
       data-ad-slot="3477566307"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

## 에뮬레이터 오류 해결 방법

### 1. AVD Manager
* Android Studio에 아래 이미지와 같이 생긴 아이콘이 있을 것 이다.  

![](/assets/post/programs/androidStudio/20220213/04.JPG)
  
위치는 우측 상단에 위치해 있다.

![](/assets/post/programs/androidStudio/20220213/01.JPG)

아이콘을 클릭하면 새로운 창이 열리면서, `Your Virtual Devices`라는 로컬 환경에서 본인이 세팅한 모바일 디바이스가 나올 것이다.  
- - -

### 2. 현재 사용중인 Devices
* Devices들 중 현재 사용중인 것을 선택해서 `마우스 우 클릭`을 누른다.
  
* 그럼 아래 그림 처럼 **<font color="red">Cold Boot Now</font>**라는 토글이 나올 것 이다.

![](/assets/post/programs/androidStudio/20220213/02.JPG)  
- - -

### 3. 재 시작 (Restart)
* 그럼 로컬 환경의 디바이스 화면이 새롭게 열릴텐데, 닫아주고 다시 `Run`이나 `Debug`버튼을 클릭해 재 시작 해보도록 하자.

![](/assets/post/programs/androidStudio/20220213/03.JPG)
~~완전 기초단계죠??ㅋㅋ~~
  
* 그럼 위 화면처럼 현재 개발중인 화면이 노출 될 것 이다.  

## Review
* 정말 초급 부분이기 때문에, 코드에 대해서 설명드릴 내용이 없어서,, 제가 맞닥드렸던 오류에 대해서 포스팅 해보았어요!
  
* 아직 에뮬레이터라는 것이 무엇인지, AVD는 또 무엇인지 하나도 아는 바가 없지만 하나씩 하나씩 공부해볼게요. ㅎㅎ 모두 화이팅!

<div class="ad-second">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4699618075256363" crossorigin="anonymous"></script>
  <!-- 수평 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4699618075256363"
       data-ad-slot="3477566307"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>