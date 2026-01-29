import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content } from "../../data/content";

export default function Hero() {
    const { hero } = content;

    const scrollToNext = () => {
        const nextSection = document.querySelector("#pain-points");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                {/* 真实背景图片 */}
                <img
                    src="/images/hero_background.png"
                    alt="Biotech Laboratory"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 渐变遮罩层确保文字可读 */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/80 to-brand-900/70" />
            </div>

            {/* 内容 */}
            <div className="container-custom relative z-10 pt-32 pb-20">
                <div className="grid-asymmetric items-center">
                    {/* 左侧文字内容 */}
                    <div className="lg:col-span-7 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-brand-200 font-bold tracking-[0.3em] text-xs uppercase mb-6">
                                {hero.subtitle}
                            </p>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                                {hero.title}
                            </h1>

                            {hero.tagline && (
                                <p className="text-2xl md:text-3xl text-brand-300 font-semibold mb-8">
                                    {hero.tagline}
                                </p>
                            )}

                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-12">
                                {hero.description}
                            </p>

                            {/* 核心亮点 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {hero.highlights.map((highlight, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 flex-shrink-0" />
                                        <span className="text-white/80 text-sm font-medium leading-relaxed">
                                            {highlight}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA 按钮 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <a
                                    href="#contact"
                                    className="btn-primary bg-white text-brand-900 hover:bg-brand-50 text-base"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    {hero.cta.primary}
                                </a>
                                <a
                                    href="#features"
                                    className="btn-outline border-white text-white hover:bg-white/10 text-base"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    {hero.cta.secondary}
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* 右侧产品展示区 */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="relative w-full aspect-square flex items-center justify-center">
                                <img
                                    src="/images/hero_product_image_1769205835383.png"
                                    alt="Maca Candy Product"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* 装饰元素 */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-400/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-600/20 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 向下滚动指示器 */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={scrollToNext}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest">向下滚动</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </div>
            </motion.button>
        </section>
    );
}
