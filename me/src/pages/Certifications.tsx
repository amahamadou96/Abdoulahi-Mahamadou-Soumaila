import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CyberCard from '@/components/CyberCard';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
import cheCiscoCert from './CHE Cisco.png';
import advntwofcyber from './Advent of Cyber 2025.png';
import cgrca from './CGRCA hack et fix.png';
import cdws from './cdws cyber land.png';
import cpps from './CPPS hack et fix.png';
import cwap from './CWAP cyber land.png';
import IT from './it essentiel 7 cisco.png';
import NDG from './NDG Linux Cisco.png';
import presecurite from './pres security Cisco.png';
import python from './Python Essentiel 1 Cisco.png';
const certifications = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'Cisco',
    date: '2025',
    description: 'Certification professionnelle en hacking éthique et tests de pénétration.',
    image: cheCiscoCert,
    verified: true,
  },
  {
    title: 'Advent of Cyber 2025',
    issuer: 'TryHackMe',
    date: '2025',
    description: 'Compétition annuelle de cybersécurité avec des défis pratiques.',
    image: advntwofcyber,
    verified: true,
  },
  {
    title: 'Certified Governance Risk and Compliance Analyst (CGRC)',
    issuer: 'Hack et fixe',
    date: '2025',
    description: 'Certification en gouvernance, gestion des risques et conformité.',
    image: cgrca,
    verified: true,
  },
  {
    title: 'Deep Web Security certification (CDWS)',
    issuer: 'Cyber Land Academy',
    date: '2025',
    description: 'Certification en sécurité du Deep Web et des réseaux anonymes.',
    image: cdws,
    verified: true,
  },
  {
    title: 'Phishing Prevention Specialist (CPPS)',
    issuer: 'Hack et fixe',
    date: '2025',
    description: 'Certification spécialisée dans la prévention des attaques de phishing.',
    image: cpps,
    verified: true,
  },
  {
    title: 'Web Application pentester (CWAP)',
    issuer: 'Cyber Land Academy',
    date: '2025',
    description: 'Certification en tests de pénétration des applications web.',
    image: cwap,
    verified: true,
  },
  {
    title: 'IT Essentials 7.02',
    issuer: 'CISCO',
    date: '2025',
    description: 'Certification en compétences de base en informatique et réseautique.',
    image: IT,
    verified: true,
  },
  {
    title: 'NDG Linux Essentials',
    issuer: 'CISCO',
    date: '2025',
    description: 'Certification en compétences de base en Linux et administration système.',
    image: NDG,
    verified: true,
  },
  {
    title: 'Pre Security ',
    issuer: 'TryHackMe',
    date: '2025',
    description: 'Certification d\'introduction à la cybersécurité et aux concepts fondamentaux.',
    image: presecurite,
    verified: true,
  },
  {
    title: 'Python Essentials',
    issuer: 'Cisco',
    date: '2025',
    description: 'Certification en compétences de base en programmation Python.',
    image: python,
    verified: true,
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-card rounded-lg overflow-hidden border border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg border border-border z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Certification"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      )}

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary">certifications.list()</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              Mes <span className="text-primary neon-text">Certifications</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preuves de mes compétences et connaissances validées par des organismes reconnus.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <CyberCard key={index} delay={index * 0.15} className="relative overflow-hidden">
                {/* Badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-terminal-green/20 border border-terminal-green/50 rounded-full">
                    <span className="text-xs font-mono text-terminal-green">verified</span>
                  </div>
                )}

                {/* Certificate Image */}
                <div className="aspect-video bg-secondary/50 rounded-lg mb-4 overflow-hidden border border-border">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-cyber font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary font-mono">{cert.issuer}</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>

                  <button 
                    onClick={() => setSelectedImage(cert.image)}
                    className="flex items-center gap-2 text-primary hover:underline font-mono text-sm mt-4 transition-colors hover:text-primary/80"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le certificat
                  </button>
                </div>
              </CyberCard>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: '7+', label: 'Certifications' },
              { value: '4', label: 'Organismes' },
              { value: '2025', label: 'Plus récente' },
              { value: '87%', label: 'Taux de réussite' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="text-3xl font-cyber font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;
