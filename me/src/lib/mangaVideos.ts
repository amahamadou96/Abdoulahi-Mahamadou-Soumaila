export type Video = {
  id: string;
  title: string;
  desc?: string;
  type: 'local' | 'youtube' | 'external';
  src: string; // for youtube use full watch URL (https://www.youtube.com/watch?v=ID)
  thumbnail?: string; // optional poster/thumbnail (URL or public path)
};

// Example videos - replace/add your own. For local files, place them under `public/videos/` and use `/videos/filename.mp4` as `src`.
const videos: Video[] = [
  {
    id: 'moments-droles',
    title: "Les moments les plus drôles de One Piece",
    desc: "Compilation des moments les plus drôles et mémorables",
    type: 'youtube',
    src: 'https://youtu.be/LYm_V2lS0zo?si=gXpKg7jgGGXZj_lu',
  },
  {
    id: 'gear5-official',
    title: 'Luffy — Gear 5 (Clip)',
    desc: 'Moment épique — extrait YouTube',
    type: 'youtube',
    src: 'https://youtu.be/PbLaraZy850?si=Gu41GUitsGnOOio8',
  },
  {
    id: 'gear5-luffy',
    title: 'Gear 5 de Luffy',
    desc: 'Clip Gear 5 — extrait YouTube',
    type: 'youtube',
    src: 'https://youtu.be/drAtqQT1Guc?si=ieQFt_MWbSjtpW-T',
  },
  {
    id: 'hero-luffy',
    title: 'Luffy — Vidéo principale',
    desc: 'Vidéo du hero (cliquez pour lire)',
    type: 'youtube',
    src: 'https://youtu.be/IAT814NAn_Y?si=tkIH42OrdzeqpG4y',
  },
];

export default videos;
