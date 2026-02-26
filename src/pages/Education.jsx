import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import { HiAcademicCap } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Engineering in CSE (IoT)",
            institution: "Nandha Engineering College (Autonomous)",
            location: "Erode",
            year: "2023 - 2027",
            score: "Current CGPA: 9.7",
            status: "Pursuing",
            icon: <FaGraduationCap className="text-xl" />
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Govt Girls Hr Sec School",
            location: "Andhiyur",
            year: "2022 - 2023",
            score: "Percentage: 86.60%",
            status: "Completed",
            icon: <HiAcademicCap className="text-xl" />
        },
        {
            degree: "Secondary School Leaving Certificate (SSLC)",
            institution: "Govt Girls Hr Sec School",
            location: "Andhiyur",
            year: "2020 - 2021",
            score: "Marks: 457 / 500",
            status: "Completed",
            icon: <HiAcademicCap className="text-xl" />
        }
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">Vertical <span className="text-gradient">Timeline</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative border-l-2 border-purple-500/30 dark:border-purple-500/50 pl-8 ml-4 md:ml-0 md:pl-12 space-y-12">
                        {educationData.map((edu, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[45px] md:-left-[61px] top-1 w-10 h-10 bg-gray-50 dark:bg-[#0f1016] rounded-full border-4 border-purple-500 flex items-center justify-center text-purple-500 z-10 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                                    {edu.icon}
                                </div>

                                <div className="glass p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all hover:-translate-y-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <h3 className="text-xl md:text-2xl font-bold font-poppins text-gray-900 dark:text-white">{edu.degree}</h3>
                                        <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full border border-purple-200 dark:border-purple-500/20 w-fit">
                                            {edu.year}
                                        </span>
                                    </div>

                                    <h4 className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">{edu.institution}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">{edu.location}</p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
                                        <span className="text-gray-900 dark:text-white font-semibold">{edu.score}</span>
                                        <span className={`text-sm tracking-wide uppercase ${edu.status === 'Pursuing' ? 'text-blue-500 dark:text-blue-400' : 'text-green-500 dark:text-green-400'}`}>
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionTransition>
            </div>
        </section>
    );
};

export default Education;
