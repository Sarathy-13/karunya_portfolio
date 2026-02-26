import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTransition from '../components/SectionTransition';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com/
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });

                setTimeout(() => setSubmitStatus(null), 5000);
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setIsSubmitting(false);
                setSubmitStatus('error');

                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    const contactInfo = [
        { icon: <HiOutlinePhone />, label: "Call Me", value: "+91 8056461944", href: "tel:+918056461944" },
        { icon: <HiOutlineMail />, label: "Email Me", value: "karunyacskp@gmail.com", href: "mailto:karunyacskp@gmail.com" },
        { icon: <HiOutlineLocationMarker />, label: "Location", value: "Erode, Tamil Nadu", href: "#" }
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTransition>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">Get In <span className="text-gradient">Touch</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Whether you want to discuss a project, collaboration, or just say hi, my inbox is always open.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Contact Information (Left Column) */}
                        <div className="lg:col-span-2 space-y-8">
                            {contactInfo.map((info, index) => (
                                <a key={index} href={info.href} className="flex items-center gap-6 glass p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all group">
                                    <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{info.label}</p>
                                        <p className="text-gray-900 dark:text-white font-semibold tracking-wide">{info.value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-6">Connect on Socials</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/karunya-c-a69b6b296?utm" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-[#0077b5] border border-gray-200 dark:border-white/10 transition-all">
                                        <FaLinkedin size={22} />
                                    </a>
                                    <a href="https://github.com/Karunya-1" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-[#333] border border-gray-200 dark:border-white/10 transition-all">
                                        <FaGithub size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (Right Column) */}
                        <div className="lg:col-span-3">
                            <form ref={form} onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl">
                                <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-8">Send Me A Message</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white dark:bg-[#0f1016]/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white dark:bg-[#0f1016]/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full bg-white dark:bg-[#0f1016]/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                        placeholder="Hello Karunya, I want to talk about..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        <>Send Message <HiPaperAirplane className="rotate-90" /></>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 text-green-600 dark:text-green-400 text-center font-medium"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.p>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 text-red-600 dark:text-red-400 text-center font-medium"
                                    >
                                        Failed to send message. Please replace the EmailJS placeholders in the code or email me directly!
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </div>
                </SectionTransition>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
        </section>
    );
};

export default Contact;
