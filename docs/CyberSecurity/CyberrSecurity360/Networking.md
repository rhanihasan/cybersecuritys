---
sidebar_position: 3
---

# Networking !


---


## ***What is Network ?***

Connecting two or more computers.

## ***What is Networking ?***

Understanding the concept of Network.

>Example 
>
>How the roads are created to transport or travel. But some use this road for their own benefit known as hackers. 

- Networking is the process of connecting two or more computers so that they can share data and resources. Networks can be small, such as a home network, or large, such as the internet.

|At home, the devices connected to your network might be your laptop, cell phones, and smart devices, like your refrigerator or air conditioner. In an office, devices like workstations, printers, and servers all connect to the network. The devices on a network can communicate with each other over network cables, or wireless connections. Networks in your home and office can communicate with networks in other locations, and the devices on them |
|---|
---

## LAN & WAN

- Devices can communicate on two types of networks a local area network, also known as a LAN, 
and a wide area network, also known as a WAN.

- LAN
	- A local area network, or LAN, spans a small area like an office building, a school, or a home. 
		- Example, when a personal device like your cell phone or tablet  connects to the WIFI in your house, they form a LAN. The LAN then connects to the internet

- WAN
	- A wide area network or WAN spans a large geographical area like a city, state, or country. 
	- You can think of the internet as one big WAN.


## ***ISO  International Standard Organization***

- An organization that sets international standards for all different kinds of measurement. 
    
- ISO created OSI in 1970, 
    
- ISO file is created by Linux O.S version Of Ubuntu. 
    

### ***Open system interconnection*** 

- The OSI model describes seven layers that computer systems use to communicate over a network. 
    
- OSI help to connect all different vendors/PC to each other 

> Example
> 
When company create new pc and OSI is applied that means company agree to OSI protocols /rules.] 
 

### ***How data transfer through OSI? Through OSI LAYERS ?***

#### *OSI Model Layers.* 

#### Layer 7: Application layer

- **Application**: means to make connection for interface other devices it requires http, https, ftp.

	- The application layer includes processes that directly involve the everyday user. This layer includes all of the networking protocols that software applications use to connect a user to the internet. This characteristic is the identifying feature of the application layer ++user connection to the network via applications and requests++.
	
	- An example of a type of communication that happens at the application layer is using a web browser. The internet browser uses HTTP or HTTPS to send and receive information from the website server. The email application uses simple mail transfer protocol (SMTP) to send and receive email information. Also, web browsers use the domain name system (DNS) protocol to translate website domain names into IP addresses which identify the web server that hosts the information for the website. 

#### Layer 6: Presentation layer
- **Presentation**: It is presentation of data in graphical mode, represent data mode in which type like MP4, MP3, compressed.  Example: if the data is in email format so the presentation layer will apply email format to show data in email format.

	- Functions at the presentation layer involve data translation and encryption for the network. This layer adds to and replaces data with formats that can be understood by applications (layer 7) on both sending and receiving systems. Formats at the user end may be different from those of the receiving system. Processes at the presentation layer require the use of a standardized format.
	- Some formatting functions that occur at layer 6 include encryption, compression, and confirmation that the character code set can be interpreted on the receiving system. One example of encryption that takes place at this layer is SSL, which encrypts data between web servers and browsers as part of websites with HTTPS


#### Layer 5: Session layer
- **Sessions**: it handles all sessions like how much time the website is active and when the connection is close, it collects all data of time.
	- A session describes when a connection is established between two devices. An open session allows the devices to communicate with each other. Session layer protocols occur to keep the session open while data is being transferred and terminate the session once the transmission is complete. 

	- The session layer is also responsible for activities such as authentication, reconnection, and setting checkpoints during a data transfer. If a session is interrupted, checkpoints ensure that the transmission picks up at the last session checkpoint when the connection resumes. Sessions include a request and response between applications. Functions in the session layer respond to requests for service from processes in the presentation layer (layer 6) and send requests for services to the transport layer (layer 4).

#### Layer 4: Transport layer

- **Transport**: It provides host-to-host communication service for application; it decides source port and destination port and decides which protocol under which service comes. It's like a channel. The transport layer is responsible for providing a reliable connection between nodes. The transport layer is responsible for providing a reliable connection between nodes.

	- The transport layer is responsible for delivering data between devices. 
	- This layer also handles the speed of data transfer, flow of the transfer, and breaking data down into smaller segments to make them easier to transport. Segmentation is the process of dividing up a large data transmission into smaller pieces that can be processed by the receiving system. These segments need to be reassembled at their destination so they can be processed at the session layer (layer 5). The speed and rate of the transmission also has to match the connection speed of the destination system. TCP and UDP are transport layer protocols. 

#### Layer 3: Network layer

- **Network**: it is responsible for packet forwarding including routing through intermediate routers. It sends data in packet format to the next layer, it decides which IP address like which source IP and destination, router and network layer understand IP address router works under Network layer. It checks whether or not the particular packet is allowed or not, Firewall works on this. And encryption works here also, the network layer is responsible for routing data between nodes on the network. 

- The network layer oversees receiving the frames from the data link layer (layer 2) and delivers them to the intended destination. The intended destination can be found based on the address that resides in the frame of the data packets. Data packets allow communication between two networks. These packets include IP addresses that tell routers where to send them. They are routed from the sending network to the receiving network. 

#### Layer 2: Data link layer

- **Data link**: this transfer data between nodes on a network segment across the physical layer. It understands MAC-Addr , switch work under Data layer. Datalink sends data in frame format to next layer; The data link layer is responsible for error detection and correction.

	- The data link layer organizes sending and receiving data packets within a single network. 
	- The data link layer is home to switches on the local network and network interface cards on local devices.
	- Protocols like network control protocol (NCP), high-level data link control (HDLC), and synchronous data link control protocol (SDLC) are used at the data link layer.

#### Layer 1: Physical layer 

- **Physical**: check physical connectivity, check speed, check power supply. Data was in bites format, and it goes to receiver layer in binary format, The physical layer is responsible for the physical transmission of data over the network.

	- As the name suggests, the physical layer corresponds to the physical hardware involved in network transmission. Hubs, modems, and the cables and wiring that connect them are all considered part of the physical layer. 
	- To travel across an ethernet or coaxial cable, a data packet needs to be translated into a stream of 0s and 1s. 
	- The stream of 0s and 1s are sent across the physical wiring and cables, received, and then passed on to higher levels of the OSI model.


---

## ***TCP/IP***

### ***What is TCP/IP ?***

TCP/IP stands for Transmission Control Protocol/Internet Protocol, and it used for communication protocols. 

TCP and IP protocol combine in this TCP/IP protocol. 

### ***How does TCP/IP function*** ? 

- TCP/IP operates based on the client-server communication model, where a user or machine (referred to as a client) receives a service, such as sending a webpage, from another computer (referred to as a server) within the network. 
    

- The TCP/IP protocol Knows as stateless. This means that each client request is treated as a new request, independent of any previous requests. Being stateless allows for the continuous utilization of network paths, as they are not tied to specific client requests. 
    
- The TCP/IP model is somewhat different from the seven-layer Open Systems Interconnection (OSI) networking model that was created later. The OSI reference model outlines how applications can communicate across a network. 
    

#### ***There are 4 layer in TCP/IP*** 

##### 1.Application Layer [which include the OSI 3 layer , which is Application presentation, sessions layer]

- The **Application layer** in the TCP/IP model is similar to the application, presentation, and session layers of the OSI model. The application layer is responsible for making network requests or responding to requests. This layer defines which internet services and applications any user can access. Some common protocols used on this layer are:

	- Hypertext transfer protocol (HTTP)
	- Simple mail transfer protocol (SMTP)
	- Secure shell (SSH)
	- File transfer protocol (FTP)
	- Domain name system (DNS)
	- Application layer protocols rely on underlying layers to transfer the data across the network.


##### 2.Transport Layer [which include the osi 1 layer which is Transport Layer]
- The transport layer is responsible for reliably delivering data between two systems or networks. TCP and UDP are the two transport protocols that occur at this layer. 
Transmission Control Protocol 

- The UDP is used by applications that are not concerned with the reliability of the transmission. Data sent over UDP is not tracked as extensively as data sent using TCP. Because UDP does not establish network connections, it is used mostly for performance sensitive applications that operate in real time, such as video streaming.

##### 3.Network Layer [which include the osi  1 layer which is Network Layer]

- The **Internet layer**, sometimes referred to as the network layer, is responsible for ensuring the delivery to the destination host, which potentially resides on a different network. The internet layer determines which protocol is responsible for delivering the data packets. Here are some of the common protocols that operate at the internet layer:

- Internet Protocol (IP). IP sends the data packets to the correct destination and relies on the Transmission Control Protocol/User Datagram Protocol (TCP/UDP) to deliver them to the corresponding service. IP packets allow communication between two networks. They are routed from the sending network to the receiving network. The TCP/UDP retransmits any data that is lost or corrupt.

