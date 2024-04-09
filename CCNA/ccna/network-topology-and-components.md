---
description: >-
  A network topology is the physical and logical arrangement of nodes and
  connections in a network. Nodes include devices like switches, routers, and
  software with switch and router features
cover: ../.gitbook/assets/Network Topology and componets CCNA.jpeg
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

# Network Topology and Components

## Topology & Components

***

### **Network Topology**

#### **What Is network Topology ?**

* <mark style="color:orange;">**Topology**</mark> <mark style="color:orange;"></mark><mark style="color:orange;">means</mark> <mark style="color:orange;"></mark><mark style="color:orange;">**Diagram**</mark> <mark style="color:orange;"></mark><mark style="color:orange;">==></mark> <mark style="color:orange;"></mark><mark style="color:orange;">**Network Diagram**</mark><mark style="color:orange;">.</mark>

### **Types of Topology’s**

#### <mark style="color:orange;">**Point to Point Topology’s.**</mark>

{% hint style="info" %}
Its A Point TO Point Connection
{% endhint %}

### **Bus Topology**

<figure><img src="../.gitbook/assets/Bus Topology.png" alt=""><figcaption><p>Bus Topology</p></figcaption></figure>

| Pros                                                            | Cons                                                 |
| --------------------------------------------------------------- | ---------------------------------------------------- |
| Bus topology is cheap,                                          | Files doesn't has secret (it broadcasts data to all) |
| Use a single coaxial cable which connects all ,including nodes. | There is not backup when the cable is damage         |

<mark style="color:orange;">**BNC Creator : Bayonet Neill–Concelman**</mark>

* It was used to connect multiple devices & It was work switches as that time It was used to connect devices. & It has a single Wire Cable that send or received data at one at a time.

### **Ring Topology**

#### **What is Ring Topology**

* Every Device has exactly two neighboring devices for **communication purpose.**

| Pros                                             | Cons                                                                                                                                                                         |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Its has a backup ways to destination in networks | Its doesn't have <mark style="color:orange;">BNC Terminator</mark>. & ts has struggle to add new Pc’s because ring Wire has to be the connected wires, It has BNC connector. |

### **Star Topology**

**What & Why Star Topology**

* All the computer connects with the help of Hub.
* BNC to RJ45 Converter
* It a connector between BNC to RJ45, It helps to connect two different type of topologies.



<figure><img src="../.gitbook/assets/Star Topology.png" alt=""><figcaption><p>Star Topology</p></figcaption></figure>

| Pros                                                                            | Cons                                     |
| ------------------------------------------------------------------------------- | ---------------------------------------- |
| If one PC is down & cable is physically damaged So the others are not effected. | It has half Duplex \[Data flow one ways] |

### **Hybrid Topology**

#### **What & Why Hybrid Topology**

* It a mixer of two or more topology & combination of topology it can be connected by BNC to RJ45 Convertor.



<figure><img src="../.gitbook/assets/Hybrid Topology.png" alt=""><figcaption><p>Hybrid Topology</p></figcaption></figure>

| CONS                                              |
| ------------------------------------------------- |
| **It effects the speed of data, Its half-Duplex** |

### **Mesh Topology**

#### **What & Why Mesh topology**

* It used when two or more branches at different places but don't want ant third partly involved so connect to both with cables or VPN

<figure><img src="../.gitbook/assets/half_mesh_topology.png" alt=""><figcaption><p>Half Mesh</p></figcaption></figure>

<figure><img src="../.gitbook/assets/full_mesh_topoplogy.png" alt=""><figcaption><p>Fulll Mesh Topology</p></figcaption></figure>



| Pros                              | Cons                                                                                                                              |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Full Duplex in Full Mash Topology | <p>Half Mesh can travel only one direction Half Duplex. It need licensees form government to apply. <br>Maintained is costly.</p> |

### **Network Components**

