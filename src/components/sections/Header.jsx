import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { label: "产品介绍", href: "#features" },
        { label: "使用方式", href: "#usage" },
        { label: "成分说明", href: "#ingredients" },
        { label: "招商合作", href: "#partnership" },
        { label: "联系我们", href: "#contact" },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled && !isMobileMenuOpen
                    ? "bg-ink-black/90 backdrop-blur-md shadow-lg shadow-brand-900/20"
                    : "bg-transparent"
            )}
        >
            <div className="container-custom relative z-50">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="Maca Candy"
                            className="h-10 md:h-12 w-auto brightness-0 invert" // Make logo white for dark theme
                        />
                        <span className="font-bold text-lg tracking-tight text-white">
                            Maca Candy
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToSection(item.href)}
                                className="text-sm font-medium tracking-wide transition-colors text-white/80 hover:text-brand-400"
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href="#contact"
                            className="btn-primary text-sm px-6 py-2"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#contact");
                            }}
                        >
                            立即咨询
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white hover:text-brand-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-8 h-8" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-40 bg-ink-black/95 backdrop-blur-md transition-opacity duration-200 lg:hidden will-change-[opacity]",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center justify-center h-full pt-20 pb-10">
                    <nav className="flex flex-col gap-8 text-center">
                        {navItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToSection(item.href)}
                                className="text-2xl font-bold text-white hover:text-brand-500 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="btn-primary text-lg px-10 py-4"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("#contact");
                                }}
                            >
                                立即咨询
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
