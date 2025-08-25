import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import scoutLogo from "@/assets/scout-logo.png";

const Footer = () => {
  const quickLinks = [
    "Tentang Kami",
    "Struktur Organisasi", 
    "Visi & Misi",
    "Program Kerja",
    "Kontak Kami"
  ];

  const resources = [
    "AD/ART Pramuka",
    "Juknis Kegiatan", 
    "Materi Pelatihan",
    "Formulir Pendaftaran",
    "Panduan Pembina"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={scoutLogo} alt="Scout Logo" className="h-10 w-10 brightness-0 invert" />
              <div>
                <h3 className="font-bold text-lg">Kwarda Kaltara</h3>
                <p className="text-sm opacity-90">Gerakan Pramuka Kalimantan Utara</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Membangun karakter generasi muda melalui pendidikan kepramukaan yang berkualitas 
              dan berkelanjutan di seluruh wilayah Kalimantan Utara.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-0"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent scout-transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Download</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent scout-transition"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 opacity-70" />
                <span className="opacity-90">Jl. Mulawarman No. 123, Samarinda</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 opacity-70" />
                <span className="opacity-90">+62 541 123456</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 opacity-70" />
                <span className="opacity-90">info@kwarda-kaltara.org</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2 text-sm">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Email Anda" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button 
                  size="sm" 
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-white border-0"
                >
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2024 Kwartir Daerah Gerakan Pramuka Kalimantan Utara. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-90 hover:opacity-100 scout-transition">
                Kebijakan Privasi
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 scout-transition">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;