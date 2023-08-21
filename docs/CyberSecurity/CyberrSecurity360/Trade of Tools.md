---
sidebar_position: 2
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trade of Tools

## Memory
Kindly Refer the CCNA Memory Tab.

## Operating Systems

### Windows & MacOS
Windows and macOS are both common operating systems. The Windows operating system was introduced in 1985, and macOS was introduced in 1984. Both operating systems are used in personal/regular and enterprise computers.

Windows is a closed-source operating system, which means the source code is not shared freely with the public. macOS is partially open source. It has some open-source components, such as macOS’s kernel but not everything.

### Linux
The first version of Linux was released in 1991, and more versions came out in the early 90s. Linux is entirely open, so anyone can see how it works.
ChromeOS came out in 2011. It's kind of open, taking some ideas from Chromium OS, which is totally open. ChromeOS is often used in schools.

### Android & iOS
Android and iOS are systems for mobile devices like phones, tablets, and watches. They were introduced in 2008 and 2007, respectively. Android is more open, and iOS is partly open.

All operating systems, including mobile ones, have security concerns. To stay safe, it's vital to keep your system and its parts current.

## Legacy Operating Systems

A legacy operating system is an operating system that is outdated but still being used. Some organizations continue to use legacy operating systems because software they rely on is not compatible with newer operating systems. This can be more common in industries that use a lot of equipment that requires embedded software—software that’s placed inside components of the equipment.

Legacy operating systems can be vulnerable to security issues because they’re no longer supported or updated. This means that legacy operating systems might be vulnerable to new threats.

## The Operating System at Work

Operating systems are like computer brains; they link up apps and hardware so stuff can be done.

### Starting Up the Computer

When you turn on your computer, a tiny chip called The Basic Input/Output System (BIOS) or The Unified Extensible Firmware Interface (UEFI) wakes up. BIOS is the old version found in older systems, and it's got basic instructions for the computer. UEFI is the newer version that does the same thing but in a more modern way.

Both BIOS and UEFI help the computer start up. Until 2007, BIOS was the go-to chip. After that, UEFI became more popular. These days, most new computers use UEFI, which is better for keeping things safe.

Inside the BIOS or UEFI chips, there are different sets of instructions for the computer. One of these tells the computer to check if its hardware is in good shape.

The final instruction from BIOS or UEFI tells the bootloader to wake up. The bootloader is like special software that starts up the operating system. Once the operating system is up and running, your computer is ready to be used.

Let's break down the computer process in simpler terms:

**1. User:**
You, as the user, start things off by wanting to do something on the computer. Right now, you're the user since you're reading this.

**2. Application:**
The application is like a tool you use to get your task done. For instance, if you need to calculate something, you'd use a calculator app. If you want to write, you'd use a word processor. This is the second part.

**3. Operating System:**
The operating system is like the conductor. It takes what you want from the app and figures out how to make it happen. It then directs the work to different parts of the computer.

**4. Hardware:**
The hardware is where the real work takes place. It's like the engine of your computer. When you want to do a calculation, the CPU does the math. When you save a file, the hard drive stores it.

**5. Output:**
Once the hardware does its job, it gives the result back to the operating system. Then, the operating system shows it in the app, so you can see the outcome.

**Behind the Scenes:**
Think of a computer like a car. You might not see everything going on inside, but you feel it moving when you press the gas pedal. Similarly, the operating system does important work behind the scenes to make your tasks happen, just like a chef in a kitchen making your food without you watching.

**Downloading a File Example:**
Let's see how this works when you download a file from the internet:

1. You decide to download a file from a website and click the download button.
2. The browser tells the operating system what you want to do.
3. The operating system gets the hardware ready to download the file.
4. The hardware starts downloading, and the operating system lets the browser know what's happening. The browser tells you when the download is done.

This process, like the car or restaurant analogy, involves different parts working together to give you the result you want.

## Virtualization Unveiled: Running Mini-Computers Inside Your Computer

### Defining a Virtual Machine

