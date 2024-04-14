---
description: Discovering the hidden subdomain link with the target/root Domain
---

# DNS Subdomain Discovery

## DNS Subdomain Discovery



Aiming to discover hidden subdomains associated with a target domain. This method involves appending a comprehensive list of common subdomain names to the target domain and attempting DNS resolution, with the objective of revealing valid subdomains. This process helps uncover paths and files within an application that might not be accessible through regular means.

### Why Perform Subdomain Bruteforcing?

* **Incomplete Passive DNS Data:** Passive DNS data might not cover all subdomains associated with the target.
* **New Subdomains:** Newly created subdomains may not have been crawled by internet crawlers.
* **Hidden Paths:** Subdomain bruteforcing can unveil hidden paths not accessible through conventional means.

### puredns Features:

* **Massdns Integration:** Leverages Massdns for high-speed DNS resolution.
* **Effective Wildcard Detection:** Reduces false positives by effectively detecting wildcards.
* **Validation with Trusted Resolvers:** Filters out false positives by validating results using trusted resolvers.
* **Handling SERVFAIL Errors:** Defaults to retry on SERVFAIL errors, improving result reliability.

### Steps to Use puredns:

#### 1. Install puredns and Massdns:

```bash
git clone https://github.com/blechschmidt/massdns.git
go install github.com/d3mondev/puredns/v2@latest
```

#### 2. Generate Public DNS Resolvers List:

Use `dnsvalidator` to generate a list of open public DNS resolvers.

```bash
git clone https://github.com/vortexau/dnsvalidator.git
pip3 install -r dnsvalidator/requirements.txt
pip3 install setuptools==58.2.0
dnsvalidator -tL https://public-dns.info/nameservers.txt -threads 100 -o resolvers.txt
```

#### 3. Perform Subdomain Bruteforcing:

Use puredns with the generated resolvers list.

```bash
puredns bruteforce wordlist.txt example.com -r resolvers.txt -w output.txt
```

## Puredns: Mastering Subdomain Bruteforcing

Puredns stands out as a superior tool for DNS bruteforcing, excelling in speed and accuracy. It leverages mass DNS resolution using the Massdns tool, effectively detects wildcards, and ensures result reliability through validation with trusted resolvers. This guide will walk you through the steps to harness the power of Puredns for subdomain discovery.

### Installation:

```bash
# Clone Massdns repository
git clone https://github.com/blechschmidt/massdns.git

# Install Puredns
go install github.com/d3mondev/puredns/v2@latest

# Clone dnsvalidator repository
git clone https://github.com/vortexau/dnsvalidator.git

# Install dnsvalidator dependencies
pip3 install -r dnsvalidator/requirements.txt
pip3 install setuptools==58.2.0
```

### Generating Public DNS Resolvers List:

#### Using dnsvalidator:

```bash
# Generate public DNS resolvers list
dnsvalidator -tL https://public-dns.info/nameservers.txt -threads 100 -o resolvers.txt
```

#### Downloading Pre-populated List:

Various contributors maintain a pre-populated list of valid DNS resolvers. Trickest has a consolidated repository called "resolvers."

```bash
wget https://raw.githubusercontent.com/trickest/resolvers/main/resolvers.txt
```

**Note:** Periodically update your public DNS resolvers list to ensure optimal performance.

### Performing Subdomain Bruteforcing:

#### Using Puredns:

```bash
# Brute force subdomains using Puredns
puredns bruteforce wordlist.txt example.com -r resolvers.txt -w output.txt
```

* `bruteforce`: Specifies the bruteforcing mode.
* `-r resolvers.txt`: Specifies your public resolvers.

**Note:** Puredns retries on SERVFAIL errors, enhancing result reliability compared to most tools.

### Wordlists for Subdomain Bruteforcing:

