import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";

const languages: { code: Language; name: string }[] = [
  { code: "es", name: "ES" },
  { code: "ca", name: "CAT" },
  { code: "en", name: "EN" },
];

const LanguageSelector = ({ isScrolled }: { isScrolled: boolean }) => {
  const { language: currentLang, setLanguage, t } = useLanguage();
  
  const selectedLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "h-9 px-2 hover:-translate-y-0.5 transition-all duration-300 font-bold tracking-wider",
            isScrolled 
              ? "text-foreground hover:bg-primary/10 hover:text-primary" 
              : "text-white hover:bg-white/10 hover:text-white"
          )}
          aria-label={t("aria_language_selector")}
        >
          {selectedLanguage.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-20 bg-background border border-border shadow-elegant min-w-[70px]"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={cn(
              "cursor-pointer transition-colors flex items-center justify-center py-2 px-3 font-bold text-xs tracking-widest",
              currentLang === language.code ? "bg-primary/10 text-primary" : "hover:bg-secondary text-muted-foreground"
            )}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;