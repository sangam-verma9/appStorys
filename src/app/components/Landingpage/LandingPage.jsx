import { useState, useEffect } from "react";
import "./LandingPage.css"
import Image from "next/image";
import { motion } from "framer-motion";
import landing_main_image from "@/assets/landing_main_image.png"
import survey_popup from "@/assets/survey_popup.png"
import quiz_popup from "@/assets/quiz_popup.png"
import spotlight_popup from "@/assets/spotlight_popup.png"
import scratch_card_popup from "@/assets/scratch_card_popup.png"
import csat_popup from "@/assets/csat_popup.png"
import widgets_popup from "@/assets/widgets_popup.png"
import stories_popup from "@/assets/stories_popup.png"
import pipvideo_popup from "@/assets/pipvideo_popup.png"
import floter_popup from "@/assets/floter_popup.png"
import banner_popup from "@/assets/banner_popup.png"
import letter_icon from "@/assets/letter_icon.png"
const LandingPage = () => {
    const texts = [
        { text: "User Experiences", color: "text-orange-500" },
        { text: "Retention", color: "text-blue-500" },
        { text: "Conversion Rate", color: "text-purple-500" },
        { text: "Stickiness", color: "text-blue-600" },
        { text: "Revenue", color: "text-green-500" },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const [scrollAmount, setScrollAmount] = useState(0);
    const [effectTriggered, setEffectTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            if (!effectTriggered) {
                event.preventDefault();
            }
            setScrollAmount((prev) => Math.min(prev + 15, 350));

            if (!effectTriggered) {
                setEffectTriggered(true);
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => window.removeEventListener("wheel", handleScroll);
    }, [effectTriggered]);

    return (
        <div className='p-5 flex flex-col justify-center'>
            <h3 className={`text-center text-4xl elevate ${effectTriggered ? "opacity-20 -translate-y-96" : "opacity-100"}`}>Elevate</h3>
            <div className={`text-center ${effectTriggered ? "opacity-20 -translate-y-36" : " opacity-100"}`}>
                <h1
                    key={index}
                    className={`text-9xl font-bold opacity-0 animate-fadeInUp ${texts[index].color}`}
                >
                    {texts[index].text}
                </h1>
            </div>
            <h3 className={`text-center text-4xl elevate mt-10 ${effectTriggered ? "opacity-20 -translate-y-40" : " opacity-100"}`}>In Your App & Website</h3>
            <div className="relative w-full h-screen flex items-center justify-center ">

                <img src={landing_main_image.src} className="w-[60%] z-10" alt={"landing main image"} width={150} height={150} />

                <motion.img
                    src={scratch_card_popup.src}
                    alt="Popup Top"
                    className="absolute w-[20%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: -scrollAmount }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    src={quiz_popup.src}
                    alt="Popup Left-Top"
                    className="absolute w-[15%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: -scrollAmount * 1.4, y: -scrollAmount * 0.4 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.img
                    src={survey_popup.src}
                    alt="Popup Left-Bottom"
                    className="absolute w-[15%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: -scrollAmount * 1.4, y: scrollAmount * 0.4 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    src={widgets_popup.src}
                    alt="Popup Right-Top"
                    className="absolute w-[18%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: scrollAmount * 1.1, y: -scrollAmount * 0.62 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.img
                    src={stories_popup.src}
                    alt="Popup Right-Upper"
                    className="absolute w-[18%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: scrollAmount * 1.5, y: -scrollAmount * 0.35 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.img
                    src={pipvideo_popup.src}
                    alt="Popup Right-Center"
                    className="absolute w-[10%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: scrollAmount * 1.35, y: 0.1 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.img
                    src={floter_popup.src}
                    alt="Popup Right-Lower"
                    className="absolute w-[5%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: scrollAmount * 1.26, y: scrollAmount * 0.4 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.img
                    src={banner_popup.src}
                    alt="Popup Right-Bottom"
                    className="absolute w-[20%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: scrollAmount * 1.54, y: scrollAmount * 0.67 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.img
                    src={spotlight_popup.src}
                    alt="Popup Top-Left"
                    className="absolute w-[20%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: -scrollAmount * 0.7, y: -scrollAmount * 0.9 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    src={csat_popup.src}
                    alt="Popup Top-Right "
                    className="absolute w-[20%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: scrollAmount * 0.7, y: -scrollAmount * 0.97 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="w-full flex justify-center">
                <div className="flex py-1.5 px-4 border rounded-lg justify-center items-center bg-white hover:bg-[#FD5F03] text-[#4A4A4A] hover:text-white cursor-pointer">
                    <p className="text-[20px] font-normal mr-2 ">Request A Demo</p>
                    <div className="bg-[#FD5F03] w-[4vw] h-[6vh] flex justify-center items-center rounded-lg">
                        <Image src={letter_icon.src} alt="letter icon" width={33} height={33} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage