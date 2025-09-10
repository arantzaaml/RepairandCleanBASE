import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import useScrollToTop from './hooks/useScrollToTop';

const RoutesWithScroll = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesWithScroll;
