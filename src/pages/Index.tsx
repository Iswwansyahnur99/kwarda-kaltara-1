import Header from "@/components/Header";
import KetuaSambutan from "@/components/KetuaSambutan";
import News from "@/components/News";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <KetuaSambutan />
        <News />
        <Events />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
