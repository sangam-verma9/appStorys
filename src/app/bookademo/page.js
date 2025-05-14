"use client"
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const InteractiveHoverButton = React.forwardRef(
    ({ children, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-white p-2 px-6 text-center font-semibold",
                    className,
                )}
                {...props}
            >
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#FD5F03] transition-all duration-300 group-hover:scale-[100.8]"></div>
                    <span className="inline-block transition-all text-[#FD5F03] font-bold duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                        {children}
                    </span>
                </div>
                <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                    <span>{children}</span>
                    <FaArrowRight />
                </div>
            </button>
        );
    }
);
const Bookademo = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        const enforceCalendlyHeight = () => {
            const interval = setInterval(() => {
                const calendlyFrame = document.querySelector('.calendly-container iframe');
                if (calendlyFrame) {
                    calendlyFrame.style.height = '900px';
                    clearInterval(interval);
                }
            }, 100);

            setTimeout(() => clearInterval(interval), 5000);
        };

        enforceCalendlyHeight();
    }, []);


    return (
        <div className='w-full bg-[#FFF7F3]'>
            <div className='grid lg:grid-cols-2 sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                <div className='mr-[50px]'>
                    <h1 className='text-[60px] font-bold mb-2'>Let’s Connect!</h1>
                    <p className='text-[#282828] text-[20px] mb-8 pr-[80px]'>
                        Let’s explore how AppStorys can help accelerate your user engagement and monetization goals.
                        <br />
                        <br />
                        In this brief 15-minute session, we’ll understand your specific needs and walk you through how our solutions can deliver results.
                    </p>
                    {/* <div>
                        <InteractiveHoverButton
                            className="bg-[#FD5F03] border-2 border-[#FD5F03] text-white h-[50px] font-medium"
                        >
                            Book a demo
                        </InteractiveHoverButton>
                    </div> */}
                </div>
                <div className='bg-white rounded-2xl ml-[10px]'>
                    <div className="calendly-container w-full h-[900px] overflow-hidden rounded-2xl">
                        <div
                            className="calendly-inline-widget w-full h-full"
                            data-url="https://calendly.com/appstorys-support/30min"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Bookademo;