- Internet Control Message Protocol (ICMP). The ICMP shares error information and status updates of data packets. This is useful for detecting and troubleshooting network errors. The ICMP reports information about packets that were dropped or that disappeared in transit, issues with network connectivity, and packets redirected to other routers.

##### 4.Network Interface [which include the remaining 2 osi layer which is Data link , Physical Layes]

- The network access layer, sometimes called the data link layer, organizes sending and receiving data frames within a single network. This layer corresponds to the physical hardware involved in network transmission. Hubs, modems, cables, and wiring are all considered part of this layer. The address resolution protocol (ARP) is part of the network access layer. ARP assists IP with directing data packets on the same physical network by mapping IP addresses to MAC addresses on the same physical network.

- |TCP-IP MOdel|
|---|
|![TCP_IP_MODEL](./cybersecurity_img/Networking/TCP_IP_MODEL.png)|

## **Operations at the network layer**

- Functions at the network layer organize the addressing and delivery of data packets across the network and internet from the host device to the destination device. This includes directing the packets from one router to another router across the internet, based on the internet protocol (IP) address of the destination network. 
- The destination IP address is contained within the header of each data packet. This address will be stored for future routing purposes in  routing tables along the packet’s path to its destination.
- All data packets include an IP address; this is referred to as an IP packet or datagram. 
	- A router uses the IP address to route packets from network to network based on information contained in the IP header of a data packet. Header information communicates more than just the address of the destination. It also includes information such as the source IP address, the size of the packet, and which protocol will be used for the data portion of the packet. 

## **IP & MAC**

- Internet Protocols.
	- Internet assign number authority.
	- IP Addr is a Network Identity. It's an ID in the network,

- MAC is a Device Identity,
	- Devices need to find each other on a network to establish communications. 
	- These devices will use unique addresses, or identifiers, to locate each other. 
	- The addresses will ensure that communications happens with the right device. 
	- These are called the IP and MAC addresses.

> Example of Ip and mac: company give a id card to you that called IP, Whereas there is personal identity you have is called as MAC.
Company then only hires where you have MAC addr then only you get IP addr.

## **IP Address Versions & Formats**

- IP Address has Ipv4 and Ipv6 are Open source activated.
	- IPv4 is made of 4 blocks, each block hold 86bits
	- IPv4 only use decimal,
	- Why IPv6 comes > because the IPv4 get shortage,
	- IPv6 is made of 8 blocks, each block hold 128bits
	- IPv6 use hexadecimal,
	
### **Format of an IPv4 packet**

|Format of an IP Version 4 The Header & the Data|
|---|
|The size of the IP header ranges from 20 to 60 bytes. |
|The header includes the IP routing information that devices use to direct the packet.|
|The length of the data section of an IPv4 packet can vary greatly in size. However, the maximum possible size of an IP packet is 65,536 bytes. It contains the message being transferred to the transmission, like website information or email text. |
|![HEADER_AND_DATA_PACKET](./cybersecurity_img/Networking/Header_AND_DATA_PACKET.png)|

#### **Fields in IPv4 Packet**
|Fields within header of an IPv4 Packets|
|---|
|**Version**: The first 4-bit header tells receiving devices what protocol the packet is using. The packet used in the illustration above is an IPv4 packet.|
|**IP Header Length (HLEN)**: HLEN is the packet’s header length. This value indicates where the packet header ends and the data segment begins.|
|**Type of Service (ToS)**: Routers prioritize packets for delivery to maintain quality of service on the network. The ToS field provides the router with this information.|
|**Total Length**: This field communicates the total length of the entire IP packet, including the header and data. The maximum size of an IPv4 packet is 65,535 bytes.|
|**Identification**: For IPv4 packets that are larger than 65, 535 bytes, the packets are divided, or fragmented, into smaller IP packets. The identification field provides a unique identifier for all the fragments of the original IP packet so that they can be reassembled once they reach their destination. |
|**Flags**: This field provides the routing device with more information about whether the original packet has been fragmented and if there are more fragments in transit.|
|**Fragmentation Offset**: The fragment offset field tells routing devices where in the original packet the fragment belongs.|
|**Time to Live (TTL)**: TTL prevents data packets from being forwarded by routers indefinitely. It contains a counter that is set by the source. The counter is decremented by one as it passes through each router along its path. When the TTL counter reaches zero, the router currently holding the packet will discard the packet and return an ICMP Time Exceeded error message to the sender. |
|**Protocol**: The protocol field tells the receiving device which protocol will be used for the data portion of the packet.|
|**Header Checksum**: The header checksum field contains a checksum that can be used to detect corruption of the IP header in transit. Corrupted packets are discarded.|
|**Source IP Address**: The source IP address is the IPv4 address of the sending device.|
|**Destination IP Address**: The destination IP address is the IPv4 address of the destination device.|
|**Options**: The options field allows for security options to be applied to the packet if the HLEN value is greater than five. The field communicates these options to the routing devices.|
|![13_FIELD_OF_IPV4_PACKETS](./cybersecurity_img/Networking/13_field_of_ipv4_packets.png)|


