---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';



## OSI Model Layers

### ISO: International Standard Organization

**What is ISO?**
- ISO stands for **International Standard Organization**.
- It is an organization that sets international standards for various measurements.

### Open System Interconnection (OSI)

**What is OSI?**
- The OSI model describes **seven layers** used by computer systems to communicate over a network.
- It aids in connecting different vendors and PCs through standardized protocols/rules.

**How does data transfer through OSI?**
- Data transfers through **OSI layers**.

### OSI Model Layers

| Layer Number | Layer Name               | Corresponding OSI Layer  |
|--------------|--------------------------|--------------------------|
| 7            | Application Layer        | Application, Presentation, Session Layers |
| 6            | Presentation Layer       | Presentation Layer       |
| 5            | Session Layer            | Session Layer            |
| 4            | Transport Layer          | Transport Layer          |
| 3            | Network Layer            | Network Layer            |
| 2            | Data Link Layer          | Data Link Layer          |
| 1            | Physical Layer           | Physical Layer           |

### Layer 7: Application Layer

- Responsible for making connections and interface with other devices using HTTP, HTTPS, FTP, etc.
- Involves networking protocols for user internet access.
- Examples: HTTP, HTTPS, SMTP, SSH, FTP, DNS.

#### Layer 7: Application Layer

The Application layer serves as the interface for users and applications that require network communication. It includes protocols like HTTP, HTTPS, and FTP.

Communication at the application layer involves direct interaction with end-users. For instance, web browsers use HTTP or HTTPS to retrieve and display web content. Email applications use SMTP for sending and receiving emails. Additionally, the DNS protocol translates domain names into IP addresses.

### Layer 6: Presentation Layer

- Handles data translation and encryption.
- Transforms data formats for applications at both ends.
- Involves encryption, compression, and character code interpretation.
- Example: SSL encryption for HTTPS websites.

#### Presentation Layer

The Presentation layer focuses on data translation, encryption, and data format representation. It ensures that data is properly formatted and encrypted for communication.

Tasks at this layer include encryption, compression, and character set translation. For instance, SSL is used to encrypt data between web servers and browsers. The Presentation layer ensures that data is presented in a format that can be understood by the application layer.

### Layer 5: Session Layer

- Manages session establishment, maintenance, and termination.
- Handles authentication, reconnection, and checkpoints.
- Ensures continuous data flow in a session.

#### Session Layer

The Session layer manages and maintains sessions between devices. It handles the establishment, management, and termination of connections.

Sessions allow devices to communicate with each other. The session layer is responsible for tasks such as authentication, reconnection, and maintaining checkpoints during data transfers. If a session is interrupted, checkpoints ensure the resumption of transmission from the last checkpoint.

### Layer 4: Transport Layer

- Provides reliable communication between nodes.
- Ensures reliable data transfer, speed, and segmentation.
- Segmentation divides large data into manageable segments.
- Includes TCP and UDP protocols.

#### Transport Layer

The Transport layer is responsible for providing reliable host-to-host communication services for applications. It plays a crucial role in ensuring data transfer between source and destination devices. This layer decides the source and destination ports and selects the appropriate protocol for the service.

One of the main responsibilities of the Transport layer is to establish a reliable connection between nodes. It manages the speed of data transfer, flow control, and segmenting large data transmissions into smaller segments. These smaller segments are then reassembled at the receiving end to ensure proper processing by the Session layer. Transport layer protocols like TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) facilitate these functions.

### Layer 3: Network Layer

- Routes data between networks and handles packet forwarding.
- Determines protocol for data packet delivery.
- Manages IP addressing, routing, and firewalling.

### Network Layer

The Network layer is responsible for routing data between nodes on a network. It handles packet forwarding, including routing through intermediate routers. This layer operates by sending data in packet format, which includes information about source and destination IP addresses. Routers, which operate at the Network layer, use IP addresses to make routing decisions.

The Network layer checks whether a particular packet is allowed to pass based on security and firewall rules. It also handles encryption for secure communication. Data packets are received from the Data Link layer and delivered to their intended destinations based on IP addresses.

### Layer 2: Data Link Layer

- Transfers data between nodes in a network segment.
- Manages data frames and error detection/correction.
- Involves MAC addresses and network interface cards.

#### Data Link Layer

The Data Link layer focuses on the reliable transmission of data between nodes within a network segment. It operates across the physical layer and understands MAC addresses. Switches, which work at this layer, use MAC addresses to forward data to the appropriate destination.

Data is sent in frames from the Data Link layer to the next layer. The Data Link layer is responsible for error detection and correction, ensuring that the data being transmitted is accurate and reliable. Protocols such as High-Level Data Link Control (HDLC) and Ethernet are commonly used at this layer.

