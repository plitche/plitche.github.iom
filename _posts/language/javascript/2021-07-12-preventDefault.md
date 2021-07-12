---
layout: post
title: "[JavaScript] event.preventDefault() 간단 사용법"
subtitle: javascript / event.preventDefault() / 이벤트 방지
categories:
    - language
    - javascript
description: >
  About the how to use event.preventDefault()
image: /assets/img/blog/javascript2.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 **[JavaScript] event.preventDefault() 간단 사용법** 입니다.

* toc
{:toc .large-only}

## Intro
`<a>`태그나 `<submit>`과 같은 태그처럼 몇몇 태그는 특정 기능을 가지고 있다.  

a태그는 href를 통해 특정 사이트로 이동하거나, submit태그는 값을 전송하면서 창이 새로고침(reload)된다.  

이런 태그의 이벤트 기능을 **<font color="red">preventDefault</font>**를 통하여 동작하지 않도록 막을 수 있다.  

## preventDefault란?
위에 간단히 설명한 부분에 더 추가를 하자면, `preventDefault`를 호출하게 되면 일반적으로 브라우저의 구현에 의해 처리되는 기존의 액션(동작)이 진행되지 않고, 결과적으로 해당 이벤트가 발생하지 않는다.  

> DOM을 통한 이벤트 동작을 막을 때에는 적용되지 않습니다. 그럴 때에는 `event.stopPropagation`을 사용합니다.  

그럼 이제 두가지 태그에 대해서 예시를 들어 보려고 한다.

**1. a 태그를 클릭해도 원하는 href링크로 이동하지 않게 하기.**
**2. submit 태그를 클릭해도 창이 새로고림(reload)되지 않게 하기.**

## 1. a 태그 href
* 먼저 아래와 같은 html을 작성하자.  

```html
<a href="https://plitche.github.io" id="aTag">Plitche 블로그로 이동하기</a>
```  

그럼 당연하지만 아래 예제 버튼과 같이 페이지가 이동하는 모습을 볼 수 있다.  

<a href="https://plitche.github.io" style="cursor: pointer; border: 1px solid black; padding: 5px;">Plitche 블로그로 이동하기</a>
<br/>
<br/>
<br/>
* 여기서 해당 a태그를 클릭했을때 이동하고자 하는 URL이 **console**에 찍히도록 하려면 어떻게 해야 될까?

```html
<a href="https://plitche.github.io" id="aTag">Plitche 블로그로 이동하기</a>
```  
```js
<script>
	$(document).ready(function() {
		$('#aTag').on('click', function() {
			console.log("https://plitche.github.io")
		})
	});
</script>
```  

콘솔창을 켜두고 아래 예시 버튼을 클릭해보면, 0.1초 잠깐 표시가 된 모습을 보자마자 `href`를 통해서 페이지가 이동해버리게 된다.

<a href="https://plitche.github.io" onclick="fn_link()" style="cursor: pointer; border: 1px solid black; padding: 5px;">Plitche 블로그로 이동하기</a>
<script>
	function fn_link() {
		console.log("https://plitche.github.io")
	}
</script>  
<br/>
<br/>
<br/>
* 최종!
```html
<a href="https://plitche.github.io" id="aTag">Plitche 블로그로 이동하기</a>
```  
```js
<script>
	$(document).ready(function() {
		$('#aTag').on('click', function(e) {
			e.preventDefault();	// 이벤트 작동 X
			console.log("https://plitche.github.io")
		})
	});
</script>
```  

<a onclick="fn_link()" style="cursor: pointer; border: 1px solid black; padding: 5px;">Plitche 블로그로 이동하기</a>
<script>
	function fn_link() {
		console.log("https://plitche.github.io")
	}
</script>  

> 위 코드와 같이 `e.preventDefault()`를 통하여 이벤트가 작동하는 것을 막아 주면 된다.

## 2. submit 태그

* 여기서 나는 에초에 태그자체에 href를 쓰지 않고, 스크립트에서 location.href를 해주지 않으면 되는것이 아닌가? 라는 의문이 생겼다.  

* submit 태그에서 적용해보면 그 궁금증이 해결이 될 것이다.

> 사용법 자체는 a태그와 똑같으나, **preventDefault()**를 사용하면 `submit`태그를 통한 데이터 전달은 정상적으로 작동하며 페이지 새로고침만 막을 수 있게 된다.

<font color="gray">사용법이 같음으로 따로 코드로 구현하지는 않겠습니다.</font>  

## review
* 이외에도 정규식을 통하여 원하는 value가 입력되지 않은 경우에는 특정 기능을 작동하지 않게 막는다거나 하는 처리가 가능합니다.  

* 생각보다 엄청 자주 쓰이고, 활용하기 좋은 기능임으로 꼭 알아두도록 해요!^^