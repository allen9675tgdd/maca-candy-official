import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Icons from "lucide-react";
import { content } from "../../data/content";

export default function Usage() {
    const { usage } = content;
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const modeImages = [
        "/images/hero_product_image_1769205835383.png", // 应急模式 - 显示产品图
        "/images/exercise_scenario.png" // 日常调理模式
    ];

    return (
        <section id="usage" className="section-py bg-brand-900/10 relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/usage_background.png"
                    alt="Healthy Lifestyle"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 via-brand-900/86 to-brand-900/90" />
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                {/* 标题 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <p className="text-brand-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            Usage Guide
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {usage.title}
                        </h2>
                        <div className="divider-thin mx-auto mb-8 bg-brand-500/50" />
                        <p className="text-lg text-white/80">
                            {usage.description}
                        </p>
                    </motion.div>
                </div>

                {/* 使用模式卡片 */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {usage.modes.map((mode, idx) => {
                        const IconComponent = Icons[mode.icon] || Icons.Circle;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="bg-brand-900/20 border border-brand-500/10 p-8 rounded-2xl hover:bg-brand-900/40 transition-all duration-300"
                            >
                                {/* 图标和图片 */}
                                <div className="mb-6">
                                    {modeImages[idx] ? (
                                        <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent z-10" />
                                            <img
                                                src={modeImages[idx]}
                                                alt={mode.type}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                                                <div className="w-10 h-10 bg-brand-600/90 backdrop-blur-sm flex items-center justify-center rounded-lg">
                                                    <IconComponent className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="px-3 py-1 bg-brand-900/60 backdrop-blur-sm text-brand-300 text-xs font-bold tracking-wider rounded-full border border-brand-500/30">
                                                    MODE {idx + 1}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-14 h-14 bg-brand-600 flex items-center justify-center rounded-xl">
                                                <IconComponent className="w-7 h-7 text-white" />
                                            </div>
                                            <span className="px-4 py-1 bg-brand-900/50 text-brand-300 text-xs font-bold tracking-wider rounded-full border border-brand-500/20">
                                                MODE {idx + 1}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* 标题 */}
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {mode.type}
                                </h3>

                                {/* 内容 */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <span className="text-sm font-bold text-brand-400 block mb-2">
                                            使用场景
                                        </span>
                                        <p className="text-white/90">{mode.scenario}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-brand-400 block mb-2">
                                            建议用量
                                        </span>
                                        <p className="text-white/90">{mode.dosage}</p>
                                    </div>
                                </div>

                                {/* 提示 */}
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-sm text-white/60 italic leading-relaxed">
                                        💡 {mode.tip}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 底部提示与注意事项 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {/* 通用建议 */}
                    <div className="text-center">
                        <p className="text-lg text-brand-300 font-medium">
                            {usage.tips}
                        </p>
                    </div>

                    {/* 注意事项列表 */}
                    <div className="p-6 bg-brand-900/20 border-l-4 border-brand-500 rounded-r-xl">
                        <h4 className="text-brand-400 font-bold mb-3 flex items-center gap-2">
                            <Icons.AlertTriangle className="w-4 h-4" />
                            注意事项
                        </h4>
                        <ul className="space-y-2">
                            {usage.notes.map((note, idx) => (
                                <li key={idx} className="text-sm text-white/70 leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
