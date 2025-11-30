import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building,
  Database,
  FileText,
  Globe,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
  const legalDocuments = [
    {
      title: "General Terms and Conditions",
      description:
        "Comprehensive terms governing the use of Lovable's enterprise platform and services.",
      href: "/terms-of-service",
      icon: FileText,
      lastUpdated: "May 2025",
      category: "Service Agreement",
    },
    {
      title: "Product Terms",
      description:
        "Specific terms and conditions for Lovable.dev AI software developer platform services.",
      href: "/product-terms",
      icon: Settings,
      lastUpdated: "May 2025",
      category: "Product Agreement",
    },
    {
      title: "Data Processing Agreement",
      description:
        "GDPR-compliant data processing terms for enterprise data handling and storage.",
      href: "/data-processing-agreement",
      icon: Database,
      lastUpdated: "May 2025",
      category: "Data Compliance",
    },
    {
      title: "Consultancy Services Terms",
      description:
        "Terms and conditions for Lovable's professional consultancy and implementation services.",
      href: "/consultancy-services-terms",
      icon: Briefcase,
      lastUpdated: "May 2025",
      category: "Service Agreement",
    },
    {
      title: "Definitions",
      description:
        "Legal reference document containing definitions of key terms used throughout all agreements.",
      href: "/definitions",
      icon: BookOpen,
      lastUpdated: "May 2025",
      category: "Legal Reference",
    },
    {
      title: "Subprocessors List",
      description:
        "Complete list of third-party subprocessors that process customer data on behalf of Lovable Labs.",
      href: "/subprocessors",
      icon: Database,
      lastUpdated: "May 2025",
      category: "Data Compliance",
    },
    {
      title: "DORA Addendum",
      description:
        "Digital Operational Resilience Act compliance addendum for regulated financial sector entities.",
      href: "/privacy-policy",
      icon: Shield,
      lastUpdated: "May 2025",
      category: "Regulatory Compliance",
    },
  ];
  const features = [
    {
      icon: Building,
      title: "Enterprise Ready",
      description:
        "Built for large organizations with enterprise-grade security and compliance.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Designed for teams with role-based access and collaborative features.",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description:
        "Meets international standards including GDPR, SOC 2, and industry regulations.",
    },
  ];
  return (
    <Layout>
      <div className="space-y-12 flex flex-col">
        {/* Hero Section */}
        <div className="text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Building className="h-4 w-4" />
            <span>Enterprise Legal Documentation</span>
          </div>

          <h1 className="text-4xl pt-12 md:pt-24 md:text-5xl font-medium text-foreground leading-tight">
            Lovable Enterprise
            <span className="block text-affirmative-primary">
              Legal Terms & Policies
            </span>
          </h1>

          <p className="text-xl pb-12 md:pb-24 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal documentation for enterprise customers. Our
            terms are designed to provide clarity, transparency, and
            enterprise-grade protection for your organization.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center max-w-80 mx-auto">
                <div className="inline-flex  items-center justify-center w-12 h-12 bg-affirmative rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-affirmative-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Legal Documents */}
        <div className="space-y-8">
          <div className="text-center mb-16 mt-16 md:mt-32">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Legal Documentation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access our complete suite of enterprise legal documents. Each
              document is regularly updated to reflect current regulations and
              industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {legalDocuments.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card
                  key={index}
                  className="group transition-all duration-300 border-border hover:border-affirmative-primary/20 rounded-2xl"
                >
                  <CardHeader className="space-y-3 md:space-y-4 pb-3 md:pb-4 p-4 md:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                        <div className="p-3 bg-affirmative rounded-lg transition-colors flex-shrink-0">
                          <Icon className="h-5 w-5 text-affirmative-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-base md:text-lg truncate line-clamp-1 transition-colors">
                            {doc.title}
                          </CardTitle>
                          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-muted-foreground">
                            <span className="px-1.5 md:px-2 py-0.5 md:py-1 bg-muted rounded text-xs line-clamp-1 truncate">
                              {doc.category}
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="line-clamp-1">
                              Updated {doc.lastUpdated}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-end p-4 md:p-6 pt-0">
                    <Link
                      to={doc.href}
                      className="inline-flex px-2 md:px-3 py-1.5 md:py-2 rounded-lg hover:bg-affirmative items-center space-x-1 md:space-x-2 text-affirmative-primary hover:text-affirmative-primary font-medium group/link text-sm md:text-base"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-card rounded-2xl mt-32 p-8 shadow-sm border border-border">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-medium text-foreground">
            Need Assistance?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our enterprise team is available to answer questions about our terms
            and discuss custom agreements for enterprise customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@lovable.dev"
              className="inline-flex items-center justify-center px-6 py-3 bg-affirmative-primary text-affirmative-primary-foreground rounded-lg hover:bg-affirmative-primary/90 transition-colors font-medium"
            >
              Contact Enterprise Team
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
