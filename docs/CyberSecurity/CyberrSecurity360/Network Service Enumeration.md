---
sidebar_position: 10
---


# Network Service Enumeration
---



## Enumeration

### What & Why Enumeration?

- **Enumeration** is a process used by attackers to find weaknesses in a system by gathering information from different services. It's an important step in a successful attack.
- Gathering information from the target activity.
- Enumeration is also called scanning.

- Digging up and validating the information which is gathered in information gathering/recon process.
- There are many network services like FTP, SMB, and more.

## Services

### What & Why Service?

- To make jobs easy, services are created. For example, railways are created for public purpose or service, but to use the service, one has to obey the rules & regulations of railways, like buying tickets.

## Service Enumeration

### What & Why Service Enumeration?

- It's a process of digging up the services, finding services with loopholes.
- Conducting a scan to verify service ports are open. After verification of which service is running, there are various tools for enumerations:
  - NSE script of Enumerations based on LUA language
  - Enum4linux based on Python
  - Crackmapexec tools that were breached, created by NSA
  - And many more...

## SMB Service

### What & Why SMB?

- **Server Message Block (SMB)** allows sharing resources with other computers over the network.
- Computers (SMB clients) on a network can connect to SMB servers to access shared files and directories or perform tasks like downloading files over the Local Area Network.
- SMB is an OSI application layer protocol that allows for file and device sharing and inter-process communication (IPC) between applications on a network through a client-server.
- The same service in Linux OS is called SAMBA.
- SMB uses ports 139 & 443.

### What does port 139 do?

- Port 139 uses the **NetBIOS** protocol.
- NetBIOS stands for Network Basic Input Output System.
- Software applications that run on a NetBIOS network locate and identify each other via their NetBIOS names.

### What does NetBIOS do?

- Allows communication between computers on local networks.

### Port 445

- Port 445 is known as **SMB over IP** or **Server Message Block over IP**.
- SMB in modern language is also referred to as **Common Internet File System**.
- SMB can run directly over TCP/IP without the need for NetBIOS over TCP/IP.
- Port 445 is used for SMB when running over IP.

### IPC$ Share

- **IPC$** is a special hidden share that allows for inter-process communication (IPC) on Windows systems.
- With an anonymous null session, you can access the IPC$ share and interact with exposed services.

### SMB Protocol

- SMB is a **response-request protocol** used for sharing files, printers, and other resources on a network.

### Client-Server Connection

- Clients connect to servers using **TCP/IP** or **QUIC protocols**.

### Enumerating NetBIOS

- Enumerating NetBIOS provides information about the target computer group, domain, network shares, and computer names.

### Possible Credentials

| Username(s)          | Common Passwords              |
|----------------------|------------------------------|
| (blank)              | (blank)                      |
| guest                | (blank)                      |
| Administrator, admin | (blank), password, administrator, admin |


## Identification & Scan

### SMB Communication via Wireshark

You can analyze SMB communication using Wireshark, a network protocol analyzer.

## nblookup

|Getting NetBIOS IP Address using `nmblookup`|
|---|
|To retrieve NetBIOS IP addresses, use the following syntax and command:|
```bash
nmblookup -A <IP>
```

## nbstate

|Getting PC Information using `nbstate`|
|---|
|![NBSTATE_STATUS](./cybersecurity_img/Network_service_enumeration/nbstatestatus.png)|
|To obtain PC information using `nbstate`, use the following syntax and command:|
|![nbtresults](./cybersecurity_img/Network_service_enumeration/nbtstateresults.png)|
```bash
#nbstate
#nbtstat –A <target-IP-Addrs>
```

## nbtscan

### Syntax & Commands

|You can use `nbtscan` to gather NetBIOS information from a target IP address. Below are the commands and syntax:|
|---|
|![nbtscanresults](./cybersecurity_img/Network_service_enumeration/nbsscanresults.png)|
- To scan a target IP address:
  ```bash
  #nbtscan –r <Target-IP-Addr>
  ```

- For a verbose scan (to display more detailed information):
  ```bash
  #nbtscan –v [verbose]
  ```


## Communication between Two Windows PCs

In this scenario, communication between two Windows PCs is established using **SMB Port Number 445**.

| Windows | IP Address        |
|---------|------------------|
| Windows 1 (initiating connection) | 192.168.190.229 |
| Windows 2 (being accessed)       | 192.168.190.44  |

### Syntax & Commands

|Description|
|-----|
|![Communicatioinbwpc1](./cybersecurity_img/Network_service_enumeration/communicationbwpcs1.png)|
|**After Login Success:**|
|![communicationbwpc2](./cybersecurity_img/Network_service_enumeration/communicationbwpcs2.png)|
|**Accessing a File Packet:**|
|![communicationbwpc3](./cybersecurity_img/Network_service_enumeration/communicationbwpcs3.png)|


:::note
All the data exchanged during this communication is encrypted.
:::




## SMB Login with Credentials & Hashes

