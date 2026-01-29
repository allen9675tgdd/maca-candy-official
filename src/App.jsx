import { useEffect } from "react";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import PainPoints from "./components/sections/PainPoints";
import Features from "./components/sections/Features";
import Ingredients from "./components/sections/Ingredients";
import Usage from "./components/sections/Usage";
import FAQ from "./components/sections/FAQ";
import Partnership from "./components/sections/Partnership";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { siteConfig } from "./config/site";

export default function App() {
  useEffect(() => {
    // 设置页面标题
    document.title = siteConfig.title;

    // 设置 meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.description);
    }
  }, []);

  return (
    <div className="min-h-screen bg-studio-white">
      <Header />

      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Ingredients />
        <Usage />
        <FAQ />
        <Partnership />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
