---
layout: post
title: "[MS SQL] 저장 프로시저(Stored Procedure)와 SSMS(SQL Server Management Studio)의 간단 단축기 설정"
subtitle: MS SQL / 저장 프로시저 / Stored Prodedure / SSMS / SQL Server Management Studio / 단축키
categories:
    - database
    - mssql
description: >
  About the Stored Procedure's concept and how to setting SQL Server Management Studio.
image: /assets/img/blog/database2.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[MS SQL] 저장 프로시저(Stored Procedure)와 SSMS(SQL Server Management Studio)의 간단 단축기 설정**입니다.

* toc
{:toc .large-only}

## 저장 프로시저란?
* **저장 프로시저(Stored Procedure: SP)**란 일련의 쿼리를 하나의 함수(method)처럼 실행하기 위한 **<font color="red">쿼리의 집합</font>**이다.  
SQL Server에서 제공되는 프로그래밍 기능으로 어떠한 동작을 **일괄 처리**하는 용도로 사용된다.  
[저장 프로시저 개념 (from 위키피디아)](https://ko.wikipedia.org/wiki/%EC%A0%80%EC%9E%A5_%ED%94%84%EB%A1%9C%EC%8B%9C%EC%A0%80)

## SSMS(SQL Server Management Studio) 단축키 설정
### 1. Tools -> Options  
**도구 -> 옵션**을 통하여 옵션창을 열어준다.  
![](/assets/post/mssql/20210404/01.jpg)  
  
### 2. Environment -> Keyboard -> Query Shortcuts  
**환경 -> 키보드 -> 단축키**을 통해 아래 사진처럼 **<font color="Red">Store Procedure</font>**부분에 작성해준다.
<font color="gray">(순서는 상관없이 본인이 편한위치에 작성을 해주어라.)</font>
![](/assets/post/mssql/20210404/02.jpg)

## 각각 Procedures 설명
#### 1. sp_help
* table 정보 or sp 정보  
데이터베이스 개체, 사용자 정의 데이터 형식 또는 데이터 형식에 대한 정보를 알 수 있다.

#### 2. sp_helptext
* sp 상세  
테이블, 뷰, 프로시져 등 여러가지 객체들의 구성을 보여주는 시스템 프로시져이다.

#### 3. sp_who
* 현재 사용자, 세션 및 프로세스에 대한 정보  
DBA가 블럭이 씌워져 있는 프로세스를 확인하는 용도로 많이 쓰인다.

#### 4. sp_lock
* sp lock 확인  
잠금 확인 여부를 확인할 수 있다.

#### 5. sp_depends
* 테이블 종속 정보(테이블 사용 sp)  
두가지 형태로 사용 가능하다.  
```sql
sp_depends [테이블명] -- 해당 테이블이 참조되어 사용되고 있는 프로시저 또는 뷰 목록
sp_depends [프로시저명] -- 해당 프로시저와 관계된 테이블 목록
```

#### 6. sp_MygetSpNameInText
* 텍스트 검색

#### 7. sp_pkeys
* 테이블 키 정보  
현재 환경의 단일 테이블에 대한 기본 키 정보를 확인 할 수 있다.

#### 8. sp_spaceused
* 디스크 용량
전체 데이터베이스가 사용하는 디스크 공간을 표시한다.

## review
* 위의 각각 더 자세한 사용법이나 예시는 차후에 새로운 포스팅으로 설명드리겠습니다. ~~사실 지금은 다 알지못해서ㅠㅠ~~  
* 정말 자주 사용되는 명령어도 있고 비교적 낮은 빈도로 사용되는 명령어도 있겠지만, 그래도 위의 8가지는 적어도 단축키 설정을 해서 사용하도록 하면 정말 편하게 사용할 수 있습니다.
