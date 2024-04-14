---
description: Subdomain Enumeration is also known as Vertical domain.
---

# Subdomain Secrets

Vertical Enumeration, also known as Vertical Domain Correlation, involves discovering hosts located on the same root domain by exploring various levels of subdomains. This process can be automated and utilizes several techniques:

### What are we after ?

1. Passive Techniques:
   * Utilizing passive sources like Certificate Logs.
2. Active Techniques:
   * DNS brute forcing: Systematically guessing subdomains to find valid ones.
   * Generating permutations or alterations of known subdomains.
   * Scraping JavaScript or source code to uncover subdomains.
   * Discovering Virtual Hosts (VHOST) configurations.
   * Analyzing Google Analytics data for subdomain information.
   * Performing recursive enumeration to delve deeper into subdomains.
   * Probing for TLS, CSP, and CNAME records to gather subdomain data.
   * Employing regular expression (Regex) permutations to identify subdomains.
3. Web Probing:
   * Scanning for default and common ports associated with subdomains.

Using these methods, vertical enumeration can map out all the smaller areas within a main website domain, helping in gathering information and checking for possible security issues.
