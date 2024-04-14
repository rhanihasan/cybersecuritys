---
description: understanding the web application technologies is important.
---

# Tech Profiling

### Tech Profiling

one of the first tasks is need to do when dealing with application is to understand what web application server its running on , what programming language its written in and what framework its using

1. **Browser Extensions:**
   * **WhatRun:**
     * **Link:** [WhatRun](https://www.whatruns.com/)
     * **Overview:** WhatRun is a browser extension that automatically detects and displays the technologies used by a website. It covers a wide range of information, including the web server, programming language, CMS, analytics tools, and more.
   * **Wappalyzer:**
     * **Link:** [Wappalyzer](https://www.wappalyzer.com/)
     * **Overview:** Wappalyzer is a browser extension that identifies technologies employed by websites, offering details on web servers, programming languages, frameworks, CMS, and various other technologies.
   * **BuiltWith:**
     * **Link:** [BuiltWith](https://builtwith.com/)
     * **Overview:** BuiltWith is a web service that reveals the technologies powering a given website. It provides insights into web servers, programming languages, frameworks, JavaScript libraries, advertising networks, and more.
2. **Command-Line Tool:**
   * **Webanalyze:**
     * **Link:** [Webanalyze](https://github.com/rverton/webanalyze)
     * **Overview:** Webanalyze is a command-line tool that automates the functionality of Wappalyzer. It allows you to obtain technology information about a web application directly from the command line, making it suitable for automation and integration into custom recon frameworks.
   *   **Usage Example:**

       ```bash
       webanalyze -url https://example.com
       ```
   * **Note:** This is particularly useful when building custom reconnaissance frameworks or enriching existing datasets with technology stack information.
