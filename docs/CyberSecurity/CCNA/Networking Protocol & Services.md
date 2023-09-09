---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';

# Networking Protocol & Services

---

### What & Why Network Protocol ?

Network protocols are like rules and regulations for communication between computers and devices on a network. When multiple machines are connected in a network, there need to be rules in place to determine which machines can provide services and which ones can access those services.

Think of network services as the functionalities or features that a network can offer. To make using these services easier and organized, specific rules and protocols are created. It's similar to how railways provide services to the public, but passengers need to follow ticketing rules and regulations to use those services. In the context of a network, services might include things like file sharing, web browsing, email, or video conferencing, and there are protocols in place to ensure these services work smoothly and securely.



## Communication Protocols

Communication protocols are the rules governing network communication. They determine how data travels between devices, when it occurs, and even help recover lost data. Below are some important communication protocols:

- **TCP/IP:** This protocol powers the internet, ensuring data reaches its intended destination.

- **HTTP/HTTPS:** Used for web browsing. HTTPS offers enhanced security.

- **SMTP/POP3/IMAP:** These protocols are used for email. SMTP sends emails, while POP3 and IMAP receive them.

- **FTP:** Used for sharing files over the internet.

More..


### TCP (Transmission Control Protocol)

- **TCP** is like the conversation manager of the internet.
- Known as a **'Stateful Protocol'** because it ensures confirmation of receipt.
- It helps devices connect and send data reliably.
- It uses a **three-way handshake** to initiate a connection:
  1. A sends a SYN (Synchronize) request to B.
  2. B responds with a SYN/ACK (Synchronize/Acknowledge) to A.
  3. A sends an ACK (Acknowledge) back to B.
- This handshake establishes a secure connection.
- TCP operates at the transport layer in the TCP/IP model.
- It's assigned **protocol number 6** in the IP world.
- TCP carries data in packets, with the packet having a **protocol number of 6** in its header.
- When the conversation ends, there's a graceful closing called a **five-way handshake**:
  1. A sends a FIN (Finish) packet to B.
  2. B replies with a FIN/ACK packet.
  3. A acknowledges with an ACK packet.
- This ensures a clean connection close.
- TCP ensures your data reaches its destination safely and in order.

### UDP (User Datagram Protocol)

- **UDP** is like sending postcards in the mail.
- It's quick but doesn't guarantee delivery.
- Protocol number: **17**.
- Uses an **8-byte header/flag**.
- Known as a **'Stateless Protocol'** because it doesn't receive confirmation of receipt.
- Ideal for applications where speed is crucial, such as streaming media.
- UDP operates at the transport layer in the TCP/IP model.
- Perfect for applications like online gaming.

In summary, **TCP** ensures reliable and ordered data delivery, **UDP** prioritizes speed, 

### HTTP (Hypertext Transfer Protocol)

- **HTTP** is like a language for web browsers and servers.
- It facilitates communication between your browser and websites.
- Uses **port 80**.
- HTTP is considered insecure, so it's being replaced by **HTTPS** for security.
- However, HTTP is still used by some websites.
- HTTP operates at the application layer in the TCP/IP model.



**Management Protocols**

Management protocols are like network supervisors, helping monitor and optimize network activity. Here are a couple of important ones:

- **SNMP (Simple Network Management Protocol):**
  - Manages and monitors devices on a network.
  - Can change device configurations and check bandwidth usage.
  - Occurs at the application layer in the TCP/IP model.

- **ICMP (Internet Control Message Protocol):**
  - Used to report data transmission errors between devices.
  - Often used for troubleshooting with the "ping" command.
  - Occurs at the internet layer in the TCP/IP model.

**Security Protocols**

Security protocols are like digital bodyguards for your data. They ensure secure communication:

- **HTTPS (Hypertext Transfer Protocol Secure):**
  - Provides secure communication between clients and websites.
  - Uses SSL/TLS encryption to protect data.
  - Operates at the application layer and uses port 443 in the TCP/IP model.

- **SFTP (Secure File Transfer Protocol):**
  - Securely transfers files over a network.
  - Uses SSH with encryption to prevent interception.
  - Occurs at the application layer and commonly used with cloud storage.

