import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "../../data/content";

export default function PainPoints() {
    const { painPoints } = content;
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="pain-points" className="section-py relative overflow-hidden" ref={ref}>
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/painpoints_background.png"
                    alt="Work Pressure Scene"
                    className="w-full h-full object-cover"
                />
                {/* 深色遮罩确保文字可读 */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink-black/85 via-ink-black/80 to-ink-black/85" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid-asymmetric items-center gap-16">
                    {/* 左侧标题 */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="divider-thin mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            {painPoints.title}
                        </h2>
                    </motion.div>

                    {/* 右侧描述 */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                            {painPoints.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