* it is a digital telecommunications network which allows nodes to share resources. Nodes are also known as endpoints or end hosts.

#### **Types of Components**

**Clients**

* laptop, desktop, phones.
* These devices access service made available by a server.

**SERVERS**

* A device provides services with clients.

**SWITCHES & HUB**

* The first device was HUB then its updated by Switches.
* HUBs
  * Its a dummy device.
  * Its doesn't understand IP & MAC Address.
  * Its broadcast Data to all.
  * Its not costly & doesn’t need power supply.

| Pros                                                    | Cons                                                                                                              |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Cheap, doesn’t need power supply, Multiply connections. | Broadcast, dummy device, Doesn’t understand IP **& MAC**, can’t perform configuration, no software & half duplex. |

* Switches
  * Switches are used to connect devices within a Lan.
  * Switches have multiple interfaces/ports for end host to connect to.
  * Once devices are connected to it, it creates a table a saves the mac addresses of these devices using ARP Protocols.

| Pros                                                                                                                                           | Cons                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| <p>Connects multiple device has serval ports company can also customize the switch according to the requirements.</p><p>Doesn’t Broadcast.</p> | Expensive / Costly.     |
| Understands MAC & IP Address. & Have some Security Feature.                                                                                    | Need More Power Supply. |

**ROUTERS**

* Routers are used to connect different **LANs**.
* They have fewer network interfaces than switches.
* They are used to send data over the internet.
* Cisco **ISR** routers are enterprise grade routers Now which is Reknown as **Cisco CSR**.
* Routers at the end that connect the entire network to internet is called gateway.
* Understand IP for sending outside LAN we required router.

**Repeater**

* Repeater helps to transfer the data with some speed it started \[boost data and frequency etc]

**Ethernet Port Type**

* Ethernet >- 10 MBPS
* Fastethernet >- 100 MBPS
* Gigabitethernet >- 1 GBPS
* SFP Ports >- 10 GBPS

**FIREWALLS**

* They are network security devices that protects a network from attacks.
* We also have software/Virtualized firewalls.
* ASA Adaptive Security Appliance
  * It filters IP Address.
  * Maintain traffics
  * Which IP Address is to be permitted and which to be denied.
  * It can manually block URL’s
  * Doesn’t filter Emails.
* **FTD**
  * Firepower thread defence.
  * This device works as WSA, firewall, NGIPS, AMP.
* **ESA**
  * Email Security Appliance monitors and filters emails.ﾠ
  * It helps to secure emails from unauthorized access.
  * Filter emails with this device flited Goe Location based EG: File type exe, gif, jpeg etc.
  * It is a security device used to prevent email attacks on companies.
* **WSA**
  * Web security appliance monitors and filters traffic going on the internet.
  * It helps to filter URL.
  * Does profiling of unknow websites can set a particular time to access.
  * It also helps to set video quality and disable download button.
  * Block files if it has virus in it.
  * They prevent virus from internet.
* **ISE**
  * It is a device where username passwords are made for employees for authentication.
  * ISE generates own account and password for the devices.
* **AAA**
* Authentication check whether the user is stored in the database.\[who are you]
* Authorization Give access to only devices which the user is authorized \[what privilege you have]
* Accounting Keeps a track of all the activities that are performed by the user.
* **NGIPS**
  * Next generation Intrusion prevention system
  * Scans data for virus, trojans etc.
  * It tracks all the activities done, works as unauthorized files.
  * It is positioned behind firewall.
* **WIFI**
  * These are called access-point in terms of networking.
* **AMP**
  * **Advanced malware protection**
  * Protects against malware
* **TALOS**
  * Cisco Talos is a threat intelligence and research organization that provides protection against cybersecurity threats. They offer a range of security solutions, including threat intelligence, research, and analysis, as well as products such as firewalls and intrusion prevention systems. Their aim is to help organizations stay ahead of emerging threats and protect their assets from cyber attacks.