### **Difference between IPv4 and IPv6**	

- it became clear that all of the IPv4 addresses would eventually be depleted; this is called IPv4 address exhaustion. At the time, no one had anticipated how many computing devices would need an IP address in the future.
- IPv6 was developed to mitigate IPv4 address exhaustion and other related concerns. 

|IP Version 4 Vs IP Version 6|
|---|
| One of the key differences between IPv4 and IPv6 is the length of the addresses. |
|IPv4 addresses are numeric, made of 4 bytes, and allow for up to 4.3 billion possible addresses. |
|IPv4 addresses are made up of four strings and the numbers range from 0 to 255. |
| An example of an IPv4 address would be: 198.51.100.0. IPv6 addresses are hexadecimal, made up of 16 bytes, and allow for up to 340 undecillion addresses (340 followed by 36 zeros).| 
|An example of an IPv6 address would be: 2002:0db8:0000:0000:0000:ff21:0023:1234.|
|There are also some differences in the layout of an IPv6 packet header. The IPv6 header format is much simpler than IPv4. For example, the IPv4 Header includes the HLEN Identification, and Flags fields, whereas the IPv6 does not. The IPv6 header introduces different fields not included in IPv4 headers, such as the Flow Label and Traffic Class.|  
|There are some important security differences between IPv4 and IPv6. |
|IPv6 offers more efficient routing and eliminates private address collisions that can occur on IPv4 when two devices on the same network are attempting to use the same address.|
|![Different_between_ipv4_ipv6](./cybersecurity_img/Networking/DIFFERENT_BW_IPV4_IPV6.png)|

---

# Working Processs

## ***Network devices*** 

- *Router*: A router is a device that connects two or more networks together. Routers use the internet layer to route data between networks. 
    
- *Switch*: A switch is a device that connects devices on the same network together. Switches use the data link layer to forward data between devices. 
    

- *Hub*: A hub is a device that connects devices on the same network together. Hubs use the physical layer to repeat data between devices. 
    
- *Wireless*: A wireless access point is a device that allows devices to connect to a network wirelessly. Wireless access points use the physical layer to transmit data over the air. 
    
---


## ***Network Cable*** 

- *UTC Cable*: UTP cable is a type of cable that is used to connect devices to a network. UTP cable is made up of four pairs of copper wires. And it transports in Waves. 
    
- *Fiber cable*: Fiber optic cable is a type of cable that is used to connect devices to a network. Fiber optic cable is made up of a thin strand of glass or plastic that carries light. It transports in light.

---

## ***PORTS***

- Its has two Types.
- *Physical port*: which is ethernet, USB, AUX.... 
    

- *Virtual port*: it has a pair of 65535... 
    
### ***What are the ways ports go ?***

It has two ways to go TCP or UDP 

Then Both ways have 65535 roads. 

Both Ways TCP and UDP has it rules and regulation  

which is  

- TCP state that data connection will not be dropped. 
    
- UCP state that it can't guarantee that data connection will not be dropped. 
    

>Server: means whatever software is deployed. 
>Client: they are using the software without copying the actual data. 



>Server --> HTTP, MYSQL, FTP, open SHH 
>Client --> Browser/curl, Maria Database, FTP client, SSH 


Whatever the software functionality is.. 
when the software is over the world to use as a server and client they using ports. 

## ***Netcat***

### ***What is Netcat ? ***
Netcat is a software who communicate in TCP and UDP protocal. 

Netcat can become server or client.  

- In order to make a server netcat has to listen. 
    - -L listing become a server and use a software. -P port  -v verbosity 
    

```
nc –L  -p 1 –v
```

