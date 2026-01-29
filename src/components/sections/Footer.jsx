import { siteConfig } from "../../config/site";
import { content } from "../../data/content";

export default function Footer() {
    const { footer, disclaimer } = content;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-900 text-white">
            {/* 主要内容 */}
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo 与 Slogan */}
                    <div className="lg:col-span-2">
                        <img
                            src="/logo.png"
                            alt="Maca Candy"
                            className="h-12 w-auto mb-6 brightness-0 invert opacity-80"
                        />
                        <h3 className="text-xl font-bold mb-4">
                            {footer.slogan}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* 快速链接 */}
                    <div>
                        <h4 className="font-bold mb-4">快速导航</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#features" className="text-white/60 hover:text-white transition-colors">
                                    产品介绍
                                </a>
                            </li>
                            <li>
                                <a href="#ingredients" className="text-white/60 hover:text-white transition-colors">
                                    成分说明
                                </a>
                            </li>
                            <li>
                                <a href="#partnership" className="text-white/60 hover:text-white transition-colors">
                                    招商合作
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                                    联系我们
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 联系信息 */}
                    <div>
                        <h4 className="font-bold mb-4">联系方式</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li>电话：{siteConfig.contact.phone}</li>
                            <li>微信：{siteConfig.contact.wechat}</li>
                            <li>邮箱：{siteConfig.contact.email}</li>
                        </ul>
                    </div>
                </div>

                {/* 免责声明 */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-xs text-white/40 leading-relaxed mb-6">
                        <strong className="text-white/60">免责声明：</strong>
                        {disclaimer}
                    </p>
                </div>
            </div>

            {/* 底部版权 */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                        <p>
                            {footer.copyright} | {siteConfig.company.name}
                        </p>
                        <div className="flex gap-6">
                            {footer.links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
