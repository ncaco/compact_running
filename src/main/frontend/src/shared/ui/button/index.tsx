import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import './styles.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
} 