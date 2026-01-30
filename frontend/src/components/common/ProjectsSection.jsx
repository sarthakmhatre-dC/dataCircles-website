import React from 'react';

const projects = [
  {
    title: "White Stag",
    year: "2024",
    image: "/assets/customProject/SampleImage.png", // Replace with your actual path
    tags: ["SASS", "Landing Page"]
  },
  {
    title: "White Stag",
    year: "2024",
    image: "/assets/customProject/SampleImage.png", // Replace with your actual path
    tags: ["SASS", "Landing Page"]
  },
  {
    title: "White Stag",
    year: "2024",
    image: "/assets/customProject/SampleImage.png", // Replace with your actual path
    tags: ["SASS", "Landing Page"]
  },
  {
    title: "White Stag",
    year: "2024",
    image: "/assets/customProject/SampleImage.png", // Replace with your actual path
    tags: ["SASS", "Landing Page"]
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section className="relative max-w-6xl bg-transparent text-white overflow-hidden font-inter selection:bg-white/20 mx-auto justify-center items-center">
      {/* Main Container */}
      <div className="relative z-10 mx-auto mt-[7.5rem] mb-[7.5rem]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-[4.375rem] px-6">
          {/* Badge */}
          <div className="mb-10 px-4 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/5">
            <span className="para-1 font-medium text-gray-300">Selected Projects</span>
          </div>

          {/* Main Heading */}
          <h2 className="heading-3 font-semibold tracking-tight leading-[1.15] mb-10">
            Built for Performance.<br />
            Proven in Production.
          </h2>

          {/* Subheading */}
          <p className="text-gray-500 para-2 max-w-lg">
            Create, send, track, and manage all your financial documents without switching tools.
          </p>
        </div>

        {/* Projects Grid - Single Column */}
        <div className="flex flex-col gap-[4.375rem] max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group relative w-full px-6 lg:px-0">
              
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111111] p-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-fit h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 rounded-4xl"
                />
                
                {/* Overlay Details (Bottom Area) */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  
                  {/* Left Side: Name and Year */}
                  <div className="px-5 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{project.title}</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-sm text-gray-400 font-medium">{project.year}</span>
                  </div>

                  {/* Right Side: Tags/Buttons */}
                  <div className="flex gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <button 
                        key={tagIndex}
                        className="px-5 py-2.5 rounded-xl bg-transparent border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;