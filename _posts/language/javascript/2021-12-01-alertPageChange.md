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

* 하지만 실제로 실행해보면 우리가 의도한대로 실행되지 않는 모습을 볼 수 있다.

<div>
	<input type="button" value="알럿 후 링크이동" onclick="fnAlert2();"/>
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
  
> 위와 같이 발생되는 이유는 **<font color="red">비동기</font>** 통신이기 때문에 발생되기 때문에 ajax 호출 등의 경우 주의해야한다.

## Recomend(추천)
* 경우에 따라 수많은 가지수가 존재하겠지만, 사실 confirm() method를 사용하는 것이 확실하다.  

```html
<input type="button" value="컴펌 확인 후 링크이동" onclick="fnConfirm();"/>
```  
  
```js
<script>
	var fnConfirm = function() {
		if (confirm('확인을 누르면 Plitche 블로그로 이동합니다. 원치 않으면 취소를 눌려주세요.')) {
			location.href='https://plitche.github.io';
		}
	}
</script>
```  
  
* 위와같이 confirm 창이 떳을 때에 확인을 누른 경우에만 링크 이동을 하는 것이다.


<div>
	<input type="button" value="컨펌 확인 후 링크이동" onclick="fnConfirm();"/>
</div>
<script>
	function fnConfirm() {
		if (confirm('확인을 누르면 Plitche 블로그로 이동합니다. 원치 않으면 취소를 눌려주세요.')) {
			location.href='https://plitche.github.io';
		}
	}
</script>


## review  
* 정말 간단한 내용이지만 **비동기 통신**에 대해서 가볍게 생각하면 제대로 작동하지 않는 이유에 대해서 헤멜 수 있는 부분이라 포스팅 하게 되었습니다. :P
  
* 오늘도 수고 많으셨습니다. 감사합니다.
