import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Database } from "lucide-react";
const DataProcessingAgreement = () => {
  return <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Database className="h-4 w-4" />
            <span>GDPR Compliance</span>
          </div>
          <h1 className="text-4xl font-medium text-foreground">
            Data Processing Agreement
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0     text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 1, 2025</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Enterprise DPA</span>
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
                <strong>1.1</strong> This DPA is applicable between the Customer
                and Lovable in relation to Lovable's processing of personal data
                within the scope of the provision of the Lovable Services, as
                ordered by the Customer under an Order Form.
              </p>

              <p>
                <strong>1.2</strong> By executing an Order Form that references
                this DPA, the Customer agrees to the terms and conditions set
                out herein and that this DPA shall form an integrated part of
                the Agreement.
              </p>

              <p>
                <strong>1.3</strong> If any provision of this DPA is found by
                any court of competent jurisdiction to be invalid or
                unenforceable, the invalidity of such provision shall not affect
                the other provisions hereof, and all provisions not affected by
                such invalidity shall remain in full force and effect.
              </p>

              <p>
                <strong>1.4</strong> Unless otherwise agreed between the
                Parties, this DPA shall not be applicable between the Parties if
                the Customer is a non-EU or non-UK entity without any EU or UK
                based Affiliates that will use the Lovable Services and the
                contracting Lovable entity (as set out in the Order Form) is a
                non-EU or non-UK Lovable entity.
              </p>

              <p>
                <strong>1.5</strong> It is acknowledged and agreed that with
                regard to processing of personal data under this DPA, the
                Customer is the controller (for its own part and on behalf of
                its Affiliates, as the case may be), and Lovable is the
                processor for such processing.
              </p>

              <p>
                <strong>1.6</strong> The duration, nature and purpose of the
                processing, the types of personal data and categories of data
                subjects processed under this DPA are specified in Annex 1
                hereto, as may be updated by the Parties as applicable from time
                to time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Definitions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Capitalized terms used in this DPA shall have the meaning
                assigned to them in the General Terms and Conditions, unless the
                context requires otherwise. In addition to the definitions under
                the General Terms and Conditions, the below terms shall have the
                following meaning:
              </p>

              <p>
                <strong>"Applicable Data Protection Laws"</strong> means all EU
                and relevant member state legislation and regulations, including
                regulations and decisions issued by relevant supervisory
                authorities, protecting the fundamental rights and freedoms of
                individuals and, in particular, their right to privacy with
                respect to the processing of personal data that from time to
                time apply to Lovable and the Customer, including without
                limitation the GDPR, including any future interpretations
                thereof in court precedence from the EU Court of Justice or any
                other authorized court or supervisory authority.
              </p>

              <p>
                <strong>"DPA"</strong> means this data processing agreement and
                the appendices attached hereto (as amended from time to time in
                accordance herewith).
              </p>

              <p>
                <strong>"GDPR"</strong> means Regulation (EU) 2016/679 of the
                European Parliament and of the Council of 27 April 2016 on the
                protection of natural persons with regard to the processing of
                personal data and on the free movement of such data, and
                repealing Directive 95/46/EC (General Data Protection
                Regulation). If the Customer is a UK entity, any reference to
                the "GDPR" shall be interpreted to include a reference to the UK
                GDPR.
              </p>

              <p>
                <strong>"Sub-processor"</strong> means any processor engaged by
                Lovable, by an Affiliate of Lovable or by another Sub-processor,
                including Affiliates of Lovable acting as processors (as the
                case may be).
              </p>

              <p>
                <strong>"Standard Contractual Clauses"</strong> or sometimes
                also referred to the "EU Model Clauses" means the standard
                contractual clauses for the transfer of personal data to third
                countries pursuant to the Regulation (EU) 2016/679 of the
                European Parliament and of the Council, based on the Commission
                Decision (EU) 2021/914 of 4th June 2021.
              </p>

              <p>
                The terms "controller", "processor", "data subject",
                "processing", "personal data", and "personal data breach", shall
                have the same meanings as set out in article 4 of the GDPR.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Customer Obligations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>3.1</strong> Except as may be otherwise required under
                the Applicable Data Protection Law, the Customer shall, on
                behalf of any Affiliate, serve as a single point of contact for
                Lovable in all matters under this DPA and shall be responsible
                for the internal coordination, review and submission of
                instructions or requests to Lovable as well as the onward
                distribution of any information, notifications and reports
                provided by Lovable hereunder.
              </p>

              <p>
                <strong>3.2</strong> In its capacity as controller the Customer
                confirms (for its own part and/or on behalf of its Affiliates,
                as the case may be) that it is entitled to provide access to
                personal data to Lovable for the purposes hereof and,
                consequently, that it has a lawful basis and any necessary
                approvals from any relevant data subjects for Lovable's
                performance of the Lovable Services.
              </p>

              <p>
                <strong>3.3</strong> The Customer shall have sole responsibility
                for the accuracy, quality, and legality of personal data and the
                means by which the Customer acquired personal data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Lovable's Obligations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>4.1</strong> Lovable shall process personal data
                hereunder solely in accordance with the documented instructions
                of the Customer, for the following limited purposes:
              </p>
              <ul>
                <li>
                  (a) performance of the Lovable Services under the terms of the
                  Agreement;
                </li>
                <li>
                  (b) where applicable depending on the Lovable Services
                  provided to the Customer under the Agreement, setting up,
                  operating, and monitoring the underlying infrastructure
                  (hardware, software, servers, environments, connectivity, etc)
                  required to provide the Lovable Services to the Customer and
                  to meet the technical, security and organizational
                  requirements for the processing of the personal data in
                  connection therewith;
                </li>
                <li>
                  (c) processing initiated by authorized users of the Customer
                  in their use of the Lovable Services;
                </li>
                <li>
                  (d) executing documented instructions of the Customer provided
                  such instructions relate to and are consistent with the
                  Lovable Services;
                </li>
                <li>
                  (e) addressing service issues or technical problems; and/or
                </li>
                <li>
                  (f) meeting any express requirement under the Applicable Data
                  Protection Laws, in which case Lovable shall, unless it is
                  prohibited by applicable laws from doing so, inform the
                  Customer of that legal requirement before processing.
                </li>
              </ul>

              <p>
                <strong>4.2</strong> Lovable is prohibited from processing the
                Customer's personal data for Lovable's own purposes unless the
                Customer has provided its approval for such processing or if
                Lovable is required to process the personal data by virtue of
                applicable laws, in which case Lovable will be the controller
                for such processing.
              </p>

              <p>
                <strong>4.3</strong> Lovable will report to the Customer without
                undue delay any request, demand or order received by Lovable
                from a competent supervisory authority or a data subject
                relating to the processing of personal data on the Customer's
                behalf.
              </p>

              <p>
                <strong>4.4</strong> Taking into account the nature of the
                processing, Lovable will assist the Customer in complying with
                its obligation to respond to requests of data subjects under
                Applicable Data Protection Laws (including requests for
                exercising data subjects' rights under the Applicable Data
                Protection Law) by appropriate technical and organizational
                measures, insofar as this is possible provided that Lovable will
                provide such assistance to the extent:
              </p>
              <ul>
                <li>
                  (a) the information is available to Lovable, and such
                  information is not otherwise available to the Customer or the
                  requested assistance cannot practicably be performed by the
                  Customer;
                </li>
                <li>
                  (b) the Customer acknowledges that Lovable has no
                  responsibility to interact directly with any data subject or
                  supervisory authority in respect of any request, demand or
                  order (except as expressly provided under the Applicable Data
                  Protection Law or as otherwise agreed by the Parties in
                  writing); and
                </li>
                <li>
                  (c) to the extent legally permitted, the Customer shall be
                  responsible for any costs arising from Lovable's provision of
                  such assistance.
                </li>
              </ul>

              <p>
                <strong>4.5</strong> Subject to applicable legal retention
                obligations, upon termination of the Agreement Lovable will
                return to the Customer or delete any personal data that has been
                processed on the Customer's behalf under this DPA. If the
                Customer has not instructed Lovable whether the personal data
                should be returned or deleted within fourteen (14) calendar days
                from termination of the Agreement, Lovable is entitled to delete
                the personal data.
              </p>

              <p>
                <strong>4.6</strong> Lovable will only rely on personnel in the
                processing of personal data who are contractually or by
                statutory obligation bound to maintain confidentiality, ensure
                that access to personal data processed is limited to those
                personnel who require such access to perform the applicable
                Lovable Services, and take commercially reasonable steps to
                ensure the reliability of personnel engaged in the processing of
                personal data hereunder.
              </p>

              <p>
                <strong>4.7</strong> Lovable will promptly inform the Customer
                if, in its opinion, any instruction or request violates
                Applicable Data Protection Law, and Lovable disclaims any
                obligation or liability with regard to any such instructions or
                requests.
              </p>

              <p>
                <strong>4.8</strong> The Customer may request Lovable to provide
                assistance if the Customer is carrying out a data protection
                impact assessment. Such assistance will in such case consist of
                Lovable providing relevant information to the Customer regarding
                the personal data processed in the Lovable Services. Lovable
                shall be entitled to charge the Customer its Professional
                Services Fees on a time and material basis for such assistance.
              </p>

              <p>
                <strong>4.9</strong> The Customer accepts that any requests for
                information, assistance or activities beyond Lovable's ordinary
                course of business, routines or practices, or what is otherwise
                commercially reasonable, shall be specifically agreed in an
                Order Form and may be subject to additional fees and charges.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                In connection with its processing of personal data hereunder
                Lovable will provide for and maintain appropriate
                administrative, physical, technical and organizational security
                measures for such processing, which are intended to protect
                personal data against accidental or unauthorized loss,
                destruction, alteration, disclosure or access, and to ensure a
                level of security appropriate to the particular risks involved
                in the processing. In this connection:
              </p>
              <ul>
                <li>
                  (a) it is acknowledged that further details on the
                  administrative, physical, technical and organizational
                  security measures that will be implemented and maintained by
                  Lovable in processing the personal data are described or
                  referred to in Annex 1 hereto; and
                </li>
                <li>
                  (b) Lovable will not materially decrease the overall security
                  of any Lovable Services with respect to processing of personal
                  data.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Personal Data Breach</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>6.1</strong> Lovable will inform the Customer without
                undue delay after it becomes aware of any personal data breach
                in connection with the processing of personal data under this
                DPA, observing the following process:
              </p>
              <ul>
                <li>
                  (a) Lovable will investigate the personal data breach and take
                  reasonable measures to identify its root cause(s) and, where
                  such breach is caused by Lovable or a Lovable Sub-processor;
                </li>
                <li>
                  (b) as information is collected or otherwise becomes
                  available, to the extent legally permitted, Lovable will
                  provide the Customer with a description of the personal data
                  breach, the type of the data to which the breach relates, and,
                  other information the Customer may reasonably request
                  concerning the affected data subject(s) where such information
                  is available to Lovable; and
                </li>
                <li>
                  (c) the Parties agree to coordinate in good faith on
                  developing the content of any related public statements or any
                  required notices for the affected data subject(s) and/or the
                  competent supervisory authorities.
                </li>
              </ul>

              <p>
                <strong>6.2</strong> The obligations set out above will not
                apply, to the extent that the personal data breach is caused by
                the Customer, the Customer's Affiliate or anyone acting for the
                Customer, save that Lovable will inform the Customer of the
                personal data breach and provide information it discovers up to
                the stage it identifies the breach is caused by the Customer,
                the Customer's Affiliate or anyone acting for the Customer.
                Lovable may charge the Customer for any assistance that the
                Customer may request when a personal data breach is attributable
                to or caused by the Customer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Audits</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Lovable shall upon the Customer's request, make all necessary
                information available to demonstrate compliance hereof and allow
                for audits, including inspections, to be performed by the
                Customer (or an independent third-party auditor mandated by the
                Customer that is reasonably acceptable to Lovable and subject to
                signature of a confidentiality agreement with Lovable) of
                Lovable relevant to the personal data processed under this DPA.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Sub-processors</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>8.1</strong> Lovable may delegate the processing of
                personal data to a Sub-processor. Lovable shall ensure that
                Lovable has concluded a data processing agreement with such
                Sub-processor on terms equivalent to and not less restrictive
                than the provisions in this DPA. Moreover, Lovable shall remain
                fully liable for the conduct of any of its Sub-processors as for
                its own conduct.
              </p>

              <p>
                <strong>8.2</strong> Subject to Section 8.1, the Customer hereby
                gives its general written consent and authorization to Lovable
                to use Sub-processors for processing of personal data solely for
                the purposes set forth in this DPA. The current list of Lovable
                Sub-processors is available at GDPR-Sub-Processors - Lovable
                Software ("Sub-processor List"). Lovable shall update the
                Sub-processor List before authorizing any new Sub-processor(s)
                to process personal data in connection with the provision of the
                Lovable Services.
              </p>

              <p>
                <strong>8.3</strong> The Customer may object to Lovable's use of
                a new Sub-processor by notifying Lovable in writing within ten
                (10) Business Days from when the Sub-processor List was updated.
                In the event the Customer objects to a new Sub-processor,
                Lovable will use commercially reasonable efforts to provide the
                Lovable Services without engaging the Sub-processor subject to
                the objection. If such work-around is not possible, the Customer
                shall be entitled to terminate the relevant Lovable Service. In
                the event of such termination, the Customer shall not be
                entitled to any refund of any fees paid to Lovable within the
                scope of the Agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>9.1</strong> The Parties liability with respect to data
                subjects' claims for compensation shall be handled in accordance
                with article 82 of the GDPR.
              </p>

              <p>
                <strong>9.2</strong> The Parties acknowledge and agree that
                neither Party shall have an obligation to indemnify the other
                Party for any administrative fines imposed by a supervisory
                authority or a court under Applicable Data Protection
                Legislation.
              </p>

              <p>
                <strong>9.3</strong> For the purposes of Section 9.2 above, both
                Parties shall, to a reasonable extent, provide information to
                the other Party which may be useful within the scope of a
                supervisory matter or a court proceeding.
              </p>

              <p>
                <strong>9.4</strong> Without prejudice to the foregoing, the
                Parties' liability under this DPA shall be limited in accordance
                with the provisions of the General Terms and Conditions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Transfer of Personal Data</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>10.1</strong> The Customer acknowledges and agrees that
                Lovable is only entitled to transfer personal data to a country
                located outside the EU/EEA under the following circumstances:
              </p>
              <ul>
                <li>
                  (a) the country is subject to an adequacy decision made by the
                  European Commission, or, in the absence of an adequacy
                  decision;
                </li>
                <li>
                  (b) Lovable has taken measures to ensure that the transfer is
                  lawful, e.g. by ensuring that there is a transfer mechanism in
                  place subject to article 46 GDPR or a specific derogation
                  according to article 49 GDPR.
                </li>
              </ul>

              <p>
                <strong>10.2</strong> Where personal data is transferred outside
                the EU/EEA on the basis of a transfer mechanism under article 46
                GDPR, Lovable will conduct a risk analysis in accordance with
                the recommendations 01/2020 and 02/2020 of the European Data
                Protection Board. The Customer is, in accordance with Section 7
                above, entitled to receive information about the result of such
                risk analysis.
              </p>

              <p>
                <strong>10.3</strong> The Sub-processor List includes
                information about any potential third-country transfers made by
                Lovable within the scope of the Agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Annex 1 - Description of Processing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4>1. LOVABLE.DEV</h4>
              <p>
                The following description of processing relates to Customer's
                that are using Lovable.dev.
              </p>

              <div className="bg-muted p-4 rounded-lg space-y-4">
                <div>
                  <p className="font-medium">Description of processing</p>
                  <p>Lovable.dev is an AI-powered app builder that's designed to revolutionize how we approach software development. The processing that will be carried out is to convert the Customer prompts into web apps. Personal data will be processed to a limited extent within the scope of providing implementation services, Consultancy Services and Support Services and only in cases where Lovable needs access to the Customer’s environment (which is only provided upon Customer’s approval). Generally, there will be no need to access any personal data, but in circumstances where said services requires access to a web app built by the customer that includes personal data, processing of data will occur.</p>
                </div>

                <div>
                  <p className="font-medium">Purpose of the processing</p>
                  <p>
                    The purpose of the processing is to be able create apps and
                    speed up the prototyping and development cycles.
                  </p>
                </div>

                <div>
                  <p className="font-medium">Categories of personal data</p>
                  <p>
                    The only Personal data that will be processed is the user
                    information of the Customer's users in Lovable.dev.
                  </p>
                </div>

                <div>
                  <p className="font-medium">Categories of data subjects</p>
                  <p>
                    Generally, persons employed by or representing the Customer.
                  </p>
                </div>

                <div>
                  <p className="font-medium">Retention and erasure</p>
                  <p>
                    Data is stored as long as necessary and will be deleted when
                    requested from Customer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>;
};
export default DataProcessingAgreement;