### Layer 1: Physical Layer

- Checks physical connectivity, speed, and power supply.
- Responsible for the physical transmission of data.
- Involves hardware like cables, wiring, and modems.

The OSI model provides a structured approach to understanding and troubleshooting network communication.



#### Physical Layer

The Physical layer deals with the actual physical transmission of data over the network medium. It includes the hardware components and physical infrastructure required for network communication. Devices like hubs, modems, and cables are part of this layer.

In the Physical layer, data is represented as a stream of binary digits (0s and 1s) that travel across the physical wiring and cables. This layer ensures physical connectivity, checks transmission speed, and manages power supply to network devices.


## TCP/IP Protocol

**TCP/IP** stands for **Transmission Control Protocol/Internet Protocol**, and it is used for communication protocols. It combines TCP and IP protocols.

The TCP/IP model provides a framework for understanding how data is organized and transmitted across a network. This model assists network engineers and security analysts in conceptualizing network processes and identifying disruptions or security threats. The TCP/IP model comprises four layers: Network Access Layer, Internet Layer, Transport Layer, and Application Layer. When troubleshooting network issues, security professionals can analyze which layers were involved in an incident.

### How TCP/IP Functions

- TCP/IP follows the **client-server communication model** where clients (users or machines) receive services from servers (other computers) within the network, such as sending webpages.
- The TCP/IP protocol is **stateless**, treating each client request as new and independent, allowing continuous network path utilization.
- It differs from the seven-layer OSI networking model, which outlines application communication across networks.


## TCP/IP Protocol Layers

| Layer Number | Layer Name                      | Corresponding OSI Layer |
|--------------|---------------------------------|-------------------------|
| 1            | Application Layer               | Application, Presentation, Session Layers |
| 2            | Transport Layer                 | Transport Layer         |
| 3            | Network Layer                   | Network Layer           |
| 4            | Network Interface Layer         | Data Link, Physical Layers |

### 1. Application Layer

The **Application Layer** in the TCP/IP model is analogous to the combined functions of the OSI's Application, Presentation, and Session layers. This layer is responsible for making network requests and responding to them. It defines the services and applications accessible to users. Common protocols at this layer include:
- **Hypertext Transfer Protocol (HTTP)**
- **Simple Mail Transfer Protocol (SMTP)**
- **Secure Shell (SSH)**
- **File Transfer Protocol (FTP)**
- **Domain Name System (DNS)**

Application layer protocols depend on lower layers for data transmission.

### 2. Transport Layer

The **Transport Layer** ensures reliable data delivery between systems. It includes two primary protocols:
- **Transmission Control Protocol (TCP)**: Ensures reliable and ordered data transmission.
- **User Datagram Protocol (UDP)**: Used for real-time, non-reliable applications like video streaming.

### 3. Network Layer

The **Network Layer**, also known as the Internet Layer, focuses on delivering data to the destination host, potentially across different networks. It determines the protocol for data packet delivery. Common protocols include:
- **Internet Protocol (IP)**: Sends data packets to the correct destination and relies on TCP/UDP for service delivery.
- **Internet Control Message Protocol (ICMP)**: Shares error and status information for troubleshooting.

### 4. Network Interface Layer

The **Network Interface Layer**, often referred to as the Data Link Layer, manages data frame transmission within a single network. It corresponds to the physical hardware involved in network transmission, such as hubs, modems, cables, and wiring. This layer also includes the Address Resolution Protocol (ARP), which maps IP addresses to MAC addresses on the same network.

|![TCP_IP_MODEL](./img/IP_Address/TCP_IPMODEL.png)|
|---|

## Network Layer Operations

The network layer plays a crucial role in organizing the addressing and delivery of data packets across networks and the internet. This layer ensures efficient transmission from the host device to the destination device. Let's delve into the key functions performed at the network layer:

- **Addressing and Routing:** The network layer directs data packets from one router to another across the internet, based on the destination network's Internet Protocol (IP) address. Each data packet's header contains the destination IP address, which guides its journey.

- **Routing Tables:** Along the packet's path to its destination, routing tables store the destination IP address for future routing. Routers refer to these tables to determine the best route for data packet transmission.

- **IP Packets:** Every data packet, known as an IP packet or datagram, contains an IP address. This address is pivotal for routing as routers utilize it to direct packets between networks. The IP header within the packet communicates vital information beyond the destination address, such as source IP, packet size, and the protocol to be used for the data.

The network layer serves as the bridge between different networks, ensuring effective data transmission and routing. It empowers the internet to function as a seamless global network.