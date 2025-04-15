import React, { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode, MouseEvent } from 'react'
import confetti from 'canvas-confetti'
import './styles.css'
import classNames from 'classnames'
import styles from './button.module.css'

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'text'
  | 'neon' 
  | 'bubble' 
  | 'flip3d' 
  | 'yoyo' 
  | 'glitch' 
  | 'explode'
  | 'shadow'
  | 'neonglow'
  | 'elastic'
  | 'bouncy'
  | 'retro'
  | 'pixel'
  | 'hologram'
  | 'ink'
  | 'mechanical'
  | 'glass'
  | 'cyberpunk'
  | 'stitched'
  | 'origami';

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = 'default' | 'success' | 'danger' | 'warning' | 'info'
export type ButtonAnimation = 
  | 'none'
  | 'ripple' 
  | 'glitch' 
  | 'float' 
  | 'rotate' 
  | 'confetti'
  | 'sparkle'
  | 'wave'
  | 'fire'
  | 'pulse'
  | 'shake'
  | 'bounce'
  | 'jelly'
  | 'fireworks'
  | 'snow'
  | 'stars'
  | 'hearts'
  | 'rain'
  | 'party';

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
    } else if (animation === 'party') {
      const end = Date.now() + 1000;
      
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
      
      const frame = () => {
        confetti({
          particleCount: 5,
          angle: Math.random() * 360,
          spread: 80,
          origin: { x: Math.random(), y: Math.random() * 0.4 + 0.3 },
          colors: colors,
        });
        
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
    } else if (animation === 'fireworks') {
      const duration = 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }
      
      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        
        const particleCount = 50 * (timeLeft / duration);
        
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.2, 0.3), y: Math.random() - 0.2 }
        }));
        
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.8), y: Math.random() - 0.2 }
        }));
        
      }, 250);
    } else if (animation === 'snow') {
      const duration = 1500;
      const animationEnd = Date.now() + duration;
      
      const frame = () => {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: 300,
          origin: { x: Math.random(), y: -0.1 },
          colors: ['#ffffff'],
          shapes: ['circle'],
          gravity: 0.2,
          scalar: 1,
        });
        
        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
    } else if (animation === 'stars') {
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.6 },
        shapes: ['square'],
        colors: ['#FFD700', '#FFA500', '#FF6347'],
      });
    } else if (animation === 'hearts') {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['square'],
        colors: ['#FF69B4', '#FF1493', '#C71585'],
      });
    } else if (animation === 'rain') {
      const duration = 1500;
      const animationEnd = Date.now() + duration;
      
      const frame = () => {
        confetti({
          particleCount: 2,
          startVelocity: 25,
          ticks: 150,
          origin: { x: Math.random(), y: -0.1 },
          colors: ['#1E90FF', '#00BFFF', '#ADD8E6'],
          shapes: ['circle'],
          gravity: 1.2,
          scalar: 0.7,
        });
        
        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
    } else if (animation === 'sparkle') {
      const button = e.currentTarget;
      const sparkle = document.createElement('div');
      sparkle.className = styles.sparkle;
      button.appendChild(sparkle);
      
      setTimeout(() => {
        button.removeChild(sparkle);
      }, 500);
    } else if (animation === 'fire') {
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