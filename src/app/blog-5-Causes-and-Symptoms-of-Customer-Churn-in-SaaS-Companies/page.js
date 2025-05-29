import React from "react";
import Blog_Bg_3 from '@/assets/Blog_Bg_3.png'
import Blog_Feature_Discovery_main from '@/assets/Blog_Feature_Discovery_main.png'
import Blog_Feature_Discovery_main_2 from '@/assets/Blog_Feature_Discovery_main_2.png'
import Blog_Feature_Discovery_1 from '@/assets/Blog_Feature_Discovery_1.png'
import Blog_Feature_Discovery_2 from '@/assets/Blog_Feature_Discovery_2.png'
import Blog_Feature_Discovery_3 from '@/assets/Blog_Feature_Discovery_3.png'
import Blog_Feature_Discovery_4 from '@/assets/Blog_Feature_Discovery_4.png'


const Blog_Feature_Discovery = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center">
            {/* Main Blog Section */}
            <div className="w-full grid grid-rows-1 grid-cols-1">
                {/* Background Image */}
                <img src={Blog_Bg_3.src} alt={'AppStorys Blog_Bg_3'} className="col-start-1 row-start-1 w-full h-auto" />

                {/* Centered Content Box */}
                <div className="col-start-1 row-start-1 flex justify-center">
                    <div className="min-[936px]:w-[62.5%] bg-white flex flex-col justify-start items-start py-[56px] px-[64px] gap-y-[29.51px] max-[550px]:px-[25px] max-[550px]:py-[25px]">

                        <h1 className="text-[42px] font-Montserrat font-semibold leading-[110%] tracking-[-1px] text-[#1A345A] min-[761px]:w-[635px] max-[550px]:text-[40px] capitalize">
                            Driving Feature Discovery And Adoption In Super Apps
                        </h1>

                        <p className="uppercase text-[#A8A8A8] font-semibold font-InstrumentSans text-[10px] w-full flex justify-start items-center leading-[150%] tracking-[2px] gap-x-[6px]">
                            21 september 2024 <div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div> 5 mins. read
                        </p>

                        <img src={Blog_Feature_Discovery_main.src} alt={'AppStorys Blog_Feature_Discovery_main'} className="h-[340px] w-auto mt-[29.49px] max-[1326px]:w-full max-[1326px]:h-auto" />

                        <p className="text-[18px] font-InstrumentSans text-[#545454]">
                            Super apps, which bundle various services within a single platform, aim to make life easier for users, but they also face the challenge of ensuring that users are aware of all the features they offer. So how is feature discovery done efficiently? Feature discovery isn’t just about making new tools available; it's about making sure users see value in using them. This is where effective strategies like in-app messaging, personalized onboarding, interactive banners, and targeted promotions come in.
                        </p>

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">The Role of Feature Discovery in Super Apps</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                When users first download an app, they may not explore all its features immediately. They tend to focus on the core functionality they need and may never venture into the broader ecosystem of tools and services available. This is especially true for super apps like Myntra, Paytm, and Upstox, which bundle a wide range of services, from payments to e-commerce to ride-hailing, within one interface.
                                <br />
                                <br />
                                So, what does feature discovery help with?
                                <br />
                                <br />
                                Feature discovery drives engagement by presenting these options to users when they are most likely to find them valuable. This helps users understand how the app can address multiple needs, and at the same time, increases their reliance on the platform. The challenge lies in ensuring that users discover features in a way that feels organic, not overwhelming. Below are some strategies talked about to help drive feature discovery effectively.
                            </p>
                            <br />
                        </div>

                        <img src={Blog_Feature_Discovery_main_2.src} alt={'AppStorys Blog_Feature_Discovery_main_2'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">1. Personalizing Feature Adoption</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Personalization is key to improving feature adoption. Super apps are used by millions of people, but every user has different preferences. Personalizing feature discovery based on user behavior, preferences, and patterns ensures that the right features are promoted at the right time.
                                <br />
                                <br />
                                Myntra, a fashion-focused app, provides a great example of this. Myntra uses expandable floaters to introduce users to their MyFashionGPT feature, which provides AI-driven fashion suggestions. Users who are interested in curated looks based on their shopping history are presented with this tool when it aligns with their interests. This makes the feature more appealing and leads to higher adoption rates.
                                <br />
                                <br />
                                Similarly, MobiKwik, a mobile wallet and payment app, uses picture-in-picture (PiP) videos to introduce new features. For instance, when MobiKwik launched its Xtra investment option, a PiP video was embedded in the app, giving users a quick tutorial on how the investment feature works. The video played while users continued using the app, minimizing disruption and subtly promoting the new feature.
                            </p>
                        </div>

                        <img src={Blog_Feature_Discovery_1.src} alt={'AppStorys Blog_Feature_Discovery_1'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">2. Using Interactive Banners and Messaging for Engagement</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Interactive banners and messaging are powerful tools to guide users toward new features. These elements can capture attention without being intrusive, providing users with useful information without interrupting their experience.
                                <br />
                                <br />
                                Upstox, a stock trading app, employed a fixed-top banner to promote its “Investor Mode” to users who were already traders. The banner stayed in place as users navigated the app, making it easy to learn about this new feature without having to search for it.
                                <br />
                                <br />
                                This tactic works because it integrates seamlessly into the user experience. Unlike pop-ups or full-screen takeovers, fixed banners provide constant but unobtrusive reminders of the new feature. Users can click on the banner to learn more when they’re ready, ensuring that discovery happens at their own pace.
                            </p>
                        </div>

                        <img src={Blog_Feature_Discovery_2.src} alt={'AppStorys Blog_Feature_Discovery_2'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">3. Full-Screen Videos as a High-Impact Strategy</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Sometimes, it’s necessary to give a feature more prominence, especially when it’s central to the app’s offering or is a significant new addition. Full-screen videos are a great way to achieve this, as they provide an immersive experience that fully captures the user’s attention.
                                <br />
                                <br />
                                Niyo also experimented with full-screen videos to promote its international debit card offering. For frequent travelers, this feature was crucial, and a full-screen video allowed Niyo to highlight the benefits of the card in a visually engaging way. The video played when users opened the app, ensuring high visibility.
                                <br />
                                <br />
                                Full-screen videos are effective because they take over the user’s screen, but they must be used sparingly. Overuse can lead to user frustration, but when done strategically—such as when introducing a major new feature—they can be highly effective in driving adoption.
                                <br />
                                <br />
                                PokerBaazi, a gaming platform, used a floating action button to draw attention to its 10 Cr Prize Pool tournament. This subtle yet engaging element increased participation by making users aware of the high-value event. The button’s strategic placement ensured that it wasn’t disruptive, but still captured the attention of competitive users.
                            </p>
                        </div>

                        <img src={Blog_Feature_Discovery_3.src} alt={'AppStorys Blog_Feature_Discovery_3'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">4. Align Feature Discovery with Timing and Context</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Timing is everything when it comes to driving feature discovery. The most relevant features should be promoted at the most appropriate times to maximize adoption. For instance, promoting a new payment feature when a user is about to complete a purchase increases the likelihood of adoption.
                                <br />
                                <br />
                                Similarly, Myntra positions its floating buttons and banners in contexts where users are actively exploring fashion items, making it more likely they’ll engage with the MyFashionGPT feature. This contextual promotion is key to making sure new features feel like helpful additions rather than distractions.
                            </p>
                        </div>

                        <img src={Blog_Feature_Discovery_4.src} alt={'AppStorys Blog_Feature_Discovery_4'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto" />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">Conclusion</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Driving feature discovery and adoption in super apps requires a combination of smart design, personalization, and timing. By using tools like in-app messaging, interactive banners, and full-screen videos, super apps can introduce new features in ways that are seamless and engaging for users.
                                <br />
                                <br />
                                AppStorys helps product and growth teams improve feature discovery and adoption using effective strategies like in-app messaging and many more. You can create in-app engagement experiences like the examples above, without any hassle. Contact our team to know more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog_Feature_Discovery;
