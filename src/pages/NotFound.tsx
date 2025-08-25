import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-muted-foreground">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau URL yang dimasukkan salah.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="scout-transition">
            <a href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="scout-transition">
            <ArrowLeft className="h-4 w-4" />
            Halaman Sebelumnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
