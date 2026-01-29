import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";
import { content } from "../../data/content";

export default function FAQ() {
    const { faq } = content;
    const [openIndex, setOpenIndex] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="faq" className="section-py bg-brand-900/10 relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/faq_background.png"
                    alt="Customer Service"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 via-brand-900/85 to-brand-900/90" />
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                {/* 标题 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <p className="text-brand-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            FAQ
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            常见问题
                        </h2>
                        <div className="divider-thin mx-auto bg-brand-500/50" />
                    </motion.div>
                </div>

                {/* FAQ 列表 */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faq.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-brand-900/20 border border-brand-500/10 overflow-hidden rounded-xl"
                        >
                            {/* 问题 */}
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group hover:bg-brand-900/30 transition-colors"
                            >
                                <span className="text-lg font-bold text-white pr-8 group-hover:text-brand-400 transition-colors">
                                    {item.q}
                                </span>
                                <div className="flex-shrink-0">
                                    {openIndex === idx ? (
                                        <Minus className="w-5 h-5 text-brand-400" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-white/40 group-hover:text-brand-400 transition-colors" />
                                    )}
                                </div>
                            </button>

                            {/* 答案 */}
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6 pt-2 text-white/85 leading-relaxed border-t border-white/5 whitespace-pre-line">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
