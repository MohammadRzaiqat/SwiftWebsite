import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Truck, 
  Phone, 
  Menu,
  X,
  TrendingUp,
  Sun,
  Moon,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'about', label: t('nav.about'), icon: Building2 },
    { id: 'services', label: t('nav.services'), icon: Truck },
    { id: 'contact', label: t('nav.contact'), icon: Phone },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">SWIFT</h1>
                <p className="text-xs text-muted-foreground">Global Trade Solutions</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium
                      ${activeSection === item.id
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'hover:bg-accent text-foreground/80 hover:text-foreground'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              {/* Theme Toggle */}
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                <Moon className="w-4 h-4" />
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-background border border-border rounded px-2 py-1 text-sm"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full bg-sidebar text-sidebar-foreground transition-transform duration-300 z-40 lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-72 border-r border-sidebar-border
      `}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sidebar-primary">SWIFT</h1>
              <p className="text-xs text-sidebar-foreground/60">Global Trade Solutions</p>
            </div>
          </div>

          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${activeSection === item.id
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg'
                      : 'hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="mb-6 p-4 bg-sidebar-accent rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">{t('common.switchTheme')}</span>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                <Moon className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="mb-6 p-4 bg-sidebar-accent rounded-lg">
            <div className="mb-3">
              <span className="text-sm font-medium">{t('common.switchLanguage')}</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left
                    ${language === lang.code
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'hover:bg-sidebar-accent/50'
                    }
                  `}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-sidebar-accent rounded-lg p-4">
            <p className="text-sm text-sidebar-foreground/60 mb-2">{t('common.needHelp')}</p>
            <p className="text-xs text-sidebar-foreground/40">{t('common.supportDesc')}</p>
            <a href="#contact">
              <Button size="sm" variant="outline" className="mt-3 w-full">
                {t('common.getSupport')}
              </Button>
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
