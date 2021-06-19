---
layout: post
title: "[Oracle] 다중 insert - 여러행 한번에 insert하기"
subtitle: oracle / insert / 다중행
categories:
    - database
    - oracle
description: >
  About the insert various row at one time query statement at Oracle Database.
image: /assets/img/blog/database1.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 [Oracle] **다중 insert** - 여러행 한번에 insert하기** 입니다.

* toc
{:toc .large-only}

## intro
개발을 진행하다 보면, Database에 한 번만 접근하여 여러 행을 insert해주어야 하는 경우가 발생한다. 물론 해당 메소드를 여러번 호출하여 진행 할 수도 있지만, 더 간편한 방법이 있어서 소개하려 한다. **<font color="red">dual 더미 테이블</font>**을 이용하여 insert하는 방법이며, 모든 칼럼에 대해서 혹은 원하는 특정 칼럼에 대해서만 적용이 가능하다.

## 테이블 구조 (table)
테이블 명 : EMP

| 컬럼명  | 데이터타입  |
|:-------|:-----------|
|EMP_NAME|VARCHAR2    |
|EMP_AGE |NUMBER      |
|EMP_GENDER| VARCHAR2 |
|==========|==========|

## 일반적인 insert 쿼리문 (One row insert query statemet)
```Oracle
INSERT INTO EMP (EMP_NAME, EMP_AGE, EMP_GENDER) VALUES ('김철수', 25, 'M');
```

위와 같이 칼럼 명을 다 작성해 줄 수도 있으며, 모든 칼럼에 대해서 값을 INSERT하는 경우에는 아래처럼 생략도 가능하다.
```Oracle
INSERT INTO EMP VALUES ('김철수', 25, 'M');
```  

> 만약 일반적인 insert 쿼리문을 이용하여 다중 행을 삽입 할 경우 아래와 같은 코드로 작성해야 하고, 쿼리문이 insert할 행의 개수만큼 실행되어야 함으로 시간도 보다 많이 소요될 수 있다.
```Oracle
  INSERT INTO EMP VALUES ('김철수', 25, 'M');
  INSERT INTO EMP VALUES ('이영희', 30, 'F');
  INSERT INTO EMP VALUES ('박진수', 22, 'M');
```  

## 다중 insert 쿼리문 (Multiple row insert query statement)
* 위와 같은 부분을 수정하고 개선하여 insert 쿼리문을 작성한다면, 하나의 쿼리문으로 데이터를 삽입 할 수 있다.
```Oracle
  INSERT ALL
    INTO EMP VALUES ('김철수', 25, 'M')
    INTO EMP VALUES ('이영희', 30, 'F')
    INTO EMP VALUES ('박진수', 22, 'M')
  SELECT *
  FROM DUAL;
```  

> 일반 insert문과 마찬가지로 원하는 칼럼에만 데이터를 넣기 희망한다면 아래와 같이 칼럼을 지정해주어 값을 삽입 할 수 있다.
```Oracle
  INSERT ALL
    INTO EMP (EMP_NAME, EMP_AGE) VALUES ('김철수', 25)
    INTO EMP (EMP_NAME, EMP_AGE) VALUES ('이영희', 30)
    INTO EMP (EMP_NAME, EMP_AGE) VALUES ('박진수', 22)
  SELECT *
  FROM DUAL;
```  

## 주의
DUAL테이블은 더미 테이블로 아무런 값이 들어가 있지않은 오라클 자체에서 제공되는 테이블이다.  
![200x200](/assets/post/oracle/oracle-insert-01-01.PNG)  

~~아직 정확한 이유와 사용법에 대해서는 아직 모르지만,~~  
QUERY문의 마지막에서 SELECT * FROM DUAL 을 작성하지 않으면 제대로 실행되지 않으니 주의해야한다. 
