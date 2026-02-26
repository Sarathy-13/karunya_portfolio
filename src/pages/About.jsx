import SectionTransition from '../components/SectionTransition';
import { HiCode, HiChip, HiBriefcase, HiTranslate } from 'react-icons/hi';

const About = () => {
    const interests = [
        { title: 'Software Development', icon: <HiCode className="text-blue-500 dark:text-blue-400 text-3xl mb-3" /> },
        { title: 'Internet of Things', icon: <HiChip className="text-purple-500 dark:text-purple-400 text-3xl mb-3" /> },
        { title: 'Management Studies', icon: <HiBriefcase className="text-pink-500 dark:text-pink-400 text-3xl mb-3" /> }
    ];

    const languages = ['Tamil', 'English'];

    return (
        <section id="about" className="py-24 min-h-screen relative flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">About <span className="text-gradient">Me</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Biography info */}
                        <div className="glass p-8 rounded-2xl border border-gray-200 dark:border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>

                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                I am <span className="text-gray-900 dark:text-white font-medium">Karunya C</span>, currently pursuing my Bachelor of Engineering in <span className="text-blue-600 dark:text-blue-400 font-medium">Computer Science and Engineering (IoT)</span> at Nandha Engineering College (Autonomous), Erode.
                            </p>

                            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 mb-6 font-mono text-xl">
                                Current CGPA: <span className="text-green-600 dark:text-green-400 font-bold tracking-wider">9.7</span>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                    <HiTranslate className="text-purple-500 dark:text-purple-400" /> Languages
                                </h3>
                                <div className="flex gap-4">
                                    {languages.map((lang, index) => (
                                        <span key={index} className="px-5 py-2 glass rounded-full text-gray-700 dark:text-gray-200 font-medium text-sm tracking-wide bg-white/50 border border-gray-200 dark:border-white/10 dark:bg-transparent">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interests */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold font-poppins text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4">
                                Core Areas of Interest
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {interests.map((interest, index) => (
                                    <div key={index} className="glass p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/5 flex flex-col items-center text-center group cursor-pointer hover:border-purple-300 dark:hover:border-purple-500/30">
                                        <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                                            {interest.icon}
                                        </div>
                                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{interest.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionTransition>
            </div>

            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] -z-0"></div>
        </section>
    );
};

export default About;
