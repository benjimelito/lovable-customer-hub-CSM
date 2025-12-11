// Mock data for Customer Hub

// Account Executive Data
export const mockAccountExecutive = {
  id: "ae-1",
  name: "Sarah Chen",
  title: "Enterprise Account Executive",
  photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  email: "sarah@lovable.dev",
  phone: "+1 (555) 123-4567",
  calendlyUrl: "https://calendly.com/sarah-lovable",
  linkedInUrl: "https://linkedin.com/in/sarahchen",
  bio: "Sarah has 8+ years helping enterprise teams transform their development workflows. She's passionate about enabling teams to ship faster with AI.",
};

// Welcome Video Data
export const mockWelcomeVideo = {
  videoUrl: "",
  presenter: "gtm" as const,
  personalizationPoints: {
    prospectName: "John",
    companyName: "Acme Corp",
    industry: "Technology",
    customMessages: ["Tailored for your engineering team"],
  },
  thumbnailUrl: "/images/video-thumbnail.jpg",
  duration: "2:30",
};

// Usage Dashboard Data
export const usageStats = {
  accounts: 12,
  projectsBuilt: 47,
  activeUsers: 23,
  deployments: 156,
  linesOfCode: "1.2M",
  lastUpdated: new Date().toISOString(),
};

export const usageTrends = [
  { month: "Jan", projects: 5, deployments: 12, users: 8 },
  { month: "Feb", projects: 8, deployments: 24, users: 12 },
  { month: "Mar", projects: 12, deployments: 38, users: 15 },
  { month: "Apr", projects: 18, deployments: 52, users: 18 },
  { month: "May", projects: 28, deployments: 89, users: 20 },
  { month: "Jun", projects: 47, deployments: 156, users: 23 },
];

// Sales Process Data
export const dealStages = [
  {
    id: "discovery",
    name: "Discovery",
    description: "Initial exploration and needs assessment",
    status: "completed",
    agendaItems: [
      "Understand current development workflow",
      "Identify pain points and bottlenecks",
      "Discuss team structure and capabilities",
    ],
  },
  {
    id: "demo",
    name: "Product Demo",
    description: "Live demonstration of Lovable capabilities",
    status: "current",
    agendaItems: [
      "Show end-to-end project creation",
      "Demonstrate AI-powered development",
      "Review enterprise security features",
      "Q&A session",
    ],
  },
  {
    id: "evaluation",
    name: "Technical Evaluation",
    description: "Hands-on trial and technical deep-dive",
    status: "upcoming",
    agendaItems: [
      "Pilot project setup",
      "Integration assessment",
      "Security review",
    ],
  },
  {
    id: "negotiation",
    name: "Negotiation",
    description: "Pricing and contract discussions",
    status: "upcoming",
    agendaItems: [
      "Pricing proposal",
      "Contract terms",
      "Implementation timeline",
    ],
  },
  {
    id: "closed",
    name: "Closed Won",
    description: "Deal closed and onboarding begins",
    status: "upcoming",
    agendaItems: [
      "Kickoff meeting",
      "Team onboarding",
      "Success metrics",
    ],
  },
];

// AI Research Insights Data
export const aiResearchInsights = {
  companyStrategy: {
    title: "AI Strategy Analysis",
    summary: "Based on public information and industry trends, here's our analysis of your company's AI positioning.",
    insights: [
      "Strong focus on developer productivity tools",
      "Increasing investment in AI/ML capabilities",
      "Emphasis on enterprise-grade security",
    ],
  },
  painPoints: [
    {
      title: "Development Velocity",
      description: "Teams struggle to ship features fast enough to meet market demands.",
      source: "Industry analysis",
      severity: "high",
    },
    {
      title: "Technical Debt",
      description: "Legacy systems slow down innovation and require significant maintenance.",
      source: "Common enterprise challenge",
      severity: "medium",
    },
    {
      title: "Talent Acquisition",
      description: "Difficulty hiring and retaining skilled developers.",
      source: "Market trends",
      severity: "high",
    },
  ],
  researchQuestions: [
    "What's your current development cycle time from idea to production?",
    "How do you currently handle prototyping and validation?",
    "What percentage of developer time is spent on maintenance vs. new features?",
    "How do you ensure consistent quality across projects?",
  ],
};

// Social Proof Data
export const similarCompanies = [
  {
    name: "TechFlow Inc",
    industry: "Technology",
    size: "500-1000",
    matchScore: 94,
    quote: "Reduced our prototyping time by 80%",
    contactName: "Sarah Chen",
    contactRole: "CTO",
  },
  {
    name: "DataDriven Co",
    industry: "Analytics",
    size: "200-500",
    matchScore: 89,
    quote: "Our non-technical PMs now ship features independently",
    contactName: "Mike Johnson",
    contactRole: "VP Engineering",
  },
  {
    name: "ScaleUp Labs",
    industry: "SaaS",
    size: "100-200",
    matchScore: 87,
    quote: "10x faster from idea to MVP",
    contactName: "Emily Davis",
    contactRole: "Founder",
  },
];

export const caseStudies = [
  {
    id: "thinkify",
    company: "Thinkify",
    title: "From Concept to Launch in 2 Weeks",
    summary: "How Thinkify built their entire customer portal using Lovable.",
    industry: "EdTech",
    results: ["2 weeks to launch", "50% cost reduction", "3x faster iterations"],
  },
  {
    id: "finova",
    company: "Finova",
    title: "Enterprise Dashboard Transformation",
    summary: "Finova replaced their legacy dashboard with a modern, AI-powered solution.",
    industry: "FinTech",
    results: ["90% faster development", "Zero downtime migration", "40% user engagement increase"],
  },
];

