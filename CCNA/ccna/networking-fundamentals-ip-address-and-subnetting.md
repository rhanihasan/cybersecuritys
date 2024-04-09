---
description: >-
  IP addresses are normally expressed in dotted-decimal format, with four
  numbers separated by periods,
cover: ../.gitbook/assets/IP Address CCNA Cover.png
coverY: 0
layout:
  cover:
    visible: true
    size: hero
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Networking Fundamentals IP Address And Subnetting

***

## IP Address & Subnetting

### **IP & MAC**

* <mark style="color:orange;">**Internet Protocols.**</mark>
* **Internet Assigned Number Authority.**
* _IP Address is a Network Identity._
* It's an ID in the network.
* <mark style="color:orange;">**Media Access Control Address**</mark>** (MAC)** is a Device Identity.

> Devices need to find each other on a **network** to establish communications. These devices use **`unique addresses`**, or **`identifiers`**, to locate each other. These addresses ensure that communication happens with the right device. These are called **IP and MAC addresses**.

> **Example of IP and MAC:** A company gives you an **ID card** called an **IP address. the personal identity is called a MAC address**. The company hires you based on your MAC address, and then you get an IP address.

#### **IP Address Versions**

* IP Address has **IPv4 and IPv6 versions.**
* IPv4 is made of 4 blocks, each block holds 8 bits.
* IPv4 only uses decimal numbers.
* IPv6 was introduced due to IPv4 shortages.
* IPv6 is made of 8 blocks, each block holds 16 bits.
* IPv6 uses hexadecimal numbers.

**IP stands for Internet Protocol.**

IP addresses were created and assigned by the IANA Organization (Internet Assigned Numbers Authority). They provide addresses that control access.

**Versions:**

* IPv1
* IPv2
* IPv3
* IPv4 & IPv6 are successful and working.

<mark style="color:orange;">**IANA**</mark> is responsible for distributing IP addresses globally.

#### **IP Address Classes**

| Class   | Range                       | Details                      |
| ------- | --------------------------- | ---------------------------- |
| Class A | 1.0.0.0 - 126.255.255.255   | Used By ISP & its Public IP  |
|         | 127.0.0.1                   | NIC Card check (Loopback)    |
| Class B | 128.0.0.0 - 191.255.255.255 | Used By ISP & its Public IP  |
| Class C | 192.0.0.0 - 223.255.255.255 | Used By ISP & its Public IP  |
| Class D | 224.0.0.0 - 239.255.255.255 | Network Device Communication |
| Class E | 240.0.0.0 - 255.255.255.255 | Research Centers             |

* Address range: <mark style="color:orange;">**`0-255.0-255.0-255.0-255.`**</mark>
* Dynamic combination.
* First & last part should not be zero.
* **ISPs (Internet Service Provider)** can use Class **A, B, or C.**
* Last number zero indicates network.
* One IP can maintain 65,535 devices (connection & port numbers).

#### **Types of IP Address**

1. **Public:** Used on the internet. No simultaneous identical IP and port for two machines.
2. **Private:** Used in LAN. Different LANs can have the same IPs. Machines in LAN can't access the web.

### **NAT (Network Address Translation)**

Converting private IP addresses into public IP addresses. Private IP addresses work under LAN but need NAT to access WAN.

{% hint style="info" %}
Due to increased electronic devices, IP address shortage led IANA to introduce Private Addresses with NAT.
{% endhint %}

{% hint style="info" %}
&#x20;<mark style="color:orange;">**PIX Engineer**</mark> Created NAT Which was Network Translation Inc. & Cisco Buy PIX and come up with PIX ASA Adaptive Security Appliance
{% endhint %}

<figure><img src="../.gitbook/assets/basicnat.jpg" alt=""><figcaption><p><strong>PIX Figure of NAT</strong> </p></figcaption></figure>

#### **Private IP Address IPv4**

<table><thead><tr><th>Class</th><th width="191">Range</th><th>Hosts</th></tr></thead><tbody><tr><td>Class A</td><td>10.0.0.0 - 10.255.255.255</td><td>16,777,216 IP addresses</td></tr><tr><td>Class B</td><td>172.16.0.0 -172.32.255.255</td><td>1,948,576 IP addresses</td></tr><tr><td>Class C</td><td>192.168.0.0 - 192.168.255.255</td><td>65,536 IP addresses</td></tr></tbody></table>

> These are private addresses for local network use. They can't access the internet directly. <mark style="color:orange;">**Private IPs**</mark> are converted to public for internet access.

#### **Dig up IP Address**

