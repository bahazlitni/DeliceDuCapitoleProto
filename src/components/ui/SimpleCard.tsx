import { motion } from "framer-motion"
import "@/styles/ui/simple-card.css"

export interface SimpleCardProps {
  title: string
  imageSrc: string
  size: "s" | "m" | "l" | "xl" | "auto"
  imgAlt?: string
  draggable?: boolean
  motionHover?: boolean
}

export default function SimpleCard({
  imageSrc,
  title,
  size,
  imgAlt = "",
  draggable = false,
  motionHover = true,
}: SimpleCardProps) {
  return (
    <motion.div
      className={`${size} simple-card`}
      role="button"
      tabIndex={0}
      // Do NOT scale the whole card; tiny Y nudge only
      whileHover={motionHover ? { y: -2 } : undefined}
      whileTap={motionHover ? { y: 0 } : undefined}
      transition={motionHover ? { type: "spring", stiffness: 340, damping: 22, mass: 0.45 } : undefined}
    >
      <div className="image-wrapper">
        <img draggable={draggable} src={imageSrc} alt={imgAlt} loading="lazy" />
      </div>
      <h1 className="emph-serif">{title}</h1>
    </motion.div>
  )
}
