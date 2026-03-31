---
title: IWAZ
description: Web Developer - Intelligent Technology Department
favicon: /images/icons/iwaz.ico
---

<img src="/images/docs/experience/iwaz/iwaz.png" alt="IWAZ" style="margin-bottom: 10px;" />

# IWAZ

Collaborated with a 10-member team of designers, developers, and planners to develop and operate DBpia and its related services.

#### Tech Stack

`Java` `Spring` `Spring Boot` `Spring Batch` `Spring Security` `AWS` `Redis` `NGINX` `Elasticsearch` `MariaDB` `Tibero` `SQL Server` `jQuery` `JavaScript` `ApexChart` `Tomcat`

---

<div align="center">
  <img src="/images/docs/experience/iwaz/dbpia.jpg" alt="DBpia" width="100" style="margin: 20px 0;" />
</div>

#### Project Introduction

**DBpia** is Korea's leading academic paper search and access platform.  
It provides academic journals and research materials across various fields including humanities, social sciences, and engineering.  
Primarily subscribed by universities and research institutions, it offers PDF full-text access.  
DBpia is the most widely used academic database for finding reliable research materials.

#### Project Details

- **Integrated Redis** for floating banners and developed APIs to connect the back office with the DBpia service
- **Modified Elasticsearch queries** and existing mappings for the unified search feature, restructured the research paper index
- **Analyzed execution plans**, reindexed data, and optimized high-cost queries (4481.926ms → 1111.281ms)
- **Maintained DBpia service operations** – Fixed Excel download bugs, managed the PDF download server, and handled long-term inactive users

---

<div align="center">
  <img src="/images/docs/experience/iwaz/dcmaker.png" alt="DCMaker" width="100" style="margin: 20px 0;" />
</div>

#### Project Introduction

**DCMaker** is a platform for inputting metadata of research papers served on DBpia.  
Originally developed using C++ and C#, the system was modernized through a next-generation web-based redesign.

#### Project Details

##### System Architecture & Infrastructure

- **Analyzed legacy source code** written in C# and C++ and designed a new web-based system
- **Utilized Git Flow strategy** for seamless collaboration, analyzed user requirements and system processes
- **Set up and managed** project configurations and operations
- **Configured Spring Security** with custom filters and authenticators, implemented LDAP-based login
- **Resolved DataSource TLS compatibility** issue with SQL Server 2005
- **Fixed incompatibility** between the latest Spring Batch version and SQL Server 2005 sequences
- **Established certificates and domains**, set up reverse proxy routing for development and production servers using NGINX
- **Deployed and managed Tomcat** on Windows Server, resolved symbolic link-related network drive permission issues
- **Configured Tomcat JVM memory pool** and implemented redundancy for production and development servers
- **Handled penetration testing issues**, including XSS, CSRF, and sensitive data masking
- **Utilized SQL Server's Linked Server** to remotely call stored procedures from different locations

##### Research Paper Metadata Production System Development

- **Developed a PDF splitting algorithm** using PDFBox, ensuring differentiation between logical and physical pages in PDF
- **Refactored a legacy C++ batch system** into Spring Batch, integrating ERP and DCM services to enhance stability and processing speed
- **Developed a temporary storage system** for research papers to periodically save input data
- **Implemented an email-based research paper author search feature** using Elasticsearch

##### Efficiency Improvements & Service Optimization

- **Revamped the research paper production system**, reducing metadata processing time (30 min → 15 min for 50 papers)
- **Optimized batch processing**, cutting publication time (3 days → 1 day)