* IPv4 is divided into 4 parts, <mark style="color:orange;">**`0-255.0-255.0-255.0-255.`**</mark>
* Each part has **8 bits.**
* IPv4 has a total of **32 bits.**
* Each part ranges from **0-255.**
* IP can't start or end with **0** but can have **0** in other places.
* IP ending with **0** represents the network.

***

### **Subnet**

#### **What & Why Subnet**

* Subnetting divides **big networks.**
* Subnetting controls **IP addresses.**
* **Subnets are the bits within an IP address.**

> **Example:** 192.168.1.0 has a subnet mask of 255.255.255.0, which provides 65,536 IP addresses as free addresses in LANs.

<figure><img src="../.gitbook/assets/Subnetbasic.png" alt=""><figcaption><p><strong>Binary to Subnet Conversation</strong></p></figcaption></figure>

#### **What & Why Subnetting**

* **Subnetting** involves dividing subnets.
* Network bits are fixed and cannot be changed.
* <mark style="color:orange;">Host bits are changeable.</mark>

#### Example:

* **Class A:** 10.0.0.0
  * Network bits: 10
  * Host bits: 0.0.0. (32 - 8 = 24 host bits)
  * Class A 10.0.0.0 has 8 network bits and 24 host bits.
* **Class B:** 172.16.0.0
  * Network bits: 172.16
  * Host bits: 0.0. (32 - 16 = 16 host bits)
  * Class B 172.16.0.0 has 16 network bits and 16 host bits.
* **Class C:** 192.168.1.0
  * Network bits: 192.168.1
  * Host bits: 0. (32 - 24 = 8 host bits)
  * Class C 192.168.1.0 has 24 network bits and 8 host bits.

### **Formula for Subnet Mask Calculation**

|  N  | 2^n |
| :-: | :-: |
|  0  |  1  |
|  1  |  2  |
|  2  |  4  |
|  3  |  8  |
|  4  |  16 |
|  5  |  32 |
|  6  |  64 |
|  7  | 128 |

> <mark style="color:orange;">**N = 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255**</mark>

#### **Network Bits and Host Bits for Each IP Class:**

**Class A**

<table><thead><tr><th width="164" align="center">10.</th><th width="156" align="center">0.</th><th width="171" align="center">0.</th><th align="center">.0</th></tr></thead><tbody><tr><td align="center">128+64+32+16+8+4+2+1</td><td align="center">128,64,32,16,8,4,2,1</td><td align="center">128,64,32,16,8,4,2,1</td><td align="center">128,64,32,16,8,4,2,1</td></tr><tr><td align="center">255</td><td align="center">0</td><td align="center">0</td><td align="center">0</td></tr><tr><td align="center">Network Bits</td><td align="center">Host Bits</td><td align="center">Host Bits</td><td align="center">Host Bits</td></tr></tbody></table>

**Class B**

<table><thead><tr><th width="168" align="center">172.</th><th width="144" align="center">16.</th><th width="136" align="center">0.</th><th align="center">.0</th></tr></thead><tbody><tr><td align="center">128+64+32+16+8+4+2+1</td><td align="center">128+64+32+16+8+4+2+1</td><td align="center">128,64,32,16,8,4,2,1</td><td align="center">128,64,32,16,8,4,2,1</td></tr><tr><td align="center">255</td><td align="center">255</td><td align="center">0</td><td align="center">0</td></tr><tr><td align="center">Network Bits</td><td align="center">Network Bits</td><td align="center">Host Bits</td><td align="center">Host Bits</td></tr></tbody></table>

**Class C**

<table><thead><tr><th align="center">192</th><th align="center">168.</th><th width="129" align="center">1.</th><th align="center">.0</th></tr></thead><tbody><tr><td align="center">128+64+32+16+8+4+2+1</td><td align="center">128+64+32+16+8+4+2+1</td><td align="center">128+64+32+16+8+4+2+1</td><td align="center">128,64,32,16,8,4,2,1</td></tr><tr><td align="center">255</td><td align="center">255</td><td align="center">255</td><td align="center">0</td></tr><tr><td align="center">Network Bits</td><td align="center">Network Bits</td><td align="center">Network Bits</td><td align="center">Host Bits</td></tr></tbody></table>

<figure><img src="../.gitbook/assets/subnetrange.png" alt=""><figcaption><p><strong>Subnetting..</strong></p></figcaption></figure>

### **Subnet Address**

