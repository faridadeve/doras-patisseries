import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8">
            À Propos de <span className="text-gold">DORA</span>
          </h1>
          <div className="prose prose-lg mx-auto">
            <p className="mb-6">
              Bienvenue dans l'univers gourmand de DORA Pâtisserie. Depuis plus de 10 ans,
              nous créons des pâtisseries artisanales qui enchantent les papilles de nos clients.
            </p>
            <p className="mb-6">
              Notre passion pour la pâtisserie se traduit par une sélection minutieuse
              des ingrédients et un savoir-faire traditionnel transmis de génération en génération.
            </p>
            <p>
              Chaque création est unique et réalisée avec amour, pour faire de vos moments
              de dégustation des instants inoubliables.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;