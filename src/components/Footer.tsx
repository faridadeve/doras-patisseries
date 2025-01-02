import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">DORA</h3>
            <p className="text-sm">
              Des pâtisseries artisanales faites avec amour et passion.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">123 Rue des Délices</p>
            <p className="text-sm mb-2">75001 Paris</p>
            <p className="text-sm">Tel: 01 23 45 67 89</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-sm">© 2024 DORA Pâtisserie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;