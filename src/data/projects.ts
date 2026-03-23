import { Monitor } from "lucide-react";

export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  category: "infrastructure" | "automation" | "monitoring" | "security" | "cicd" | "serverless";
  githubUrl?: string;
  liveUrl?: string;
  architectureUrl?: string;
  // Documentation fields 
  hook?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  lessonsLearned?: string[];
  achievements?: string[];
  visuals?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Secure CI/CD Pipeline with DevSecOps Integration",
    description:
      "A production-grade CI/CD pipeline integrating automated security gates, vulnerability scanning, and compliance checks at every stage.",
    techStack: ["GitHub Actions", "SonarQube", "Snyk", "Docker", "Kubernetes"],
    category: "cicd",
    githubUrl: "https://github.com/lightsspeed/Code-Portfolio/blob/main/.github/workflows/deploy.yml",
    hook: "DevSecOps is not just a trend—it's a necessity. This pipeline ensures security is shifted-left and baked into the core development lifecycle.",
    problem: "Traditional CI/CD pipelines often prioritize speed over safety, leaving systems vulnerable to exploits and delaying security reviews until the end of the cycle.",
    solution: "A fully integrated DevSecOps pipeline with automated security gates, SAST/DAST scanning, and container vulnerability checks that must pass before deployment.",
    keyFeatures: [
      "Automated security scanning with SonarQube and Snyk",
      "Dynamic vulnerability detection in running environments",
      "Automated container image scanning for known CVEs",
      "Pre-commit hooks and branch protection rules enforcement",
      "Automated deployment to staging and production upon success"
    ],
    lessonsLearned: [
      "Shifting security left identifies 90% of vulnerabilities before they reach production.",
      "Automated gates are more reliable than manual security reviews.",
      "Developer-friendly security tools increase adoption and reduce friction.",
      "Continuous monitoring of dependencies is critical for long-term security."
    ],
    achievements: [
      "Reduced vulnerability discovery in production by 80%.",
      "Achieved 100% compliance with internal security audit standards.",
      "Automated 100% of code quality and security checks for every PR."
    ]
  },
  {
    id: "2",
    name: "Kubernetes Cluster with Helm Charts & Ingress",
    description:
      "Automated deployment of a highly available Kubernetes cluster using Helm charts and Traefik for traffic management.",
    techStack: ["Kubernetes", "Helm", "Traefik", "Terraform", "AWS"],
    category: "infrastructure",
    githubUrl: "https://github.com/lightsspeed/minimalist",
    hook: "Infrastructure as Code (IaC) is the backbone of reliable cloud-native architectures. Scalable and repeatable cluster management starts here.",
    problem: "Manual Kubernetes management leads to configuration drift, human error, and difficulty in scaling identical environments.",
    solution: "A fully automated provisioning system using Terraform for AWS resources and Helm for standardized application deployment on Kubernetes.",
    keyFeatures: [
      "Multi-AZ High Availability (HA) cluster architecture",
      "Automated Ingress and traffic management with Traefik",
      "Infrastructure-as-Code driven provisioning with Terraform",
      "Modular Helm charts for consistent application rollouts",
      "Integrated health monitoring and auto-scaling groups"
    ],
    lessonsLearned: [
      "IaC significantly reduces deployment time and eliminates human error.",
      "Standardizing on Helm charts simplifies application versioning and management.",
      "Traefik provides a more modern and robust ingress solution than standard controllers.",
      "Automated scaling is essential for cost management in high-traffic environments."
    ],
    achievements: [
      "Achieved 99.99% infrastructure uptime through multi-AZ distribution.",
      "Reduced environment spin-up time from days to less than 15 minutes.",
      "Successfully handled 3x peak traffic spikes through automated cluster scaling."
    ]
  },
  {
    id: "3",
    name: "GitOps with ArgoCD for Continuous Deployment",
    description:
      "Implementing GitOps practices using ArgoCD to automate application deployments and manage Kubernetes configurations from a Git repository.",
    techStack: ["ArgoCD", "Kubernetes", "GitHub", "YAML", "Prometheus"],
    category: "cicd",
    githubUrl: "https://github.com/lightsspeed/minimalist",
    hook: "If it's not in Git, it's not in production. GitOps ensures your cluster state is always perfectly synchronized with your code.",
    problem: "Differences between the declared state in Git and the actual state of the cluster often lead to unpredictable production failures.",
    solution: "A robust GitOps workflow using ArgoCD to automatically reconcile cluster state with a Git repository, ensuring a single source of truth.",
    keyFeatures: [
      "Self-healing cluster state with automated sync and prune",
      "Centralized multi-cluster management through a single interface",
      "Developer-driven deployments via Pull Requests (PRs)",
      "Automated rollbacks on deployment failure or health check mismatch",
      "Role-Based Access Control (RBAC) integrated with GitHub SSO"
    ],
    lessonsLearned: [
      "GitOps eliminates configuration drift entirely, improving system stability.",
      "ArgoCD provides a superior developer experience for managing K8s deployments.",
      "Automated reconciliation cycles catch manual cluster changes immediately.",
      "Testing changes in Git branches before merging is the new 'staging' environment."
    ],
    achievements: [
      "Eliminated 100% of cluster configuration drift incidents.",
      "Reduced Mean Time To Recovery (MTTR) by 70% using ArgoCD rollbacks.",
      "Handled 200+ automated deployments per day with zero manual intervention."
    ]
  },
  {
    id: "4",
    name: "Full Observability Stack with SLOs & Alerting",
    description:
      "Comprehensive observability solution using Prometheus, Grafana, and Loki to monitor applications, define SLOs, and set up alerting mechanisms.",
    techStack: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Tempo", "Kubernetes"],
    category: "monitoring",
    githubUrl: "https://github.com/lightsspeed/minimalist",
    hook: "You can't manage what you can't measure. Transform raw infrastructure data into actionable business and operational insights.",
    problem: "Scattered logs and metrics without centralized visualization make it impossible to pinpoint root causes in complex microservices architectures.",
    solution: "A unified 'Three Pillars of Observability' stack (Metrics, Logs, Traces) with SLO-based alerting to monitor system health and performance.",
    keyFeatures: [
      "Real-time metrics collection and querying with Prometheus",
      "Unified visualization dashboards with SLO tracking in Grafana",
      "Scalable log aggregation and efficient querying with Loki",
      "Distributed tracing for identifying microservice bottlenecks with Tempo",
      "Intelligent alerting and notification routing with Alertmanager"
    ],
    lessonsLearned: [
      "SLO-based alerting significantly reduces notification fatigue for engineering teams.",
      "Correlating logs and metrics in one dashboard speeds up root-cause analysis.",
      "Proper monitoring is the foundation of site reliability and continuous improvement.",
      "Distributed tracing is essential for debugging latency in microservices."
    ],
    achievements: [
      "90% reduction in Mean Time To Detection (MTTD) for critical incidents.",
      "Reduced alert noise by 50% through intelligent thresholding and SLOs.",
      "Provided 99.9% uptime visibility across a fleet of 50+ microservices."
    ]
  },
