import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ketuaKwarda from "@/assets/ketua-kwarda.jpg";

const KetuaSambutan = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sambutan Ketua Kwarda
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <Card className="max-w-6xl mx-auto scout-shadow border-0">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Foto Ketua Kwarda */}
              <div className="text-center md:text-left">
                <div className="relative inline-block">
                  <img 
                    src={ketuaKwarda} 
                    alt="Ketua Kwarda Kalimantan Utara" 
                    className="w-80 h-80 object-cover rounded-2xl scout-shadow mx-auto md:mx-0"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-primary">Drs. H. Ahmad Sholeh, M.Pd</h3>
                  <p className="text-muted-foreground">Ketua Kwartir Daerah Kalimantan Utara</p>
                </div>
              </div>

              {/* Teks Sambutan */}
              <div className="space-y-6">
                <div className="text-4xl text-accent mb-4">"</div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Assalamu'alaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p>
                    Selamat datang di portal resmi Kwartir Daerah Gerakan Pramuka Kalimantan Utara. 
                    Sebagai Ketua Kwarda, saya mengucapkan terima kasih atas dedikasi seluruh anggota 
                    Pramuka di tanah Kaltara.
                  </p>
                  <p>
                    Website ini hadir sebagai jembatan komunikasi dan informasi bagi seluruh keluarga 
                    besar Pramuka Kalimantan Utara. Mari bersama-sama membangun generasi muda yang 
                    berkarakter, cerdas, dan siap menghadapi tantangan masa depan.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="scout-transition hover:scale-105"
                  asChild
                >
                  <a href="/sambutan-ketua" className="flex items-center gap-2">
                    Baca Selengkapnya
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KetuaSambutan;