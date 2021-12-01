---
layout: post
title: "[JavaScript] alert() method 확인 후 링크 이동(엑션)"
subtitle: JavaScript / alert() / 알럿 / 링크 이동 / 비동기통신
categories:
    - language
    - javascript
description: >
  About the how to use url change after clicked alert confirm button.
image: /assets/img/blog/javascript2.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 **[JavaScript] alert() method 확인 후 링크 이동(엑션)** 입니다.

* toc
{:toc .large-only}

## Intro
이번 포스팅에는 alert() 메소드 확인 버튼 클릭 후 링크 이동 등 특정 엑션을 진행하는 방법입니다.  

사실 간단하게 생각해보면 엄청 쉽게 처리할 수 있는 부분인데 실수 할 수 있는 부분에 대해서, 또는 다른 방법(?)에 대해서 설명하고자 합니다.

## javascript code
간단히 버튼 하나를 생성하고 그에 맞는 스크립트를 작성한다.  
  
```html
<input type="button" value="알럿 후 링크이동" onclick="fnAlert();"/>
```  
  
```js
<script>
	var fnAlert = function() {
		alert('알럿 입니다. 확인을 누르면 Plitche 블로그로 이동합니다.');
		location.href='https://plitche.github.io';
	}
</script>
```  
  
* 위와 같이 작성한다면 당연히 알럿이 먼저 호출되어 작동하고,  
  
* 그 다음 페이지 이동을 할 것이다.  
  
<div>
	<input type="button" value="알럿 후 링크이동" onclick="fnAlert();"/>
</div>
<script>
	function fnAlert() {
		alert('알럿 입니다. 확인을 누르면 Plitche 블로그로 이동합니다.');
		location.href='https://plitche.github.io';
	}
</script>
  
* 이와 같이 간단한 코드가 그럼 무엇이 궁금한 것일까 ?
  
> 비동기 통신을 조심하라!

## Warn(주의)  
만약 어떤 특정 엑션을 확인 버튼을 누르고 난 후 2초뒤에 실행한다 라고 생각해보자.  

[지난 포스팅](https://plitche.github.io/language/javascript/2021-11-02-setTimeOut/) 에서 소개 했다 싶이 **setTimeout() Method**를 이용한다면 간단하게 해결할 수 있다. 
   
```js
<script>
	var fnAlert = function() {
		alert('알럿 입니다. 확인을 누르면 Plitche 블로그로 이동합니다.');
		window.setTimeout(
			location.href='https://plitche.github.io' // 2초뒤에 실행할 엑션
			, 2000 // 2초뒤에 실행(밀리초)
		)
	}
</script>  
```  
  
* 위와 같이 작성한다면 간단히 해결될 것이라 생각하기 쉽다.  

* 하지만 실제로 실행해보면 알럿 확인을 누르기도 전에 setTimeout이 시작되어 2초가 흐르게 되는 경우가 발생한다.

<div>
	<input type="button" value="알럿 후 링크이동2" onclick="fnAlert2();"/>
</div>
<script>
	function fnAlert2() {
		alert('알럿 입니다. 확인을 누르면 Plitche 블로그로 이동합니다.');
		window.setTimeout(
			location.href='https://plitche.github.io'
			, 2000
		)
	}
</script>
  
* 위



## review  
* 이외에 **setInterval method**는 일정 시간에 따라 반복하는 함수입니다. 이 함수에 대해서는 추후에 다시 포스팅 하도록 하겠습니다.
