import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, FileText } from "lucide-react";
const TermsOfService = () => {
  return <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <FileText className="h-4 w-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            General Terms and Conditions
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 1, 2025</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Enterprise Agreement</span>
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
                <strong>1.1</strong> These General Terms and Conditions apply to
                any Lovable Services ordered by the Customer, as set out in the
                applicable Order Form.
              </p>
              <p>
                <strong>1.2</strong> By executing an Order Form that references
                these General Terms and Conditions, the Customer agrees to be
                bound by the terms and conditions set out herein and that these
                General Terms and Conditions shall form an integral part of the
                Agreement. In the event of a conflict or inconsistency between
                any of the Agreement documents, the order of precedence set out
                in the Order Form shall apply.
              </p>
              <p>
                <strong>1.3</strong> Any capitalized terms and expressions used
                in these General Terms and Conditions shall have the meaning
                given to them in the Definitions schedule.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Customer Affiliates</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>2.1</strong> The rights granted to the Customer to use
                the Lovable Services subject to an applicable Order Form shall
                include a right for the Customer's Affiliates to use such
                Lovable Services within the scope of the use restrictions and
                other obligations related to the use of Lovable Services under
                the Agreement.
              </p>
              <p>
                <strong>2.2</strong> Any rights extended to the Customer's
                Affiliates are only available through the Customer (unless, as
                set out in Section 2.4, a Customer Affiliate has executed its
                own Order Form). No right (or any related remedy) shall be
                separately exercised by a Customer Affiliate and all
                limitations, exclusions and disclaimers applicable to the
                Customer shall include the Customer and its Affiliates in the
                aggregate and the Customer shall be liable for all acts and
                omissions of its Affiliates. The Customer shall at all times
                remain as Lovable's sole counterparty with respect to the
                Agreement.
              </p>
              <p>
                <strong>2.3</strong> If any Customer Affiliate would cease to be
                an Affiliate, the right to use the Lovable Services subject to
                this Section 2 shall immediately cease.
              </p>
              <p>
                <strong>2.4</strong> Notwithstanding what is set out in this
                Section 2, nothing shall prevent Customer Affiliate(s) to in
                their own names conclude Order Form(s) for the purchase and use
                of Lovable Services. In such case, the Customer Affiliate shall
                be deemed a "Customer" and have a direct contractual
                relationship with Lovable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Fees, Payments and Price Adjustments</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>3.1</strong> The Customer shall pay the fees set out in
                the Order Form and in accordance with the terms and conditions
                set out in the Agreement.
              </p>
              <p>
                <strong>3.2</strong> Unless otherwise expressly agreed in the
                applicable Order Form, payment obligations are non-cancellable
                and paid fees are non-refundable. Invoices are due thirty (30)
                days from the date of the invoice. All fees are excluding Taxes.
                The Customer is responsible for paying all Taxes applicable at
                the time and associated with its purchases set out in the Order
                Form. If Lovable has the legal obligation to pay or collect
                Taxes for which the Customer is responsible under the Agreement,
                the Customer shall reimburse Lovable for that amount unless the
                Customer provides Lovable with a valid tax exemption certificate
                authorized by the applicable tax authority. If any withholding
                tax is required by law, Customer will gross up the payments so
                that Lovable receives the full fees owed net of such taxes.
                Lovable shall be solely responsible for Taxes assessable against
                Lovable based on its income (other than such withholding Taxes),
                property and employees.
              </p>
              <p>
                <strong>3.3</strong> The Customer shall not be entitled to
                withhold, reduce, set-off or make deductions from any amounts
                due under this Agreement. In the event of late payment, Lovable
                shall be entitled to charge interest corresponding to the higher
                of (i) one (1) percent of the due amount per calendar month, or
                (ii) the maximum amount permitted by applicable law. If
                outstanding fees are more than thirty (30) days overdue, Lovable
                may, without limiting its other rights and remedies, suspend its
                performance under the Agreement and the Customer's access to the
                Lovable Services, provided Lovable during that thirty-day period
                have given the Customer a written reminder and at least ten (10)
                days to remedy the non-payment.
              </p>
              <p>
                <strong>3.4</strong> All fees may be subject to annual
                indexation which shall not exceed five percent (5%). The
                Customer shall, however, not be subject to any annual indexation
                during the Initial Subscription Term.
              </p>
              <p>
                <strong>3.5</strong> Unless otherwise set out in the Order Form,
                Lovable will invoice the first Subscription Fees in connection
                with the signing of the Agreement. Subsequent Subscription Fees
                will be invoiced annually in advance.
              </p>
              <p>
                <strong>3.6</strong> Unless otherwise specified in Product
                Terms, maintenance services including continuous bug fixes,
                error corrections, and rectification of other equivalent defects
                brought to Lovable's attention shall be included in the
                Subscription Fees.
              </p>
              <p>
                <strong>3.7</strong> If Implementation Services are ordered from
                Lovable under the applicable Order Form and unless otherwise is
                set out in the applicable Product Terms, Lovable will invoice
                the fees for Implementation Services after Lovable has completed
                all tasks included in Implementation Services, as agreed in the
                applicable Statement of Work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Volume, Verification and Audit</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>4.1</strong> The Customer agrees that its use of the
                Software Solutions is subject to the Volume set out in the
                applicable Order Form. The Customer further undertakes to inform
                Lovable without undue delay if the Customer's use of the
                Software Solutions exceeds the applicable Volume, or if the
                Customer becomes aware of any such impending overuse.
              </p>
              <p>
                <strong>4.2</strong> The Volume ordered by the Customer may not
                be decreased/scaled down during the Subscription Term.
              </p>
              <p>
                <strong>4.3</strong> Lovable reserves the right to embed a
                reporting mechanism in the Software Solutions to monitor the
                Volume. The reporting mechanism collects usage statistics on an
                aggregated level and does not transmit any technical, production
                or business data that the Customer processes with the Software
                Solutions.
              </p>
              <p>
                <strong>4.4</strong> Subject to Lovable's prior and reasonable
                request, the Customer shall allow Lovable to perform audits not
                more frequent than one (1) time every calendar year in order to
                ensure the Customer's use of the Software Solutions in
                accordance with the Agreement. The Customer shall upon request
                provide Lovable (including its personnel and auditors) with
                reasonable access to operating environments, IT environments,
                personnel and relevant data and material, as required to confirm
                the Customer's compliance with the Agreement. The Customer's
                assistance in connection with the audit shall be provided at no
                charge.
              </p>
              <p>
                <strong>4.5</strong> Notwithstanding the limitation in Section
                4.4, if Lovable has reasonable reason to suspect ongoing
                overuse, Lovable shall be entitled to carry out an audit more
                than once per calendar year.
              </p>
              <p>
                <strong>4.6</strong> Any information and access to be provided
                to external auditors shall be subject to their execution of an
                appropriate non-disclosure agreement.
              </p>
              <p>
                <strong>4.7</strong> The Parties shall bear its respective costs
                related to an audit subject to this Section 4.
              </p>
              <p>
                <strong>4.8</strong> Should Lovable find that the Customer's use
                exceeds agreed Volume, Lovable shall recalculate and increase
                the Subscription Fee in proportion to such overuse, and invoice
                the Customer the delta between (i) the Subscription Fees paid by
                the Customer based on the agreed Volume, and (ii) the increased
                Subscription Fee by virtue of the Customer's actual Volume.
              </p>
              <p>
                <strong>4.9</strong> Further information about usage and metrics
                relating to each Software Solution are available in the Product
                Catalogue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>5.1</strong> For the Subscription Term and for a period
                of five (5) years thereafter, each Party agrees:
              </p>
              <ul>
                <li>
                  (a) to hold all Confidential Information disclosed hereunder
                  to it in confidence and to use at least the same degree of
                  care that it uses to protect its own Confidential Information
                  (but no less than reasonable care);
                </li>
                <li>
                  (b) to use such Confidential Information solely for the
                  purposes of the Agreement; and
                </li>
                <li>
                  (c) not to disclose any such Confidential Information to
                  anyone except its employees, Affiliates, and contractors on a
                  need-to-know basis as required for a Party's fulfilments of
                  its requirements under the Agreement provided that such
                  individuals or entities are subject to obligations of
                  confidentiality no less stringent than those set out herein.
                </li>
              </ul>
              <p>
                <strong>5.2</strong> Each Party shall be liable for the acts and
                omissions of any employees, Affiliates, and contractors as it is
                for its own acts and omissions.
              </p>
              <p>
                <strong>5.3</strong> A Party may disclose Confidential
                Information (i) if approved by the other Party in writing, or
                (ii) to the extent compelled to do so by law (including
                regulations of a recognized stock exchange or multilateral
                trading facility), provided a Party gives the other Party prior
                notice of the compelled disclosure (to the extent legally
                permitted) and reasonable assistance, at the disclosing Party's
                cost, if the disclosing Party wishes to contest the disclosure.
                Moreover, each Party shall be entitled to disclose Confidential
                Information to its professional advisors (meaning any lawyers,
                auditors or accountants, but excluding any other
                sub-contractors, agents or representatives) solely for the
                purposes of receiving advice or services from the relevant
                advisor and provided such advisor(s) comply with equivalent
                confidentiality obligations to those imposed under this
                Agreement.
              </p>
              <p>
                <strong>5.4</strong> The Parties acknowledge that, in addition
                to any other remedies that may be available by law, a Party may
                seek such injunctive relief, specific performance or other
                remedy as may be deemed proper by a court or any other competent
                body.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Liability and Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>6.1</strong> Each Party shall compensate the other Party
                for any damages caused by breach of the Agreement, subject to
                the limitations in this Section 6 or as otherwise set out in the
                Agreement.
              </p>
              <p>
                <strong>6.2</strong> In no event shall a Party, or its
                Affiliates, be liable under or in connection with the Agreement
                for any indirect, consequential, special, exemplary or
                incidental cost, loss or damage, or for any loss of profits,
                revenue, production, business opportunity, or loss of
                anticipated savings, goodwill or reputation, or loss or
                corruption of data, howsoever arising, even though the Parties
                may be aware of the possibility or likelihood of such cost, and
                regardless of the form of action or whether arising in contract,
                tort, negligence, by statute or otherwise.
              </p>
              <p>
                <strong>6.3</strong> Each Party's maximum, cumulative and total
                liability for all obligations and liabilities arising under or
                in connection with the Agreement, whether in contract, tort,
                negligence, by statute or otherwise, shall in no event exceed
                the total Subscription Fee paid by the Customer to Lovable under
                the applicable Order Form in the Contract Year during which the
                claim was made.
              </p>
              <p>
                <strong>6.4</strong> Neither Party excludes or limits its
                liability for (i) gross negligence of wilful misconduct (ii)
                death or personal injury caused by the negligence or wilful
                default of that Party, (iii) a breach of Section 4
                (Confidentiality), (iv) any indemnity obligations set out in the
                Agreement, (v) any unauthorised use of the Lovable Services or
                infringement of Intellectual Property Rights, or (v) any other
                liability which cannot be excluded by law.
              </p>
              <p>
                <strong>6.5</strong> Lovable shall not be in breach of the
                Agreement in respect of any non-performance of any of its
                obligations hereunder if and to the extent such non-performance
                is a consequence of (i) the Customer's failure to comply with
                its obligations under the Agreement or, (ii) a breach by caused
                by any Third Party Software, provided that Lovable uses all
                reasonable endeavours to mitigate the reason for the
                non-performance and to perform the Lovable Services
                notwithstanding the reason for the non-performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Indemnity</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>7.1</strong> Lovable agrees to indemnify the Customer
                against third party claims related to the Customer's use of the
                Lovable Services, or parts thereof, infringes such third party's
                intellectual property rights. Lovable's obligation hereunder is
                subject to the Lovable Services being used in accordance with
                the terms and conditions set out in this Agreement and the
                conditions set out in this section 7. For the avoidance of
                doubt, the indemnity in this section 7 shall not apply to any
                Third-Party Software.
              </p>
              <p>
                <strong>7.2</strong> Lovable's obligation to indemnify the
                Customer under this section 7 shall only apply provided that the
                Customer i) promptly notifies Lovable in writing of the claims
                brought against the Customer, ii) allows Lovable the sole
                control of the defense and to solely decide on all related
                settlement negotiations, and iii) acts in accordance with
                Lovable's reasonable instructions and cooperates and assists
                Lovable to the extent reasonably requested by Lovable.
              </p>
              <p>
                <strong>7.3</strong> Subject to sections 7.1 and 7.2, Lovable
                shall indemnify the Customer for such damages, liabilities,
                costs or expenses as are awarded in a final judgement or in a
                settlement.
              </p>
              <p>
                <strong>7.4</strong> If the Lovable Services infringes third
                party intellectual property rights and the use of the Lovable
                Services is prevented or restricted by virtue of such
                infringement, Lovable shall at its own expense and option:
              </p>
              <ul>
                <li>
                  (a) Procure the licenses necessary for the Customer's
                  continued use of the affected Lovable Services;
                </li>
                <li>
                  (b) Replace the infringing Lovable Service or parts thereof
                  with equivalent software;
                </li>
                <li>
                  (c) Amend the Lovable Service in a way that the Lovable
                  Service ceases to infringe third party intellectual property
                  rights; or
                </li>
                <li>
                  (d) If neither of the above listed options are possible,
                  terminate the Agreement with immediate effect and refund any
                  prepaid fees.
                </li>
              </ul>
              <p>
                <strong>7.5</strong> This section 7 constitutes the entire
                liability of Lovable, and the Customer's sole and exclusive
                remedy, with respect to any third-party claims of infringement
                of intellectual property.
              </p>
              <p>
                <strong>7.6</strong> The Customer shall fully indemnify and hold
                Lovable, its Affiliates, and each of their directors, officers,
                agents, and representatives harmless from and against any and
                all damages, costs and expenses (including reasonable fees of
                attorneys and other professionals) arising from any third-party
                claims related to the Customer's infringement of such
                third-party's intellectual property rights, including any
                infringements related to the intellectual property rights in
                Third-Party Software.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Technical Requirements</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                The Customer acknowledges that Lovable's delivery of a Software
                Solution may be dependent on the Customer's compliance with the
                technical requirements set out in the Product Catalogue for each
                Software Solution.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. No Warranty for Third-Party Software</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>9.1</strong> Subject to what is set out in any Product
                Terms relating to Third-Party Software, the Customer
                acknowledges that each Third-Party Software is a standard
                product and is delivered "as is" and Lovable leaves no
                warranties or representations, whether expressed or implied to
                the Customer with regard to the Third-Party Software and
                expressly disclaims any liability, including but not limited to,
                functionality, fitness for purpose, loss of data, availability
                or freedom from errors and bugs.
              </p>
              <p>
                <strong>9.2</strong> Lovable does not warrant that any
                Third-Party Software will function together with any third-party
                products. Moreover, Lovable disclaims all liability for any
                harm, damages or other liability caused by any third-party
                product used in connection with the Third-Party Software.
              </p>
              <p>
                <strong>9.3</strong> The Customer acknowledges that the
                applicable Product Terms for Third-Party Software may include
                limited warranties and representations provided by the
                Third-Party Software Vendor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Term and Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>10.1</strong> The Agreement shall apply for as long as
                the Customer has a valid subscription or an ongoing Consultancy
                Service under an applicable Order Form. The Subscription Term
                for each Lovable Service ordered are set out in the applicable
                Order Form.
              </p>
              <p>
                <strong>10.2</strong> Unless terminated by Lovable or the
                Customer giving at least three (3) months written notice to the
                other Party prior to the end of each Initial Subscription Term,
                the subscription for the relevant Software Solution shall be
                prolonged automatically for consecutive periods of twelve (12)
                months each (an Extended Subscription Term). Termination of an
                Extended Subscription Term must be made at latest three (3)
                months prior to the end of the then current Extended
                Subscription Term. If not terminated within three (3) months
                prior to the end of the then current Extended Subscription Term,
                the subscription will be automatically prolonged for new
                Extended Subscription Term until terminated in accordance with
                the Agreement.
              </p>
              <p>
                <strong>10.3</strong> The term for Consultancy Services are set
                out in the Consultancy Services Terms or the relevant Statement
                of Work.
              </p>
              <p>
                <strong>10.4</strong> Either Party may terminate the Agreement,
                or parts thereof, if:
              </p>
              <ul>
                <li>
                  (a) the other Party commits or permits a material breach of
                  the Agreement (including failure to pay) and the other Party
                  fails to cure such breach, if the breach is capable of cure,
                  within thirty (30) days of receipt of written notice from the
                  terminating Party giving details of such breach; or
                </li>
                <li>
                  (b) if the other Party is subject to an Insolvency Event.
                </li>
              </ul>
              <p>
                <strong>10.5</strong> The Customer acknowledges that Lovable may
                rely on third-party products and services (such as Third-Party
                Software) to provide Lovable Services. To the extent the
                relevant third-party supplier no longer provides such
                third-party products and services to Lovable, for whatever
                reason, and Lovable cannot reasonably find a suitable
                replacement provider, Lovable shall be entitled to terminate the
                affected Lovable Service with immediate effect.
              </p>
              <p>
                <strong>10.6</strong> Termination does not release either Party
                from any liability which, at the time of such termination, had
                already accrued to the other Party or which is attributable to a
                period prior to such termination, nor preclude either Party from
                pursuing any rights or remedies it may have pursuant to the
                terms of the Agreement with respect to any breach of the
                Agreement. Termination or expiration shall not relieve the
                Customer of its obligation to pay all fees that have accrued
                prior to the Effective Date of such termination or expiration or
                are otherwise payable to Lovable under the Agreement.
              </p>
              <p>
                <strong>10.7</strong> Any work that may require the Customer to
                engage Lovable in connection with termination or expiry of the
                Agreement, e.g. to conduct certain de-installation,
                modifications or other termination activities related to the
                Software or parts thereof affected by such termination, such as
                migration or other transition services, shall be ordered as
                Consultancy Services.
              </p>
              <p>
                <strong>10.8</strong> If the Agreement is terminated by virtue
                of Lovable's material breach pursuant to Section 9.4(a), the
                Customer shall be entitled refund for any fees already paid by
                Customer, for Services not delivered by the time of termination,
                including without limitation, the pro-rata portion of the Annual
                Subscription Fee.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Miscellaneous</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>11.1 Notice</strong>
              </p>
              <p>
                Except as otherwise specified in this Agreement, all notices
                related to this Agreement shall be in writing and shall be
                effective upon (i) personal delivery, (ii) the fourth Business
                Day after mailing, or (iii) the day of sending by email to each
                Party's designated contact set out in the applicable Order Form,
                or that otherwise has been communicated to and confirmed by
                Lovable. Billing-related notices to the Customer shall be
                addressed to the relevant billing contact designated by the
                Customer in the applicable Order Form. All other notices to the
                Customer shall be addressed to the relevant role/individual
                designated by the Customer.
              </p>
              <p>
                <strong>11.2 Publicity</strong>
              </p>
              <p>
                Lovable or its Affiliates may publicly identify the Customer as
                a customer, using the Customer's name and logo, including in
                presentations, marketing materials and on its website and social
                media. Lovable may issue a press release announcing the
                Customer's selection of the Lovable Services, the text of which
                shall be subject to the Customer's prior written approval, not
                to be unreasonably withheld or delayed.
              </p>
              <p>
                <strong>11.3 Assignment</strong>
              </p>
              <p>
                The Customer may, with the prior written consent of Lovable,
                transfer or assign the Agreement (such consent not being
                unreasonably withheld or delayed). Any assignment or transfer
                attempted without the written consent of Lovable shall be null
                and void. Lovable may assign, in whole or in part, the
                Agreement, to any Lovable Affiliate subject to providing the
                Customer with prior written notice. The Agreement shall inure to
                the benefit of, and be binding upon, the Parties and their
                respective successors and permitted assignees.
              </p>
              <p>
                <strong>11.4 Subcontractors</strong>
              </p>
              <p>
                Lovable may engage subcontractors for the performance, in whole
                or in part, of any work under the Agreement. Lovable shall be
                responsible for such subcontractor's work as if it were its own
                personnel.
              </p>
              <p>
                <strong>11.5 Force Majeure</strong>
              </p>
              <p>
                Neither Party shall be responsible or liable for delays,
                business interruption, or failure of performance (except
                obligations to pay) to the extent resulting from a Force Majeure
                Event. A Party experiencing such Force Majeure Event shall
                notify the other Party as soon as possible under the
                circumstances and take commercially reasonable steps to mitigate
                the effect of the Force Majeure Event.
              </p>
              <p>
                <strong>11.6 Entire Agreement</strong>
              </p>
              <p>
                The Agreement shall be the entire agreement between the Parties
                regarding its subject matter, and shall supersede all other
                representations, understandings, or agreements, whether oral or
                written, between the Parties relating to such subject matter.
                What is set out in this Section 10.6 shall not apply with
                respect to provisions, set out in an Order Form not forming part
                of the Agreement, that the Parties expressly have agreed shall
                apply to this Agreement.
              </p>
              <p>
                <strong>11.7 Waiver</strong>
              </p>
              <p>
                No failure or delay by either Party in exercising any right
                under this Agreement shall constitute a waiver of that right.
              </p>
              <p>
                <strong>11.8 Survival and severability</strong>
              </p>
              <p>Sections 3 (Fees and payments), 5 (Confidentiality), and 6 (Liability and limitations of liability), and any other provisions which, in order to give effect to its meaning, needs or is intended to survive termination or expiration, shall remain in full force and effect until they are satisfied or by their nature expire. If any provision of the Agreement is held by a court of competent jurisdiction to be contrary to law, the provision shall be deemed null and void, and the remaining provisions of the Agreement shall remain in effect.</p>
              <p>
                <strong>11.9 Relationship of the Parties</strong>
              </p>
              <p>
                The Parties are independent contractors. This Agreement does not
                create a partnership, franchise, joint venture, agency,
                fiduciary or employment relationship between the Parties.
                Neither Party is the representative of the other Party for any
                purpose and neither has power or authority to act as agent or
                employee or to represent, act for, bind, or otherwise create or
                incur any obligation on behalf of the other Party.
              </p>
              <p>
                <strong>
                  11.10 Lovable Entity, governing law, dispute resolution and
                  notice
                </strong>
              </p>
              <p>
                The Lovable Entity entering into this Agreement, the address to
                which the Customer should direct notices under this Agreement,
                the governing law that shall apply to any dispute, controversy
                or claim arising out of or in connection with the Agreement and
                the applicable dispute resolution clause is set out in this
                Section 11.10 in the table below.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p>
                    <strong>Lovable Entity:</strong> Lovable Labs Inc.
                  </p>
                  <p>
                    <strong>Address for Notices:</strong> 1111b South Governors
                    Avenue, Dover, DE 19904
                  </p>
                  <p>
                    <strong>Governing law:</strong> This Agreement shall be
                    governed by and construed in accordance with the substantive
                    laws of Delaware without regard to its choice of law
                    principles.
                  </p>
                  <p>
                    <strong>Applicable dispute resolution clause:</strong>
                  </p>
                  <p>
                    a) Except as set forth in b) below, any legal suit, action,
                    or proceeding arising out of or related to this Agreement or
                    the licenses granted hereunder shall be instituted
                    exclusively in the federal courts of the United States or
                    the courts of the State of Delaware in each case located in
                    the City of Dover and the County of Kent, and each Party
                    irrevocably submits to the exclusive jurisdiction of such
                    courts in any such suit, action, or proceeding.
                  </p>
                  <p>
                    b) Any dispute, claim or controversy arising out of or
                    relating to this Agreement or the breach, termination,
                    enforcement, interpretation or validity thereof, including
                    the determination of the scope or applicability of this
                    Agreement to arbitrate, shall be determined by arbitration
                    in the State of Delaware before one arbitrator. The
                    arbitration shall be administered by JAMS pursuant to its
                    Comprehensive Arbitration Rules and Procedures and in
                    accordance with the Expedited Procedures in those Rules or
                    pursuant to JAMS' Streamlined Arbitration Rules and
                    Procedures. Judgment on the Award may be entered in any
                    court having jurisdiction. This clause shall not preclude
                    Parties from seeking provisional remedies in aid of
                    arbitration from a court of appropriate jurisdiction (as set
                    forth in a) above).
                  </p>
                  <p>
                    The Parties undertake to procure that all litigation
                    proceedings conducted in accordance with the Agreement shall
                    be kept confidential. This undertaking shall cover, inter
                    alia, all information disclosed during the course of such
                    proceedings, as well as any decision or award made or
                    declared by the arbitral tribunal, which in each case shall
                    be deemed to constitute Confidential Information.
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <strong>Lovable Entity:</strong> Lovable Labs AB
                  </p>
                  <p>
                    <strong>Address for Notices:</strong> Box 190, 101 23
                    Stockholm, Sweden
                  </p>
                  <p>
                    <strong>Governing law:</strong> This Agreement shall be
                    governed by and construed in accordance with the substantive
                    laws of Sweden without regard to its choice of law
                    principles.
                  </p>
                  <p>
                    <strong>Applicable dispute resolution clause:</strong> Any
                    dispute, controversy or claim arising out of or in
                    connection with this Agreement, or the breach, termination
                    or invalidity thereof, shall be finally settled by
                    arbitration administered by the Arbitration Institute of the
                    Stockholm Chamber of Commerce (the "SCC"). The Rules for
                    Expedited Arbitrations shall apply, unless the SCC in its
                    discretion determines, considering the complexity of the
                    case, the amount in dispute and other circumstances, that
                    the Arbitration Rules shall apply. In the latter case, the
                    SCC shall also decide whether the Arbitral Tribunal shall be
                    composed of one or three arbitrators.
                  </p>
                  <p>
                    The Parties undertake to procure that all litigation
                    proceedings conducted in accordance with the Agreement shall
                    be kept confidential. This undertaking shall cover, inter
                    alia, all information disclosed during the course of such
                    proceedings, as well as any decision or award made or
                    declared by the arbitral tribunal, which in each case shall
                    be deemed to constitute Confidential Information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>;
};
export default TermsOfService;