import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const CyberCard = ({ children, className = '', delay = 0, hover = true }: CyberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        relative bg-card border border-border rounded-lg p-6
        before:absolute before:inset-0 before:rounded-lg before:p-[1px]
        before:bg-gradient-to-r before:from-primary/50 before:to-accent/50
        before:opacity-0 hover:before:opacity-100 before:transition-opacity
        before:-z-10 before:blur-sm
        ${hover ? 'cyber-hover' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default CyberCard;
