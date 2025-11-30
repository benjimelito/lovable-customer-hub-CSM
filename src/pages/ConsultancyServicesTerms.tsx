import Layout from "@/components/Layout";
import { Briefcase, Building, Calendar } from "lucide-react";
const ConsultancyServicesTerms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-affirmative text-affirmative-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Briefcase className="h-4 w-4" />
            <span>Consultancy Services</span>
          </div>
          <h1 className="text-4xl font-medium text-foreground">
            Consultancy Services Terms
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
              CONSULTANCY SERVICES TERMS
            </h2>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  1 GENERAL
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>1.1</strong> These Consultancy Services Terms
                    governs the Customer's purchase and receipt of Lovable's
                    Consultancy Services, including implementation and Support
                    Services.
                  </p>
                  <p>
                    <strong>1.2</strong> By ordering Consultancy Services from
                    Lovable, the Customer agrees to these Consultancy Services
                    Terms and that these Consultancy Services Terms shall form
                    an integrated part of the Agreement.
                  </p>
                  <p>
                    <strong>1.3</strong> Defined terms used in these Consultancy
                    Services Terms shall have the meaning given to them in the
                    General Terms and Conditions.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  2 PROVISION OF THE CONSULTANCY SERVICES
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>2.1</strong> The Customer may order Consultancy
                    Services to be provided by Lovable e.g. to perform work in
                    relation to implementation of the Software, development of
                    Deliverables, termination assistance, and/or any other
                    service that Customer orders and Lovable accepts to deliver
                    as a Consultancy Service. Orders of Consultancy Services
                    that will be provided as a project with defined Deliverables
                    shall be made through the conclusion of a Statement of Work.
                    Unless otherwise agreed between the Parties, the scope,
                    duration, extent, of the work to be performed shall be
                    specified in the Statement of Work, including any time plan,
                    etc.
                  </p>
                  <p>
                    <strong>2.2</strong> Projects that are estimated to twenty
                    (20) hours of work or less shall not require a Statement of
                    Work to be concluded between the Parties. The Customer
                    accepts that such projects can be carried out and invoiced
                    by Lovable e.g. through email confirmation from the
                    Customer.
                  </p>
                  <p>
                    <strong>2.3</strong> Consultancy Services will be delivered
                    remotely unless the provision of on-site Consultancy
                    Services is explicitly specified in the Statement of Work.
                    If the Customer does not provide Lovable access to its
                    environment upon Lovable's reasonable request, the Customer
                    acknowledges that Lovable may not be able to provide the
                    Consultancy Services.
                  </p>
                  <p>
                    <strong>2.4</strong> Lovable warrants that Lovable will
                    perform the Consultancy Services diligently, in a
                    professional, timely and workmanlike manner, and pursuant to
                    industry best practices and the specifications set forth in
                    the applicable Statement of Work. Lovable shall use an
                    adequate number of qualified individuals with suitable
                    experience and skill to perform the Consultancy Services.
                  </p>
                  <p>
                    <strong>2.5</strong> Regardless of whether the Parties have
                    agreed certain acceptance criteria in a Statement of Work,
                    the Customer acknowledges and agrees that the Customer's
                    delay of more than thirty (30) days from Lovable's
                    completion notification to provide its acceptance (or
                    non-acceptance) to the implementation, a Deliverable or any
                    other result that has been agreed in a Statement of Work,
                    shall be deemed as an acceptance by the Customer.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  3 CUSTOMER DEPENDENCIES
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>3.1</strong> The Customer will cooperate with
                    Lovable in its performance of Consultancy Services by,
                    without limitation, and without charge:
                  </p>
                  <div className="ml-4 space-y-1">
                    <p>
                      <strong>(a)</strong> providing Lovable with any
                      information and documentation relating to the Customer's
                      operations or otherwise being of relevance for the
                      performance of the Consultancy Services;
                    </p>
                    <p>
                      <strong>(b)</strong> making available the appropriate
                      number of personnel that have the necessary time,
                      qualification, skills (including without limitation
                      language skills) and experience, and delegation of
                      authority to appropriately and timely perform any agreed
                      participation, coordination, cooperation, testing and
                      other activities and provide to Lovable relevant requisite
                      input, requirements and approvals;
                    </p>
                    <p>
                      <strong>(c)</strong> managing and implementing internal
                      change management, e.g. changes to business processes and
                      routines, as applicable;
                    </p>
                    <p>
                      <strong>(d)</strong> giving Lovable access to relevant
                      facilities, utilities and resources as Lovable may
                      reasonable require, including facilitating remote
                      Consultancy Services by providing access to systems
                      required to deliver the Consultancy Services and ensuring
                      that Lovable is able to utilize industry standard
                      collaboration tools such as Microsoft Teams; and
                    </p>
                    <p>
                      <strong>(e)</strong> performing any preparation work and
                      other agreed obligations and duties, as applicable, or as
                      may otherwise be reasonably required by Lovable
                      (additional Customer obligations may apply where agreed
                      and specified in the applicable Order Form).
                    </p>
                  </div>
                  <p>
                    <strong>3.2</strong> If the Customer engages or uses a
                    consultancy agent, consultant, or any other third party in
                    connection with any Consultancy Services engagement, the
                    Customer will be responsible for such third party as if it
                    were its own personnel and will coordinate the activities of
                    such third party with Lovable.
                  </p>
                  <p>
                    <strong>3.3</strong> The Customer is responsible for
                    obtaining all necessary licenses and permissions from third
                    parties in respect of their Intellectual Property Rights
                    which are to be used by Lovable and/or the Customer in
                    connection with any Consultancy Services engagement
                    hereunder, e.g. software, products, and data.
                  </p>
                  <p>
                    <strong>3.4</strong> If the Customer fails to comply with
                    its obligations in this Section 3, Lovable shall, upon
                    written notification to the Customer, have the right to
                    cease to perform any work relating to the Statement of Work
                    under which the Customer has failed to comply with its
                    obligations set out herein. Moreover, any fees accrued as of
                    the date of notification shall become immediately payable by
                    the Customer.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  4 GOVERNANCE AND CHANGES
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>4.1</strong> The Parties will cooperate and consult
                    with each other in connection with Lovable's provision of
                    Consultancy Services, and each Party recognizes that the due
                    and timely performance thereof depends upon the continuing
                    co-operation and goodwill, and the commitment, effort, and
                    allocation of qualified, competent and relevant personnel,
                    skills and resources from each Party.
                  </p>
                  <p>
                    <strong>4.2</strong> Where relevant and agreed in an Order
                    Form, Lovable and the Customer will each appoint a person
                    acting as a project manager who will be the primary point of
                    contact and will have general supervision responsibility for
                    the performance of the Parties' respective obligations under
                    the applicable Order Form.
                  </p>
                  <p>
                    <strong>4.3</strong> The Customer may at any time request
                    changes to the Consultancy Services, including the related
                    services to be performed by Lovable. Any change requests
                    shall be approved in writing by Lovable. Lovable shall
                    evaluate and advise on the likely impact of a change request
                    on (i) the Consultancy Services in general and with respect
                    to the requirements and expectations of the Customer in
                    particular, including time schedule, (ii) any cost effects
                    and (iii) any other relevant aspects. Lovable shall be
                    entitled to charge for any work performed in handling a
                    change request issued by the Customer, in accordance with
                    applicable rates. For the avoidance of doubt, Lovable shall
                    not be obligated to approve a change request.
                  </p>
                  <p>
                    <strong>4.4</strong> The Customer understands that any
                    re-planning/changes caused or requested by the Customer
                    rendering Lovable not being able to appropriately utilize
                    the affected resources for alternative chargeable work
                    (having used commercially reasonable efforts to reallocate
                    such affected resources), may be subject to separate
                    reasonable charges.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  5 FEES AND PRICE INDEXATION
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>5.1</strong> The Fees are specified in the
                    applicable Order Form and are payable as invoiced. Time and
                    materials engagements will be invoiced in arrears, and fixed
                    price engagements as specified in the Agreement, applicable
                    Order Form or as otherwise communicated by Lovable.
                  </p>
                  <p>
                    <strong>5.2</strong> The Customer acknowledges and agrees
                    that a fixed price engagement agreed hereunder shall not
                    prevent Lovable from charging for any additional work, on a
                    time and material basis, agreed with the Customer outside
                    the scope of the fixed price engagement, or as Lovable may
                    otherwise be entitled to hereunder.
                  </p>
                  <p>
                    <strong>5.3</strong> Where Lovable is performing Consultancy
                    Services at the Customer's premises or if the provision of
                    Consultancy Services otherwise requires travelling, Lovable
                    will charge the Customer for reasonable and by Customer
                    pre-approved travel costs and expenses (including daily
                    allowance) and travel time. Lovable's fee for travel time
                    shall be equal to the hourly Consultancy Services Fee. For
                    the avoidance of doubt, the Customer acknowledges and
                    accepts that if the Customer does not provide its approval,
                    Lovable may not be able to provide the Consultancy Services
                    on Customer's premises (or at another venue which requires
                    travelling).
                  </p>
                  <p>
                    <strong>5.4</strong> Applicable rates may be subject to
                    indexation, as set out in the General Terms and Conditions.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  6 INTELLECTUAL PROPERTY RIGHTS TO DELIVERABLES
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>6.1</strong> Lovable or its licensors shall retain
                    all right, title, and interest to any Deliverables and
                    improvements, enhancements, modifications, or derivative
                    works thereof, generated in connection with the Consultancy
                    Services, including any Intellectual Property Rights related
                    thereto. Notwithstanding any statutory presumption to the
                    contrary, the Deliverables are not "works made for hire"
                    under applicable copyright law and all Deliverables created
                    in the course of Consultancy Services are the sole and
                    exclusive property of Lovable, and the Customer hereby
                    irrevocably assigns all right, title, and interest it may
                    have therein to Lovable, except for the limited license
                    expressly granted in Section 6.2
                  </p>
                  <p>
                    <strong>6.2</strong> Subject to the Customer's duly payment
                    of fees for the Consultancy Services, Lovable grants to the
                    Customer a non-exclusive, limited right to access and use
                    the Deliverables for the Subscription Term, in accordance
                    with the applicable License Terms in relation to the
                    Software to which the Deliverables relate.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  7 TERM AND TERMINATION
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>7.1</strong> Consultancy Services will commence on
                    the date agreed between the Parties and, unless terminated
                    early in accordance with the Order Form or as otherwise set
                    out in the Agreement, expire when all agreed performances
                    and deliveries thereunder have been completed.
                  </p>
                  <p>
                    <strong>7.2</strong> The Customer shall be entitled to
                    cancel Consultancy Services that are provided on a time and
                    material basis, at any time for convenience giving thirty
                    (30) days' written notice. Upon early termination of
                    Consultancy Services provided on a time and materials basis
                    the Customer shall pay fees for Consultancy Services
                    performed up to the date of termination. For the avoidance
                    of doubt, the foregoing shall not apply to Consultancy
                    Services that are provided at a fixed fee and any
                    termination pursuant to this Section 7.2 shall not affect
                    any other Services or Software Solutions provided by Lovable
                    under the Agreement.
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
export default ConsultancyServicesTerms;