### Syntax & Commands for Credentials

| Description                     | Command                                         |
|---------------------------------|-------------------------------------------------|
| Authenticate using credentials  | `smbmap -u "username" -p "password" -H <IP> -P <PORT>` |

### Syntax & Commands for Hashes

| Description                     | Command                                         |
|---------------------------------|-------------------------------------------------|
| Authenticate using NTLM/LM hashes | `smbmap -u "username" -p "<NT>:<LM>" -H <IP> -P <PORT>` |
| Establish SMB null session      | If password response is "randomus" or blank, it's an SMB null session. |

### Accessing Shares using smbclient

| Description                     | Command                                         |
|---------------------------------|-------------------------------------------------|
| Access shares using smbclient   | `smbclient -U 'username[%passwd]' -L [--pw-nt-hash] //<Target-IP>` |
| With `--pw-nt-hash`              | Use NT hash as the password (can be obtained using various methods). |

Certainly, here's your provided Nmap scan syntax and commands formatted in markdown:

## Nmap Scan

### Syntax & Commands

You can perform an Nmap scan using the following syntax and commands:

```bash
nmap -Sv -n -Pn -p 138,445 <Target-IP>
```

- `-Sv`: Probe open ports to determine service/version info
- `-n`: No DNS resolution (speeds up the scan)
- `-Pn`: Treat all hosts as online (skip host discovery)
- `-p 138,445`: Scan ports 138 and 445

Replace `<Target-IP>` with the IP address of the target system.

Certainly, here's the information about SMB enumeration using NSE (Nmap Scripting Engine) presented using tables, bullet points, and code blocks within the markdown format:

## SMB Enumeration

### NSE Nmap

#### Syntax & Commands For SMB V1

| Description     | Command                                      |
|-----------------|----------------------------------------------|
| Enumerate using SMB scripts | `nmap --script smb-enum-*.nse 192.168.50.124` |

**Output:**

```
Starting Nmap 7.94 ( https://nmap.org ) at 2023-06-26 21:46 IST
Starting Nmap 7.93 ( https://nmap.org ) at 2023-06-26 12:37 EDT
Nmap scan report for 192.168.100.130
                                                                                                                                                                                                                  
┌──(root㉿kali)-[/usr/share/nmap/scripts]
└─# nmap --script smb-enum-*.nse 192.168.100.130
Starting Nmap 7.93 ( https://nmap.org ) at 2023-06-26 12:19 EDT
Failed to resolve "smb-enum-groups.nse".
Failed to resolve "smb-enum-processes.nse".
Failed to resolve "smb-enum-services.nse".
Failed to resolve "smb-enum-sessions.nse".
Failed to resolve "smb-enum-shares.nse".
Failed to resolve "smb-enum-users.nse".
Nmap scan report for 192.168.100.130
Host is up (0.0068s latency).
Not shown: 983 closed tcp ports (reset)
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
25/tcp   open  smtp
80/tcp   open  http
139/tcp  open  netbios-ssn
443/tcp  open  https
445/tcp  open  microsoft-ds
512/tcp  open  exec
513/tcp  open  login
514/tcp  open  shell
666/tcp  open  doom
3306/tcp open  mysql
5901/tcp open  vnc-1
6001/tcp open  X11:1
8080/tcp open  http-proxy
8443/tcp open  https-alt
9080/tcp open  glrpc
MAC Address: 00:0C:29:9C:C7:94 (VMware)
 
Host script results:
| smb-enum-domains: 
|   Builtin
|     Groups: n/a
|     Users: n/a
|     Creation time: unknown
|     Passwords: min length: 5; min age: n/a days; max age: n/a days; history: n/a passwords
|     Account lockout disabled
|   BEE-BOX
|     Groups: n/a
|     Users: nobody\x00, bee\x00
|     Creation time: unknown
|     Passwords: min length: 5; min age: n/a days; max age: n/a days; history: n/a passwords
|_    Account lockout disabled
 
Nmap done: 1 IP address (1 host up) scanned in 6.08 seconds
```

#### Windows

| Description     | Command                                      |
|-----------------|----------------------------------------------|
| Enumerate using SMB scripts | `nmap --script smb-enum-*.nse 192.168.100.130` |

**Output:**

```
Starting Nmap 7.93 ( https://nmap.org ) at 2023-06-26 12:19 EDT
Failed to resolve "smb-enum-groups.nse".
Failed to resolve "smb-enum-processes.nse".
...
Nmap scan report for 192.168.100.130
Host is up (0.0068s latency).
...
Nmap done: 1 IP address (1 host up) scanned in 6.08 seconds
```

#### BeeBox

| Description     | Command                                      |
|-----------------|----------------------------------------------|
| Enumerate using SMB scripts | `nmap -vv --script smb-*.nse 192.168.100.130` |

**Output:**

