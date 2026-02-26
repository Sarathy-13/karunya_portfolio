import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { HiDownload, HiArrowRight, HiMail } from 'react-icons/hi';
import SectionTransition from '../components/SectionTransition';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <SectionTransition className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium tracking-wide"
                        >
                            Hello, I'm
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold font-poppins text-gray-900 dark:text-white"
                        >
                            Karunya C
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-4xl font-semibold text-gradient h-16"
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        'Software Developer',
                                        'IoT Enthusiast',
                                        'AI Explorer'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80,
                                }}
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                        >
                            Computer Science and Engineering (IoT) student passionate about software development, AI, and smart technologies. Building the future through intelligent code.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
                            >
                                View Projects <HiArrowRight />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 glass rounded-full font-medium text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                Download Resume <HiDownload />
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-full font-medium text-gray-800 dark:text-white hover:border-gray-600 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-transparent transition-all flex items-center gap-2"
                            >
                                Contact Me <HiMail />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-[280px] sm:max-w-sm mx-auto md:max-w-md mb-12 md:mb-0 order-first md:order-last"
                    >
                        <div className="relative aspect-square rounded-full border border-gray-200 dark:border-white/10 glass p-6 sm:p-8 lg:p-10 flex items-center justify-center before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-tr before:from-blue-600/10 before:to-purple-600/10 dark:before:from-blue-600/20 dark:before:to-purple-600/20 shadow-2xl">

                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* The spinning dashed border, slightly larger than the image */}
                                <div className="absolute -inset-2 sm:-inset-4 rounded-full border-2 border-dashed border-gray-400 dark:border-white/30 animate-[spin_20s_linear_infinite]"></div>

                                <img
                                    src={profileImg}
                                    alt="Karunya C"
                                    className="w-full h-full object-cover rounded-full relative z-10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                                />
                            </div>
                        </div>
                    </motion.div>

                </SectionTransition>
            </div>
        </section>
    );
};

export default Hero;
