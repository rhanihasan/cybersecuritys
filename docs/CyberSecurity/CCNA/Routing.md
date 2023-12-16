---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';

# Routing
---

## **Basic Router Concepts:**

1. **Router Functionality:** Routers operate at Layer 3 (Network Layer) of the OSI model and are used to connect different networks.

2. **Routing Table:** Routers maintain a routing table, which contains information about destination IP addresses and the paths (routes) to reach them.

3. **Interface Configuration:** Router interfaces are typically in a shutdown state by default, and you need to manually enable them using the `no shutdown` command.

**Basic Router Configuration Commands:**

- `enable`: Enter privileged EXEC mode.
- `show ip interface brief` or `show interfaces`: View information about all interfaces.
- `show ip interface <interface>`: Check details for a specific interface.
- `show interfaces status`: Display the status of interfaces.
- `show ip route`: View the routing table.
- `configure terminal`: Enter global configuration mode.
- `hostname <name>`: Set a hostname for the router.
- `enable secret <password>`: Set an encrypted enable password.
- `banner motd <symbol>`: Configure a banner message for login.
- `line console 0`: Configure the console line for password protection.
- `password <pass>`: Set a console password.
- `login`: Enable login on the console line.
- `service password-encryption`: Encrypt passwords.
- Interface Configuration:
  - `interface <interface>`: Enter interface configuration mode.
  - `ip address <IP> <subnet mask>`: Set an IP address and subnet mask for an interface.
  - `no shutdown`: Enable the interface.
- `interface range fa<0/1-4>`: Select multiple interfaces for configuration.
- Web Server Configuration:
  - `ip http server`: Enable HTTP server for port 80 connections.
  - `ip http secure-server`: Enable HTTPS server for port 443 connections.
- `no ip domain lookup`: Disable DNS lookup.
- `show clock`: Check the router's time.
- `clock set <time and date>`: Set the router's time and date.
- `clock timezone <timezone>`: Change the router's timezone.

## **Routing Concepts:**

- **Router has two types:**
  1. Fixed
  2. Modular

- **Boot Sequence:**
  - POST (Power-On Self-Test), which loads a bootstrap program.
  - It checks the configuration register values, which are 0x2012 and 0x2142.
  - The bootstrap program locates the configuration register and proceeds to check for the IOS on the flash drive, loading it into RAM (Decompression of IOS).
  - Once loaded, it becomes the running configuration stored in RAM, and the startup configuration is saved in NVRAM.

- **Routing Protocols:** Routers use routing protocols to exchange network information and fill their routing tables. Examples include RIP, OSPF, and EIGRP.
- **IGP (Interior Gateway Protocol):** Used for smaller networks within an organization. Examples: RIP, OSPF, EIGRP.
- **EGP (Exterior Gateway Protocol):** Used for larger, external networks like the Internet. Examples: BGP, EGP.
- **Distance Vector vs. Link State:** Routing protocols can be categorized as distance vector (based on hop count) or link-state (considering factors like speed).
- **Hop Count:** The number of routers between the source and destination is known as hop count.

### **Static Routing & Default Routing:**

- Static routing involves manually configuring routes on a router.
- Example Command: `ip route <destination> <subnet mask> <next hop IP>`
- Default Route: Used when the destination IP is not known. Example: `ip route 0.0.0.0 0.0.0.0 <next hop IP>`

- Static Routing & Default Routing
    - Will have to inform and direct all router about they route or direction.
    - Disadvantage
        - Its hard to monitor in static routing.
        - It doesn't know backups.
        - Bydirections Routes required. 
- Dynamic Routing 
    - Its works on Alogrithums.
    - There are three types of Alogrithums. 

## **Dynamic Routing:**
- Dynamic routing involves configuring a dynamic routing protocol on a router to automatically select the best routes.
- These protocols automatically update routes when network changes occur, making them adaptive.

### **Routing Protocol Types:**

#### 1. **IGP (Internal Gateway Protocol):**
   - Used within a single autonomous system (organization or company) to share routes.
   - Examples include RIP, OSPF, and EIGRP.
   
#### 2. **EGP (External Gateway Protocol):**
   - Used to share routes between different autonomous systems.
   - Example: BGP (Border Gateway Protocol).

#### **Routing Algorithm Types:**
##### 1. **Distance Vector Algorithm:**
   - Older than the link-state protocol.
   - Routers send known destination networks and metrics to their directly connected neighbors.
   - Routers learn routes based on the information provided by their neighbors.
   - Often referred to as "routing by rumor."

##### 2. **Link-State Algorithm:**
   - Faster than distance vector.
   - Every router creates a connectivity map of the network.
   - Advertisements are shared among routers until all routers have the same network map.
   - Each router independently calculates the best route to each destination based on this map.
   - Requires more CPU on routers but shares more information.

#### **Administrative Distance (AD):**
- AD is used to determine the preference of routing protocols. Lower AD values indicate more trustworthy and preferred protocols.
- When using static routes, you can append an AD value to indicate a preference. These are called "float static routes."

