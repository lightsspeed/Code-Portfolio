export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior DevOps Engineer",
    startDate: "2022",
    endDate: "Present",
    achievements: [
      "Led migration of 50+ microservices to Kubernetes, reducing deployment time by 70%",
      "Implemented GitOps workflow with ArgoCD, enabling 100+ deployments per day",
      "Reduced cloud costs by 40% through infrastructure optimization and right-sizing",
    ],
  },
  {
    id: "2",
    company: "CloudStart Solutions",
    role: "DevOps Engineer",
    startDate: "2020",
    endDate: "2022",
    achievements: [
      "Built CI/CD pipelines for 20+ development teams using GitHub Actions",
      "Designed and implemented multi-region disaster recovery architecture",
      "Automated infrastructure provisioning with Terraform, reducing setup time from days to hours",
    ],
  },
  {
    id: "3",
    company: "DataFlow Systems",
    role: "Junior DevOps Engineer",
    startDate: "2018",
    endDate: "2020",
    achievements: [
      "Containerized legacy applications using Docker and orchestrated with Kubernetes",
      "Set up centralized logging with ELK Stack for 30+ services",
      "Implemented automated testing and deployment pipelines for the platform team",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/certification",
  },
  {
    id: "2",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "2022",
    credentialUrl: "https://www.cncf.io/certification/cka",
  },
  {
    id: "3",
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    credentialUrl: "https://www.hashicorp.com/certification",
  },
  {
    id: "4",
    name: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "2021",
    credentialUrl: "https://learn.microsoft.com/certifications",
  },
];
