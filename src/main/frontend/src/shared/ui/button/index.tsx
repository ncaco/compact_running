import React, { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode, MouseEvent } from 'react'
import confetti from 'canvas-confetti'
import './styles.css'
import classNames from 'classnames'
import styles from './button.module.css'

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'neon' 
  | 'bubble' 
  | 'flip3d' 
  | 'yoyo' 
  | 'glitch' 
  | 'explode'
  | 'shadow'
  | 'neonglow';

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = 'default' | 'success' | 'danger' | 'warning' | 'info'
export type ButtonAnimation = 
  | 'ripple' 
  | 'glitch' 
  | 'float' 
  | 'rotate' 
  | 'confetti'
  | 'sparkle'
  | 'wave'
  | 'fire';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 변형 스타일
   * @default 'primary'
   */
  variant?: ButtonVariant
  /**
   * 버튼 크기
   * @default 'md'
   */
  size?: ButtonSize
  /**
   * 버튼 색상
   * @default 'default'
   */
  color?: ButtonColor
  /**
   * 버튼 애니메이션
   * @default 'none'
   */
  animation?: ButtonAnimation
  /**
   * 버튼 왼쪽에 표시할 아이콘
   */
  leftIcon?: ReactNode
  /**
   * 버튼 오른쪽에 표시할 아이콘
   */
  rightIcon?: ReactNode
  /**
   * 버튼을 전체 너비로 설정
   * @default false
   */
  fullWidth?: boolean
  /**
   * 로딩 상태 표시
   * @default false
   */
  isLoading?: boolean
  /**
   * 비활성화 상태
   */
  disabled?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'primary',
  size = 'md',
  color = 'default',
  animation = 'none',
  leftIcon,
  rightIcon,
  fullWidth = false,
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  const colorClass = color !== 'default' ? `btn-color-${color}` : ''
  const animationClass = animation !== 'none' ? `btn-animation-${animation}` : ''
  const fullWidthClass = fullWidth ? 'btn-full-width' : ''
  const loadingClass = isLoading ? 'btn-loading' : ''
  
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (onClick) {
      onClick(e);
    }

    if (animation === 'confetti') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else if (animation === 'sparkle') {
      // 반짝임 애니메이션 구현
      const button = e.currentTarget;
      const sparkle = document.createElement('div');
      sparkle.className = styles.sparkle;
      button.appendChild(sparkle);
      
      setTimeout(() => {
        button.removeChild(sparkle);
      }, 500);
    } else if (animation === 'fire') {
      // 불꽃 애니메이션 구현
      const button = e.currentTarget;
      const fireEffect = document.createElement('div');
      fireEffect.className = styles.fire;
      button.appendChild(fireEffect);
      
      setTimeout(() => {
        button.removeChild(fireEffect);
      }, 700);
    }
  };

  return (
    <button 
      type="button" 
      className={classNames(
        baseClass,
        variantClass,
        sizeClass,
        colorClass,
        animationClass,
        fullWidthClass,
        loadingClass,
        className
      )}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading && <span className="btn-spinner" />}
      {!isLoading && leftIcon && <span className="btn-left-icon">{leftIcon}</span>}
      <span className="btn-content">{children}</span>
      {!isLoading && rightIcon && <span className="btn-right-icon">{rightIcon}</span>}
      {variant === 'bubble' && <span className="btn-bubble-effect"></span>}
      {animation === 'ripple' && <span className="btn-ripple-effect"></span>}
    </button>
  )
} 