- In order to make client connect to netcat server using the below cmd
- Which means >>#<code>***nc (server-ip) 127.0.0.1 (port) 1***</code>
```
nc  127.0.0.1 1
```

![netcatserver_client](./cybersecurity_img/Networking/ports/netcatserver_client.png)

- Wireshark filter For TCP ports {Any Random Port}

```
tcp.port==1
```

---
### ***TCP HankShakes***

- #### ***TCP Half Connection***
- Wireshark packet 
	- TCP SYN,
	- TCP SY+ACK
	- TCP ACK

![tcp_port1_3wayhankshake](./cybersecurity_img/Networking/ports/tcp_port1_3wayhankshake.png)

|  Clinet to Server   |
|---|
|![tcp.port.2wayhankshake1](./cybersecurity_img/Networking/ports/tcp_port1_3wayhankshake1.png)|

| Server to Client |
|---|
| ![tcp.port.3wayhankshake.server.to.clients](./cybersecurity_img/Networking/ports/tcp_port_3wayhandshake_servertoclient.png)|


- #### ***TCP Full Connections***

|Fin Packet |
|---|
|![Fin.packet.of.tcp.full.connction](./cybersecurity_img/Networking/ports/finpacktoftcpfullconnection.png) |



- **If the TCP port is not open in server end this will be the RST packet reset packet:**

![tcprstpacket](./cybersecurity_img/Networking/ports/tcpportnotopeninfullconnection.png)

---

### **UDP**

•	**-u** for UDP,
![netcat-udp-port-start](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/udp/netcatusplisting.png)

> Wireshark filter: udp.port==1


-	***The application layer will be seen when you enter.***
-	***This is the request and response packet:***

![udp-port-1-wireshark-udp-1](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/udp/udp-port-1-wireshark-1.png)

| ***Client saying hello to server:*** |
|---|
|![client-saying-hello-to-server-udp-1](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/udp/clientsayinghelloto%20sserver-udp-1.png) |
| ***WireShark***|
| ![client-saying-hello-to-server-udp-1-wiresharks](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/udp/clientsayinghelloto%20sserver-udp-1Wiresharks.png)|


| ***Server saying hello to client:***|
|---|
|![server-saying-hello-to-client-udp](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/udp/server-saying-hello-to-client-udp-1.png) |
| ***Wiresharks***|
|![server-saying-hello-to-client-udp-wireshark](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/udp/server-saying-hello-to-client-udp-1-wireshark.png)|

- If Client and Server Close the Connection of UDP the packet did not generate.
- It bases on request and response.

And port number 0 is used , at that time nc using the whatever  free port  is , 
Choice any port which is available.
And ***why it is used because when connect with multiply tabs on browser , multiply communication.***

### ***Service*** 

- Protocol has its own ***rules and regulations***, and *** same for Services *** also.
So, services are depended on protocol.
That means to use the _software application or deployment they do agree on rules and regulation of both protocol and services._

#### HTTP port 80:

|#nc lvp 80 (server) #nc 127.0.0.1 80 (client or use browser)|
|---|
|![netcat-http-connection](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/http/netcadhttpconnection.png)|
| First **TCP** connection made because **http uses TCP**  Then **http** connection made:|
|![netcat-htt-connection-wireshark](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/http/netcadhttpconnection-wireshark.png) |

| **Fin Packet** |
|---|
|![netcat-http-connection-fin-packet](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/http/netcadhttpconnection-fin-packet.png) |

| **When the port is not open and client request in TCP this is the RSK packet:**|
|---|
|![netcat-http-connection-rst-packet](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/http/netcadhttpconnection_RST_packet.png) |

### ***HTTPS***

- **HTTPS** is the **upgradation** version on **HTTP**.
- **HTTPS** is secure as in **HTTP** the message and packet are in readable format. But in HTTPS the packets are not in readable format.

|![netcat_https_connections](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/https/netcat_https_connection.png)|
|---|

| **Wireshark**|
|---|
|![netcat_https_connections_wireshark](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/https/netcat_https_connection_wiresharks.png)|

| **Example** | 
|---|
|Hello client Is including in https service rule.|
|Because of SSL it used to encrypted the packets |
| **SSL is included in https service** |
|![ssl-connections](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/https/netcat_https_connection_ssl.png) |
|**Fin Packet** |
|![ssl-connetion-fin-packet](./cybersecurity_img/Basic%20Enum%2C%20Info%20Gathering%20%26%20Vulnerability%20Assessment/service/https/netcat_https_connection_fin_packet_wiresharks.png) |

---

