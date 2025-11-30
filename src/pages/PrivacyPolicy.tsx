import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Shield } from "lucide-react";
const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>Regulatory Compliance</span>
          </div>
          <h1 className="text-4xl font-medium text-foreground">
            DORA Addendum
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 17, 2025</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Digital Operational Resilience Act</span>
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
              <p>
                This DORA Addendum (the "Addendum") applies between the Customer
                and Lovable when the Customer has purchased Lovable Services
                under a valid Order Form and is a regulated entity within the
                scope of article 2 of Regulation (EU) 2022/2554 of the European
                Parliament and of the Council of 14 December 2022 on digital
                operational resilience of the financial sector ("DORA"). DORA
                contains requirements for provisions to be included in contracts
                with ICT third-party service providers. In order to ensure that
                the Agreement contains such provisions which according to
                article 30.2 of DORA (and related legal acts) must be included
                in agreements with third-party providers of ICT services,
                certain additions need to be made to the Agreement, which are
                reflected herein.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Interpretation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>2.1</strong> For the purpose of this Addendum, any
                reference to "Lovable Service" shall refer to the Software and
                services provided by Supplier under the Agreement and,
                notwithstanding what is stated in the Agreement, all parts of
                the Lovable Services and all functions included therein
                (regardless if such functions are explicitly mentioned in the
                Agreement or Technical Specification) that, according to DORA,
                are to be regarded as an ICT service that Supplier provides to
                Customer under the Agreement.
              </p>
              <p>
                <strong>2.2</strong> Except as otherwise provided in this
                Addendum, other definitions used but not expressly defined in
                this Addendum shall have the meaning (i) set forth in the
                Agreement and (ii) notwithstanding anything to the contrary in
                the Agreement, as set forth in DORA.
              </p>
              <p>
                <strong>2.3</strong> When applicable, this Addendum forms and
                integral part of the Agreement and in case of any conflict or
                inconsistencies between the content of this Addendum and the
                Agreement, this Addendum shall prevail.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Additions to the Agreement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>3.1 Service description</strong>
              </p>
              <p>
                The scope and description of the Lovable Service ordered by the
                Customer under the Agreement are set out in the Technical
                Specification and, as applicable, any statement of work
                applicable between the Parties under the Agreement, and
                Supplier's and Customer's rights and obligations with respect to
                the Lovable Services are outlined in the Agreement.
              </p>

              <p>
                <strong>3.2 Subcontractors</strong>
              </p>
              <p>
                <strong>3.2.1</strong> Supplier is entitled to engage
                subcontractors for the provision of the Lovable Services. The
                Customer is entitled to object to the engagement of a
                subcontractor in accordance with the process described in the
                Data Processing Agreement. For the avoidance of doubt, the
                Customer's right to object to the engagement of a subcontractor
                and the process described in the Data Processing Agreement shall
                apply regardless of whether the subcontractor processes personal
                data or not.
              </p>
              <p>
                <strong>3.2.2</strong> In addition to what is set out in the
                Data Processing Agreement, the following shall apply in the
                event the Customer objects to the engagement of a subcontractor.
              </p>
              <ul>
                <li>
                  (i) Customer and Supplier shall as soon as practically
                  possible meet to discuss the intended engagement of the
                  subcontractor, where Customer shall describe the reasons for
                  the objections and the measures proposed by the Customer to be
                  taken in order to mitigate the Customer's concerns.
                </li>
                <li>
                  (ii) The Parties shall seek to resolve the Customer's concerns
                  and the reason for the objection during the meeting referred
                  to above. If such resolution cannot be agreed, the Customer
                  shall be entitled to terminate the impacted Lovable Service
                  effective as of the date when the subcontractor commences its
                  engagement. For the avoidance of doubt, unless the impacted
                  Lovable Service is the only Lovable Service provided under the
                  Agreement, Customer shall not be entitled to terminate the
                  Agreement but only the impacted Lovable Service. Any other
                  Lovable Service provided under the Agreement which is not
                  impacted by the subcontractor shall remain unaffected and
                  unchanged by the Customer's objection under this Section
                  3.2.2.
                </li>
              </ul>
              <p>
                <strong>3.2.3</strong> Supplier is responsible for the
                subcontractor's work as for its own work and personnel.
              </p>

              <p>
                <strong>
                  3.3 Locations for the provision of functions and services
                </strong>
              </p>
              <p>
                <strong>3.3.1</strong> The regions or countries where the
                Lovable Services are provided and where the data is processed
                and stored are described on Supplier's sub-processor list
                available at
                https://enterprise.lovable.dev/data-processing-agreement.
              </p>
              <p>
                <strong>3.3.2</strong> Any change of region and/or country must
                be notified to the Customer in advance, within a reasonable time
                before such change takes place.
              </p>

              <p>
                <strong>3.4 Service levels</strong>
              </p>
              <p>
                Service levels, including updates and revisions thereto, are
                described the Agreement for the respective Lovable Services
                provided by Supplier to Customer.
              </p>

              <p>
                <strong>3.5 Data protection and access to data</strong>
              </p>
              <p>
                <strong>3.5.1</strong> Supplier shall take measures to ensure,
                where possible given the nature of the Lovable Service provided
                by Supplier, the availability, authenticity, integrity and
                confidentiality in relation to any data used by Supplier within
                the scope of its provision of the Lovable Services.
              </p>
              <p>
                <strong>3.5.2</strong> Customer acknowledges and understands
                that Supplier in general does not store any data on behalf of
                the Customer. Unless granted by Customer in each individual
                case, e.g. within the scope of support services or Consultancy
                Services, Supplier will not have any regular access to Customer
                data. Only in cases where it is explicitly stated in the
                Agreement that Supplier will host the applicable Lovable
                Service, Supplier will have regular access to such data within
                the scope of the applicable Lovable Service.
              </p>
              <p>
                <strong>3.5.3</strong> Provisions relating to the protection of
                personal data and other data are set out in the Data Processing
                Agreement.
              </p>
              <p>
                <strong>3.5.4</strong> Supplier shall, in relation to Supplier's
                operations in general and within the scope of the provision of
                the Lovable Services in particular, take measures to ensure the
                security, integrity and confidentiality of its information
                systems and any data processed or otherwise handled by Supplier.
                Any such security measures shall be taken by Supplier (i) to
                protect information from all internal, external, deliberate, or
                accidental threats, (ii) to enable secure information sharing,
                (iii) to ensure consistent and professional use of information,
                (iv) to ensure clarity about roles and responsibilities at
                Supplier associated with protecting information, and (v) to
                ensure business continuity and minimize business damage.
                Customer is entitled to request (and Supplier shall be obligated
                to provide) further information about Supplier's information
                security framework and the security measures taken by Supplier.
              </p>
              <p>
                <strong>3.5.5</strong> Provisions on ensuring access, recovery
                and return in a commonly available technical standard and
                machine-readable format of personal and non-personal data
                processed by the Customer in the event of the insolvency,
                resolution or discontinuation of the business operations of the
                Supplier, or in the event of the termination of the Agreement,
                are described in the Data Processing Agreement. For the
                avoidance of doubt, the relevant provisions of the Data
                Processing Agreement shall apply regardless of whether the data
                is personal data or non-personal data.
              </p>

              <p>
                <strong>3.6 Assistance in case of incidents</strong>
              </p>
              <p>
                <strong>3.6.1</strong> Supplier's obligation to provide
                assistance to the Customer, including notification obligations,
                when an ICT incident related to a Lovable Service provided to
                the Customer occurs, is described in detail in the Data
                Processing Agreement. For the avoidance of doubt, the process
                described in the Data Processing Agreement shall apply
                regardless of whether the affected data is personal data or
                non-personal data.
              </p>
              <p>
                <strong>3.6.2</strong> Supplier shall provide assistance,
                including notification, to Customer at no additional cost when
                an ICT incident related to a Lovable Service occurs.
                Notwithstanding the foregoing, if Supplier discovers and can
                demonstrate that the ICT incident is not attributable to or
                caused by the Lovable Service and/or Supplier, Supplier shall be
                entitled to charge the Customer for any further assistance on a
                time and material basis, on the fees for Consultancy Services as
                agreed in the Agreement.
              </p>

              <p>
                <strong>3.7 Right of termination</strong>
              </p>
              <p>
                <strong>3.7.1</strong> Provisions on the right of termination
                and the associated minimum notice period for termination are
                described in the Agreement.
              </p>
              <p>
                <strong>3.7.2</strong> In addition to the Customer's other
                rights under the Agreement, the Customer has the right to
                terminate the Agreement (or parts of the Agreement, as the case
                may be) at any time if:
              </p>
              <ul>
                <li>
                  (a) Supplier is in material breach of any laws or regulations
                  applicable to Supplier relating specifically to the provision
                  of the Lovable Services (i.e. not in relation to general laws
                  and regulations applicable to Supplier as a company);
                </li>
                <li>
                  (b) circumstances have been identified during the monitoring
                  of ICT third-party risks that the Customer reasonably deems
                  could alter the performance of the functions provided by the
                  Agreement, including material changes affecting the Agreement
                  or the situation of Supplier;
                </li>
                <li>
                  (c) there are evidenced weaknesses in Supplier's overall ICT
                  risk management, such as the way in which Supplier ensures the
                  availability, authenticity, integrity and confidentiality of
                  personal data or other data;
                </li>
                <li>
                  (d) Supplier implements material changes to subcontracted
                  Lovable Services subject to what is set out in Section 3.2.2;
                  or
                </li>
                <li>
                  (e) the competent authority can no longer effectively
                  supervise the Customer as a result of the terms or
                  circumstances related to the Agreement.
                </li>
              </ul>
              <p>
                <strong>3.7.3</strong> For avoidance of doubt, it is noted that
                any circumstance that gives rise to a right of termination
                pursuant to Section 3.7.2 shall not be construed as a breach of
                contract on the part of Supplier unless such circumstance is a
                breach of an express obligation on Supplier as set out in this
                Addendum.
              </p>
              <p>
                <strong>3.7.4</strong> If the Customer exercises its right to
                terminate the Agreement pursuant to Section 3.7.2 (b), (c) or
                (e), Customer shall not be entitled to any refunds of any
                pre-paid Annual Subscription Fees related to the then-current
                Subscription Period.
              </p>

              <p>
                <strong>3.8 Training and awareness</strong>
              </p>
              <p>
                <strong>3.8.1</strong> Supplier shall, against compensation as
                set out in Section 4.1, in accordance with the Customer's
                additional instructions, participate in the Customer's ICT
                security awareness programme and digital operational resilience
                training.
              </p>
              <p>
                <strong>3.8.2</strong> The foregoing shall be limited to
                personnel at Supplier that are directly involved in the
                provision of the Lovable Services to Customer and participation
                in Customer's ICT security awareness programme and digital
                operational resilience training shall not be required more than
                once per year.
              </p>
              <p>
                <strong>3.8.3</strong> If participation at Customer's ICT
                security awareness programme and digital operational resilience
                training requires travel, Customer shall compensate Supplier for
                all costs and expenses related to such travel. Moreover,
                Supplier shall be entitled to charge Customer for the travel
                time by the hour on Supplier's fees for Consultancy Services.
              </p>

              <p>
                <strong>3.9 Cooperation with authorities</strong>
              </p>
              <p>
                Supplier is required to cooperate fully with the competent
                authorities of Customer, including persons designated by them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Compensation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>4.1</strong> In the event that the obligations in this
                Addendum require Supplier to take measures or carry out tasks
                which are specifically requested by the Customer and which
                Supplier would not otherwise have had to carry out – in other
                words, measures and tasks due to specific requests, instructions
                and/or requirements from the Customer, such as participating in
                threat-led penetration testing, providing incident assistance or
                adhering to specific instructions by Customer and which are not
                already implemented by Supplier – then Supplier shall be
                entitled to charge any reasonable additional costs caused by
                such measures and tasks to the Customer on a time and material
                basis based on Supplier's fees for Consultancy Services.
              </p>
              <p>
                <strong>4.2</strong> Incidents on the part of Supplier (or its
                sub-processors) shall not be separately chargeable measures.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Miscellaneous</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>5.1</strong> Except as expressly provided herein, the
                Parties agree that the Agreement shall remain in effect on
                unchanged terms and that this Addendum shall apply as an
                integral part of the Agreement.
              </p>
              <p>
                <strong>5.2</strong> Amendments and additions to this Addendum,
                including provisions of the Agreement to which this Addendum
                refers, shall be in writing and signed by the Parties to be
                effective.
              </p>
              <p>
                <strong>5.3</strong> This Addendum forms an integral part of the
                Agreement and shall terminate on the termination date of the
                Agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>6.1</strong> The provisions in the Agreement relating to
                governing law and disputes shall apply to this Addendum.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default PrivacyPolicy;
