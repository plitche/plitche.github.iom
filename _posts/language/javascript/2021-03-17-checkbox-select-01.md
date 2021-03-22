---
layout: post
title: "[jQuery] 체크박스(checkbox) 활용하기 - 게시판"
subtitle: jquery / checkbox / board
categories:
    - language
    - javascript
description: >
  About the checkbox control with javascript.
image: /assets/img/blog/example-content-ii.jpg
sitemap: true
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 내용은 jQuery를 이용해서 **checkbox 활용**하기 입니다.

* toc
{:toc .large-only}

## intro
input 태그의 type속성 중 하나인 **checkbox**는 정말 많이 활용이 되고 있다. radio와 다르게 중복 선택이 가능하여, 가장 흔히 볼 수 있는 것은 홈페이지 게시판에서 원하는 카테고리의 게시글들만 분류하는 기능이다. 물론 select와 input type="text" 등을 모두 활용하여 더 멋있는 검색기능을 구현할 수도 있지만 이번에는 checkbox활용에 대해서만 살펴보겠다.

## What? Why? 
아래와 코드를 활용하여 간단한 5개의 check박스를 만들었다.
```html
<input type="checkbox" id="total"/>
<label for="total">전체</label>
<input type="checkbox" value="a01" id="a01" name="searchKey"/>
<label for="a01">자유</label>
<input type="checkbox" value="a02" id="a02" name="searchKey"/>
<label for="a02">익명</label>
<input type="checkbox" value="a03" id="a03" name="searchKey"/>
<label for="a03">기술</label>
<input type="checkbox" value="a04" id="a04" name="searchKey"/>
<label for="a04">기타</label>
```

> 여기서 label태그는 for타입의 값과 input태그의 id가 일치하게 작성이 되면, label태그의 text를 클릭을 할 때 연결된 input태그가 선택이 되는 기능이다.

> 각각의 input 태그에 name속성을 부여해서 추후 선택된 checkbox의 value를 controller로 전달할 수 있으며, 스크립트에서 name을 이용한 선택자로 활용할 수도 있다.

![](/assets/post/javascript/checkbox-control-01.PNG)

* 전체를 선택할 때 마다 모든 checkbox가 선택/선택해제 될 수 있도록 구현해야 한다.
* 전체를 선택하지 않아도 나머지 checkbox를 모두 선택한 경우 전체 checkbox가 선택되어야 한다.
* 전체를 선택하여 모든 checkbox가 선택되어 있더라도 checkbox 중 하나라도 선택해제를 하면 전체 checkbox도 선택해제 되어야 한다.

## 스크립트 파트 (javascript code)
자바스크립트를 이용하여 checkbox를 제어한다.

### 전체 선택시 모든 checkbox 선택
```js
$('#total').on('click', function(){   // 전체 id="total"에 클릭 이벤트 함수 실행
	if($('#total').prop('checked')) {   // 전체 checkbox가 checked(선택)되어있는 경우 
		$('input[type="checkbox"]').prop('checked',true);  // 모든 checkbox 선택 처리 하기
	} else { 
		$('input[type="checkbox"]').prop('checked',false); // 모든 checkbox 선택해제 하기
	}
});
```

1. total이라는 id를 가진 checkbox가 클릭이 되면,
2. 해당 checkbox의 체크 여부에 따라서
3. input type이 checkbox인 모든 테그들의 checked요소를 true/false로 수정해 줍니다.

> .prop()는 지정한 선택자를 가진 첫번째 요소의 속성값을 가져오거나 속성값을 추가합니다.  
~~이에 관련된 내용은 차후 더 자세히 포스팅 하겠습니다.~~

### 전체 제외한 나머지 checkbox 체크 여부에 따른 제어
```js
$('input[name="searchKey"]').on('click', function(){   // 해당 name속성을 가진 checkbox에 클릭 이벤트 부여
	if ($('input[name="searchKey"]:checked').length == 4) { // 선택된 개수가 4개일 때
		$('#total').prop('checked', true);  // id가 total인 checkbox 선택
	} else {
		$('#total').prop('checked', false); // id가 total인 checkbox 선택해제
	}	
});
```

1. name속성의 값이 searchKey인 checkbox가 클릭이 되면,
2. name속성의 값이 searchKey인 checkbox 중 체크가 되어있는 태그의 개수를 구한다.
3. 그 개수가 4개일 때 (= 모두 체크 되었을 때)
4. 전체(id="total") checkbox를 선택/선택해제 해준다.

> id가 아닌 name속성을 이용하여 선택자를 활용할 수 있다. 

## My thought
> 이외에도 신경써야 할 내용이 더 있다면, 편하게 피드백 주시면 수정할 수 있도록 하겠습니다! 내가 직접 이 기능을 사용하는 사용자라고 생각하고 개발을 한다면 훨신 도움이 될 수 있을것 같습니다. 가능한 **사용자 입장**에서 불편하지 않고 쉽게 사용할 수 있도록 구현하는 것을 목표로 해야하겠습니다.
