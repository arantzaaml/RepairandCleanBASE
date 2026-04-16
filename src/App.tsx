import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesWithScroll from "./RoutesWithScroll";

const queryClient = new QueryClient();

import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Repair & Clean",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "C/Manigua 18",
                    "addressLocality": "Barcelona",
                    "postalCode": "08027",
                    "addressCountry": "ES"
                  },
                  "telephone": "+34662330387",
                  "serviceType": ["Reformas integrales", "Fontanería", "Electricidad", "Limpieza"],
                  "areaServed": "Barcelona",
                  "url": "https://www.repairandclean.es"
                })}
              </script>
            </Helmet>
            <div className="flex flex-col min-h-screen bg-background text-foreground">
              <Navbar />
              <main id="main-content" className="flex-grow">
                <RoutesWithScroll />
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
