import React from 'react'

const Privacy = () => {
    const items = [
        { title: "complete a user profile or registration forms (such as your name, contact information and other identification information where needed);" },
        { title: "provide information to assess your eligibility to provide services as a RickshawRide’s driver partner or delivery partner (such as your driver’s license information, vehicle information and background check results (as legally permissible));" },
        { title: "interact with our social media pages (such as your social media account ID, profile photo and any other publicly available data);" },
        { title: "participate in contests or events organised by us (such as the pictures, audio files, or videos you may submit, which may include images of yourself);", },
        { title: "verify your identity through various means (such by third party hired by the RickshawRide, by local authority, social media logins, submission of  selfie images or independently verified payment card information);" },
        { title: "fill up demographic information in surveys (such as your age, gender, and other information you may volunteer such as your marital status, occupation, and income information); and" },
        { title: "agree to take a ride with in-vehicle with Location Specific GPS System features." },
    ];
    const items1 = [
        { title: "your location (to detect pick-up locations and abnormal route variations);" },
        { title: "feedback, ratings, and compliments" },
        { title: "transaction information (such as payment method and distance travelled);" },
        { title: "information about how you interacted with our Apps, Website or Services (such as features used, and content viewed);" },
        { title: "device information (such as hardware model and serial number, IP address, file names and versions and advertising identifiers or any information that may provide indication of device or app modification);" },
        { title: "personal data you enter in messages when you use our in-app communication features; and" },
        { title: "personal data that may be captured through your interaction with us, our agents, in-vehicle audio and/or video recording during a ride (such as your image or voice or both, and its related metadata)." },
    ]
    const items2 = [
        { title: "referral programmes;" },
        { title: "our business partners, such as Taxi Service fleet partners, payment providers, and transport partners;" },
        { title: "insurance and financial providers;" },
        { title: "credit bureaus and other credit reporting agencies;" },
        { title: "publicly available sources of data;" },
        { title: "when our users add you as an emergency contact;" },
        { title: "governmental sources of data;" },
        { title: "marketing services providers or partners." },
        { title: "Personal Data about driver partners" },
    ];
    const items5 = [
        { title: "Engage you to provide Services" },
        { title: "Create, administer, and update your account" },
        { title: "conduct due diligence checks" },
        { title: "Verify your identity" },
        { title: "Verify your age (where necessary)" },
        { title: "Validate your ride and process payments" },
        { title: "Offer, obtain, provide, facilitate, or maintain insurance or financing solutions" },
        { title: "track the progress of your trip and detect abnormal trip variations;" },
        { title: "enable features that personalise your App, such as lists of your favourite places and previous destinations" },
        { title: "make your experience more seamless, such as automatically filling in your registration information (such as your name or phone number) from one Service to another Service or when you participate in our surveys" },
        { title: "Perform internal operations necessary to provide our Services, including troubleshooting software bugs and operational problems, conducting data analysis, testing and research, monitoring and analysing usage and activity trends" },
        { title: "Protect the security or integrity of the Services and any facilities or equipment used to make the Services available" },
        { title: "Process and manage your rewards" },
        { title: "Enable communications between our users" },
        { title: "process, manage or verify your application of promotions, rewards, and subscriptions with RickshawRide" },
        { title: "venable our partners to manage and allocate fleet resources; and" },
        { title: "fulfil the services to you as a data processor, where you have provided consent to thedata controller (i.e. the organisation you had purchased goods or services from, and for whom RickshawRide is providing services on behalf of) for such services to be rendered." },
    ];
    const items6 = [
        { title: "Ask us about the processing of your Personal Data, including to be provided with a copy of your Personal Data" },
        { title: "Request the correction and/or (in some cases) deletion of your Personal Data" },
        { title: "In some cases, request the restriction of the processing of your Personal Data, or object to that processing" },
        { title: "withdraw your consent to the processing of your Personal Data (where we are processing your Personal Data based on your consent)" },
        { title: "request receipt or transmission to another organisation, in a machine-readable form, of the Personal Data that you have provided to us where we are using your Personal Data based on consent or performance of a contract" },
        { title: "complain to the relevant data privacy authority if your data privacy rights are violated, or if you have suffered as a result of unlawful processing of your Personal Data." },
    ];
    const items55 = [
        { title: "Where you are given the option to share your Personal Data with us, you can always choose not to do so. If we have requested your consent to processing and you later choose to withdraw it, we will respect that choice in accordance with our legal obligations." },
        { title: "However, choosing not to share your Personal Data with us or withdrawing your consent to our use of it could mean that we are unable to perform the actions necessary to achieve the purposes of processing described in Section II (Use of Personal Data) or that you are unable to make use of the Services. After you have chosen to withdraw your consent, we may be able to continue to process your Personal Data to the extent required or otherwise permitted by applicable laws and regulations." },
        { title: "If you wish to make a request to exercise your rights, you can contact us through our contact details set out in Section X (How to Contact Us) below." },
        { title: "We will screen and verify all requests beforehand. In order to verify your authority to make the request, we may require you to provide supporting information or documentation to corroborate the request." },
        { title: "Once verified, we will give effect to your request within the timelines prescribed by applicable laws." },
    ];
    const items4 = [
        { title: "debt collectors;" },
        { title: "credit bureaus and other credit reporting agencies;" },
        { title: "background check and anti-money laundering service providers;" },
        { title: "cloud storage providers;" },
        { title: "marketing partners and marketing platform providers;" },
        { title: "data analytics providers;" },
        { title: "research partners, including those performing surveys or research projects in partnership with RickshawRide or on RickshawRide ’s behalf;" },
        { title: "fleet and merchant partners;" },
        { title: "insurance and financing partners;" },
        { title: "third party intermediaries involved in the managed investment of funds, such as brokers, asset managers, and custodians;" },
        { title: "service providers who perform identity verification services; and" },
        { title: "vehicle solutions partners, vendors, or third-party vehicle suppliers." },
    ];
    const items7 = [
        { title: "If you are a passenger, we may share your pick-up and drop-off locations withour driver partner fulfilling your service request." },
        { title: "If you are a driverpartner, we may share your Personal Data with your passenger including your name and photo; your vehicle makes, model, number plate, location, and average rating." },
        { title: "If you are a Taxi Service Provider’s partner, we may share your Personal Data with your selected merchant and user, including your name and photo; your vehicle makes, model, location, and average rating." },
        { title: "If you are using our RickshawRide Express service, we may share your Personal Data with the recipient of your parcel, and vice versa, as well as the delivery partner in charge of fulfilling your service request." },
        { title: "If you use our in-app chat service, we may share your mobile number and RickshawRide -registered name with the other parties to your chat." },
    ];
    const items8 = [
        { title: "authenticating the User" },
        { title: "where applicable, linking the Authorised User’s account with the Client’s RickshawRide  for Business account or tracking the Authorised User’s business profile bookings on the Apps, as the case may be" },
        { title: "contacting the User in accordance with the purposes set out in the RickshawRide Privacy Policy" },
        { title: "where applicable, verifying the Corporate Billing status of such Authorised User from time to time; and" },
        { title: "Upon onboarding such User to the App, RickshawRide will process the Personal Data of the User in accordance with the RickshawRide Privacy Policy and this Addendum" },
    ];
    const items10 = [
        { title: "individually inform their data subjects of how each processes Personal Data and allow their data subjects to exercise their rights under the local data protection/data privacy laws" },
        { title: "comply with the obligations applicable to each party under the applicable data protection/data privacy laws when processing any Personal Data of the Proposed or Authorised Users" },
        { title: "obtain the necessary consents (if applicable) to facilitate the provision of the RickshawRide for Business feature" },
        { title: "implement appropriate legal, technical and organisational measures to protect Personal Data against unauthorised or unlawful processing and against unauthorised loss, destruction, damage, alteration, or disclosure, as well as any breach or attempted breach of each party’s security measures (“Information Security Incident”)." },
    ];
    const items11 = [
        { title: "Your Personal Data may be transferred from country, state, and city (“<strong>Home Country</strong>”) in which you are present while using ourServicesto another country, state, and city (“<strong>Alternate Country</strong>”)." },
        { title: "When we transfer your Personal Datafrom your Home Country to the Alternate Country, we will comply with our legal and regulatory obligations in relation to your Personal Data, including having a lawful basis for transferring Personal Data and putting appropriate safeguards in place to ensure an adequate level of protection for the Personal Data. We will also ensure that the recipient in Alternate Country is obliged to protect your Personal Data at a standard of protection comparable to the protection under applicable laws." },
        { title: "When we do so, we use a variety of legal mechanisms, including data transfer agreements based on European Standard Contractual Clauses, to help ensure your rights and protections travel with your data." },
        { title: "Our lawful basis will be either consent (i.e. we may ask for your consent to transfer yourPersonal Data from your Home Country to the Alternate Countryat the time you provide your Personal Data) or one of the safeguards permissible by laws." },
    ];
    const items12 = [
        { title: "We have appointed data protection officers (DPO) to oversee compliance with this privacy notice. If you have any questions about this privacy notice or how we handle your personal data, please contact the DPO as per your location:" },
        { title: "If you have any queries about this Policy or would liketo exercise your rights set out in this Policy, please contact our Data Protection Officer at:" },
        { title: "RickshawRide" },
        { title: "Data Protection Officer" },
        { title: "Email: legal@rickshawride.in" },
        { title: "Phone: +91 8590603074" },
        { title: "The original of this Policy is written in the English language. In the event of any conflict between the English and other language versions, the English version shall prevail." },
    ];
    const items13 = [
        { title: "If you are a driver partner, these devices will collecttelematics data (such as your speed, acceleration, and braking data) and your location information. Or" },
        { title: "If you are a passenger onboard one of our vehicles fitted with these devices, your location data (i.e. the position of the car) will be incidentally collected as well." },
        { title: "The data collected by these devices are owned by these partners who have entered into appropriate contractual undertakings with RickshawRide to safeguard this data. While these partners share such telematics data with us (to enable us to fulfil the purposes stated above), we do not share any personally identifying information about our driver partners or passengers with these partners." },
        { title: "Personal Data of minors" },
        { title: "As a parent or legal guardian, please do not allow minors under your care to submit Personal Data to RickshawRide. In the event that such Personal Data of a minor is disclosed to RickshawRide , you hereby consent to the processing of the minor’s Personal Data and accept and agree to be bound by this Policy and take responsibility for his or her actions." },
        { title: "When you provide Personal Data of other individuals to us" },
        { title: "In some situations, you may provide Personal Data of other individuals (such as your spouse, family members or friends) to us. For example, you may add them as your emergency contact. If you provide us with their Personal Data, you represent and warrant that youhave obtainedtheir consent for their Personal Data to be collected, used, and disclosed as set out in this Policy." },
    ];
    const items22 = [
        { title: "In respect of any User and the processing of all their Personal Data (including but not limited to Linking Data and Portal Data),RickshawRide acts as a data controller. For further information on how RickshawRide collects, uses, and discloses Users’ Personal Data, please refer to the RickshawRide Privacy Policy." },
        { title: "Due to the way RickshawRide for Business works, RickshawRide does not process any Personal Data for and on behalf of the Client. Accordingly,RickshawRide is not the data processor of the Client, butan independent data controllerin respect of all Personal Data that it processes in the course of providing the RickshawRide for Business feature. Likewise, the Client is an independent data controller of the Personal Data (e.g. the Linking Data and Portal Data) that it discloses to and/or receives from RickshawRide." },
        { title: "As independent controllers, RickshawRide and the Client individually determine the purposes and means of processing Personal Data, subject to the provisions set out in the Terms of Use and this Privacy Policy. RickshawRide and the Client are also individually responsible to ensure the protection of Personal Data under their charge." },
    ];
    const items32 = [
        { title: "RickshawRide for Business is provided as an add-on feature to facilitate corporate billing for the Authorised Users’ use of RickshawRide ’s Services in the course of work." },
        { title: "When an organisation (“<strong>Client</strong>”) chooses to utilise RickshawRide for Business, the Authorised User is given the option of tagging his/her rides or other transactions to the Client or to tag it as a personal ride. An Authorised User is referred to in the RickshawRide Privacy Policy as a passenger." },
        { title: "As part of this feature, RickshawRide will disclose detailed trip and booking information that Authorised Users have tagged as being for business purposes to the Client. Apart from this, RickshawRide does not disclose other Personal Data of its Authorised Users to the Client." },
        { title: "Alternatively, an individual user may choose to set up a business profile within the App to facilitate the tagging of business-related rides and to generate consolidated trip reports to facilitate the submission of claims from his or her employer. When used in this mode, the claims process is user-driven, and the user’s employer need not be a Client." },
    ];
    return (
        <div>
            
            <div className="mx-16  pb-10 relative top-20">
                <div className="">
                    <p className="mb-5">This Privacy Policy describe how RickshawRide Private Limited, its respective subsidiaries,affiliates, associated companies and jointly controlled entities (collectively”<strong>RickshawRide</strong>“,”<strong>we</strong>“,”<strong>us</strong>” or “<strong>our</strong>“) collect, use, process and disclose your Personal Data through the use of RickshawRide’s mobile applications and websites (respectively “<strong>Apps</strong>” and “<strong>Websites</strong>“), as well as products, features and other services globally, operated by RickshawRide (collectively, “<strong>Services</strong>“).</p>
                    <p>This Policy applies to our customers, passengers, agents, vendors, suppliers, partners (such as driver and merchant partners), contractors and service providers (collectively “<strong>you</strong>“,”<strong>your</strong>” or “<strong>yours</strong>“).</p>
                    <p className="my-7">“<strong>Personal Data</strong>” is any information which can be used to identify you or from which you are identifiable. This includes but is not limited to your name, nationality, telephone number, bank and credit card details, personal interests, email address, your image, government-issued identification numbers, biometric data, race, date of birth, marital status, religion, health information, vehicle and insurance information,employment information and financial information.</p>
                    <h3 className="font-bold text-lg">COLLECTION OF PERSONAL DATA</h3>
                    <p className="mt-2 mb-5">We collect Personal Data about you in the ways listed below. We may also combine the collected Personal Data with other Personal Data in our possession.If you have or are a party to multiple relationships with us (for example if you use our Services across our various business verticals, or if you are both a driver partner/delivery partner as well as a passenger on our transport vertical or a customer on our other business verticals), we will link your Personal Data collected across your various capacities to facilitate your use of our Services and for the Purposes described below.</p>
                    <p className="font-bold underline"><em>1.1 You provide your Personal Data to us</em></p>
                    <p className="my-3">We collect your Personal Data when you voluntarily provide it to us. For example, you may provide your Personal Data to us when you:</p>
                    <ul className="ml-4">
                        {
                            items.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <p className="my-5">In certain circumstances, you may need to provide your Personal Data in order to comply with legal requirements or contractual obligations, or where it is necessary to conclude a contract. Failure to provide such Personal Data, under such circumstance, may constitute failure to comply with legal requirements or contractual obligations, or inability to conclude a contract with you, as the case may be.</p>
                    <p className="font-bold underline">When our services are used</p>
                    <p className="my-3">Personal Data may be collected through the normal operation of our Apps, Websites and Services. Some examples are:</p>
                    <ul className="ml-4">
                        {
                            items1.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <p className="font-bold underline mt-5">From other sources</p>
                    <p className="my-3">When we collect Personal Data,including but not limited toyour name, contact information and other identification information where neededfrom other sources,we make sure that that data is transferred to us in accordance with applicable laws. Such sources include:</p>
                    <ul className="ml-4">
                        {
                            items2.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <h3 className="font-bold text-lg mt-4 mb-2">Personal Data about driver partners</h3>
                    <p><strong>If you are a driver partner, we may collect:</strong></p>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">telematics data (such as your speed, acceleration, and braking data);</li>
                        <li className="list-disc mb-2">device data (such as accelerometer data, GPS location, your IMEI number and the names of apps you have installed on your device);</li>
                        <li className="list-disc mb-2">your vehicle registration data;and</li>
                        <li className="list-disc mb-2">personal data that may be captured through your interaction withus,our agents, our in-vehicle audio and/or video recording during a ride (such as yourimage or voice or both, and its related metadata).</li>
                    </ul>
                    <p className="my-5">
                        <strong><em>Sensitive Personal Data</em></strong>
                    </p>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">Some of the Personal Data that we collect is sensitive in nature. This includes Personal Data pertaining to your race, national ID information, religious beliefs, background information (including financial and criminal records, where legally permissible), health data, disability, marital status, and biometric data, as applicable.</li>
                        <li className="list-disc mb-2">We collect this informationonly with your consent and/or in strict compliance with applicable laws.</li>
                    </ul>
                    <p>
                        <strong><em>In-vehicle</em></strong><strong><em>recording</em></strong></p>
                    <p className='my-5'>
                        <strong>RickshawRide ’s applications or devices</strong></p>
                    <p>RickshawRide may install in-vehicle, audio and/or video recording applications or devices to promote the safety and security of RickshawRide driver partners and passengers. Your Personal Data may be captured in these audios and/or videos recordings.Where in-vehicle audio and/or video recordings are made, such recordings are collected, processed, used, and stored in a manner that is compliant with applicable laws.</p>
                    <p className="my-5">
                        <strong>Personal In-vehicle cameras</strong></p>
                    <p>Some RickshawRide partners may install personal in-vehicle cameras in their vehicles for their own purposes (including safety and security). The use of such in-vehicle cameras is not endorsed or prohibited by RickshawRide. The collection use and disclosure of Personal Data obtained from personal in-vehicle cameras is the responsibility of the relevant partner. Please check with the relevant partner if you have any queries about their use of personal in-vehicle cameras.</p>
                    <p className="my-3">
                        <strong>Telematics devices</strong></p>
                    <p>RickshawRide works with some partners to install telematics devices in selected rental vehicles for the following purposes:</p>
                    <ul className="ml-4 my-3">
                        <li className="list-disc mb-2">To ensure that the vehicle is maintained appropriately and serviced in a timely fashion;</li>
                        <li className="list-disc mb-2">To help maintain the safety, security and integrity of our products and services;</li>
                        <li className="list-disc mb-2">To improve and enhance our products and services; and</li>
                        <li className="list-disc mb-2">For internal tracking of the vehicle, analysis, and administrative purposes.</li>
                    </ul>
                    <div className="my-10">
                        {
                            items13.map((item, idx) => (
                                <p key={idx} className="mb-3">{item.title}</p>
                            ))
                        }
                    </div>
                    <h3 className="font-bold text-xl my-5">II USE OF PERSONAL DATA</h3>
                    <p>RickshawRide may use, combine, and process your Personal Data for the following purposes (“<strong>Purposes</strong>”):</p>
                    <ol>
                        <li className='my-3'><strong>Providing services and features</strong></li>
                    </ol>
                    <p>Your Personal Data will be used to provide, personalise, maintain, and improve ourApps, Websites and Services.This includes using your Personal Data to:</p>
                    <ul className="ml-4 my-4">
                        {
                            items5.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <ol>
                        <li className="list-disc mb-2"><strong>Safety and security</strong></li>
                    </ol>
                    <p>We use your data to ensure the safety and security of ourServicesand all users. This includes:</p>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">Screening driver and delivery partners before enabling their use of our Services;</li>
                        <li className="list-disc mb-2">Identifying unsafe driving behaviour such as speeding, harsh braking and acceleration, and providing personalised feedback to driver partners;</li>
                        <li className="list-disc mb-2">Verifying your identity when you log in to RickshawRide ;</li>
                        <li className="list-disc mb-2">Using device, location, profile, usage, and other Personal Data to prevent, detect and combat fraud or unsafe activities;</li>
                        <li className="list-disc mb-2">Sharing drivers and passengers’ location and details when the emergency button or the “Share My Ride” feature is activated;</li>
                        <li className="list-disc mb-2">Monitoring compliance with our terms and conditions, policies, and Driver’s Code of Conduct; and</li>
                        <li className="list-disc mb-2">Detecting, preventing, and prosecuting crime.</li>
                    </ul>
                    <ol>
                        <li className="list-disc mb-2"><strong><u>Customer support</u></strong></li>
                    </ol>
                    <p>We use Personal Data to resolve customer support issues. For example, we may:</p>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">Investigate and address concerns;</li>
                        <li className="list-disc mb-2">Monitor and improve our customer support responses;</li>
                        <li className="list-disc mb-2">Respond to questions, comments, and feedback; and</li>
                        <li className="list-disc mb-2">Inform you about steps taken to resolve customer support issues.</li>
                    </ul>
                    <ol>
                        <li className="list-disc mb-2"><strong><u>Research and development and security</u></strong></li>
                    </ol>
                    <p>We may use the Personal Data we collect for testing, research, analysis, and product development. This allows us to understand and analyse your needs and preferences, protect your Personal Data, improve, and enhance the safety and security of ourServices, develop new features, products, and services, and facilitate insurance and finance solutions.</p>
                    <ol>
                        <li className="list-disc mb-2 mt-5"><strong>Legal purposes</strong></li>
                    </ol>
                    <p>We may use the Personal Data we collect to investigate and resolve claims or disputes, or as allowed or required by applicable law.</p>
                    <p>We may also use your Personal Data when we are required, advised, recommended, expected, or requested to do so by our legal advisors or any local or foreign legal, regulatory, governmental, or other authority.</p>
                    <p className='my-4'>For example, we may use your Personal Data to:</p>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">comply with court orders or other legal, governmental, or regulatory requirements;</li>
                        <li className="list-disc mb-2">enforce our Terms of Service or other agreements; and</li>
                        <li className="list-disc mb-2">protect our rights or property in the event of a claim or dispute.</li>
                    </ul>
                    <p className='mt-6'>We may also use your Personal Data in connection with mergers, acquisitions, joint ventures, sale of company assets, consolidation, restructuring, financing, business asset transactions, or acquisition of all or part of our business by another company.</p>
                    <h3 className="font-bold text-xl my-5">Marketing and promotions</h3>
                    <p>We may use your Personal Data to market RickshawRide and RickshawRide’s partners’, sponsors’ and advertisers’ products, services, events, or promotions. For example, we may:</p>
                    <ul className='ml-4'>
                        <li className="list-disc mb-2">send you alerts, newsletters, updates, mailers, promotional materials, special privileges, festive greetings; and</li>
                        <li className="list-disc mb-2">notify, invite, and manage your participation in our events or activities.</li>
                    </ul>
                    <p>We may communicate such marketing to you by post, telephone call, short message service, online messaging service, by email or any electronic mode of communication.</p>
                    <p>If you wish to unsubscribe to the processing of your Personal Data for marketing and promotions, please click on the unsubscribe link in the relevant email or message. Alternatively, you may also update your preferences in our App settings.</p>
                    <h3 className="font-bold text-xl my-5">III.DISCLOSURE OF PERSONAL DATA</h3>

                    <p>We need to share Personal Data with various parties for the Purposes. These parties include:</p>
                    <p className='my-2'><strong>Other users</strong></p>
                    <p>For example:</p>
                    <ul className="ml-4">
                        {
                            items7.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <p className='mt-10'>
                        <strong>
                            <em>With third parties</em></strong></p>
                    <p>For example, we maysharea vehicle’s locationand driver’s and/or passenger’s name with third parties when a passenger uses the “Share My Ride” feature or activates the Emergency Button.</p>
                    <p className='mt-8 mb-4'>
                        <strong>
                            With RickshawRide’s partners/Taxi Service Providers at your request</strong></p>
                    <p>For example, if you requested a service through a RickshawRide’s partners/Taxi Service Providers or used a promotion provided by a RickshawRide’s partners/Taxi Service Providers, RickshawRide may share your Personal Data with that RickshawRide’s partners/Taxi Service Providers. Our partners or Taxi Service Providers include that integrate with our App or our App integrates with, vehicle services partners, or business partners which RickshawRide collaborates with to deliver a promotion, competition, or other specialised service.</p>
                    <p className="font-bold underline my-3">With the owner of RickshawRide accounts that you may use</p>
                    <p>For example, your employer may receive trip data when you use your employer’s RickshawRide for Business account.</p>

                    <p className="font-bold underline my-3">With subsidiaries and affiliates</p>
                    <p>We share Personal Data with our subsidiaries, associated companies, jointly controlled entities, and affiliates.</p>
                    <p className="font-bold underline my-3">With RickshawRide ’s service providers and business partners</p>
                    <p>We may provide Personal Data to our vendors, consultants, marketing partners, research firms, and other service providers or business partners. This includes:</p>
                    <ul className="ml-4">
                        {
                            items4.map((item, idx) => (
                                <li className="list-disc mb-2" key={idx}>{item.title}</li>
                            ))
                        }
                    </ul>

                    <h3 className='font-bold text-lg mt-5 mb-1'>With our legal advisors and governmental authorities</h3>
                    <p className='mb-4'>We may share your Personal Data with our legal advisors, law enforcement officials, government authorities and other third parties. This may take place to fulfil the legal purposes (mentioned above), or any of the following circumstances:</p>
                    <ol className='ml-4'>
                        <li className="list-disc mb-2">where it is necessary to respond to an emergency that threatens the life, health, or safety of a person; or</li>
                        <li className="list-disc mb-2">where it is necessary in the public interest (e.g. in a public health crisis, for contact tracing purposes and safeguarding our community).</li>
                    </ol>

                    <h3 className="font-bold text-xl my-5">RETENTION OF PERSONAL DATA</h3>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">We retain your Personal Data for the period necessary to fulfil the Purposes outlined in this Policy unless a longer retention period is required or allowed by law.</li>
                        <li className="list-disc mb-2">Once your Personal Data is no longer necessary for the Services or Purposes, or we no longer have a legal or business purpose for retaining your Personal Data, we take steps to erase, destroy, anonymise or prevent access or use of such Personal Data for any purpose other than compliance with this Policy, or for purposes of safety, security, fraud prevention and detection, in accordance with the requirements of applicable laws.</li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">INTERNATIONAL TRANSFERS OF PERSONAL DATA</h3>
                    <ul className="ml-4">
                        {
                            items11.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <h3 className="font-bold text-lg mt-10 mb-5">COOKIESAND ADVERTISING ON THIRD PARTY PLATFORMS</h3>

                    <ul className="ml-4">
                        <li className="list-disc mb-3">RickshawRide, and third parties with whom we partner, may use cookies, web beacons, tags, scripts, local shared objects such as HTML and Flash (sometimes called “flash cookies”), advertising identifiers (including mobile identifiers such as Apple’s IDFA or Google’s Advertising ID) and similar technology (“<strong>Cookies</strong>”) in connection with your use of the Websites and Apps. Cookies may have unique identifiers, and reside, among other places, on your computer or mobile device, in emails we send to you, and on our web pages. Cookies may transmit Personal Data about you and your use of the Service, such as your browser type, search preferences, IP address, data relating to advertisements that have been displayed to you or that you have clicked on, and the date and time of your use. Cookies may be persistent or stored only during an individual session.</li>
                    </ul>
                    <p className="mb-4">RickshawRide may allow third parties to use Cookies on the Websites and Apps to collect the same type of Personal Data for the same purposes RickshawRide does for itself. Third parties may be able to associate the Personal Data they collect with other Personal Data they have about you from other sources. We do not necessarily have access to or control over the Cookies they use.</p>
                    <p className="mb-4">Additionally, we may share non-personally identifiable Personal Data with third parties, such as location data, advertising identifiers, or a cryptographic hash of a common account identifier (such as an email address), to facilitate the display of targeted advertising on third party platforms.</p>
                    <p className="mb-4">If you do not wish for your Personal Data to be collected via Cookies on the Websites, you may deactivate cookies by adjusting your internet browser settings to disable, block or deactivate cookies, by deleting your browsing history and clearing the cache from your internet browser. You may also limit our sharing of some of this Personal Data through your App (Settings &gt; Privacy) and mobile device settings.</p>

                    <h3 className="font-bold mt-10 mb-3 text-lg">VII.   PROTECTION OF PERSONAL DATA</h3>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">We will take reasonable legal, organisational, and technical measures to ensure that yourPersonal Datais protected. This includes measures to preventPersonal Datafrom getting lost or used or accessed in an unauthorised way.</li>
                        <li className="list-disc mb-2">We limit access to yourPersonal Datato our employees on a need to know basis. Those processing yourPersonal Datawill only do so in an authorised manner and are required to treat your information with confidentiality.</li>
                        <li className="list-disc mb-2">Nevertheless, please understand that the transmission of information via the internet is not completely secure. Although we will do our best to protect yourPersonal Data, we cannot guarantee the security of yourPersonal Datatransmitted through any online means, therefore, any transmission remains at your own risk.</li>
                    </ul>

                    <h3 className="font-bold mt-10 mb-2 text-lg">VIII. YOUR RIGHTS WITH RESPECT TO YOUR PERSONAL DATA</h3>
                    <p className="mb-2">In accordance with applicable laws and regulations, you may be entitled to:</p>
                    <ul className="ml-4 mb-10">
                        {
                            items6.map((item, idx) => (
                                <li className="list-disc mb-2" key={idx}>{item.title}</li>
                            ))
                        }
                    </ul>
                    {
                        items55.map((item, idx) => (
                            <p className="mb-3" key={idx}>{item.title}</p>
                        ))
                    }

                    <h3 className="font-bold text-xl my-5">AMENDMENTS AND UPDATES</h3>
                    <p>RickshawRide shall have the right to modify, update or amend the terms of this Policy at any time by placing the updated Policy on the Websites. By continuing to use the Apps, Websites or Services, purchase products from RickshawRide or continuing to communicate or engage with RickshawRide following the modifications, updates or amendments to this Policy, you signify your acceptance of such modifications, updates or amendments.</p>

                    <h3 className="font-bold text-xl my-5">HOW TO CONTACT US</h3>
                    <div>
                        {
                            items11.map((item, idx) => (
                                <p className="mb-3" key={idx}>{item.title}</p>
                            ))
                        }
                    </div>

                    <p className="font-bold underline">ADDENDUM 1: RickshawRide FOR BUSINESS</p>
                    <h3 className="font-bold text-xl my-5">INTERPRETATION</h3>
                    <p>All capitalised terms but undefined terms used herein shall bear the same meaning as those defined in the Terms of Use and the RickshawRide Privacy Policy (accessible at https://ride.tukxi.com/privacy/).</p>
                    <p>This Addendum forms part of the RickshawRide Privacy Policy. In the event of any inconsistency between the RickshawRide Privacy Policy and this Addendum, this Addendum shall prevail.</p>
                    <h3 className="font-bold text-xl my-5">RickshawRide ’S RELATIONSHIP WITH USERS AND CLIENTS</h3>
                    <p className="font-bold underline">How RickshawRide for Business works</p>
                    <ul className="ml-4">
                        {items32.map((item, idx) => (
                            <li className="list-disc mb-2" key={idx}>{item.title}</li>
                        ))}
                    </ul>
                    <p>For ease of reference, Authorised Users and individual users will each be referred to as a “User” and collectively as “<strong>Users</strong>” in this Addendum.</p>

                    <p className="font-bold underline my-5">RickshawRide is a data controller, so are our Clients</p>
                    <ul className="ml-4">
                        {items22.map((item, idx) => (
                            <li className="list-disc mb-2" key={idx}>{item.title}</li>
                        ))}
                    </ul>
                    <h3 className="font-bold text-lg my-5">III. WHAT PERSONAL DATA IS COLLECTED, PROCESSED AND DISCLOSED</h3>
                    <p className="underline font-medium"> What RickshawRide collects as part of RickshawRide for Business</p>
                    <p className="my-3">In order to provide the RickshawRide for Business feature, the individual user or the Client will be required to provide the following information about the Authorised User to RickshawRide :</p>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">full name;</li>
                        <li className="list-disc mb-2">business or personnel email address; and</li>
                        <li className="list-disc mb-2">other identifying information about the Authorised User as reasonably requested by RickshawRide.</li>
                    </ul>
                    <p className="my-5"></p>
                    <h3 className="font-bold text-lg mt-4 mb-2">RickshawRide will use this information for the purposes of:
                    </h3>
                    <ul className="ml-4">
                        {
                            items8.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                    <ul className="ml-4">
                        <li className="list-disc mb-2">Upon onboarding such User to the App, RickshawRide will process the Personal Data of the User in accordance with the RickshawRide Privacy Policy and this Addendum.</li>
                    </ul>
                    <h3 className="font-bold underline text-lg mt-4 mb-2">What RickshawRide discloses to its Clients
                    </h3>
                    <ul className="ml-4">
                        <li className="list-disc mb-5">RickshawRide will disclose relevant trip and booking information as determined by RickshawRide from time to time to the Client to facilitate Corporate Billing.</li>
                    </ul>

                    <p className="font-bold underline">What RickshawRide discloses to its individual user</p>
                    <ul className="ml-4">
                        <li className=''>Depending on the business profile settings selected by the individual user, the user may retrieve and generate reports containing his/her relevant trip and booking information.</li>
                    </ul>

                    <h3 className="font-bold text-lg my-5">PARTIES’ OBLIGATIONS</h3>
                    <p>The Client and RickshawRide shall each:</p>
                    <ul className="ml-4">
                        {
                            items10.map((item, idx) => (
                                <li key={idx} className="list-disc mb-2">{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="bg-slate-500 py-8 mb-4 lg:h-80 flex justify-center items-center">
                <h1 className="text-6xl my-8 text-white font-bold">Privacy Policy</h1>
            </div>
        </div>
    )
}

export default Privacy