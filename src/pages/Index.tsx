import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Éclair au Chocolat",
    description: "Pâte à choux croustillante, garnie d'une crème pâtissière au chocolat noir.",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c",
  },
  {
    id: 2,
    name: "Macaron Framboise",
    description: "Coques délicates aux amandes, garnies d'une crème à la framboise fraîche.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43",
  },
  {
    id: 3,
    name: "Tarte aux Fruits",
    description: "Pâte sucrée, crème pâtissière et fruits frais de saison.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
  },
];

const Index = () => {
  return (
    <div>
      <section className="relative h-[80vh] bg-gradient-to-r from-purple to-pink flex items-center">
        <div className="container mx-auto px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            DORA <span className="text-gold">Pâtisserie</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Des créations uniques pour des moments inoubliables
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos <span className="text-gold">Créations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;