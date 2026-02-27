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
  visuals?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Secure CI/CD Pipeline with DevSecOps Integration",
    description:
      "A CI/CD pipeline that integrates security scanning tools at each stage to ensure code quality and compliance.",
    techStack: ["GitHub Actions", "SonarQube", "Snyk", "Docker", "Kubernetes"],
    category: "cicd",
    githubUrl: "https://github.com/lightsspeed/Code-Portfolio/blob/main/.github/workflows/deploy.yml",
    // architectureUrl: "https://example.com/architecture",
      // Add these optional fields for richer detail pages:
  hook: "CICD pipeline with built in security checks to ensure code quality and compliance!",
  problem: "Need a reliable CI/CD pipeline that incorporates security best practices throughout the development lifecycle?",
  solution: "Implement a CI/CD pipeline using GitHub Actions that integrates security scanning tools like SonarQube and Snyk at various stages to catch vulnerabilities early.",
  keyFeatures: ["Automated builds and tests", "Security scanning with SonarQube", "Vulnerability detection with Snyk", "Containerization with Docker", "Deployment to Kubernetes"],
  lessonsLearned: ["Integrating security tools into CI/CD pipelines enhances code quality and reduces vulnerabilities.", "Automated testing is crucial for maintaining application stability.", "Containerization simplifies deployment and scaling.", "Kubernetes provides a robust platform for managing containerized applications.", "Continuous monitoring and feedback loops improve development processes."],
  // visuals: ["/projects/portfolio/s3_1.png", "/projects/portfolio/s3_2.png","/projects/portfolio/CF_1.png","/projects/portfolio/ACM.png"]
  },
  {
    id: "2",
    name: "Kubernetes Cluster with Helm Charts & Ingress",
    description:
      "Automated deployment of a highly available Kubernetes cluster using Helm charts and Traefik for traffic management.",
    techStack: ["Kubernetes", "Helm", "Traefik", "Terraform", "AWS"],
    category: "infrastructure",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    name: "GitOps with ArgoCD for Continuous Deployment",
    description:
      "Implementing GitOps practices using ArgoCD to automate application deployments and manage Kubernetes configurations from a Git repository.",
    techStack: ["ArgoCD", "Kubernetes", "GitHub", "YAML", "Prometheus"],
    category: "monitoring",
    githubUrl: "https://github.com",
    architectureUrl: "https://example.com/architecture",
  },
  {
    id: "4",
    name: "Full Observability Stack with SLOs & Alerting",
    description:
      "Comprehensive observability solution using Prometheus, Grafana, and Loki to monitor applications, define SLOs, and set up alerting mechanisms.",
    techStack: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Tempo", "Kubernetes"],
    category: "monitoring",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    name: "Secret Management System",
    description:
      "Centralized secrets management using HashiCorp Vault with automated rotation and audit logging.",
    techStack: ["Vault", "Kubernetes", "Terraform", "Python"],
    category: "security",
    githubUrl: "https://github.com",
    architectureUrl: "https://example.com/architecture",
  },
  {
    id: "6",
    name: "Blue-Green / Canary Deployment Strategy",
    description:
      "Implementation of blue-green and canary deployment strategies to minimize downtime and reduce risk during application updates.",
    techStack: ["Argo Rollouts", "Kubernetes", "Istio", "Helm"],
    category: "cicd",
    githubUrl: "https://github.com",
  },
  {
    id: "7",
    name: "Multi-Cloud CI/CD Platform",
    description:
      "Unified CI/CD platform supporting deployments across AWS, Azure, and GCP with centralized pipeline management.",
    techStack: ["GitHub Actions", "Terraform", "Docker", "Kubernetes"],
    category: "cicd",
    githubUrl: "https://github.com",
  },
  {
    id: "8",
    name: "Multi-Cloud Infrastructure with Terraform",
    description:
      "Provisioning and managing infrastructure across AWS, Azure, and GCP using Terraform for consistent and repeatable deployments.",
    techStack: ["Terraform", "AWS", "Azure", "GCP", "Python"],
    category: "infrastructure",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "9",
    name: "Multi-Region DR Pipeline Project",
    description:
      "Design and implementation of a multi-region disaster recovery pipeline to ensure high availability and business continuity in case of regional failures.",
    techStack: ["Terraform", "AWS", "Route53", "S3"],
    category: "infrastructure",
    githubUrl: "https://github.com/lightsspeed/Multi-Region-DR-Pipeline",
    architectureUrl: "/projects/dr-pipeline/architecture.png",
  // Add these optional fields for richer detail pages:
    hook: "Ensure business continuity with an automated, multi-region disaster recovery pipeline on AWS!",
    problem: "How can we design a robust disaster recovery solution that guarantees high availability, minimizes data loss, and ensures rapid automated failover during a complete regional outage?",
    solution: "Implement an Active-Passive multi-region architecture using AWS Application Load Balancers, Auto Scaling Groups, and asynchronous cross-region RDS MySQL replication, entirely orchestrated by Terraform and Route 53 DNS failover.",
    keyFeatures: [
    "Active-Passive compute infrastructure provisioned across multiple AWS regions using Terraform", 
    "Continuous, asynchronous cross-region database replication with Amazon RDS", 
    "Automated DNS routing and failover mechanics triggered by Route 53 health checks", 
    "High-availability compute layout utilizing ALB and Auto Scaling Groups in private subnets", 
    "Custom Python and PowerShell automation scripts for disaster simulation and RTO/RPO validation"
  ],
    lessonsLearned: [
    "Simulating real disaster events is critical to validating true RTO (Recovery Time Objective) and RPO (Recovery Point Objective) metrics.", 
    "Infrastructure as Code drastically reduces the complexity of maintaining identical environments across multiple global regions.", 
    "Automated Application Load Balancer health checks provide the most reliable trigger for global DNS failover.", 
    "Cross-region database replication requires careful configuration of VPC networking and cross-region security group rules.", 
    "Proper network isolation using public and private subnets is essential for securing database and compute tiers in a highly available architecture."
  ],
    visuals: ["public/projects/dr-pipeline/RDS Primary.jpg", "public/projects/dr-pipeline/RDS Sec.jpg", "public/projects/dr-pipeline/HealthChecksR53.jpg", "public/projects/dr-pipeline/HealthCheckR53_1.jpg"],
  },
  {
  id: "10",
  name: "AWS Static Portfolio Hosting",
  description:
    "Production Grade, Secure static website on AWS using Terraform: private S3 buckets, CloudFront CDN with OAC, Route53 custom domain, ACM HTTPS, and automated GitHub Actions deployment.",
  techStack: ["Terraform", "AWS", "S3", "CloudFront", "Route53", "ACM", "GitHub Actions", "Bash"],
  category: "infrastructure",
  githubUrl: "https://github.com/lightsspeed/Infra-Portfolio",
  liveUrl: "https://deployone.cloud",
  architectureUrl: "/projects/portfolio/infraportfolio.png",
  // Add these optional fields for richer detail pages:
  hook: "Host your static website securely and efficiently on AWS with automated deployments!",
  problem: "Need a reliable and secure way to host a static website with custom domain and HTTPS?",
  solution: "Utilize AWS services like S3, CloudFront, Route53, and ACM to create a robust static website hosting solution, automated with Terraform and GitHub Actions.",
  keyFeatures: ["Secure S3 bucket for content storage", "CloudFront CDN for fast content delivery", "Custom domain with Route53", "Automated HTTPS with ACM", "CI/CD pipeline with GitHub Actions"],
  lessonsLearned: ["Infrastructure as Code with Terraform enhances reproducibility and version control.", "Integrating multiple AWS services requires careful planning and configuration.", "Automating deployments reduces manual errors and speeds up updates.", "Security best practices are crucial for public-facing websites.", "Monitoring and logging are essential for maintaining website performance."],
  visuals: ["/projects/portfolio/s3_1.png", "/projects/portfolio/s3_2.png","/projects/portfolio/CF_1.png","/projects/portfolio/ACM.png"]
},
{
  id: "11",
  name: "QR Code Generator on AWS Lambda, AWS API Gateway and AWS Amplify",
  description:
    "Serverless QR Code Generator using AWS Lambda, API Gateway, and Amplify: Generates QR codes on-demand with a user-friendly web interface, leveraging serverless architecture for scalability and cost-efficiency.",
  techStack: ["AWS Lambda", "API Gateway", "AWS Amplify", "Python","Javascript", "CICD"],
  category: "serverless",
  githubUrl: "https://github.com/lightsspeed/quick-qr-creator.git",
  liveUrl: "https://utils.deployone.cloud",
  architectureUrl: "/projects/qr/QRCode.png",
  // Add these optional fields for richer detail pages:
  hook: "Generate QR codes instantly with our serverless solution!",
  problem: "Need a quick and easy way to generate QR codes without managing servers?",
  solution: "Leverage AWS Lambda and API Gateway to create a scalable, on-demand QR code generator with a simple web interface using AWS Amplify.",
  keyFeatures: ["Instant QR code generation", "Serverless architecture", "Web interface"],
  lessonsLearned: ["Serverless architecture simplifies deployment and scaling.", "AWS services can be seamlessly integrated for rapid development.", "Cost efficiency is achieved by paying only for what you use.", "Importance of security best practices in serverless applications.", "Monitoring and logging are crucial for debugging and performance tracking.","AWS Amplify accelerates front-end development with built-in hosting and CI/CD."],
  visuals: ["/projects/qr/WebApp.png", "/projects/qr/lambda1.png","/projects/qr/lambda2.png","/projects/qr/lambda3.png","/projects/qr/lambda4.png","/projects/qr/lambda5.png","/projects/qr/lambda6.png","/projects/qr/AGW1.png","/projects/qr/AGW2.png","/projects/qr/amplify1.png","/projects/qr/amplify2.png", "/projects/qr/amplify3.png", "/projects/qr/amplify4.png", "/projects/qr/amplify5.png"],
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

