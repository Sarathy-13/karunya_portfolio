import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import { HiFolderOpen, HiExternalLink, HiCode } from 'react-icons/hi';

const Projects = () => {
    const projectData = [
        {
            title: "Smart Inventory Tracker using IoT",
            description: "Developed a smart inventory system integrating IoT sensors for real-time tracking of goods, reducing manual errors and improving logistics efficiency.",
            tech: ["IoT", "Sensors", "Arduino", "C++"],
            category: "IoT",
            link: "#"
        },
        {
            title: "AI-Powered Customer Support Bot",
            description: "Built an intelligent chatbot using NLP to handle customer queries automatically, improving response times by 40% and enhancing user satisfaction.",
            tech: ["Python", "NLP", "Machine Learning"],
            category: "Artificial Intelligence",
            link: "#"
        },
        {
            title: "Robotics Line Follower",
            description: "Designed and programmed an autonomous line-following robot capable of navigating complex paths using IR sensors and a microcontroller.",
            tech: ["Robotics", "Microcontrollers", "C"],
            category: "Robotics",
            link: "#"
        },
        {
            title: "Online Portfolio Website",
            description: "A modern, highly responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations and glassmorphism UI.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion"],
            category: "Web Development",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">Featured <span className="text-gradient">Projects</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projectData.map((project, index) => (
                            <div key={index} className="glass rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/5 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                                            <HiCode size={24} />
                                        </div>
                                        <a href={project.link} className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            <HiExternalLink size={24} />
                                        </a>
                                    </div>

                                    <div className="mb-2">
                                        <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto text-sm">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="font-medium px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionTransition>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] -z-0"></div>
        </section>
    );
};

export default Projects;
