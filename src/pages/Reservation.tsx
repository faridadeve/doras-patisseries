import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Reservation = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Réservation envoyée !",
      description: "Nous vous contacterons pour confirmer votre réservation.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Réservation <span className="text-gold">Événement</span>
          </h1>
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Prénom</label>
                <Input placeholder="Votre prénom" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="votre@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <Input type="tel" placeholder="Votre numéro de téléphone" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Adresse</label>
                <Input placeholder="Votre adresse" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Input type="date" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Heure</label>
                <Input type="time" required />
              </div>
              <Button type="submit" className="w-full bg-purple hover:bg-pink text-white">
                Réserver
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Reservation;