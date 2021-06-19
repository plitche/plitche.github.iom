---
layout: post
title: "[ELK] Docker를 이용한 엘라스틱서치 스텍(ELK) 구축_Window"
subtitle: Database / Docker / ELK / Window
categories:
    - database
    - elk
description: >
  About how to setting and install ELK with Docker
image: /assets/img/blog/bigdata.jpg
---

안녕하세요! Plitche(플리체)입니다.  
이번 포스팅은 **[ELK] Docker를 이용한 엘라스틱서치 스텍(ELK) 구축_Window**입니다.

* toc
{:toc .large-only}

## Intro
최근 프로젝트 내에서 **<font color="red">ElasticSearch</font>**를 이용한 토이 프로젝트를 구상 중에 있다.  

하지만 나는 **ElasticSearch**는 커녕 **Docker**가 무엇인지도 몰랐다.  

나 같이 고생하지 말라는 의미로 몇 일간 고생하며 Window에 구축한 ELK 대해서 소개하려 한다.

## Docker 준비
### 도커(Docker)란?
* 도커(Docker)는 **컨테이너** 기반의 오픈소스 가상화 플랫폼이다.  

Java, Python, dbms 각종 OS에 상관없이 실행되며, 심지어 빠른 실행 속도를 제공하고 있어 뛰어 나다고 볼 수 있다.
1. 빠르고 가벼운 가상화 솔루션
2. 개발언어에 종속되지 않는다.
3. 뛰어난 보안성

