---
layout: post
title: "[PowerShell] VS_Code Terminal Error (이 시스템에서 스크립트를 실행할 수 없으므로...)"
subtitle: PowerShell / VSCode / Terminal
categories:
    - etc
    - useful
description: >
  About how to fix VSCode Error with PowerShell
image: /assets/img/blog/tech.png
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **VS_Code Terminal Error(VS Code 터미널 오류 해결하기)**입니다.

* toc
{:toc .large-only}

## Intro

VS Code에서 `npm`이나 `Truffle` 등 을 사용하고자 할 때 아래 사진과 같은 오류가 발생
할 수 있다.

![](/assets/post/etc/20210706/01.jpg)

> 이 시스템에서 스크립트를 실행할 수 없음으로 ~~~ 파일을 로드할 수 없습니다.

## 원인

- 위와 같은 오류가 발생하는 이유는 스크립트 실행 권한 자체가 제한이 되어 있기 때문에, 이 권한을 변경해주어야 한다.

![](/assets/post/etc/20210706/02.jpg)

권한을 변경하기 위해서 Windows PowerShell을 사진과 같이 관리자 권한으로 실행해주자.

## get-help Set-ExecutionPolicy

`get-help Set-ExecutionPlicy` 명령어를 입력하면, 경우에 따라 여러가지 파일을 다운로드 하는 모습을 볼수 있으며, 완료가 된 이후에는 아래 사진과 같이 결과가 나올 것이다.

![](/assets/post/etc/20210706/03.jpg)

<font color="gray">(사실 여기서는 따로 처리해야 하는 것은 없다. : 확인용)</font>

## Set-ExecutionPolicy RemoteSigned

`Set-ExecutionPolicy RemoteSigned` 으로 정책 설정을 한다.

![](/assets/post/etc/20210706/04.jpg)

그럼 위와 같이 진행 여부를 물어볼 텐데, **Y**를 입력하여 허용해주면 끝!

## 결과

* 위 내용과 순차적으로 진행했다면 별다른 문제없이 오류가 해결 되었을 것이다.

* 동일하게 VS Code의 터미널에서 명령어를 입력해준다면!?

![](/assets/post/etc/20210706/05.jpg)

문제없이 잘 작동 하는 모습을 볼 수 있을 것이다.

## Review

* 무료 강의를 듣는 도중에, 강사님과 저의 local이 다르게 동작하고 오류가 나는 경우가 사실 살짝 힘빠지고, 어려운 부분 중에 하나지요.ㅠㅠ

* 우리모두 포기하지말고 다시 화이팅!