import Image from 'next/image';
import React from 'react'

const ImageCommon = ({ src, className }) => {
  return (
    <Image src={src} alt={!src.src ? src : src.src} width={1800} height={1800} className={className} priority/>
  )
}

export default ImageCommon