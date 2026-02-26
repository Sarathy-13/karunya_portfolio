import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';

const Skills = () => {
    const technicalSkills = [
        { name: "Java", level: 85 },
        { name: "Programming Concepts", level: 90 },
        { name: "Web Development", level: 80 },
        { name: "Designing & Marketing", level: 75 }
    ];

    const softSkills = [
        "Problem Solving",
        "Teamwork",
        "Adaptability",
        "Continuous Learning",
        "Communication",
        "Time Management",
        "Leadership"
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">My <span className="text-gradient">Skills</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Technical Skills */}
                        <div className="glass p-8 rounded-2xl border border-gray-200 dark:border-white/5">
                            <h3 className="text-2xl font-semibold font-poppins mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">💻</span>
                                Technical Skills
                            </h3>
                            <div className="space-y-6">
                                {technicalSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="glass p-8 rounded-2xl border border-gray-200 dark:border-white/5">
                            <h3 className="text-2xl font-semibold font-poppins mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm">🤝</span>
                                Soft Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="px-4 py-2 bg-white dark:bg-[#0f1016] border border-gray-200 dark:border-white/10 rounded-lg text-gray-700 dark:text-gray-300 shadow-sm hover:border-purple-300 dark:hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionTransition>
            </div>
        </section>
    );
};

export default Skills;
