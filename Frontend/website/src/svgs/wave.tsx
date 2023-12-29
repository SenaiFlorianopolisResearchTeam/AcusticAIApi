import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Wave = () => {
  const controls = useAnimation()

  useEffect(() => {
    const waveAnimation = {
      pathLength: [0, 1], // Adiciona animação de movimento ao longo do caminho
      scale: [1, 2, 1], // Variação de tamanho
      x: [0, 100, 200], // Movimento horizontal
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      },
    };

    controls.start(waveAnimation);
  }, [])

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width="200"
      height="100"
    >
      <motion.path
        d="M0 50 Q25 70 50 50 T100 50 T150 50 T200 50" // Ajusta o caminho conforme necessário
        fill="#3498db"
        animate={controls}
      />
    </motion.svg>
  )
}

export default Wave
