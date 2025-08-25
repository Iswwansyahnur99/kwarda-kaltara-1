import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <News />
        <Events />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;