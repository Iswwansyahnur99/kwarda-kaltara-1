import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Jambore Daerah Kalimantan Utara 2024 Sukses Digelar",
      excerpt: "Lebih dari 2,000 peserta dari seluruh Kalimantan Utara mengikuti kegiatan Jambore Daerah yang berlangsung selama 5 hari di Balikpapan.",
      date: "15 Desember 2024",
      category: "Kegiatan",
      readTime: "3 menit",
      featured: true
    },
    {
      id: 2,
      title: "Pelatihan Pembina Pramuka Tingkat Lanjutan",
      excerpt: "Kwarda Kaltara mengadakan pelatihan untuk meningkatkan kompetensi pembina pramuka se-Kalimantan Utara.",
      date: "10 Desember 2024",
      category: "Pelatihan",
      readTime: "2 menit",
      featured: false
    },
    {
      id: 3,
      title: "Prestasi Gemilang Pramuka Kaltara di Tingkat Nasional",
      excerpt: "Kontingen Pramuka Kalimantan Utara meraih juara umum dalam kompetisi kepramukaan nasional.",
      date: "8 Desember 2024",
      category: "Prestasi",
      readTime: "4 menit",
      featured: false
    },
    {
      id: 4,
      title: "Bakti Sosial Pramuka untuk Masyarakat Daerah Terpencil",
      excerpt: "Gerakan bakti sosial Pramuka Kaltara menjangkau daerah terpencil dengan memberikan bantuan pendidikan dan kesehatan.",
      date: "5 Desember 2024",
      category: "Baksos",
      readTime: "3 menit",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Kegiatan": return "bg-primary text-primary-foreground";
      case "Pelatihan": return "bg-secondary text-secondary-foreground";
      case "Prestasi": return "bg-accent text-accent-foreground";
      case "Baksos": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="berita" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Berita & Artikel Terbaru
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru kegiatan dan prestasi Gerakan Pramuka Kalimantan Utara
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            {newsItems.filter(item => item.featured).map((item) => (
              <Card key={item.id} className="scout-shadow hover:shadow-elevated scout-transition cursor-pointer">
                <div className="aspect-video bg-gradient-scout-primary rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary scout-transition">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other News */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Berita Lainnya</h3>
            {newsItems.filter(item => !item.featured).map((item) => (
              <Card key={item.id} className="scout-transition hover:scout-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-base leading-tight hover:text-primary scout-transition">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button variant="outline" className="w-full scout-transition">
              Lihat Semua Berita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