#### **Passive Interfaces:**
- Passive interfaces send routing protocol updates but do not accept any updates from the interface.
- Useful for interfaces connected to non-routing devices (e.g., PCs, switches without routing capability).
- Can be configured using commands like:
  ```
  enable
  configure terminal
  interface <interface>
  router <routing-protocol>
  passive-interface <interface>
  ```

#### **Debugging ICMP:**
- The `debug ip icmp` command helps determine if a router is responding to ICMP (ping) requests.

### **RIP**

RIP (Routing Information Protocol):

#### **Overview:**
- RIP was created using the Bellman-Ford algorithm and is also known as a distance vector protocol.
- RIP counts the number of "hops" or routers between networks to determine the best path.
- It chooses the best path based on the fewest number of hops, irrespective of link speed.

#### **Metric Components:**
- **Hops Counts**

#### **Disadvantages:**
- Metric is based solely on hop count (minimum hop is considered the best).
- RIP operates as a service under UDP port 520.
- RIP has a maximum hop count limit of 15.

#### **Timed Updates:**
- RIP sends updates every 30 seconds to share routing information.
- When a new router is added, it sends updates with both new and previous data.
- Hold-down time of 180 seconds: RIP waits for this duration when a network goes down, thinking it might recover.
- After 180 seconds, the flush timer becomes active, which is set to 60 seconds. During this time, it deletes network data. The total time is 240 seconds.

#### **Administrative Distance (AD):**
- AD values indicate the trustworthiness of a route. Lower values are more trusted.
- RIP has an AD of 120.

#### **RIP Version 1:**
- Does not support authentication, which can lead to security issues and network instability.
- Doesn't understand customized subnet masks, which means it doesn't support Variable Length Subnet Masks (VLSM) or Classless Inter-Domain Routing (CIDR).
- Broadcasts all data, which can be inefficient.

### **Differences Between RIPv1 and RIPv2:**

| Aspect                 | RIPv1                            | RIPv2                              |
|------------------------|----------------------------------|------------------------------------|
| Routing Type           | Distance vector                  | Distance vector                    |
| Subnet Mask Support    | Classful (No VLSM or CIDR)       | Classful and Classless (Supports VLSM and CIDR) |
| Authentication         | No authentication support        | Supports authentication mode      |
| Hop Limit              | 15                               | 15                                 |
| Update Mechanism       | Broadcast updates                | Triggered updates                  |
| Manual Route Summarization | Not supported                | Supported                          |


:::note
Authentication is important in **RIP** to prevent unauthorized routers from injecting incorrect routing information into the network, which could lead to network instability or attacks like DoS and DDoS. RIPv2, with its support for authentication and classless routing, offers enhanced security and flexibility compared to RIPv1.
:::
#### **Default Configuration:**
```
router rip
version [number]
network [network-id]
```

#### **RIP Commands**

The following are some common RIP commands:

- router rip: Enables RIP on the router.
- version: Specifies the version of RIP to use.
- network: Specifies the networks to advertise.
- no auto-summarization: Disables automatic route summarization.
- passive-interface: Prevents the router from sending routing updates on a specific interface.
- efault-information originate: Advertises a default route.

--- 


### **IGRP (Interior Gateway Routing Protocol):**

#### **Overview:**
- IGRP (Interior Gateway Routing Protocol) was developed by **Cisco**.
- It's used for routing within an autonomous system (AS).
- IGRP uses a dual algorithm to calculate the metric.
- The metric in IGRP is determined by two factors: bandwidth and delay.

#### **Metric Components:**
- **Bandwidth:** It represents the speed of the interface. Higher bandwidth is preferred.
- **Delay:** IGRP calculates the delay based on how long it takes for a packet to travel from the source to the destination. Lower delay is preferred.

#### **Timed Updates:**
- IGRP sends updates every 90 seconds.
- The maximum number of hops allowed in IGRP is 100.
- The administrative distance (AD) value for IGRP is 100, which indicates its trustworthiness in routing decisions.
- When IGRP sends updates, it broadcasts the data to all devices in the network.

#### **Protocol Characteristics:**
- IGRP uses protocol number 9 in IP headers.
- IGRP operates in a classful manner, which means it does not support subnetting, Variable Length Subnet Masks (VLSM), or Classless Inter-Domain Routing (CIDR).

:::note
IGRP was an early proprietary routing protocol developed by **Cisco**. While it had some advantages, it's largely been replaced by more open and widely adopted routing protocols like **OSPF** and **EIGRP**. These modern protocols offer greater flexibility and are more suited to complex, modern networks.
:::


---


### **EIGRP**


**EIGRP (Enhanced Interior Gateway Routing Protocol):**
- **Protocol Number:** 88
- Developed and maintained by Cisco, an advanced version of IGRP.
- Utilizes Dual Algorithms for routing decisions.


**Key Features:**
- Maximum Hops is 256
- Support Wildcard , which is Total number of subnet minus subnet question 

```
Example:
	255.255.255.255
	255.255.255.0
	0.0.0255
```

- Supports Classless routing.
- Supports FLSM (Fixed-Length Subnet Masking) and VLSM (Variable-Length Subnet Masking), including subnets.
- Wildcard masks can be used for summarization.  
- Classless, Support FLSM & VLSM , Subnets.


