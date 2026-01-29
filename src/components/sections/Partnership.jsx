import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Icons from "lucide-react";
import { content } from "../../data/content";

export default function Partnership() {
    const { partnership } = content;
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="partnership" className="section-py bg-brand-900 text-white relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/partnership_background.png"
                    alt="Business Partnership"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-brand-900/85" />
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <p className="text-brand-300 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            Business Partnership
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            {partnership.hero.title}
                        </h2>
                        <div className="divider-thin mx-auto mb-8 bg-brand-400" />
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-4">
                            {partnership.hero.subtitle}
                        </p>
                        <p className="text-lg text-brand-200">
                            {partnership.hero.tagline}
                        </p>
                    </motion.div>
                </div>

                {/* 合作优势 */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        className="text-2xl font-bold mb-12 text-center"
                    >
                        合作优势
                    </motion.h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnership.advantages.map((adv, idx) => {
                            const IconComponent = Icons[adv.icon] || Icons.Circle;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all"
                                >
                                    <IconComponent className="w-10 h-10 text-brand-400 mb-6" />
                                    <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
                                    <p className="text-white/70 leading-relaxed">{adv.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 支持清单 */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">你将获得的支持</h3>
                        <ul className="space-y-4">
                            {partnership.support.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Icons.CheckCircle className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* 合作流程 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">合作流程</h3>
                        <div className="space-y-6">
                            {partnership.process.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-brand-700 flex items-center justify-center flex-shrink-0 font-bold">
                                        {idx + 1}
                                    </div>
                                    <span className="text-lg text-white/90">{step}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <a
                        href="#contact"
                        className="btn-primary bg-white text-brand-900 hover:bg-brand-50 text-lg inline-flex"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {partnership.cta.primary}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
