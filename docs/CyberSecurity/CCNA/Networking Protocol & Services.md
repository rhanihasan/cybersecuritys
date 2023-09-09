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