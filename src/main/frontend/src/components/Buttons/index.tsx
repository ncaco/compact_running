import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// 특이한 버튼 컴포넌트 추가
export const RetroButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-pixelated text-white bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const PixelButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-pixelated text-white bg-gray-800 border-2 border-l-white border-t-white border-r-gray-600 border-b-gray-600 hover:bg-gray-700 active:border-l-gray-600 active:border-t-gray-600 active:border-r-white active:border-b-white transition-colors ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const HologramButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-sans text-cyan-300 bg-transparent border border-cyan-300 shadow-[0_0_10px_0_rgba(0,255,255,0.5)] hover:text-cyan-100 hover:bg-cyan-900/30 hover:shadow-[0_0_15px_0_rgba(0,255,255,0.8)] transition-all ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const GlitchButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-4 py-2 font-mono text-white bg-black border border-red-500 overflow-hidden before:content-[''] before:absolute before:w-full before:h-[3px] before:bg-red-500/70 before:left-0 before:top-[30%] before:animate-glitch hover:text-red-300 transition-colors ${props.className || ""}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export const NeonButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-sans text-pink-500 bg-black border-2 border-pink-500 hover:text-black hover:bg-pink-500 shadow-[0_0_10px_0_rgba(236,72,153,0.7)] hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.7)] transition-all ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ThreeDButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-white bg-blue-600 border-b-8 border-blue-800 rounded-lg active:border-b-2 active:translate-y-2 transition-all ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const MinimalButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-light text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:text-gray-900 transition-all ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const GlassButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-white bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/20 transition-colors ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const NeubrutalismButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-black bg-yellow-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}; 