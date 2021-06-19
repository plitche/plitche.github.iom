---
layout: post
title: "[JavaScript] 휴대폰번호, 이메일 정규식 체크하기"
subtitle: javascript / Regular Expression / 정규식
categories:
    - language
    - javascript
description: >
  About the how to use Regualr Expression
image: /assets/img/blog/javascript2.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 **[JavaScript] 휴대폰번호, 이메일 정규식 체크하기** 입니다.

* toc
{:toc .large-only}

## Intro
현재 프로젝트 진행 中 **하나의 input tag**를 통하여 휴대폰 번호와 이메일을 모두 입력 받아야 하는 경우가 생겼다.  

DB에 사용자가 핸드폰 번호를 입력했는지, 이메일을 입력했는지 판단했어야 했기 때문에 고민했었다.  

꼭 정규식 체크가 아니더라도 이런 경우에 사용한 다는 것을 알고 있으면, 추후에 도움이 될일이 생기수 있으니 집중해보자!  

## 1. HTML
- 먼저 html태그를 아래와 같이 작성해준다.  
```html
<input type="text" id="text" />
<input type="button" onclick="fn_submit()" value="SUBMIT(제출)" />
```  

<input type="text"/>
<input type="button" onclick="fn_submit()" value="SUBMIT(제출)" />
> 위의 **<font color="Red">SUBMIT(제출)</font>**버튼을 클릭했을 때, 휴대폰인지 이메일인지 판단하여 alert창을 띄워 보도록 하자.

## 2. Script
- 버튼을 클릭했을 때 동작할 **function(함수)**를 script에 작성해주자.
```js
<script>
	function fn_submit() {
		var text = document.getElementById('text').value;
	}
</script>
```  

위와 같이 스크립트를 작성해주면, input 태그안에 작성된 값(Value)가 선택이되어 text라는 변수에 저장이 된다.

### 2-1. 휴대폰 번호 정규식
- 먼저 정규식을 통해서 입력된 값이 휴대전화번호 인지 아닌지를 판단해보자.
```js
<script>
	function fn_submit() {
		var text = document.getElementById('text').value;

		var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		if (regPhone.test(text) === true) {
			alert('입력된 값은 휴대전화번호입니다.');
		}
	}
</script>
```  

* **regPhone**이라는 변수에 정규식을 작성해서 저장해 준다.
	- 핸드폰번호 첫/두번째 자리는 01로 시작하며 세번째 자리는 01+0/1/6/7/8/9 가 될 수 있다.
	- 번호 사이사이 **<font color="red">대쉬('-')</font>**는 사용자가 작성하든 안하든 무시한다.
	- 번호 두번째 마디는 **3-4자리**가 가능하며 숫자는 **0-9**까지 들어올 수 있다.
	- 마지막 마디는 마찬가지로 **0-9**까지 가능하며 **4자리**만 가능하다.

* `regPhone.test('테스트하길 원하는 값')`을 통하여 검사하며 **true라면 정규식을 통과한 것**이다.  
> 물론 `if(regPhone.test(text)) {} 처럼 굳이 true랑 비교해줄 필요는 없다.  

* 만약 정규식을 통과했다면 올바른 핸드폰 번호를 입력했다고 alert을 띄워주자.

<font size="11px">핸드폰 번호 실습해보기!</font>
<form>
	<input type="text" id="phone" />
	<input type="button" onclick="fn_phone()" value="SUBMIT(제출)" />
</form>
<script>
	function fn_phone() {
		var text = document.getElementById('phone').value;
		var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		if (regPhone.test(text) === true) {
			alert('입력된 값은 휴대전화번호입니다.');
		}
	}
</script>

### 2-2. 이메일 정규식
- 휴대폰번호를 정규식 체크 했다면 이번에는 이메일을 해보도록 하자.
```js
<script>
	function fn_submit() {
		var text = document.getElementById('text').value;

		var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
		if (regEmail.test(text) === true) {
			alert('입력된 값은 이메일입니다.');
		}
	}
</script>
```  

* 핸드폰 번호와 마찬가지로 **regEmail**이라는 변수에 정규식을 작성해서 저장해 준다.
	- 이메일 주소 시작은 **숫자**나 **알파벳(소/대문자)**로 시작한다.
	- 이메일 첫째자리 뒤에는 `-``_``.`을 포함하여 들어올 수 있다.
	- 도메인 주소 전에는 **@**가 들어와야 한다.
	- `.`이 최소한 하나는 있어야 하며 마지막 마디는 **2-3**자리여야 한다.

* `regEmail.test('테스트하길 원하는 값')`을 통하여 검사하며 **true라면 정규식을 통과한 것**이다.  

* 만약 정규식을 통과했다면 올바른 이메일 주소를 입력했다고 alert을 띄워주자.

<font size="11px">이메일 실습해보기!</font>
<form>
	<input type="text" id="email" />
	<input type="button" onclick="fn_email()" value="SUBMIT(제출)" />
</form>
<script>
	function fn_email() {
		var text = document.getElementById('email').value;
		var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
		if (regEmail.test(text) === true) {
			alert('입력된 값은 이메일입니다.');
		}
	}
</script>

### 2-3.종합
```js
<script>
	function fn_submit() {
		var text = document.getElementById('text').value;

		var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
		if (regPhone.test(text) === true) {
			alert('입력된 값은 휴대전화번호입니다.');
		} else if (regEmail.test(text) === true) {
			alert('입력된 값은 이메일입니다.');
		} else {
			alert('올바른 핸드폰/이메일을 입력해주세요.');
		}
	}
</script>
```  

* 핸드폰 번호인지, 이메일인지 정규식 체크를 통하여 확인한 후 둘다 아니라면, 제대로 입력해 달라고 alert을 띄워주자.  

## TIP!
* 핸드폰 번호를 입력하는 경우 `-`를 무시하기 때문에, DB에 사용자가 입력한 그대로 저장이 된다면 형태가 너무 자유로울 수 있다.
> ex  
> 010-1234-5678  
> 0101234-5678  
> 010-12345678  
> 01012345678  

때문에 정규식 체크 이후에 Back단으로 Data를 전송할 때에 **숫자만 추출**하여 동일한 형태로 바꿔주면 좋다.
```js
<script>
	function fn_submit() {
		var text = document.getElementById('text').value;

		var regNumber = /[^0-9]/g;
		phoneData = text.replace(regNumber, "");
		alert(phoneData);
	}
</script>
``` 

* 정규식을 통하여 원래 문자에서 숫자가 아닌 문자는 모두 빈 문자로 변경한다.

## review
* 하나의 기능을 구현 할 때 연결하여 적용할 수 있는 부분을 알아간다면 더 기억에도 오래남고 익힐 수 있습니다.^^ 오늘도 읽어주셔서 감사합니다.