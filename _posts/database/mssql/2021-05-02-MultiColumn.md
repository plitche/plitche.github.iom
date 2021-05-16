---
layout: post
title: "[MS SQL] 다중 컬럼에서 사용하는 집계 함수(MIN, MAX, SUM, AVG)"
subtitle: Database / 집계 함수 / 개념 / MS SQL
categories:
    - database
    - mssql
description: >
  About way to use aggregaion function from multi column
image: /assets/img/blog/database2.jpg
sitemap: false
---
안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[MS SQL] 다중 컬럼에서 사용하는 집계 함수(MIN, MAX, SUM, AVG)**입니다.

* toc
{:toc .large-only}

## Intro
어떠한 결과를 추출하기 위해서 우리가 Query문을 작성하다보면 **집계함수**를 사용하게 된다.  
> **MIN(최소값), MAX(최대값), SUM(합계), AVG(평균)**

대표적인 위의 4가지 **집계함수**들은 데이터 값을 비교하여 원하는 데이터만 추출하는 역할을 수행한다.

오늘은 그 중 **<font color="red">컬럼간의 데이터</font>**를 비교하여 집계함수를 사용하고 싶을때 활용할 수 있는 방법을 소개하려 한다.

## Base
먼저 쉽게 설명하기 위하여 아래와 같은 쿼리문을 통해 table을 생성하고 데이터를 insert하였다.  
```sql
CREATE TABLE orders (
	customer_name VARCHAR(10) PRIMARY KEY,
	order1 int not null,
	order2 int not null,
	order3 int not null,
	order4 int not null
);

INSERT INTO orders VALUES('Steve', '13', '25', '56', '45');
INSERT INTO orders VALUES('Evan', '10', '45', '4', '24');
INSERT INTO orders VALUES('Alice', '5', '75', '412', '41');
INSERT INTO orders VALUES('Jhon', '7', '65', '3', '32');
INSERT INTO orders VALUES('Mia', '20', '3', '5', '400');
```  

고객별 상품 주문 금액을 나타낸 것이다.  
![](/assets/post/mssql/20210502/01.jpg)

그럼 사진과 같이 5개의 row가 입력이 된 것을 볼 수 있다.  

## Row(행 간)의 비교
만약 당신이 order1에 대해서 MIN(최소값), MAX(최대값), SUM(합계), AVG(평균) 금액이 궁금하다면  

```sql
SELECT MAX(order1) 최대, MIN(order1) 최소, SUM(order1) 합계, AVG(order1) 평균
FROM orders
```  
위와 같은 쿼리문을 통하여 아래처럼 원하는 데이터를 얻을 수 있을 것이다.  
![](/assets/post/mssql/20210502/02.jpg)

## Column(열 간)의 비교
하지만 만약 **<font color="red">고객별</font>**로 집계 함수를 이용하여 데이터를 확인하려면 어떻게 해야할까??

```sql
SELECT customer_name,
    (  
        SELECT MIN(orders) FROM ( VALUES (order1), (order2), (order3), (order4) ) AS p (orders)   
    ) AS 최소,  
    (  
        SELECT MAX(orders) FROM ( VALUES (order1), (order2), (order3), (order4) ) AS p (orders)   
    ) AS 최대,  
    (  
        SELECT SUM(orders) FROM ( VALUES (order1), (order2), (order3), (order4) ) AS p (orders)   
    ) AS 합계,  
    (  
        SELECT AVG(orders) FROM ( VALUES (order1), (order2), (order3), (order4) ) AS p (orders)   
    ) AS 평균
FROM
(
	SELECT * FROM orders
) AS Price

```  

위와 같이 쿼리문을 작성하여 실행을 시켜보면, 아래와 같이 각각 **<font color="red">고객별(컬럼별)</font>**로 내가 원하는 데이터가 나온 것을 볼 수 있다.

![](/assets/post/mssql/20210502/03.jpg)  

## Review
* 사실 이외에도 다른 방법을 이용하여 위와 같은 결과를 가져올 수 있지만, 비교적 손쉽고 복잡하지 않은 쿼리문 인 것 같습니다.  
* 저도 저런식으로 **VALUES**가 사용될 것이라고는 생각지 못했는데, 정확한 원리는 아직 알지 못하여 ㅠㅠ 추후에 알게되면 추가적인 정보를 업데이트 할 수 있도록 하겠습니다.  
* 다음 시간에도 컬럼간의 데이터를 다른 방법으로 비교하는 시간을 가져 보겠습니다. 감사합니다.

