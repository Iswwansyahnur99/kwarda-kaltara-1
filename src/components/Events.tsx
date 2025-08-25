import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Perkemahan Sabtu Minggu Regional",
      date: "28-29 Desember 2024",
      time: "08:00 - 16:00 WITA",
      location: "Bumi Perkemahan Samarinda",
      participants: "500+ Peserta",
      type: "Perkemahan",
      status: "Pendaftaran Dibuka",
      description: "Kegiatan perkemahan regional untuk pramuka penggalang dan penegak se-Kalimantan Utara"
    },
    {
      id: 2,
      title: "Pelatihan Dasar Kepemimpinan",
      date: "5-7 Januari 2025",
      time: "07:00 - 21:00 WITA",
      location: "Gedung Kwarda Kaltara",
      participants: "50 Peserta",
      type: "Pelatihan",
      status: "Segera Dibuka",
      description: "Program pelatihan untuk mengembangkan kemampuan kepemimpinan anggota pramuka penegak dan pandega"
    },
    {
      id: 3,
      title: "Lomba Pionering Tingkat Daerah",
      date: "15 Januari 2025",
      time: "08:00 - 15:00 WITA",
      location: "Lapangan Pancasila Balikpapan",
      participants: "200+ Tim",
      type: "Perlombaan",
      status: "Segera Dibuka",
      description: "Kompetisi pionering untuk menguji keterampilan teknik kepramukaan tingkat daerah"
    },
    {
      id: 4,
      title: "Bakti Sosial Ramadhan",
      date: "20 Maret 2025",
      time: "08:00 - 12:00 WITA",
      location: "Berbagai Lokasi",
      participants: "1000+ Relawan",
      type: "Baksos",
      status: "Perencanaan",
      description: "Gerakan bakti sosial menyambut bulan suci Ramadhan dengan berbagai kegiatan kemanusiaan"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Perkemahan": return "bg-primary text-primary-foreground";
      case "Pelatihan": return "bg-secondary text-secondary-foreground";
      case "Perlombaan": return "bg-accent text-accent-foreground";
      case "Baksos": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendaftaran Dibuka": return "text-green-600 bg-green-50 border-green-200";
      case "Segera Dibuka": return "text-orange-600 bg-orange-50 border-orange-200";
      case "Perencanaan": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <section id="agenda" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Agenda Kegiatan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jadwal kegiatan dan acara Gerakan Pramuka Kalimantan Utara yang akan datang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="scout-shadow hover:shadow-elevated scout-transition cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(event.status)}>
                    {event.status}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary scout-transition">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.participants}</span>
                  </div>
                </div>

                <Button className="w-full scout-transition group-hover:bg-primary-hover">
                  {event.status === "Pendaftaran Dibuka" ? "Daftar Sekarang" : "Lihat Detail"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="scout-transition">
            Lihat Kalender Lengkap
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;