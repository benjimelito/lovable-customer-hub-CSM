import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  Calendar,
  Clock,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

const ServiceLevelAgreement = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="h-4 w-4" />
            <span>Service Commitments</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Service Level Agreement
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 1, 2024</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Enterprise SLA</span>
            </div>
          </div>
        </div>

        {/* Service Level Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">&lt; 2h</div>
              <div className="text-sm text-gray-600">
                Critical Response Time
              </div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Security Monitoring</div>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Lovable commits to maintaining the following service
                availability levels for enterprise customers:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Monthly Uptime Commitment: 99.9%</strong>
                </p>
                <ul>
                  <li>Maximum allowable downtime: 43.8 minutes per month</li>
                  <li>Calculated on a calendar month basis</li>
                  <li>Excludes planned maintenance windows</li>
                  <li>Measured from our monitoring systems</li>
                </ul>
              </div>

              <p>
                <strong>Planned Maintenance:</strong>
              </p>
              <ul>
                <li>Scheduled during weekends (Saturday 2:00-6:00 AM UTC)</li>
                <li>48-hour advance notification for major maintenance</li>
                <li>Emergency maintenance may occur with minimal notice</li>
                <li>
                  Maintenance windows do not count against uptime commitment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Response Time Commitments:</strong>
              </p>

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div>
                  <p className="font-semibold">
                    API Response Times (95th percentile):
                  </p>
                  <ul>
                    <li>Standard API calls: &lt; 500ms</li>
                    <li>Code generation requests: &lt; 10 seconds</li>
                    <li>File operations: &lt; 2 seconds</li>
                    <li>Authentication requests: &lt; 200ms</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Platform Performance:</p>
                  <ul>
                    <li>Initial page load: &lt; 3 seconds</li>
                    <li>Code editor responsiveness: &lt; 100ms</li>
                    <li>Real-time collaboration sync: &lt; 500ms</li>
                    <li>Build and deployment: &lt; 60 seconds</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Support Response Times</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Enterprise customers receive priority support with guaranteed
                response times:
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="font-semibold text-red-800">
                    Critical (P1) Issues
                  </p>
                  <p className="text-red-700">
                    Service unavailable or major functionality broken
                  </p>
                  <p className="text-sm font-medium">Response Time: 2 hours</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="font-semibold text-orange-800">
                    High (P2) Issues
                  </p>
                  <p className="text-orange-700">
                    Significant impact to service functionality
                  </p>
                  <p className="text-sm font-medium">Response Time: 8 hours</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-800">
                    Medium (P3) Issues
                  </p>
                  <p className="text-yellow-700">
                    Moderate impact, workaround available
                  </p>
                  <p className="text-sm font-medium">Response Time: 24 hours</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="font-semibold text-green-800">
                    Low (P4) Issues
                  </p>
                  <p className="text-green-700">
                    General questions and minor issues
                  </p>
                  <p className="text-sm font-medium">Response Time: 48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Service Credits</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If we fail to meet our uptime commitment, eligible customers may
                receive service credits:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-2 border-b">Monthly Uptime</th>
                      <th className="text-left p-2 border-b">Service Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-b">99.0% - 99.89%</td>
                      <td className="p-2 border-b">10% of monthly fees</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b">95.0% - 98.99%</td>
                      <td className="p-2 border-b">25% of monthly fees</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b">&lt; 95.0%</td>
                      <td className="p-2 border-b">50% of monthly fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Service Credit Terms:</strong>
              </p>
              <ul>
                <li>
                  Credits must be requested within 30 days of the affected month
                </li>
                <li>Credits applied to future invoices, not cash refunds</li>
                <li>
                  Maximum credit per month: 50% of monthly subscription fees
                </li>
                <li>Credits do not apply during force majeure events</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Security and Compliance</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Security Monitoring:</strong>
              </p>
              <ul>
                <li>24/7 security operations center (SOC) monitoring</li>
                <li>Real-time threat detection and response</li>
                <li>Automated vulnerability scanning and patching</li>
                <li>Incident response within 1 hour of detection</li>
              </ul>

              <p>
                <strong>Compliance Commitments:</strong>
              </p>
              <ul>
                <li>SOC 2 Type II certification maintained annually</li>
                <li>GDPR compliance for EU data processing</li>
                <li>ISO 27001 security management framework</li>
                <li>Regular third-party security assessments</li>
              </ul>

              <p>
                <strong>Data Protection:</strong>
              </p>
              <ul>
                <li>Data encrypted in transit and at rest</li>
                <li>Regular automated backups with point-in-time recovery</li>
                <li>Business continuity and disaster recovery plans</li>
                <li>Data residency options for regulatory compliance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Escalation Procedures</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                For enterprise customers requiring escalation beyond standard
                support:
              </p>

              <div className="space-y-4">
                <div>
                  <p>
                    <strong>Level 1: Technical Support</strong>
                  </p>
                  <p>Email: enterprise-support@lovable.dev</p>
                  <p>Phone: +1-800-LOVABLE (Enterprise Hotline)</p>
                </div>

                <div>
                  <p>
                    <strong>Level 2: Engineering Team</strong>
                  </p>
                  <p>
                    Escalation for technical issues requiring engineering
                    expertise
                  </p>
                  <p>Response within 4 hours for P1/P2 issues</p>
                </div>

                <div>
                  <p>
                    <strong>Level 3: Customer Success Manager</strong>
                  </p>
                  <p>Account-specific issues and service concerns</p>
                  <p>Direct communication channel for enterprise accounts</p>
                </div>

                <div>
                  <p>
                    <strong>Level 4: Executive Escalation</strong>
                  </p>
                  <p>Email: executives@lovable.dev</p>
                  <p>
                    For critical business impact requiring executive attention
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Service Level Exclusions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>This SLA does not apply to service disruptions caused by:</p>

              <ul>
                <li>
                  Scheduled maintenance during announced maintenance windows
                </li>
                <li>
                  Customer's internet connectivity or local network issues
                </li>
                <li>
                  Third-party service failures beyond our reasonable control
                </li>
                <li>
                  Force majeure events (natural disasters, government actions)
                </li>
                <li>Customer's misuse of the service or violation of terms</li>
                <li>Distributed Denial of Service (DDoS) attacks</li>
                <li>
                  Issues caused by customer's custom code or configurations
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Monitoring and Reporting</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Service Level Monitoring:</strong>
              </p>
              <ul>
                <li>
                  Real-time status dashboard available to enterprise customers
                </li>
                <li>Automated monitoring from multiple global locations</li>
                <li>
                  Monthly service level reports provided to account managers
                </li>
                <li>Historical performance data available upon request</li>
              </ul>

              <p>
                <strong>Incident Communication:</strong>
              </p>
              <ul>
                <li>Real-time status updates during service incidents</li>
                <li>Post-incident reports within 48 hours</li>
                <li>Root cause analysis for major incidents</li>
                <li>Proactive notification of planned maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Service Improvements</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We continuously invest in service improvements and capacity
                planning:
              </p>

              <ul>
                <li>Regular capacity reviews and infrastructure scaling</li>
                <li>Performance optimization based on usage patterns</li>
                <li>Customer feedback integration into product roadmap</li>
                <li>Quarterly business reviews for enterprise accounts</li>
                <li>Early access to new features and capabilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                For SLA-related questions, service credit requests, or
                escalations:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Enterprise Support</strong>
                </p>
                <p>Email: enterprise-support@lovable.dev</p>
                <p>Phone: +1-800-LOVABLE</p>
                <p>Emergency Hotline: +1-800-LOV-HELP</p>
                <p>Status Page: status.lovable.dev</p>
                <p>Customer Success: success@lovable.dev</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceLevelAgreement;
