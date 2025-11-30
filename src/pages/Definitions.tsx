import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Building, Calendar } from "lucide-react";
const Definitions = () => {
  const definitions = [
    {
      term: "Affiliate",
      definition:
        'means any company directly or indirectly controlling, under common control or controlled by the Customer and shall include any legal entity that is directly or indirectly controlled by, or that is under common control by a company within the same group as the Customer or a legal entity controlled by it. "Control" means ownership of at least 50% of the voting rights in a legal entity or the power to direct the management of a legal entity or control the composition of its board of directors.',
    },
    {
      term: "Agreement",
      definition:
        "means, collectively the applicable Order Form, the General Terms and Conditions, and any other documents expressly incorporated by reference in the applicable Order Form, including their related annexes, exhibits, schedules, etc.",
    },
    {
      term: "Business Day",
      definition:
        "means weekdays save for public holidays in the country which the Lovable Entity, that has entered into the Agreement with the Customer, resides.",
    },
    {
      term: "Business Hour",
      definition:
        "means 9:00am – 5:00pm in the time zone of the contracting Lovable company under the Order Form.",
    },
    {
      term: "Confidential Information",
      definition:
        "means any and all information which is either identified as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure, including, but not limited to, Lovable Materials, Lovable Software and the Agreement, computer programs, code, algorithms, names and expertise of employees and consultants, information relating to existing, previous and potential customers and contracts, know-how, trade secrets, formulas, processes, ideas, inventions (whether patentable or not), schematics and other technical, business, financial plans, and product plans and designs, forecasts, strategies and information. Confidential Information does not include information which (i) is or becomes, available within the public domain without breach of any confidentiality undertaking, (ii) is already in the possession of a Party at the time of receiving the same without obligation of confidence, (iii) is independently developed or acquired by a Party without any breach of the Agreement, or (iv) is received from a third party without restriction on its disclosure or use.",
    },
    {
      term: "Consultancy Services",
      definition:
        "means Lovable's provision of consultancy resources pursuant to the applicable Order Form and subject to the Consultancy Terms, for example pre-study and analysis work, development or configuration work, installation, implementation, migration, solution services, project management, or training.",
    },
    {
      term: "Consultancy Services Terms",
      definition:
        "means the terms and conditions applicable with respect to Consultancy Services provided by Lovable.",
    },
    {
      term: "Contract Year",
      definition:
        "means each twelve (12) month period calculated as of the Effective Date of the Agreement.",
    },
    {
      term: "Customer",
      definition:
        "means the party set out as customer in the applicable Order Form.",
    },
    {
      term: "Customer Data",
      definition:
        "means Customer's data that is processed through the Software Solutions within the scope of the Customer's use of the Software Solutions.",
    },
    {
      term: "Deliverable",
      definition:
        "means any work efforts and deliveries as a result of Consultancy Services, such as documentation, studies, reports, the result of implementation, configuration, extensions, migration of data, or any other material or results agreed within the scope of any Consultancy Services engagement.",
    },
    {
      term: "Effective Date",
      definition:
        "means the date from which the Subscription Term starts, as set out in the Order Form.",
    },
    {
      term: "Extended Subscription Term",
      definition:
        "means each extended period following the Initial Subscription Term, as set out in Section 9.2 of the General Terms and Conditions.",
    },
    {
      term: "Force Majeure Event",
      definition:
        "means any causes that are beyond the reasonable control of such Party, including but not limited to, civil unrest, war, riots, accidents, war, labour disputes (including strikes), actions or decrees of governmental bodies, governmental action, acts of terrorism, fire, flood, earthquake, epidemic and other natural disasters, and any case of force majeure as defined by the law governing the Agreement.",
    },
    {
      term: "General Terms and Conditions",
      definition:
        "means the general terms and conditions applicable to all Lovable Services, as made available on Lovable's website.",
    },
    {
      term: "Initial Subscription Term",
      definition:
        "means the initial period as set out in the Agreement that shall commence as from the Effective Date and for which the Customer shall have access to each Lovable Service ordered by Customer through the conclusion of an Order Form.",
    },
    {
      term: "Insolvency Event",
      definition:
        "means where a Party ceases to do business as a going concern, makes an assignment for the benefit of creditors (except in connection with a reorganization under which the business of such Party is to continue as before), admits in writing its inability to pay debts as they become due, files a winding-up petition or petition in bankruptcy or insolvency or is declared bankrupt or insolvent by a competent court of law or other relevant authority, appoints a receiver or liquidator or a receiver or liquidator is appointed for it or any substantial part of its assets or properties, or any other similar event in the applicable jurisdiction takes place.",
    },
    {
      term: "Intellectual Property Rights",
      definition:
        "means any intellectual property right, or application thereof, including patents, utility models, industrial designs, copyrights, database rights, trademarks, domain names, trade and company names, know-how, trade secrets and any other similar right.",
    },
    {
      term: "Order Form",
      definition:
        "means a separately signed order document either with Lovable or a third-party reseller authorized to resell Lovable Services, or an equivalent order concluded through an online procedure or similar as instructed by Lovable from time to time, specifying e.g. the Lovable Services to be provided hereunder, the related fees, etc., including any supplements thereto.",
    },
    {
      term: "Party or Parties",
      definition:
        "means, individually and collectively, Lovable and the Customer.",
    },
    {
      term: "Product Catalogue",
      definition: (
        <>
          means the product catalogue available{" "}
          <a
            href="https://docs.lovable.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-affirmative-primary hover:text-affirmative-primary/80 underline"
          >
            here
          </a>
          , which includes product descriptions and other information related to
          the Lovable Services.
        </>
      ),
    },
    {
      term: "Product Terms",
      definition:
        "means the from time-to-time applicable terms and conditions with respect to a Software Solution.",
    },
    {
      term: "Service Access Point",
      definition:
        "means the logical or physical element which acts as the demarcation point between the Customer's domain and the Lovable's domain.",
    },
    {
      term: "Lovable",
      definition:
        "means the Lovable Entity with which the Customer has concluded the Order Form.",
    },
    {
      term: "Lovable Data",
      definition:
        "means all data relating to the operations of Lovable and data emanating from Lovable's analytics of, or otherwise derive from, Customer Data.",
    },
    {
      term: "Lovable Entity",
      definition:
        "means the Lovable company described in Section 11.10 of the General Terms and Conditions.",
    },
    {
      term: "Lovable Materials",
      definition:
        "means any user manuals, handbooks, training material, requirements, and other written or electronic materials Lovable makes available to Customer by Lovable pursuant to the Agreement.",
    },
    {
      term: "Lovable Service(s)",
      definition:
        "means all services, websites, solutions, platforms, and products identified in an Order Form or online purchase portal and that Lovable makes available under or in relation to the Agreement, including Software, Third-Party Software, Support Services, Consultancy Services, or any other product or service provided by Lovable under the Agreement.",
    },
    {
      term: "Software",
      definition:
        'means Lovable\'s standard, proprietary application software products, modules, applications, and programs, including source-code, machine-readable code, or any other form in which it is provided to the Customer, which the Customer has licensed and/or been granted the right to access and use under an Order Form. For the avoidance of doubt, any reference to the "Software" in each applicable Product Terms shall not be construed as a reference to all proprietary software products provided by Lovable but only the specific proprietary software or product that has been licensed to the Customer under an Order Form.',
    },
    {
      term: "Software Solutions",
      definition:
        "means the Software and Third-Party Software, collectively, which the Customer is entitled to access and use subject to what has been ordered in an Order Form.",
    },
    {
      term: "Subscription Fee",
      definition:
        "means the subscription fee payable by the Customer, subject to the terms and conditions stipulated in the Agreement, for using the relevant Lovable Services during the Subscription Term.",
    },
    {
      term: "Subscription Term",
      definition:
        "means the Initial Subscription Term and Extended Subscription Terms for each of the relevant Lovable Service(s) ordered by the Customer.",
    },
    {
      term: "Superuser",
      definition:
        "means any person appointed by the Customer and trained to handle initial problem resolution and report Tickets in relation to the Support Services.",
    },
    {
      term: "Support Services",
      definition:
        "means the support services, other than maintenance as described in the General Terms and Conditions, provided to the Customer as set out in the applicable Product Terms.",
    },
    {
      term: "Taxes",
      definition:
        "means any taxes, levies, duties or similar governmental assessments of any nature, including, for example, value-added, sales, GST, use or withholding taxes, assessable by any jurisdiction whatsoever.",
    },
    {
      term: "Technical Specification",
      definition:
        "means the technical description of the Software and the technical requirements for using the Software applicable from time to time.",
    },
    {
      term: "Third-Party IP Claim",
      definition:
        "means a claim of a third party that any portion of the Lovable Software provided by Lovable to the Customer under the Agreement infringes any of the third party's Intellectual Property Rights.",
    },
    {
      term: "Third-Party Software",
      definition:
        "means any software product, data or service owned by a third party, provided by Lovable to the Customer under an Order Form and subject to specific Product Terms.",
    },
    {
      term: "Third-Party Software Terms",
      definition:
        "means the terms and conditions references under the Product Terms.",
    },
    {
      term: "Third-Party Vendor",
      definition:
        "means the third-party vendor that provides Third-Party Software under the Agreement.",
    },
    {
      term: "Ticket",
      definition:
        "means an incident, service request or change request reported by the Customer to Lovable in accordance with the Agreement, as part of the Support Services.",
    },
    {
      term: "Volume",
      definition:
        "means, as applicable, any agreed volume-based limitations and metrics, for use of the Software, such as, but not limited to, number of credits, number of users, etc., as set out in the applicable Order Form.",
    },
  ];
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <BookOpen className="h-4 w-4" />
            <span>Legal Reference</span>
          </div>
          <h1 className="text-4xl font-medium text-foreground">Definitions</h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 1, 2025</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Legal Reference Document</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. General</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-4">
                <p>
                  <strong>1.1</strong> Any capitalized terms and expressions
                  used in the Agreement shall have the meaning given to them in
                  this document.
                </p>
                <p>
                  <strong>1.2</strong> Unless the context otherwise requires,
                  words in the singular include the plural and vice versa and
                  words in one gender include any other gender. The headings in
                  the Agreement are for convenience only and shall not affect
                  its meaning. Any phrase in the Agreement introduced by the
                  term "include", "including", "in particular" or any similar
                  expression shall be construed as illustrative and shall not
                  limit the sense of the words preceding that term.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Definitions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6">
                {definitions.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-border pb-4 last:border-b-0"
                  >
                    <dt className="font-medium text-foreground mb-2">
                      "{item.term}"
                    </dt>
                    <dd className="text-muted-foreground leading-relaxed">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default Definitions;
