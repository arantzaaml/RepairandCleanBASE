import { useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, alt, className }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div 
      className={cn("relative overflow-hidden rounded-lg shadow-elegant group cursor-pointer", className)}
      onMouseMove={handleMouseMove}
    >
      {/* After image (full width) */}
      <img
        src={afterImage}
        alt={`${alt} - después`}
        className="w-full h-full object-cover"
      />
      
      {/* Before image (clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-200"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - antes`}
          className="w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        />
      </div>
      
      {/* Slider line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-200"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
        Antes
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
        Después
      </div>
      
      {/* Range slider overlay for better mobile experience */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
      />
    </div>
  );
};

export default BeforeAfterSlider;