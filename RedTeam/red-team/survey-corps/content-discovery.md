---
description: Discovery the web application Contents
---

# Content Discovery

## Content Discovery

**Content discovery** content discovery is the part of web application testing where trying to discover all the routes path, parameters, function and files of application sometime content discovery can also be known as a directory brute forcing.

### Types of Content Discovery:

#### 1. Tech-Based Discovery:

Identify content based on the technologies utilized by the application. Tools like [BuiltWith](https://builtwith.com/) and [Wappalyzer](https://www.wappalyzer.com/) can provide insights into the technologies used.

#### 2. Known Pathing (Install, Demo, Leaked):

Utilize known paths, installations, or leaked information for content discovery, categorized into:

* **Local Install:**
  * Download open-source projects locally, install them, and point them at BurpSuite.
  * Use tools like [Daniel Miessler's Source2URL](https://danielmiessler.com/study/url\_hacking/#tool-source2url) to map application routes.
* **Demo Instances:**
  * Access demo instances of paid software through BurpSuite, capturing admin functionality paths.
  * Check for vulnerabilities like IDOR during this process.
* **Installed and Leaked:**
  * Search DockerHub or GitHub for installed instances or accidentally leaked source code.
  * Gain insights into complete source code or modifications posted on GitHub.

#### 3. Custom Discovery:

Use custom wordlists for context-specific content discovery:

* **Custom Wordlists:**
  * Create wordlists based on contextual words related to the application.
  * Tools like [WordlistGen](https://github.com/txthinking/wordlistgen) can assist in generating custom wordlists.

#### 4. Historical Discovery:

Explore archived URL data from sources such as the Wayback Machine, AlienVault, Common Crawl, and URLScan:

* **Historical Discovery (Tip: Recursion):**
  * Investigate 401 unauthorized responses recursively, exploring resources beyond that path.
  * Use the Wayback Machine to check historical authentication configurations.
  *   Example:

      ```
      https://someapp.com/admin/  401
      https://someapp.com/admin/dashboard/    401
      https://someapp.com/admin/dashboard/member  200
      ```

#### 5. Spidering:

Employ tools like Turbo Intruder, Gobuster, FFuF, Dirsearch, Wfuzz, Feroxbuster for systematic content discovery:

#### 6. Mobile Discovery:

Extract additional routes and API endpoints from mobile application binaries using tools like APILeaks and [MobSF](https://mobsf.live/):

* **Mobile Discovery (Tip: Mobile):**
  * Include mobile API testing within the scope for comprehensive coverage.



## Content Discovery (Tech-Based)

#### Content Discovery Tools: Your Cyber Sherpas

&#x20;**Turbo Intruder:**

* A powerhouse in the content discovery expedition, Turbo Intruder excels in propelling requests with speed and precision, unraveling hidden routes.

&#x20;**Gobuster:**

* The vigilant wanderer, Gobuster, embarks on a journey of directory brute-forcing, meticulously scanning for concealed paths and files.

&#x20;**Ffuf:**

* Armed with flexibility, Ffuf becomes the versatile explorer, allowing customizable fuzzing to uncover what traditional methods might miss.

&#x20;**Dirsearch:**

* In the quest for discovery, Dirsearch traverses directories, revealing the subtle nuances and uncharted territories within web applications.

&#x20;**Wfuzz:**

* Wfuzz, a multifaceted companion, adapts to varied discovery scenarios, efficiently probing for hidden parameters, paths, and functions.

&#x20;**Feroxbuster:**

* A dynamic force in the arsenal, Feroxbuster tirelessly scans for hidden gems, complementing the seeker's quest for uncharted territories.

## Content Discovery (Known Path): A Quest for Understanding

#### Content Discovery (Known Path): Your Digital Map

**1. Understanding the App's Roots: Open or Paid?**

* Begin by figuring out if the app is born from open collaboration or has a paid lineage.

**2. Your Toolkit: Local, Demo, Installed, Leaked**

**- Local Installations:**

* Dive into open-source projects. Install them locally, using BurpSuite to reveal secrets.
  * [Daniel Miessler's Source2URL Tool](https://danielmiessler.com/projects/source2url/)

**- Demo Adventures:**

* For paid apps, explore demo versions with BurpSuite. Grab admin insights - paths, routes, and parameters.
  * [BurpSuite](https://portswigger.net/burp)

**- Installed and Leaked Sagas:**

* Uncover paid software sans demo. DockerHub and GitHub may expose the entire code.
  * [DockerHub](https://hub.docker.com/)
  * [GitHub](https://github.com/)

**3. The Big Reveal: Unwrapping Full Path Discovery**

**- Method in Action:**

* Combine local installs, demo insights, software expeditions, and leaked whispers for a full content discovery journey.

### Content Discovery (known Path) : Local Content Discovery Unveiling Secrets in Your Backyard

**1. Download and Install:**

* Select an open-source project, download it, and install it on your local machine.

**2. Place in Web Root:**

* Position the installed project in the web root directory of your personal installation.

**3. Connect to Burp:**

* Direct the project to BurpSuite, activating its formidable capabilities.

**4. Run Shell Script:**

* Execute a purpose-built shell script to extract all existing directories.

**5. Proxy Through Burp:**

* Marvel as the script unveils directories, proxying them through Burp at your new target domain.

**6. Default Paths Revealed:**

* Explore a trove of default paths exposed during basic installations of open-source software.

**7. Open Source Mapping:**

* Harness Daniel Miessler's [Source2URL tool](https://github.com/danielmiessler/) to map application routes and endpoints.

**8. Proxy Back Through Burp:**

* Channel mapped routes and endpoints back through BurpSuite, concluding the local content discovery journey.

### Content Discovery (known Path): Demo Uncover Paths with Ease

**1. Identify Paid Software:**

* Determine if the application is a paid software product.

**2. Seek Demo Instances:**

* Explore the availability of demo instances or check for a demo request process offered by the software vendor.

**3. Gain Demo Access:**

* Obtain access to the demo instance to freely navigate and explore the application.

**4. Route Through BurpSuite:**

* Direct the application through BurpSuite for detailed examination and analysis.

**5. Grasp Pathing Details:**

* Capture crucial information such as paths, routes, and parameters while proxying through BurpSuite.

**6. Admin Functionality Check:**

* Ensure access to admin functionality during the demo exploration to uncover hidden features.

**7. Uncover Vulnerabilities:**

* Actively search for vulnerabilities, with a focus on potential issues like Insecure Direct Object References (IDOR).

**8. Exploit Admin Routes:**

* Exploit admin routes and functionalities to expose any security flaws or vulnerabilities.

**9. Demo Insights for Security:**

* Leverage the demo experience to gain valuable insights into the security aspects of the application.



### Content Discovery (Known Path) : Installed and Leaked&#x20;

#### Navigating Installed and Leaked Software Instances

**1. Identify Paid Software:**

* Identify the application as paid software lacking a demo for exploration.

**2. DockerHub Exploration:**

* Delve into DockerHub, a common platform for software deployment and distribution.

**3. Unintentional Source Exposure:**

* Developers may unintentionally expose source code alongside the application on DockerHub.

**4. Complete Source Code Access:**

* Capitalize on DockerHub's nature, providing access to the entire source code of installed instances.

**5. GitHub Discoveries:**

* Search for modifications or sections of the software on GitHub, expanding the scope of source code exploration.

**6. Source Code Insights:**

* Gain valuable insights into the application's source code for a profound understanding of its architecture.

**7. Leverage DockerHub Features:**

* Utilize DockerHub features to access software instances and explore associated source repositories.

**8. Uncover Developer Oversights:**

* Exploit inadvertent developer oversights that lead to source exposure on platforms like DockerHub.

**9. Comprehensive Source Exploration:**

* Conduct a thorough exploration, unveiling potential vulnerabilities embedded within the source code.



## Content Discovery: Crafting Custom Wordlists

**1. Identify Contextual Words:**

* For a banking application, identify relevant words related to banking, finance, and industry-specific terms. Examples: "transaction," "account," "security," "login," etc.

**2. Build a Word List:**

* Assemble these words into a custom word list. You can use a text editor or create a file with one word per line. Let's name it `banking_wordlist.txt`.

**3. Brute Force Exploration:**

*   Use a tool like [Feroxbuster](https://github.com/epi052/feroxbuster) for brute force exploration. The command might look like:

    ```bash
    feroxbuster --url https://banking-app.com/ --wordlist banking_wordlist.txt
    ```

**4. Banking Application Example:**

* Tailor the word list to include terms specific to the banking industry. For example, if the banking app is known for investment services, add words like "investment," "portfolio," etc., to the word list.

**5. WordlistGen Workflow:**

*   Utilize WordlistGen to automate the wordlist generation process. The command could be:

    {% code overflow="wrap" %}
    ```bash
    wordlistgen -o custom_wordlist.txt -s "banking, finance, transaction, account, security, login"
    ```
    {% endcode %}

**6. Automation with cewl | gua | etc:**

*   Use cewl to scrape words from the website or gua to fetch URLs. For example:

    ```bash
    cewl https://banking-app.com -w custom_wordlist.txt
    ```

    or

    ```bash
    gua https://banking-app.com | cut -d '/' -f 3 | sort -u > custom_wordlist.txt
    ```

**7. Feed FAU into Tools:**

*   Integrate the generated wordlist into other tools. For instance, with Feroxbuster:

    {% code overflow="wrap" %}
    ```bash
    feroxbuster --url https://banking-app.com/ --wordlist custom_wordlist.txt
    ```
    {% endcode %}

**8. Precision in Exploration:**

* Achieve precision by tailoring the exploration to paths and parameters relevant to the banking application's language and terminology.

**9. Enhance Brute Force Effectiveness:**

* Continuously refine and enhance the custom wordlist based on feedback and findings during the brute force process.



## Content Discovery (Historical ) :  Time Travel in Cyberspace&#x20;

### Rediscovering the Past with Archive Sources

**1. Wayback Machine Expedition:**

* Embark on a virtual journey using the [Wayback Machine](https://archive.org/web/).
*   Command for exploring Wayback Machine:

    ```bash
    wget -r -nc -np https://web.archive.org/web/https://example.com/
    ```

**2. Alienvault Excursion:**

*   Navigate through Alienvault archives:

    ```bash
    curl -s "https://otx.alienvault.com/api/v1/indicators/domain/example.com/passive_dns" | jq '.passive_dns[].hostname' | sort -u
    ```



**3. Common Crawl Adventure:**

* Dive into the vast web landscape with [Common Crawl](https://commoncrawl.org/)'s extensive archive.

```bash
aws s3 ls s3://commoncrawl/crawl-data/CC-MAIN-2020-24/ | awk '{print $4}'
```

**4. URL Scan Exploration:**

* Explore historical URL data using the capabilities of [URL Scan](https://urlscan.io/).

```bash
urlscan.io -q "domain:example.com" | jq '.results[].page.url'
```

**5. Tool Insight: Waymore by Xnl-h4ck3r:**

* Enhance your historical content discovery with tools like [Waymore by Xnl-h4ck3r](https://github.com/XNLH4CK3R/WayMore).

```
waymore -u https://example.com/
```

**6. Archival Downloads and Insights:**

* Download archive responses and meticulously search for hidden links and additional insights.

```
wget -r -nc -np https://web.archive.org/web/https://example.com/
```

**7. Unveiling Forgotten Paths:**

*   Extract forgotten paths and insights:

    ```bash
    grep -r "404 Not Found" . | cut -d ' ' -f 3
    ```

**8. Comprehensive Archive Analysis:**

*   Analyze archive responses for valuable details:

    ```bash
    cat index.html | grep "href=" | cut -d '/' -f 3 | sort -u
    ```

**9. Waymore's Expertise:**

*   Leverage Waymore's expertise to navigate the historical web:

    ```bash
    waymore -u https://example.com/
    ```

## Content Discovery (Tips and Recursion Insights)  &#x20;

**Tip: The Unseen Paths**

Content discovery is trying to guess sensitive paths and files that might in the application but are not linked anywhere.

**Recursion Revelation: Decoding 401 Responses**

Encountering 401 Unauthorized responses is common during web assessments. To unravel the secrets, engage in recursive brute-force attempts on such paths. Resources beyond the initial path may lack the same access control, offering a potential gateway.

**Insightful Investigation with Wayback Machine**

1. When faced with 401 responses:
   * **Path 1:** [https://someapp.com/admin/](https://someapp.com/admin/) - Status 401
   * **Path 2:** [https://someapp.com/admin/dashboard/](https://someapp.com/admin/dashboard/) - Status 401
   * **Path 3:** [https://someapp.com/admin/dashboard/member](https://someapp.com/admin/dashboard/member/) - Status 200
2. **Access Control Oversight:**
   * Sometimes, access control is overlooked, leading to 401 errors.
3. **HTTP 401 Code Significance:**
   * The HTTP 401 Unauthorized status indicates a lack of valid authentication credentials for the requested resource.
4. **Strategic Brute Forcing:**
   * Identifying /admin with a 401 error suggests the existence of an admin area. Proceed with brute-forcing (/admin/member) to unveil deeper layers.
5. **Path Triumph:**
   * Successfully brute-forcing /admin/member/dashboard yields a 200 status, exposing an admin dashboard.

**Wayback Machine Insights: The Chronological Lens**

6. **Wayback Machine Exploration:**
   * Utilize [Wayback Machine](https://archive.org/web/) to investigate if authentication was absent in the past, providing valuable clues about application pathing.



## Content Discovery (Mobile Marvels)

**Tip: Explore Mobile Application Binaries**

Mobile app binaries often hide pathways linked to the web counterpart. These paths lead to APIs connected to the main domain. Mobilize your exploration using [APILeaks](https://apileaks.net/) and [MobSF](https://mobsf.live/) for parsing APK files, revealing routes, API endpoints, and parameters.

**Unveiling Mobile API Secrets: Step by Step**

1. **Dive into Mobile Binaries:**
   *   Use [MobSF](https://mobsf.live/) to dissect APK files:

       ```
       mobsf -f your_app.apk
       ```
2. **Explore Extracted Information:**
   * Navigate through the MobSF interface and identify API-related information.
3. **Discover Hidden API Paths:**
   * Leverage [APILeaks](https://apileaks.net/) to extract hidden paths and endpoints.
4. **Run APILeaks Command:**
   *   Use APILeaks to analyze APK files:

       ```
       apileaks analyze -a your_app.apk
       ```
5. **Review APILeaks Results:**
   * Examine the results generated by APILeaks, highlighting API details.
6. **Expand Scope with Unseen APIs:**
   * Acknowledge that the domain is inherently in scope, expanding assessment boundaries.
