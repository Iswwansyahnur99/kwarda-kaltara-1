import { useState } from "react";
import { Menu, X, Home, User, Newspaper, Calendar, Image, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import scoutLogo from "@/assets/scout-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", icon: Home, href: "#beranda" },
    { name: "Profil", icon: User, href: "#profil" },
    { name: "Berita", icon: Newspaper, href: "#berita" },
    { name: "Agenda", icon: Calendar, href: "#agenda" },
    { name: "Galeri", icon: Image, href: "#galeri" },
    { name: "Download", icon: Download, href: "#download" },
    { name: "Kontak", icon: Phone, href: "#kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border scout-shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img src={scoutLogo} alt="Scout Logo" className="h-12 w-12" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">Kwarda Kaltara</h1>
              <p className="text-sm text-muted-foreground">Gerakan Pramuka Kalimantan Utara</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="scout-transition hover:bg-muted"
                >
                  <a href={item.href} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    {item.name}
                  </a>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="grid grid-cols-2 gap-2 mt-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="justify-start scout-transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <a href={item.href} className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4" />
                      {item.name}
                    </a>
                  </Button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;