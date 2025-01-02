import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Clock } from "lucide-react";
import { useState } from "react";
import { CartItem } from "@/types/product";
import { useToast } from "@/components/ui/use-toast";

type CartProps = {
  items: CartItem[];
  onUpdateQuantity: (id: number, change: number) => void;
};

const Cart = ({ items, onUpdateQuantity }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasReservationItems = items.some(item => !item.availableImmediately);

  const handleCheckout = () => {
    if (hasReservationItems) {
      toast({
        title: "Information importante",
        description: "Certains produits nécessitent 24h de préparation. Notre équipe vous contactera pour confirmer la commande.",
      });
    }
    toast({
      title: "Commande validée",
      description: `Total: ${total.toFixed(2)}€`,
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingCart className="h-5 w-5" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-gold text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {items.length}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-50">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Panier vide</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{item.name}</p>
                      {!item.availableImmediately && (
                        <Clock className="h-4 w-4 text-gold" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{item.price.toFixed(2)}€</p>
                    {!item.availableImmediately && (
                      <p className="text-xs text-gold">Sur commande (24h)</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <div className="flex justify-between font-medium mb-2">
                  <span>Total:</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                {hasReservationItems && (
                  <p className="text-xs text-gold mb-4">
                    ⚠️ Certains produits nécessitent 24h de préparation
                  </p>
                )}
                <Button
                  className="w-full bg-gold hover:bg-gold/90"
                  onClick={handleCheckout}
                >
                  Valider la commande
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;