import Layout from "@/components/Layout";
import { Building, Calendar, Settings } from "lucide-react";

const ProductTerms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Settings className="h-4 w-4" />
            <span>Product Terms</span>
          </div>
          <h1 className="text-4xl font-medium text-foreground">
            Product Terms
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: May 2025</span>
            </div>
            <span className="hidden md:flex">•</span>
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Service Agreement</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border p-8 space-y-6">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              PRODUCT TERMS
            </h2>
            <p className="text-lg font-medium mb-6">Lovable.dev</p>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  1 LOVABLE.DEV SERVICE TERMS AND CONDITIONS
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>1.1</strong> These Product Terms apply to the
                    Customer's use of Lovable's AI software developer platform
                    to build web apps using natural language (collectively the
                    "Lovable.dev Services").
                  </p>
                  <p>
                    <strong>1.2</strong> By executing an Order Form for the
                    Lovable.dev Services, the Customer agrees to be bound by the
                    terms and conditions set out herein and that these Product
                    Terms shall form an integral part of the Agreement. In the
                    event of a conflict or inconsistency between any of the
                    Agreement documents, the order of precedence set out in the
                    Order Form shall apply.
                  </p>
                  <p>
                    <strong>1.3</strong> Unless otherwise set out in these
                    Product Terms, any capitalized terms and expressions used in
                    these General Terms and Conditions shall have the meaning
                    given to them in the Definitions schedule.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  2 SERVICE DESCRIPTION
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>2.1</strong> Lovable provides Customer access to
                    Lovable.dev Services an AI software developer platform to
                    build web apps using natural language, as further described
                    in the Product Catalogue.
                  </p>

                  <h4 className="text-lg font-medium text-foreground mt-4 mb-2">
                    2.2 License and Use
                  </h4>
                  <p>
                    <strong>2.2.1</strong> Lovable grants the Customer a
                    limited, non-exclusive, non-transferable right to access and
                    use the Lovable.dev Services in accordance with the
                    Agreement.
                  </p>
                  <p>
                    <strong>2.2.2</strong> The Customer may use the Lovable.dev
                    Services solely for its internal business purposes and in
                    compliance with applicable laws and regulations.
                  </p>
                  <p>
                    <strong>2.2.3</strong> The Customer agrees not to use the
                    Lovable.dev Services for any unlawful, unauthorized, or
                    fraudulent purposes, or in any manner that would cause
                    disruption or otherwise interfere with the Lovable.dev
                    Services.
                  </p>

                  <h4 className="text-lg font-medium text-foreground mt-4 mb-2">
                    2.3 Customer Responsibilities
                  </h4>
                  <p>
                    <strong>2.4</strong> The Customer is fully responsible for
                    all activities conducted by or on its behalf using the
                    Lovable.dev Services and shall at all times comply with
                    applicable laws and regulations.
                  </p>
                  <p>
                    <strong>2.5</strong> The Customer acknowledges that Lovable
                    may, without limiting any other available rights or
                    remedies, block the Customer's access to the Lovable.dev
                    Services in case of fraud, spam or other criminal or
                    malicious acts by or on behalf of the Customer.
                  </p>
                  <p>
                    <strong>2.6</strong> The Customer is not allowed to permit
                    third parties, other than the authorized users, to use or
                    take advantage of the Lovable.dev Services or parts thereof.
                  </p>
                  <p>
                    <strong>2.7</strong> When using the Lovable.dev Services,
                    the Customer shall comply with the Agreement and other
                    guidelines issued by Lovable from time to time.
                  </p>
                  <p>
                    <strong>2.8</strong> The Customer may not, fully or
                    partially, gain access to, copy or otherwise reproduce,
                    modify, derive, interpret, re-lease, transfer or otherwise
                    use the Lovable.dev Services or related rights, except for
                    the authorized use outlined in these Product Terms.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  3 FEES AND PAYMENT
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>3.1</strong> The use of the Lovable.dev Services is
                    subject to fees as set out in the Order Form will be
                    invoiced annually in advance or as otherwise agreed upon by
                    the Parties.
                  </p>
                  <p>
                    <strong>3.2</strong> Unless otherwise agreed in the Order
                    Form, the first Subscription Fee will be invoiced
                    thirty (30) days prior to the Effective Date indicated in
                    the Order Form. If the Effective Date occurs less than
                    thirty (30) days from the date of signing of the Order
                    Form, the first Subscription Fee will be invoiced in
                    conjunction with the signing of the Order Form.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  4 INTELLECTUAL PROPERTY
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>4.1</strong> The Lovable.dev Services, including all
                    software, technology, and content provided therein, is the
                    property of Lovable or its licensors and nothing in the
                    Agreement shall be construed as a transfer of any
                    intellectual property rights to the Customer. Any
                    intellectual property rights vested in e.g., (without
                    limitation) any software, drawings, technical solutions,
                    documentation, materials resulting from any development of
                    the Software or the Lovable Materials shall be owned by and
                    the sole property of Lovable.
                  </p>
                  <p>
                    <strong>4.2</strong> The Customer agrees not to reproduce,
                    modify, distribute, or create derivative works based on the
                    Lovable.dev Services without the prior written consent of
                    the Supplier.
                  </p>
                  <p>
                    <strong>4.3</strong> The Customer shall immediately notify
                    Lovable upon becoming aware of (i) any alleged infringement
                    of Third-Party IP Claim, or (ii) any suspected infringement
                    of Lovable's Intellectual Property Rights.
                  </p>
                  <p>
                    <strong>4.4</strong> The Customer acknowledges that the
                    relevant third-party supplier holds all ownership and
                    Intellectual Property Rights with respect to Third-Party
                    Software, as further regulated in the applicable Product
                    Terms for such Third-Party Software.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  5 DATA PRIVACY
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    Lovable will process the personal data on behalf of the
                    Customer in accordance with the Data Processing Agreement.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  6 TERM, TERMINATION AND SUSPENSION
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>6.1</strong> The term for the Lovable.dev Services
                    is set out in the applicable Order Form and the General
                    Terms and Conditions.
                  </p>
                  <p>
                    <strong>6.2</strong> Lovable may suspend or terminate the
                    Customer's access to the Lovable.dev Services immediately if
                    the Customer breaches any provision of the Agreement.
                  </p>
                  <p>
                    <strong>6.3</strong> Upon termination, the Customer will no
                    longer have access to the Lovable.dev Services, and any
                    outstanding fees will become immediately due and payable as
                    specified in the Order Form.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  7 MAINTENANCE, UPDATES AND CHANGES
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>7.1</strong> Lovable may from time to time, at its
                    own discretion, issue updates and/or changes to the
                    Lovable.dev Services e.g. in order to improve the overall
                    stability and functionality of the Lovable.dev Services.
                    Lovable shall strive to ensure that any updates/changes to
                    the Lovable.dev Services are made without any adverse impact
                    to the Customer.
                  </p>
                  <p>
                    <strong>7.2</strong> Lovable shall use its best endeavours
                    to provide continuous bug fixes, error corrections, and
                    rectification of other defects, which is included in the
                    Subscription Fee.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  8 WARRANTY
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>8.1</strong> Lovable warrants, provided that the
                    Customer complies with the Customer's technical requirements
                    set out in the Product Catalogue, that the Software will
                    substantially perform with the specifications set out in the
                    Product Catalogue, as updated by Lovable from time to time.
                  </p>
                  <p>
                    <strong>8.2</strong> The Customer acknowledges that the
                    Lovable.dev Services is a standard product and is delivered
                    "as-is" and, except as expressly stated in the Agreement,
                    Lovable leaves no warranties or representations, whether
                    expressed or implied to the Customer with regard to the
                    Lovable.dev Services and expressly disclaims any liability,
                    including but not limited to, loss or alteration of data,
                    functionality, fitness for purpose, or freedom from errors
                    and bugs.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  9 AVAILABILITY
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>9.1</strong> Lovable can, without compensating the
                    Customer, temporarily suspend or limit access to the
                    Lovable.dev Services for backup, maintenance and similar
                    measures. Lovable will generally seek to do so during off
                    peak hours to minimize impact on the Customer. Lovable
                    undertakes to provide Customer with reasonable prior notice
                    to the extent it is practicable under the circumstances in
                    each individual case.
                  </p>
                  <p>
                    <strong>9.2</strong> Lovable is not liable for
                    unavailability caused by disturbances in internet or telecom
                    infrastructure or cloud supplier infrastructure at local,
                    regional, or global level, or other failures caused by
                    unavailability of a third-party service or an e-invoicing
                    service provider.
                  </p>
                  <p>
                    <strong>9.3</strong> Lovable shall be entitled to update,
                    amend and modify the Lovable.dev Services without prior
                    notice to the Customer, provided that the performance or
                    functionality does not decrease in any material way as a
                    consequence of such changes.
                  </p>
                  <p>
                    <strong>9.4</strong> Lovable does not guarantee that the
                    Lovable.dev Services will perform uninterrupted, error-free
                    or free from bugs.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  10 SUPPORT SERVICES
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>10.1</strong> Support Services and service levels
                    set out in Section 10 and 11 applies to the extent the
                    Customer has ordered Support Services from Lovable under the
                    applicable Order Form.
                  </p>
                  <p>
                    <strong>10.2</strong> Support Services are debited per hour
                    in accordance with the Consultancy Services Fees and are
                    invoiced monthly in arrears, subject to the payment terms
                    set out in the General Terms and Conditions.
                  </p>
                  <p>
                    <strong>10.3</strong> The Customer shall appoint one (1)
                    superuser within the Customer's organization who shall be
                    responsible for all contacts with Lovable in support
                    matters. Such Superuser shall have sufficient experience and
                    knowledge regarding the Lovable.dev Services. The Superuser
                    shall be an internal support function, meaning that everyone
                    within the Customer's organization shall direct all
                    questions and other issues regarding the Lovable.dev
                    Services to the Superuser. The Superuser alone may then,
                    where the Superuser are not able to answer questions or
                    solve any issues raised by users within the Customer's
                    organization, contact Lovable's 1st level support. For the
                    avoidance of doubt, internal support shall include basic
                    support to users such as guidance on how to use the
                    Software.
                  </p>
                  <p>
                    <strong>10.4</strong> The 1st level support includes (solely
                    in relation to the Lovable.dev Services) troubleshooting,
                    technical assistance, bug fixes and remedy of other defects
                    in the Software. 1st level support services are provided
                    during Business Hours. All 1st level support matters shall
                    be initiated by visiting Lovable's maintenance service desk
                    at https://lovable.dev/support and registering a support
                    request ticket. The Customer's Ticket shall include a
                    detailed description of the issue at hand, including
                    screenshots and any other information or material necessary
                    for Lovable to assess the issue. When Lovable has received
                    the Customer's Ticket, an auto-generated unique Ticket
                    id-number will be presented on the screen.
                  </p>
                  <p>
                    <strong>10.5</strong> In order for Lovable to perform
                    Support Services, the Customer shall, at its own cost,
                    arrange a remote connection for Lovable to the Customer's
                    environment.
                  </p>
                  <p>
                    <strong>10.6</strong> Support Services will not be provided
                    unless the relevant Subscription Fee for the supported
                    Software has been paid.
                  </p>
                  <p>
                    <strong>10.7</strong> Time spent on analysis and support
                    related to reported issues which are deemed by Lovable, at
                    its sole discretion, to not constitute bugs or defects in
                    the Software, are charged at the price for Consultancy
                    Services.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  11 SERVICE LEVELS
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>11.1</strong> Lovable does not warrant that the
                    Software will be available or free from bugs or other
                    defects at all times. As part of Lovable's provision of
                    maintenance Lovable.dev, however, undertakes to carry out bug
                    fixes and remedy other equivalent errors in the Software
                    brought to Lovable's attention in accordance with the
                    procedure set out in Section 10.
                  </p>
                  <p>
                    <strong>11.2</strong> Lovable will with all reasonable
                    efforts remedy any such issues deemed by Lovable, at its
                    sole discretion, to constitute bugs or defects in the
                    Software of the different severities and within the times
                    listed in the table below. Lovable's support service desk
                    shall make a reasonable assessment of the severity of the
                    Ticket.
                  </p>

                  <div className="my-4 overflow-x-auto">
                    <table className="min-w-full border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left font-medium">
                            Level
                          </th>
                          <th className="border border-border px-4 py-2 text-left font-medium">
                            Definition
                          </th>
                          <th className="border border-border px-4 py-2 text-left font-medium">
                            Response time from receipt of notice
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2 font-medium">
                            Critical
                          </td>
                          <td className="border border-border px-4 py-2">
                            Incidents which significantly reduce functionality
                            or performance, or which pose a significant security
                            risk ("Critical Issues").
                          </td>
                          <td className="border border-border px-4 py-2">
                            Twelve (12) Business Hours
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border border-border px-4 py-2 font-medium">
                            Major
                          </td>
                          <td className="border border-border px-4 py-2">
                            Incidents which cause or is likely to cause reduced
                            functionality or performance, not critical.
                          </td>
                          <td className="border border-border px-4 py-2">
                            Three (3) Business Days
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 font-medium">
                            Minor
                          </td>
                          <td className="border border-border px-4 py-2">
                            Minor faults which do not affect the daily use of
                            Lovable.dev Services.
                          </td>
                          <td className="border border-border px-4 py-2">
                            Ten (10) Business Days
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>11.3</strong> All times in the table above are
                    approximate times and are counted from the time when Lovable
                    received the Ticket from the Customer of the relevant
                    support matter in accordance with the terms of this
                    Agreement. For the avoidance of doubt, a response as set
                    forth in the table above shall include a summary of the
                    result of the troubleshooting and information regarding when
                    the incident is estimated to be solved.
                  </p>
                  <p>
                    <strong>11.4</strong> Lovable shall, after having made all
                    reasonable efforts to resolve any Ticket, have the right to
                    cancel the handling of the Ticket if the support matter
                    cannot be resolved by Lovable and it can be demonstrated by
                    Lovable that: (a) the Software has not been correctly used
                    in accordance with the instructions from Lovable; (b)
                    Lovable, after having made reasonable efforts, is unable to
                    identify, reconstruct or reproduce the issue that has been
                    reported; (c) unauthorized modifications or alterations that
                    have been made to the Lovable.dev Services or related
                    software or functionality upon which the Lovable.dev
                    Services is reliant; or (d) the support matter does neither
                    relate to the Lovable.dev Services nor has been caused by
                    the Lovable.dev Services.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductTerms;
