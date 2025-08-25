import { Play, Eye, ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import scoutActivities from "@/assets/scout-activities.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Jambore Daerah 2024",
      type: "photo",
      thumbnail: scoutActivities,
      count: "120 Foto",
      date: "15 Des 2024"
    },
    {
      id: 2,
      title: "Pelatihan Pembina Tingkat Lanjutan",
      type: "video",
      thumbnail: scoutActivities,
      duration: "15:30",
      date: "10 Des 2024"
    },
    {
      id: 3,
      title: "Bakti Sosial Daerah Terpencil",
      type: "photo",
      thumbnail: scoutActivities,
      count: "85 Foto",
      date: "5 Des 2024"
    },
    {
      id: 4,
      title: "Kompetisi Pionering Regional",
      type: "video",
      thumbnail: scoutActivities,
      duration: "22:45",
      date: "1 Des 2024"
    },
    {
      id: 5,
      title: "Upacara Hari Pramuka",
      type: "photo",
      thumbnail: scoutActivities,
      count: "150 Foto",
      date: "14 Agu 2024"
    },
    {
      id: 6,
      title: "Perkemahan Sabtu Minggu",
      type: "video",
      thumbnail: scoutActivities,
      duration: "18:20",
      date: "10 Agu 2024"
    }
  ];

  const categories = [
    { name: "Semua", count: "500+" },
    { name: "Kegiatan", count: "250+" },
    { name: "Pelatihan", count: "120+" },
    { name: "Perlombaan", count: "80+" },
    { name: "Baksos", count: "50+" }
  ];

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Galeri Foto & Video
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi kegiatan dan prestasi Gerakan Pramuka Kalimantan Utara
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="scout-transition"
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden scout-shadow hover:shadow-elevated scout-transition cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 scout-transition"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 scout-transition flex items-center justify-center">
                  {item.type === "video" ? (
                    <div className="flex items-center gap-2 text-white">
                      <Play className="h-8 w-8" />
                      <span className="text-sm">Putar Video</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-white">
                      <Eye className="h-8 w-8" />
                      <span className="text-sm">Lihat Galeri</span>
                    </div>
                  )}
                </div>
                {item.type === "video" && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {item.duration}
                  </div>
                )}
                {item.type === "photo" && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Camera className="h-3 w-3" />
                    {item.count}
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold group-hover:text-primary scout-transition mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <Button size="lg" className="scout-transition">
            Lihat Lebih Banyak
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;