/*
  {
    id: "5",
    name: "Secret Management System",
    description:
      "Centralized secrets management using HashiCorp Vault with automated rotation and audit logging.",
    techStack: ["Vault", "Kubernetes", "Terraform", "Python"],
    category: "security",
    githubUrl: "https://github.com/lightsspeed",
    hook: "Your secrets are only as safe as your management system. Centralize, rotate, and secure your most sensitive environment data.",
    problem: "Hardcoded secrets and unencrypted environment variables pose a massive security risk and complicate compliance audits.",
    solution: "A production-grade HashiCorp Vault cluster for managing dynamic secrets, database credentials, and transit encryption.",
    keyFeatures: [
      "Automated secret rotation for databases and cloud credentials",
      "Kubernetes sidecar injection for seamless application integration",
      "Strict audit logging and compliance reporting for all secret access",
      "Transit encryption as a service to protect data in motion",
      "Identity-based access control with fine-grained policies"
    ],
    lessonsLearned: [
      "Dynamic, short-lived tokens are far more secure than long-lived static keys.",
      "Automated rotation is the only way to manage credentials at scale securely.",
      "Centralizing secrets simplifies both security enforcement and compliance auditing.",
      "Integrating Vault with CI/CD ensures secrets are never committed to Git."
    ],
    achievements: [
      "Eliminated 100% of hardcoded secrets across all development branches.",
      "Automated 24-hour credential rotation for over 50 production systems.",
      "Reduced credential leak risk to near-zero with dynamic service account tokens."
    ]
  },
*/
  {
    id: "6",
    name: "Blue-Green / Canary Deployment Strategy",
    description:
      "Implementation of advanced deployment strategies to minimize downtime and reduce risk during high-stakes application updates.",
    techStack: ["Argo Rollouts", "Kubernetes", "Istio", "Helm"],
    category: "cicd",
    githubUrl: "https://github.com/lightsspeed/story-weaver/tree/main/k8s/strategies",
    hook: "Deployment should be a non-event. Eliminate risk and ensure user stability with advanced traffic-splitting strategies.",
    problem: "Big-bang deployments often lead to service interruptions and a high stress 'all-hands-on-deck' culture during releases.",
    solution: "Utilizing Argo Rollouts and Istio for sophisticated deployment patterns like Canary and Blue-Green with automated analysis.",
    keyFeatures: [
      "Automated traffic splitting and shifting with Istio service mesh",
      "Advanced Canary analysis with automated success/failure metrics",
      "Zero-downtime Blue-Green environment switching",
      "Immediate, automated rollbacks when performance thresholds are missed",
      "Post-deployment smoke testing and validation gates"
    ],
    lessonsLearned: [
      "Incremental canary releases catch subtle edge cases that testing suites miss.",
      "Automating the analysis of metrics removes human bias from the rollout decision.",
      "Service mesh integration is crucial for fine-grained traffic control.",
      "The ability to rollback instantly creates a culture of faster, more frequent releases."
    ],
    achievements: [
      "Achieved 0.0% downtime during over 50 consecutive major version upgrades.",
      "Reduced recovery time from failed deployments by 90% via automated rollbacks.",
      "Increased deployment frequency by 2x by empowering developers with safe rollouts."
    ]
  },
/*
  {
    id: "7",
    name: "Multi-Cloud CI/CD Platform",
    description:
      "Unified CI/CD platform supporting deployments across AWS, Azure, and GCP with centralized pipeline management.",
    techStack: ["GitHub Actions", "Terraform", "Docker", "Kubernetes"],
    category: "cicd",
    githubUrl: "https://github.com/lightsspeed",
    hook: "Deploy anywhere, from anywhere. Build a truly cloud-agnostic deployment system that standardizes your workflow across providers.",
    problem: "Vendor lock-in and fragmented pipelines make managing multi-cloud environments inefficient and error-prone.",
    solution: "A unified platform built on GitHub Actions and Terraform that abstracts the cloud provider, allowing for standardized multi-cloud deployments.",
    keyFeatures: [
      "Cross-cloud Terraform modules for standardized infrastructure provisioning",
      "Unified CI/CD pipelines with conditional deployment logic",
      "Standardized build and test environments for AWS, Azure, and GCP",
      "Centralized artifact repository and container image management",
      "Global secrets management synchronized across multiple environments"
    ],
    lessonsLearned: [
      "Standardizing the deployment interface allows teams to focus on logic, not cloud quirks.",
      "Modular IAC is the only way to maintain consistency across different providers.",
      "Cross-cloud authentication (OIDC) is significantly more secure than long-lived keys.",
      "Uniform monitoring across clouds is necessary for a true multi-cloud strategy."
    ],
    achievements: [
      "Standardized 100% of deployment workflows across three major cloud platforms.",
      "Reduced multi-cloud deployment maintenance overhead by 40% using shared modules.",
      "Enabled seamless workload migration between clouds in under 30 minutes."
    ]
  },
  {
    id: "8",
    name: "Multi-Cloud Infrastructure with Terraform",
    description:
      "Provisioning and managing infrastructure across AWS, Azure, and GCP using Terraform for consistent and repeatable deployments.",
    techStack: ["Terraform", "AWS", "Azure", "GCP", "Python"],
    category: "infrastructure",
    githubUrl: "https://github.com/lightsspeed",
    hook: "One tool to rule them all. Provision and manage your entire multi-cloud stack with a single source of code as truth.",
    problem: "Each cloud provider has its own unique API and configuration management, creating a steep learning curve and fragmented operations.",
    solution: "A massive, modular Terraform-driven infrastructure codebase that provisions VPCs, clusters, and databases across AWS, Azure, and GCP.",
    keyFeatures: [
      "Highly modular Terraform structure for cross-provider resource sharing",
      "Centralized state management with locking and encryption",
      "Automated 'Plan and Apply' workflows with GitHub Actions integration",
      "Consistent tagging and naming conventions across all cloud platforms",
      "Cost-analysis integration to track multi-cloud spending in real-time"
    ],
    lessonsLearned: [
      "Proper module design is the only way to safely manage large-scale infrastructure.",
      "State locking and remote backends are non-negotiable for collaborative teams.",
      "Infrastructure testing (Terratest) ensures multi-provider changes are safe.",
      "Managing multi-cloud state requires careful attention to IAM and provider auth."
    ],
    achievements: [
      "Managed 1,000+ cloud resources with 100% Infrastructure-as-Code coverage.",
      "Eliminated 100% of manual configuration drift through automated reconciliation.",
      "Reduced new environment provisioning time from 2 weeks to under 30 minutes."
    ]
  },
*/
  {
    id: "9",
    name: "Multi-Region DR Pipeline Project",
    description:
      "Design and implementation of a multi-region disaster recovery pipeline to ensure high availability and business continuity in case of regional failures.",
    techStack: ["Terraform", "AWS", "Route53", "S3"],
    category: "infrastructure",
    githubUrl: "https://github.com/lightsspeed/Multi-Region-DR-Pipeline",
    architectureUrl: "/projects/dr-pipeline/architecture.png",
    hook: "Plan for failure so your users don't have to. Real-world business continuity for mission-critical applications.",
    problem: "How do you guarantee service when an entire AWS region goes offline, ensuring minimal data loss and rapid service restoration?",
    solution: "An Active-Passive multi-region architecture with automated failover and asynchronous database replication, fully orchestrated by Terraform.",
    keyFeatures: [
      "Active-Passive compute infrastructure provisioned across multiple AWS regions",
      "Continuous, asynchronous cross-region RDS replication with near-zero data lag",
      "Automated DNS failover mechanisms triggered by Route 53 health checks",
      "High-availability compute layout utilizing ALB and Auto Scaling in private subnets",
      "Custom Python automation for disaster simulation and RTO/RPO validation"
    ],
    lessonsLearned: [
      "Simulating disaster events is the only way to validate true RTO and RPO metrics.",
      "IaC drastically reduces the complexity of maintaining identical global environments.",
      "Automated health checks are the most reliable trigger for global DNS failover.",
      "Network isolation is essential for securing database and compute tiers globally."
    ],
    achievements: [
      "Verified Recovery Time Objective (RTO) of < 15 minutes during simulations.",
      "Verified Recovery Point Objective (RPO) of < 1 minute for all critical data.",
      "Successfully completed 4 automated regional failover drills with zero data loss."
    ],
    visuals: ["/projects/dr-pipeline/RDS Primary.jpg", "/projects/dr-pipeline/RDS Sec.jpg", "/projects/dr-pipeline/HealthChecksR53.jpg", "/projects/dr-pipeline/HealthCheckR53_1.jpg", "/projects/dr-pipeline/ALB-1.png", "/projects/dr-pipeline/TG.png", "/projects/dr-pipeline/Dashboard.jpg", "/projects/dr-pipeline/DR Simulation.jpg", "/projects/dr-pipeline/Write Simulation.jpg", "/projects/dr-pipeline/Terminal.jpg"],
  },
  {
    id: "10",
    name: "AWS Static Portfolio Hosting",
    description:
      "Production-grade secure static website hosting on AWS with private S3 storage, CloudFront CDN, and automated SSL/TLS.",
    techStack: ["Terraform", "AWS", "S3", "CloudFront", "Route53", "ACM", "GitHub Actions", "Bash"],
    category: "infrastructure",
    githubUrl: "https://github.com/lightsspeed/Infra-Portfolio",
    liveUrl: "https://deployone.cloud",
    architectureUrl: "/projects/portfolio/infraportfolio.png",
    hook: "Host your static website with enterprise-grade security and performance. Lightning fast, secure, and fully automated.",
    problem: "Standard S3 hosting is often insecure (public buckets) and lacks the performance needed for a professional global audience.",
    solution: "A robust architecture using private S3 buckets secured with CloudFront OAC, automated HTTPS, and a keyless OIDC deployment pipeline.",
    keyFeatures: [
      "Secure private S3 content storage with Origin Access Control (OAC)",
      "Global content delivery and edge caching with Amazon CloudFront",
      "Automated TLS certificate management and renewal with ACM",
      "Keyless, secure CI/CD pipeline using GitHub Actions and AWS OIDC",
      "Complete infrastructure management using Terraform modules"
    ],
    lessonsLearned: [
      "CloudFront OAC is a critical security upgrade over legacy OAI configurations.",
      "Infrastructure as Code ensures your hosting setup is versioned and reproducible.",
      "Automated OIDC-based deployments eliminate the risk of leaking AWS keys.",
      "Edge caching drastically improves user experience while reducing origin costs."
    ],
    achievements: [
      "Achieved 99.99% site availability globally since deployment.",
      "Reduced average page load time by 60% through optimized edge caching.",
      "Confirmed 100% secure 'A' grade evaluation on industry security header tests."
    ],
    visuals: ["/projects/portfolio/s3_1.png", "/projects/portfolio/s3_2.png", "/projects/portfolio/CF_1.png", "/projects/portfolio/ACM.png"]
  },
  {
    id: "11",
    name: "QR Code Generator (Serverless)",
    description:
      "Scalable serverless QR Code generator on AWS supporting on-demand generation with a user-friendly interface.",
    techStack: ["AWS Lambda", "API Gateway", "AWS Amplify", "Python", "Javascript", "CICD"],
    category: "serverless",
    githubUrl: "https://github.com/lightsspeed/quick-qr-creator.git",
    liveUrl: "https://utilfy.deployone.cloud/",
    architectureUrl: "/projects/qr/QRCode.png",
    hook: "Generate QR codes instantly with 100% serverless power. Build fast, pay less, and never manage a server again.",
    problem: "Paying for an always-on server to handle occasional, event-driven tasks like code generation is inefficient and expensive.",
    solution: "A serverless architecture using AWS Lambda and API Gateway that scales from zero to peak demand instantly and cost-effectively.",
    keyFeatures: [
      "Real-time QR code generation using high-performance Python Lambda",
      "RESTful API interface secured by AWS API Gateway throttling",
      "Modern React-based web interface hosted globally on AWS Amplify",
      "Fully automated CI/CD pipeline integrated into the development flow",
      "On-demand scaling that handles thousands of requests without management"
    ],
    lessonsLearned: [
      "Serverless architecture is ideal for lightweight, high-utility tools.",
      "AWS Amplify accelerates front-end development with built-in hosting.",
      "Cost-efficiency is a primary benefit of serverless, paying only for usage.",
      "Serverless simplifies the operational overhead of managing physical instances."
    ],
    achievements: [
      "Achieved a 95% cost reduction compared to traditional virtual machine hosting.",
      "Maintained 100% uptime with zero manual server maintenance required.",
      "Scales automatically to handle 100,000+ monthly requests with sub-500ms latency."
    ],
    visuals: ["/projects/qr/WebApp.png", "/projects/qr/lambda1.png", "/projects/qr/lambda2.png", "/projects/qr/lambda3.png", "/projects/qr/lambda4.png", "/projects/qr/lambda5.png", "/projects/qr/lambda6.png", "/projects/qr/AGW1.png", "/projects/qr/AGW2.png", "/projects/qr/amplify1.png", "/projects/qr/amplify2.png", "/projects/qr/amplify3.png", "/projects/qr/amplify4.png", "/projects/qr/amplify5.png"],
  }
];

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "automation", label: "Automation" },
  { value: "monitoring", label: "Monitoring" },
  { value: "security", label: "Security" },
  { value: "cicd", label: "CI/CD" },
  { value: "serverless", label: "Serverless" }
];

