import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ketuaKwarda from "@/assets/ketua-kwarda.jpg";

const SambutanKetua = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              asChild 
              className="mb-6 scout-transition hover:bg-muted"
            >
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Beranda
              </a>
            </Button>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Sambutan Ketua Kwarda
              </h1>
              <div className="w-32 h-1 bg-accent mx-auto rounded-full"></div>
            </div>

            <Card className="max-w-4xl mx-auto scout-shadow border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <img 
                    src={ketuaKwarda} 
                    alt="Ketua Kwarda Kalimantan Utara" 
                    className="w-48 h-48 object-cover rounded-2xl scout-shadow mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Drs. H. Ahmad Sholeh, M.Pd
                  </h2>
                  <p className="text-muted-foreground">
                    Ketua Kwartir Daerah Gerakan Pramuka Kalimantan Utara
                  </p>
                </div>

                <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">
                  <div className="text-center text-4xl text-accent mb-6">"</div>
                  
                  <p className="text-lg">
                    <strong>Assalamu'alaikum Warahmatullahi Wabarakatuh,</strong>
                  </p>

                  <p>
                    Puji syukur kita panjatkan kehadirat Allah SWT atas segala rahmat dan karunia-Nya 
                    sehingga kita dapat terus berkarya dalam wadah Gerakan Pramuka di bumi Kalimantan Utara.
                  </p>

                  <p>
                    Selamat datang di portal resmi Kwartir Daerah Gerakan Pramuka Kalimantan Utara. 
                    Sebagai Ketua Kwarda, saya merasa bangga dan bersyukur atas dedikasi luar biasa 
                    yang telah ditunjukkan oleh seluruh keluarga besar Pramuka di tanah Kaltara.
                  </p>

                  <p>
                    Website ini hadir sebagai jembatan komunikasi dan informasi bagi seluruh anggota 
                    Pramuka, mulai dari tingkat siaga hingga pandega, para pembina, pelatih, dan 
                    seluruh pengurus di berbagai tingkatan. Melalui portal ini, kita dapat saling 
                    berbagi informasi, pengalaman, dan prestasi yang telah diraih bersama.
                  </p>

                  <p>
                    Gerakan Pramuka Kalimantan Utara memiliki peran strategis dalam membentuk karakter 
                    generasi muda. Di tengah pesatnya perkembangan teknologi dan globalisasi, nilai-nilai 
                    kepramukaan menjadi semakin relevan untuk membangun jiwa kepemimpinan, kemandirian, 
                    dan cinta tanah air.
                  </p>

                  <p>
                    Saya mengajak seluruh anggota Pramuka Kaltara untuk terus berinovasi, berkreativitas, 
                    dan mengembangkan diri. Mari kita jadikan setiap kegiatan kepramukaan sebagai sarana 
                    pembelajaran yang bermakna, tidak hanya untuk diri sendiri tetapi juga untuk kemajuan 
                    masyarakat dan bangsa.
                  </p>

                  <p>
                    Kepada para pembina dan pengurus, terima kasih atas pengabdian dan komitmen yang luar biasa. 
                    Kepada seluruh anggota muda Pramuka, kalian adalah harapan masa depan bangsa. Teruslah 
                    belajar, berkarya, dan wujudkan cita-cita mulia melalui kegiatan kepramukaan.
                  </p>

                  <p>
                    Semoga portal ini dapat memberikan manfaat yang sebesar-besarnya bagi kemajuan 
                    Gerakan Pramuka Kalimantan Utara. Mari bersama-sama membangun generasi muda yang 
                    berkarakter, cerdas, berakhlak mulia, dan siap menghadapi tantangan masa depan.
                  </p>

                  <p className="text-lg font-semibold">
                    <strong>Wassalamu'alaikum Warahmatullahi Wabarakatuh</strong>
                  </p>

                  <div className="text-center mt-8 pt-6 border-t border-border">
                    <p className="font-semibold text-primary">
                      Drs. H. Ahmad Sholeh, M.Pd
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ketua Kwartir Daerah Gerakan Pramuka Kalimantan Utara
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Mission Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 scout-shadow border-0 hover:scale-105 scout-transition">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Persatuan</h3>
                  <p className="text-sm text-muted-foreground">
                    Membangun persatuan anggota Pramuka di seluruh Kaltara
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 scout-shadow border-0 hover:scale-105 scout-transition">
                <CardContent className="p-0">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Fokus</h3>
                  <p className="text-sm text-muted-foreground">
                    Fokus pada pembentukan karakter generasi muda
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 scout-shadow border-0 hover:scale-105 scout-transition">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Prestasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Mendorong pencapaian prestasi terbaik dalam kepramukaan
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 scout-shadow border-0 hover:scale-105 scout-transition">
                <CardContent className="p-0">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Dedikasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedikasi penuh untuk kemajuan Pramuka Kaltara
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SambutanKetua;