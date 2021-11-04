---
layout: post
title: "[JavaScript] setTimeout() Method를 이용한 타이머 함수 간단 사용법"
subtitle: JavaScript / setTimeout() / 타이머 함수
categories:
    - language
    - javascript
description: >
  About the how to use setTimeout method
image: /assets/img/blog/javascript2.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 **[JavaScript] setTimeout() Method를 이용한 타이머 함수 간단 사용법** 입니다.

* toc
{:toc .large-only}

## Intro
업무를 진행하다보면 javascript에서 일정 시간이 지난 후 특정 함수를 실행해야될 일이 생긴다.  

예를 들면 페이지 로드 후 일정 시간이 지나면 알럿을 띄워준다거나 하는 경우이다.  

이럴 떄 Window 타이머 함수임 `setTimeout()`를 이용하면 좋다.

## setTimeout() 란?
Window함수로써 위에 간단히 설명한 것 처럼 내가 지정한 특정 시간이 지난 뒤 동작하게 한다.  

아래 문법을 확인해보자. [[참조]](https://developer.mozilla.org/ko/docs/Web/API/setTimeout)
> var timeoutID = window.setTimeout(func[, delay, param1, param2, ...]);  
> var timeoutID = window.setTimeout(code[, delay]);  
> window.setTimeout(function, milliseconds);  

매개변수 첫 번째 자리인 `func`는 말그대로 function이 들어갈 자리이다.  

그 **function**은 그 뒤 매개변수인 **milliseconds** 이후에 실행된다.  

## 간단 예제  
* 먼저 간단하게 버튼 하나를 만들어 그 버튼 클릭시 2초 이후 알럿이 뜨게 해보자.  

```html
<div>
	<button id="testBtn">클릭해주세요!</button>
<div>
```
```js
<script>
	$('#testBtn').click(function() {
		window.setTimeout(
			function() {
				alert('짜잔 setTimeout 성공!');
			},
			2000			
		);
	});
</script>
```

<div>
	<button onclick="fn_setTimeout()">클릭해주세요!</button>
<div>
<script>
	function fn_setTimeout() {
		window.setTimeout(
			function() {
				alert('짜잔 setTimeout 성공!');
			},
			2000			
		);
	}
</script>
<br/><br/>
버튼을 클릭했을때 `setTimeout()`을 통해서 내가 지정한 function을 2000 밀리초 이후에 실행하는 것이다.  

물론 그 function을 변수에 저장하여 실행하는 것도 가능하다.  
	
```js
<script>
	var fn_setTimeOut = function() {
		alert('짜잔 setTimeout 성공!');
	}

	$('#testBtn').click(function() {
		window.setTimeout(fn_setTimeOut, 2000);
	});
</script>
```  

## Tip(주의!)  
여기서 한가지 꼭 주의할 점이있다. 저도 처음에 setTimeout을 사용할때에 했던 실수인데, 위 코드를 같이 보도록 하자.  

```js
<script>
	var fn_setTimeOut = function() {
		alert('짜잔 setTimeout 성공!');
	}

	$('#testBtn').click(function() {
		window.setTimeout(fn_setTimeOut, 2000); // 함수 호출이 아닌 함수 명만 작성해야 한다.
	});
</script>
```

* **<font color="red">setTimeout("함수이름", "밀리초");</font>** 일반적으로 setTimeout 을 사용할 때에는 위와 같은 문법으로 사용할텐데, 함수 이름만!! 넣어야 한다.

혹여나 `window.setTimeout(fn_setTimeOut(), 2000);` 다음과 같이 작성하게 된다면, 함수를 호출하여 그 함수가 작동해버림으로 주의해야 한다.


## review  
* 이외에 **setInterval method**는 일정 시간에 따라 반복하는 함수입니다. 이 함수에 대해서는 추후에 다시 포스팅 하도록 하겠습니다.