<table><thead><tr><th width="118" align="center">Number/</th><th width="127" align="center">Range</th><th align="center">Details</th></tr></thead><tbody><tr><td align="center">/8</td><td align="center">255.0.0.0</td><td align="center">Default of Class A Network ID</td></tr><tr><td align="center">/9</td><td align="center">255.128.0.0</td><td align="center"></td></tr><tr><td align="center">/10</td><td align="center">255.192.0.0</td><td align="center"></td></tr><tr><td align="center">/11</td><td align="center">255.224.0.0</td><td align="center"></td></tr><tr><td align="center">/12</td><td align="center">255.240.0.0</td><td align="center"></td></tr><tr><td align="center">/13</td><td align="center">255.248.0.0</td><td align="center"></td></tr><tr><td align="center">/14</td><td align="center">255.252.0.0</td><td align="center"></td></tr><tr><td align="center">/15</td><td align="center">255.254.0.0</td><td align="center"></td></tr><tr><td align="center">/16</td><td align="center">255.255.0.0</td><td align="center">Default of Class B Network ID</td></tr><tr><td align="center">/17</td><td align="center">255.255.128.0</td><td align="center"></td></tr><tr><td align="center">/18</td><td align="center">255.255.192.0</td><td align="center"></td></tr><tr><td align="center">/19</td><td align="center">255.255.224.0</td><td align="center"></td></tr><tr><td align="center">/20</td><td align="center">255.255.240.0</td><td align="center"></td></tr><tr><td align="center">/21</td><td align="center">255.255.248.0</td><td align="center"></td></tr><tr><td align="center">/22</td><td align="center">255.255.252.0</td><td align="center"></td></tr><tr><td align="center">/23</td><td align="center">255.255.254.0</td><td align="center"></td></tr><tr><td align="center">/24</td><td align="center">255.255.255.0</td><td align="center">Default of Class C Network ID</td></tr><tr><td align="center">/25</td><td align="center">255.255.255.128</td><td align="center"></td></tr><tr><td align="center">/26</td><td align="center">255.255.255.192</td><td align="center"></td></tr><tr><td align="center">/27</td><td align="center">255.255.255.224</td><td align="center"></td></tr><tr><td align="center">/28</td><td align="center">255.255.255.240</td><td align="center"></td></tr><tr><td align="center">/29</td><td align="center">255.255.255.248</td><td align="center"></td></tr><tr><td align="center">/30</td><td align="center">255.255.255.252</td><td align="center"></td></tr><tr><td align="center">/31</td><td align="center">255.255.255.254</td><td align="center"></td></tr><tr><td align="center">/32</td><td align="center">255.255.255.255</td><td align="center">Default Universal Broadcast ID</td></tr></tbody></table>

#### **Formula for Subnet Mask**

> **Class A** <mark style="color:orange;">**10.0.0.0 has 8 Network Bits and 24 Host Bits.**</mark> Host Bits (24) – Total Subnet = Converted Host Bits. Network Bits (8) + Converted Host Bits = Subnet Mask.

**Class B** <mark style="color:orange;">**172.16.0.0 has 16 Network Bits and 16 Host Bits.**</mark> Host Bits (16) – Total Subnet = Converted Host Bits. Network Bits (16) + Converted Host Bits = Subnet Mask.

**Class C** <mark style="color:orange;">**192.0.0.0 has 24 Network Bits and 8 Host Bits.**</mark> Host Bits (8) – Total Subnet = Converted Host Bits. Network Bits (24) + Converted Host Bits = Subnet Mask.

### **FLSM (Fixed Length Subnet Mask)**

#### **What & Why FLSM**

* FLSM stands for Fixed Length Subnet Mask.
* Its subnet size can't be changed; also known as Fixed Size.
* FLSM means a large IP can be divided into an equal number of smaller networks. For example, the network can be divided into 4 subnets, each with 40 IPs.

### **VLSM (Variable Length Subnet Mask)**

#### **What & Why VLSM**

* VLSM stands for Variable Length Subnet Mask.
* VLSM allows us to allocate IPs according to our needs.

We start from the networks with the highest requirement.

<table data-full-width="true"><thead><tr><th width="125">Required IPs</th><th>Default Subnet Mask</th><th>Network Bits</th><th>Host Bits</th><th width="119">Usable IPs</th><th>Subnet Mask (Bit Count)</th><th>Subnet Mask</th><th>IP Range</th></tr></thead><tbody><tr><td>40</td><td>255.255.255.0</td><td>24</td><td>8</td><td>62</td><td>8 - 6 = 2 (Subnet /26)</td><td>255.255.255.192</td><td>192.168.1.0 - 192.168.1.63</td></tr><tr><td>30</td><td>255.255.255.0</td><td>24</td><td>8</td><td>30</td><td>8 - 5 = 3 (Subnet /27)</td><td>255.255.255.224</td><td>192.168.1.64 - 192.168.1.95</td></tr><tr><td>20</td><td>255.255.255.0</td><td>24</td><td>8</td><td>14</td><td>8 - 4 = 4 (Subnet /28)</td><td>255.255.255.240</td><td>192.168.1.96 - 192.168.1.111</td></tr></tbody></table>

