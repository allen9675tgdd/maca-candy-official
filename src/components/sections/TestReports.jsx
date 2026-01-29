import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ZoomIn, X } from "lucide-react";

export default function TestReports() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedImage, setSelectedImage] = useState(null);

    const reports = [
        { id: 1, src: "/images/report-1.jpg", title: "检验报告 1" },
        { id: 2, src: "/images/report-2.jpg", title: "检验报告 2" },
        { id: 3, src: "/images/report-3.jpg", title: "检验报告 3" },
    ];

    return (
        <section className="section-py bg-brand-900/10 relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/test_reports_background.png"
                    alt="Laboratory Background"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/95 via-brand-900/90 to-brand-900/95" />
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                {/* 标题 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <p className="text-brand-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            Quality Assurance
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            权威检测 · 品质保证
                        </h2>
                        <div className="divider-thin mx-auto bg-brand-500/50" />
                        <p className="text-lg text-white/80 mt-6">
                            每一批产品都经过严格的第三方检测，确保安全有效
                        </p>
                    </motion.div>
                </div>

                {/* 报告展示 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {reports.map((report, idx) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                            className="group relative cursor-zoom-in"
                            onClick={() => setSelectedImage(report)}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg border border-brand-500/20 bg-brand-900/40 aspect-[3/4]">
                                <img
                                    src={report.src}
                                    alt={report.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* 遮罩层 */}
                                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-brand-900/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-brand-500/30">
                                        <ZoomIn className="w-6 h-6 text-brand-400" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-center mt-4 text-white/80 font-medium group-hover:text-brand-400 transition-colors">
                                {report.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain rounded-lg shadow-2xl bg-white"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
