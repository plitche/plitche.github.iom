---
layout: post
title: "[JAVA] Array(배열)과 ArrayList의 차이, 그리고 정렬(Sort)"
subtitle: java / array / 배열 / ArrayList / 정렬
categories:
    - language
    - java
description: >
    About the how to sort ArrayList and different array with arrayList
image: /assets/img/blog/java1.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 **Array(배열)과 ArrayList의 차이, 그리고 정렬(Sort)**입니다.

* toc
{:toc .large-only}

## intro
백준, 프로그래머스, 코드업 과 같은 문제를 풀다보면 `배열`이나 `리스트`를 사용해야 될때가 항상 있다.

하지만 그 차이를 모른다면 비슷한 용도로 사용 되기 때문에 자칫 혼동 되기 쉽다.

때문에 이 차이점에 대해서 간략히 설명하고, 그 중 ArrayList(리스트)의 정렬 기능에 대해서도 안내하고자 한다.

## Array(배열)
* 장점
  1. 인덱스를 통한 검색이 용이하다.
  2. 연속적이므로 메모리 관리가 편하다.

* 단점
  1. 크기가 고정되어 있기 때문에 특정 엘리먼트가 삭제되면, 해당 index자리를 빈 공간으로 남겨두기 때문에 메모리가 낭비 될 수 있다.
  2. 배열의 크기를 컴파일 이전에 지정해주어야 한다.
  3. 컴파일 이후에는 배열의 크기를 변동 할 수 없다.

## List(리스트)
* 장점
  1. 빈 공간을 허용하지 않기 때문에 메모리의 빈틈이 없다.
  2. 동적임으로 크기가 정해져 있지 않다.
  3. 특정 데이터는 다음 데이터의 위치를 기억하고 있어, 삽입/삭제가 용이하다.

* 단점
  1. 검색(조회) 성능이 좋지 않다.


## 결론
* 위와 같은 장점/단점 때문에 그 특징에 맞게 용도를 생각해보자.  

> 배열 : 데이터의 크기가 정해져 있고, 삽입/삭제 보다 검색이 주로 많이 이루어지는 경우  

> 리스트: 데이터의 크기가 정해져 있지 않고, 삽입/삭제가 빈번하며 검색(조회)가 많이 일어나지 않는 경우

**데이터의 크기**에 대해서 자바 개발자에게 조금더 쉬운 개념으로 보자면, `for문`과 `while문`의 차이정도로 생각하면 될 것 같다.

## ArrayList Sort(정렬)
ArrayList를 정렬하는데는 **<font color="red">Collection.sort()</font>** 메소드를 사용하면 편하다.

> Collection.sort()의 메소드의 인자로 정렬할 리스트를 넘기면 된다.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Example {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        List<Integer> people = new ArrayList<>();
        for (int i=0; i<5; i++) {
        	int age = sc.nextInt();
        	people.add(age);
        }
        
        Collections.sort(people); // 정렬
        
        for (int i=0; i<people.size(); i++) {
        	System.out.println(people.get(i));
        }
	}
}
```  

* 5명의 나이를 입력받기로 하여, 사용자가 무작위로 입력하였을 때 `Collections.sort();` 메소드를 통하여 정렬 해 준뒤 출력하면 아래와 같이 오름차순으로 정리된 모습을 볼 수 있다.

![](/assets/post/java/20210712/01.jpg)

## review
* 물론 치명적인 것이 아니라면, 배열과 리스트는 혼합해서 사용이 가능하지만, 각각의 장점/단점을 알고 정확히 쓰게되면 보다 효율적인 코드 작성이 가능합니다.

* Arraylist 정렬 기능에 대해서 검색하다가 갑자기 생각나서 같이 내용 추가하였습니다.^^ 감사합니다.