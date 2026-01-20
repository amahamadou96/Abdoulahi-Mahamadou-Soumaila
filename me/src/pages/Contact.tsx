import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CyberCard from '@/components/CyberCard';
import { Mail, Send, User, MessageSquare, CheckCircle, Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import socials from '@/lib/socials';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Open email client with pre-filled data
    const mailtoLink = `mailto:abdoulahim10@gmail.com?subject=Message de ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;

    toast({
      title: "Message préparé!",
      description: "Votre client email va s'ouvrir avec le message.",
    });

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary">send_message()</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              Me <span className="text-primary neon-text">Contacter</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une question, une opportunité ou juste envie de discuter cybersécurité? N'hésitez pas!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <CyberCard delay={0.2} hover={false}>
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-mono text-muted-foreground">~/contact/form</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-primary">$</span> nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg 
                             font-mono text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                             transition-all duration-300"
                    placeholder="Votre nom..."
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-primary">$</span> email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg 
                             font-mono text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                             transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-primary">$</span> message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg 
                             font-mono text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                             transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-primary text-primary-foreground font-cyber font-semibold 
                           rounded-lg flex items-center justify-center gap-2
                           hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </CyberCard>

            {/* Contact Info */}
            <div className="space-y-6">
              <CyberCard delay={0.3}>
                <h3 className="text-xl font-cyber font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-terminal-green" />
                  Informations
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="font-mono text-sm text-muted-foreground mb-1">Email</div>
                    <a 
                      href="mailto:abdoulahim10@gmail.com"
                      className="text-primary hover:underline font-mono"
                    >
                      abdoulahim10@gmail.com
                    </a>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="font-mono text-sm text-muted-foreground mb-1">Pseudo</div>
                    <span className="text-primary font-mono">S4touro</span>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="font-mono text-sm text-muted-foreground mb-1">Rôle</div>
                    <span className="text-foreground">Junior Security Analyst & CTF Player</span>
                  </div>
                </div>
              </CyberCard>

              <CyberCard delay={0.4}>
                <h3 className="text-xl font-cyber font-semibold text-foreground mb-4">
                  Réseaux Sociaux
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg
                               text-muted-foreground hover:text-primary hover:border-primary
                               transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-mono text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CyberCard>

              {/* Terminal Animation */}
              <CyberCard delay={0.5}>
                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="text-terminal-green">$</span> whoami
                  </div>
                  <div className="text-foreground mb-3">
                    Abdoulahi Mahamadou Soumaila
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="text-terminal-green">$</span> cat skills.txt
                  </div>
                  <div className="text-primary">
                    Security Analysis | CTF | Pentesting | Python
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-3">
                    <span className="text-terminal-green">$</span> 
                    <span className="typing-cursor" />
                  </div>
                </div>
              </CyberCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
