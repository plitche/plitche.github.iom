---
layout: post
title: "[MS SQL] Begin Tran의 간단 사용법"
subtitle: Database / transaction / 개념 / MS SQL
categories:
    - database
    - mssql
description: >
  About the concept of Transaction
image: /assets/img/blog/database2.jpg
sitemap: false
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[MS SQL] Begin Tran의 간단 사용법**입니다.

* toc
{:toc .large-only}

## Intro
MS_SQL은 **기본 설정**이 **AUTO_COMMIT**으로 되어 있다.  

때문에 DML 중 INSERT, UPDATE, DELETE 등의 명령어를 사용할 때 명령을 따로 하지 않아도 자동으로 COMMIT이 된다.  

개인적으로 연습하는 DB라면 상관 없지만, 만약 회사의 실DB라면??! 끔찍하다...  

인간이기 때문에 할 수 있는 이런 실수를 방지할 수 있는 방법이 **<font color="red">BEGIN TRAN</font>**이다.  

## Base
일전에 [샘플데이터](https://plitche.github.io/database/mssql/2021-03-28-sampleDB/)를 만들었던 table로 예를 들어 보고자 한다.  

```sql
SELECT *
FROM production.products WITH(NOLOCK)
```  

![](/assets/post/mssql/20210408/01.JPG)

위의 쿼리문을 실행을 하면 그림과 같이 321개의 **상품 관련 정보**가 나오는 것을 볼 수 있다.  

## Delete
더 이상 필요없는 category_id가 6번인 상품들을 삭제한다고 가정한다면 아래와 같은 쿼리문이 작성될 것이다.  
```sql
DELETE
FROM production.products
WHERE category_id = 6
```  

위와 같이 올바른 쿼리문을 작성하여 정상적으로 작동한다면 모르겠지만, **Human Error!!** 사람이 낼 수 있는 오류를 범할 수 있다.
```sql
DELETE
FROM production.products
```
혹시 블럭을 잘못 씌우고 무심하게 F5단축키를 눌렀다거나, WHERE절을 작성하지 않았다면??

해당 테이블에 있는 모든 데이터들이 제거될 것이다. ~~끔찍하다..~~

## BEGIN TRAN
이러한 오류를 방지하기 위해서 우리는 MS SQL에서는 **<font color="red">BEGIN TRAN</font>**를 사용하면 된다.  

```sql
BEGIN TRAN
  DELETE
  FROM production.products
  WHERE category_id = 6
END TRAN
```  
위와 같이 사용하고, 
```sql
  SELECT *
  FROM production.products
  WHERE category_id = 6
```  
위 커리를 통하여 제대로 반영이 되었는지 확인하면 된다.  

만약 결과가 올바르게 적용이 되었다면, **<font color="red">COMMIT TRAN;</font>**으로 적용 내용을 반영해주고,  

거꾸로 제대로 반영이 안되었다면 **<font color="red">ROLLBACK TRAN;</font>**으로 실행했던 트랜젝션을 다시 되돌려주면 된다.  

> COMMIT TRAN, ROLLBACK TRAN 둘 중 하나를 사용해주지 않으면, TRANSACTION이 종료되지 않은 상태임으로 제대로 동작하지 않을 수 있다. 잊지 말도록 하자.

## Review
* 저도 그렇고 많은 분들이 '당연히 실수 안하지~! 이게 뭐라고'라고 생각할 수 있습니다. 하지만 그 생각은 정말 절대로! 금물입니다.  
실제로 저도 Test를 진행하던 중 블럭이 잘못 씌워진채로 쿼리문을 실행시켜서 크게 고생했던 기억이 있습니다.ㅠㅠ  
사람이기 때문에 발생할 수 있는 오류를 최소한으로 하는 개발자가 돼봐요!^^ 감사합니다.
