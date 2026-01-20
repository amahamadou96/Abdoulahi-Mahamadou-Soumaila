import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import { ExternalLink, BookOpen } from 'lucide-react';

const platforms = [
  {
    name: 'TryHackMe',
    shortName: 'THM',
    url: 'https://tryhackme.com',
    logo: 'https://assets.tryhackme.com/img/THMlogo.png',
    description: 'Plateforme d\'apprentissage de cybersécurité avec des rooms guidées.',
    color: '#88cc14',
    stats: 'Top 5%',
  },
  {
    name: 'HackTheBox',
    shortName: 'HTB',
    url: 'https://hackthebox.com',
    logo: '/htb-logo.svg',
    description: 'Laboratoire de hacking avec des machines virtuelles à exploiter.',
    color: '#9fef00',
    stats: 'Hacker Rank',
  },
  {
    name: 'CyberWarfare Labs',
    shortName: 'CWL',
    url: 'https://cyberwarfare.live',
    logo: '/cwl-logo.svg',
    description: 'Entraînement avancé en Red Team et Blue Team.',
    color: '#ff4444',
    stats: 'Member',
  },
  {
    name: 'PicoCTF',
    shortName: 'PICO',
    url: 'https://picoctf.org',
    logo: 'https://picoctf.org/img/logos/picoctf-logo-og.png',
    description: 'Compétition CTF éducative organisée par Carnegie Mellon.',
    color: '#4a90d9',
    stats: '200+ points',
  },
  {
    name: 'pwn.college',
    shortName: 'PWN',
    url: 'https://pwn.college',
    logo: '/pwn-logo.svg',
    description: 'Plateforme d\'apprentissage de l\'exploitation binaire.',
    color: '#ffd700',
    stats: 'Yellow Belt',
  },
  {
    name: 'Fortinet',
    shortName: 'FORT',
    url: 'https://training.fortinet.com',
    logo: 'https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg',
    description: 'Certifications et formations en sécurité réseau.',
    color: '#ee3124',
    stats: 'NSE 1-3',
  },
  {
    name: 'Cisco NetAcad',
    shortName: 'CISCO',
    url: 'https://www.netacad.com',
    logo: '/cisco-logo.svg',
    description: 'Académie Cisco pour les réseaux et la cybersécurité.',
    color: '#00bceb',
    stats: 'Certified',
  },
];

const Platforms = () => {
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
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary">learning_platforms</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              Plateformes <span className="text-primary neon-text">d'Étude</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les plateformes où je développe mes compétences en cybersécurité. Cliquez pour visiter.
            </p>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group block"
              >
                <div 
                  className="relative bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 overflow-hidden"
                  style={{
                    boxShadow: `0 0 0 1px transparent`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
                    style={{ backgroundColor: platform.color }}
                  />
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-3 py-1 text-xs font-mono rounded-full border"
                      style={{ 
                        color: platform.color, 
                        borderColor: `${platform.color}50`,
                        backgroundColor: `${platform.color}10`
                      }}
                    >
                      {platform.shortName}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Logo */}
                  <div className="w-full h-16 mb-4 flex items-center justify-center bg-secondary/30 rounded-lg overflow-hidden">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-cyber font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {platform.description}
                  </p>

                  {/* Stats */}
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-mono"
                    style={{ 
                      backgroundColor: `${platform.color}15`,
                      color: platform.color
                    }}
                  >
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: platform.color }} />
                    {platform.stats}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 font-mono text-sm"
          >
            <span className="text-primary">//</span> L'apprentissage continu est la clé de la cybersécurité
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default Platforms;
