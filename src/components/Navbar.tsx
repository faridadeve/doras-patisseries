import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gold hover:text-pink transition-colors">
            DORA
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gold transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">
              Contact
            </Link>
            <Link to="/reservation" className="text-gray-600 hover:text-gold transition-colors">
              Réservation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;