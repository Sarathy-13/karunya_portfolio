import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import { HiOutlineAcademicCap, HiOutlineOfficeBuilding } from 'react-icons/hi';

const Training = () => {
    const trainingData = [
        {
            title: "Java Programming Workshop",
            organization: "Tech Innovators Club",
            date: "Aug 2024",
            type: "Workshop",
            icon: <HiOutlineAcademicCap className="text-blue-600 dark:text-blue-400 text-3xl" />
        },
        {
            title: "IoT Systems & Applications",
            organization: "Nandha Engineering College",
            date: "Feb 2024",
            type: "In-Plant Training",
            icon: <HiOutlineOfficeBuilding className="text-purple-600 dark:text-purple-400 text-3xl" />
        },
        {
            title: "Web Development Bootcamp",
            organization: "CodeAcademy Online",
            date: "Nov 2023",
            type: "Workshop",
            icon: <HiOutlineAcademicCap className="text-pink-600 dark:text-pink-400 text-3xl" />
        },
        {
            title: "Industrial Visit - Tech Park",
            organization: "TIDEL Park, Coimbatore",
            date: "Sep 2023",
            type: "Industrial Visit",
            icon: <HiOutlineOfficeBuilding className="text-emerald-600 dark:text-emerald-400 text-3xl" />
        }
    ];

    return (
        <section id="training" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">Training & <span className="text-gradient">Workshops</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trainingData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all group flex flex-col h-full bg-white/40 dark:bg-white/5"
                            >
                                <div className="mb-4 bg-gray-100 dark:bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:bg-purple-50 dark:group-hover:bg-purple-500/20 transition-colors">
                                    {item.icon}
                                </div>

                                <span className={`text-xs font-semibold tracking-wider uppercase mb-3 block
                                    ${item.type === 'Workshop' ? 'text-blue-600 dark:text-blue-400' :
                                        item.type === 'In-Plant Training' ? 'text-purple-600 dark:text-purple-400' :
                                            'text-emerald-600 dark:text-emerald-400'}`}
                                >
                                    {item.type}
                                </span>

                                <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-2 leading-tight flex-grow">
                                    {item.title}
                                </h3>

                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm mb-1">{item.organization}</p>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm font-mono">{item.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionTransition>
            </div>

            {/* Background Decorations */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 dark:from-blue-500/10 to-transparent -z-10 pointer-events-none"></div>
        </section>
    );
};

export default Training;
