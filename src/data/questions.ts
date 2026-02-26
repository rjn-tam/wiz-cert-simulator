import { Question } from '../types';

export const questions: Question[] = [
  // ==========================================
  // I. WIZ PLATFORM OVERVIEW (1-30)
  // ==========================================
  {
    "id": 1,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "What does CNAPP stand for in the context of Wiz's platform capabilities?",
    "type": "single",
    "options": [
      "Cloud Network Application Protection Platform",
      "Cloud-Native Application Protection Platform",
      "Centralized Network and Application Protection Platform",
      "Cloud Native Analytics and Protection Platform"
    ],
    "correctAnswers": [1],
    "explanation": "CNAPP stands for Cloud-Native Application Protection Platform."
  },
  {
    "id": 2,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability focuses on detecting and remediating misconfigurations of individual cloud resources?",
    "type": "single",
    "options": [
      "CIEM",
      "CSPM",
      "CDR",
      "DSPM"
    ],
    "correctAnswers": [1],
    "explanation": "CSPM focuses on detecting and remediating misconfigurations of individual cloud resources."
  },
  {
    "id": 3,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability analyzes cloud identities, permissions, and entitlements?",
    "type": "single",
    "options": [
      "CSPM",
      "CWPP",
      "CIEM",
      "DSPM"
    ],
    "correctAnswers": [2],
    "explanation": "CIEM analyzes cloud identities, permissions, and entitlements to enforce least privilege."
  },
  {
    "id": 4,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability provides real-time threat detection on the cloud control plane and workloads?",
    "type": "single",
    "options": [
      "CSPM",
      "CDR",
      "CWPP",
      "CIEM"
    ],
    "correctAnswers": [1],
    "explanation": "CDR provides real-time threat detection by ingesting cloud audit logs."
  },
  {
    "id": 5,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability focuses on discovering, classifying, and protecting sensitive data?",
    "type": "single",
    "options": [
      "CSPM",
      "CWPP",
      "CIEM",
      "DSPM"
    ],
    "correctAnswers": [3],
    "explanation": "DSPM focuses on discovering, classifying, and protecting sensitive data."
  },
  {
    "id": 6,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability provides vulnerability management for workloads and containers?",
    "type": "single",
    "options": [
      "CSPM",
      "CWPP",
      "CIEM",
      "CDR"
    ],
    "correctAnswers": [1],
    "explanation": "CWPP provides vulnerability management via agentless scanning."
  },
  {
    "id": 7,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "What does Wiz's Attack Surface Management (ASM) capability do?",
    "type": "single",
    "options": [
      "Only scans internal networks",
      "Continuously discovers, validates, and assesses risk of external-facing assets",
      "Only monitors cloud configurations",
      "Only tracks user access"
    ],
    "correctAnswers": [1],
    "explanation": "ASM assesses the risk of external-facing assets by combining external scanning with internal context."
  },
  {
    "id": 8,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability enables you to scan Infrastructure as Code (IaC) for misconfigurations?",
    "type": "single",
    "options": [
      "Only CSPM",
      "Code Security",
      "Only CDR",
      "Only DSPM"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz's Code Security allows scanning IaC to detect issues before deployment."
  },
  {
    "id": 9,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "What does Wiz Forensics provide?",
    "type": "single",
    "options": [
      "Only log analysis",
      "Agentless disk forensics, blast radius analysis, and root cause investigation",
      "Only network packet capture",
      "Only user behavior analytics"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz Forensics provides agentless disk forensics and root cause investigation."
  },
  {
    "id": 10,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability provides runtime visibility into cloud and Kubernetes workloads?",
    "type": "single",
    "options": [
      "Agentless scanning only",
      "Runtime Sensor (eBPF-based)",
      "Cloud Connectors",
      "Static analysis only"
    ],
    "correctAnswers": [1],
    "explanation": "Runtime Sensor provides real-time visibility and threat detection."
  },
  {
    "id": 11,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "What does Wiz's Kubernetes Security capability include?",
    "type": "single",
    "options": [
      "Only pod scanning",
      "Cluster visibility, admission control, runtime protection, and RBAC analysis",
      "Only configuration scanning",
      "Only image scanning"
    ],
    "correctAnswers": [1],
    "explanation": "Kubernetes Security includes visibility, admission control, and runtime protection."
  },
  {
    "id": 12,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability helps you understand your software supply chain?",
    "type": "single",
    "options": [
      "Only vulnerability scanning",
      "SBOM generation and supply chain security analysis",
      "Only license compliance",
      "Only dependency tracking"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz generates SBOMs for supply chain security analysis."
  },
  {
    "id": 13,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "What does Wiz's CI/CD Security capability enable?",
    "type": "single",
    "options": [
      "Only pipeline monitoring",
      "Scanning code repositories, pipelines, and detecting secrets and misconfigurations",
      "Only build automation",
      "Only deployment tracking"
    ],
    "correctAnswers": [1],
    "explanation": "CI/CD Security scans repositories and pipelines to detect vulnerabilities early."
  },
  {
    "id": 14,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "Which Wiz capability provides API security?",
    "type": "single",
    "options": [
      "Only network scanning",
      "API discovery, risk assessment, and toxic combination analysis",
      "Only authentication testing",
      "Only rate limiting"
    ],
    "correctAnswers": [1],
    "explanation": "API Security includes discovery, risk assessment, and contextual analysis."
  },
  {
    "id": 15,
    "domain": "Wiz Platform Overview",
    "subtopic": "Identify the Wiz platform capabilities",
    "text": "What does Wiz's Compliance Management capability provide?",
    "type": "single",
    "options": [
      "Only audit reports",
      "Built-in/custom frameworks, continuous monitoring, and framework mapping",
      "Only checklist generation",
      "Only policy templates"
    ],
    "correctAnswers": [1],
    "explanation": "Compliance Management provides monitoring and mapping across frameworks."
  },
  {
    "id": 16,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut switches from table view to graph view in the Security Graph?",
    "type": "single",
    "options": [ "V", "G", "S", "Tab" ],
    "correctAnswers": [1],
    "explanation": "Press G to switch to graph view; T to switch back to table view."
  },
  {
    "id": 17,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut opens the query editor in graph view?",
    "type": "single",
    "options": [ "Q", "E", "O", "Ctrl+E" ],
    "correctAnswers": [1],
    "explanation": "Press E to open the query editor in graph view."
  },
  {
    "id": 18,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut adds a new filter/criterion to a Security Graph query?",
    "type": "single",
    "options": [ "A", "N", "F", "+" ],
    "correctAnswers": [2],
    "explanation": "Press F to add a new filter criterion."
  },
  {
    "id": 19,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What does right-clicking and selecting 'Narrow query to this entity' do in graph view?",
    "type": "single",
    "options": [
      "Deletes the entity",
      "Adds an 'ID equals...' property criterion for the selected entity",
      "Hides the entity",
      "Duplicates the entity"
    ],
    "correctAnswers": [1],
    "explanation": "This narrows the query to the specific ID of that entity."
  },
  {
    "id": 20,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What is the difference between 'Hide these entities' and 'Remove from query' in graph view?",
    "type": "single",
    "options": [
      "They do the same thing",
      "'Hide' conceals icons; 'Remove' deletes the object type and criteria from the query",
      "'Hide' is permanent",
      "'Hide' affects only one entity"
    ],
    "correctAnswers": [1],
    "explanation": "Hide keeps the logic but cleans the UI; Remove changes the actual query."
  },
  {
    "id": 21,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut loads more results when a query returns more than 50 results?",
    "type": "single",
    "options": [ "M", "L", "N", "Enter" ],
    "correctAnswers": [1],
    "explanation": "Press L (Load More) to add the next set of results."
  },
  {
    "id": 22,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut cycles through different layout schemes in graph view?",
    "type": "single",
    "options": [ "L", "Y", "C", "Shift+L" ],
    "correctAnswers": [1],
    "explanation": "Press Y to cycle through layout schemes."
  },
  {
    "id": 23,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "Which graph layer shows paths from resources to the internet?",
    "type": "single",
    "options": [ "Internal Exposure", "Public Exposure", "Network Activity", "Lateral Movement" ],
    "correctAnswers": [1],
    "explanation": "The Public Exposure layer maps paths from resources to the internet."
  },
  {
    "id": 24,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "Which graph layer shows combinations of secrets and identities that grant access between resources?",
    "type": "single",
    "options": [ "Public Exposure", "Internal Exposure", "Lateral Movement", "Code Mapping" ],
    "correctAnswers": [2],
    "explanation": "The Lateral Movement layer identifying paths attackers could take."
  },
  {
    "id": 25,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "Which graph layer is only available when Runtime Sensor is deployed?",
    "type": "single",
    "options": [ "Public Exposure", "Lateral Movement", "Network Activity", "Kubernetes" ],
    "correctAnswers": [2],
    "explanation": "Network Activity shows real-time communication via the sensor."
  },
  {
    "id": 26,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "Which graph layer is only available with Wiz Defend?",
    "type": "single",
    "options": [ "Issues and Threats", "Blast Radius", "Lateral Movement", "Public Exposure" ],
    "correctAnswers": [1],
    "explanation": "Blast Radius is a specific feature within Wiz Defend."
  },
  {
    "id": 27,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What do the Issue icon colors represent in the 'Issues and Threats' layer?",
    "type": "single",
    "options": [
      "Resource types",
      "Dark red=Crit, red=High, orange=Med, yellow=Low",
      "Cloud providers",
      "Age of Issues"
    ],
    "correctAnswers": [1],
    "explanation": "Colors represent severity levels of findings."
  },
  {
    "id": 28,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut expands/disables grouping of nodes?",
    "type": "single",
    "options": [ "G", "S", "E", "X" ],
    "correctAnswers": [1],
    "explanation": "Press S to toggle grouping of sibling nodes."
  },
  {
    "id": 29,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What keyboard shortcut fits all results in the window in graph view?",
    "type": "single",
    "options": [ "F", "0 (zero)", "W", "Ctrl+0" ],
    "correctAnswers": [1],
    "explanation": "Press 0 to fit all results on screen."
  },
  {
    "id": 30,
    "domain": "Wiz Platform Overview",
    "subtopic": "Navigate the Wiz portal",
    "text": "What happens when you hover over an edge in graph view?",
    "type": "single",
    "options": [
      "The edge is deleted",
      "You see the nature and direction of the relationship",
      "The edge changes color",
      "A menu appears"
    ],
    "correctAnswers": [1],
    "explanation": "Hovering reveals the specific connection type and direction."
  },

  // ==========================================
  // II. WIZ IMPLEMENTATION (31-90)
  // ==========================================
  {
    "id": 31,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "Where in the Wiz Portal do you manage all connections and deployments?",
    "type": "single",
    "options": [
      "Settings > Integrations",
      "Settings > Deployments",
      "Settings > Connectors",
      "Dashboard > Connections"
    ],
    "correctAnswers": [1],
    "explanation": "Settings > Deployments is the centralized page for managing all connections."
  },
  {
    "id": 32,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What is the primary purpose of Cloud Connectors?",
    "type": "single",
    "options": [
      "Install agents on workloads",
      "Agentless scanning of cloud service providers",
      "Manage user authentication",
      "Store backup data"
    ],
    "correctAnswers": [1],
    "explanation": "Cloud Connectors enable agentless scanning of cloud providers."
  },
  {
    "id": 33,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "Which cloud providers are supported by Wiz Cloud Connectors?",
    "type": "single",
    "options": [
      "AWS and Azure only",
      "AWS, Azure, and GCP only",
      "AWS, Azure, GCP, OCI, and Alibaba Cloud",
      "Only AWS"
    ],
    "correctAnswers": [2],
    "explanation": "Wiz supports AWS, Azure, GCP, OCI, and Alibaba Cloud."
  },
  {
    "id": 34,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What does Wiz Outpost enable?",
    "type": "single",
    "options": [
      "Faster cloud scanning",
      "Workload scanning within your own cloud environment",
      "Free tier scanning",
      "Mobile device scanning"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost performs workload scanning within your cloud boundary for data privacy."
  },
  {
    "id": 35,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "How many main Wiz components can be deployed to a Kubernetes cluster?",
    "type": "single",
    "options": [
      "1 (Kubernetes Connector only)",
      "2 (Connector and Sensor)",
      "3 (Connector, Runtime Sensor, and Admission Controller)",
      "4 (Connector, Sensor, Controller, and Broker)"
    ],
    "correctAnswers": [2],
    "explanation": "Three components: Kubernetes Connector, Runtime Sensor, and Admission Controller."
  },
  {
    "id": 36,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What does the Kubernetes Connector do?",
    "type": "single",
    "options": [
      "Installs agents on every pod",
      "API-based scanning of cluster configurations and resources",
      "Blocks all incoming traffic",
      "Manages Kubernetes upgrades"
    ],
    "correctAnswers": [1],
    "explanation": "Kubernetes Connector performs API-based scanning of cluster resources."
  },
  {
    "id": 37,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What is the primary function of the Wiz Admission Controller?",
    "type": "single",
    "options": [
      "Monitor runtime behavior only",
      "Scan container registries",
      "Enforce security policies at deployment time",
      "Manage cluster networking"
    ],
    "correctAnswers": [2],
    "explanation": "Admission Controller enforces security policies before resources are deployed."
  },
  {
    "id": 38,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What do Runtime Sensors provide?",
    "type": "single",
    "options": [
      "Static code analysis",
      "Real-time threat detection and monitoring of running workloads",
      "Image building capabilities",
      "Cost optimization"
    ],
    "correctAnswers": [1],
    "explanation": "Runtime Sensors detect malicious activity and validate vulnerabilities in real-time."
  },
  {
    "id": 39,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "When should you use Wiz Outpost instead of standard SaaS scanning?",
    "type": "single",
    "options": [
      "When you want the cheapest option",
      "When you have strict data residency and compliance requirements",
      "When you have a small environment",
      "When you only need basic scanning"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost is ideal for strict data residency and compliance requirements."
  },
  {
    "id": 40,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What do Container Registry Connectors scan?",
    "type": "single",
    "options": [
      "Running containers in production",
      "Container images at rest in registries",
      "Kubernetes configurations only",
      "Network traffic"
    ],
    "correctAnswers": [1],
    "explanation": "Registry Connectors scan container images at rest before deployment."
  },
  {
    "id": 41,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "Which container registries does Wiz support?",
    "type": "single",
    "options": [
      "Docker Hub only",
      "Amazon ECR and Azure ACR only",
      "ECR, ACR, JFrog Artifactory, Docker Hub, and others",
      "Only cloud-native registries"
    ],
    "correctAnswers": [2],
    "explanation": "Wiz supports ECR, ACR, JFrog Artifactory, Docker Hub, and other registries."
  },
  {
    "id": 42,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What is the key difference between Registry scanning and Runtime Sensor scanning?",
    "type": "single",
    "options": [
      "Registry scans images at rest; Runtime monitors running containers",
      "Registry scanning is more expensive",
      "Runtime scanning is less accurate",
      "There is no difference"
    ],
    "correctAnswers": [0],
    "explanation": "Registry scans images at rest; Runtime Sensors monitor running containers."
  },
  {
    "id": 43,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What is the primary purpose of Wiz Broker?",
    "type": "single",
    "options": [
      "To reduce costs",
      "To act as a secure proxy for scanning private networks and air-gapped environments",
      "To manage user permissions",
      "To store scan results"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz Broker acts as a secure proxy for private networks and air-gapped environments."
  },
  {
    "id": 44,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "Which Version Control platforms does Wiz integrate with?",
    "type": "single",
    "options": [
      "GitHub only",
      "GitHub and GitLab only",
      "GitHub, GitLab, Azure DevOps, and BitBucket",
      "Only cloud-based VCS platforms"
    ],
    "correctAnswers": [2],
    "explanation": "Wiz integrates with GitHub, GitLab, Azure DevOps, and BitBucket."
  },
  {
    "id": 45,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What does Remediation & Response enable in Wiz?",
    "type": "single",
    "options": [
      "Read-only monitoring",
      "Automated security remediation and threat response",
      "Manual fixes only",
      "Vulnerability scanning only"
    ],
    "correctAnswers": [1],
    "explanation": "Remediation & Response automates security fixes and threat response."
  },
  {
    "id": 46,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "Which cloud providers support Remediation & Response?",
    "type": "single",
    "options": [
      "AWS only",
      "AWS and Azure only",
      "AWS, Azure, and GCP",
      "All cloud providers"
    ],
    "correctAnswers": [2],
    "explanation": "Remediation & Response is available for AWS, Azure, and GCP."
  },
  {
    "id": 47,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What do SaaS Connectors allow Wiz to do?",
    "type": "single",
    "options": [
      "Host SaaS applications",
      "Connect to third-party SaaS platforms and assess security risks",
      "Deploy applications",
      "Manage subscriptions"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS Connectors connect to platforms like CrowdStrike, Okta, OpenAI, Snowflake."
  },
  {
    "id": 48,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What can Version Control integration detect?",
    "type": "single",
    "options": [
      "Security risks in source code only",
      "Secrets in code only",
      "Security risks, secrets, and IaC misconfigurations",
      "Only syntax errors"
    ],
    "correctAnswers": [2],
    "explanation": "Version Control integration detects security risks, secrets, and IaC issues."
  },
  {
    "id": 49,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "What do Event Origins enable?",
    "type": "single",
    "options": [
      "Exporting Wiz findings only",
      "Ingesting logs into Wiz for real-time threat detection",
      "Creating custom dashboards",
      "Managing cloud resources"
    ],
    "correctAnswers": [1],
    "explanation": "Event Origins ingest logs and third-party detections for real-time threat detection."
  },
  {
    "id": 50,
    "domain": "Wiz Implementation",
    "subtopic": "Describe Connectors and Deployments options",
    "text": "Which provides the most comprehensive Kubernetes security coverage?",
    "type": "single",
    "options": [
      "Kubernetes Connector only",
      "Runtime Sensor only",
      "Admission Controller only",
      "All three components together"
    ],
    "correctAnswers": [3],
    "explanation": "All three components provide comprehensive K8s security coverage."
  },
  {
    "id": 51,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What is the primary difference between SaaS and Outpost deployment models?",
    "type": "single",
    "options": [
      "SaaS is faster, Outpost is slower",
      "SaaS scans from Wiz's infrastructure; Outpost scans within your cloud environment",
      "SaaS is more expensive",
      "SaaS requires agents"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS scans from Wiz infrastructure; Outpost scans within your cloud environment."
  },
  {
    "id": 52,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "Where does workload data processing occur in a Wiz Outpost deployment?",
    "type": "single",
    "options": [
      "In Wiz's multi-tenant cloud infrastructure",
      "In a third-party data center",
      "Within the customer's own cloud environment",
      "In a shared processing center"
    ],
    "correctAnswers": [2],
    "explanation": "Outpost processes data within the customer's cloud environment."
  },
  {
    "id": 53,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What does Wiz Outpost send to the Wiz backend?",
    "type": "single",
    "options": [
      "Complete disk images",
      "Only scan metadata (findings, vulnerabilities, etc.)",
      "Raw network traffic logs",
      "Full database backups"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost only sends scan metadata to the Wiz backend."
  },
  {
    "id": 54,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "When should you choose Wiz Outpost over standard SaaS scanning?",
    "type": "single",
    "options": [
      "Lowest cost",
      "Strict data residency and compliance requirements",
      "Small environment",
      "Fastest deployment"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost is ideal for strict data residency and compliance requirements."
  },
  {
    "id": 55,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What role does Wiz Outpost serve in the architecture?",
    "type": "single",
    "options": [
      "Cost optimization tool",
      "Data barrier for localized processing",
      "Backup solution",
      "Network firewall"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost serves as a data barrier, ensuring processing occurs within customer tenant."
  },
  {
    "id": 56,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "Which cloud providers support Wiz Outpost deployments?",
    "type": "single",
    "options": [
      "AWS only",
      "AWS and Azure only",
      "AWS, Azure, GCP, OCI, and Alibaba Cloud",
      "Only public cloud providers"
    ],
    "correctAnswers": [2],
    "explanation": "Outpost supports AWS, Azure, GCP, OCI, and Alibaba Cloud."
  },
  {
    "id": 57,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "In standard SaaS scanning, where are disk snapshots processed?",
    "type": "single",
    "options": [
      "Within your cloud environment only",
      "In Wiz's scanning infrastructure",
      "On-premises",
      "In a hybrid model"
    ],
    "correctAnswers": [1],
    "explanation": "In SaaS, snapshots are processed in Wiz's scanning infrastructure."
  },
  {
    "id": 58,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What is a key benefit of Wiz Outpost for regulated industries?",
    "type": "single",
    "options": [
      "Lower licensing costs",
      "Data never leaves the customer's cloud boundary",
      "Faster scan times",
      "No configuration required"
    ],
    "correctAnswers": [1],
    "explanation": "Key benefit: data never leaves the customer's cloud boundary."
  },
  {
    "id": 59,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "How does agentless scanning work in both SaaS and Outpost models?",
    "type": "single",
    "options": [
      "Installing agents",
      "Creating snapshots/disk clones for scanning",
      "Monitoring network traffic only",
      "SSH access"
    ],
    "correctAnswers": [1],
    "explanation": "Both use snapshots/disk clones for scanning."
  },
  {
    "id": 60,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What infrastructure does Wiz Outpost deploy in your environment?",
    "type": "single",
    "options": [
      "Only monitoring agents",
      "Kubernetes clusters for scanning workloads",
      "Virtual machines only",
      "Database servers"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost deploys Kubernetes clusters for scanning workloads."
  },
  {
    "id": 61,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "Which deployment model provides the fastest time-to-value?",
    "type": "single",
    "options": [
      "Outpost",
      "SaaS",
      "Both equal",
      "Neither"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS provides fastest time-to-value with minimal setup."
  },
  {
    "id": 62,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What is required for a GCP Outpost deployment per region?",
    "type": "single",
    "options": [
      "VM instance only",
      "Dedicated GKE cluster",
      "Cloud Function",
      "Load balancer"
    ],
    "correctAnswers": [1],
    "explanation": "GCP Outpost requires a dedicated GKE cluster per region."
  },
  {
    "id": 63,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "In terms of operational overhead, which model requires more management?",
    "type": "single",
    "options": [
      "SaaS",
      "Outpost",
      "Both equal",
      "Neither"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost requires more operational overhead."
  },
  {
    "id": 64,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What type of network connectivity does standard SaaS scanning require?",
    "type": "single",
    "options": [
      "None",
      "Outbound to Wiz and cloud provider APIs",
      "Inbound from internet",
      "VPN"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS requires outbound connectivity to Wiz and cloud APIs."
  },
  {
    "id": 65,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "Can Wiz Outpost support multiple cloud connectors?",
    "type": "single",
    "options": [
      "No",
      "Yes, across one or more tenants",
      "Only in AWS",
      "Only same provider"
    ],
    "correctAnswers": [1],
    "explanation": "One Outpost can support multiple connectors across tenants."
  },
  {
    "id": 66,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What happens to disk snapshots after scanning in both models?",
    "type": "single",
    "options": [
      "Permanently stored",
      "Deleted after scanning completes",
      "Archived",
      "Sent to backup"
    ],
    "correctAnswers": [1],
    "explanation": "Snapshots are deleted after scanning completes."
  },
  {
    "id": 67,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "Which deployment model is better for air-gapped or highly isolated environments?",
    "type": "single",
    "options": [
      "SaaS",
      "Outpost",
      "Both equal",
      "Neither"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost is better for air-gapped/isolated environments."
  },
  {
    "id": 68,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "What is a Self-managed Network Outpost (BYON)?",
    "type": "single",
    "options": [
      "Wiz managed",
      "Deployed in your VPC with full control",
      "SaaS option",
      "Third-party service"
    ],
    "correctAnswers": [1],
    "explanation": "BYON = Outpost deployed in your own VPC with full control."
  },
  {
    "id": 69,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "In terms of data privacy, which statement is TRUE?",
    "type": "single",
    "options": [
      "Both send full disk data",
      "SaaS sends disk data; Outpost sends only metadata",
      "Outpost sends more",
      "Neither sends data"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS sends disk data; Outpost processes locally and sends metadata."
  },
  {
    "id": 70,
    "domain": "Wiz Implementation",
    "subtopic": "Configure Connectors and Deployments",
    "text": "Which model is recommended for strict national data sovereignty laws?",
    "type": "single",
    "options": [
      "SaaS",
      "Outpost",
      "Hybrid",
      "No Wiz deployment"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz Outpost is recommended for data sovereignty requirements."
  },
  {
    "id": 71,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What is the fundamental difference between SaaS and Outpost?",
    "type": "single",
    "options": [
      "SaaS is faster",
      "SaaS scans in Wiz; Outpost scans in customer environment",
      "SaaS requires agents",
      "SaaS is cheaper"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS scans in Wiz infrastructure; Outpost scans in customer environment."
  },
  {
    "id": 72,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "Where does Wiz Outpost process disk scans?",
    "type": "single",
    "options": [
      "Wiz backend",
      "Customer's cloud environment",
      "Third-party center",
      "Hybrid"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost processes disk scans and data in the customer's cloud environment."
  },
  {
    "id": 73,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What does Wiz Outpost send to the Wiz backend?",
    "type": "single",
    "options": [
      "Disk images",
      "Only scan metadata (findings, vulnerabilities, etc.)",
      "Encrypted full copies",
      "Network logs"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost only sends scan metadata to the Wiz backend."
  },
  {
    "id": 74,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What role does Wiz Outpost serve in the architecture?",
    "type": "single",
    "options": [
      "Backup",
      "Data barrier for localized processing",
      "Network appliance",
      "Cost tool"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost serves as a data barrier for localized processing."
  },
  {
    "id": 75,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "In a SaaS deployment, where do workload scans typically occur?",
    "type": "single",
    "options": [
      "Customer data center",
      "Same cloud and region as resources",
      "US-East-1",
      "Wiz private cloud"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS scans happen in the same cloud and region where resources are located."
  },
  {
    "id": 76,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "For Outpost deployments, where are disks and databases scanned?",
    "type": "single",
    "options": [
      "Wiz geo region",
      "Native regions",
      "Centralized region",
      "On-premises"
    ],
    "correctAnswers": [1],
    "explanation": "Disks and databases are scanned in their native regions for Outpost."
  },
  {
    "id": 77,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "Which deployment model provides the fastest time-to-value?",
    "type": "single",
    "options": [
      "Outpost",
      "SaaS",
      "Equally fast",
      "Depends on provider"
    ],
    "correctAnswers": [1],
    "explanation": "SaaS provides fastest time-to-value with minimal setup."
  },
  {
    "id": 78,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What infrastructure does Wiz Outpost deploy in Azure?",
    "type": "single",
    "options": [
      "VMs only",
      "AKS clusters with orchestrator and worker nodes",
      "Functions only",
      "No infrastructure"
    ],
    "correctAnswers": [1],
    "explanation": "Azure Outpost deploys AKS clusters with orchestrator and worker nodes."
  },
  {
    "id": 79,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "Can one Wiz Outpost support multiple cloud connectors?",
    "type": "single",
    "options": [
      "No",
      "Yes, across one or more tenants",
      "Only AWS",
      "Only same provider"
    ],
    "correctAnswers": [1],
    "explanation": "One Outpost can support multiple connectors across tenants."
  },
  {
    "id": 80,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What network requirement does Outpost have for sending findings?",
    "type": "single",
    "options": [
      "None",
      "Outbound internet to Wiz backend",
      "Inbound from Wiz",
      "VPN tunnel"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost requires outbound internet access to send findings to Wiz."
  },
  {
    "id": 81,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "In terms of operational overhead, which statement is TRUE?",
    "type": "single",
    "options": [
      "SaaS requires more",
      "Outpost requires more",
      "Equal effort",
      "None"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost requires more operational overhead."
  },
  {
    "id": 82,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "When should you choose Wiz Outpost over SaaS?",
    "type": "single",
    "options": [
      "Lowest cost",
      "Strict data residency requirements",
      "Small environment",
      "Simplest deployment"
    ],
    "correctAnswers": [1],
    "explanation": "Choose Outpost for strict data residency and compliance."
  },
  {
    "id": 83,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "How does agentless scanning work in both models?",
    "type": "single",
    "options": [
      "Agents",
      "Snapshots/disk clones",
      "Network traffic",
      "SSH"
    ],
    "correctAnswers": [1],
    "explanation": "Both use snapshots/disk clones for scanning."
  },
  {
    "id": 84,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What happens to disk snapshots after scanning in both models?",
    "type": "single",
    "options": [
      "Stored",
      "Deleted after scanning completes",
      "Archived",
      "Sent to backup"
    ],
    "correctAnswers": [1],
    "explanation": "Snapshots are deleted after scanning completes."
  },
  {
    "id": 85,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "Which model is better for air-gapped or isolated environments?",
    "type": "single",
    "options": [
      "SaaS",
      "Outpost",
      "Both equal",
      "Neither"
    ],
    "correctAnswers": [1],
    "explanation": "Outpost is better for air-gapped/isolated environments."
  },
  {
    "id": 86,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "In Azure Outpost, what component manages nodes and orchestrates deployments?",
    "type": "single",
    "options": [
      "Worker nodes",
      "Control Plane",
      "GitProxy",
      "Service Bus"
    ],
    "correctAnswers": [1],
    "explanation": "Control Plane manages nodes and orchestrates deployments."
  },
  {
    "id": 87,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "For SaaS deployments scanning VCS resources, where does scanning occur?",
    "type": "single",
    "options": [
      "VCS region",
      "Location of Wiz tenant",
      "Customer cloud",
      "Multiple regions"
    ],
    "correctAnswers": [1],
    "explanation": "VCS scanning occurs in the location of the Wiz tenant."
  },
  {
    "id": 88,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "What is a key benefit of Wiz Outpost for regulated industries?",
    "type": "single",
    "options": [
      "Lower cost",
      "Data never leaves the customer's cloud boundary",
      "Faster scans",
      "No config"
    ],
    "correctAnswers": [1],
    "explanation": "Key benefit: data never leaves the customer's cloud boundary."
  },
  {
    "id": 89,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "Which cloud providers support Wiz Outpost deployments?",
    "type": "single",
    "options": [
      "AWS only",
      "AWS/Azure only",
      "AWS, Azure, GCP, OCI, and Alibaba Cloud",
      "Public only"
    ],
    "correctAnswers": [2],
    "explanation": "Outpost supports AWS, Azure, GCP, OCI, and Alibaba Cloud."
  },
  {
    "id": 90,
    "domain": "Wiz Implementation",
    "subtopic": "Compare and contrast SaaS vs Outpost",
    "text": "For Outpost, where are buckets scanned if no regional cluster exists?",
    "type": "single",
    "options": [
      "Cannot scan",
      "Default to assigned Wiz geo-location region",
      "US-East-1",
      "On-premises"
    ],
    "correctAnswers": [1],
    "explanation": "They default to assigned Wiz geo-location region."
  },

  // ==========================================
  // III. WIZ MANAGEMENT (91-175)
  // ==========================================
  {
    "id": 91,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What does RBAC stand for in Wiz?",
    "type": "single",
    "options": [
      "Resource-Based Access Control",
      "Role-Based Access Control",
      "Rule-Based Access Control",
      "Rights-Based Access Control"
    ],
    "correctAnswers": [1],
    "explanation": "RBAC stands for Role-Based Access Control."
  },
  {
    "id": 92,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which role has full access to all portal pages and control over all settings?",
    "type": "single",
    "options": [
      "Global Contributor",
      "Project Admin",
      "Global Admin",
      "Security Champion"
    ],
    "correctAnswers": [2],
    "explanation": "Global Admin has full access to all portal pages and settings."
  },
  {
    "id": 93,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What is the key difference between Global Admin and Global Contributor roles?",
    "type": "single",
    "options": [
      "Global Admin can view more data",
      "Global Contributor cannot manage users, projects, and access controls",
      "Global Admin has read-only access",
      "There is no difference"
    ],
    "correctAnswers": [1],
    "explanation": "Global Contributor cannot manage users, projects, and access controls."
  },
  {
    "id": 94,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which authentication protocol does Wiz support for SSO?",
    "type": "single",
    "options": [
      "SAML 2.0 only",
      "OIDC only",
      "Both SAML 2.0 and OIDC",
      "OAuth 2.0 only"
    ],
    "correctAnswers": [2],
    "explanation": "Wiz supports both SAML 2.0 and OIDC for SSO."
  },
  {
    "id": 95,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What does JIT provisioning stand for?",
    "type": "single",
    "options": [
      "Just-in-Time provisioning",
      "Joint Integration Technology provisioning",
      "Java Integration Tool provisioning",
      "JSON Identity Transfer provisioning"
    ],
    "correctAnswers": [0],
    "explanation": "JIT = Just-in-Time provisioning."
  },
  {
    "id": 96,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which feature allows automatic user provisioning and de-provisioning?",
    "type": "single",
    "options": [
      "SAML only",
      "SCIM (System for Cross-domain Identity Management)",
      "OIDC only",
      "Manual provisioning only"
    ],
    "correctAnswers": [1],
    "explanation": "SCIM enables automatic user provisioning and de-provisioning."
  },
  {
    "id": 97,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which role is recommended for developers or DevOps personnel with read-only access to their projects?",
    "type": "single",
    "options": [
      "Global Admin",
      "Project Reader",
      "Global Contributor",
      "Security Champion"
    ],
    "correctAnswers": [1],
    "explanation": "Project Reader provides read-only access to project data."
  },
  {
    "id": 98,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What is the purpose of Project-scoped roles?",
    "type": "single",
    "options": [
      "To give users access to all resources",
      "To limit user access to only their areas of responsibility",
      "To reduce system performance",
      "To increase licensing costs"
    ],
    "correctAnswers": [1],
    "explanation": "Project-scoped roles limit access to specific areas of responsibility."
  },
  {
    "id": 99,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which role can manage issues and comments within their assigned projects?",
    "type": "single",
    "options": [
      "Project Graph Reader",
      "Project Reader",
      "Project Member",
      "Developer"
    ],
    "correctAnswers": [2],
    "explanation": "Project Member can manage issues and comments within their projects."
  },
  {
    "id": 100,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What does Wiz support for identity providers?",
    "type": "single",
    "options": [
      "Single SSO identity provider only",
      "Multiple SSO identity providers",
      "No SSO support",
      "Only cloud-native providers"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz supports multiple SSO identity providers."
  },
  {
    "id": 101,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which role has access to run Security Graph queries but shouldn't have access to security info?",
    "type": "single",
    "options": [
      "Project Member",
      "Project Graph Reader",
      "Project Admin",
      "Developer"
    ],
    "correctAnswers": [1],
    "explanation": "Project Graph Reader can run queries but has no security info access."
  },
  {
    "id": 102,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What is the recommended access principle for assigning user roles?",
    "type": "single",
    "options": [
      "Give everyone Global Admin access",
      "Least-privileged access (minimum permissions required)",
      "Maximum access for flexibility",
      "Same role for all users"
    ],
    "correctAnswers": [1],
    "explanation": "Least-privileged access principle ensures minimum permissions required."
  },
  {
    "id": 103,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which role can create remediation pull requests?",
    "type": "single",
    "options": [
      "Project Reader",
      "Global Contributor",
      "Developer",
      "Project Member"
    ],
    "correctAnswers": [2],
    "explanation": "Developer role can create remediation pull requests."
  },
  {
    "id": 104,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "What happens when you configure role mappings with SSO?",
    "type": "single",
    "options": [
      "Users must be manually assigned roles",
      "Roles are automatically assigned based on IdP group membership",
      "All users get Global Admin access",
      "SSO is disabled"
    ],
    "correctAnswers": [1],
    "explanation": "Role mappings automatically assign roles based on IdP groups."
  },
  {
    "id": 105,
    "domain": "Wiz Management",
    "subtopic": "Design Access and Authentication strategy",
    "text": "Which built-in role is recommended for security architects and Wiz champions?",
    "type": "single",
    "options": [
      "Global Admin",
      "Project Admin",
      "Global Contributor",
      "Developer"
    ],
    "correctAnswers": [2],
    "explanation": "Global Contributor is recommended for security architects and champions."
  },
  {
    "id": 106,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What is the primary purpose of Projects in Wiz?",
    "type": "single",
    "options": [
      "To organize cloud billing",
      "To define RBAC and organizational boundaries for resource access",
      "To create backup policies",
      "To manage network configurations"
    ],
    "correctAnswers": [1],
    "explanation": "Projects define RBAC and organizational boundaries for resource access."
  },
  {
    "id": 107,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What are Project Folders used for?",
    "type": "single",
    "options": [
      "To store files and documents",
      "To organize Projects hierarchically",
      "To backup project data",
      "To create virtual networks"
    ],
    "correctAnswers": [1],
    "explanation": "Project Folders organize Projects hierarchically."
  },
  {
    "id": 108,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "Which method is recommended for most organizations when dividing cloud resources into Projects?",
    "type": "single",
    "options": [
      "Horizontally by tags across subscriptions",
      "Vertically by cloud subscription or cloud organization",
      "By individual resource type",
      "By geographic location only"
    ],
    "correctAnswers": [1],
    "explanation": "Vertical division by subscription/organization minimizes visibility gaps."
  },
  {
    "id": 109,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What is the 'Any resource' method for Project assignment?",
    "type": "single",
    "options": [
      "Assigns all resources regardless of filters",
      "Automatically assigns resources matching defined filters (tags or names)",
      "Requires manual resource assignment",
      "Only works for VMs"
    ],
    "correctAnswers": [1],
    "explanation": "Any resource method auto-assigns resources matching filters."
  },
  {
    "id": 110,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "Which Project structure example organizes by functional areas?",
    "type": "single",
    "options": [
      "Environment-based",
      "Business unit organization",
      "Multi-cloud organization",
      "Geographic organization"
    ],
    "correctAnswers": [1],
    "explanation": "Business unit organization groups by functional areas (teams/departments)."
  },
  {
    "id": 111,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What is an anti-pattern to avoid when structuring Projects?",
    "type": "single",
    "options": [
      "Using environment-based organization",
      "Creating overly granular Projects (one per microservice)",
      "Using Project Folders",
      "Assigning Project Owners"
    ],
    "correctAnswers": [1],
    "explanation": "Avoid overly granular Projects; use Services for microservices instead."
  },
  {
    "id": 112,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "How are resources assigned to Projects using tags?",
    "type": "single",
    "options": [
      "Using logical AND",
      "Using logical OR (match at least one tag)",
      "Exact match only",
      "Tags cannot be used"
    ],
    "correctAnswers": [1],
    "explanation": "Tags use logical OR (resource needs at least one matching tag)."
  },
  {
    "id": 113,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What should you use for application-level grouping instead of creating one Project per microservice?",
    "type": "single",
    "options": [
      "Project Folders",
      "Services",
      "Cloud Organizations",
      "Subscriptions"
    ],
    "correctAnswers": [1],
    "explanation": "Services should be used for application-level grouping."
  },
  {
    "id": 114,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "When defining Projects, which cloud resource types can be used for scoping?",
    "type": "single",
    "options": [
      "Subscriptions only",
      "Subscriptions, Cloud Organizations, Repositories, and Container Registries",
      "Virtual machines only",
      "Networks only"
    ],
    "correctAnswers": [1],
    "explanation": "Subscriptions, Cloud Organizations, Repositories, Container Registries can be used."
  },
  {
    "id": 115,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What is the relationship between Projects and Services?",
    "type": "single",
    "options": [
      "They are the same thing",
      "Projects define RBAC boundaries; Services group resources by functionality",
      "Services replace Projects",
      "Projects are deprecated"
    ],
    "correctAnswers": [1],
    "explanation": "Projects = RBAC boundaries; Services = functional groupings."
  },
  {
    "id": 116,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "How long does it typically take for resources to be fully associated with Projects after creation?",
    "type": "single",
    "options": [
      "Immediately",
      "1-2 hours",
      "1-2 complete scan cycles (24-48 hours)",
      "1 week"
    ],
    "correctAnswers": [2],
    "explanation": "1-2 complete scan cycles (24-48 hours) for full association."
  },
  {
    "id": 117,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "Which environment type should be selected for production resources in a Project?",
    "type": "single",
    "options": [
      "DEVELOPMENT",
      "TESTING",
      "PRODUCTION",
      "OTHER"
    ],
    "correctAnswers": [2],
    "explanation": "PRODUCTION environment type for production resources."
  },
  {
    "id": 118,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What happens when a user views a Service with Project-scoped access?",
    "type": "single",
    "options": [
      "They see all Service resources",
      "They see only Service resources in Projects they can access",
      "They cannot view Services",
      "They must request permissions"
    ],
    "correctAnswers": [1],
    "explanation": "Users see only Service resources in their accessible Projects."
  },
  {
    "id": 119,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "Which Project structure is recommended for organizations with strict environment separation requirements?",
    "type": "single",
    "options": [
      "Business unit organization",
      "Environment-based organization",
      "Multi-cloud organization",
      "Flat structure"
    ],
    "correctAnswers": [1],
    "explanation": "Environment-based organization for strict separation."
  },
  {
    "id": 120,
    "domain": "Wiz Management",
    "subtopic": "Design Projects strategy",
    "text": "What can be configured on the Project Risk Profile page?",
    "type": "single",
    "options": [
      "User permissions only",
      "Business impact, customer facing, regulated, etc.",
      "Cloud provider credentials",
      "Network configurations"
    ],
    "correctAnswers": [1],
    "explanation": "Risk profile includes business impact, regulated, customer facing, etc."
  },
  {
    "id": 121,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "Where in the Wiz Portal do you manage Projects?",
    "type": "single",
    "options": [
      "Settings > Deployments",
      "Settings > Projects",
      "Dashboard > Projects",
      "Inventory > Projects"
    ],
    "correctAnswers": [1],
    "explanation": "Settings > Projects is where you manage all Projects."
  },
  {
    "id": 122,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What permission level is required to create, edit, and archive Projects?",
    "type": "single",
    "options": [
      "Read permission",
      "Write permission",
      "Admin permission",
      "Contributor permission"
    ],
    "correctAnswers": [2],
    "explanation": "Admin permission required to create, edit, and archive Projects."
  },
  {
    "id": 123,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What must you configure before adding a Project?",
    "type": "single",
    "options": [
      "User roles",
      "Connectors for cloud resources",
      "Integrations",
      "Compliance frameworks"
    ],
    "correctAnswers": [1],
    "explanation": "Connectors must be configured before adding Projects."
  },
  {
    "id": 124,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "Which characters are allowed in a Project name?",
    "type": "single",
    "options": [
      "Only alphanumeric",
      "Alphanumeric, hyphens, and special characters like ! @ # $ %",
      "Only letters and numbers",
      "Any Unicode characters"
    ],
    "correctAnswers": [1],
    "explanation": "Alphanumeric, hyphens, and many special characters are allowed."
  },
  {
    "id": 125,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What is a Project Folder?",
    "type": "single",
    "options": [
      "A storage location for files",
      "A hierarchical container for organizing Projects",
      "A backup directory",
      "A network folder"
    ],
    "correctAnswers": [1],
    "explanation": "Project Folders organize Projects hierarchically."
  },
  {
    "id": 126,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "On the Project Details page, which of the following can you configure?",
    "type": "single",
    "options": [
      "Project Name and Description only",
      "Name, Description, Parent Folder, Category, Business Unit, and Tags",
      "Only cloud resources",
      "Only user permissions"
    ],
    "correctAnswers": [1],
    "explanation": "Name, Description, Parent Folder, Category, Business Unit, Tags configurable."
  },
  {
    "id": 127,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "How many categories can you add to a Project?",
    "type": "single",
    "options": [ "1", "5", "10", "Unlimited" ],
    "correctAnswers": [2],
    "explanation": "Up to 10 categories can be added to a Project."
  },
  {
    "id": 128,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What resource types can be used for Project scoping?",
    "type": "single",
    "options": [
      "Virtual machines only",
      "Subscription, Cloud Organizations, Repository, and Container Registry",
      "Networks only",
      "Databases only"
    ],
    "correctAnswers": [1],
    "explanation": "Subscription, Cloud Organizations, Repository, Container Registry can be used."
  },
  {
    "id": 129,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What does the 'Any resource' method do?",
    "type": "single",
    "options": [
      "Assigns all resources without filters",
      "Automatically assigns resources matching defined filters",
      "Requires manual assignment",
      "Only works for K8s"
    ],
    "correctAnswers": [1],
    "explanation": "Any resource method auto-assigns resources matching filters."
  },
  {
    "id": 130,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "On the Project Team page, which roles can you assign?",
    "type": "single",
    "options": [
      "Only Global Admin",
      "Project Owners and Security Champions",
      "Only developers",
      "All Wiz users"
    ],
    "correctAnswers": [1],
    "explanation": "Project Owners and Security Champions can be assigned."
  },
  {
    "id": 131,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What business impact levels can be selected on the Project Risk Profile page?",
    "type": "single",
    "options": [
      "Critical, High, Medium, Low",
      "High (HBI), Medium (MBI), Low (LBI)",
      "1, 2, 3, 4, 5",
      "Production, Staging, Development"
    ],
    "correctAnswers": [1],
    "explanation": "High (HBI), Medium (MBI), Low (LBI) business impact levels."
  },
  {
    "id": 132,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "Which risk profile attributes can be configured?",
    "type": "single",
    "options": [
      "Customer facing, Regulated, Internet facing",
      "Has authentication, Exposes API, Stores data",
      "Business impact",
      "All of the above"
    ],
    "correctAnswers": [3],
    "explanation": "All listed attributes can be configured in risk profile."
  },
  {
    "id": 133,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What environment types can be selected when adding resource scopes?",
    "type": "single",
    "options": [
      "PRODUCTION, STAGING, DEVELOPMENT, TESTING, OTHER",
      "HIGH, MEDIUM, LOW",
      "CRITICAL, NORMAL, LOW",
      "PROD, DEV, TESTA"
    ],
    "correctAnswers": [0],
    "explanation": "PRODUCTION, STAGING, DEVELOPMENT, TESTING, OTHER."
  },
  {
    "id": 134,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "How long does it take for resources to be fully associated with a Project after creation?",
    "type": "single",
    "options": [
      "Immediately",
      "1 hour",
      "1-2 complete scan cycles (24-48 hours)",
      "1 week"
    ],
    "correctAnswers": [2],
    "explanation": "1-2 complete scan cycles (24-48 hours) for full association."
  },
  {
    "id": 135,
    "domain": "Wiz Management",
    "subtopic": "Identify basic elements of Projects configuration within the Wiz portal",
    "text": "What happens if you try to create a Project with the same name as an archived Project?",
    "type": "single",
    "options": [
      "It automatically overwrites",
      "It fails - names must be unique (including archived)",
      "It creates a duplicate",
      "It prompts to merge"
    ],
    "correctAnswers": [1],
    "explanation": "Fails - names must be unique (including archived Projects)."
  },
  {
    "id": 136,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "Which browsers support the Wiz Browser Extension?",
    "type": "single",
    "options": [
      "Chrome only",
      "Chrome and Microsoft Edge",
      "All browsers",
      "Firefox only"
    ],
    "correctAnswers": [1],
    "explanation": "Chrome and Microsoft Edge are supported."
  },
  {
    "id": 137,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What is the minimum Chrome version required for the Wiz Browser Extension?",
    "type": "single",
    "options": [ "Version 100", "Version 110", "Version 114", "Version 120" ],
    "correctAnswers": [2],
    "explanation": "Chrome version 114 and above required."
  },
  {
    "id": 138,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What permission is required in Wiz to use the Browser Extension?",
    "type": "single",
    "options": [
      "Global Admin",
      "At least Read permission for Issues",
      "Project Owner",
      "Developer role"
    ],
    "correctAnswers": [1],
    "explanation": "At least Read permission for Issues required."
  },
  {
    "id": 139,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What is an important step after installing the extension?",
    "type": "single",
    "options": [
      "Restart your computer",
      "Pin the extension to the browser toolbar",
      "Configure VPN settings",
      "Install additional plugins"
    ],
    "correctAnswers": [1],
    "explanation": "Pin extension to toolbar for full functionality."
  },
  {
    "id": 140,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "How does the Browser Extension authenticate to Wiz?",
    "type": "single",
    "options": [
      "Separate login credentials",
      "Re-uses your Wiz portal authentication",
      "API key only",
      "OAuth token"
    ],
    "correctAnswers": [1],
    "explanation": "Re-uses Wiz portal authentication (must be logged in)."
  },
  {
    "id": 141,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What happens if your Wiz portal session expires?",
    "type": "single",
    "options": [
      "The extension continues to work",
      "The extension will no longer function",
      "Warning but can continue",
      "Auto-renews session"
    ],
    "correctAnswers": [1],
    "explanation": "Extension stops functioning if portal session expires."
  },
  {
    "id": 142,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "How can you open the Wiz Browser Extension?",
    "type": "single",
    "options": [
      "Click the icon",
      "Click the Wiz badge",
      "Shortcut Ctrl + Shift + K",
      "All of the above"
    ],
    "correctAnswers": [3],
    "explanation": "All methods work: icon, badge, keyboard shortcut."
  },
  {
    "id": 143,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What does a red dot on the Wiz badge indicate?",
    "type": "single",
    "options": [
      "Extension is updating",
      "A critical Issue or Finding detected on the page",
      "Connection error",
      "New features"
    ],
    "correctAnswers": [1],
    "explanation": "Red dot indicates critical Issue or Finding detected."
  },
  {
    "id": 144,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "Which cloud service providers are supported by the Browser Extension?",
    "type": "single",
    "options": [
      "AWS only",
      "AWS and Azure only",
      "AWS, GCP, Azure, Azure DevOps, GitHub, GitLab",
      "Only public clouds"
    ],
    "correctAnswers": [2],
    "explanation": "AWS, GCP, Azure, Azure DevOps, GitHub, GitLab supported."
  },
  {
    "id": 145,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What does the Global View Toggle (AWS) allow you to do?",
    "type": "single",
    "options": [
      "View all Projects",
      "Switch to a global view cross-region",
      "Change accounts",
      "Toggle dark mode"
    ],
    "correctAnswers": [1],
    "explanation": "Global View Toggle shows issues across all AWS resources."
  },
  {
    "id": 146,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "When viewing a specific resource in CSP, what insights does the extension show?",
    "type": "single",
    "options": [
      "Only vulnerabilities",
      "Top Issues, CCRs, Technologies, Cloud-to-code",
      "Only compliance",
      "Network topology"
    ],
    "correctAnswers": [1],
    "explanation": "Shows Issues, CCRs, technologies, cloud-to-code insights."
  },
  {
    "id": 147,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What does the Mika AI icon (✨) overlay indicate?",
    "type": "single",
    "options": [
      "Update needed",
      "Vulnerability-focused webpage (CVE check)",
      "Error",
      "New feature"
    ],
    "correctAnswers": [1],
    "explanation": "Indicates vulnerability-focused webpage (CVE check available)."
  },
  {
    "id": 148,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What can Mika AI do while viewing a resource in CSP console?",
    "type": "single",
    "options": [
      "Only show vulnerabilities",
      "Answer context-aware questions",
      "Deploy resources",
      "Delete resources"
    ],
    "correctAnswers": [1],
    "explanation": "Answers context-aware questions about resources."
  },
  {
    "id": 149,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "What can Mika AI do when viewing a file in VCS (GitHub/GitLab)?",
    "type": "single",
    "options": [
      "Only read the file",
      "Check production status and generate least-privilege policies",
      "Delete file",
      "Merge PRs"
    ],
    "correctAnswers": [1],
    "explanation": "Checks production status and generates least-privilege policies."
  },
  {
    "id": 150,
    "domain": "Wiz Management",
    "subtopic": "Leverage the Wiz Browser extension",
    "text": "Which compute resources are supported by the Browser Extension in AWS?",
    "type": "single",
    "options": [
      "EC2 only",
      "Lambda, EC2 Snapshot, EC2 Instance, ASG, AMI",
      "Only serverless",
      "Virtual machines only"
    ],
    "correctAnswers": [1],
    "explanation": "Lambda, EC2 Snapshot, EC2 Instance, Auto Scaling Group, AMI."
  },

  // ==========================================
  // IV. WIZ PORTAL ADMINISTRATION (151-250)
  // ==========================================
  {
    "id": 151,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is the primary purpose of Boards in Wiz?",
    "type": "single",
    "options": [
      "To store configuration files",
      "To configure cloud connectors",
      "To visualize security data and metrics through customizable dashboards",
      "To manage user permissions"
    ],
    "correctAnswers": [2],
    "explanation": "Boards visualize security data and metrics through customizable dashboards."
  },
  {
    "id": 152,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "Where can you typically access Boards in the Wiz Portal?",
    "type": "single",
    "options": [
      "Boards section in the main navigation",
      "Settings > Configuration",
      "Reports > Dashboards",
      "Inventory > Views"
    ],
    "correctAnswers": [0],
    "explanation": "Boards are typically accessed via the Boards section in main navigation."
  },
  {
    "id": 153,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What are the typical scope levels for Boards?",
    "type": "single",
    "options": [
      "Public and Private only",
      "Admin and User only",
      "Cloud-specific only",
      "Global, Organization, and Project-level"
    ],
    "correctAnswers": [3],
    "explanation": "Boards can be scoped at Global, Organization, and Project levels."
  },
  {
    "id": 154,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is a widget in the context of Boards?",
    "type": "single",
    "options": [
      "A visual component that displays specific data or metrics",
      "A cloud resource",
      "A user permission setting",
      "A compliance framework"
    ],
    "correctAnswers": [0],
    "explanation": "A widget is a visual component displaying specific data or metrics."
  },
  {
    "id": 155,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "Which type of data can typically be displayed on Board widgets?",
    "type": "single",
    "options": [
      "Issues and vulnerabilities only",
      "User activity logs only",
      "Issues, compliance scores, resource inventory, trends, and custom queries",
      "Network diagrams only"
    ],
    "correctAnswers": [2],
    "explanation": "Widgets can display Issues, compliance, inventory, trends, custom queries."
  },
  {
    "id": 156,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is the benefit of using Global Boards?",
    "type": "single",
    "options": [
      "They are private to individual users",
      "They only show Project-specific data",
      "They cannot be customized",
      "They provide organization-wide visibility accessible to all users"
    ],
    "correctAnswers": [3],
    "explanation": "Global Boards provide organization-wide visibility for all users."
  },
  {
    "id": 157,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is the purpose of Project-scoped Boards?",
    "type": "single",
    "options": [
      "To show all organizational data",
      "To display data filtered to specific Projects for team-focused views",
      "To manage cloud connectors",
      "To configure user roles"
    ],
    "correctAnswers": [1],
    "explanation": "Project-scoped Boards display data filtered to specific Projects."
  },
  {
    "id": 158,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "How do Boards help with security posture management?",
    "type": "single",
    "options": [
      "They provide visual insights into security metrics, trends, and KPIs",
      "They automatically fix vulnerabilities",
      "They replace security policies",
      "They only show historical data"
    ],
    "correctAnswers": [0],
    "explanation": "Boards provide visual insights into security metrics, trends, and KPIs."
  },
  {
    "id": 159,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is a common use case for Boards?",
    "type": "single",
    "options": [
      "Configuring cloud resources",
      "Managing user accounts",
      "Executive dashboards showing high-level security posture",
      "Deploying applications"
    ],
    "correctAnswers": [2],
    "explanation": "Common use case: Executive dashboards showing high-level security posture."
  },
  {
    "id": 160,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "Can Boards display real-time data?",
    "type": "single",
    "options": [
      "No, only historical data",
      "Only for compliance data",
      "Only once per week",
      "Yes, Boards can show current security posture and metrics"
    ],
    "correctAnswers": [3],
    "explanation": "Yes, Boards can show current security posture and real-time metrics."
  },
  {
    "id": 161,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is the Journey Center in Wiz?",
    "type": "single",
    "options": [
      "A guided onboarding experience with pre-built boards and workflows",
      "A navigation menu",
      "A compliance framework",
      "A cloud connector type"
    ],
    "correctAnswers": [0],
    "explanation": "Journey Center is a guided onboarding experience with pre-built workflows."
  },
  {
    "id": 162,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "How can Boards help with compliance reporting?",
    "type": "single",
    "options": [
      "They cannot show compliance data",
      "They only show failed checks",
      "They can display compliance scores, framework status, and trends",
      "They replace compliance reports"
    ],
    "correctAnswers": [2],
    "explanation": "Boards can display compliance scores, framework status, and trends."
  },
  {
    "id": 163,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What is the benefit of customizable Boards?",
    "type": "single",
    "options": [
      "They require less maintenance",
      "They allow teams to focus on metrics relevant to their responsibilities",
      "They are faster to load",
      "They use less storage"
    ],
    "correctAnswers": [1],
    "explanation": "Customizable Boards allow teams to focus on relevant metrics."
  },
  {
    "id": 164,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "Can Boards be shared with other users?",
    "type": "single",
    "options": [
      "No, all Boards are private",
      "Only with Global Admins",
      "Only via email export",
      "Yes, Boards can be shared based on scope and permissions"
    ],
    "correctAnswers": [3],
    "explanation": "Yes, Boards can be shared based on scope and permissions."
  },
  {
    "id": 165,
    "domain": "Wiz Portal Administration",
    "subtopic": "Use Boards",
    "text": "What type of visualizations are typically available on Board widgets?",
    "type": "single",
    "options": [
      "Text only",
      "Images only",
      "Charts, graphs, tables, numbers, and trend lines",
      "Video content"
    ],
    "correctAnswers": [2],
    "explanation": "Visualizations include charts, graphs, tables, numbers, trend lines."
  },
  {
    "id": 166,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What permission is typically required to create a new Board?",
    "type": "single",
    "options": [
      "Appropriate role permissions",
      "Read-only access",
      "No permissions needed",
      "Only Global Admin"
    ],
    "correctAnswers": [0],
    "explanation": "Appropriate role permissions required (varies by Board scope)."
  },
  {
    "id": 167,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What is the first step in creating a custom Board?",
    "type": "single",
    "options": [
      "Add widgets immediately",
      "Configure cloud connectors",
      "Define Board name, description, and scope",
      "Set up user permissions"
    ],
    "correctAnswers": [2],
    "explanation": "First step: Define Board name, description, and scope."
  },
  {
    "id": 168,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What Board scopes can typically be selected when creating a Board?",
    "type": "single",
    "options": [
      "Only Global",
      "Only Private",
      "Cloud provider-specific only",
      "Global, Organization-level, or Project-level"
    ],
    "correctAnswers": [3],
    "explanation": "Scopes: Global, Organization-level, or Project-level."
  },
  {
    "id": 169,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "How do you add a widget to a Board?",
    "type": "single",
    "options": [
      "Widgets are automatically added",
      "Use 'Add Widget' button and select widget type and data source",
      "Import from external file",
      "Contact Wiz support"
    ],
    "correctAnswers": [1],
    "explanation": "Use 'Add Widget' button and select widget type and data source."
  },
  {
    "id": 170,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What types of widgets are commonly available?",
    "type": "single",
    "options": [
      "Number, Chart, Table, Graph, Trend, Query-based",
      "Text widgets only",
      "Image widgets only",
      "Video widgets only"
    ],
    "correctAnswers": [0],
    "explanation": "Widget types: Number, Chart, Table, Graph, Trend, Query-based."
  },
  {
    "id": 171,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "Can you customize the layout of widgets on a Board?",
    "type": "single",
    "options": [
      "No, layout is fixed",
      "Only by Wiz support",
      "Yes, widgets can be resized and repositioned",
      "Only in Global Boards"
    ],
    "correctAnswers": [2],
    "explanation": "Yes, widgets can be resized and repositioned via drag-and-drop."
  },
  {
    "id": 172,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What data sources can widgets typically pull from?",
    "type": "single",
    "options": [
      "External databases only",
      "User activity logs only",
      "Cloud billing data only",
      "Issues, Resources, Compliance, Security Graph, Findings"
    ],
    "correctAnswers": [3],
    "explanation": "Data sources: Issues, Resources, Compliance, Security Graph, Findings."
  },
  {
    "id": 173,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "Can you filter data displayed in a widget?",
    "type": "single",
    "options": [
      "Yes, with configured filters",
      "No, widgets show all data",
      "Only for compliance widgets",
      "Only by date range"
    ],
    "correctAnswers": [0],
    "explanation": "Yes, widgets can be configured with various filters."
  },
  {
    "id": 174,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What is the purpose of widget refresh intervals?",
    "type": "single",
    "options": [
      "To save storage space",
      "To manage user permissions",
      "To control how frequently widget data is updated",
      "To configure cloud scans"
    ],
    "correctAnswers": [2],
    "explanation": "Refresh intervals control how frequently widget data updates."
  },
  {
    "id": 175,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "Can you clone an existing Board?",
    "type": "single",
    "options": [
      "No, must create from scratch",
      "Yes, duplicate and customize",
      "Only Global Boards can be cloned",
      "Only by Global Admins"
    ],
    "correctAnswers": [1],
    "explanation": "Yes, cloning allows duplicating and customizing existing Boards."
  },
  {
    "id": 176,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "How can you control who can view a Board?",
    "type": "single",
    "options": [
      "All Boards are public",
      "Only via email sharing",
      "Cannot control access",
      "Set Board scope and permissions"
    ],
    "correctAnswers": [3],
    "explanation": "Control access via Board scope and permissions settings."
  },
  {
    "id": 177,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What is the benefit of using Security Graph queries in widgets?",
    "type": "single",
    "options": [
      "Enable custom, complex data analysis",
      "They are faster",
      "Require no configuration",
      "Only work for compliance data"
    ],
    "correctAnswers": [0],
    "explanation": "Security Graph queries enable custom, complex data analysis."
  },
  {
    "id": 178,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "Can you export data from a Board?",
    "type": "single",
    "options": [
      "No",
      "Only as screenshots",
      "Yes, via PDF, CSV, or image",
      "Only for Global Admins"
    ],
    "correctAnswers": [2],
    "explanation": "Yes, typically exportable via PDF, CSV, or image formats."
  },
  {
    "id": 179,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "What happens when you delete a Board?",
    "type": "single",
    "options": [
      "All associated data is deleted",
      "Board configuration removed, but data remains",
      "All widgets are permanently lost",
      "Cloud resources are affected"
    ],
    "correctAnswers": [1],
    "explanation": "Board configuration removed, but underlying data remains intact."
  },
  {
    "id": 180,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Boards",
    "text": "Can you schedule Board reports to be sent automatically?",
    "type": "single",
    "options": [
      "No",
      "Only for compliance Boards",
      "Only once per month",
      "Yes, Boards can typically be scheduled"
    ],
    "correctAnswers": [3],
    "explanation": "Yes, Boards can typically be scheduled for automatic delivery."
  },
  {
    "id": 181,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What is the primary purpose of the Threat Intel Center in Wiz?",
    "type": "single",
    "options": [
      "To manage user permissions",
      "To configure cloud connectors",
      "To show the most important emerging threats",
      "To manage compliance frameworks"
    ],
    "correctAnswers": [2],
    "explanation": "Threat Intel Center shows most important emerging threats in Cloud Threat Landscape."
  },
  {
    "id": 182,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "Who collects and curates the emerging threats in the Threat Intel Center?",
    "type": "single",
    "options": [
      "Wiz Threat Research team",
      "External vendors only",
      "Cloud service providers",
      "Individual customers"
    ],
    "correctAnswers": [0],
    "explanation": "Wiz Threat Research team collects and curates emerging threats."
  },
  {
    "id": 183,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "Which sources does Wiz use to collect emerging threat information?",
    "type": "single",
    "options": [
      "Social media only",
      "News websites only",
      "Customer reports only",
      "CISA, CERT-EU, and internal research"
    ],
    "correctAnswers": [3],
    "explanation": "Sources include CISA, CERT-EU, and internal Wiz research."
  },
  {
    "id": 184,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What types of threats are typically included in the Threat Intel Center?",
    "type": "single",
    "options": [
      "All vulnerabilities regardless of severity",
      "Critical exploited-in-the-wild, critical RCEs, novel cloud risks",
      "Only theoretical vulnerabilities",
      "Only compliance violations"
    ],
    "correctAnswers": [1],
    "explanation": "Focus on critical exploited vulnerabilities, RCEs, novel cloud risks."
  },
  {
    "id": 185,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What does a clickable icon with a number (e.g., '4 Issues') indicate in the Threat Intel Center?",
    "type": "single",
    "options": [
      "Issues/Findings related to threat were found in your environment",
      "Number of users affected",
      "Number of cloud providers",
      "Number of compliance frameworks"
    ],
    "correctAnswers": [0],
    "explanation": "Clickable number indicates Issues/Findings related to threat found in environment."
  },
  {
    "id": 186,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What does 'No Issues' displayed in the Threat Intel Center mean?",
    "type": "single",
    "options": [
      "Threat doesn't exist",
      "Environment completely secure",
      "Wiz has detection Rules but none matched",
      "Threat not important"
    ],
    "correctAnswers": [2],
    "explanation": "Wiz has detection Rules/Controls but none matched in your environment."
  },
  {
    "id": 187,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What does a blank/empty display (no icon) in the Threat Intel Center indicate?",
    "type": "single",
    "options": [
      "You are affected",
      "Threat is resolved",
      "Threat is low severity",
      "Wiz does not have relevant detection Rules"
    ],
    "correctAnswers": [3],
    "explanation": "Wiz does not have relevant Threat detection Rules or Controls for this threat."
  },
  {
    "id": 188,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What license is required for Threat detection capabilities?",
    "type": "single",
    "options": [
      "Wiz Cloud Basic",
      "Wiz Defend Ingestion license add-on",
      "No additional license needed",
      "Wiz Compliance license"
    ],
    "correctAnswers": [1],
    "explanation": "Wiz Defend Ingestion license add-on required for Threat detection."
  },
  {
    "id": 189,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What does the 'Work in progress' icon next to an advisory title indicate?",
    "type": "single",
    "options": [
      "Wiz is working on deploying optimal coverage",
      "Threat resolved",
      "Threat not real",
      "Advisory outdated"
    ],
    "correctAnswers": [0],
    "explanation": "Wiz is still working on deploying optimal coverage for the threat."
  },
  {
    "id": 190,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What action can you take directly from the Threat Intel Center?",
    "type": "single",
    "options": [
      "Delete cloud resources",
      "Modify cloud configurations",
      "Click 'Am I affected?' for Mika AI analysis",
      "Create new users"
    ],
    "correctAnswers": [2],
    "explanation": "Click 'Am I affected?' to trigger Mika AI analysis of the threat."
  },
  {
    "id": 191,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What colored icons indicate where findings were discovered?",
    "type": "single",
    "options": [
      "Red, yellow, green",
      "High, medium, low",
      "AWS, Azure, GCP",
      "Code, Deploy, Cloud resources"
    ],
    "correctAnswers": [3],
    "explanation": "Icons indicate: Code (repositories), Deploy (registries), Cloud resources."
  },
  {
    "id": 192,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What is the 'Has CISA KEV Exploit' property?",
    "type": "single",
    "options": [
      "Compliance framework",
      "Indicates vulnerability is in CISA KEV catalog",
      "Cloud service",
      "User role"
    ],
    "correctAnswers": [1],
    "explanation": "Indicates vulnerability is in CISA Known Exploited Vulnerabilities catalog."
  },
  {
    "id": 193,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What does EPSS (Exploit Probability Scoring System) predict?",
    "type": "single",
    "options": [
      "Likelihood vulnerability will be exploited in the wild",
      "How impactful a vulnerability is",
      "Cost of remediation",
      "Number of affected resources"
    ],
    "correctAnswers": [0],
    "explanation": "EPSS predicts likelihood that a vulnerability will be exploited in the wild."
  },
  {
    "id": 194,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "What are 'Initial Access Vulnerabilities'?",
    "type": "single",
    "options": [
      "Vulnerabilities requiring physical access",
      "Vulnerabilities in auth systems only",
      "Vulnerabilities exploited remotely over network without interaction",
      "Vulnerabilities easy to fix"
    ],
    "correctAnswers": [2],
    "explanation": "Vulnerabilities exploited remotely over network without user interaction."
  },
  {
    "id": 195,
    "domain": "Wiz Portal Administration",
    "subtopic": "Analyze emerging threats using the Threat Center",
    "text": "Where can you view aggregated information about high-profile threats?",
    "type": "single",
    "options": [
      "Settings page",
      "Compliance page",
      "User management page",
      "High-Profile Threats board"
    ],
    "correctAnswers": [3],
    "explanation": "High-Profile Threats board shows aggregated threat information."
  },
  {
    "id": 196,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "Where is the Technology Inventory located in the Wiz Portal?",
    "type": "single",
    "options": [
      "Settings > Technologies",
      "Inventory > Technologies",
      "Reports > Technologies",
      "Dashboard > Technologies"
    ],
    "correctAnswers": [1],
    "explanation": "Technology Inventory is at Inventory > Technologies."
  },
  {
    "id": 197,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What is the Technology Inventory based on?",
    "type": "single",
    "options": [
      "Manual user input",
      "External databases",
      "The Security Graph",
      "Cloud provider billing"
    ],
    "correctAnswers": [2],
    "explanation": "Technology Inventory is based on the Security Graph."
  },
  {
    "id": 198,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What are the three main technology categories in Wiz?",
    "type": "single",
    "options": [
      "Cloud Platform Service, Hosted technologies, Identity",
      "Small, Medium, Large",
      "AWS, Azure, GCP",
      "Production, Staging, Development"
    ],
    "correctAnswers": [0],
    "explanation": "Categories: Cloud Platform Service, Hosted technologies, Identity."
  },
  {
    "id": 199,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What is a 'Cloud Platform Service (full coverage)'?",
    "type": "single",
    "options": [
      "Any third-party service",
      "On-premises services",
      "User-installed applications",
      "Services offered by providers with detailed API info"
    ],
    "correctAnswers": [3],
    "explanation": "Services offered by cloud providers with detailed API information."
  },
  {
    "id": 200,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What are examples of Cloud Platform Services?",
    "type": "single",
    "options": [
      "MongoDB, NGINX",
      "AWS EC2, Azure App Service",
      "React, npm",
      "Google Chrome"
    ],
    "correctAnswers": [1],
    "explanation": "Examples: AWS EC2, Azure App Service."
  },
  {
    "id": 201,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What is a 'Hosted Technology'?",
    "type": "single",
    "options": [
      "Cloud provider services",
      "Network devices",
      "Software/libraries detected on compute resources",
      "User accounts"
    ],
    "correctAnswers": [2],
    "explanation": "Software/libraries detected on compute resources during scanning."
  },
  {
    "id": 202,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What are the types of Hosted Technologies?",
    "type": "single",
    "options": [
      "Library, Server App, Client App, Virtual Appliance",
      "Only databases",
      "Only web servers",
      "Only operating systems"
    ],
    "correctAnswers": [0],
    "explanation": "Types: Library, Server Application, Client Application, Virtual Appliance."
  },
  {
    "id": 203,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What is a 'Server Application' in technology types?",
    "type": "single",
    "options": [
      "Any installed software",
      "Cloud services only",
      "User desktop apps",
      "Software that exposes services through a network"
    ],
    "correctAnswers": [3],
    "explanation": "Software that exposes services through a network."
  },
  {
    "id": 204,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What are examples of Server Applications?",
    "type": "single",
    "options": [
      "Google Chrome",
      "MongoDB, NGINX",
      "React, npm",
      "AWS EC2"
    ],
    "correctAnswers": [1],
    "explanation": "Examples: MongoDB, NGINX."
  },
  {
    "id": 205,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What is a 'Client Application'?",
    "type": "single",
    "options": [
      "Server software",
      "Cloud services",
      "Software installed on resources that is not server app",
      "Network devices"
    ],
    "correctAnswers": [2],
    "explanation": "Software installed on compute resources that is not a server application."
  },
  {
    "id": 206,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What are examples of Client Applications?",
    "type": "single",
    "options": [
      "CrowdStrike, Splunk Agent, DataDog Agent",
      "MongoDB, NGINX",
      "AWS EC2",
      "React, npm"
    ],
    "correctAnswers": [0],
    "explanation": "Examples: CrowdStrike, Splunk Agent, DataDog Agent, Google Chrome."
  },
  {
    "id": 207,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "How are 'Cloud Services (partial coverage)' detected?",
    "type": "single",
    "options": [
      "Detailed API calls",
      "Manual user input",
      "Network scanning",
      "Generic API calls returning list of services"
    ],
    "correctAnswers": [3],
    "explanation": "Generic API calls that return list of all services in use."
  },
  {
    "id": 208,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What Security Graph object represents partially covered services?",
    "type": "single",
    "options": [
      "Hosted Technology",
      "Cloud Resource",
      "Technology Usage",
      "Service Instance"
    ],
    "correctAnswers": [2],
    "explanation": "Technology Usage object represents partially covered services."
  },
  {
    "id": 209,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "How are Hosted Technologies detected?",
    "type": "single",
    "options": [
      "OS disk analysis during workload scanning",
      "Network scanning",
      "User reports",
      "Cloud provider APIs"
    ],
    "correctAnswers": [0],
    "explanation": "OS disk analysis during workload scanning."
  },
  {
    "id": 210,
    "domain": "Wiz Portal Administration",
    "subtopic": "Identify technologies and cloud services using the Technology Inventory",
    "text": "What is an important limitation of Technology objects on the Security Graph?",
    "type": "single",
    "options": [
      "Deleted immediately",
      "Only show cloud services",
      "Require manual updates",
      "Generic objects added but not removed"
    ],
    "correctAnswers": [3],
    "explanation": "Technology objects added but not removed (shows ever detected)."
  },
  {
    "id": 211,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "What is the primary difference between an Issue and a Finding?",
    "type": "single",
    "options": [
      "Findings for compliance, Issues for vulnerabilities",
      "No difference",
      "Issues are actionable problems, Findings are raw results",
      "Issues more severe"
    ],
    "correctAnswers": [2],
    "explanation": "Issues represent actionable security problems, while Findings are raw detection results."
  },
  {
    "id": 212,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Findings are usually generated by:",
    "type": "single",
    "options": [
      "Automated scans and security controls",
      "User reports",
      "Manual security reviews",
      "Compliance officers"
    ],
    "correctAnswers": [0],
    "explanation": "Automated scans and security controls."
  },
  {
    "id": 213,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Which typically requires immediate remediation?",
    "type": "single",
    "options": [
      "Informational Findings",
      "Archived Issues",
      "All Findings",
      "Critical Issues"
    ],
    "correctAnswers": [3],
    "explanation": "Critical Issues."
  },
  {
    "id": 214,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Which is more likely to have false positives?",
    "type": "single",
    "options": [ "Neither", "Both", "Issues", "Findings" ],
    "correctAnswers": [3],
    "explanation": "Findings."
  },
  {
    "id": 215,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "What determines Issue severity?",
    "type": "single",
    "options": [
      "Cloud provider",
      "Only CVE score",
      "Random assignment",
      "Context including exploitability, exposure, business impact"
    ],
    "correctAnswers": [3],
    "explanation": "Context including exploitability, exposure, and business impact."
  },
  {
    "id": 216,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Issues in cloud security platforms are typically:",
    "type": "single",
    "options": [
      "Generated monthly",
      "Only related to misconfigurations",
      "Raw scan results",
      "Prioritized, contextualized security problems"
    ],
    "correctAnswers": [3],
    "explanation": "Prioritized, contextualized security problems."
  },
  {
    "id": 217,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Which one can have multiple instances across your environment?",
    "type": "single",
    "options": [ "Neither", "Only Issues", "Both Issues and Findings", "Only Findings" ],
    "correctAnswers": [2],
    "explanation": "Both Issues and Findings."
  },
  {
    "id": 218,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Issues are often created from:",
    "type": "single",
    "options": [
      "Vendor notifications",
      "Multiple correlated Findings and context",
      "User complaints",
      "Single Findings"
    ],
    "correctAnswers": [1],
    "explanation": "Multiple correlated Findings and context."
  },
  {
    "id": 219,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Findings typically include:",
    "type": "single",
    "options": [
      "Raw detection data and evidence",
      "Executive summaries",
      "Business impact analysis",
      "Remediation workflows"
    ],
    "correctAnswers": [0],
    "explanation": "Raw detection data and evidence."
  },
  {
    "id": 220,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Which provides better context for risk prioritization?",
    "type": "single",
    "options": [ "Neither", "Raw Findings", "Both same", "Issues with enriched context" ],
    "correctAnswers": [3],
    "explanation": "Issues with enriched context."
  },
  {
    "id": 221,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Which typically has a defined remediation workflow?",
    "type": "single",
    "options": [ "Neither", "Findings", "Both", "Issues" ],
    "correctAnswers": [3],
    "explanation": "Issues."
  },
  {
    "id": 222,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Findings are best described as:",
    "type": "single",
    "options": [ "Compliance violations", "Network logs", "Detection events or observations", "Business risks" ],
    "correctAnswers": [2],
    "explanation": "Detection events or observations."
  },
  {
    "id": 223,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "Which can be suppressed or accepted as risk?",
    "type": "single",
    "options": [ "Both Issues and Findings", "Only Findings", "Neither", "Only Issues" ],
    "correctAnswers": [0],
    "explanation": "Both Issues and Findings."
  },
  {
    "id": 224,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "When investigating a security incident, you should start with:",
    "type": "single",
    "options": [ "User access logs", "Compliance reports", "Findings", "Issues to understand prioritized risks" ],
    "correctAnswers": [3],
    "explanation": "Issues to understand prioritized risks."
  },
  {
    "id": 225,
    "domain": "Wiz Portal Administration",
    "subtopic": "Compare and contrast Issues and Findings when investigating Cloud security risks",
    "text": "The relationship between Issues and Findings is:",
    "type": "single",
    "options": [
      "They are the same",
      "Findings more important",
      "They are independent",
      "Issues aggregate and contextualize Findings"
    ],
    "correctAnswers": [3],
    "explanation": "Issues aggregate and contextualize Findings."
  },

  // ==========================================
  // V. RISK DOMAINS (226-310)
  // ==========================================
  {
    "id": 226,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "External Exposure refers to:",
    "type": "single",
    "options": [
      "Resources accessible from the internet",
      "Employee access",
      "Encryption status",
      "Network segmentation"
    ],
    "correctAnswers": [0],
    "explanation": "External exposure relates to resources reachable from outside the trusted network."
  },
  {
    "id": 227,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which of the following is an example of excessive cloud entitlements?",
    "type": "single",
    "options": [
      "Scoped API keys",
      "MFA enabled",
      "Read-only access",
      "IAM user with AdminAccess needing only S3 read"
    ],
    "correctAnswers": [3],
    "explanation": "AdminAccess is overly broad for minimal S3 read needs."
  },
  {
    "id": 228,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "What is the primary goal of Secure Configuration?",
    "type": "single",
    "options": [
      "Performance increase",
      "Cost reduction",
      "Ensure resources meet security best practices",
      "Enable all features"
    ],
    "correctAnswers": [2],
    "explanation": "Secure configuration ensures systems meet baseline security requirements."
  },
  {
    "id": 229,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Secrets in cloud security include:",
    "type": "single",
    "options": [ "Public docs", "Only passwords", "User emails", "API keys, passwords, certificates" ],
    "correctAnswers": [3],
    "explanation": "Secrets encompass API keys, tokens, and certificates."
  },
  {
    "id": 230,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Vulnerability Management focuses on:",
    "type": "single",
    "options": [ "Identifying/remediating software flaws", "Billing", "Bandwidth", "Training" ],
    "correctAnswers": [0],
    "explanation": "Vulnerability management is finding and fixing software flaws."
  },
  {
    "id": 231,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which scenario represents the highest external exposure risk?",
    "type": "single",
    "options": [ "VM in private subnet", "Internal API", "S3 bucket with public read and sensitive data", "Private database" ],
    "correctAnswers": [2],
    "explanation": "Public sensitive data in S3 is a critical exposure risk."
  },
  {
    "id": 232,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "The principle of least privilege means:",
    "type": "single",
    "options": [ "Remove all permissions", "Minimum permissions necessary", "Same password", "Admin for everyone" ],
    "correctAnswers": [1],
    "explanation": "Least privilege ensures identities only have needed permissions."
  },
  {
    "id": 233,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "A compliance framework like CIS Benchmarks provides:",
    "type": "single",
    "options": [ "Configuration standards", "Tutorials", "Cost tips", "Marketing" ],
    "correctAnswers": [0],
    "explanation": "CIS Benchmarks offer global best practices."
  },
  {
    "id": 234,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "The most dangerous place to store secrets is:",
    "type": "single",
    "options": [ "Secrets service", "Hardcoded in source code", "Encrypted vault", "Environment variables" ],
    "correctAnswers": [1],
    "explanation": "Hardcoded secrets can be easily discovered via code leaks."
  },
  {
    "id": 235,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "A CVE is:",
    "type": "single",
    "options": [ "Compliance framework", "Provider", "Malware type", "Standardized identifier for known vulnerability" ],
    "correctAnswers": [3],
    "explanation": "CVEs provide standard names for known vulnerabilities."
  },
  {
    "id": 236,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Malware detection in cloud should focus on:",
    "type": "single",
    "options": [ "Email only", "Cables", "Workloads, containers, VMs, storage", "Physical servers" ],
    "correctAnswers": [2],
    "explanation": "Cloud malware detection covers compute instances and object storage."
  },
  {
    "id": 237,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which is NOT typically considered an external exposure vector?",
    "type": "single",
    "options": [ "Private subnets", "Public buckets", "Public IPs", "Facing load balancers" ],
    "correctAnswers": [0],
    "explanation": "Private subnets without gateways are isolated from direct internet."
  },
  {
    "id": 238,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Over-privileged service accounts are a risk because:",
    "type": "single",
    "options": [ "Cost", "Compromise grants excessive access", "Storage", "Speed" ],
    "correctAnswers": [1],
    "explanation": "Compromising over-privileged accounts increases the blast radius."
  },
  {
    "id": 239,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which is an example of a secure configuration issue?",
    "type": "single",
    "options": [ "Leaving default credentials", "Latest software", "Encryption enabled", "Segmentation" ],
    "correctAnswers": [0],
    "explanation": "Default vendor credentials are a high-risk flaw."
  },
  {
    "id": 240,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "What is the primary risk of exposed secrets?",
    "type": "single",
    "options": [ "Performance", "Costs", "Experience", "Unauthorized access" ],
    "correctAnswers": [3],
    "explanation": "Exposed secrets give attackers direct keys to access data."
  },
  {
    "id": 241,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which tool is commonly used to reduce external exposure?",
    "type": "single",
    "options": [ "WAF", "Capacity", "Public IPs", "Disable logging" ],
    "correctAnswers": [0],
    "explanation": "Implementing a Web Application Firewall (WAF) reduces exposure."
  },
  {
    "id": 242,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "What is 'privilege creep' in cloud entitlements?",
    "type": "single",
    "options": [ "Performance", "Latency", "Accumulation of unnecessary permissions", "Costs" ],
    "correctAnswers": [2],
    "explanation": "Privilege creep is the accumulation of unnecessary permissions."
  },
  {
    "id": 243,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which compliance framework is specifically designed for payment card data?",
    "type": "single",
    "options": [ "SOC 2", "PCI-DSS", "HIPAA", "GDPR" ],
    "correctAnswers": [1],
    "explanation": "PCI-DSS is for payment data."
  },
  {
    "id": 244,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Secrets rotation refers to:",
    "type": "single",
    "options": [ "Same password", "Deleting", "Sharing", "Periodically changing credentials" ],
    "correctAnswers": [3],
    "explanation": "Periodically changing credentials limits exposure window."
  },
  {
    "id": 245,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "What does CVSS stand for in vulnerability management?",
    "type": "single",
    "options": [ "Common Vulnerability Scoring System", "Safety Score", "Security System", "Virus Standard" ],
    "correctAnswers": [0],
    "explanation": "Common Vulnerability Scoring System."
  },
  {
    "id": 246,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Cryptomining malware in cloud environments typically:",
    "type": "single",
    "options": [ "Enhances security", "Consumes CPU to mine", "Reduces costs", "Improves performance" ],
    "correctAnswers": [1],
    "explanation": "Consumes excessive CPU resources to mine cryptocurrency."
  },
  {
    "id": 247,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "An 'internet-facing' resource means:",
    "type": "single",
    "options": [ "Storage use", "Data center", "Accessible from public internet", "Private IP only" ],
    "correctAnswers": [2],
    "explanation": "Accessible from the public internet."
  },
  {
    "id": 248,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "RBAC helps manage cloud entitlements by:",
    "type": "single",
    "options": [ "Encryption", "Assigning based on function/role", "Removing controls", "Same permissions" ],
    "correctAnswers": [1],
    "explanation": "Assigning permissions based on job functions and roles."
  },
  {
    "id": 249,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "A security baseline in secure configuration is:",
    "type": "single",
    "options": [ "Backup", "Price model", "Cable", "Minimum acceptable settings" ],
    "correctAnswers": [3],
    "explanation": "The minimum acceptable security settings for systems."
  },
  {
    "id": 250,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which is the MOST secure way to handle secrets in CI/CD pipelines?",
    "type": "single",
    "options": [ "Git repos", "Slack", "Secrets manager with dynamic injection", "Plain text" ],
    "correctAnswers": [2],
    "explanation": "Use a secrets manager with dynamic injection."
  },
  {
    "id": 251,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Zero-day vulnerabilities are particularly dangerous because:",
    "type": "single",
    "options": [ "No patch available when discovered", "Cost nothing", "Easy to detect", "Only old systems" ],
    "correctAnswers": [0],
    "explanation": "No patch or fix is available when they're discovered."
  },
  {
    "id": 252,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Fileless malware is challenging to detect because it:",
    "type": "single",
    "options": [ "Only files", "Encrypted", "Doesn't exist", "Operates in memory" ],
    "correctAnswers": [3],
    "explanation": "Operates in memory without writing to disk."
  },
  {
    "id": 253,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "What is a security group in cloud networking?",
    "type": "single",
    "options": [ "Virtual firewall", "Malware", "Compliance cert", "Team" ],
    "correctAnswers": [0],
    "explanation": "A virtual firewall controlling inbound and outbound traffic."
  },
  {
    "id": 254,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Just-In-Time (JIT) access for cloud entitlements means:",
    "type": "single",
    "options": [ "Slow", "Permanent", "Temporary elevated granted only when needed", "No control" ],
    "correctAnswers": [2],
    "explanation": "Temporary elevated permissions granted only when needed."
  },
  {
    "id": 255,
    "domain": "Risk Domains",
    "subtopic": "Define Risk Domains",
    "text": "Which vulnerability severity should be prioritized first?",
    "type": "single",
    "options": [ "Medium isolated", "Critical on internet-facing prod", "Low no exploit", "Informational" ],
    "correctAnswers": [1],
    "explanation": "Critical severity on an internet-facing production system."
  },
  {
    "id": 256,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Your security team discovers an RDS database with a public IP address. Which capability should you use first?",
    "type": "single",
    "options": [ "Malware", "External Exposure", "Secrets", "Cloud Entitlements" ],
    "correctAnswers": [1],
    "explanation": "External Exposure identifies resources accessible from the internet."
  },
  {
    "id": 257,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A developer's IAM user has full admin access but only deploys Lambda functions. Which capability addresses this?",
    "type": "single",
    "options": [ "Vuln Management", "Secure Config", "Cloud Entitlements", "External Exposure" ],
    "correctAnswers": [2],
    "explanation": "Cloud Entitlements identifies over-privileged accounts."
  },
  {
    "id": 258,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Your audit shows S3 buckets without encryption enabled. Which capability should you leverage?",
    "type": "single",
    "options": [ "Malware", "Entitlements", "Secure Configuration and Compliance", "Secrets" ],
    "correctAnswers": [2],
    "explanation": "Secure Configuration and Compliance detects misconfigurations."
  },
  {
    "id": 259,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You found API keys hardcoded in a GitHub repository. Which capability is most relevant?",
    "type": "single",
    "options": [ "Secrets", "Exposure", "Vuln Management", "Malware" ],
    "correctAnswers": [0],
    "explanation": "Secrets scanning detects credentials in code."
  },
  {
    "id": 260,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A critical CVE was announced affecting your container images. Which capability should you use?",
    "type": "single",
    "options": [ "Entitlements", "Secrets", "Vulnerability Management", "Config" ],
    "correctAnswers": [2],
    "explanation": "Vulnerability Management identifies known software vulnerabilities."
  },
  {
    "id": 261,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A VM is exhibiting unusual CPU spikes and making outbound connections to unknown IPs. Which capability should you investigate with?",
    "type": "single",
    "options": [ "Exposure", "Entitlements", "Secrets", "Malware" ],
    "correctAnswers": [3],
    "explanation": "Malware detection identifies malicious activity like cryptomining."
  },
  {
    "id": 262,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You need to identify all resources accessible from the internet. Which capability provides this visibility?",
    "type": "single",
    "options": [ "Vuln Management", "External Exposure", "Secrets", "Entitlements" ],
    "correctAnswers": [1],
    "explanation": "External Exposure maps network paths to find open resources."
  },
  {
    "id": 263,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A service account hasn't been used in 90 days but still has active permissions. Which capability helps identify this?",
    "type": "single",
    "options": [ "Malware", "Secrets", "Cloud Entitlements", "Exposure" ],
    "correctAnswers": [2],
    "explanation": "Cloud Entitlements (CIEM) tracks effective and unused access."
  },
  {
    "id": 264,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Your organization needs to meet SOC 2 compliance requirements. Which capability should you prioritize?",
    "type": "single",
    "options": [ "Secure Configuration and Compliance", "Malware", "Exposure", "Secrets" ],
    "correctAnswers": [0],
    "explanation": "Secure Configuration maps environment against frameworks."
  },
  {
    "id": 265,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You discovered a password stored in an environment variable in plaintext. Which capability addresses this?",
    "type": "single",
    "options": [ "Entitlements", "Vuln Management", "Secrets", "Malware" ],
    "correctAnswers": [2],
    "explanation": "Secrets capabilities detect exposed plaintext passwords."
  },
  {
    "id": 266,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "An application has unpatched Log4j vulnerability in production. Which capability should you use?",
    "type": "single",
    "options": [ "Exposure", "Secrets", "Entitlements", "Vulnerability Management" ],
    "correctAnswers": [3],
    "explanation": "Vulnerability Management identifies software flaws like Log4j."
  },
  {
    "id": 267,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A container image from Docker Hub contains a known backdoor. Which capability detects this?",
    "type": "single",
    "options": [ "Config", "Malware", "Entitlements", "Exposure" ],
    "correctAnswers": [1],
    "explanation": "Malware scanning detects backdoors and payloads."
  },
  {
    "id": 268,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You need to find all load balancers exposed to the internet. Which capability should you query?",
    "type": "single",
    "options": [ "Secrets", "Malware", "External Exposure", "Vuln Management" ],
    "correctAnswers": [2],
    "explanation": "External Exposure helps query internet-facing entry points."
  },
  {
    "id": 269,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "An employee left the company but their cloud access wasn't revoked. Which capability helps manage this?",
    "type": "single",
    "options": [ "Malware", "Cloud Entitlements", "Secrets", "Config" ],
    "correctAnswers": [1],
    "explanation": "Cloud Entitlements manages identity lifecycles."
  },
  {
    "id": 270,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Security groups allow SSH (port 22) from 0.0.0.0/0. Which TWO capabilities are most relevant?",
    "type": "single",
    "options": [
      "External Exposure and Secure Configuration and Compliance",
      "Malware and Secrets",
      "Vuln and Entitlements",
      "Secrets and Malware"
    ],
    "correctAnswers": [0],
    "explanation": "It's a configuration violation and creates a public path."
  },
  {
    "id": 271,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You need to rotate all database credentials older than 90 days. Which capability should you use?",
    "type": "single",
    "options": [ "Exposure", "Vuln", "Secrets", "Entitlements" ],
    "correctAnswers": [2],
    "explanation": "Secrets capabilities track age and rotation status."
  },
  {
    "id": 272,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A third-party library in your application has a known RCE vulnerability. Which capability identifies this?",
    "type": "single",
    "options": [ "Entitlements", "Vulnerability Management", "Malware", "Exposure" ],
    "correctAnswers": [1],
    "explanation": "Vulnerability Management scans dependencies for flaws."
  },
  {
    "id": 273,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Suspicious cryptocurrency mining activity detected on EC2 instances. Which capability should investigate?",
    "type": "single",
    "options": [ "Secrets", "Entitlements", "Malware", "Config" ],
    "correctAnswers": [2],
    "explanation": "Malware detection looks for cryptominer signatures."
  },
  {
    "id": 274,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You need to ensure all EC2 instances have IMDSv2 enabled. Which capability checks this?",
    "type": "single",
    "options": [ "Malware", "Secure Configuration and Compliance", "Exposure", "Secrets" ],
    "correctAnswers": [1],
    "explanation": "Secure Configuration checks resource settings against best practice."
  },
  {
    "id": 275,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A user has permissions to delete production databases but never uses them. Which capability identifies over-privileged access?",
    "type": "single",
    "options": [ "Vuln", "Secrets", "Cloud Entitlements", "Malware" ],
    "correctAnswers": [2],
    "explanation": "Cloud Entitlements detects gap between granted and used."
  },
  {
    "id": 276,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "An S3 bucket is publicly readable and contains customer data. Which capability should you prioritize?",
    "type": "single",
    "options": [ "Vuln", "Entitlements", "External Exposure", "Secrets" ],
    "correctAnswers": [2],
    "explanation": "External Exposure flags inadvertently made public buckets."
  },
  {
    "id": 277,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Private keys are stored in a public Git repository. Which capability addresses this risk?",
    "type": "single",
    "options": [ "Malware", "Secrets", "Config", "Entitlements" ],
    "correctAnswers": [1],
    "explanation": "Secrets scanning detects keys leaked into source control."
  },
  {
    "id": 278,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You need to assess if your infrastructure meets CIS AWS Foundations Benchmark. Which capability should you use?",
    "type": "single",
    "options": [ "Exposure", "Malware", "Secure Configuration and Compliance", "Vuln" ],
    "correctAnswers": [2],
    "explanation": "Secure Configuration measures against frameworks like CIS."
  },
  {
    "id": 279,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A container image with known exploits is running. Which capability helps prioritize remediation?",
    "type": "single",
    "options": [ "Secrets", "Entitlements", "Vulnerability Management", "Exposure" ],
    "correctAnswers": [2],
    "explanation": "Vulnerability Management contextualizes exploit risk."
  },
  {
    "id": 280,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Ransomware was detected in a file uploaded to S3. Which capability should alert on this?",
    "type": "single",
    "options": [ "Entitlements", "Malware", "Secrets", "Vuln" ],
    "correctAnswers": [1],
    "explanation": "Malware scanning identifies malicious files like ransomware."
  },
  {
    "id": 281,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "You need to identify which resources are reachable through network paths. Which capability provides this?",
    "type": "single",
    "options": [ "Malware", "Secrets", "External Exposure", "Entitlements" ],
    "correctAnswers": [2],
    "explanation": "External Exposure maps internet reachability."
  },
  {
    "id": 282,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "Cross-account IAM roles have overly permissive trust policies. Which capability helps identify this?",
    "type": "single",
    "options": [ "Vuln", "Cloud Entitlements", "Malware", "Secrets" ],
    "correctAnswers": [1],
    "explanation": "Cloud Entitlements analyzes complex trust policies."
  },
  {
    "id": 283,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "MFA is not enforced for privileged users. Which capability flags this issue?",
    "type": "single",
    "options": [ "Exposure", "Secrets", "Secure Configuration and Compliance", "Malware" ],
    "correctAnswers": [2],
    "explanation": "Secure Configuration checks settings against MFA rules."
  },
  {
    "id": 284,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "OAuth tokens are expiring but not being rotated. Which capability manages this?",
    "type": "single",
    "options": [ "Entitlements", "Secrets", "Vuln", "Exposure" ],
    "correctAnswers": [1],
    "explanation": "Secrets capabilities monitor token lifecycles."
  },
  {
    "id": 285,
    "domain": "Risk Domains",
    "subtopic": "Capability Scenarios",
    "text": "A zero-day exploit is active against your servers. Which TWO capabilities are most critical?",
    "type": "single",
    "options": [
      "Vulnerability Management and External Exposure",
      "Secrets and Entitlements",
      "Malware and Config",
      "Entitlements and Secrets"
    ],
    "correctAnswers": [0],
    "explanation": "Exposure tells you reachability; Vuln identifies unpatched software."
  },

  // ==========================================
  // VI. POLICIES & CONFIGURATION RULES (286-350)
  // ==========================================
  {
    "id": 286,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "What is the primary purpose of Cloud Configuration Rules?",
    "type": "single",
    "options": [
      "To identify risky misconfigurations in cloud resources",
      "To monitor network traffic",
      "To manage user access",
      "To optimize cloud costs"
    ],
    "correctAnswers": [0],
    "explanation": "To identify risky misconfigurations in cloud resources."
  },
  {
    "id": 287,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "Cloud Configuration Rules in Wiz use which query language?",
    "type": "single",
    "options": [ "SQL", "JavaScript", "Python", "Rego" ],
    "correctAnswers": [3],
    "explanation": "Rego."
  },
  {
    "id": 288,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "What are the two main types of Cloud Configuration Rules?",
    "type": "single",
    "options": [ "Active and Passive", "Critical and Low", "Built-in and Custom", "Cloud and On-premise" ],
    "correctAnswers": [2],
    "explanation": "Built-in and Custom."
  },
  {
    "id": 289,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "Which mandatory variable must appear at the beginning of every custom Cloud Configuration Rule?",
    "type": "single",
    "options": [ "package wiz", "import wiz", "module wiz", "define wiz" ],
    "correctAnswers": [0],
    "explanation": "package wiz."
  },
  {
    "id": 290,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "What does a Cloud Configuration Rule generate when it detects a misconfiguration?",
    "type": "single",
    "options": [ "Alerts", "Incident reports", "Billing notifications", "Cloud Configuration Findings" ],
    "correctAnswers": [3],
    "explanation": "Cloud Configuration Findings."
  },
  {
    "id": 291,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "The default result variable in a Cloud Configuration Rule controls:",
    "type": "single",
    "options": [ "Cloud provider", "The status of the Rule (pass/fail)", "Execution speed", "Resource type" ],
    "correctAnswers": [1],
    "explanation": "The status of the Rule (pass/fail)."
  },
  {
    "id": 292,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "Which of the following is a recommended practice when writing Cloud Configuration Rules?",
    "type": "single",
    "options": [
      "Write complex Rules",
      "Combine multiple requirements",
      "Write atomic Rules checking one requirement",
      "Avoid pre-defined functions"
    ],
    "correctAnswers": [2],
    "explanation": "Write atomic Rules that check one security requirement."
  },
  {
    "id": 293,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "What are the three types of matchers available for Cloud Configuration Rules?",
    "type": "single",
    "options": [ "Cloud, IaC, Admission Controller", "Fast, Medium, Slow", "Critical, High, Medium", "AWS, Azure, GCP" ],
    "correctAnswers": [0],
    "explanation": "Cloud, IaC, Admission Controller."
  },
  {
    "id": 294,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "A Cloud matcher evaluates:",
    "type": "single",
    "options": [ "Source code repos", "Raw JSON associated with cloud resources", "Network packets", "User behavior" ],
    "correctAnswers": [1],
    "explanation": "The raw JSON associated with cloud resources."
  },
  {
    "id": 295,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "How long does it typically take for a new Cloud Configuration Rule to assess your environment?",
    "type": "single",
    "options": [ "Immediately", "1 hour", "7 days", "Up to 48 hours" ],
    "correctAnswers": [3],
    "explanation": "Up to 48 hours."
  },
  {
    "id": 296,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "Which optional variables provide additional context in Cloud Configuration Findings?",
    "type": "single",
    "options": [ "currentConfiguration and expectedConfiguration", "input/output", "start/end", "severity/priority" ],
    "correctAnswers": [0],
    "explanation": "currentConfiguration and expectedConfiguration."
  },
  {
    "id": 297,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "An IaC matcher evaluates:",
    "type": "single",
    "options": [ "Running resources", "Permissions", "IaC files during directory scans", "Network" ],
    "correctAnswers": [2],
    "explanation": "Infrastructure as Code files during directory scans."
  },
  {
    "id": 298,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "What happens if you don't include mandatory variables package wiz and default result?",
    "type": "single",
    "options": [ "Warnings", "The Rule will fail every time", "Runs slower", "Works only on AWS" ],
    "correctAnswers": [1],
    "explanation": "The Rule will fail every time."
  },
  {
    "id": 299,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "By default, Cloud Configuration Rules generate:",
    "type": "single",
    "options": [ "Alerts", "Both", "Issues", "Cloud Configuration Findings only" ],
    "correctAnswers": [3],
    "explanation": "Cloud Configuration Findings only."
  },
  {
    "id": 300,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Cloud Configuration Rules",
    "text": "Which feature allows you to leverage AI to create Rego code for cloud matchers?",
    "type": "single",
    "options": [ "Suggestions", "Templates", "AI Policies", "Auto-complete" ],
    "correctAnswers": [2],
    "explanation": "AI Policies (when enabled)."
  },
  {
    "id": 301,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "Where do you navigate to create a custom Cloud Configuration Rule?",
    "type": "single",
    "options": [ "Policies > Cloud Configuration Rules", "Settings", "Dashboard", "Resources" ],
    "correctAnswers": [0],
    "explanation": "Policies > Cloud Configuration Rules."
  },
  {
    "id": 302,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "Which field determines how the Finding appears throughout Wiz?",
    "type": "single",
    "options": [ "Tags", "Rule Name", "Severity", "Description" ],
    "correctAnswers": [1],
    "explanation": "Rule Name."
  },
  {
    "id": 303,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "What is the maximum number of tags you can add to a Cloud Configuration Rule?",
    "type": "single",
    "options": [ "5", "Unlimited", "10", "15" ],
    "correctAnswers": [2],
    "explanation": "10."
  },
  {
    "id": 304,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "When configuring a Cloud matcher, you can search for resources by:",
    "type": "single",
    "options": [ "Type only", "IP only", "Generic only", "Both native type and generic name" ],
    "correctAnswers": [3],
    "explanation": "Both native type and generic name."
  },
  {
    "id": 305,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "The 'Subscription Scope' option allows you to:",
    "type": "single",
    "options": [ "Limit Rule's scope to specific subscriptions", "Subscribe", "Set priority", "Change billing" ],
    "correctAnswers": [0],
    "explanation": "Limit the Rule's scope to specific subscriptions."
  },
  {
    "id": 306,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "In the Cloud Configuration Rule editor, what does clicking 'Run Test' do?",
    "type": "single",
    "options": [ "Email", "Deploy", "Simulate code on Test Data", "Delete" ],
    "correctAnswers": [2],
    "explanation": "Simulates the code evaluation on the specified Test Data."
  },
  {
    "id": 307,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "Which pane in the Cloud Configuration Rule editor shows the input JSON for testing?",
    "type": "single",
    "options": [ "Rule", "Test Data", "Config", "Results" ],
    "correctAnswers": [1],
    "explanation": "Test Data pane."
  },
  {
    "id": 308,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "When testing a Cloud matcher, clicking 'Shuffle test data' will:",
    "type": "single",
    "options": [ "Delete", "Export", "Encrypt", "Select a new test JSON at random" ],
    "correctAnswers": [3],
    "explanation": "Select a new test JSON at random."
  },
  {
    "id": 309,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "For Admission Controller matchers, which operation is applied by default?",
    "type": "single",
    "options": [ "Create", "Delete", "Connect", "Update" ],
    "correctAnswers": [0],
    "explanation": "Create."
  },
  {
    "id": 310,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "What keyboard shortcut allows you to search within the JSON in the Test Data pane?",
    "type": "single",
    "options": [ "Ctrl+S", "Ctrl+F", "Ctrl+G", "Ctrl+H" ],
    "correctAnswers": [1],
    "explanation": "Ctrl+F."
  },
  {
    "id": 311,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "To duplicate a built-in Cloud Configuration Rule, you should:",
    "type": "single",
    "options": [ "Copy code", "Create from scratch", "Use duplicate function", "Import/Export" ],
    "correctAnswers": [2],
    "explanation": "Use the duplicate function on an existing built-in Rule."
  },
  {
    "id": 312,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "The 'Connect' operation for Admission Controller applies when:",
    "type": "single",
    "options": [ "Creating pod", "Updating deployment", "Deleting", "Users try to attach or apply port forwarding" ],
    "correctAnswers": [3],
    "explanation": "Users try to attach to a running container or apply port forwarding."
  },
  {
    "id": 313,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "The 'Generate Issues' option in Cloud Configuration Rules:",
    "type": "single",
    "options": [ "Critical only", "Creates one Issue for every new Finding", "Is enabled by default", "Needs approval" ],
    "correctAnswers": [1],
    "explanation": "Creates one Issue for every new Cloud Configuration Finding."
  },
  {
    "id": 314,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "In the Test Results pane, what does the 'Use as test input' option do?",
    "type": "single",
    "options": [ "Delete", "Create", "Copies resource's JSON to Test Data pane", "Export" ],
    "correctAnswers": [2],
    "explanation": "Copies the resource's raw JSON to the Test Data pane."
  },
  {
    "id": 315,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Cloud Configuration Rules",
    "text": "When should you enable 'Generate Issues' for a Cloud Configuration Rule?",
    "type": "single",
    "options": [ "Carefully", "Always", "Low severity only", "Never" ],
    "correctAnswers": [0],
    "explanation": "Carefully, as many Rules generate hundreds of Findings."
  },
  {
    "id": 316,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What is the primary purpose of Host Configuration Rules?",
    "type": "single",
    "options": [
      "Optimize costs",
      "Monitor traffic",
      "Monitor hosted apps and OS for adherence to guidelines",
      "Permissions"
    ],
    "correctAnswers": [2],
    "explanation": "To monitor virtual machine's hosted apps and operating systems."
  },
  {
    "id": 317,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "Host Configuration Rules in Wiz are based on which language?",
    "type": "single",
    "options": [ "JavaScript", "OVAL", "Python", "Rego" ],
    "correctAnswers": [1],
    "explanation": "OVAL (Open Vulnerability and Assessment Language)."
  },
  {
    "id": 318,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What does 'Direct OVAL' refer to in Wiz?",
    "type": "single",
    "options": [ "VM type", "Service", "Framework", "Wiz abstraction that simplifies OVAL's structure" ],
    "correctAnswers": [3],
    "explanation": "A Wiz abstraction that simplifies OVAL's structure."
  },
  {
    "id": 319,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "When a virtual machine fails a Host Configuration Rule, what is created?",
    "type": "single",
    "options": [ "A Configuration Finding", "Snapshot", "Billing", "Email" ],
    "correctAnswers": [0],
    "explanation": "A Configuration Finding."
  },
  {
    "id": 320,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "Host Configuration Rules are aligned with which official organization's checks?",
    "type": "single",
    "options": [ "ISO", "OWASP", "NIST", "CIS" ],
    "correctAnswers": [3],
    "explanation": "CIS (Center for Internet Security)."
  },
  {
    "id": 321,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What are the main components of an OVAL Definition?",
    "type": "single",
    "options": [ "User/Role", "Input/Output", "OVAL Object, State, Test, Criterion", "Protocol/Port" ],
    "correctAnswers": [2],
    "explanation": "OVAL Object, OVAL State, OVAL Test, OVAL Criterion."
  },
  {
    "id": 322,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "By default, are Host Configuration Rules enabled or disabled?",
    "type": "single",
    "options": [ "Disabled", "Severity based", "Partially", "Enabled" ],
    "correctAnswers": [0],
    "explanation": "Disabled."
  },
  {
    "id": 323,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What is the maximum number of custom Host Configuration Rules allowed per tenant?",
    "type": "single",
    "options": [ "100", "Unlimited", "500", "1,000" ],
    "correctAnswers": [3],
    "explanation": "1,000."
  },
  {
    "id": 324,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "An OVAL Object specifies:",
    "type": "single",
    "options": [ "Provider", "Cost", "What to check on the endpoint", "Permissions" ],
    "correctAnswers": [2],
    "explanation": "What to check on the endpoint being evaluated."
  },
  {
    "id": 325,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "An OVAL State specifies:",
    "type": "single",
    "options": [ "What's expected concerning info found on endpoint", "Network", "Billing", "Location" ],
    "correctAnswers": [0],
    "explanation": "What's expected in terms of the information found concerning the endpoint."
  },
  {
    "id": 326,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What is the timeout limit for the host engine running a Rule?",
    "type": "single",
    "options": [ "10 min", "1 min", "30 min", "5 min" ],
    "correctAnswers": [3],
    "explanation": "5 minutes."
  },
  {
    "id": 327,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "Which license is required for custom Host Configuration Rules?",
    "type": "single",
    "options": [ "None", "Any", "Advanced", "Basic" ],
    "correctAnswers": [2],
    "explanation": "Wiz Cloud/Wiz for Gov Advanced."
  },
  {
    "id": 328,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What methodology should you follow when writing Host Rules?",
    "type": "single",
    "options": [ "Combine", "Write atomic Rules checking one requirement", "Copy", "Complex" ],
    "correctAnswers": [1],
    "explanation": "Write atomic Rules checking one security requirement."
  },
  {
    "id": 329,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "The Workload Scanner in Wiz can check:",
    "type": "single",
    "options": [ "Network only", "Behavior", "Runtime only", "The static image OS disk" ],
    "correctAnswers": [3],
    "explanation": "The static image OS disk."
  },
  {
    "id": 330,
    "domain": "Wiz Portal Administration",
    "subtopic": "Define Host Configuration Rules",
    "text": "What are the two opposite methods for Rule evaluation?",
    "type": "single",
    "options": [ "Search for secure resources OR misconfigured", "Manual/Auto", "Fast/Slow", "Local/Remote" ],
    "correctAnswers": [0],
    "explanation": "Search for secure resources OR search for misconfigured resources."
  },
  {
    "id": 331,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "Where do you navigate to create a custom Host Configuration Rule?",
    "type": "single",
    "options": [ "Dashboard", "Settings", "Resources", "Policies > Host Configuration Rules" ],
    "correctAnswers": [3],
    "explanation": "Policies > Host Configuration Rules."
  },
  {
    "id": 332,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "Which of the following is NOT a required field for Host Rules?",
    "type": "single",
    "options": [ "All required", "Description", "Target Platform", "Name" ],
    "correctAnswers": [1],
    "explanation": "Description."
  },
  {
    "id": 333,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "What is the maximum file size that can be checked in a File Content test?",
    "type": "single",
    "options": [ "1 GB", "5 GB", "0.5 GB", "0.1 GB" ],
    "correctAnswers": [2],
    "explanation": "0.5 GB."
  },
  {
    "id": 334,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "In the Host Configuration Rule editor, what format is used?",
    "type": "single",
    "options": [ "YAML", "Plain text", "JSON", "Direct OVAL (XML-based)" ],
    "correctAnswers": [3],
    "explanation": "Direct OVAL (XML-based)."
  },
  {
    "id": 335,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "Which fields can be updated for built-in Host Configuration Rules?",
    "type": "single",
    "options": [ "Enabled, categories, severity", "Name only", "All", "OVAL code only" ],
    "correctAnswers": [0],
    "explanation": "Enabled, security_sub_categories, and severity."
  },
  {
    "id": 336,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "To edit a built-in Host Configuration Rule's OVAL code, you must first:",
    "type": "single",
    "options": [ "Duplicate the Rule", "Export", "Delete original", "Contact support" ],
    "correctAnswers": [0],
    "explanation": "Duplicate the Rule."
  },
  {
    "id": 337,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "What is the maximum number of results for a File Metadata test?",
    "type": "single",
    "options": [ "500", "5,000", "100", "1,000" ],
    "correctAnswers": [3],
    "explanation": "1,000."
  },
  {
    "id": 338,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "When configuring target platforms, you can select:",
    "type": "single",
    "options": [ "OS and technologies", "Windows only", "Linux only", "Images only" ],
    "correctAnswers": [0],
    "explanation": "Operating systems (e.g., Windows, Ubuntu, RedHat) and technologies (e.g., Nginx, Jenkins)."
  },
  {
    "id": 339,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "How long does it typically take to review Host Rule results?",
    "type": "single",
    "options": [ "7 days", "Immediately", "24 hours or full cycle", "1 hour" ],
    "correctAnswers": [2],
    "explanation": "24 hours or a full workload scan cycle."
  },
  {
    "id": 340,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "Files under which pseudo-file systems cannot be assessed by File Content tests?",
    "type": "single",
    "options": [ "/usr and /bin", "/home", "/proc and /dev", "/etc" ],
    "correctAnswers": [2],
    "explanation": "/proc and /dev."
  },
  {
    "id": 341,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "What happens when a Host Rule violates engine limitations?",
    "type": "single",
    "options": [ "Email", "Deleted", "Runs slower", "Error result returned" ],
    "correctAnswers": [3],
    "explanation": "An Error result is returned."
  },
  {
    "id": 342,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "The Partition test calculates mount points based on:",
    "type": "single",
    "options": [ "Permissions", "Runtime", "Network", "The fstab file" ],
    "correctAnswers": [3],
    "explanation": "The fstab file."
  },
  {
    "id": 343,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "For high and critical severity Rules, where are failed evaluations recorded?",
    "type": "single",
    "options": [ "Security Graph and Findings page", "Email only", "Logs only", "Findings only" ],
    "correctAnswers": [0],
    "explanation": "On the Security Graph and the Host Configuration Findings page."
  },
  {
    "id": 344,
    "domain": "Wiz Portal Administration",
    "subtopic": "Configure Host Configuration Rules",
    "text": "The Sysctl test calculates kernel parameters based on:",
    "type": "single",
    "options": [ "Sysctl configuration files", "Input", "Actual runtime", "Network" ],
    "correctAnswers": [0],
    "explanation": "Sysctl configuration files."
  },
  {
    "id": 345,
    "domain": "Wiz Portal Administration",
    "subtopic": "Summarize options for detection rules improvements/fine-tuning",
    "text": "Which of the following is a valid method to fine-tune detection rules?",
    "type": "single",
    "options": [ "Bandwidth", "Passwords", "Adjusting severity levels", "Billing" ],
    "correctAnswers": [2],
    "explanation": "Adjusting severity levels."
  },
  {
    "id": 346,
    "domain": "Wiz Portal Administration",
    "subtopic": "Summarize options for detection rules improvements/fine-tuning",
    "text": "To reduce noise from a rule without deleting it, you should:",
    "type": "single",
    "options": [ "Increase severity", "Delete", "Remove resources", "Disable the rule" ],
    "correctAnswers": [3],
    "explanation": "Disable the rule."
  },
  {
    "id": 347,
    "domain": "Wiz Portal Administration",
    "subtopic": "Summarize options for detection rules improvements/fine-tuning",
    "text": "To create a customized version of a built-in Cloud Rule, you should:",
    "type": "single",
    "options": [ "Duplicate the built-in rule and edit it", "Delete", "Contact support", "Export" ],
    "correctAnswers": [0],
    "explanation": "Duplicate the built-in rule and edit it."
  },
  {
    "id": 348,
    "domain": "Wiz Portal Administration",
    "subtopic": "Summarize options for detection rules improvements/fine-tuning",
    "text": "Which metadata can be edited for built-in Cloud Configuration Rules?",
    "type": "single",
    "options": [ "Only Rego", "Name, description, severity, remediation, tags", "Only name", "Nothing" ],
    "correctAnswers": [1],
    "explanation": "Rule name, description, severity, remediation steps, and tags."
  },
  {
    "id": 349,
    "domain": "Wiz Portal Administration",
    "subtopic": "Summarize options for detection rules improvements/fine-tuning",
    "text": "Project scoping for rules allows you to:",
    "type": "single",
    "options": [ "Delete", "Cost increase", "Limit rule's application to specific Projects", "Merge" ],
    "correctAnswers": [2],
    "explanation": "Limit the rule's application to specific Wiz Projects (RBAC)."
  },
  {
    "id": 350,
    "domain": "Wiz Portal Administration",
    "subtopic": "Summarize options for detection rules improvements/fine-tuning",
    "text": "What happens when a Software Management Rule generates more than 200,000 Findings?",
    "type": "single",
    "options": [ "Runs normally", "Deletes old", "Email", "Automatically disabled" ],
    "correctAnswers": [3],
    "explanation": "It is automatically disabled to protect platform performance."
  }
];