**Address Resolution Protocol (ARP)**

- ARP is like a translator between IP and MAC addresses.
- It finds the MAC address for a given IP address.
- Helps devices communicate on the same network.
- Works at the internet layer in the TCP/IP model.

Management protocols keep networks running smoothly, security protocols protect data, and ARP helps devices talk to each other effectively.


## **Ports**

Ports are like the doors and windows Or Gates of the digital world. They allow communication between devices and services on a network. 

**Types of Ports:**

- **Physical Ports:** These are like the physical connectors on your devices, such as Ethernet, USB, or AUX ports.

- **Virtual Ports:** These are logical channels for data to flow through software. There are 65535 of them, and 1024 are commonly reserved for specific services.

**TCP and UDP:**

- Both virtual and physical ports have two roads: TCP and UDP,Then Both ways have 65535 roads.

- **TCP (Transmission Control Protocol):** It's like a reliable, guaranteed delivery service. It ensures data won't be lost during transmission.

- **UDP (User Datagram Protocol):** This is more like a speedy courier. It's fast but doesn't guarantee delivery; some data may be lost.

**Rules and Regulations:**

- **TCP:** Promises not to drop your data, ensuring it gets to the destination intact.

- **UDP:** Can't guarantee data won't be dropped, but it's faster for things like real-time streaming.

**Server and Client:**

- **Server:** Software that provides services, like HTTP, MySQL, FTP, or SSH.

- **Client:** Software that uses those services, like web browsers, database clients, FTP clients, or SSH clients.

- Servers and clients communicate through ports to access and exchange data and services.

In the digital world, ports are like doors, and TCP/UDP are the rules for delivery, allowing servers and clients to talk and share data.



**TCP Half Connection**

In TCP communication, a "half connection" refers to the initial phase of establishing a connection between a client and a server. Here's a breakdown of the key components:

**Packet Level Analysis:**



**TCP Half Connection:**

| Packet Level      | Description                                 |
|-------------------|---------------------------------------------|
| Wireshark Filter  | tcp.port==1                                 |
| Source Address    | 127.0.0.1 (Client IP)                      |
| Source MAC Address| MAC1 (Client's MAC)                         |
| Source Port       | [Client's Dynamic Port]                    |
| Destination Address| 127.0.0.1 (Server IP - Loopback)           |
| Destination MAC Address| MAC2 (Server's MAC)                   |
| Destination Port  | [Server's Service Port]                    |
| Request/Response  | SYN Packet / Hello Packet                  |
|                   | SYN-ACK Packet                              |
|                   | ACK Packet                                  |


**Half Connection Sequence:**

1. **SYN Packet / Hello Packet:** The client initiates the connection by sending a SYN packet, often referred to as a "Hello Packet." This packet is used to request the server's attention and establish a connection.

2. **SYN-ACK Packet:** The server responds with a SYN-ACK packet, acknowledging the client's request and indicating its readiness to establish the connection.

3. **ACK Packet:** The client sends an ACK packet to confirm that it has received the server's response. This completes the initial handshake phase.

**Timeout:** If the server does not respond within a certain timeout period (e.g., 75 seconds), the request/response packets may be discarded, and the connection attempt may be considered unsuccessful.

![TCP_PACKET](./img/Protocols&Services/TCPSYNPKT.png)
- CLient to Server

![TCP_CLienttoserver](./img/Protocols&Services/CLIENTTOSERVERTCP.png)

- Server to Client
![ServertoCLient](./img/Protocols&Services/ServertoclientTCP.png)

This process represents the "TCP Half Connection" phase.

**TCP Full Connection or Five-Way Handshake**

In a complete TCP connection, there's also a "Five-Way Handshake" that includes the termination of the connection:

- **FIN Packet:** To close the connection, either the client or the server sends a FIN (Finish) packet to signal the intention to terminate the connection.

![FINPACKET](./img/Protocols&Services/TCPFINPKT.png)

- **If the TCP port is not open:** If the specified port on the server is not open or not listening, the server may respond with a RST (Reset) packet, indicating that the connection request is rejected.

![RST_PACKET](./img/Protocols&Services/RSPTCPPKT.png)