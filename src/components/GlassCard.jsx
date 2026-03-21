import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = false, glow = false }) {
  const glowStyle = glow
    ? { boxShadow: '0 0 40px rgba(255, 32, 86, 0.06)' }
    : {}

  return (
    <motion.div
      className={`glass rounded-2xl ${hover ? 'glass-hover cursor-pointer' : ''} ${className}`}
      style={glowStyle}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