### 도커(Docker) 설치하기_Window10
* 도커를 설치하는 전반적인 과정은 [갓!대희](https://goddaehee.tistory.com/251)님의 블로그에 정말 자세하게 설명되어 있으니 똑같이 진행 하도록 하자.  
~~정말 구세주세요ㅠㅠ 감사합니다.~~

## ELK스택 구축하기
### 1. 먼저 Docker가 제대로 설치되었는지 확인해보자.  
(**window+r** => **cmd**) 커맨트 창을 열어 `docker -v`명령어를 입력하여 버전 확인 및 제대로 설치되었는지 확인하자.  

![](/assets/post/elk/20210511/01.jpg)

### 2. Github Repository clone
[Elk Github Repository](https://github.com/deviantony/docker-elk)를 클론하여 <font color="red">Elastic Search(엘라스틱 서치)</font>, <font color="red">Kibana(키바나)</font>, <font color="red">Logstash(로그스테시)</font> 3가지 전부 통합으로 구축할 예정이다.  
<font color="gray">(당연히 Git은 설치되어 있어야 겠죠?)</font>

#### 2-1. Simple Version(간단 버전)
* **간단 버전**은 혹시 시간이 없거나 굳이 하나하나 전부 따라 진행 하기 어려운 분들이 사용했으면 한다.

1. 먼저 내려받을 폴더를 생성하고 Gitbash를 통하여 클론할 준비를 한다.  
![](/assets/post/elk/20210511/02.jpg)  

2. `git clone https://github.com/deviantony/docker-elk-kor.git` 명령어를 통하여 clone해온다.  
![](/assets/post/elk/20210511/03.jpg)  

3. 아래와 같이 정상적으로 내려받아 졌다면, 끝!! (진짜다..^^)  
![](/assets/post/elk/20210511/04.jpg)  

> 간단 버전은 Repository 이름에서도 알 수 있듯이 `kor`버전 인 것이다.  

> 이미 유료로 사용되는 **X-pack** 설정은 주석처리 되어있고 바로 사용이 가능하다.  
> **X-Pack**은 ELk의 확장팩이라고 간단히 생각하면 된다.  

#### 2-2. Original Version(일반 버전)
1. 이번에는 직접 설정을 해보도록 하자. 마찬가지로 폴더를 생성하고 Gitbash를 실행해주자.

2. `git clone https://github.com/deviantony/docker-elk.git` 명령어를 통해 Clone해온다.  
![](/assets/post/elk/20210511/05.jpg)  

3. 마찬가지로 아래와 같이 클론이 완료된 모습이 나오면 성공이다.  
![](/assets/post/elk/20210511/06.jpg)  

> 이제부터 설정을 직접 할 차례이다. 각자 메모장 혹은 다른 프로그램을 통해서 아래 경로의 파일을 열어 준 뒤 아래 내용을 붙여 넣는다.  

#### 2-3 setting(설정)
**1.** docker-elk > elasticsearch > config > **<font color="red">elasticsearch.yml</font>** 파일  

```
---
## Default Elasticsearch configuration from Elasticsearch base image.
## https://github.com/elastic/elasticsearch/blob/master/distribution/docker/src/docker/config/el    asticsearch.yml
#
cluster.name: "docker-cluster"
network.host: 0.0.0.0
```  

**2.** docker-elk > elasticsearch > **<font color="red">Dockerfile</font>** 파일  

```
ARG ELK_VERSION

# https://www.docker.elastic.co/
FROM docker.elastic.co/elasticsearch/elasticsearch:${ELK_VERSION}

# Add your elasticsearch plugins setup here
# Example: RUN elasticsearch-plugin install analysis-icu
RUN elasticsearch-plugin install analysis-nori
```  

**3.** docker-elk > kibana > config > **<font color="red">kibana.yml</font>** 파일  
* 한글 분석기 **nori**를 설치합니다.

```
---
## Default Kibana configuration from kibana-docker.
## https://github.com/elastic/kibana-docker/blob/master/.tedi/template/kibana.yml.j2
#
server.name: kibana
server.host: "0"
elasticsearch.hosts: [ "http://elasticsearch:9200" ]
xpack.monitoring.ui.container.elasticsearch.enabled: true
```  

**4.** docker-elk > logstash > config > **<font color="red">logstash.yml</font>** 파일  

```
---
## Default Logstash configuration from logstash-docker.
## from https://github.com/elastic/logstash-docker/blob/master/build/logstash/config/logstash-full.yml
#
http.host: "0.0.0.0"
xpack.monitoring.elasticsearch.hosts: [ "http://elasticsearch:9200" ]
```  

**5.** docker-elk > logstash > pipeline > **<font color="red">logstash.conf</font>** 파일  

```
input {
        tcp {
                port => 5000
        }
}

## Add your filters / logstash plugins configuration here

output {
        elasticsearch {
                hosts => "elasticsearch:9200"
                index => "logstash-20200803"
                user => "username"
                password => "password"
        }
}
```  

**6.** docker-elk > **<font color="red">docker-compose.yml</font>** 파일  

```
version: '3.2'

services:
  elasticsearch:
    build:
      context: elasticsearch/
      args:
        ELK_VERSION: $ELK_VERSION
    volumes:
      - type: bind
        source: ./elasticsearch/config/elasticsearch.yml
        target: /usr/share/elasticsearch/config/elasticsearch.yml
        read_only: true
      - type: volume
        source: elasticsearch
        target: /usr/share/elasticsearch/data
    ports:
      - "9200:9200"
      - "9300:9300"
    environment:
      ES_JAVA_OPTS: "-Xmx256m -Xms256m"
      ELASTIC_PASSWORD: password
      # Use single node discovery in order to disable production mode and avoid bootstrap checks
      # see https://www.elastic.co/guide/en/elasticsearch/reference/current/bootstrap-checks.html
      discovery.type: single-node
    networks:
      - elk

  logstash:
    build:
      context: logstash/
      args:
        ELK_VERSION: $ELK_VERSION
    volumes:
      - type: bind
        source: ./logstash/config/logstash.yml
        target: /usr/share/logstash/config/logstash.yml
        read_only: true
      - type: bind
        source: ./logstash/pipeline
        target: /usr/share/logstash/pipeline
        read_only: true
    ports:
      - "5000:5000/tcp"
      - "5000:5000/udp"
      - "9600:9600"
    environment:
      LS_JAVA_OPTS: "-Xmx256m -Xms256m"
    networks:
      - elk
    depends_on:
      - elasticsearch

  kibana:
    build:
      context: kibana/
      args:
        ELK_VERSION: $ELK_VERSION
    volumes:
      - type: bind
        source: ./kibana/config/kibana.yml
        target: /usr/share/kibana/config/kibana.yml
        read_only: true
    ports:
      - "5601:5601"
    networks:
      - elk
    depends_on:
      - elasticsearch

networks:
  elk:
    driver: bridge

volumes:
  elasticsearch:
```  

**7.** docker-elk > **<font color="red">docker-stack.yml</font>** 파일  

```
version: '3.3'

services:

  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.8.0
    ports:
      - "9200:9200"
      - "9300:9300"
    configs:
      - source: elastic_config
        target: /usr/share/elasticsearch/config/elasticsearch.yml
    environment:
      ES_JAVA_OPTS: "-Xmx256m -Xms256m"
      ELASTIC_PASSWORD: password
      # Use single node discovery in order to disable production mode and avoid bootstrap checks
      # see https://www.elastic.co/guide/en/elasticsearch/reference/current/bootstrap-checks.html
      discovery.type: single-node
    networks:
      - elk
    deploy:
      mode: replicated
      replicas: 1

  logstash:
    image: docker.elastic.co/logstash/logstash:7.8.0
    ports:
      - "5000:5000"
      - "9600:9600"
    configs:
      - source: logstash_config
        target: /usr/share/logstash/config/logstash.yml
      - source: logstash_pipeline
        target: /usr/share/logstash/pipeline/logstash.conf
    environment:
      LS_JAVA_OPTS: "-Xmx256m -Xms256m"
    networks:
      - elk
    deploy:
      mode: replicated
      replicas: 1

  kibana:
    image: docker.elastic.co/kibana/kibana:7.8.0
    ports:
      - "5601:5601"
    configs:
      - source: kibana_config
        target: /usr/share/kibana/config/kibana.yml
    networks:
      - elk
    deploy:
      mode: replicated
      replicas: 1

configs:

  elastic_config:
    file: ./elasticsearch/config/elasticsearch.yml
  logstash_config:
    file: ./logstash/config/logstash.yml
  logstash_pipeline:
    file: ./logstash/pipeline/logstash.conf
  kibana_config:
    file: ./kibana/config/kibana.yml

networks:
  elk:
    driver: overlay
```  
## Docker로 실행하기
이제 우리가 클론 받은 폴더로 이동해 `Gitbash`를 다시 켜주고 아래 명령어를 입력해보자.

```
docker-compose build && docker-compose up -d
```

## 종료하기
```
docker-compose down -v
```

## Port & connact
* 기본적으로 설정되어있는 ELK port(포트)는 아래와 같다.  

> **ElasticSerach = 9200 / 9300**  

> **Logstash = 5000 / 9600**  

> **Kibana = 5601**  

* Local(로컬)에서 url에 위의 포트번호를 입력하면 아래 사진과 같이 접속이 되면 최종 성공!^^
![](/assets/post/elk/20210511/07.jpg)  


## Review
* 아직 세세한 설정 부분이나 이후 **jdbc**를 설정하는 부분에 대해서는 저도 아직 시도하는 중 이라 무난히 성공! 한다면 이후에 다시 또 포스팅하겠습니다.^^
* 하나하나 따라하시다가 혹시 막히는 부분이 있으면 언제든지 메일이나 연락 환영입니다!

