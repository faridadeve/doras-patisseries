import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
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
            Contactez <span className="text-gold">DORA</span>
          </h1>
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <Input placeholder="Votre nom" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="votre@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Votre message" className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-purple hover:bg-pink text-white">
                Envoyer
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;