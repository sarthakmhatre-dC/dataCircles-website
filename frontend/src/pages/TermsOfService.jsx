import LabelPill from "@/components/common/LabelPill";

export default function TermsOfService() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 pb-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Page Header */}
        <div className="flex flex-col items-start">
          <LabelPill label="Legal Pages" dotColor="bg-blue-500" />
          <h1 className="heading-2 mt-10 mb-8heading-2 mb-5 font-semibold tracking-[-0.25rem]">
            DataCircles Terms of Service & End User License Agreement
          </h1>

          <p className="text-gray-600 para-1 mb-10">
            This Terms of Service (“TOS”) and End User License Agreement
            (“EULA”) governs your use of the DataCircles platform, software, and
            services.
          </p>
        </div>

        {/* Full Terms Content */}
        <div className="text-gray-700 leading-relaxed space-y-6 p2 md:text-base">
          {/* ------------------ SCOPE ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8">1. Scope and Applicability</h2>
          <div className="para-1">
            <p className="mb-5">
              1.1. This User Agreement ("UA") between You and M/s DataCircles
              Technology ("DataCircles") covers Your use of the DataCircles
              Services related to the Products ("Service").
            </p>
            <p className="mb-5">You agree to be bound by this EULA through:</p>
            <ul className="list-disc ml-6 space-y-1 mb-5">
              <li>Your download, installation, or use of the Service; or</li>
              <li>Your express agreement to this EULA.</li>
            </ul>

            <p >
              1.2. You must be of legal age to use the Service. You must provide
              accurate and complete registration information and maintain the
              confidentiality of your account credentials. DataCircles may
              terminate your account if information provided is inaccurate or
              incomplete.
            </p>
          </div>

          {/* ------------------ DEFINITIONS ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">2. Definitions</h2>

          <div className="para-1 space-y-5">
            <p> 2.1.
              <strong> "Affiliate"</strong> means any corporation or company that directly or indirectly controls, or is controlled by, or is under common control of the relevant party, where "control" means to (a) own more than 50% of the relevant party; or (b) be able to direct the affairs of the relevant party through any lawful means (e.g., a contract that allows control).
            </p>

            <p> 2.2.
              <strong> "Inactivated Account"</strong>  means Your free plan account, which remains inactive for a continuous period of at least 90 days.
            </p>
            <p>2.3.
              <strong> "Subscription Plan"</strong> means the specific Plan opted for by You from DataCircles Services, accessible at https://www.datacircles.in/pricing/.
            </p>
            <p>2.4.
              <strong> "Usage Term"</strong> means the period commencing from the subscription date and continuing until expiration or termination of the Entitlement, during which period You have the right to use the Services.
            </p>
            <p>2.5.
              <strong> "You"</strong> means the individual or legal entity acquiring Usage Rights in the DataCircles Services.
            </p>
          </div>

          {/* ------------------ USAGE RIGHTS ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">3. Using DataCircles Service</h2>

          <h3 className="para-1 mb-5">3.1 License and Right to Use:</h3>
          <p className="para-1 mb-5">
            DataCircles grants You a non-exclusive, non-transferable, and limited:
          </p>
          <ul className="list-disc ml-6 space-y-1 para-1 mb-5 px-5">
            <li>
              license to use the Service; and
            </li>
            <li>Right to access and use the Service
            </li>
          </ul>

          <p className="para-1 mb-5">
            as hosted by DataCircles for Your direct benefit and solely for internal business purposes during the Usage Term and as set out in Your Subscription Plan and this EULA (collectively referred to as the "Usage Rights").
          </p>


          <h3 className="para-1 mb-5">3.2 Restrictions:</h3>
          <p className="para-1 mb-5">You shall not make the Usage Rights available to any third party, including but not limited to any subsidiaries or affiliated companies, without the prior written consent of DataCircles. You shall not, without the express written permission of DataCircles:</p>
          <ul className="list-disc ml-6 space-y-1 para-1 mb-5 px-5">
            <li>
              uplicate, decompile, reverse engineer, disassemble, reproduce, or exploit any part of the Usage Right or
            </li>
            <li>distribute, sell, resell, rent, lease, lend, redistribute or sublicense the Usage Right in whole or in part;
            </li>
            <li>transfer or otherwise make the Usage Right available to any third party;</li>
            <li>
              use the Usage Right in any manner that could damage, disable, overload, impair or harm any server, network, computer system, or resource of DataCircles.
            </li>
          </ul>

          <h3 className="para-1 mb-5">3.3 DataCircles grants You use of the Service on a trial basis for free of charge and a Free Subscription Plan:</h3>
          <ul className="list-disc ml-6 space-y-1 para-1 mb-5 px-5">
            <li>
              From the moment of Registration, you will be provided with a trial period of access to the Service for a limited period of 7 (Seven) calendar days.
            </li>
            <li>DataCircles reserves the right to establish a different period of validity of the trial period unilaterally.
            </li>
            <li>
              At the end of the trial period, You will have the right to apply for paid access to the Service; otherwise, your plan will be cancelled.
            </li>
          </ul>

          <h3 className="para-1 mb-5">3.4 Paid Use of the Service</h3>
          <p className="para-1 mb-5">
            DataCircles offers You a variety of subscription plans to choose from. These plans vary in terms of duration and pricing, allowing You to select the plan that best meets your needs and budget. The details of the subscription plans and fees can be accessed at https://www.datacircles.in/pricing/ All subscription fees shall be exclusive of any applicable taxes. You agree to pay DataCircles such taxes in addition to the subscription fee. DataCircles will provide you with a Sales Quote and a Tax Invoice in the format provided for by the country’s current legislation.
          </p>

          <p className="para-1 mb-5">
            You have the right to upgrade the Subscription Plan at any time by paying the difference in the price of the Subscription Plan.
          </p>

          <p className="para-1 mb-5">
            By starting using DataCircles according to any of the subscription plans, You agree to the terms and conditions of this User Agreement.
          </p>

          <p className="para-1 mb-5">
            From time to time, DataCircles may change the price of any Subscription Plan or charge for Services currently available on a free basis. In that case, we give 30 days prior notice, which DataCircles shall post on their website (https://www.datacircles.in/) or via email or as an alert message while using the Service. Any increase in Subscription Plan will not apply until your current paid period expires.
          </p>

          <h3 className="para-1 mb-5">3.5 Additional Services</h3>
          <p className="para-1 mb-5">You may use Additional Services beyond Your Subscription Plan if You have acquired the right to use such additional Options upon payment of the additional charges, which can be accessed at https://www.datacircles.in/pricing/.
          </p>

          <h3 className="para-1 mb-5">3.6 Payment</h3>
          <div className="para-1 mb-5" >
            <p className="para-1 mb-5">
              The subscription fee for the Subscription Plan you have chosen must be paid before the start of the Subscription Period. All subscription fees do not include any applicable taxes. You are responsible for paying taxes on goods and services and/or any other taxes levied or payable in respect of any subscription fee paid per this Agreement.
            </p>

            <p>
              After choosing a Subscription Plan, DataCircles will issue you a Sales Quotation before starting the Subscription Period. Such Sales Quotation will be provided upon a request from your side. After receiving the DataCircles subscription fee, a Tax Invoice will be created and sent to you.
            </p>

            <p>
              After the end of the Subscription Period, DataCircles will issue a new Sales Quotation for you for the new Subscription Period for selected Subscription Plan. Such Sales Quotation will be provided upon a request from your side.
            </p>
          </div>

          <h3 className="para-1 mb-5">
            3.7.1 Refund Policy</h3>
          <div className="para-1 mb-5 space-y-5">
            <ol className="list-decimal ml-6 space-y-1 px-5">
              <li>In case You have paid DataCircles by mistake, you can request a refund according to the procedure described in 3.7.2.</li>
              <li>
                In case You are unsatisfied with the Service, you can request a refund:
                <ul className="list-[circle] ml-6 space-y-1 px-5">
                  <li className="mt-2">within 14  (fourteen) following working days from the day of payment in case You have  paid for annual Subscription i.e for ;</li>
                  <li>within 30 (thirty) following working days from the day of payment in case You have paid 4 or more months of Subscription.</li>
                </ul>
              </li>
            </ol>
            <p>
              You can request a refund according to the procedure described in 3.7.2.
            </p>


            <p className="">
              3.7.2. The procedure of refund
            </p>
            <ul className="list-disc ml-6 space-y-1 para-1 mb-5 px-5">
              <li>
                Refund may be requested by sending an e-mail containing the details of the bank account of the user to which the refund will be credited along with the KYC documents and the receipt confirming the erroneous payment to the e-mail address support@datacircles.in. Otherwise by default, the payment will be refunded to the same bank account through which the payment was made to DataCircles.
              </li>
              <li>After receiving the necessary documents, DataCircles shall verify the same and initiate the refund to Your bank account specified in the Request.
              </li>
              <li>
                The refund shall be credited to Your account within 20 (twenty) working days (hereinafter referred to as the term of refund) from the date we received your Request. In case of a delay in refund, We shall inform You about the delay along with the reason.
              </li>
            </ul>
          </div>

          {/* ------------------ TERMINATION ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">4. Termination</h2>
          <div className="para-1 mb-5 space-y-5">
            <p>DataCircles reserves the right to terminate Your account:</p>
            <ul className="list-disc ml-6 space-y-1 px-5">
              <li>In case Your free plan account remains inactive for a continuous period of at least 3 months; or
              </li>
              <li>In case of breach of clause 1.2 and/or Clause 3.2.; or
              </li>
              <li> If case Your account remains blocked for at least 3 months due to nonpayment of the renewal fee.</li>
            </ul>

            <p>
              In the event of the termination, all data associated with such an account may be deleted, and You may not have access to Your account or any files, information and/or other content contained in Your account.
            </p>
          </div>

          {/* ------------------ OWNERSHIP ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">5. Ownership</h2>

          <div className="para-1 mb-5 space-y-5">
            <h3 className="">5.1 Data Ownership</h3>
            <p>
              DataCircles acknowledges that any and all data, including but not limited to personal information and usage data, collected or generated or created by you in the course exercising the Usage Rights shall remain your exclusive property. DataCircles shall not use,share, reproduce, modify, sell, publish or distribute any such data for DataCircles’s commercial, marketing or any similar purpose without your express written consent.
            </p>
            <p>
              If You request that all data be deleted, DataCircles shall comply with this request within a reasonable time frame. Any data DataCircles retains for its own use shall be anonymised and used solely to improve services. You can find more details on how we handle data in our Privacy Policy
            </p>

            <h3 className="">5.2 Reservation of Rights</h3>
            <p>
              You irrevocably acknowledge and agree that subject to the Usage Rights granted, You shall have no ownership rights over the services provided by DataCircles. DataCircles shall retain exclusive rights and interest in and to the Service, including the exclusive right to use intellectual property rights. You shall not acquire any rights, express or implied, in or to the Service, except as explicitly outlined in the Agreement between You and DataCircles. You shall use the service only for the purposes outlined in this agreement and in accordance with all applicable laws, regulations, and DataCircles’s policies. DataCircles may use any feedback You provide in connection with Your use of the DataCircles Services as part of its business operations.
            </p>

            <h3 className="">5.3 Intellectual Property Rights</h3>
            <p>
              DataCircles hereby reserves exclusive rights and interest in and to any exclusive right to use intellectual property rights associated with the services provided, including but not limited to patents, trademarks, and copyrights. Any unauthorised use, reproduction, or distribution of such intellectual property rights will be strictly prohibited and may result in legal action.
            </p>
          </div>

          {/* ------------------ INDEMNITY ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">6. Indemnification</h2>
          <div className="para-1 space-y-5 mb-5">
            <p>You agree to indemnify, defend and hold harmless DataCircles, its officers, directors, employees and affiliates from and against any and all third-party claims, demands and liabilities, including any and all costs or expenses (including without limitation litigation costs and attorney’s fees) arising:</p>
            <ul className="list-disc ml-6 space-y-1 px-5">
              <li>from or in any way related to your use of the Service; or</li>
              <li>from any claims, losses, damages (actual or consequential); or</li>
              <li>from any suits or judgments of any kind or nature; or</li>
              <li>from any unlawful or illegal use of our service; or</li>
              <li>from breach of any of the terms of this EULA</li>
            </ul>
          </div>

          {/* ------------------ DISCLAIMER ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">7. Disclaimer of Warranties</h2>
          <div className="para-1 mb-5 space-y-5">
            <p>
              The services are provided "as is" and "as available". DataCircles makes no representations or warranties of any kind, express or implied, regarding the operation of the services or the information, content or materials. DataCircles does not warrant that the services will be uninterrupted or error-free. You assume the entire risk as to the results and performance of the services or any information/ material downloaded or obtained through the Service. You will be solely responsible for any damage to your computer system, mobile telephone, wireless device or data that results from using the services or downloading any such material. No advice or information, whether written or oral, obtained by you from DataCircles, its employees or representatives shall create any warranty not expressly stated in these terms of use.
            </p>
            <p>
              This disclaimer of warranties is an essential part of the agreement between you and
              DataCircles and applies to all service uses
            </p>
          </div>

          {/* ------------------ LIABILITY ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10">8. Limitations of Liability</h2>
          <p className="para-1 mb-5">
            You agree and understand that in no event DataCircles shall be liable for any indirect, special, incidental, punitive, consequential or exemplary damages of any kind, including but not limited to damages for loss of profits, goodwill, use, data or other intangible losses, resulting from your usage of the Services and whether or not DataCircles is advised of the possibility of such damages. In no event shall DataCircles’s entire liability to You in respect of any Service, whether direct or indirect, exceed the value of the monthly/annual subscription for the Services.
          </p>

          {/* ------------------ MISC ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10 ">9. Miscellaneous</h2>
          <div className= "para-1 mb-5 space-y-5">
          <h3 className="">9.1. Provisions Severable</h3>
          <p>
            If any provision of this EULA is invalid, illegal or unenforceable in any respect, the validity, legality and enforceability of the remaining provisions will not be affected and such invalid, illegal or unenforceable provision is to be severed from this EULA
          </p>
          <h3 className="">9.2. Governing Law</h3>
          <p>
            This EULA is governed by and constructed in accordance with the laws of the Republic of India, and the parties irrevocably submit to the jurisdiction of the courts of Mumbai.
          </p>
          <h3 className="">9.3. Entire Agreement</h3>
          <p>
            This EULA sets out the entire agreement and understanding between You and DataCircles with respect to the subject matter of this UA and supersedes all prior agreements, understandings and representations.
          </p>
          <h3 className="">9.4. Assignment</h3>
          <p>
            Neither the rights nor the obligations of either party under this agreement may be assigned, transferred, subcontracted or otherwise disposed of, in whole or in part, without the prior written consent of the other party.
          </p>

          <h3 className="">9.5. Force Majeure</h3>
          <p>
            DataCircles shall have no liability to you whatsoever for any interruption or delay in its Services if a force majeure event causes such interruption, delay, or inability. A "force majeure event" means any event or circumstance beyond the reasonable control of DataCircles, including but not limited to an act of God, fire, explosion, flood, epidemic, power failure, governmental actions, including acts of government officials or police authorities, war or threat of war, acts of terrorism, national emergency, riot, civil disturbance, sabotage, labour disputes, strikes, change in law or policies, court orders, cyber threats and cyber-attacks including those resulting from malware, trojans, ransomware, data breach, hacking, or malicious damage to the Platforms/ website/ services.
          </p>
          </div>

          {/* ------------------ CONTACT ------------------ */}
          <h2 className="heading-3 font-medium tracking-[-0.15rem] mb-8 mt-10 ">10. Technical Support and Grievance Redressal</h2>

          <div className="para-1 space-y-5 mb-5">
            <p>
              In case of any technical issues or questions regarding the Terms, please contact DataCircles at
              <br /> <strong>support@datacircles.in</strong>
            </p>

            <p>
              In case of any complaints, abuse or concerns regarding the services or content or comment or breach of these Terms shall be immediately informed to the designated Grievance Officer as mentioned below in writing or through e-mail.
            </p>

            <p>
              DataCircles shall not be responsible for any communication, if addressed, to any nondesignated person in this regard.
            </p>


            <p>
              2025, M/s DataCircles Technology
              <br />
              MSME (UDYAM-MH-33-0638838)
              <br />
              GST (27AJXPM6211H2ZT)
              <br />
              <br />
              Registered Office: No. 721, Centura Square IT Park, Road No. 27,
              Wagle Estate, Thane (West) - 400604, Maharashtra, India.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
