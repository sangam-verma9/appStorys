import React from "react";
import Blog_Bg_1 from '@/assets/Blog_Bg_1.png'
import Blog_App_Retention_main from '@/assets/Blog_App_Retention_main.png'
import Blog_App_Retention_1 from '@/assets/Blog_App_Retention_1.png'
import Blog_App_Retention_2 from '@/assets/Blog_App_Retention_2.png'
import Blog_App_Retention_3 from '@/assets/Blog_App_Retention_3.png'
import Blog_App_Retention_4 from '@/assets/Blog_App_Retention_4.png'
import Blog_App_Retention_5 from '@/assets/Blog_App_Retention_5.png'


const Blog_App_Retention = () => {

    return (
        <div className="w-full flex flex-col justify-start items-center">
            {/* Main Blog Section */}
            <div className="w-full grid grid-rows-1 grid-cols-1">
                {/* Background Image */}
                <img src={Blog_Bg_1.src} alt="AppStorys Background" className="col-start-1 row-start-1 w-full h-auto" />

                {/* Centered Content Box */}
                <div className="col-start-1 row-start-1 flex justify-center">
                    <div className="min-[936px]:w-[62.5%] w-full bg-white flex flex-col justify-start items-start py-[56px] px-[64px] gap-y-[29.51px] max-[550px]:px-[25px] max-[550px]:py-[25px]">

                        <h1 className="capitalize text-[42px] font-Montserrat font-semibold leading-[110%] tracking-[-1px] text-[#1A345A] min-[761px]:w-[635px] max-[550px]:text-[40px]">
                            5 Ways to Increase App Retention
                        </h1>

                        <p className="uppercase text-[#A8A8A8] font-semibold font-InstrumentSans text-[10px] w-full flex justify-start items-center leading-[150%] tracking-[2px] gap-x-[6px]">
                            21 september 2024 <div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div> 5 mins. read
                        </p>

                        <img src={Blog_App_Retention_main.src} alt={'AppStorys Blog_App_Retention_main'} className="h-[340px] w-auto mt-[29.49px] max-[1326px]:w-full max-[1326px]:h-auto" />

                        <p className="text-[18px] font-InstrumentSans text-[#545454]">
                            In today’s competitive mobile app landscape, retaining users is as crucial as acquiring them. The longer users stay engaged with your app, the more likely they are to provide value—whether through in-app purchases, ad views, or simply enhancing your app's credibility through active usage. So how do you do that? Read on to learn the creative ways using which you can increase app retention.
                            <br />
                            <br />
                            Here are five effective ways to increase app retention by enhancing the user experience in the best possible way.
                        </p>

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">1. Picture-in-Picture (PiP) Videos</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                One powerful way to boost app retention is by using Picture-in-Picture (PiP) videos, especially for media-heavy apps.
                            </p>
                            <br />
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    PiP allows users to minimize videos into a small, movable window while continuing to navigate the app.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    It keeps users engaged with content without forcing them to stop what they’re doing. For example, if a user is watching a tutorial or a video stream, they can keep it playing in the background while checking notifications, browsing different sections of the app, or even switching to another app.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    This non-intrusive, multi-tasking feature ensures that users are continuously engaged, making it less likely they’ll abandon the app.
                                </li>
                            </ul>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">Using PiP videos, you keep media consumption seamless, reduce drop-off points, and give users more flexibility in how they interact with your app, making them more likely to return regularly.</p>
                        </div>

                        <img src={Blog_App_Retention_1.src} alt={'AppStorys Blog_App_Retention_1'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">2. Coach Marks</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Coach marks are subtle onboarding tools that guide users through your app's key features. These are interactive visual hints or pointers that pop up the first time a user opens the app or visits a new feature. These marks explain how certain elements work and provide tips on how to navigate the interface.
                            </p>
                            <br />
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                When implemented effectively, these are the following ways they can help generate customer retention:
                            </p>
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    Coach marks can significantly reduce the learning curve for new users, making them feel more comfortable and competent using your app.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    A well-designed coach mark experience keeps users from feeling overwhelmed by too much information at once.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    With coach marks users understand how to use the app better, thus making them more likely to stay engaged and return.
                                </li>
                            </ul>
                            <br />
                        </div>

                        <img src={Blog_App_Retention_2.src} alt={'AppStorys Blog_App_Retention_2'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">3. Floaters</h1>

                        <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                            Floaters are another retention-enhancing tool. These are small, persistent buttons or icons that hover on the screen and provide quick access to key features or shortcuts. For instance, a floater could direct users to customer support, FAQs, or even special promotions.
                            <br />
                            <br />
                            Floaters serve as constant, yet unobtrusive reminders of important app elements, ensuring that users don’t miss out on useful tools. When users know help or key functions are just a tap away, they feel more confident using your app. AppStorys can help you create engaging floaters for your platform, thereby increasing the customer’s likelihood of sticking around.
                        </p>

                        <img src={Blog_App_Retention_3.src} alt={'AppStorys Blog_App_Retention_3'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">4. In-App Stories</h1>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                Inspired by the popularity of social media stories, integrating in-app stories is an increasingly effective way to keep users engaged. How do they help?
                            </p>
                            <br />
                            <ul style={{ listStyleType: 'disc', listStyle: 'inside' }}>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    These stories can provide users with updates, offers, or new feature introductions.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    The visual and temporary nature of stories creates a sense of urgency, which can prompt users to take action immediately—whether it's a special discount or a limited-time feature.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    In-app stories help maintain ongoing interaction with users by delivering fresh and engaging content in a familiar, digestible format.
                                </li>
                                <li className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                                    These timely, visually appealing stories provide users with regular updates and reasons to revisit your app, leading to improved retention.
                                </li>
                            </ul>
                            <br />
                        </div>

                        <img src={Blog_App_Retention_4.src} alt={'AppStorys Blog_App_Retention_4'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto " />

                        <h1 className="text-[24px] font-InstrumentSans font-medium text-[#1F4D9C] leading-[102%]">5. Banners</h1>

                        <p className="text-[#545454] text-[18px] font-InstrumentSans leading-[128%]">
                            Banners are another effective retention tool that can be used to highlight important updates, promotions, or new features within the app. Unlike more intrusive forms of advertising or notifications, banners are typically designed to blend in with the app’s interface. They appear in specific sections of the app, often at the top or bottom of the screen, and can be dismissed easily by the user.
                            <br />
                            <br />
                            By using banners, you can notify users of app changes or exclusive offers without interrupting their experience. Well-placed, informative banners help keep users in the loop and engaged without overwhelming them with pop-ups or push notifications.
                            <br />
                            <br />
                            So overall, implementing subtle, yet effective features like Picture-in-Picture videos, coach marks, floaters, in-app stories, and banners helps in creating a more engaging, seamless, and user-friendly platform for your customers. For more details on these services, reach out to the AppStorys team to help you boost your app’s retention rates over time.
                        </p>

                        <img src={Blog_App_Retention_5.src} alt={'AppStorys Blog_App_Retention_5'} className="h-[357px] w-auto max-[1326px]:w-full max-[1326px]:h-auto" />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Blog_App_Retention;
