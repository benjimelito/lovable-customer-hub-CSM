import Layout from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building, Calendar, Database } from "lucide-react";

const Subprocessors = () => {
  const cloudInfrastructure = [
    {
      name: "Amazon Web Services (AWS) - PRIMARY",
      dataProcessing: "Customer applications, databases, file storage",
      services: "RDS, DynamoDB, S3, ECS, Lambda",
      locations: "Multiple regions (US primary)",
    },
    {
      name: "Google Cloud Platform (GCP)",
      dataProcessing: "Customer applications and databases",
      services: "Cloud SQL, Firestore, App Engine",
      locations: "Multiple regions",
    },
  ];

  const applicationHosting = [
    {
      name: "Modal.com",
      dataProcessing: "Customer applications",
    },
  ];

  const aiMlSubprocessors = [
    {
      name: "OpenAI",
      dataProcessing: "Customer prompts, generated code, AI interactions",
    },
    {
      name: "Anthropic (Claude)",
      dataProcessing: "Customer prompts, generated code, AI interactions",
    },
    {
      name: "Google Gemini",
      dataProcessing: "Customer AI prompts and responses",
    },
  ];

  const databaseAuth = [
    {
      name: "Supabase",
      dataProcessing: "Customer databases, user authentication data",
    },
    {
      name: "ClickHouse",
      dataProcessing: "Customer analytics and usage data",
    },
  ];

  const otherSubprocessors = [
    {
      name: "GitHub",
      category: "Code Repository",
      dataProcessing:
        "Customer source code, potentially customer data in repositories",
    },
    {
      name: "Cloudflare",
      category: "Content Delivery",
      dataProcessing: "Customer web content, may cache customer data",
    },
    {
      name: "PostHog",
      category: "Analytics",
      dataProcessing: "Customer usage analytics, user behavior data",
    },
    {
      name: "Sentry",
      category: "Error Monitoring",
      dataProcessing: "Application errors that may contain customer data",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Database className="h-4 w-4" />
            <span>Data Processing</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Subprocessors List
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: May 2025</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Data Compliance</span>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Third parties processing customer data on behalf of Lovable Labs
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Lovable Labs Subprocessors List
            </h2>
            <p className="text-lg font-medium text-gray-700 mb-6">
              (Third Parties Processing Customer Data)
            </p>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Definition
                </h3>
                <p className="text-gray-700">
                  Subprocessors are third-party service providers that process
                  personal data or customer data on behalf of Lovable Labs. This
                  list excludes internal business tools that do not process
                  customer data.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cloud Infrastructure Subprocessors
                </h3>
                <p className="text-gray-600 mb-4">
                  These providers host and store customer applications and data
                </p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Provider</TableHead>
                        <TableHead>Data Processing</TableHead>
                        <TableHead>Services</TableHead>
                        <TableHead>Locations</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cloudInfrastructure.map((provider, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {provider.name}
                          </TableCell>
                          <TableCell>{provider.dataProcessing}</TableCell>
                          <TableCell>{provider.services}</TableCell>
                          <TableCell>{provider.locations}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Application Hosting Subprocessors
                </h3>
                <p className="text-gray-600 mb-4">
                  These platforms host customer web applications
                </p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Provider</TableHead>
                        <TableHead>Data Processing</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applicationHosting.map((provider, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {provider.name}
                          </TableCell>
                          <TableCell>{provider.dataProcessing}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI/ML Subprocessors
                </h3>
                <p className="text-gray-600 mb-4">
                  These services process customer prompts, code, and content
                </p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Provider</TableHead>
                        <TableHead>Data Processing</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aiMlSubprocessors.map((provider, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {provider.name}
                          </TableCell>
                          <TableCell>{provider.dataProcessing}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Database & Authentication Subprocessors
                </h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Provider</TableHead>
                        <TableHead>Data Processing</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {databaseAuth.map((provider, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {provider.name}
                          </TableCell>
                          <TableCell>{provider.dataProcessing}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Other Subprocessors
                </h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Provider</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Data Processing</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {otherSubprocessors.map((provider, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {provider.name}
                          </TableCell>
                          <TableCell>{provider.category}</TableCell>
                          <TableCell>{provider.dataProcessing}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  NOT Subprocessors - Internal Tools Only
                </h3>
                <p className="text-gray-700 mb-2">
                  These do not process customer data and should not be listed as
                  subprocessors:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Slack, Google Workspace, Notion - Internal
                    communication/productivity
                  </li>
                  <li>Linear - Internal task management</li>
                  <li>Calendly, Typeform - Business operations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Processing Locations
                </h3>
                <p className="text-gray-700 mb-2">
                  Customer data may be processed in:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>United States (primary)</li>
                  <li>London, United Kingdom</li>
                  <li>Belgium</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Compliance & Governance
                </h3>
                <p className="text-gray-700 mb-2">
                  All subprocessors are managed under:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Vendor Management Policy - Risk assessments and security
                    requirements
                  </li>
                  <li>
                    Data Processing Agreements - GDPR/privacy compliance where
                    applicable
                  </li>
                  <li>Annual SOC 2 reviews - Where available</li>
                  <li>
                    Quarterly risk assessments - For critical subprocessors
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This list includes only third parties that process customer
                  data. Internal business tools that do not access customer data
                  are excluded per data protection regulations.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subprocessors;