#### **Example Binary Representation**

<table data-full-width="false"><thead><tr><th width="88">128</th><th width="60">64</th><th width="74">32</th><th width="66">16</th><th width="63">8</th><th width="59">4</th><th width="72">2</th><th>1</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table>

***

### **Format of an IPv4 Packet**

#### **Format of an IP Version 4: The Header & the Data**

<figure><img src="../.gitbook/assets/ipv4header.png" alt=""><figcaption><p><strong>Internet Protocol Address Version 4 Packet.</strong></p></figcaption></figure>

* The size of the <mark style="color:orange;">IP header</mark> ranges from **20 to 60 bytes.**
* The header includes the IP routing information that devices use to direct the packet.
* The length of the data section of an IPv4 packet can vary greatly in size. However, the maximum possible size of an IP packet is 65,536 bytes. It contains the message being transferred to the transmission, like website information or email text.

<figure><img src="../.gitbook/assets/ipv4headerindetail.png" alt=""><figcaption><p><strong>IPv4 Packet In Details</strong>.</p></figcaption></figure>

### **IPv6**

#### **What & Why IPv6**

IPv6 was introduced to address the shortage of IPv4 addresses.

* The size of IPv6 addresses is **128 bits.**
  * IPv4 has four octets (e.g., 192.168.1.0), with each octet consisting of 8 bits, totaling 32 bits.
  * IPv6 has 8 segments, each part being 16 bits.
* Example: **`ffff:abcd:shsh:8587:7632:agsv:asuy:8362`**
  * **16x8 = 128 bits.**
* <mark style="color:orange;">**IPv6 is classless.**</mark>
* **IPv6** is not an upgraded version of **IPv4**; both are different.
* Larger Address
  * <mark style="color:orange;">**Header Size**</mark>
    * **IPv4 has 20 bytes.**
    * **IPv6 has 40 bytes.**
  * 128 bits + additional information = **40 bytes.**
  * IPv4 has 16 information sections to read.
  * IPv6 has 8 information sections to read.
* **NAT** is not required.
  * IPv4 had Private & Public IP concepts to address the IP shortage, but IPv6 provides an abundance of IPs.
* IPv6 supports **Statefull**, Stateless, and automatic IP generation using MAC addresses (PCs can automatically generate IPs through their own MAC addresses).
* IPv4 supports **Unicast, Multicast, Broadcast**, while IPv6 has Unicast, Multicast, Anycast (nearby devices), but no Broadcast.
  * Example:
    * `Phone -> Airtel Tower -> Provided IP (random)`
    * In **IPv6**, even if the location changes, the IP may not change; however, an ISP like Airtel could provide an option to maintain the same IP for payment.
  * Location changing in **IPv6** doesn't necessarily result in IP changes.
* **VPN** supports **IPv6** features.

#### **Difference between IPv4 and IPv6**

* It became clear that all of the IPv4 addresses would eventually be depleted; this is called IPv4 address exhaustion. At the time, no one had anticipated how many computing devices would need an IP address in the future.
* IPv6 was developed to mitigate IPv4 address exhaustion and other related concerns.

| **IP Version 4 Vs IP Version 6**                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One of the key differences between IPv4 and IPv6 is the length of the addresses.                                                                                                                                                                                                                                                                              |
| IPv4 addresses are numeric, made of 4 bytes, and allow for up to 4.3 billion possible addresses.                                                                                                                                                                                                                                                              |
| IPv4 addresses are made up of four strings, and the numbers range from 0 to 255.                                                                                                                                                                                                                                                                              |
| An example of an IPv4 address would be: 198.51.100.0. IPv6 addresses are hexadecimal, made up of 16 bytes, and allow for up to 340 undecillion addresses (340 followed by 36 zeros).                                                                                                                                                                          |
| An example of an IPv6 address would be: `2002:0db8:0000:0000:0000:ff21:0023:1234.`                                                                                                                                                                                                                                                                            |
| There are also some differences in the layout of an **IPv6 packet header**. The IPv6 header format is much simpler than IPv4. For example, the IPv4 Header includes the HLEN Identification, and Flags fields, whereas the IPv6 does not. The IPv6 header introduces different fields not included in IPv4 headers, such as the Flow Label and Traffic Class. |
| There are some important security differences between IPv4 and IPv6.                                                                                                                                                                                                                                                                                          |
| IPv6 offers more efficient routing and eliminates private address collisions that can occur on IPv4 when two devices on the same network are attempting to use the same address.                                                                                                                                                                              |

<figure><img src="../.gitbook/assets/DIFFERENT_BW_IPV4_IPV6.png" alt=""><figcaption><p><strong>Different Between IPv4 And IPv6..</strong></p></figcaption></figure>
