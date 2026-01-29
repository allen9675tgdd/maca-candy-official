import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Icons from "lucide-react";
import { content } from "../../data/content";

export default function Features() {
    const { features } = content;
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="features" className="section-py bg-ink-black relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/features_background.png"
                    alt="Energetic Lifestyle"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink-black/92 via-ink-black/88 to-ink-black/92" />
            </div>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1400px] relative z-10" ref={ref}>
                {/* 标题区 */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-brand-600 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            Core Advantages
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            核心优势
                        </h2>
                        <div className="divider-thin mx-auto mb-8" />
                        <p className="text-lg text-white/80">
                            以草本复方思路，打造更温和、更可持续的能量支持方案
                        </p>
                    </motion.div>
                </div>

                {/* 优势卡片网格 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, idx) => {
                        const IconComponent = Icons[feature.icon] || Icons.Circle;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="card-biotech group flex flex-col h-full"
                            >
                                {/* 编号与图标 */}
                                <div className="flex items-start justify-between mb-8">
                                    <span className="text-white/40 font-bold text-2xl tracking-wider opacity-50 group-hover:opacity-100 group-hover:text-brand-500/50 transition-all">
                                        {feature.id}
                                    </span>
                                    <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-brand-500/10">
                                        <IconComponent className="w-8 h-8 text-brand-500 group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                {/* 内容 */}
                                <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-brand-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed text-lg flex-grow">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
