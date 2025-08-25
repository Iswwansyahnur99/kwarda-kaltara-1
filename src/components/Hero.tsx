import { ArrowRight, Users, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import scoutHero from "@/assets/scout-hero.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, label: "Anggota Aktif", value: "12,500+" },
    { icon: Award, label: "Prestasi", value: "150+" },
    { icon: MapPin, label: "Gudep Aktif", value: "320+" },
  ];

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${scoutHero})` }}
      >
        <div className="absolute inset-0 scout-hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-top duration-1000">
            Kwartir Daerah<br />
            <span className="text-accent">Gerakan Pramuka</span><br />
            Kalimantan Utara
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-in slide-in-from-bottom duration-1000 delay-300">
            Membangun karakter generasi muda melalui pendidikan kepramukaan yang berkualitas di seluruh Kalimantan Utara
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in zoom-in duration-1000 delay-500">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 scout-transition"
            >
              Lihat Berita Terbaru
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white/20 scout-transition"
            >
              Tentang Kwarda Kaltara
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-700">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-accent" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;