"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import bookademogroup1 from '@/assets/bookademogroup1.png'
import bookademogroup2 from '@/assets/bookademogroup2.png'
import bookademogroup3 from '@/assets/bookademogroup3.png'
import bookademogroup4 from '@/assets/bookademogroup4.png'
import faq_icon from '@/assets/faq_icon.png'
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
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "With AppStorys, we were able to launch contextual onboarding flows in days, not weeks. It's drastically improved our user activation rate and freed up our product and engineering teams to focus on core features."
        },
        {
            id: 2,
            text: "AppStorys helped us test and iterate onboarding experiments quickly. What used to take weeks of dev effort now takes hours. Our first-time user retention has improved significantly."
        },
        {
            id: 3,
            text: "We were looking for a way to guide users better inside our app without relying on engineers every time. AppStorys not only solved that but also gave us insights into what works. We've seen a 20% boost in feature adoption."
        },
        {
            id: 4,
            text: "From onboarding to feature announcements, AppStorys lets us deliver the right message at the right time. We've decreased user confusion and increased engagement without needing additional dev cycles."
        }
    ];
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const [openIndex, setOpenIndex] = useState(-1);

    const faqData = [
        {
            question: "What is AppStorys?",
            answer: "AppStorys is a leading app engagement all in one platform which allows you to integrate growth tools in your App without any engineering efforts."
        },
        {
            question: "What is your pricing?",
            answer: "Pricing depends on your MAU. We can assure you that you get highest quality service and extremely competitive rates."
        },
        {
            question: "How long does it take to integrate?",
            answer: "The core basic technology integration takes about 30 minutes or less. Our team is there to guide you."
        },
        {
            question: "Is it safe to integrate AppStorys SDK?",
            answer: "Our SDK is built using the most enhanced security checks and end to end compliance measures in place. AppStorys is also SOC 2 Type 2 certified by an external auditor verifying all security checks to be in place."
        },
        {
            question: "What sets AppStorys apart from competition?",
            answer: "Customer service. Nothing else matters to us more than customer experience. We go lengths to make sure each and every customer is satisfied."
        },
        {
            question: "Do you offer custom SDKs?",
            answer: "Yes, we are very open to customizing SDKs and requirements for different brands as per requirements."
        },
        {
            question: "Can I host everything on my server while keeping AppStorys SDK?",
            answer: "Yes, for larger enterprise clients, we do offer this flexibility where you can take the entire setup from us for a one time cost and continue to host data on your servers. We then charge a small monthly maintenance fee if you choose for our team to maintain updated codebase."
        }

    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };


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
        <div className='w-full bg-[#FFF7F3] justify-center grid'>
            <div className='grid lg:grid-cols-2 sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-start mt-5'>
                <div className='mr-[50px] mb-5 grid justify-center'>
                    <h1 className='md:text-[60px] text-[40px] font-bold mb-2'>Let’s Connect!</h1>
                    <p className='text-[#282828] text-[20px] mb-8 md:pr-[80px] pr-[0px]'>
                        Discover how AppStorys can boost your user engagement and help you reach your goals.
                        <br />
                        <br />
                        Join us for a brief 15-minute session where we’ll understand your specific requirements and demonstrate how AppStorys can help you accelerate engagement and drive revenue through tailored solutions.
                    </p>
                    <div className=' hidden md:grid grid-cols-1 md:grid-cols-2 gap-2 justify-center'>
                        <div className='bg-white py-5 px-5 rounded-lg border-2 border-[#FD5F03]'>
                            <img src={bookademogroup1.src} alt="bookademogroup1" width={50} height={50} className='mb-1' />
                            <h3 className='font-bold mb-1'>Book a Demo</h3>
                            <p className='text-sm mb-2'>A quick 15 minute demo to show you the power of AppStorys. Explore all features, a quick walkthrough of the dashboard and understand how we can help you improve your core App metrics.</p>
                        </div>
                        <div className='bg-white py-5 px-5 rounded-lg border-2 border-[#FD5F03]'>
                            <img src={bookademogroup2.src} alt="bookademogroup2" width={50} height={50} className='mb-1' />
                            <h3 className='font-bold mb-1'>Have questions? Contact Us</h3>
                            <p className='text-sm mb-2'>If you have any questions or just want to say “Hi”, we’d love to connect with you.</p>
                        </div>
                        <div className='bg-white py-5 px-5 rounded-lg border-2 border-[#FD5F03]'>
                            <img src={bookademogroup3.src} alt="bookademogroup3" width={50} height={50} className='mb-1' />
                            <h3 className='font-bold mb-1'>Discover our platform</h3>
                            <p className='text-sm mb-2'>See all features live in a demo App connected to our powerful dashboard and understand how we can achieve your target KPIs</p>
                        </div>
                        <div className='bg-white py-5 px-5 rounded-lg border-2 border-[#FD5F03]'>
                            <img src={bookademogroup4.src} alt="bookademogroup4" width={50} height={50} className='mb-1' />
                            <h3 className='font-bold mb-1'>Media Enquiry/Partnerships</h3>
                            <p className='text-sm mb-2'>Part of a media group or have a partnership proposal? Our marketing & partnerships team would love to hear you out.</p>
                        </div>
                    </div>
                    <div className='hidden md:grid mt-5 w-[300px]  md:w-[600px]'>
                        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#FD5F03]">

                            <div className="relative h-72 md:h-48 pb-8 pt-3 ">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out h-full"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="w-full flex-shrink-0 flex items-center justify-center p-8 md:p-12 "
                                        >
                                            <div className="text-center">
                                                <p className=" leading-relaxed text-[16px] ">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="absolute bottom-4 mt-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                            ? 'bg-orange-500 scale-110'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl ml-[10px] border-2 border-[#FD5F03]'>
                    <div className="calendly-container w-full h-[900px] overflow-hidden rounded-2xl">
                        <div
                            className="calendly-inline-widget w-full h-full"
                            data-url="https://calendly.com/appstorys-support/30min"
                        ></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid visible md:hidden grid-cols-1 md:grid-cols-2 gap-2 justify-center px-10 mb-5'>
                    <div className='bg-white py-5 px-5 rounded-lg  border-2 border-[#FD5F03]'>
                        <img src={bookademogroup1.src} alt="bookademogroup1" width={50} height={50} className='mb-1' />
                        <h3 className='font-bold mb-1'>Book a Demo</h3>
                        <p className='text-sm mb-2'>A quick 15 minute demo to show you the power of AppStorys. Explore all features, a quick walkthrough of the dashboard and understand how we can help you improve your core App metrics.</p>
                    </div>
                    <div className='bg-white py-5 px-5 rounded-lg  border-2 border-[#FD5F03]'>
                        <img src={bookademogroup2.src} alt="bookademogroup1" width={50} height={50} className='mb-1' />
                        <h3 className='font-bold mb-1'>Have questions? Contact Us</h3>
                        <p className='text-sm mb-2'>If you have any questions or just want to say “Hi”, we’d love to connect with you.</p>
                    </div>
                    <div className='bg-white py-5 px-5 rounded-lg  border-2 border-[#FD5F03]'>
                        <img src={bookademogroup3.src} alt="bookademogroup1" width={50} height={50} className='mb-1' />
                        <h3 className='font-bold mb-1'>Discover our platform</h3>
                        <p className='text-sm mb-2'>See all features live in a demo App connected to our powerful dashboard and understand how we can achieve your target KPIs</p>
                    </div>
                    <div className='bg-white py-5 px-5 rounded-lg  border-2 border-[#FD5F03]'>
                        <img src={bookademogroup4.src} alt="bookademogroup1" width={50} height={50} className='mb-1' />
                        <h3 className='font-bold mb-1'>Media Enquiry/Partnerships</h3>
                        <p className='text-sm mb-2'>Part of a media group or have a partnership proposal? Our marketing & partnerships team would love to hear you out.</p>
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <div className='visible md:hidden mt-5 w-[400px]  md:w-[600px] px-10'>
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#FD5F03]">

                        <div className="relative h-72 md:h-48 pb-8 pt-3 ">
                            <div
                                className="flex transition-transform duration-500 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-full flex-shrink-0 flex items-center justify-center p-8 md:p-12 "
                                    >
                                        <div className="text-center">
                                            <p className=" leading-relaxed text-[16px]">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="absolute bottom-4 mt-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                        ? 'bg-orange-500 scale-110'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] grid justify-center mb-8'>
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12 px-5">
                    Frequently Asked Questions (FAQs)
                </h2>

                <div className="space-y-4 w-full grid justify-center px-5">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#f8d6c5] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <h3 className="text-lg md:text-xl flex items-center font-semibold text-gray-800 pr-4">
                                    <span><img src={faq_icon.src} alt="faqicon" width={20} height={20} className='mr-4' /></span>
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <FaChevronUp className="w-4 h-4 md:w-6 md:h-6 text-[#FD5F03]  transition-transform duration-200" />
                                    ) : (
                                        <FaChevronDown className="w-4 h-4 md:w-6 md:h-6 text-[#FD5F03] transition-transform duration-200" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Bookademo;