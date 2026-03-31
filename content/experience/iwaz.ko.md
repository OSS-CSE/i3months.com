---
title: 아이와즈
description: 웹 개발자 - 지능기술부
favicon: /images/icons/iwaz.ico
---

<img src="/images/docs/experience/iwaz/iwaz.png" alt="IWAZ" style="margin-bottom: 10px;" />

# 아이와즈

디자이너, 개발자, 기획자로 구성된 10인 팀과 협업하여 DBpia 및 관련 서비스를 개발하고 운영했습니다.

#### 기술 스택

`Java` `Spring` `Spring Boot` `Spring Batch` `Spring Security` `AWS` `Redis` `NGINX` `Elasticsearch` `MariaDB` `Tibero` `SQL Server` `jQuery` `JavaScript` `ApexChart` `Tomcat`

---

<div align="center">
  <img src="/images/docs/experience/iwaz/dbpia.jpg" alt="DBpia" width="100" style="margin: 20px 0;" />
</div>

#### 프로젝트 소개

DBpia는 학술 논문 검색 및 접근 플랫폼입니다.  
인문학, 사회과학, 공학 등 다양한 분야의 학술지와 연구 자료를 제공합니다.  
주로 대학과 연구 기관에서 구독하며 PDF 전문 접근 기능을 제공합니다.  

#### 프로젝트 상세

- 플로팅 배너를 위한 Redis 통합 및 백오피스와 DBpia 서비스를 연결하는 API 개발
- 통합 검색 기능을 위한 Elasticsearch 쿼리 및 기존 매핑 수정, 연구 논문 인덱스 재구성
- 실행 계획 분석, 데이터 재인덱싱 및 고비용 쿼리 최적화 (4481.926ms → 1111.281ms)
- DBpia 서비스 운영 – Excel 다운로드 버그 수정, PDF 다운로드 서버 관리, 장기 미사용 사용자 처리

---

<div align="center">
  <img src="/images/docs/experience/iwaz/dcmaker.png" alt="DCMaker" width="100" style="margin: 20px 0;" />
</div>

#### 프로젝트 소개

DCMaker는 DBpia에서 제공하는 연구 논문의 메타데이터를 입력하는 플랫폼입니다.  
C++와 C#로 작성된 레거시 시스템을 차세대 웹 기반 재설계를 통해 현대화했습니다.

#### 프로젝트 상세

##### 시스템 아키텍처 및 인프라

- C#과 C++로 작성된 레거시 소스 코드를 분석하고 웹 기반 시스템 설계
- 원활한 협업을 위해 Git Flow 전략 활용* 사용자 요구사항 및 시스템 프로세스 분석
- 프로젝트 구성 및 운영 설정 및 관리
- 커스텀 필터 및 인증자를 사용하여 Spring Security 구성, LDAP 기반 로그인 구현
- SQL Server 2005와의 DataSource TLS 호환성 문제 해결
- 최신 Spring Batch 버전과 SQL Server 2005 시퀀스 간의 비호환성 수정
- 인증서 및 도메인 구축, NGINX를 사용하여 개발 및 프로덕션 서버에 대한 리버스 프록시 라우팅 설정
- Windows Server에서 Tomcat 배포 및 관리, 심볼릭 링크 관련 네트워크 드라이브 권한 문제 해결
- Tomcat JVM 메모리 풀 구성 및 프로덕션 및 개발 서버에 대한 이중화 구현
- XSS, CSRF 및 민감한 데이터 마스킹을 포함한 웹 취약점 대응
- SQL Server의 Linked Server를 활용하여 다른 위치에서 저장 프로시저를 원격으로 호출

##### 연구 논문 메타데이터 생성 시스템 개발

- PDFBox를 사용하여 PDF 분할 알고리즘 개발, PDF의 논리적 페이지와 물리적 페이지 간 구별
- 레거시 C++ 배치 시스템을 Spring Batch로 리팩토링, ERP 및 DCM 서비스를 통합하여 안정성 및 처리 속도 향상
- 입력 데이터를 주기적으로 저장하기 위한 연구 논문 임시 저장 시스템 개발
- Elasticsearch를 사용하여 이메일 기반 연구 논문 저자 검색 기능 구현

##### 효율성 개선 및 서비스 최적화

- 연구 논문 생성 시스템 개편, 메타데이터 처리 시간 단축 (논문 50편 기준 30분 → 15분)
- 배치 처리 최적화, 발행 시간 단축 (3일 → 1일)
