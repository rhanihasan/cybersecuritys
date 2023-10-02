---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';

# Routing



### There are two types of Routing 
- Static Routing & Default Routing
    - Will have to inform and direct all router about they route or direction.
    - Disadvantage
        - Its hard to monitor in static routing.
        - It doesn't know backups.
        - Bydirections Routes required. 
- Dynamic Routing 
    - Its works on Alogrithums.
    - There are three types of Alogrithums. 


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