#### **Metric Calculation:**
- EIGRP metric calculation includes bandwidth, delay, reliability, load, and MTU.


**Bandwidth and Delay Calculation:**
- Bandwidth calculated as 10^7 / (least bandwidth).
- Delay is the sum of delays on serial links, divided by 10 for unit conversion to seconds.

**Load Balancing:**
- Load balancing occurs when multiple routes have identical metrics.
- Load can dynamically change based on traffic patterns.
- History of link utilization is considered for load balancing.
-	When both route has all functions same. Then load balance will apply.
-	Load can be change anytime, because of traffic.
-	How many times , the packed down its check the history of link (link means wire)
-	Multi cast id 224.0.0.10

#### **MTU (Maximum Transmission Unit):**

- Represents the maximum size of data transmitted over a network.
- EIGRP now primarily uses bandwidth and delay for metric calculation instead of MTU.
- Maximum transmission Units
- First converted into frightments and into binary  to Physical OSI layer and send data into 1500 BYTES.
- So Load balance , Reliability can caused RAM and CPU of  router heavy impacted that why now eigrp only uses Bandwidth and speed.



#### **Interface Types and Characteristics:**
- **Serial Cable:**
  - Bandwidth: 1544 Kbps
  - Delay: 20,000 milliseconds

- **Ethernet:**
  - Bandwidth: 10 Mbps
  - Delay: 200 milliseconds

- **FastEthernet:**
  - Bandwidth: 100 Mbps
  - Delay: 100 milliseconds

- **GigabitEthernet:**
  - Bandwidth: 1 Gbps
  - Delay: 10 milliseconds

**Changing EIGRP Routes:**
- EIGRP uses bandwidth and delay in its metric calculation.
- To influence EIGRP route selection, you can modify these parameters.
- For example, if you want to change the route preference, you can adjust the bandwidth and delay values on the relevant interfaces.

**Example:**
Suppose you want to change the route preference for a FastEthernet interface. You can do this by modifying the bandwidth and delay values. Let's say you want to make the FastEthernet interface less preferred:

```bash
interface FastEthernet0/0
 bandwidth 50000  # Adjust the bandwidth to a higher value (e.g., 50 Mbps)
 delay 2000       # Adjust the delay to a higher value (e.g., 2000 microseconds)
```

By increasing the bandwidth and delay, you are effectively making the route less desirable, and EIGRP may choose an alternative route with lower metric values.



####	**Hello Packets and Neighbor Table:**
-	Hello packets are exchanged every 5 seconds between routers to check the status of neighboring routers.
-	Neighbour tables store information about adjacent routers, including address and interface details.
	
####	**Update Timing:**
-	Updates occur every 5 seconds.
-	Hold-down time is 15 seconds.


####	**Neighbour table**
-	Each router keep state information about adjacent neighbours. When a newly discoverd neighbour is found its address and interface are recorded and information is hold in neighbour table.
>	R1 ---> R2

-	Hello  Packet
>	R1 <---- R2 

-	Hello Packet
-	Its send packet not data sp router memories and ram is not getting fullystorage.
####	**Topology table**
-	Collect all the data of route.
>	R1 ----> R2

-	Full Table
>	R1 <---- R2

-	Thanks
>	R1 <---- R2

-	Full Table
>	R1 -----> R2

-	Thanks

####	**Topology Table:**
-	Collects all data about routes.


**Hello Packets and Neighbor Table:**
- Hello packets are exchanged every 5 seconds between routers to check the status of neighboring routers.
- Neighbour tables store information about adjacent routers, including address and interface details.

**Update Timing:**
- Updates occur every 5 seconds.
- Hold-down time is 15 seconds.

**Topology Table:**
- Collects all data about routes.

**Routing Table:**
- Displays the best routes.
- Filters all routes to show only the best ones.
- Its filters all the routes shows the best routes Now router has many route so Router cant  shows all the routes.
   - Send hello packet every 5 second (To check the partner is Alive or dead)
   - And if down then its takes 15 second to shutdown that routes.




**EIGRP and OSPF:**
- Both have incremental updates, meaning new connections are updated instantly.
- IGRP and EIGRP work specifically on Cisco devices, while OSPF is vendor-independent.


**EIGRP Metric Formula Example:**


-	EIGRP Choice the least form link
- For bandwidth with serial Link.
   - 107   / least Bandwidth  = 107   / 1544 = 1,00,000/1544 = 6477
-	For delay 
- Delay = sum all link
   - R1 + R2 + R3+ with serial link number
   - 20,000 + 20,000 + 20,000 = 60,000
   - Divide by 10 % because convert into unit per second 
   - 60,000 / 10 = 6000
-	For Metric 
-  Metric = Bandwidth + delay * 256
   - 6477 + 6000 *256  = 3194112

#### **Universal Configuration:**
- `Router eigrp <AS Number>`
- `Network <wildcard>`

**EIGRP Verification Commands:**
- `show ip eigrp neighbors`
- `show ip eigrp interface`
- `show ip route eigrp`
- `show ip eigrp topology`
- `show ip eigrp traffic`
- `show ip protocols`