```
Completed SYN Stealth Scan at 12:37, 0.12s elapsed (1000 total ports)
NSE: Script scanning 192.168.100.130.
NSE: Starting runlevel 1 (of 1) scan.
Initiating NSE at 12:37
Completed NSE at 12:37, 6.30s elapsed
Nmap scan report for 192.168.100.130
Host is up, received arp-response (0.020s latency).
Scanned at 2023-06-26 12:37:37 EDT for 7s
Not shown: 983 closed tcp ports (reset)
PORT     STATE SERVICE      REASON
21/tcp   open  ftp          syn-ack ttl 64
22/tcp   open  ssh          syn-ack ttl 64
25/tcp   open  smtp         syn-ack ttl 64
80/tcp   open  http         syn-ack ttl 64
139/tcp  open  netbios-ssn  syn-ack ttl 64
443/tcp  open  https        syn-ack ttl 64
445/tcp  open  microsoft-ds syn-ack ttl 64
512/tcp  open  exec         syn-ack ttl 64
513/tcp  open  login        syn-ack ttl 64
514/tcp  open  shell        syn-ack ttl 64
666/tcp  open  doom         syn-ack ttl 64
3306/tcp open  mysql        syn-ack ttl 64
5901/tcp open  vnc-1        syn-ack ttl 64
6001/tcp open  X11:1        syn-ack ttl 64
8080/tcp open  http-proxy   syn-ack ttl 64
8443/tcp open  https-alt    syn-ack ttl 64
9080/tcp open  glrpc        syn-ack ttl 64
MAC Address: 00:0C:29:9C:C7:94 (VMware)
 
Host script results:
| smb-brute: 
|_  No accounts found
 
NSE: Script Post-scanning.
NSE: Starting runlevel 1 (of 1) scan.
Initiating NSE at 12:37
Completed NSE at 12:37, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 16.78 seconds
           Raw packets sent: 1001 (44.028KB) | Rcvd: 1001 (40.096KB)

```


## SMB Enumeration Using SMBv2 Scripts

### Syntax & Commands

To enumerate SMBv2 using Nmap scripts, you can use the following commands:

For Linux:

```shell
nmap -vv --script smb2-*.nse 192.168.100.130
```

For Windows:

```shell
nmap -vv --script smb2-*.nse 192.168.50.124
```

### Output Examples

#### Output (Linux):

```
Starting Nmap 7.93 ( https://nmap.org ) at 2023-06-26 12:38 EDT
NSE: Loaded 1 scripts for scanning.
...
PORT     STATE SERVICE      REASON
21/tcp   open  ftp          syn-ack ttl 64
22/tcp   open  ssh          syn-ack ttl 64
...
Host script results:
|_smb2-capabilities: SMB 2+ not supported
...
Nmap done: 1 IP address (1 host up) scanned in 11.89 seconds
```

#### Output (Windows):

```
Starting Nmap 7.94 ( https://nmap.org ) at 2023-06-26 22:09 IST
NSE: Loaded 4 scripts for scanning.
...
PORT     STATE SERVICE       REASON
21/tcp   open  ftp           syn-ack
22/tcp   open  ssh           syn-ack
...
Host script results:
| smb2-capabilities: 
|   2:0:2: 
|     Distributed File System
|   2:1:0: 
|     Distributed File System
|     Leasing
...
| smb2-time: 
|   date: 2023-06-26T16:35:58
...
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required
...
Nmap done: 1 IP address (1 host up) scanned in 1.69 seconds
```

### Enumeration Insights

- There are two types of sessions: Guest sessions (random password entered) and Null sessions (blank password entered).
- Null Sessions have no credentials, and authentication is performed over SMB.
- Count Sessions or Guest Sessions typically have any name, and authentication is performed over SMB.



## Guest Sessions Enumeration

### What are Guest Sessions?

Guest sessions refer to cases where random passwords are entered for authentication attempts. These sessions are typically used to explore accessible resources without providing valid credentials.

### Why Use Guest Sessions?

Guest sessions can be useful for probing systems to identify open shares, services, and other network resources. They allow you to interact with the system without using valid credentials.

### Count Sessions / Guest Sessions

In some scenarios, you can perform count sessions or guest sessions by providing any name during authentication. The format is:

| Authentication | SMB   |
| -------------- | ----- |
| Any Name       | AUTH  |
|                | SMB   |

## SMB Client Usage

### Syntax & Commands for SMB Client

To use the SMB client (`smbclient`) for enumeration and interaction with shares, you can use the following commands:

| Description                             | Command                              |
| --------------------------------------- | ------------------------------------ |
| Enumerate shares without a username and password | `smbclient -L <Target-IP>`        |
| Enumerate shares without a password (using `-N` flag) | `smbclient -N -L <Target-IP>`     |

### Example

```shell
smbclient -N -L 192.168.100.130
```

|The `-N` flag indicates no password should be provided during the authentication attempt.|
|---|
|![smbclientresults](./cybersecurity_img/Network_service_enumeration/smb_clientresults.png)|

