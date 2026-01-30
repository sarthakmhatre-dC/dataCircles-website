import React from 'react';
import LabelPill from './LabelPill';
import GrowthFrameworkImg from "../../../public/assets/GrowthFramework.png";
const GrowthFramework = () => {
  const steps = [
    {
      title: 'Discover & Define',
      description:
        'We map business objectives, technical requirements, user flows, and success metrics before a single line of code is written.',
    },
    {
      title: 'Design & Build',
      description:
        'UI, development, integrations, and testing executed in structured milestones with continuous alignment.',
    },
    {
      title: 'Launch & Optimize',
      description:
        (
          <>
            Deployment, performance <br /> optimization,
            and iteration support to ensure real-world results.
          </>
        ),
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Badge */}
      <section className="w-full max-w-7xl mb-15 px-6 items-center text-center flex flex-col">
        <LabelPill label="Our Process" />
      </section>

      {/* Title */}
      <div className="text-center mb-30">
        <h2 className="heading-3 font-semibold text-gray-900 mb-10 text-balance tracking-[-0.125rem]">
          A Proven 3-Step Growth Framework
        </h2>
        <p className="para-1 text-gray-600 mx-auto text-balance ">
          Every custom project follows a structured execution model designed <br /> to reduce risk and accelerate outcomes.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-30">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Icons Container */}
            <div className="mb-8 flex flex-col items-center">
              <img
                src={GrowthFrameworkImg}
                alt={step.title}
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="heading-4-5 font-medium tracking-[-0.125rem] text-gray-900 mb-3 ">
                {step.title}
              </h3>
              <p className="text-gray-600 para-2 max-w-[20rem] tracking-tighter">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthFramework;
