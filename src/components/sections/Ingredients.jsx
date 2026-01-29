import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../../data/content";

export default function Ingredients() {
    const { ingredients, quality } = content;
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const ingredientImages = [
        "/images/maca_product_new.jpg", // Maca
        "/images/epimedium_ingredient.png", // Epimedium
        "/images/pomegranate_ingredient_1769205861525.png" // Pomegranate
    ];

    return (
        <section id="ingredients" className="section-py bg-brand-900/10 relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/ingredients_background.png"
                    alt="Natural Herbal Ingredients"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/92 via-brand-900/88 to-brand-900/92" />
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                {/* 标题 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <p className="text-brand-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            Core Ingredients
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {ingredients.title}
                        </h2>
                        <div className="divider-thin mx-auto mb-8" />
                        <p className="text-lg text-white/80">
                            {ingredients.description}
                        </p>
                    </motion.div>
                </div>

                {/* 成分网格 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-700/30">
                    {ingredients.items.map((ingredient, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-brand-900/20 p-8 flex flex-col items-center text-center group hover:bg-brand-900/40 transition-all duration-300"
                        >
                            {/* 图片或图标 */}
                            <div className="mb-6 relative w-24 h-24 flex items-center justify-center">
                                {ingredientImages[idx] ? (
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-500/30 group-hover:border-brand-500 transition-colors">
                                        <img
                                            src={ingredientImages[idx]}
                                            alt={ingredient.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-20 h-20 bg-brand-800/50 rounded-full flex items-center justify-center group-hover:bg-brand-700/50 transition-colors border border-brand-600/30">
                                        <span className="text-2xl font-bold text-brand-300">
                                            {idx + 1}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3">
                                {ingredient.name}
                            </h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                {ingredient.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* 质量承诺 */}
                {quality && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center gap-8"
                    >
                        {quality.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-brand-900/30 rounded-full border border-brand-500/20">
                                <div className="w-2 h-2 rounded-full bg-brand-400" />
                                <span className="text-white/80 text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
