---
description: 'Before we start a comprehensive enumeration, we need a few key things:'
---

# Prerequisites



1. **API Keys for Passive DNS Data:**
   * Passive DNS data involves recording DNS queries made to DNS resolvers, revealing associations between domains and specific DNS records.
   * Various services and companies maintain databases of this historical DNS data, helping us identify subdomains of a particular root domain.
   * Two types of services: those allowing free queries and others requiring API keys for authorization.
   * Obtaining API keys can be challenging due to limitations like short validity periods, query quotas, and limited results.
2. **100% Accurate Open Public DNS Resolvers:**
   * DNS resolvers translate domain names into IP addresses.
   * Tools like MassDNS require a list of public DNS resolvers to check the validity of domains during enumeration.
   * Dnsvalidator is a tool that verifies and generates a valid list of open public DNS resolvers.
   * There are around 28.7K public resolvers, but not all may work; hence, dnsvalidator helps filter out the valid ones.
   * Alternatively, one can rely on periodically verified lists of DNS resolvers provided by security researchers.
3. **A VPS (Virtual Private Server):**
   * A VPS is a dedicated virtual machine in the cloud, offering higher bandwidth and better DNS resolution capabilities compared to a local router.
   * Essential for bandwidth-intensive tasks like DNS resolution and brute-forcing, which might disrupt a local Wi-Fi network.
   * Enables 24/7 operations, unlike a local system, and various cloud providers offer free credits for signing up.
     * [Digital Ocean](https://www.digitalocean.com/)
     * [Linode](https://www.linode.com/)
     * [Vultr](https://www.vultr.com/)

