import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LabelPill from "./common/LabelPill";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const cardData = [
    {
        id: "stage-1",
        stage: "Stage 01",
        title: "Strategy Before Code",
        desc: "We don't start with development; we start with understanding your business logic, constraints, and growth goals.",
        tags: ["Lorem ipsum", "Lorem ipsum"],
    },
    {
        id: "stage-2",
        stage: "Stage 02",
        title: "Built for Scale",
        desc: "Clean architecture, future-ready systems, and scalable foundations so you don't rebuild later.",
        tags: ["Lorem ipsum", "Lorem ipsum"],
    },
    {
        id: "stage-3",
        stage: "Stage 03",
        title: "Rapid Deployment",
        desc: "Efficient workflows that get your product to market faster without compromising on quality.",
        tags: ["Lorem ipsum", "Lorem ipsum"],
    },
    {
        id: "stage-4",
        stage: "Stage 04",
        title: "Rapid Deployment",
        desc: "Efficient workflows that get your product to market faster without compromising on quality.",
        tags: ["Lorem ipsum", "Lorem ipsum"],
    },
    {
        id: "stage-5",
        stage: "Stage 05",
        title: "Rapid Deployment",
        desc: "Efficient workflows that get your product to market faster without compromising on quality.",
        tags: ["Lorem ipsum", "Lorem ipsum"],
    },
];

export default function CustomProjectAccordion() {
    const pinSpacerRef = useRef(null);
    const leftColOuterRef = useRef(null);
    const leftColInnerRef = useRef(null);

    useLayoutEffect(() => {
        const pinSpacer = pinSpacerRef.current;
        const outer = leftColOuterRef.current;
        const inner = leftColInnerRef.current;

        if (!pinSpacer || !outer || !inner) return;

        const ctx = gsap.context(() => {
            // The distance we need to scroll the cards
            const getScrollDistance = () => inner.scrollHeight - outer.clientHeight;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinSpacer,
                    start: "top top",
                    // The "end" duration determines how long the section stays pinned
                    end: () => `+=${getScrollDistance()}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(inner, {
                y: () => -getScrollDistance(),
                ease: "none",
            });
        }, pinSpacerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pinSpacerRef} className="w-full relative py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_685px] gap-10">

                {/* LEFT COLUMN: NOW THE SCROLLING SECTION */}
                <div className="flex flex-col h-full pt-10">
                    <div>
                        <LabelPill
                            className="h-6 mb-5 text-xs"
                            label="Smart Accounting Without Complexity"
                            dotColor="bg-blue-600"
                        />
                        <h2 className="heading-3 font-medium mt-4 tracking-[-0.125rem]">
                            From Quotation to Payment
                            <br /> Handled in One Flow
                        </h2>
                        <p className="text-gray-500 mt-5 para-2">
                            Create, send, track, and manage all your
                            financial documents <br /> without switching tools.
                        </p>
                    </div>

                    {/* SCROLLABLE CARDS AREA */}
                    <div
                        ref={leftColOuterRef}
                        className="h-[400px] mt-12 overflow-hidden relative"
                        // style={{
                        //     maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 90%, transparent 150%)',
                        //     WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 150%)'
                        // }}
                    >
                        {/* <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none 
                            backdrop-blur-md bg-white/10 
                            [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
                        /> */}
                        <div ref={leftColInnerRef} className="flex flex-col gap-6 pt-10 pb-20">
                            {cardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="w-full min-h-[280px] bg-black rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden"
                                >
                                    <div className="flex justify-between items-start">
                                        {/* Blue Orb Decorative Element */}
                                        <div className="w-12 h-12 rounded-xl bg-blue-600/20 blur-xl absolute -top-2 -left-2 mb-2" />
                                        <div className="w-10 h-10 bg-blue-900/40 rounded-lg border border-blue-500/30 relative z-10 mb-2" />

                                        {/* CLEANER BADGE IMPLEMENTATION */}
                                        <div className="relative group">
                                            {/* 1. THE TOP GLOW: Absolute positioned line that creates the light-bleed effect */}
                                            <div
                                                className="absolute left-1/2 -translate-x-1/2 w-[70%] h-0.5 z-10"
                                                style={{
                                                    background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(59,130,246,0) 80%)',
                                                    filter: 'blur(0.5px)',
                                                }}
                                            />

                                            {/* 2. THE BADGE CONTAINER */}
                                            <div className="px-4 py-1.5 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm text-sm overflow-hidden">
                                                {/* Subtle internal top highlight */}
                                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

                                                {/* 3. FUNCTIONAL TEXT SPLITTING */}
                                                <span className="relative z-10 font-light tracking-wide">
                                                    <span className="text-gray-100">
                                                        {card.stage.split(' ')[0]} {/* Renders "Stage" */}
                                                    </span>
                                                    <span className="text-gray-500 ml-1.5">
                                                        {card.stage.split(' ')[1]} {/* Renders "01", "02", etc. */}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                                        <div className="w-2/3 h-[1px] bg-gradient-to-r from-white/40 to-transparent mb-6" />
                                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                            {card.desc}
                                        </p>
                                        <div className="flex gap-3">
                                            {card.tags.map((tag, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: NOW THE FIXED IMAGE */}
                {/* RIGHT COLUMN */}
                <div className="relative flex items-start pt-10">
                    {/* 1. Removed bg-white/5 from parent to keep it clean.
                        2. Added aspect-square to force a consistent shape.
                        3. Added border and padding to create the 'Device Frame' look from your reference.
                    */}
                    <div className="left-2/3 translate-x-1/8">
                        <img
                            src="/assets/customProject/AccordionImage.png"
                            alt="Dashboard Preview"
                            /* object-cover: Ensures the image fills the square without stretching.
                              h-full w-full: Forces it to take up all space inside the p-3 padding.
                            */
                            className="max-w-[36.5rem] max-h-[36.75rem] rounded-xl object-cover block "
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}