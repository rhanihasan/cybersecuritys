---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';

# Routing




It seems like you've provided an overview of basic router configurations and routing concepts. Here's a summary of the key points:

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

## Routing Concepts:**

- **Routing Protocols:** Routers use routing protocols to exchange network information and fill their routing tables. Examples include RIP, OSPF, and EIGRP.
- **IGP (Interior Gateway Protocol):** Used for smaller networks within an organization. Examples: RIP, OSPF, EIGRP.
- **EGP (Exterior Gateway Protocol):** Used for larger, external networks like the Internet. Examples: BGP, EGP.
- **Distance Vector vs. Link State:** Routing protocols can be categorized as distance vector (based on hop count) or link-state (considering factors like speed).
- **Hop Count:** The number of routers between the source and destination is known as hop count.

### Static Routing & Default Routing:**

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

