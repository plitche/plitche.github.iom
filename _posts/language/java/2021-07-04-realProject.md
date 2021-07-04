---
layout: post
title: "[JAVA] 실무에서 사용하는 코딩, (방지 코드)"
subtitle: java / Coding / code / 실무 / project
categories:
    - language
    - java
description: >
    About the how to coding at real project with java language
image: /assets/img/blog/java1.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅의 주제는 **[JAVA] 실무에서 사용하는 코딩(방지 코드)**입니다.

* toc
{:toc .large-only}

## intro
사실 `Java`언어에만 국한된 것이 아니라 모든 언어와 기술에 공통적인 부분이나,  

나 처럼 학원에서 배우기만 한 개발자가 실무 프로젝트에서 사용하는 코드들의 대한 감을 조금이나마 익숙해지는데 도움을 주려고 한다.  

현재도 아직 순간순간 처리하지 않고 넘어가는 부분들이 있지만...^^  

그것은 **<font color="red">방지 코드</font>**에 대한 것이다.  

## 방지코드란?
* 사실 **방지 코드**라는 이름 자체는 내가 이해하고 사용하고 있는 이름이다.  

> 방지코드 : 혹시나 하는 에러와 코드가 발생할 때 방지하는 코드  

다른 의미로는 **검증 코드**와 유사한 의미를 가진다고 생각해도 무방하다.  

## Example
* 사용자로부터 10명의 성별을 입력 받아, 그 중 몇 명의 남자와 여자가 있는지 출력하라.  

만약 위와 같은 문제를 보게 된다면 간단하게 아래와 같이 코드를 작성할 것이다.  
<font color="gray">(간단한 문제이기 때문에 코드에 대한 내용은 따로 설명하지 않겠다.)</font>

```java
import java.util.Scanner;
public class Example {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int malePeople = 0; // 남자 명수
     	int femalePeople = 0; // 여자 명수
        
        for (int i=0; i<10; i++) {
        	String gender = sc.next();  // 성별 입력 받기
        	
        	if (gender.equals("Male")) {  // 남자가 입력되었다면,
        		malePeople++; // 남자 +1
        	} else {
        		femalePeople++; // 여자 +1
        	}
        }
        
        // 출력
        System.out.println("남자 " + malePeople + "명");
        System.out.println("여자 " + femalePeople + "명");
     
        sc.close();
	}
}
```  

딱 봐도 for문과 if문만 안다면 쉽게 풀 수 있는 문제다.  

## Problem1
* 하지만?! 만약 사용자가 남자는 Male로 잘 입력해 놓고 오타가 나서 Female이 아닌 다른 문자를 입력한다면 어떻게 될 것인가!?  
<font color="gray">(물론 체크박스나 라디오와 같은 태그를 일반적으로 사용해서 그럴일은 없겠지만!)</font>  

> 이런 경우에 if / else 가 아닌 분명히 사용자가 Female이라고 입력했는지 처리해 줄 필요가 있다.

```java
import java.util.Scanner;
public class Example {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int malePeople = 0; // 남자 명수
     	int femalePeople = 0; // 여자 명수
        
        for (int i=0; i<10; i++) {
        	String gender = sc.next();  // 성별 입력 받기
        	
        	if (gender.equals("Male")) {  // 남자가 입력되었다면,
        		malePeople++; // 남자 +1
        	} 
          if (gender.equals("Female")) {
        		femalePeople++; // 여자 +1
        	}
        }
        
        // 출력
        System.out.println("남자 " + malePeople + "명");
        System.out.println("여자 " + femalePeople + "명");
     
        sc.close();
	}
}
```  

위처럼 사용자의 실수나 고의적인 오류 발생을 막아야 한다.

## Problem2
* 혹은 나는 남자를 입력하려고 Male을 쓰려 했지만 오타가 났다면?

> 사용자가 Male, Female 이외에 문자는 입력할 수 없도록, 혹은 오타가 났다는 것을 알려주도록 해야하지 않을까?  

```java
import java.util.Scanner;
public class Example {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int malePeople = 0; // 남자 명수
     	int femalePeople = 0; // 여자 명수
        
        for (int i=0; i<10; i++) {
        	String gender = sc.next();  // 성별 입력 받기
        	
          // Male, Female이 아닌 오타로 인한 다른 문자가 입력된다면,
          if (!gender.equals("Male") || !gender.equals("Female") ) {  
            System.out.println("Male 또는 Female을 입력해주세요.");
            i--;
          } else {
        	  if (gender.equals("Male")) {  // 남자가 입력되었다면,
           		malePeople++; // 남자 +1
           	} 
            	
            if (gender.equals("Female")) {
            	femalePeople++; // 여자 +1
            }	
          }
        }
        
        // 출력
        System.out.println("남자 " + malePeople + "명");
        System.out.println("여자 " + femalePeople + "명");
     
        sc.close();
	}
}
```  

* 위와 같이 Male과 Female이 아닌 다른 문자가 들어왔을 경우에 메세지를 출력해주면 방지할 수 있을 것 같다.
<font color="red">한가지 더!</font>  
여기서 잘못된 문자가 들어왔을 때에는 `i를 -1` 해주어야 10명 모두 입력 받을 수 있다.

## Problem3
* 만약 사용자가 10명을 전부 입력한줄 알았는데, 9명만 입력했다거나 의도적으로 위쪽 코드를 바꾸어 `i<10`이 아닌 `i<11`로 바꾸어 실행시킨다면?  

> 백단에서는 그럴일이 없지만, javascript는 브라우저의 검사창을 통해 바꿀수 있기 때문에! 꼭! 주의해야 한다.  

```java
import java.util.Scanner;
public class Example {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int malePeople = 0; // 남자 명수
     	int femalePeople = 0; // 여자 명수
        
        for (int i=0; i<10; i++) {
        	String gender = sc.next();  // 성별 입력 받기
        	
          // Male, Female이 아닌 오타로 인한 다른 문자가 입력된다면,
          if (!gender.equals("Male") || !gender.equals("Female") ) {  
            System.out.println("Male 또는 Female을 입력해주세요.");
            i--;
          } else {
        	  if (gender.equals("Male")) {  // 남자가 입력되었다면,
           		malePeople++; // 남자 +1
           	} 
            	
            if (gender.equals("Female")) {
            	femalePeople++; // 여자 +1
            }	
          }
        }
        
        // 최종 출력 방지/검증 코드
        if (malePeople+femalePeople==0) {
          // 출력
          System.out.println("남자 " + malePeople + "명");
          System.out.println("여자 " + femalePeople + "명");
        } else {
          System.out.println("입력하신 사람의 숫자가 10명이 아닙니다.");
        }

        sc.close();
	}
}
```  

위와 같이 모든 입력을 다 받고나서 출력해주기 전에 다시 한번더 **<font color="red">검증/방지</font>**해주어야 한다.

## review
* 이외에 대표적으로는 세션이 만료가 되거나 쿠키가 삭제되는 경우가 있습니다.
  - 쇼핑몰에서 장바구니에 상품을 담으려면 로그인이 되어있어야 하는데, 앞에서만 체크하고 실제로 동작할때에 체크하지 않았다면?
  - 세션이 만료가 되어 로그인 정보가 없는데, 기능이 작동해 오류가 발생하는 일이 생길 수 도 있습니다.

* 이런 문제들과 고려해야 되는 부분은 수도 없이 많습니다. 어떤 페이지를 개발을 하고 기능을 개발을 하더라도 항상 생각해야 되는 부분임에는 틀림 없는 것 같습니다!

* 우리 모두 잊지 말고 신경쓰자구요!^^ 감사합니다.