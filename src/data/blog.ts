export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  mediumUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable CI/CD Pipelines with GitHub Actions",
    excerpt:
      "Learn how to design and implement CI/CD pipelines that scale with your team, including parallel jobs, caching strategies, and reusable workflows.",
    date: "2025-12-31",
    readTime: "3 min read",
    tags: ["CI/CD", "GitHub Actions", "Automation"],
    slug: "scalable-cicd-github-actions",
    mediumUrl:"https://medium.com/@akhileshchoure1/building-scalable-ci-cd-pipelines-with-github-actions-from-basics-to-pro-tips-6b57f2ac554a"
  },

  {
    id: "2",
    title: "When to Use Python vs. Bash for DevOps Scripting",
    excerpt:
      "An in-depth comparison of Python and Bash for DevOps tasks, covering use cases, performance, maintainability, and community support to help you choose the right tool for your scripts.",
    date: "2025-27-04",
    readTime: "6 min read",
    tags: ["Scripting", "Bash", "Cloud", "Python", "DevOps"],
    slug: "python-vs-bash-devops",
    mediumUrl:"https://medium.com/@akhileshchoure1/when-to-use-python-vs-bash-for-devops-scripting-772ab12ebda3"
  }



];