Imagine a computer within your computer – that's a virtual machine (VM). Virtual machines are a prime example of virtualization. Virtualization involves using software to craft virtual versions of real machines. The term "virtual" indicates that these machines exist as software simulations of physical hardware. Virtual systems ditch the need for dedicated physical components; instead, they utilize software-defined versions of physical hardware. This means a virtual machine boasts a virtual CPU, virtual storage, and other virtual hardware. Essentially, virtual systems are made of lines of code.

You can set up multiple virtual machines on a single computer's hardware. This entails dividing the resources of the host computer among physical and virtual segments. For instance, if a computer boasts 16GB of RAM, it can manage three virtual machines, each receiving 4GB of RAM. Each virtual machine operates with its own OS, mimicking a regular computer's behavior.

### Advantages of Virtual Machines

Virtualization, especially through virtual machines, comes with a host of advantages:

**1. Enhanced Security:** Virtualization can establish an isolated environment or sandbox within the host machine. When a computer houses multiple virtual machines, these machines become "guests." They're secluded from the host machine and other guest virtual machines. This isolation boosts security since a malware-infected virtual machine remains separate from the rest. Security experts can even intentionally place malware in a virtual machine for secure analysis.

*Note: While virtual machines are useful for investigating infected machines or examining malware, there are still risks. Malicious software can sometimes breach virtualization and access the host machine. This is why complete trust in virtualized systems is unwise.*

**2. Improved Efficiency:** Virtual machines also offer an efficient and convenient way to carry out security tasks. You can run multiple virtual machines simultaneously and switch between them with ease. This streamlines security endeavors, like testing and exploring various applications.

Think of a virtual machine like a city bus – it accommodates many people efficiently. Without city buses, everyone would have to drive individual cars, consuming more gas, cars, and resources. Similarly, multiple virtual machines can run on one physical machine, eliminating the need for separate machines for specific tasks.

### Managing Virtual Machines

Virtual machines can be overseen using software known as a hypervisor. Hypervisors aid users in managing multiple virtual machines and bridging the gap between virtual and physical hardware. Hypervisors also help allocate shared resources from the physical host machine to one or more virtual machines.

One noteworthy hypervisor is the Kernel-based Virtual Machine (KVM). KVM is an open-source hypervisor supported by most major Linux distributions. It's integrated into the Linux kernel, enabling the creation of virtual machines on any machine running a Linux OS without additional software.

### Other Forms of Virtualization

Beyond virtual machines, there are other forms of virtualization. Some of these don't involve operating systems. For example, multiple virtual servers can arise from a single physical server. Virtual networks can also optimize physical network hardware usage efficiently.

## Interfaces Unveiled: GUI vs. CLI

### CLI vs. GUI: A Contrast

**Graphical User Interface (GUI):**
A GUI presents icons on the screen for managing various computer tasks. Think of the icons on your desktop or taskbar that you click to launch programs.

**Command-Line Interface (CLI):**
A CLI is text-based, utilizing commands to interact with the computer. It resembles lines of code.

**Appearance:**
A significant distinction lies in their visual presentation. GUIs boast graphics and icons, while CLIs stick to plain text, akin to lines of code.

**Functionality:**
These interfaces also differ in how they operate. GUIs handle one request at a time, while CLIs allow simultaneous execution of multiple requests.

**Advantages of CLI in Cybersecurity:**

**Efficiency:**
The CLI's swiftness is favored by some due to its adept handling, especially among those proficient in its usage. Newcomers, on the other hand, might find GUIs more efficient due to their user-friendly nature.

**Multitasking Prowess:**
The CLI excels when multitasking is paramount. For instance, creating multiple new files is more time-efficient in a CLI compared to a GUI, where you'd need to replicate steps for each file.

**History Records:**
In cybersecurity, the Linux CLI shines, as it maintains a history record of all commands and actions executed in the CLI. This proves invaluable when responding to incidents following predefined protocols. The history feature ensures the accurate execution of commands, aiding in playbook troubleshooting or reviewing steps.

**Action Tracing:**
Should a security breach be suspected, the history file can help trace an attacker's activities.

In conclusion, while the choice between GUI and CLI might be influenced by personal preference, CLI offers efficiency, multitasking, historical logs, and traceability, making it a potent tool in the realm of cybersecurity.
