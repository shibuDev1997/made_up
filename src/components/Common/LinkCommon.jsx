import Link from 'next/link'
import React from 'react'

const LinkCommon = ({ href, className, children }) => {
  return (
    <Link href={href} className={className}>{children}</Link>
  )
}

export default LinkCommon