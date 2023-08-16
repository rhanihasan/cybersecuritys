---
sidebar_position: 2
---

# Network 101 Topology & Components

---

## **Network Topology** 

### **What Is network Topology ?** 

- **Topology** means **Diagram** ==>  **Network Diagram**.

## **Types of Topology’s** 

### **Point to Point Topology’s.**

:::note
Its a point to point connection.
:::


## **Bus Topology**

|![Bus_topologyes](./img/Network%20101%20Topolgy%20and%20%20components/bus_topology.png)|
|---|


|Pros|Cons|
|---|---|
|Bus topology is cheap,  |Files doesn't has secret (it broadcasts data to all)|
|Use a single coaxial cable which connects all ,including nodes.| There is not backup when the cable is damage |

#### **BNC Creator : Bayonet Neill–Concelman**
 
#### **BNC Connector** 
- It was used to connect multiple devices .
- It was use as a switch at that time.

#### **Coaxial Cable**
- It was used to connect devices.
- It is a single wire cable that can sent or received data at one at the time.

## **Ring Topology**
### **What is Ring Topology**

- Every Device has exactly two neighbouring devices for communication purpose.

|![RING_TOPOLOGY](./img/Network%20101%20Topolgy%20and%20%20components/ring_topology.png)|
|---|

|Pros | Cons|
|---|---|
|Its has a backup ways to destination in networks |Its doesnt have BNC Terminator. & ts has struggle to add new Pc’s because ring Wire has to be the connected wires, It has BNC connector.|

## **Star Topology** 

#### **What & Why Star Topology**

- All the computer connects with the help of Hub.
- BNC to RJ45 Converter
- It a connector between BNC to RJ45, It helps to connect two different type of topologies.

|![Star_topology](./img/Network%20101%20Topolgy%20and%20%20components/Star_topology.png)|
|---|

|Pros | Cons |
|---|---|
| If one PC is down  & cable is physically damaged So the  others are not effected. | It has half Duplex [Data flow one ways]|



## **Hybrid Topology**

### **What & Why Hybrid Topology**

- It a mixer of two or more topology & combination of topology it can be connected by BNC to RJ45 Convertor.

|![Half_mesh_topology](./img/Network%20101%20Topolgy%20and%20%20components/Hydrid_topology.png)|
|---|
|Cons|
|It effects the speed of data, Its half-Duplex |



## **Mesh Topology**

### **What & Why Mesh topology** 

- It used when two or more branches at different places but dont want ant third partly involved so connect to both with cables or VPN 

|Half & Full Mesh Topology|
|---|
|![Half-mesh-topology](./img/Network%20101%20Topolgy%20and%20%20components/half_mesh_topology.png)|
|![full-mesh-topology](./img/Network%20101%20Topolgy%20and%20%20components/full_mesh_topoplogy.png)|


|Pros|Cons|
|---|---|
|Full Duplex in Full Mash Topology| Half Mesh can travel only one direction Half Duplex. It need licences form government to apply. Maintainces is costly.|

## **Network Components** 

- it is a digital telecommunications network which allows nodes to share resources. Nodes are also known as endpoints or end hosts.

### **Types of Components**

#### **Clients**

- laptop, desktop, phones.
- These devices access service made available by a server.

#### **SERVERS**
- A device provides services with clients.

#### **SWITCHES & HUB**

- The first device was HUB then its updated by Switches.

- HUBs
    -  Its a dummy device.
    - Its doesnt understand IP & MAC Address.
    - Its broadcast Data to all.
    - Its not costly & doesn’t need power supply.

|Pros|Cons|
|---|---|
|Cheap, doesn’t need power supply, Multiply connections.|Broadcast, dummy device, Doesn’t understand ip & mac, can’t perform configuration, no software & half duplex.|

- Switches
    - Switches are used to connect devices within a  Lan. 
    - Switches have multiple interfaces/ports for end host to connect to. 
    - Once devices are connected to it, it creates a table a saves the mac addresses of these devices using ARP Protocols.


|Pros|Cons|
|---|---|
|Connects multiple device has serval ports company can also customize the switch according to the requirements.Doesn’t Broadcast.|Expensive / Costly.|
|Understands MAC & IP Address.  & Have some Security Feature.| Need More Power Supply.|


#### **ROUTERS**

- Routers are used to connect different lans.
- They have fewer network interfaces than switches.
- They are used to send data over the internet.
- Cisco isr routers are enterprise grade routers.
- Routers at the end that connect the entire network to internet is called gateway.
- Understand IP for sending outside LAN we required router.

#### **Repeater**

- Repeater helps to transfer the data with some speed it started [boost data and frequency etc]

#### **Ethernet Port Type**

- Ethernet >- 10 MBPS
- Fastethernet >- 100 MBPS
- Gigabitethernet >- 1 GBPS
- SFP Ports >- 10 GBPS


#### **FIREWALLS**

- They are network security devices that protects a network from attacks.
- We also have software/Virtualized  firewalls.

- ASA Adaptive Security Appliance

    - It filters IP Address.
    - Maintain traffics
    - Which IP Address is to be permitted and which to be denied.
    - It can manually block URL’s
    - Doesn’t filter Emails.

- FTD
    - Firepower thread defence
    - This device works as WSA, firewall, NGIPS, amp
