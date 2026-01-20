import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CyberCard from '@/components/CyberCard';
import { Heart, Play, Star, Anchor, Swords } from 'lucide-react';
import luffyGear5 from '@/assets/luffy-gear5.jpg';
import videos, { Video } from '@/lib/mangaVideos';
import { useState, useEffect } from 'react';

// Helper: extract YouTube id from URL
const getYoutubeId = (url: string) => {
  const m = url.match(/[?&]v=([^&#]+)|youtu\.be\/([^&#]+)/);
  return m ? (m[1] || m[2]) : '';
};

const Manga = () => {
  const luffyTraits = [
    { icon: Anchor, label: 'Liberté', description: 'Le rêve de Luffy est de devenir le Roi des Pirates' },
    { icon: Heart, label: 'Nakama', description: 'L\'équipage est sa famille, il les protège à tout prix' },
    { icon: Swords, label: 'Force', description: 'Le Gomu Gomu no Mi lui donne des pouvoirs élastiques' },
    { icon: Star, label: 'Détermination', description: 'Jamais il n\'abandonne, peu importe les obstacles' },
  ];

  // Player modal state
  const [selected, setSelected] = useState<Video | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary">passions.anime</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              One <span className="text-primary neon-text">Piece</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mon manga préféré et une source d'inspiration dans ma vie.
            </p>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 neon-box">
              {/* Luffy Image */}
              <div className="aspect-video relative">
                <img 
                  src={luffyGear5} 
                  alt="Monkey D. Luffy - Gear 5" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h2 className="text-3xl font-cyber font-bold text-primary neon-text">
                    Monkey D. Luffy
                  </h2>
                  <p className="text-foreground font-mono mt-2">
                    "Je serai le Roi des Pirates!"
                  </p>
                </div>
              </div>
              
              {/* Play button overlay */}
              <button
                type="button"
                onClick={() => setSelected(videos.find(v => v.id === 'hero-luffy') ?? null)}
                className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Lire la vidéo principale"
                title="Lire la vidéo"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Description Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <CyberCard delay={0.3}>
              <h3 className="text-2xl font-cyber font-bold text-primary mb-4">
                À propos de One Piece
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">One Piece</span> est un manga créé par 
                  <span className="text-foreground"> Eiichiro Oda</span> publié depuis 1997. C'est 
                  l'histoire de Monkey D. Luffy et son équipage, les Mugiwara.
                </p>
                <p>
                  L'histoire suit leur quête pour trouver le légendaire trésor "One Piece" laissé 
                  par le Roi des Pirates Gol D. Roger, et ainsi faire de Luffy le nouveau Roi des Pirates.
                </p>
                <p>
                  Avec plus de <span className="text-primary font-bold">500 millions</span> d'exemplaires 
                  vendus, c'est le manga le plus vendu de tous les temps!
                </p>
              </div>
            </CyberCard>

            <CyberCard delay={0.4}>
              <h3 className="text-2xl font-cyber font-bold text-primary mb-4">
                Pourquoi Luffy?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Luffy est mon personnage préféré car il incarne des valeurs que j'admire:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong className="text-foreground">La liberté absolue</strong> - Il ne se soumet jamais à personne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong className="text-foreground">La loyauté</strong> - Ses nakamas sont sa plus grande force</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong className="text-foreground">La persévérance</strong> - Jamais il n'abandonne ses rêves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong className="text-foreground">Le courage</strong> - Il affronte tous les dangers pour ses amis</span>
                  </li>
                </ul>
              </div>
            </CyberCard>
          </div>

          {/* Character Traits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-cyber font-bold text-center mb-8">
              <span className="text-primary">&lt;</span>
              Traits de Luffy
              <span className="text-primary">/&gt;</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {luffyTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <trait.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-cyber font-semibold text-foreground mb-2">
                    {trait.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {trait.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-cyber font-bold text-center mb-8">
              <span className="text-primary">[</span>
              Moments Épiques
              <span className="text-primary">]</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {videos.filter(v => v.id !== 'hero-luffy').map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelected(video)}
                  className="aspect-video bg-card border border-border rounded-xl overflow-hidden group cursor-pointer relative text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />

                  {/* Thumbnail (YouTube thumbnail or placeholder) */}
                  {video.type === 'youtube' ? (
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeId(video.src)}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h4 className="font-cyber font-semibold text-foreground">
                      {video.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {video.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Modal Player */}
            {selected && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                onClick={() => setSelected(null)}
              >
                <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
                  <div className="flex justify-end mb-2">
                    <button
                      className="text-foreground bg-card/40 rounded-full px-3 py-1 hover:bg-card/60"
                      onClick={() => setSelected(null)}
                    >
                      ✕
                    </button>
                  </div>

                  <div className="bg-black rounded-lg overflow-hidden">
                    {selected.type === 'youtube' ? (
                      <iframe
                        className="w-full aspect-video"
                        src={`https://www.youtube.com/embed/${getYoutubeId(selected.src)}?autoplay=1&rel=0`}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={selected.title}
                      />
                    ) : (
                      <video
                        className="w-full"
                        controls
                        autoPlay
                        src={selected.src}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 border-l-4 border-primary bg-card/50 rounded-r-xl max-w-3xl mx-auto"
          >
            <blockquote className="text-2xl font-cyber italic text-foreground mb-4">
              "Un homme meurt quand on l'oublie."
            </blockquote>
            <cite className="text-muted-foreground font-mono">
              — Dr. Hiluluk, One Piece
            </cite>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Manga;
