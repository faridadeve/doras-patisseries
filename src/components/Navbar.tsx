import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Cart from "./Cart";
import { CartItem } from "@/types/product";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === id);
      if (itemIndex === -1) return prevItems;

      const newItems = [...prevItems];
      const newQuantity = newItems[itemIndex].quantity + change;

      if (newQuantity <= 0) {
        return newItems.filter(item => item.id !== id);
      }

      newItems[itemIndex] = {
        ...newItems[itemIndex],
        quantity: newQuantity
      };

      return newItems;
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gold hover:text-pink transition-colors">
            DORA
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Cart items={cartItems} onUpdateQuantity={updateQuantity} />
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
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
            <Cart items={cartItems} onUpdateQuantity={updateQuantity} />
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/reservation"
                className="text-gray-600 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Réservation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;