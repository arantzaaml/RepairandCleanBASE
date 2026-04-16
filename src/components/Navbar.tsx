import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "/lovable-uploads/13b0009c-c307-4eff-bb7c-ca2acd8d8e5a.png";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLightPage = location.pathname.startsWith('/blog');
  const useSolidBg = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigation = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_services"), href: "/services" },
    { name: t("nav_gallery"), href: "/gallery" },
    { name: t("nav_blog"), href: "/blog" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow-elegant transition-all"
      >
        {t("skip_link")}
      </a>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          useSolidBg 
            ? "bg-glass backdrop-blur-md border-b border-border py-2" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        <nav className="container mx-auto px-6" aria-label={t("aria_main_nav") || "Navegación principal"}>
          <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3" onClick={handleScrollToTop} aria-label="Repair & Clean - Inicio">
            <img src={logo} alt="" className="h-8 w-8" aria-hidden="true" />
            <span className={cn(
              "text-xl font-semibold hidden sm:block transition-colors duration-300",
              useSolidBg ? "text-foreground" : "text-white"
            )}>
              Repair & Clean
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={item.href === "/" ? handleScrollToTop : undefined}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : useSolidBg 
                        ? "text-foreground hover:bg-primary hover:text-primary-foreground" 
                        : "text-white hover:bg-white/20"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <LanguageSelector isScrolled={useSolidBg} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector isScrolled={useSolidBg} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-colors duration-300",
                useSolidBg ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
              aria-expanded={isOpen}
              aria-label={isOpen ? t("aria_close_menu") : t("aria_open_menu")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => {
                    if (item.href === "/") {
                      handleScrollToTop();
                    }
                    setIsOpen(false);
                  }}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-smooth",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Navbar;
