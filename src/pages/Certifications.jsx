import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import { HiBadgeCheck } from 'react-icons/hi';

const Certifications = () => {
    const certificationsList = [
        {
            title: "Cloud Computing",
            provider: "NPTEL",
            score: "Elite + Silver Medal",
            description: "Completed with a consolidated score of 82%",
            date: "Jul-Oct 2024",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Design Thinking - A Primer",
            provider: "NPTEL",
            score: "Elite Medal",
            description: "Completed with a consolidated score of 75%",
            date: "Feb-Mar 2024",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">Global <span className="text-gradient">Certifications</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {certificationsList.map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 relative overflow-hidden group"
                            >
                                {/* Background Gradient Accent */}
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-10 dark:opacity-20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500`}></div>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg`}>
                                        <HiBadgeCheck size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">Issued by {cert.provider}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-500 text-sm font-bold tracking-wide rounded-full border border-yellow-200 dark:border-yellow-500/30">
                                            {cert.score}
                                        </span>
                                        <span className="text-gray-400 dark:text-gray-500 text-sm font-mono ml-auto">{cert.date}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionTransition>
            </div>
        </section>
    );
};

export default Certifications;
