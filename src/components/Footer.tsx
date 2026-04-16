import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "/lovable-uploads/13b0009c-c307-4eff-bb7c-ca2acd8d8e5a.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8" aria-labelledby="footer-heading">
      <p id="footer-heading" className="sr-only">{t("footer_rights")}</p>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group" aria-label="Repair & Clean - Inicio">
              <img src={logo} alt="" className="h-8 w-8 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Repair & Clean
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer_description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-6">{t("footer_quick_links")}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("nav_home")}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">{t("nav_services")}</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">{t("nav_gallery")}</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">{t("nav_blog")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-bold mb-6">{t("footer_contact")}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                <span>Carrer de la Manigua, 18, 08027 Barcelona</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:933805321" className="hover:text-primary transition-colors">933 805 321</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:info@repair-and-clean.com" className="hover:text-primary transition-colors">info@repair-and-clean.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-foreground font-bold mb-6">{t("contact_hours_label")}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <p>Mon-Fri: 8:00 - 18:00</p>
                  <p>Sat: 9:00 - 14:00</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Repair & Clean. {t("footer_rights")}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
