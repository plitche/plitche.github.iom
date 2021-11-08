---
layout: post
title: "[Excel] 엑셀로 만드는 쉬운 Insert 쿼리(다중insert)"
subtitle: Database / excel / insert / 단축키
categories:
    - database
    - other
description: >
  About the make multiple row insert query at excel.
image: /assets/img/blog/database3.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 [Excel] **엑셀**로 만드는 쉽게 **Insert 쿼리**(다중insert)입니다.

* toc
{:toc .large-only}

<div class="ad-second">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4699618075256363" crossorigin="anonymous"></script>
  <!-- 수평 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4699618075256363"
       data-ad-slot="3477566307"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

## intro
* 금일 간단한 이벤트(프로모션) 서비스 하나를 오픈하였다. 대표적으로 특정 버튼 클릭 시 **<font color="red">쿠폰을 제공하는</font>** 기능이다.  

Test를 하기 위한 ***쿠폰 번호***는 임의로 생성하여서 사용하였으나, 실제 서버에 적용할 때에는 ***쿠폰 번호***를 insert 쿼리문을 작성하여 DB팀에 공유했어야 했다.  

쿼리문이 숫자가 작다면 일일이 copy & paste를 하여 쿠폰 번호만 변경할 수도 있겠지만, 오늘은... 30000만개였다.  
~~하마타면 종일 더블킬릭만 할 뻔 했다..~~  

Excel을 이용한다면 정말 쉽게 몇 만, 몇 십만개라도 순식산에 작성할 수 있다.  

## DB Table 구조
아래의 쿼리문을 통해 간단한 **시퀀스**와 **COUPON** 테이블을 만들어 두었다.
```sql
CREATE SEQUENCE coupon_seq  -- 시퀀스명
START WITH 1  -- 1부터 시작
INCREMENT BY 1  -- 1씩 증가
NOCACHE;
```
```sql
CREATE COUPON
(
  event_no number primary key,  -- 쿠폰 sequence
  coupon_no varchar2(6) not null,  -- 쿠폰 번호
  getUser_id varchar2() null,  -- 받을 유저 id
  getDate date null -- 쿠폰 지급 날짜
)
```
위의 테이블에 20개의 쿠폰을 INSERT해보겠다.

## EXCEL
### 01. 하드코딩
아래 사진과 같이 무작위 쿠폰번호가 20개 있을 때 물론 일일이 작성할 수도 있다.
<font color="gray">하지만 우린 이걸 원하는게 아니잖아!?</font>  
![](/assets/post/database/20210329/07.JPG)  

### 02. CONCATENATE()
Excel의 CONCATENATE()를 이용해서 원하는 셀들을 합쳐 하나의 셀로 만들 수 있다.
#### (1) insert query문 준비
* 두개의 셀에 사진처럼 insert문의 일부를 나누어서 작성해준다.  
* 쿠폰번호가 들어갈 자리만 비워 두고 그 자리를 기준으로 따로 작성해놓으면 된다.
![](/assets/post/database/20210329/02.JPG)  

#### (2) concatenate() 사용법
* CONCATENATE의 ()안에 insert query문의 순서대로 셀을 선택해준다.
![](/assets/post/database/20210329/03.JPG)  

#### (3) 단축키 Ctrl + Shift + End
* 쿼리문을 작성할 첫번째 셀에 커서를 두고 **<font color="red">ctrl + shift + end</font>**를 같이 누르면 사진과 같이 아래로 열이 선택될 것이다.  
![](/assets/post/database/20210329/04.JPG)  

#### (4) 단축키 Ctrl + D
* 열이 선택이 되었다면 **<font color="red">ctrl + d</font>**를 함께 눌러 첫 번째 셀과 동일한 함수가 적용되도록 하자.

#### (5) Error + Solution
* 엥?? 근데 아래 사진의 결과를 보면 알 수 있듯이 원하는대로 작성되지 않았다. 뭐가 문제일까?
![](/assets/post/database/20210329/05.JPG)  

* 일반적으로 엑셀은 동일한 함수를 적용한다거나 할 때 **자동으로 알파벳과 숫자를 증가시켜 준다.**
* 이를 제대로 작동하기 위해서는 **<font color="red">$, 달러 기호</font>**를 증가시키지 않고 fix(고정)시키길 원하는 문자 앞에 작성해준다.  
![](/assets/post/database/20210329/06.JPG)  

#### (6) result(결과)
* 드디어! 우리는 제대로된 query문을 손쉽게 얻어내는 방법을 알았다!
![](/assets/post/database/20210329/07.JPG)  

### 03. '&' 활용
* CONCATENATE()를 굳이 번거롭다 하시는 분들은 **<font color="red">& 기호</font>**를 활용하면 동일한 결과를 얻을 수 있다.
![](/assets/post/database/20210329/08.JPG)  

## review
* 처음 배우고 처음 적용하기 시작하신 분들은 저처럼 하나하나 모두 당황스러우실 수 있습니다.
* 하지만 정말 **99.9%의 해결책**은 이미 다 있더라구요!!
* 당황하지 말고, 언제 다하지.. 라는 생각에 한숨쉬지 말고 하나하나 같이 알아가봐요.^^  
오늘도 봐주셔서 감사합니다.

