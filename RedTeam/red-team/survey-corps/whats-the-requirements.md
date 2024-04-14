# What's the Requirements ?🤔

## Information Gathering. <a href="#information-garthing" id="information-garthing"></a>

#### What & Why Information Gathering[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#what--why-information-gathering) <a href="#toc142346638" id="toc142346638"></a>

* **Information Gathering means collecting the information for whatever means necessary.**
* **It is a crucial phase in Hacking... Information helps the tester to know about the entities and fascilable planning to test the security.**
* **The information mostly gathers form websites for the entities**

### Assets Discovery[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#assets-discovery) <a href="#toc142346639" id="toc142346639"></a>

#### What Is Assets Discovery ?[_​_](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#what-is-assets-discovery-) <a href="#what-is-asset-discovery" id="what-is-asset-discovery"></a>

**As a person will be the target then collect information of target with the people the target meet. The victim asset means what is has an assets.**

**It makes the attack path increased.**

### Enumeration[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#enumeration) <a href="#toc142346641" id="toc142346641"></a>

* **After validation when the information is dug up is called enumerations**

### What are we after ?

> APEX Domain -> www.<mark style="color:blue;">example.com</mark> -> rhanihasan.<mark style="color:blue;">gitbook.io</mark>
>
> > For every Domain the chance increased by 4X of hacking the target.
>
> SubDomain -> <mark style="color:blue;">www.</mark>example.com -> <mark style="color:blue;">rhanihasan.</mark>gitbook.io
>
> > For every subdomain the chance increased by 2X of hacking the target.
>
> Acquisition's & Shares
>
> IP Address
>
> Services
>
> Tech Intel

#### Domain[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#domain) <a href="#toc142346642" id="toc142346642"></a>

**A domain name is a unique address for a website that can be acquired. Usually, it consists of a website name and a domain name extension.**

#### Types of Domain[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#types-of-domain) <a href="#toc142346643" id="toc142346643"></a>

* **Horizontal Domain**
* **Vertical Domain**

![Domain-vertical-horizontal](<../../.gitbook/assets/0 (2).png>)

#### Horizontal Enumeration[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#horizontal-enumeration) <a href="#toc142346644" id="toc142346644"></a>

* **During a security assessment, our main aim is to find and list all the main websites owned by a single entity.**

#### _Vertical Enumeration_[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#vertical-enumeration) <a href="#toc142346646" id="toc142346646"></a>

* **Vertical enumeration, or vertical domain correlation, is the process of discovering and connecting related websites that belong to the same organization or entity.**
* **Vertical Enumeration can be performed with the help of below methods. Which is**

### Passive Information gathering.[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#passive-information-gathering) <a href="#toc142346647" id="toc142346647"></a>

* **Passive information gathering is based on other with whatever is asked**

{% hint style="info" %}
**Don’t trust the passive information because it is available to others for some logical reasons.**
{% endhint %}

#### What is subdomain enumeration?[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#what-is-subdomain-enumeration) <a href="#toc142346648" id="toc142346648"></a>

* **Subdomain enumeration is a crucial step in understanding the structure of a website. It involves finding and identifying smaller sections within a larger website. To put it simply, it's like exploring different sections or pages that are part of a main website. Subdomain Enumeration is a process of finding sub-domains associated to the root domain.**
* &#x20;**According to** [RFC 1034](https://tools.ietf.org/html/rfc1034),

> **"a domain is a subdomain of another domain if it is contained within that domain".**

![understanding-level-of-domain](<../../.gitbook/assets/2 (2).png>)

> **the More the subdomains = the More assets to look for vulnerabilities**

### FQND[​](https://rhanihasan.github.io/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic%20Enum,%20Info%20Gathering%20&%20Vulnerability%20Assessment#fqnd) <a href="#toc142346649" id="toc142346649"></a>

* **A Fully Qualified Domain Name (FQDN) is the complete domain name for a specific computer, or host, on the internet.**
* **An FQDN looks like this: -**

> **myhost.example.com. ----> Fully Qualified Domain Name myhost ----> is the host located within the domain example.com (subdomain)**

### A Mis concept for me in Subdomain

* **"Subdomain"** is a term often misunderstood.
* It refers to a specific computer or host within a larger domain.&#x20;
* For example, **rhanihasan.gitbook.io** is a subdomain of **gitbook.io** Some people mistakenly think that any link to a web application hosted on a specific host is a subdomain, but this is not the case.
* For instance, if **rhanihasan.gitbook.io** \` does not have a web service hosted on it, sending web probes to it will not return any output.&#x20;
* However, **rhanihasan.gitbook.io** is still a valid subdomain of **gitbook.io**, and it may have other non-web services hosted on it, such as SSH or SMTP, which could be vulnerable to exploits.
* When collecting subdomains, it's important to first DNS resolve them using tools like amass or subfinder, [shuffledns](https://github.com/projectdiscovery/shuffledns) , [puredns](https://github.com/d3mondev/puredns)  rather than directly sending them to web probing tools like **httpx & httprobe**. This ensures that you are only focusing on valid and active subdomains.