1. [Assetnote best-dns-wordlist.txt](https://github.com/assetnote/commonspeak2-wordlists/blob/master/wordlists/best-dns-wordlist.txt): Comprehensive wordlist for effective subdomain discovery.
2. [n0kovo\_subdomains\_huge.txt](https://github.com/n0k0/certspotter-scans/blob/master/subdomains/n0kovo\_subdomains\_huge.txt): Large wordlist created by scanning the entire IPv4 range.
3. [Smaller wordlist](https://github.com/six2dez/OneListForAll/blob/master/SmallSubDomains.txt): A smaller wordlist suitable for personal use.
4. [orwagodfather wordlist](https://github.com/orwagodfather/WordList) . A wordlist by orwa.

### Subdomain Wordlists:

1. **SecLists by Daniel Miessler:**
   * [SecLists](https://github.com/danielmiessler/SecLists)
   * A collection of multiple lists, including subdomain wordlists, useful for diverse applications.
2. **FuzzDB by ethicalhack3r:**
   * [FuzzDB](https://github.com/fuzzdb-project/fuzzdb)
   * While primarily a fuzzing database, it includes valuable wordlists for subdomain discovery.

Puredns, with its robust features and integration with Massdns, is a powerhouse for DNS bruteforcing. Ensure a well-curated wordlist and stay updated with the latest public DNS resolvers for optimal results in subdomain discovery.

### Additional Tools and Resources:

* [Massdns](https://github.com/blechschmidt/massdns): High-performance DNS stub resolver.
* [altdns](https://github.com/infosec-au/altdns): Generates permutations, alterations, and mutations of subdomains.
* [dnsgen](https://github.com/ProjectAnte/dnsgen): Generates domain permutations based on seed words.

### Wildcard Detection Techniques:

1. **Commonspeak Wildcard Tester:**
   * [Commonspeak Wildcard Tester](https://github.com/assetnote/commonspeak2-wordlists/blob/master/files/wildcard-detection/commonspk\_wildcard\_tester.py)
   * A Python script to test wildcard detection.
2. **Wildcard Security Implications:**
   * [Understanding Wildcard Security Implications](https://0xpatrik.com/wildcard-security-implications/)
   * An insightful article discussing the security implications of wildcard DNS records.

### Permutation and Alternative Scanning Tools:

1. **Altdns by Infosec-au:**
   * [Altdns](https://github.com/infosec-au/altdns)
   * GitHub repository for altdns, a tool to discover permutations in subdomains.

* Use tools like `altdns` and `dnsgen` for permutation/alternative scanning.
* Identify patterns in subdomains (e.g., dev, dev1) and generate alternative subdomain names.
* Combine with puredns for DNS resolution.

```bash
cat subdomains.txt | dnsgen - | puredns resolve --resolvers resolvers.txt
```

#### Generating Subdomain Permutations:

[Dnsgen](https://github.com/projectdiscovery/dnsprobe), a tool from the Project Discovery toolkit, facilitates the generation of subdomain permutations. It doesn't resolve them but creates a list of possible subdomains based on permutations and alternations.

```bash
# Generate subdomain permutations with dnsgen
cat subdomain.txt | dnsgen - > permutations.txt
```

#### Resolving Permutations with Puredns:

[Puredns](https://github.com/d3mondev/puredns), being an efficient DNS resolution tool, can be used to resolve the generated subdomain permutations.

{% code overflow="wrap" %}
```bash
# Resolve subdomain permutations with puredns
cat permutations.txt | puredns resolve --resolvers resolvers.txt -w resolved_permutations.txt
```
{% endcode %}

1. **Dnsgen by ProjectDiscovery:**
   * [Dnsgen](https://github.com/projectdiscovery/dnsprobe)
   * Part of the dnsprobe toolset, dnsgen generates permutations of subdomains.

### DNS Resolution Tools:

1. **Massdns by Blechschmidt:**
   * [Massdns](https://github.com/blechschmidt/massdns)
   * GitHub repository for massdns, used as the base tool for DNS querying in puredns.
2. **Puredns by D3mondev:**
   * [Puredns](https://github.com/d3mondev/puredns)
   * GitHub repository for puredns, a wrapper and feature-enhanced version of massdns.

### Public DNS Resolvers:

1. **DNSValidator by Vortexau:**
   * [DNSValidator](https://github.com/vortexau/dnsvalidator)
   * GitHub repository for DNSValidator, a tool to generate a list of open public DNS resolvers.
2. **Trickest Resolvers Repository:**
   * [Trickest Resolvers](https://github.com/trickest/resolvers)
   * A merged list of DNS resolvers validated every 24 hours, aggregating contributions from various sources.

#### Post-Recon Image Analysis with Exif Tools:

After reconnaissance, consider using [ExifTool](https://exiftool.org/) for image analysis. It extracts metadata from images, potentially revealing additional information.

```bash
# Install exiftool
# On Linux: sudo apt-get install libimage-exiftool-perl
# On macOS: brew install exiftool

# Analyze images with exiftool
exiftool image.jpg
```

### Issues and Solutions:

1. **Crashes on Low Specs:**
   * Use the `--wildcard-batch` flag in puredns to process subdomains in batches during wildcard filtering.
2. **Performance Impact on Home Router:**
   * Utilize the `-l` flag to limit the rate of DNS queries to public resolvers, preventing excessive traffic.

#### Overcoming Common Issues:

**1. Crashes on Low Specs (1 CPU/1GB VPS):**

If running on a low-spec VPS, memory issues may arise with large wordlists. Use the `--wildcard-batch` flag in puredns to process subdomains in batches.

```bash
# Overcome memory issues with --wildcard-batch flag
puredns bruteforce wordlist.txt example.com -r resolvers.txt -w output.txt --wildcard-batch 1000000
```

**2. Puredns Consuming Excessive Bandwidth:**

Puredns, leveraging massdns, might lead to bandwidth consumption. Mitigate this by using the `-l` flag to rate limit DNS queries to public resolvers.

```bash
# Rate limit DNS queries to avoid excessive bandwidth usage
puredns bruteforce wordlist.txt example.com -r resolvers.txt -w output.txt -l 5000
```

Adjust the values for `--wildcard-batch` and `-l` based on the available resources and network conditions to ensure efficient and reliable subdomain bruteforcing.



## Validating Web



```bash
cat subdomains.txt | httpx -random-agent -retries 2 -threads 150 -no-color -ports 81,300,591,593,832,981,1010,1311,1099,2082,2095,2096,2480,3000,3128,3333,4243,4567,4711,4712,4993,5000,5104,5108,5280,5281,5601,5800,6543,7000,7001,7396,7474,8000,8001,8008,8014,8042,8060,8069,8080,8081,8083,8088,8090,8091,8095,8118,8123,8172,8181,8222,8243,8280,8281,8333,8337,8443,8500,8834,8880,8888,8983,9000,9001,9043,9060,9080,9090,9091,9200,9443,9502,9800,9981,10000,10250,11371,12443,15672,16080,17778,18091,18092,20720,32000,55440,55672 -o output.txt
```

Explanation:

* `cat subdomains.txt`: Reads the list of subdomains from the file "subdomains.txt."
* `httpx`: The tool used for web probing.
* `-random-agent`: Sends random User-Agent headers to mimic different browsers, making it more challenging for the target to identify automated requests.
* `-retries 2`: Specifies the number of retries for failed requests. Useful for dealing with intermittent network issues.
* `-threads 150`: Sets the number of threads for concurrent probing. Higher thread count can increase the speed of the scanning process.
* `-no-color`: Disables colorized output. Useful when saving results to a file or for better readability in certain environments.
* `-ports`: Specifies a list of ports to check for each subdomain. This allows for a more extensive examination, as different services may run on different ports.
* `-o output.txt`: Saves the results to a file named "output.txt." It's good practice to save the output for later analysis and reporting.
