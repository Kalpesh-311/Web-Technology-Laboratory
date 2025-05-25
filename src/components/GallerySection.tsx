
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3",
      alt: "Happy dogs playing",
      title: "Playtime Fun"
    },
    {
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3",
      alt: "Professional grooming",
      title: "Professional Grooming"
    },
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3",
      alt: "Comfortable boarding",
      title: "Comfortable Boarding"
    },
    {
      src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3",
      alt: "Training session",
      title: "Training Sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3",
      alt: "Veterinary care",
      title: "Veterinary Care"
    },
    {
      src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3",
      alt: "Happy pets",
      title: "Happy Customers"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            See Our Happy Pets
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our furry friends enjoying their time at Mr n Mrs Pet. 
            Every day brings new smiles, wagging tails, and happy moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
