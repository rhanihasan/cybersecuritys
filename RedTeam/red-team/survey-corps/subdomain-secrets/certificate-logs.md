# Certificate Logs

**SSL/TLS Certificates:** SSL/TLS certificates are security measures that websites use to transition from "HTTP" to the more secure "HTTPS." These certificates, trusted by both the domain and its clients, encrypt communications. To obtain an SSL/TLS certificate, one needs to request it from a Certificate Authority (CA).

[**Certificate Transparency logs**](https://certificate.transparency.dev/) **:** Before 2013, CAs faced breaches that allowed malicious creation of forged certificates. Google's solution was Certificate Transparency logs, a central repository for all issued certificates. This transparency helps prevent fraudulent certificate issuance, ensuring domain owners can spot unauthorized certificates.

**Abusing CT Logs:** CT logs can be abused to enumerate subdomains with associated TLS certificates. Tools like CTFR leverage Certificate Transparency logs to query and retrieve subdomains for a target domain.

### [**CTFR**](https://github.com/UnaPibaGeek/ctfr) **Tool:**

* A Python-based tool, CTFR queries crt.sh and retrieves subdomains.
*   Example:

    ```bash
    git clone https://github.com/UnaPibaGeek/ctfr.git
    pip3 install -r requirements.txt
    python3 ctfr.py -d target.com -o output.txt
    ```

### [**Crt sh**](https://crt.sh/)[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#crt-sh) <a href="#toc142346654" id="toc142346654"></a>

* **It searches through the certificate fingerprint and domain name**

![cet-sh-results](<../../../.gitbook/assets/crt (1).sh>)

* **These three certs might be belonged to netplace**
* **The operator of the certificate is google and Cloudflare**
* [**tls.bufferover.run**](https://tls.bufferover.run/) **Service:**
  * Scans the IPv4 address space and extracts data from TLS certificates, including the "Subject" field.
  * The "CommonName (CN)" component in the Subject field indicates the Fully Qualified Domain Name (FQDN) of the host, helping identify subdomains.
  * An API key is required to query this service.
  *   Example:

      ```bash
      curl 'https://tls.bufferover.run/dns?q=.dell.com' -H 'x-api-key: YOUR_API_KEY' | jq -r .Results[] | cut -d ',' -f5 | grep -F ".dell.com" | sort -u > output.txt
      ```

### [Domain Collector](https://github.com/Cyber-Guy1/domainCollector)

* A simple tool to gather domain using Crh.sh.

### TLS, CSP,CNAME, Probing



**Understanding Website Security and Subdomain Discovery:**

Nowadays, most websites use HTTPS (HyperText Transfer Protocol Secure) for secure communication. To enable HTTPS, website owners issue SSL (Secure Socket Layer) or TLS (Transport Layer Security) certificates. These certificates contain hostnames belonging to the same organization. You can view the TLS/SSL certificate of a website by clicking on the "Lock🔒" button in the address bar.

<figure><img src="../../../.gitbook/assets/SSL certification dns check" alt=""><figcaption></figcaption></figure>

#### 1. Discovering Subdomains with Cero:

*   To find subdomains listed in a TLS certificate, use the tool Cero:

    ```bash
    go install github.com/glebarez/cero@latest
    cero sni.cloudflaressl.com | sed 's/^*.//' | grep -e "\." | sort -u
    ```

#### 2. Extracting Subdomains from CSP Headers:

*   To discover subdomains from CSP headers, follow these steps:

    ```bash
    cat subdomains.txt | httpx -csp-probe -status-code -retries 2 -no-color | anew csp_probed.txt | cut -d ' ' -f1 | unfurl -u domains | anew -q csp_subdomains.txt
    ```

    * This extracts domains/subdomains from the CSP headers of websites, which can be useful for security.

#### 3. Probing CNAMEs of Subdomains:

*   In some cases, visiting the CNAME of a website may bypass the firewall. To probe CNAMEs of discovered subdomains, use dnsx:

    ```bash
    dnsx -retry 3 -cname -l subdomains.txt
    ```

    * This step helps ensure a comprehensive understanding of the website's infrastructure.



***