// Action Items Data
export const actionItems = [
  {
    id: "design_system",
    category: "Setup",
    title: "Review Design System",
    description: "Explore our component library and customization options",
    points: 25,
    completed: false,
  },
  {
    id: "data_integrations",
    category: "Setup",
    title: "Set Up Data Integrations",
    description: "Connect your existing tools and data sources",
    points: 50,
    completed: false,
  },
  {
    id: "enterprise_account",
    category: "Account",
    title: "Create Enterprise Account",
    description: "Set up your enterprise workspace with SSO",
    points: 75,
    completed: false,
  },
  {
    id: "team_invitations",
    category: "Account",
    title: "Send Team Invitations",
    description: "Invite your team members to collaborate",
    points: 25,
    completed: false,
  },
  {
    id: "watch_demo",
    category: "Learning",
    title: "Watch Product Demo",
    description: "Complete the interactive product walkthrough",
    points: 30,
    completed: false,
  },
  {
    id: "schedule_call",
    category: "Next Steps",
    title: "Schedule Discovery Call",
    description: "Book a call with your dedicated success manager",
    points: 50,
    completed: false,
  },
];

// FAQ Data
export const faqItems = [
  {
    question: "How does Lovable work with our existing codebase?",
    answer: "Lovable syncs directly with your GitHub repository. You can start with existing projects or create new ones. All code is yours to own, export, and deploy anywhere.",
  },
  {
    question: "What security certifications does Lovable have?",
    answer: "Lovable is SOC 2 Type II certified with enterprise-grade security. We support SSO/SAML, role-based access control, and provide comprehensive audit logs.",
  },
  {
    question: "Can non-technical team members use Lovable?",
    answer: "Absolutely! Lovable is designed for everyone. Product managers, designers, and business users can build and iterate without coding knowledge.",
  },
  {
    question: "What's the typical ROI for enterprise customers?",
    answer: "Our enterprise customers typically see 60-80% reduction in development time and 3-5x faster time-to-market for new features.",
  },
  {
    question: "How does pricing work for enterprise?",
    answer: "Enterprise pricing is based on seats and usage. Contact our sales team for a custom quote tailored to your organization's needs.",
  },
  {
    question: "What support is included with enterprise plans?",
    answer: "Enterprise plans include dedicated support, priority response times, custom onboarding, training sessions, and direct access to our product team.",
  },
];

// Organization Usage Data
export const mockOrganizationUsage = {
  corporateDomain: "acmecorp.com",
  workspaces: {
    free: 8,
    paid: 4,
    total: 12,
  },
  totalUsers: 89,
  estimatedARR: 4800,
  departments: [
    {
      name: "Engineering",
      workspaceCount: 5,
      userCount: 45,
    },
    {
      name: "Product",
      workspaceCount: 3,
      userCount: 22,
    },
    {
      name: "Marketing",
      workspaceCount: 2,
      userCount: 12,
    },
    {
      name: "Operations",
      workspaceCount: 2,
      userCount: 10,
    },
  ],
  topProjects: [
    {
      id: "proj-1",
      name: "Internal Dashboard",
      description: "Team metrics and OKR tracking dashboard for the engineering team",
      thumbnailUrl: "/placeholder.svg",
      createdBy: "Mike S.",
      department: "Engineering",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-1",
    },
    {
      id: "proj-2",
      name: "Customer Portal",
      description: "Self-service portal for enterprise customers",
      thumbnailUrl: "/placeholder.svg",
      createdBy: "Sarah L.",
      department: "Product",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-2",
    },
    {
      id: "proj-3",
      name: "Campaign Builder",
      description: "Marketing automation and campaign management tool",
      thumbnailUrl: "/placeholder.svg",
      createdBy: "Alex T.",
      department: "Marketing",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-3",
    },
    {
      id: "proj-4",
      name: "Inventory Tracker",
      description: "Real-time inventory management system",
      thumbnailUrl: "/placeholder.svg",
      createdBy: "Jamie R.",
      department: "Operations",
      remixable: false,
    },
    {
      id: "proj-5",
      name: "API Documentation",
      description: "Interactive API docs for internal services",
      thumbnailUrl: "/placeholder.svg",
      createdBy: "Chris K.",
      department: "Engineering",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-5",
    },
    {
      id: "proj-6",
      name: "Feedback Hub",
      description: "Customer feedback collection and analysis tool",
      thumbnailUrl: "/placeholder.svg",
      createdBy: "Jordan M.",
      department: "Product",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-6",
    },
  ],
};

// Swag Catalog Data
export const swagCatalog = [
  {
    id: "tshirt",
    name: "Lovable T-Shirt",
    description: "Premium cotton t-shirt with Lovable branding",
    pointsCost: 100,
    image: "/placeholder.svg",
    available: true,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "stickers",
    name: "Sticker Pack",
    description: "Set of 5 high-quality vinyl stickers",
    pointsCost: 50,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: "hoodie",
    name: "Premium Hoodie",
    description: "Cozy hoodie with embroidered logo",
    pointsCost: 250,
    image: "/placeholder.svg",
    available: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "notebook",
    name: "Developer Notebook",
    description: "Hardcover notebook with dot grid pages",
    pointsCost: 75,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: "bottle",
    name: "Water Bottle",
    description: "Insulated stainless steel bottle",
    pointsCost: 125,
    image: "/placeholder.svg",
    available: false,
  },
];
