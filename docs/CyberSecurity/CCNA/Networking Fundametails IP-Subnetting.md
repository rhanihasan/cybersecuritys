---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';


# IP Address Subnetting & IPv6

## What & Why IP Address

- IP stands for Internet Protocol.
- IP Address was created and assigned by IANA (Internet Assigned Numbers Authority).
- It's an address that can control access.

### Versions

- IPv1
- IPv2
- IPv3
- IPv4 & IPv6 are successful and working.

- IANA is the organization that distributes IP Addresses worldwide.

## IP Address Class

| Class    | Range                         | Details                               |
| -------- | ----------------------------- | ------------------------------------- |
| Class A  | 1.0.0.0 - 126.255.255.255     | Used by ISPs & their Public IPs       |
| Class B  | 128.0.0.0 - 191.255.255.255   | Used by ISPs & their Public IPs       |
| Class C  | 192.0.0.0 - 223.255.255.255   | Used by ISPs & their Public IPs       |
| Class D  | 224.0.0.0 - 239.255.255.255   | Network Device/Communication & Multicast |
| Class E  | 240.0.0.0 - 255.255.255.255   | Research Centre etc.                  |

- IP Range: 0-255.0-255.0-255.0-255
- Dynamic Combination
- First and Last Part should not be zero
- ISPs can use Classes A, B, C
- Last number being zero represents Network
- One IP Address can maintain 65,535 Devices

### Note

Due to the increase in electronic devices, the shortage of assigned IP addresses has led to the use of Private Addresses with NAT.

## Types of IP Address

1. Public: Used on the internet. No two machines can have the same IP address and port simultaneously.
2. Private: Used in LAN. Two LANs in different locations can have the same IPs. Machines can access others within LAN but can't access the web.

## NAT (Network Address Translation)

- Converting free-use private IP addresses into public IP addresses.
- Private IP addresses work under LAN and go through NAT to reach WAN.

## Private IP Address IPv4

| Class    | Range                     | Hosts Up                    |
| -------- | ------------------------- | --------------------------- |
| Class A  | 10.0.0.0 - 10.255.255.255 | (16,777,216 IP addresses)   |
| Class B  | 172.16.0.0 - 172.31.255.255 | (1,048,576 IP addresses) |
| Class C  | 192.168.0.0 - 192.168.255.255 | (65,536 IP addresses)    |

- These addresses are private and can only be used within a local network.
- They can't access the internet directly; they're converted into public IP addresses when accessing the internet.

## Digging up IP Address

- IPv4 is divided into 4 parts, each with 8 bits.
- IPv4 has a total of 32 bits.
- Each part can have a number from 0-255.
- IP address can't start or end with 0.
- IP with 0 at the end represents the network.

# Subnet

## What & Why Subnet

- Subnet can divide big networks.
- Subnet can control IP addresses.
- Subnets are the bits which IP addresses have.

Example: 192.168.1.0 has 255.255.255.0 subnets which have (65,536 IP addresses) free in LANs.

## What & Why Subnetting

- Subnetting is dividing the subnets.

- Network Bits are fixed and can't change.
- Host Bits are changeable.

Example:

- Class A has 10.0.0.0
- That means 10 is network bits & 0.0.0 is host bits, 32-8 = 24 host bits
- Class A 10.0.0.0 has 8 network bits and 24 host bits.

- Class B has 172.16.0.0
- That means 172.16 is 8+8 bits = 16 bits and host bits are 32 – 16 = 16 host bits.
- Class B 172.16.0.0 has 16 network & 16 host bits.

- Class C has 192.168.1.0
- That means 192.168.1 = 8+8+8 = 24 and host bits are 32-24 = 8 host bits.
- Class C 192.168.1.0 has 24 network & 8 host bits.

Formula: 2^n = two to the power of n + Internet Protocol has 8 bits.

## Subnet Address

Number/Range | Details
------------ | -------
/8 | Default of Class A Network ID
/16 | Default of Class B Network ID
/24 | Default of Class C Network ID

Formula for Subnet Mask:

- Class A: Network Bits + Converted Host Bits = Subnet Mask
- Class B: Network Bits + Converted Host Bits = Subnet Mask
- Class C: Network Bits + Converted Host Bits = Subnet Mask

## FLSM

## What & Why FLSM (Fixed Length Subnet Mask)

- FLSM stands for Fixed Length Subnet Mask.
- Its subnet size can't be changed, also known as Fixed Size.
- FLSM means a big IP can be shortened into an equal number of small networks.

## VLSM

## What & Why VLSM (Variable Length Subnet Mask)

- VLSM stands for Variable Length Subnet Mask.
- VLSM means we can give IPs according to our needs.

- We start from networks with the highest requirement.
- VLSM allows efficient use of IP addresses in variable-sized subnets.

## IPv6

## What & Why IPv6

- IPv6 was introduced to address the shortage of IPv4 addresses.
- IPv6 has a size of 128 bits.
- IPv6 has 8 segments of 16 bits each, totaling 128 bits.
- IPv6 is classless and not an upgraded version of IPv4.
- Larger header size in IPv6 (40 bytes) compared to IPv4 (20 bytes).
- NAT is not required in IPv6 due to a large number of available addresses.
- IPv6 supports various addressing and routing functionalities.


