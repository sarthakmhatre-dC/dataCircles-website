import React from 'react';
import LightLeak from '/assets/LightLeak.png'
const ServicesSection = () => {
    return (
        <section className="relative w-full bg-transparent text-white overflow-hidden font-inter selection:bg-white/20">

            {/* <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" /> */}

            {/* --- NEWLY ADDED IMAGE_1.PNG WITH ROTATION --- */}
            {/* Added rotate-[-69.34deg] (which is -19.26% of 360) and origin-center */}
            {/* <img
                src={LightLeak}
                alt=""
                className="absolute top-0 left-0 w-[1000rem] h-[1000rem] -translate-x-1/4 -translate-y-1/2 object-contain opacity-100 pointer-events-none mix-blend-screen z-100"
            /> */}

            {/* Main Container */}
            <div className="relative z-10 mx-auto px-6 mt-[120px] mb-[120px]">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Badge */}
                    <div className="mb-10 px-4 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/5">
                        <span className="para-1 font-medium text-gray-300">Our Services</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="heading-3 font-semibold tracking-tight leading-[1.15] mb-10">
                        Custom Development.<br />
                        Zero Guesswork.
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-500 para-2 max-w-lg">
                        Create, send, track, and manage all your financial documents without switching tools.
                    </p>
                </div>

                {/* Grid Layout (Restricted to max-w-6xl as requested) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {/* Card 1: Custom Web Applications */}
                    <div className="group relative p-10 md:p-14 rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col justify-center items-center text-center">
                        <h3 className="heading-4-5 font-normal mb-8">
                            Custom Web Applications
                        </h3>
                        <p className="text-gray-500 para-1">
                            End-to-end development of scalable, secure web platforms designed around your workflows not generic frameworks.
                        </p>
                    </div>

                    {/* Card 2: Internal Dashboards */}
                    <div className="group relative p-10 md:p-14 rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col justify-center items-center text-center">
                        <h3 className="heading-4-5 font-normal mb-8">
                            Internal Dashboards
                        </h3>
                        <p className="text-gray-500 para-1">
                            Powerful dashboards for operations, analytics, CRMs, LMS platforms, and internal tooling.
                        </p>
                    </div>

                    {/* Card 3: Conversion-Driven Landing Pages (Full Width) */}
                    <div className="md:col-span-2 group relative p-10 md:p-14 rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white">
                            Conversion-Driven Landing Pages
                        </h3>
                        <p className="text-gray-500 leading-relaxed max-w-md">
                            Strategically built landing pages engineered for clarity, speed, and high conversion not just aesthetics.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;