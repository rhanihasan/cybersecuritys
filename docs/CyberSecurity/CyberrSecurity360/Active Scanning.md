---
sidebar_position: 6
---

# Active Scanning !

---



### What is Active Scanning?

Active scan, is scan in real time so the target may find the scanner.

### What are the pros and cons of Active Scanning?

**Pros** :- Active scanning has several benefits. It can detect more vulnerabilities than passive scanning, as it actively attempts to exploit any weaknesses it finds. It can also detect hidden vulnerabilities.

**Cons** :- Active scanning also has some drawbacks. It can be time consuming, as it requires more resources than passive scanning. Additionally, it can be disruptive to the system or network. The target or the entitles may find out that they have been active scan.

## TTL Probs

The **TTL** is determined by the remote host. The ping you see in the shell is the **echo-reply**. The initial **TTL** is set by the OS. Linux uses 64, Windows 128 and Routers 255. Every Hop reduces the TTL by at least 1

For example: If you ping a Linux Host and there are 20 Hops between, then the TTL is 64-20 = 44.

## **Network** **Scanning**

- Scanning is Active Information Gathering, find the network running, the operating system, application and software running, services running on a pc
- Network Scan: Scanning a network to find the number of systems connected to it. We can find potential targets in this stage
- Host Discovery: Net discover [ Which use ARP Protocols to recognizes the network]
- Route Discovery: Nmap
- Protocol and ports
- TCP/UDP
- DNS, HOST FILE
- Communication through Netcat, NMAP

## **Netcat and** **NetDiscover**

### What is Netcat?

-  **_Netcat_** : Is a software utility it can be a Server OR a Client.

### Syntax & Command

>#netstate -altp [ to see availability]

>#nc -lp 1234 [ any random port, l mean listing p means port]

|Listing and Using Random Port which is specified.|
|---|
|![Listing_AND_Port_Randoms](./cybersecurity_img/Active_Scanning/Netcad/Listing%20and%20Using%20Random%20Port.png)|


### Syntax & Command

>#nc (linux-ip-addr) 127.0.0.1 (random port ) 1234 ( start Server)

>#nc 127.0.0.1 1234

>#nc -lp 1234

|Getting reply form Server|
|---|
||
|![Getting_Reply_From_Server](./cybersecurity_img/Active_Scanning/Netcad/Getting%20reply%20form%20Server.png)|


## ***Network Scan Using NetDiscover***

### ***What is Netdiscover?***
 
- Netdiscover Which use ARP Protocols to recognizes the network and network machines vendous 

|**netdiscover**|
|-------|
|**Syntax & Command** |
|![netdiscover1](./cybersecurity_img/Active_Scanning/Netdiscover/netdiscover.png)|

- Netdiscover Which use ARP Protocols to recognizes the network and network machines vendors.

|netdiscover|
|---|
|Syntax & Command|
|![netdiscover2](./cybersecurity_img/Active_Scanning/Netdiscover/netdiscover2.png)|
|netdiscover -r [ -r means Range]|
|netdiscover -r [ network id and mask] (Example: 192.168.50.0/24)|


|# ifconfig [ check your interface eth/fa]|
|---|
| Syntax Commands  |
|![ifconfig](./cybersecurity_img/Active_Scanning/Netdiscover/ifcnofig.png)|


|Syntax & Commands|
|---|
|netdiscover -i eth0 [ -i define interface] |
|![netdiscover -i](./cybersecurity_img/Active_Scanning/Netdiscover/netdiscover-i.png)|


## **Network Scanning Using Nmap**

### What is Nmap?

-  Nmap (Network Mapper) is a free and open-source tool used to discover hosts and services of devices

###  Why Use Nmap For Hacking

-  Nmap is a powerfull tool that can used to gather information about target systems. It can to identify open ports/services.

## Pre-requisities

Before you can use Nmap, you will need a basic understanding of the following:

- TCP/IP networking
- Command-line interface (CLI)
- Operating systems (Windows, Linux, macOS)

## Installing Nmap
 

|Nmap can be installed on various operating systems|
|---|
|Windows: https://nmap.org/download.html#windows|
| Linux: sudo apt-get install nmap|
| macOS: brew install nmap|

### Basic Nmap Scanning




### Syntax & Command
|Nmap has a wide range of command-line Commands & syntax|
|---|---|
|sS:|TCP SYN scan (Send SYN Packet)|
|sT:|TCP connect scan (3 way handshake)|
|sU:|UDP scan (Send UDP Packet)|
|sN|Null TCP (no TCP Header)|
|sF|Fin Scan (Send FIN Packet)|
|sX|Xmas Scan (Send TCP Flags Like RST,PSH,FIN)|
|sA|TCP ACK (To determine the Firewall is statefull or Stateless)|
|sW|TCP Windows Scan (Same TCP ACK Scan Get information about windows)|
|sZ|SCTP Echo Scan (Use the SCTP Protocol )|
|sO|Protocal Scan (Determine which Protocal is allow to end target)|
|-b|BounceBack FTP Scan (Use NSE Script FTP Anonymous and Null Sessions)|
|p:|Specify port range|
|O:|OS detection|
|A:|Aggressive scan|
|sV:|Service version detection|
|sC:|Script scanning using the default NSE scripts|
|Pn:|Treat all hosts as online (skip host discovery)|
|n:|Do not resolve hostnames|
|f:|Fragment packets|
|T0:|Paranoid timing (slowest)|
|T5:|Insane timing (fastest)|
|v:|Verbose output|
|oA:|Output in all formats (standard, XML, and grepable)|

### Basic scan

>  nmap (IP Address)  or nmap (website.com)

### Host Discovery

### What is Host Discovery?

The first step in nmap scaning is to find out the network's hosts

### Syntax & Command

>   nmap -sn (IPAddrs) or (IP Range)

### Port Scanning

### What is Port Scanning

Ones the hosts is discovered need to find what open ports are in those hosts

> nmap -p (port_range) (host)

### Operating System Detection

Nmap scan can also detect the OS of those hosts

>  nmap -O (host)

### Handy options

|   |   |
|---|---|
|sS|#nmap -sS [target-ipaddr] - Stealthy SYN scan|
|sU|#nmap –sU [target-ipaddr] -UDP Scan|
|sV|#nmap -sV[target-ipaddr] - version scan, will make complete connection, grab banner, and version info|
|A|#nmap -A[target-ipaddr] - A single argument aggressive scan. Which includes version and OS information, default script execution, and more.|
|oA|#nmap –oA [target-ipaddr]  [filename] - Print nmap output to file name|
|Pn|#nmap –Pn [target-ipaddr] - disable ping. Most big companies will have ping diabled on most external entities|
|n|#nmap -n[target-ipaddr] - disable DNS resolution, helps speed up scan|

### Specify ports

>   Top Ports >> # nmap [IP Address] --top-ports

|When firewall is On|
|---|
|   |
|![Title: When firewall is ON](./cybersecurity_img/Active_Scanning/nmap/whenfirewallisoff.png)|

|When Firewall is Off|
|---|
|![When Firewall is off](./cybersecurity_img/Active_Scanning/nmap/whenfirewallison.png)|

|Wireshark|
|---|
|![when firewall is off and on wiresharks](./cybersecurity_img/Active_Scanning/nmap/wiresharkforfirewallofonpacket.png)|



|All Ports|
|---|
| #nmap –p- [IP Address] by default is use TCP Stealth Scan|
|![All Ports ](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-p-.png)|

|  UDP Ports  |
|---|
|nmap –sU [IP Address]|
|Syntax & Command|
|![](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sU.png)|


|WireSharks|
|---|
||
|![UDP SCAN -sU ](./cybersecurity_img/Active_Scanning/specific_port_scan/nmapudp-su_wireshark1.png) |
|![UDP SCAN -sU ](./cybersecurity_img/Active_Scanning/specific_port_scan/nmapudp-su_wireshark2.png) |

| In real scenario Wireshark  |
|---|
|![](./cybersecurity_img/Active_Scanning/specific_port_scan/In_real_scenario_Wireshark.png)|

|TCP Ports (Connect Scan)|
|---|
|nmap -sT (IP Address)|
|![nmap -sT (IP Address)](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sT_P%20Address.png)|

|Wireshark for Nmap|
|---|
|![nmap -sT (IP Address) Wireshark](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sT_P%20Address_wireshark.png)|

|Quick TCP Scan|
|---|
|nmap -sC -sV -vv -oA quick (target-ip-addrs)|
|![nmap -sC -sV -vv -oA quick](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sC_-sV_-vv_-oA_quick_scan.png)|

|Quick UDP Scan|
|---|
|nmap -sU -sV -vv -oA quick_udp (target-ipaddress)|
|![nmap -sU -sV -vv -oA quick_udp](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sU_-sV_-vv_-oA_quick_udp.png)|

|Full TCP Scan|
|---|
|nmap -sC -sV -p- -vv -oA full (Target-IP Address)|
|![nmap -sC -sV -p- -vv -oA full](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sC%20_sV_-p-_-vv_-oA_full_TCP.png)|

|Host Discovery|
|---|
|The First Step in Nmap scan is to find networks host|
|nmap -sn (Target-ipaddress)|
|![nmap -sn](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sn.png)|


## Banner Grabbing

Banner grabbing collect information using devices banner >> #nmap -sV -v -p- [IP Address]
- OS SCAN -guess provides a faster, more aggressive scan, which is useful when Nmap retrieves close to 100% OS detection. However, aggressive scanning may result in missing some ports. 
- OS SCAN -limit is an option used to limit what targets to scan. This option is useful when you have a large range of IPs to scan.

### Syntax & Command


|nmap -sV -v -p- [IP Address]|
|---|
|![](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-sV_-v_-p-_bannergrabbing.png)|

|sudo nmap -O -sV [IP Address]|
|---|
|nmap -O -sV [IP Address]|
|![](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap_-O_-sV_banner_grabbing.png)|

## Port Knock

### Syntax & Command
This allows the command to quickly check the status of the specified ports on the target host and skip the ping process. 

|nmap -Pn --host-timeout 201ms --max-retries 0 -p 7000,8000,9000 [Target-IP]|
|---|
|![](./cybersecurity_img/Active_Scanning/specific_port_scan/nmap%20-Pn%20--host-timeout%20201ms%20--max-retries_port_knock.png)|