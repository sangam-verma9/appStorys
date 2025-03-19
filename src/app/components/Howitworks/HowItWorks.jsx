import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
import how_it_works_1 from "@/assets/how_it_works_1.png"

const Card = ({ text, index, activeIndex, total }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

    useEffect(() => {
        if (inView) {
            const offset = index - activeIndex;
            if (offset === 0) {
                controls.start({ opacity: 1, x: 0, y: 0, zIndex: total });
            } else if (offset > 0) {
                controls.start({
                    opacity: Math.max(0.2, 1 - (Math.abs(offset) * 0.3)),
                    x: 50 * offset,
                    y: 10 * offset,
                    zIndex: total - offset
                });
            } else {
                controls.start({
                    opacity: Math.max(0.2, 1 - (Math.abs(offset) * 0.3)),
                    x: 50 * offset,
                    y: 10 * offset,
                    zIndex: total + offset
                });
            }
        }
    }, [controls, inView, activeIndex, index, total]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.5, x: 0, y: 0, zIndex: total - Math.abs(index - activeIndex) }}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" shadow-lg p-6 rounded-lg w-[900px] h-[300px] absolute bg-[#B5DFFF] border-4 border-white"
            style={{ left: "20%", transform: "translateX(-50%)" }}
        >
            {text}
        </motion.div>
    );
};
const HowItWorks = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.3 }); // Detect section visibility

    const cards = [
        { title: "Integrate SDK", content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.", icon: "💻" },
        { title: "Integrate SDK", content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.", icon: "📱" },
        { title: "Integrate SDK", content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.", icon: "☁️" }
    ];

    const handleWheel = (event) => {
        if (!inView || isAnimating) return; // Only animate when in viewport
        setIsAnimating(true);

        if (event.deltaY > 0) {
            setActiveIndex((prev) => Math.min(prev + 1, cards.length - 1));
        } else {
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        }

        setTimeout(() => setIsAnimating(false), 800);
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, [isAnimating, inView]);
    return (
        <div className='px-16 py-5  flex flex-col justify-center bg-gradient-to-b from-white to-[#FFEBE0]'>
            <h3 className={`${satisfy.className} text-[#FD5F03] text-[26px] text-center`}>How It Works</h3>
            <h1 className={`${bricolageGrotesque.className} text-[46px] capitalize text-center mb-2 leading-none`}>Integration Process {"<"} 30 Mins</h1>
            <p className={` ${outfit.className} text-center my-2`}>Install our SDK in less than 30 minutes and use our <br /> dashboards that say a lot more than just graphs.</p>
            <div className="relative my-20 flex flex-col items-center justify-center">
                <div ref={ref} className="relative w-full h-[300px] flex items-center justify-center">
                    {cards.map((card, index) => (
                        <Card key={index} text={
                            <div className="flex items-center">
                                <div className="flex flex-col w-[50%]">
                                    <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                                    <p className="text-gray-600 text-center">{card.content}</p>
                                </div>
                                <div className="w-[50%] flex justify-center items-center">
                                    <img src={how_it_works_1.src} alt="how it works" className=" w-[80%]" />
                                </div>
                            </div>
                        }
                            index={index}
                            activeIndex={activeIndex}
                            total={cards.length} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks