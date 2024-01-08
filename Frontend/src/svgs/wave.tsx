import React, { useEffect } from 'react'
import useWindowSize from '@/hooks/useWindowSize';
import { motion, useAnimation } from 'framer-motion'
import Style from "@/scss/svgs.module.scss"

const Wave = () => {
  
  const size = useWindowSize();
  const height = size.height / 2

  return (
    <div>
      <svg height={height} width={size.width}>
        <circle cx="0" cy={height} r={height} fill="#F526CA" />
        <path d={`M0 ${height * 1}L60 ${height - 42.7}C120 ${height - 84.7} 240 ${height - 170.7} 360 ${height - 181.3}C480 ${height - 192} 600 ${height - 128} 720 ${height - 117.3}C840 ${height - 106.7} 960 ${height - 148.7} 1080 ${height - 176}C1200 ${height - 203} 1320 ${height - 213} 1380 ${height - 218.7}L1440 ${height * 4}V${height * 2}H1380C1320 ${height * 2} 1200 ${height * 2} 1080 ${height * 2}C960 ${height * 2} 840 ${height * 2} 720 ${height * 2}C600 ${height * 2} 480 ${height * 2} 360 ${height * 2}C240 ${height * 2} 120 ${height * 2} 60 ${height * 2}H0Z`} fill="#00C4CC" fill-opacity="0.75" />
      </svg>
    </div>
  )
}

export default Wave
