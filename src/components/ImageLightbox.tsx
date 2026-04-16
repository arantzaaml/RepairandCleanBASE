import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
}

const ImageLightbox = ({ src, alt, className, children }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <button
        type="button"
        className={cn("cursor-pointer group relative w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg overflow-hidden", className)}
        onClick={() => setIsOpen(true)}
        aria-label={t("aria_zoom_image")}
      >
        {children}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true" />
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-1"
            aria-label={t("aria_close_dialog")}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="flex items-center justify-center min-h-[80vh]">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageLightbox;