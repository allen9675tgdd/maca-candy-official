import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "../../config/site";

// 自定义 WeChat 图标 (线性风格)
const WeChatIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 10c0-3.31-3.13-6-7-6S3 6.69 3 10c0 1.83.97 3.46 2.5 4.54.12.08.18.23.15.37l-.5 2a.5.5 0 0 0 .68.56l2.12-.85c.14-.06.3-.06.44 0A7.8 7.8 0 0 0 10 16c.3 0 .6-.02.9-.05" />
        <path d="M21 15c0-2.76-2.69-5-6-5-.55 0-1.08.06-1.6.18A5.5 5.5 0 0 0 10 16c0 .87.26 1.68.72 2.38a.5.5 0 0 1 .05.4l-.3 1.35a.4.4 0 0 0 .54.46l1.7-.68a.5.5 0 0 1 .37 0c.6.26 1.25.41 1.92.41 3.31 0 6-2.24 6-5Z" />
    </svg>
);

// 自定义 Zalo 图标 (模拟 Logo)
const ZaloIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M10,20 Q10,10 20,10 L80,10 Q90,10 90,20 L90,80 Q90,90 80,90 L20,90 Q10,90 10,80 Z" fill="none" stroke="currentColor" strokeWidth="8" />
        <text x="50" y="65" fontSize="35" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif" style={{ letterSpacing: '-2px' }}>Zalo</text>
    </svg>
);

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    
    // 表单状态
    const [formState, setFormState] = useState({ name: "", phone: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const webhookUrl = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=42263c0c-43ac-409d-a7fd-2470ddd9a6ec";
        const now = new Date().toLocaleString('zh-CN', { hour12: false });

        const content = `【 Maca Candy  - 新线索提醒】 \n\n 📋 来源：官网联系表单 \n\n 👤 姓名：${formState.name} \n\n 📱 电话：${formState.phone} \n\n 🕐 提交时间：${now} \n\n 请及时跟进处理！`;

        try {
            // 注意：直接从前端调用企业微信 Webhook 可能会遇到 CORS 问题。
            // 在生产环境中，建议通过后端代理转发。
            // 但如果是在某些允许的环境或工具中测试，可以直接调用。
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    msgtype: "text",
                    text: {
                        content: content
                    }
                }),
                mode: "no-cors" // 尝试绕过 CORS 限制（注意：这会导致无法读取响应内容，但请求可能发送成功）
            });

            // 由于 no-cors 模式无法读取状态码，我们假设发送成功并给用户反馈
            // 实际上如果失败了（例如网络错误），fetch 会抛出异常
            setSubmitStatus('success');
            setFormState({ name: "", phone: "" });
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            key: 'phone',
            icon: Phone,
            label: '致电我们',
            value: siteConfig.contact.phone,
            action: () => window.location.href = `tel:${siteConfig.contact.phone}`,
            color: 'text-brand-500',
            bg: 'bg-brand-500/10',
            border: 'border-brand-500/20',
            hoverBorder: 'group-hover:border-brand-500/50'
        },
        {
            key: 'wechat',
            icon: WeChatIcon,
            label: '微信咨询',
            value: siteConfig.contact.wechat,
            action: () => {
                navigator.clipboard.writeText(siteConfig.contact.wechat);
                alert(`微信号 ${siteConfig.contact.wechat} 已复制，请打开微信添加好友`);
                window.location.href = "weixin://";
            },
            color: 'text-brand-500',
            bg: 'bg-brand-500/10',
            border: 'border-brand-500/20',
            hoverBorder: 'group-hover:border-brand-500/50'
        },
        {
            key: 'zalo',
            icon: ZaloIcon,
            label: 'Zalo',
            value: siteConfig.contact.zalo,
            action: () => window.open(`https://zalo.me/${siteConfig.contact.zalo}`, '_blank'),
            color: 'text-brand-500',
            bg: 'bg-brand-500/10',
            border: 'border-brand-500/20',
            hoverBorder: 'group-hover:border-brand-500/50'
        },
        {
            key: 'tiktok',
            icon: TikTokIcon,
            label: 'TikTok',
            value: siteConfig.contact.tiktok,
            action: () => window.open(`https://www.tiktok.com/${siteConfig.contact.tiktok}`, '_blank'),
            color: 'text-brand-500',
            bg: 'bg-brand-500/10',
            border: 'border-brand-500/20',
            hoverBorder: 'group-hover:border-brand-500/50'
        },
        {
            key: 'facebook',
            icon: Facebook,
            label: 'Facebook',
            value: 'Maca Candy Official',
            action: () => window.open(siteConfig.contact.facebook, '_blank'),
            color: 'text-brand-500',
            bg: 'bg-brand-500/10',
            border: 'border-brand-500/20',
            hoverBorder: 'group-hover:border-brand-500/50'
        }
    ];

    return (
        <section id="contact" className="section-py bg-brand-900/10 relative overflow-hidden">
            {/* 背景图片 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/contact_background.png"
                    alt="Contact Communication"
                    className="w-full h-full object-cover"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 via-brand-900/88 to-brand-900/90" />
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                {/* 标题 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <p className="text-brand-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            Contact Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            联系我们
                        </h2>
                        <div className="divider-thin mx-auto mb-8 bg-brand-500/50" />
                        <p className="text-lg text-white/60">
                            点击下方图标直接联系我们，或填写在线表单
                        </p>
                    </motion.div>
                </div>

                {/* 联系方式卡片 Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                    {contactMethods.map((method, idx) => (
                        <motion.button
                            key={method.key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            onClick={method.action}
                            className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 cursor-pointer w-full ${method.bg} ${method.border} ${method.hoverBorder} hover:shadow-lg hover:shadow-brand-900/50`}
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform ${method.color}`}>
                                <method.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
                            <p className="text-white/60 text-sm break-all font-mono">{method.value}</p>
                            <div className={`mt-6 text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-white opacity-60 group-hover:opacity-100 transition-opacity`}>
                                点击联系 <ExternalLink className="w-3 h-3" />
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* 在线表单 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="max-w-xl mx-auto"
                >
                    <div className="bg-brand-900/20 border border-brand-500/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">在线提交需求</h3>
                            <p className="text-white/60 text-sm">填写下方信息，我们将尽快与您联系</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                    姓名
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-brand-900/40 border border-brand-500/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                                    placeholder="请输入您的称呼"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                                    电话
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formState.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-brand-900/40 border border-brand-500/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                                    placeholder="请输入您的联系电话"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        提交中...
                                    </>
                                ) : (
                                    <>
                                        提交信息 <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg text-sm"
                                >
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    提交成功！我们会尽快与您联系。
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    提交失败，请稍后重试或直接通过上方方式联系。
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
