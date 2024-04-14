---
description: Analyzing JavaScript files for paths and routes is crucial in
---

# JavaScript Analytics

## &#x20;JavaScript Analytics with GAP in Burp Suite

Analyzing JavaScript files for paths and routes is crucial in web security testing. Xnl, an adept developer, has introduced GAP, a Burp extension that significantly enhances this process.

#### 1. **Introduction to GAP:**

* **GAP GitHub Repository:** [Explore GAP](https://github.com/xnl-h4ck3r/GAP)

#### 2. **Accessing GAP:**

* Easily install GAP as a Burp extension by following the [installation instructions](https://github.com/xnl-h4ck3r/GAP#installation).

#### 3. **Scope-Based Extraction:**

* Efficiently extract data from JavaScript files within a specific scope using GAP.
*   Example command for scope-based extraction:

    ```bash
    gap_cmd --scope https://example.com
    ```

#### 4. **Comprehensive Information Extraction:**

* GAP excels in extracting data not only from standalone JavaScript files but also from inline JavaScript within the analyzed scope.

#### 5. **Benefits of Using GAP:**

* **Streamlined Workflow:** Follow the [GAP Workflow](https://github.com/xnl-h4ck3r/GAP#workflow) for an organized and efficient process.
* **Holistic Analysis:** Extract valuable insights from both standalone and inline JavaScript sources.

#### 6. **Enhanced JavaScript Analytics:**

* Uncover security vulnerabilities, discover hidden paths, and identify crucial parameters with GAP.
* Conduct thorough analysis of JavaScript files to ensure a comprehensive security assessment.

#### 7. **Integration with Burp:**

* GAP seamlessly integrates with Burp Suite, enhancing its capabilities in JavaScript analysis.

#### 8. **Maximizing Security Testing Impact:**

* Identify potential security loopholes and injection points in JavaScript code.
* Ensure no paths go unnoticed during manual testing with GAP.



## JavaScript Audit with Metasec.js

[@lewisarden](https://twitter.com/lewisarden) has developed Metasec.js, a powerful tool for scanning and auditing JavaScript files. This tool utilizes static source code security analysis engines, including:

1. **npm-audit:**
   * npm audit is a tool that performs a security audit on a package, flagging any vulnerabilities found in its dependencies.
2. **yarn-audit:**
   * Similar to npm audit, yarn audit checks for security vulnerabilities in JavaScript dependencies when using the Yarn package manager.
3. **semgrep:**
   * Semgrep is a fast, open-source, static analysis tool for finding bugs and enforcing code standards. It is used by Metasec.js to identify secrets and JavaScript security issues.

#### Using Metasec.js:

1. **Download Metasec.js:**
   * Find Metasec.js on its [GitHub repository](https://github.com/lewisarden/metasec.js) and download it.
2. **Install Dependencies:**
   *   Ensure you have Node.js installed, then run the following command in the Metasec.js directory:

       ```bash
       npm install
       ```
3. **Run Metasec.js:**
   *   Execute Metasec.js on a downloaded JavaScript file:

       ```bash
       node metasec.js your_file.js
       ```

#### How Metasec.js Works:

Metasec.js leverages npm-audit and yarn-audit to perform dependency checks and uses semgrep to identify secrets and potential security issues in the JavaScript code.

#### Benefits of Metasec.js:

* **Holistic Security Analysis:** Metasec.js provides a comprehensive approach by combining checks from npm, yarn, and semgrep.
* **Dependency Vulnerability Detection:** npm-audit and yarn-audit help identify vulnerabilities in the project's dependencies.
* **Static Code Analysis:** Semgrep performs static analysis on the source code, flagging potential security issues and secrets.
* **Easy Integration:** Metasec.js can be easily integrated into your JavaScript security testing toolkit.



## Unleashing the Power of Gospider: Subdomain Discovery with JS Files

### A Comprehensive Guide to Harnessing Gospider for Subdomain Enumeration

#### Step 1: Web Probing Subdomains

**1.1 Web Probe Subdomains:**

```bash
cat subdomains.txt | httpx -random-agent -retries 2 -no-color -o probed_tmp_scrap.txt
```

* `cat`: Concatenate and display the content of subdomains.txt.
* `httpx`: Web probe tool to check the availability of subdomains.
* `-random-agent`: Use a random user agent for each request.
* `-retries 2`: Retry failed requests up to 2 times.
* `-no-color`: Disable colorized output.
* `-o probed_tmp_scrap.txt`: Save the probed subdomains to a temporary file.

**1.2 Crawl with Gospider:**

```bash
gospider -S probed_tmp_scrap.txt --js -t 50 -d 3 --sitemap --robots -w -r > gospider.txt
```

_Options:_

* `-S`: Input from the web-probed subdomains.
* `--js`: Extract links from JavaScript files.
* `-t`: Number of threads (run sites in parallel).
* `-d`: Depth (scrape links from second-level JS files).
* `--sitemap`: Crawl sitemap.xml.
* `--robots`: Crawl robots.txt.
* `-w`: Save results to files.
* `-r`: Include the raw content of JS files in the output.

**1.3 Handling URL Length:**

```bash
sed -i '/^.\{2048\}./d' gospider.txt
```

* `sed`: Stream editor for filtering and transforming text.
* `'/^.\{2048\}./d'`: Delete lines exceeding 2048 characters in length.

#### Step 2: Extracting Subdomains

**2.1 Extract Subdomains:**

```bash
cat gospider.txt | grep -Eo 'https?://[^ ]+' | sed 's/]$//' | unfurl -u domains | grep ".example.com$" | sort -u > scrap_subs.txt
```

_Breakdown:_

* `grep`: Extract links starting with http/https.
* `sed`: Remove " ] " at the end of the line.
* `unfurl`: Extract domain/subdomain from the URLs.
* `grep`: Select subdomains of the target.
* `sort`: Avoid duplicates.

#### Step 3: Resolving Subdomains

**3.1 DNS Resolve and Check Valid Subdomains:**

```bash
puredns resolve scrap_subs.txt -w scrap_subs_resolved.txt -r resolvers.txt
```

* `puredns`: A tool for DNS resolution and subdomain discovery.
* `resolve`: Subcommand for resolving subdomains.
* `scrap_subs.txt`: Input file containing subdomains.
* `-w scrap_subs_resolved.txt`: Output file to save resolved subdomains.
* `-r resolvers.txt`: File containing DNS resolvers.

This technique not only discovers subdomains but also provides an opportunity to find hidden Amazon S3 buckets. Ensure to leverage the output by further examining with tools like secretfinder to uncover hidden secrets and exposed API tokens. 🌐🔍

JavaScript files are used by modern web applications to provide dynamic content that contains various functions & events. Each website includes JS files and is a great resource for finding those internal subdomains used by the organization.

[Gospider](https://github.com/jaeles-project/gospider) is a fast web spidering tool capable of crawling the whole website within a short amount of time. This means Gospider will visit/scrap each and every URL mentioned in the JS file and source code. Since source code & JS files make up a website, they may contain links to other subdomains too.

This process is divided into 3⃣ steps:

1.  **Web Probing Subdomains:**

    * Web probe all the subdomains gathered so far using [httpx](https://github.com/projectdiscovery/httpx).

    ```bash
    cat subdomains.txt | httpx -random-agent -retries 2 -no-color -o probed_tmp_scrap.txt
    ```

    * Send the probed URLs for crawling to Gospider.

    ```bash
    gospider -S probed_tmp_scrap.txt --js -t 50 -d 3 --sitemap --robots -w -r > gospider.txt
    ```

    * Remove lines with URLs exceeding 2048 characters.

    ```bash
    sed -i '/^.\{2048\}./d' gospider.txt
    ```
2.  **Extracting Subdomains:**

    * Extract subdomains from the Gospider output using [unfurl](https://github.com/tomnomnom/unfurl).

    ```bash
    cat gospider.txt | grep -Eo 'https?://[^ ]+' | sed 's/]$//' | unfurl -u domains | grep ".example.com$" | sort -u > scrap_subs.txt
    ```
3.  **Resolving Subdomains:**

    * DNS resolve and check for valid subdomains using [puredns](https://github.com/d3mondev/puredns).

    ```bash
    puredns resolve scrap_subs.txt -w scrap_subs_resolved.txt -r resolvers.txt
    ```

This technique not only finds subdomains but also identifies hidden Amazon S3 buckets. The output can be further analyzed with tools like secretfinder to uncover hidden secrets and exposed API tokens.
