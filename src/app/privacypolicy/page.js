"use client";

import { useRef, useState } from 'react'

const PrivacyPolicy_Page = () => {
    const [active, setActive] = useState(1)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        setActive(sectionId)
        document.getElementById(sectionId.toString()).scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false) // Close mobile menu after selection
    }

    const menuItems = [
        { id: 1, title: "Privacy Policy for AppStorys" },
        { id: 2, title: "Interpretation and Definitions" },
        { id: 3, title: "Collecting and Using Your Personal Data" },
        { id: 4, title: "Use of Your Personal Data" },
        { id: 5, title: "Retention of Your Personal Data" },
        { id: 6, title: "Transfer of Your Personal Data" },
        { id: 7, title: "Delete Your Personal Data" },
        { id: 8, title: "Disclosure of Your Personal Data" },
        { id: 9, title: "Children's Privacy" },
        { id: 10, title: "Links to Other Websites" },
        { id: 11, title: "Changes to this Privacy Policy" },
        { id: 12, title: "Contact Us" }
    ]

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
                
                body {
                    font-family: 'SF Pro Display', sans-serif;
                }
            `}</style>

            <main className="flex flex-col justify-center items-center w-full bg-[#ffffff] gap-y-[20px] px-4 md:px-[40px]">
                <section className='flex justify-start items-center w-full bg-[#ffffff]'>
                    <h1 className='capitalize text-2xl md:text-[38px] font-medium text-[#FD5F03]'>Privacy Policy</h1>
                </section>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden w-full mb-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-full bg-[#FD5F03] text-white px-4 py-3 rounded-lg flex justify-between items-center font-medium"
                    >
                        <span>Navigate Sections</span>
                        <span className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {menuItems.map((item) => (
                                <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${active === item.id ? 'bg-orange-50 text-[#FD5F03] font-medium' : 'text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {active === item.id && (
                                                <div className='h-2 w-2 rounded-full bg-[#939292]'></div>
                                            )}
                                            <span className="capitalize">{item.title}</span>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <section className='flex justify-start items-start w-full bg-[#ffffff] gap-x-[80px]'>
                    {/* Desktop Side Nav */}
                    <div className="hidden lg:flex flex-col justify-start items-start gap-y-[20px] max-w-[30%] max-h-[80vh] overflow-y-auto sticky top-4">
                        {menuItems.map((item) => (
                            <div key={item.id} className='flex justify-start items-center gap-x-[7px]'>
                                {active === item.id && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p
                                    className='capitalize font-medium text-[16px] text-[#FD5F03] hover:cursor-pointer hover:underline transition-all'
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className='flex flex-col justify-start items-start min-h-[100vh] w-full lg:w-[50%] bg-[#fff] gap-y-[16px]'>
                        {/* Privacy Policy for AppStorys */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='1'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 1 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Privacy Policy for AppStorys</p>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-y-[15px] text-[#545454] text-[14px] px-4 md:px-[20px]'>
                                <p>Last updated: December 02, 2024</p>
                                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.</p>
                            </div>
                        </div>

                        {/* Interpretation and Definitions */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='2'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 2 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Interpretation and Definitions</p>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-y-[15px] text-[#545454] text-[14px] px-4 md:px-[20px]'>
                                <p className="font-medium">Interpretation</p>
                                <p>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>
                                <p className="font-medium">Definitions</p>
                                <p>For the purposes of this Privacy Policy:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                                    <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ASOWin Services Private Limited, Office #37, Tapasya Corp Heights, Sector 126, Noida.</li>
                                    <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                                    <li><strong>Country</strong> refers to: Uttar Pradesh, India</li>
                                    <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                    <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                                    <li><strong>Service</strong> refers to the Website.</li>
                                    <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                                    <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                                    <li><strong>Website</strong> refers to AppStorys, accessible from https://appstorys.com</li>
                                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Collecting and Using Your Personal Data */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='3'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 3 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Collecting and Using Your Personal Data</p>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-y-[15px] text-[#545454] text-[14px] px-4 md:px-[20px]'>
                                <p className="font-medium">Types of Data Collected</p>

                                <div>
                                    <p className="font-medium mb-2">Personal Data</p>
                                    <p className="mb-2">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Email address</li>
                                        <li>First name and last name</li>
                                        <li>Phone number</li>
                                        <li>Usage Data</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium mb-2">Usage Data</p>
                                    <p className="mb-2">Usage Data is collected automatically when using the Service.</p>
                                    <p className="mb-2">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                                </div>

                                <div>
                                    <p className="font-medium mb-2">Tracking Technologies and Cookies</p>
                                    <p className="mb-2">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</li>
                                        <li><strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons that permit the Company to count users who have visited those pages or opened an email.</li>
                                    </ul>
                                    <p className="mt-4">For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
                                </div>
                            </div>
                        </div>

                        {/* Use of Your Personal Data */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='4'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 4 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Use of Your Personal Data</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>The Company may use Personal Data for the following purposes:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                                    <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
                                    <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
                                    <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                                    <li>To provide You with news, special offers and general information about other goods, services and events.</li>
                                    <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                                    <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
                                    <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.</li>
                                </ul>

                                <p>We may share Your personal information in the following situations:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service.</li>
                                    <li>For business transfers: We may share or transfer Your personal information in connection with any merger, sale of Company assets, financing, or acquisition.</li>
                                    <li>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                                    <li>With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                                    <li>With other users: when You share personal information or otherwise interact in the public areas with other users.</li>
                                    <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Retention of Your Personal Data */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='5'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 5 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Retention of Your Personal Data</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
                                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                            </div>
                        </div>

                        {/* Transfer of Your Personal Data */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='6'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 6 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Transfer of Your Personal Data</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                            </div>
                        </div>

                        {/* Delete Your Personal Data */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='7'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 7 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Delete Your Personal Data</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                                <p>Our Service may give You the ability to delete certain information about You from within the Service. You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
                                <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                            </div>
                        </div>

                        {/* Disclosure of Your Personal Data */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='8'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 8 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Disclosure of Your Personal Data</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <div>
                                    <p className="font-medium mb-2">Business Transactions</p>
                                    <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                                </div>

                                <div>
                                    <p className="font-medium mb-2">Law Enforcement</p>
                                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                                </div>

                                <div>
                                    <p className="font-medium mb-2">Other Legal Requirements</p>
                                    <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                                        <li>Comply with a legal obligation</li>
                                        <li>Protect and defend the rights or property of the Company</li>
                                        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                        <li>Protect the personal safety of Users of the Service or the public</li>
                                        <li>Protect against legal liability</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium mb-2">Security of Your Personal Data</p>
                                    <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                                </div>
                            </div>
                        </div>

                        {/* Children's Privacy */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='9'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 9 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Children's Privacy</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                                <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
                            </div>
                        </div>

                        {/* Links to Other Websites */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='10'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 10 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Links to Other Websites</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                            </div>
                        </div>

                        {/* Changes to this Privacy Policy */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='11'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 11 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Changes to this Privacy Policy</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className='flex flex-col justify-start items-start gap-y-[16px] w-full border-b-[1px] border-[#BBBBBB] py-[15px]' id='12'>
                            <div className='flex justify-start items-center gap-x-[7px]'>
                                {active === 12 && (
                                    <div className='h-[8px] w-[8px] rounded-full bg-[#939292]'></div>
                                )}
                                <p className='capitalize font-medium text-[16px] text-[#FD5F03]'>Contact Us</p>
                            </div>
                            <div className='flex flex-col justify-start items-start text-[#545454] text-[14px] px-4 md:px-[20px] space-y-4'>
                                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                                <ul className="list-disc list-inside ml-4">
                                    <li>By email: support@appstorys.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PrivacyPolicy_Page