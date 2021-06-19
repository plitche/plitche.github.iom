---
layout: post
title: "[JAVA] SimpleDateFormat - 날짜 형식 설정하기"
subtitle: java / simepleDateFormat / 날짜
categories:
    - language
    - java
description: >
  About the java class 'SimpleDateFormat'.
image: /assets/img/blog/java1.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 [java] SimpleDateFormat 사용법 - **날짜 형식 지정**입니다.
개인적으로 항상 사용할 때 마다 구글링이 필요한 부분입니다. 그 만큼 저는 자주 사용하지는 않았지만 참 익숙해지지 않는 것 중 하나라 포스팅하게 되었습니다.

* toc
{:toc .large-only}

## intro
날짜를 표현하기 위해서는 *년,월,일,요일,시,분,초*를 활용해서 아래와 같이 무수히 많은 방법으로 표현 할 수 있다.
```
2021.03.22[월] 13:30:00  
2021.03.22[월] pm01:30:00  
21.03.22[월] pm01:30:00  
21-03-22[월] 13:30  
올해(2021년)의 크리스마스는 '토'요일 입니다.
...
```
이외에도 년도는 표기하지 않거나 중간 구분자를 다른 형태로 표현해주고, 문장 사이사이에 필요한 날짜만 넣어주는 등과 같다. 일일이 이런 다양한 방식으로 표현 하려 하면 여간 귀찮은 일이 아니며, 차후 포맷이 변경되게 된다면 일일이 형식마다 수정해 줘야 한다는 번거로움까지 있다.  
다행이도 자바에서는 **SImpleDateFormat이라는 클래스**를 통해서 가주 간편하게 활용할 수 있다.

## SimpleDateFormat의 패턴
simpleDateFormat는 날짜를 개발자가 원하는 형태, 포맷에 맞추어 파싱/포맷팅 하는 역할을 한다.
<br/>
이 클래스를 사용하기 위한 기본적인 패턴에 대해서는 [oracle 홈페이지](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)를 참조하였다.  

| Letter | Date or Time Component | Presentation | Example |
|:-------|:-----------------------|:-------------|:--------|
|y       |년도                    |Year          |2021     |
|M       |월(1~12)                |Month         |3        |
|w       |그 해의 몇 번째 주(1~53) |Number        |15       |
|W       |그 월의 몇 번째 주(1~5)  |Number        |4        |
|D       |그 해의 몇 번째 일(1~366)|Number        |105      |
|d       |그 월의 몇 번째 일(1~31) |Number        |22       |
|E       |요일(월~일)             |Text          |Mon      |
|a       |오전/오후(AM,PM)        |Text          |PM       |
|H       |시(0~23)                |Number        |23       |
|h       |시(0~11) am/pm          |Number        |11       |
|K       |시(1~24)                |Number        |24       |
|k       |시(1~12) am/pm          |Number        |12       |
|m       |분(0~59)                |Number        |42       |
|s       |초(0~59)                |Number        |56       |
|S       |1/1000초(0~999)         |Number        |978      |
|========|========================|==============|=========|


## Java code
SimpleDateFormat 클래스는 java **text패키지**에 있다. ~~import는 꼭 잊지 말도록 하자.~~  

```java
import java.sql.Date;
import java.text.SimpleDateFormat;

public class SimpleDateFormatExample {
	
	public static void main(String[] args) {
		Date today = new Date(System.currentTimeMillis());
		
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy년 MM월 dd일 E요일 HH:mm:ss a");
		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf3 = new SimpleDateFormat("yy/MM/dd");
		SimpleDateFormat sdf4 = new SimpleDateFormat("HH:mm:ss");
		SimpleDateFormat sdf5 = new SimpleDateFormat("오늘은 E요일 입니다.");
		SimpleDateFormat sdf6 = new SimpleDateFormat("오늘은 yyyy년의 w주차 입니다.");
		SimpleDateFormat sdf7 = new SimpleDateFormat("오늘은 yyyy년 MM월의 D번째 날입니다.");
		
		System.out.println("1: " + sdf1.format(today));
		System.out.println("2: " + sdf2.format(today));
		System.out.println("3: " + sdf3.format(today));
		System.out.println("4: " + sdf4.format(today));
		System.out.println("5: " + sdf5.format(today));
		System.out.println("6: " + sdf6.format(today));
		System.out.println("7: " + sdf7.format(today));
		
	}

}
```

> 해당 클래스와 자주 사용되는 클래스가 현재 날짜를 구할 수 있는 Date클래스이다. 빈번히 보이는 클래스이니 마찬가지로 연관해서 알아 두도록 합니다.

## 출력 결과
```
1: 2021년 03월 23일 화요일 00:03:46 오전
2: 2021-03-23
3: 21/03/23
4: 00:03:46
5: 오늘은 화요일 입니다.
6: 오늘은 2021년의 13주차 입니다.
7: 오늘은 2021년 03월의 82번째 날입니다.
```
> yyyy대신 yy만 사용하게 되면 년도의 마지막 두자리만 표시됩니다.  
예) yyyy.MM.dd(2021.03.23) => yy.MM.dd(21.03.23)  

## after
위의 예시를 보았지만, **SimpleDateFormat**을 게시판에 활용하여, 날짜를 비교해 게시글이 금일 작성되었다면 시,분,초 만 표기를 하고 현재 날짜 기준 하루 전에 작성된 경우 년,월,일까지 모두 표기하는 등의 간단한 활용도 가능합니다.  
저도 아직 다양한 사용을 하지는 못해서, 더 좋은 활용법이나 자주 사용되는 경우를 발견하게 되면 업데이트 하겠습니다!
