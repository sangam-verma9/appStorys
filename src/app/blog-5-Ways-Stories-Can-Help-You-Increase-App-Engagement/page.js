import React from "react";
import Blog_Bg_3 from '@/assets/Blog_Bg_3.png'
import Blog_App_Saas_main from '@/assets/Blog_App_Saas_main.png'
import Blog_App_Saas_1 from '@/assets/Blog_App_Saas_1.png'
import Blog_App_Saas_2 from '@/assets/Blog_App_Saas_2.png'
import Blog_App_Saas_3 from '@/assets/Blog_App_Saas_3.png'
import Blog_App_Saas_4 from '@/assets/Blog_App_Saas_4.png'
import Blog_App_Saas_5 from '@/assets/Blog_App_Saas_5.png'

const Blog_App_Saas = () => {

    return (
        <div className="w-full flex flex-col justify-start items-center">
            {/* Main Blog Section */}
            <div className="w-full grid grid-rows-1 grid-cols-1">
                {/* Background Image */}
                <img src={Blog_Bg_3.src} alt={'AppStorys Blog_Bg_3'} className="col-start-1 row-start-1 w-full h-auto" />

                {/* Centered Content Box */}
                <div className="col-start-1 row-start-1 flex justify-center">
                    <div className="min-[936px]:w-[62.5%] bg-white flex flex-col justify-start items-start py-[56px] px-[64px] gap-y-[29.51px] max-[550px]:px-[25px] max-[550px]:py-[25px]">

                        <h1 className="capitalize text-[42px] font-Montserrat font-semibold leading-[110%] tracking-[-1px] text-[#1A345A] min-[761px]:w-[635px] max-[550px]:text-[40px]">
                            5 Causes and Symptoms of Customer Churn in SaaS Companies
                        </h1>

                        <p className="uppercase text-[#A8A8A8] font-semibold font-InstrumentSans text-[10px] w-full flex justify-start items-center leading-[150%] tracking-[2px] gap-x-[6px]">
                            21 september 2024 <div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div> 5 mins. read
                        </p>

                        <img src={Blog_App_Saas_main.src} alt={'AppStorys Blog_App_Saas_main'} className="h-[340px] w-auto mt-[29.49px] max-[1326px]:w-full max-[1326px]:h-auto" />

                        <p className="text-[18px] font-InstrumentSans text-[#545454]">
                            Customer churn is a critical issue for SaaS (Software as a Service) companies, impacting revenue and growth. Understanding the causes and symptoms of churn is essential for retaining customers and improving business performance.
                            <br />
                            <br />
                            In this blog, we will be discussing the causes and symptoms of customer churn at length. Read on to know what they are!
                        </p>

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">1. Lack of Product Fit</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                One of the primary reasons customers churn is that they find the product doesn’t meet their needs. This misalignment can arise from a failure to understand customer requirements or changes in the market.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Symptoms
                            </p>
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Decreased usage metrics: If customers aren't using core features, it’s a sign that the product isn’t fulfilling their expectations.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Feedback indicating frustration: Direct customer feedback through surveys or reviews may highlight dissatisfaction with specific features or functionalities.
                                </li>
                            </ul>
                        </div>

                        <img src={Blog_App_Saas_1.src} alt={'AppStorys Blog_App_Saas_1'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">2. Poor Customer Support</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Exceptional customer support is crucial for maintaining customer satisfaction. When users encounter issues or have questions, they expect prompt and effective assistance. Poor support can drive customers away.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Symptoms
                            </p>
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Increased support tickets: A surge in unresolved support tickets can indicate that customers are struggling with the product.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Negative customer feedback: Frequent complaints about support responsiveness or quality can be a strong indicator that customers are unhappy.
                                </li>
                            </ul>
                            <br />
                        </div>

                        <img src={Blog_App_Saas_2.src} alt={'AppStorys Blog_App_Saas_2'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">3. Pricing Issues</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Pricing is a significant factor influencing customer retention. If customers perceive that the cost of the service outweighs the benefits, they may consider switching to a competitor.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Symptoms
                            </p>
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Cancellation inquiries: If customers are frequently asking about cancellation processes, it may reflect dissatisfaction with pricing.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Declining sales or upsell opportunities: If customers are hesitant to renew or upgrade, this can signal issues with perceived value.
                                </li>
                            </ul>
                            <br />
                        </div>

                        <img src={Blog_App_Saas_3.src} alt={'AppStorys Blog_App_Saas_3'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">4. Inadequate Onboarding</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                An effective onboarding process is crucial for ensuring customers can successfully utilize the product from the start. A poor onboarding experience can lead to confusion and frustration, prompting customers to leave.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Symptoms
                            </p>
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    High early churn rates: Customers who drop off shortly after signing up may not have received adequate guidance or support during onboarding.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Low engagement levels: If new users are not engaging with the product, it may indicate that they haven’t been effectively onboarded.
                                </li>
                            </ul>
                            <br />
                        </div>

                        <img src={Blog_App_Saas_4.src} alt={'AppStorys Blog_App_Saas_4'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">5. Competitor Actions</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                In a competitive SaaS landscape, rivals continuously innovate and improve their offerings. If customers perceive better value or features elsewhere, they may churn.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Symptoms
                            </p>
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Increased customer inquiries about competitors: If customers start asking about alternative solutions, it may signal that they are considering switching.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Market research feedback: Monitoring social media and review platforms can reveal customers discussing competitor advantages, indicating potential churn.
                                </li>
                            </ul>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Customer churn is an inevitable challenge for SaaS companies, but understanding its causes and symptoms can help in crafting effective retention strategies.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                So, how do you prevent customer churn?
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                By focusing on product fit, customer support, pricing strategies, onboarding processes, and competitive positioning, SaaS businesses can minimize churn and foster long-term relationships with their customers. On top of it all, regularly analyzing customer feedback and usage data can also provide valuable insights, allowing companies to adapt and evolve in response to their customers’ needs.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                To get more information about the same, contact the AppStorys team. With our insights, you can address foreseeable churn triggers before they amplify and help maintain a long-term satisfied customer base.
                            </p>
                        </div>

                        <img src={Blog_App_Saas_5.src} alt={'AppStorys Blog_App_Saas_5'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog_App_Saas;
