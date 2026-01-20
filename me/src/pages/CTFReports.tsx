import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CyberCard from '@/components/CyberCard';
import { FileText, Flag, Clock, Target, ExternalLink } from 'lucide-react';

const ctfReports = [
  {
    title: 'TryHackMe - Advent of Cyber 2025',
    platform: 'TryHackMe',
    difficulty: 'Facile',
    date: 'Décembre 2025',
    description: 'THM XSS - Merry XSSMas — Writeup complet du challenge Advent of Cyber avec solutions détaillées.',
    tags: ['Web', 'XSS', 'JavaScript'],
    solved: true,
    link: 'https://github.com/amahamadou96/THM-XSS---Merry-XSSMas/blob/main/THM_XSS_-_Merry_XSSMas.pdf',
  },
  {
    title: 'TryHackMe - Advent of Cyber 2025',
    platform: 'TryHackMe',
    difficulty: 'Facile ',
    date: 'Décembre 2025',
    description: ' Prompt Injection - Sched-yule conflict',
    tags: ['Web', 'Prompt Injection', 'AI'],
    solved: true,
    link: 'https://github.com/amahamadou96/Prompt-Injection---Sched-yule-conflict/blob/main/THM_Prompt_Injection_-_Sched-yule_conflict.pdf',
  },
  {
    title: 'TryHackMe - Advent of Cyber 2025',
    platform: 'TryHackMe',
    difficulty: ' Moyen',
    date: 'Décembre 2025',
    description: 'SOC_Alert_Triaging_-_Tinsel_Triage — Writeup complet du challenge Advent of Cyber avec solutions détaillées.',
    tags: ['SOC', 'Alert Triaging', 'Tinsel Triage'],
    solved: true,
    link: 'https://github.com/amahamadou96/THMSOC_Alert_Triaging_-_Tinsel_Triage/blob/main/THMSOC_Alert_Triaging_-_Tinsel_Triage.pdf',
  },
  {
    title: 'TryHackMe - Advent of Cyber 2025',
    platform: 'TryHackMe',
    difficulty: ' Moyen',
    date: 'Décembre 2025',
    description: 'Conteneurs_-_La_disparition_de_DoorDasher Writeup complet du challenge Advent of Cyber avec solutions détaillées.',
    tags: ['Conteneurs', 'Docker', 'DoorDasher'],
    solved: true,
    link: 'https://github.com/amahamadou96/THMConteneurs_-_La_disparition_de_DoorDasher/blob/main/Conteneurs_-_La_disparition_de_DoorDasher.pdf',
  },
  {
    title: 'TryHackMe - Advent of Cyber 2025',
    platform: 'TryHackMe',
    difficulty: ' Moyen',
    date: 'Décembre 2025',
    description: 'THM Web_Attack_Forensics_-_Drone_Alone — Writeup complet du challenge Advent of Cyber avec solutions détaillées.',
    tags: ['Forensics', 'Web Attack', 'Drone'],
    solved: true,
    link: 'https://github.com/amahamadou96/THM-Web_Attack_Forensics_-_Drone_Alone/blob/main/Web_Attack_Forensics_-_Drone_Alone.pdf',
  },
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes('Facile')) return 'text-terminal-green border-terminal-green/50';
  if (difficulty.includes('Moyen')) return 'text-yellow-500 border-yellow-500/50';
  return 'text-accent border-accent/50';
};

const CTFReports = () => {
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
              <Flag className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary">ctf_writeups.sh</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              CTF <span className="text-primary neon-text">Reports</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mes writeups et solutions de challenges Capture The Flag sur différentes plateformes.
            </p>
          </motion.div>

          {/* Reports List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {ctfReports.map((report, index) => (
              <CyberCard key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg border ${report.solved ? 'bg-terminal-green/10 border-terminal-green/50' : 'bg-primary/10 border-primary/50'} flex items-center justify-center`}>
                      {report.solved ? (
                        <Target className="w-6 h-6 text-terminal-green" />
                      ) : (
                        <Clock className="w-6 h-6 text-primary animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-xl font-cyber font-semibold text-foreground">
                        {report.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-mono border rounded-full ${getDifficultyColor(report.difficulty)}`}>
                        {report.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary font-mono">{report.platform}</span>
                      <span className="text-muted-foreground">{report.date}</span>
                    </div>

                    <p className="text-muted-foreground">
                      {report.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {report.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {report.solved && (
                      report.link ? (
                        <a href={report.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-mono text-sm">
                          <FileText className="w-4 h-4" />
                          Lire le writeup
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 text-primary hover:underline font-mono text-sm">
                          <FileText className="w-4 h-4" />
                          Lire le writeup
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '50+', label: 'Challenges résolus' },
                { value: '5', label: 'Plateformes' },
                { value: '20+', label: 'Writeups' },
                { value: 'Top 10%', label: 'Classement THM' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-cyber font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CTFReports;
