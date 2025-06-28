import React from 'react'
import { Button } from '../ui/button'

const ButtonCommon = ({ className, type="button", children, onClick, disabled = false }) => {
  return (
    <Button type={type} className={className} onClick={onClick} disabled={disabled}>{children}</Button>
  )
}

export default ButtonCommon