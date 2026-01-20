import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import TypewriterText from '@/components/TypewriterText';
import CyberCard from '@/components/CyberCard';
import { Shield, Code, Target, Terminal, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import socials from '@/lib/socials';
import heroCyber from '@/assets/hero-cyber.jpg';
import { Link } from 'react-router-dom';

const Index = () => {
  const skills = [
    { icon: Shield, label: 'Security Analysis', description: 'Identification et analyse des vulnérabilités' },
    { icon: Code, label: 'Penetration Testing', description: 'Tests d\'intrusion et exploitation' },
    { icon: Target, label: 'CTF Player', description: 'Capture The Flag compétiteur' },
    { icon: Terminal, label: 'Scripting', description: 'Python, Bash, PowerShell' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Background Hero Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src={heroCyber} 
          alt="Cyber background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Terminal Header */}
            <motion.div 
              className="inline-block bg-card border border-border rounded-lg p-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-terminal-green" />
                <span className="ml-2 text-muted-foreground text-sm font-mono">~/portfolio</span>
              </div>
              <TypewriterText 
                texts={[
                  'Junior Security Analyst',
                  'CTF Player',
                  'Cybersecurity Student',
                  'Ethical Hacker'
                ]}
                className="text-lg"
              />
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-7xl font-cyber font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-foreground">Abdoulahi</span>
              <br />
              <GlitchText 
                text="Mahamadou Soumaila" 
                className="text-primary neon-soft"
              />
            </motion.h1>

            {/* Pseudo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-muted-foreground font-mono">alias:</span>
              <span className="text-2xl font-cyber text-primary animate-glow-pulse px-4 py-1 border border-primary/50 rounded">
                S4touro
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
            >
              Étudiant passionné en cybersécurité, je me spécialise dans l'analyse de sécurité 
              et les compétitions CTF. Mon objectif est de contribuer à la protection des 
              systèmes d'information tout en développant mes compétences techniques.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground font-cyber font-semibold rounded-lg 
                         hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300
                         border border-primary hover:scale-105"
              >
                Me Contacter
              </Link>
              <Link
                to="/certifications"
                className="px-8 py-3 bg-transparent text-primary font-cyber font-semibold rounded-lg 
                         border border-primary hover:bg-primary/10 transition-all duration-300
                         hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                Voir mes Certifications
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center gap-6 mt-8"
            >
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg text-muted-foreground 
                           hover:text-primary hover:border-primary hover:neon-border
                           transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-muted-foreground"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cyber font-bold text-center mb-12"
          >
            <span className="text-primary">&lt;</span>
            Compétences
            <span className="text-primary">/&gt;</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <CyberCard key={index} delay={index * 0.1}>
                <skill.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-cyber font-semibold text-foreground mb-2">
                  {skill.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </CyberCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cyber font-bold text-center mb-12"
          >
            <span className="text-primary">[</span>
            Explorer
            <span className="text-primary">]</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { path: '/ctf-reports', label: 'CTF Reports', desc: 'Mes writeups et solutions' },
              { path: '/platforms', label: 'Plateformes', desc: 'Où je m\'entraîne' },
              { path: '/manga', label: 'One Piece', desc: 'Ma passion en dehors du code' },
            ].map((item, index) => (
              <Link key={index} to={item.path}>
                <CyberCard delay={index * 0.1}>
                  <h3 className="text-xl font-cyber font-semibold text-primary mb-2">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                  <div className="mt-4 text-primary font-mono text-sm">
                    cd ./{item.path.slice(1)} →
                  </div>
                </CyberCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-muted-foreground">
            <span className="text-primary">©</span> 2026 Abdoulahi Mahamadou Soumaila 
            <span className="text-primary"> | </span>
            S4touro
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
