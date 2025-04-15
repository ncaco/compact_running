import React, { useEffect, useRef, useState, useCallback } from 'react';
import lottie from 'lottie-web';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  alpha: number;
  rotation: number;
  rotationSpeed: number;
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

export const LottieSparkleButton = ({ children, ...props }: ButtonProps) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (!animationContainer.current) return;
    
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'https://assets7.lottiefiles.com/packages/lf20_obhph3sh.json' // 별 반짝임 효과
    });
    
    const button = buttonRef.current;
    
    const playAnimation = () => {
      anim.goToAndPlay(0);
    };
    
    if (button) {
      button.addEventListener('mouseenter', playAnimation);
    }
    
    return () => {
      anim.destroy();
      if (button) {
        button.removeEventListener('mouseenter', playAnimation);
      }
    };
  }, []);
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-5 py-2 text-white font-bold bg-purple-700 rounded-lg overflow-hidden transition-all hover:bg-purple-800 ${props.className || ""}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div ref={animationContainer} className="absolute inset-0 z-0 pointer-events-none"></div>
    </button>
  );
};

export const LottieConfettiButton = ({ children, ...props }: ButtonProps) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (!animationContainer.current) return;
    
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'https://assets9.lottiefiles.com/packages/lf20_rovf9gzu.json' // 컨페티 효과
    });
    
    const button = buttonRef.current;
    
    const playAnimation = () => {
      anim.goToAndPlay(0);
    };
    
    if (button) {
      button.addEventListener('click', playAnimation);
    }
    
    return () => {
      anim.destroy();
      if (button) {
        button.removeEventListener('click', playAnimation);
      }
    };
  }, []);
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-5 py-2 text-white font-bold bg-pink-600 rounded-lg overflow-hidden transition-all hover:bg-pink-700 ${props.className || ""}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div ref={animationContainer} className="absolute inset-0 z-0 pointer-events-none"></div>
    </button>
  );
};

export const LottiePulseButton = ({ children, ...props }: ButtonProps) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animationContainer.current) return;
    
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_puciaact.json' // 펄스 효과
    });
    
    return () => {
      anim.destroy();
    };
  }, []);
  
  return (
    <button
      className={`relative px-5 py-2 text-white font-bold bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-700 ${props.className || ""}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div ref={animationContainer} className="absolute inset-0 z-0 pointer-events-none opacity-70"></div>
    </button>
  );
};

export const LottieHeartButton = ({ children, ...props }: ButtonProps) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (!animationContainer.current) return;
    
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'https://assets5.lottiefiles.com/packages/lf20_se3w0uaz.json' // 하트 효과
    });
    
    const button = buttonRef.current;
    
    const playAnimation = () => {
      anim.goToAndPlay(0);
    };
    
    if (button) {
      button.addEventListener('click', playAnimation);
    }
    
    return () => {
      anim.destroy();
      if (button) {
        button.removeEventListener('click', playAnimation);
      }
    };
  }, []);
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-5 py-2 text-white font-bold bg-red-500 rounded-lg overflow-hidden transition-all hover:bg-red-600 ${props.className || ""}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div ref={animationContainer} className="absolute inset-0 z-0 pointer-events-none"></div>
    </button>
  );
};

export const LottieLoadingButton = ({ children, isLoading = false, ...props }: ButtonProps & { isLoading?: boolean }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animationContainer.current || !isLoading) return;
    
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json' // 로딩 애니메이션
    });
    
    return () => {
      anim.destroy();
    };
  }, [isLoading]);
  
  return (
    <button
      className={`relative px-5 py-2 text-white font-bold bg-gray-700 rounded-lg overflow-hidden transition-all hover:bg-gray-800 ${props.className || ""}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="opacity-0">{children}</span>
          <div ref={animationContainer} className="absolute inset-0 flex items-center justify-center"></div>
        </>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export const LottieCelebrationButton = ({ children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const animationContainer = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animationContainer.current || !showPopup) return;
    
    let anim: ReturnType<typeof lottie.loadAnimation> | undefined;
    try {
      anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets2.lottiefiles.com/packages/lf20_jR229r.json' // 더 안정적인 축하 애니메이션 URL로 변경
      });
      
      // 로딩 실패 시 대체 애니메이션 로드
      anim.addEventListener('data_failed', () => {
        console.warn("첫 번째 애니메이션 로드 실패, 대체 애니메이션 사용");
        if (anim) anim.destroy();
        
        // 인라인 애니메이션 데이터 사용
        anim = lottie.loadAnimation({
          container: animationContainer.current!,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: {
            "v": "5.5.7",
            "fr": 30,
            "ip": 0,
            "op": 60,
            "w": 300,
            "h": 300,
            "nm": "Celebration",
            "ddd": 0,
            "assets": [],
            "layers": [
              {
                "ddd": 0,
                "ind": 1,
                "ty": 4,
                "nm": "Confetti",
                "sr": 1,
                "ks": {
                  "o": {"a": 0, "k": 100, "ix": 11},
                  "r": {"a": 0, "k": 0, "ix": 10},
                  "p": {"a": 0, "k": [150, 150, 0], "ix": 2},
                  "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
                  "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
                },
                "ao": 0,
                "shapes": [
                  {
                    "ty": "gr",
                    "it": [
                      {
                        "ty": "rc",
                        "d": 1,
                        "s": {"a": 0, "k": [20, 20], "ix": 2},
                        "p": {"a": 1, "k": [
                          {"t": 0, "s": [0, -100], "e": [80, 50], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                          {"t": 30, "s": [80, 50], "e": [0, 200], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                          {"t": 60}
                        ]},
                        "r": {"a": 1, "k": [
                          {"t": 0, "s": [0], "e": [180], "i": {"x": 0.5, "y": 0.5}, "o": {"x": 0.5, "y": 0.5}},
                          {"t": 60}
                        ]}
                      },
                      {
                        "ty": "fl",
                        "c": {"a": 0, "k": [1, 0, 0, 1], "ix": 4},
                        "o": {"a": 0, "k": 100, "ix": 5},
                        "r": 1
                      }
                    ],
                    "nm": "Red Confetti",
                    "cix": 2
                  },
                  {
                    "ty": "gr",
                    "it": [
                      {
                        "ty": "rc",
                        "d": 1,
                        "s": {"a": 0, "k": [15, 15], "ix": 2},
                        "p": {"a": 1, "k": [
                          {"t": 5, "s": [-50, -100], "e": [-20, 100], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                          {"t": 35, "s": [-20, 100], "e": [-90, 180], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                          {"t": 60}
                        ]},
                        "r": {"a": 1, "k": [
                          {"t": 5, "s": [0], "e": [180], "i": {"x": 0.5, "y": 0.5}, "o": {"x": 0.5, "y": 0.5}},
                          {"t": 60}
                        ]}
                      },
                      {
                        "ty": "fl",
                        "c": {"a": 0, "k": [0, 0, 1, 1], "ix": 4},
                        "o": {"a": 0, "k": 100, "ix": 5},
                        "r": 1
                      }
                    ],
                    "nm": "Blue Confetti",
                    "cix": 2
                  },
                  {
                    "ty": "gr",
                    "it": [
                      {
                        "ty": "rc",
                        "d": 1,
                        "s": {"a": 0, "k": [18, 18], "ix": 2},
                        "p": {"a": 1, "k": [
                          {"t": 10, "s": [50, -100], "e": [100, 80], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                          {"t": 40, "s": [100, 80], "e": [130, 200], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                          {"t": 60}
                        ]},
                        "r": {"a": 1, "k": [
                          {"t": 10, "s": [0], "e": [180], "i": {"x": 0.5, "y": 0.5}, "o": {"x": 0.5, "y": 0.5}},
                          {"t": 60}
                        ]}
                      },
                      {
                        "ty": "fl",
                        "c": {"a": 0, "k": [1, 1, 0, 1], "ix": 4},
                        "o": {"a": 0, "k": 100, "ix": 5},
                        "r": 1
                      }
                    ],
                    "nm": "Yellow Confetti",
                    "cix": 2
                  }
                ],
                "ip": 0,
                "op": 60,
                "st": 0
              },
              {
                "ddd": 0,
                "ind": 2,
                "ty": 4,
                "nm": "Celebration Text",
                "sr": 1,
                "ks": {
                  "o": {"a": 0, "k": 100, "ix": 11},
                  "r": {"a": 0, "k": 0, "ix": 10},
                  "p": {"a": 1, "k": [
                    {"t": 0, "s": [150, 180, 0], "e": [150, 150, 0], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                    {"t": 30}
                  ], "ix": 2},
                  "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
                  "s": {"a": 1, "k": [
                    {"t": 0, "s": [0, 0, 100], "e": [120, 120, 100], "i": {"x": 0.4, "y": 1.5}, "o": {"x": 0.6, "y": 0}},
                    {"t": 30, "s": [120, 120, 100], "e": [100, 100, 100], "i": {"x": 0.2, "y": 1}, "o": {"x": 0.8, "y": 0}},
                    {"t": 45}
                  ], "ix": 6}
                },
                "ao": 0,
                "shapes": [
                  {
                    "ty": "gr",
                    "it": [
                      {
                        "ty": "rc",
                        "d": 1,
                        "s": {"a": 0, "k": [140, 50], "ix": 2},
                        "p": {"a": 0, "k": [0, 0], "ix": 2},
                        "r": {"a": 0, "k": 8, "ix": 3}
                      },
                      {
                        "ty": "fl",
                        "c": {"a": 0, "k": [0.8, 0.2, 0.8, 1], "ix": 4},
                        "o": {"a": 0, "k": 100, "ix": 5},
                        "r": 1
                      }
                    ],
                    "nm": "Celebration Background",
                    "cix": 2
                  }
                ],
                "ip": 0,
                "op": 60,
                "st": 0
              }
            ]
          }
        });
      });
    } catch (error) {
      console.error("애니메이션 로드 오류:", error);
      // 오류 발생시 간단한 DOM 애니메이션으로 대체
      if (animationContainer.current) {
        animationContainer.current.innerHTML = `
          <div class="flex flex-wrap justify-center">
            <div class="text-6xl animate-bounce mx-2">🎉</div>
            <div class="text-6xl animate-bounce mx-2" style="animation-delay: 0.3s">🎊</div>
            <div class="text-6xl animate-bounce mx-2" style="animation-delay: 0.6s">✨</div>
          </div>
        `;
      }
    }
    
    // 팝업 중앙 정렬
    if (popupRef.current) {
      popupRef.current.style.position = 'fixed';
      popupRef.current.style.top = '50%';
      popupRef.current.style.left = '50%';
      popupRef.current.style.transform = 'translate(-50%, -50%)';
    }
    
    // 5초 후에 팝업 숨기기
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    
    return () => {
      if (anim) anim.destroy();
      clearTimeout(timer);
    };
  }, [showPopup]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    setShowPopup(true);
  };
  
  return (
    <>
      <button
        ref={buttonRef}
        className={`relative px-5 py-2 text-white font-bold bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg overflow-hidden transition-all hover:from-yellow-600 hover:to-red-600 ${props.className || ""}`}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
      {showPopup && (
        <div 
          ref={popupRef}
          className="fixed inset-0 flex items-center justify-center z-50 w-full h-full bg-black/50"
          onClick={() => setShowPopup(false)}
        >
          <div className="bg-white rounded-lg p-8 shadow-2xl w-80 max-w-lg text-center">
            <div ref={animationContainer} className="h-60 mb-4"></div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">🎉 경축 🎉</h2>
            <p className="text-lg text-gray-700">축하합니다! 멋진 성과를 이루셨네요!</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={(e) => {e.stopPropagation(); setShowPopup(false);}}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const ParticleButton = ({ children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number | undefined>(undefined);

  const colors = [
    '#FF3366', '#36FF33', '#3366FF', '#FFFF33', '#FF33FF', 
    '#33FFFF', '#FF8000', '#8000FF', '#FF0080', '#00FF80'
  ];

  const createParticles = useCallback(() => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const particles: Particle[] = [];
    
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 8 + 2;
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 6 + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({
        x: centerX,
        y: centerY,
        size,
        color,
        speedX: Math.cos(angle) * velocity,
        speedY: Math.sin(angle) * velocity,
        alpha: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    particlesRef.current = particles;
  }, [colors]);

  const animateParticles = useCallback((time: number) => {
    if (!canvasRef.current || particlesRef.current.length === 0) {
      setIsAnimating(false);
      return;
    }
    
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
    }
    
    // 시간 차이 계산 (필요한 경우 활용)
    const deltaTime = time - previousTimeRef.current;
    previousTimeRef.current = time;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    // Update and draw particles
    let isAnyParticleActive = false;
    
    particlesRef.current.forEach((particle) => {
      // Update position (deltaTime을 사용하여 일정한 속도로 움직이게 할 수 있음)
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Apply gravity
      particle.speedY += 0.1;
      
      // Apply drag
      particle.speedX *= 0.99;
      particle.speedY *= 0.99;
      
      // Fade out
      particle.alpha -= 0.01;
      
      // Rotate
      particle.rotation += particle.rotationSpeed;
      
      // Skip if completely transparent
      if (particle.alpha <= 0) return;
      
      isAnyParticleActive = true;
      
      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      
      // Draw as square for variety
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
      
      ctx.restore();
    });
    
    if (isAnyParticleActive) {
      requestRef.current = requestAnimationFrame(animateParticles);
    } else {
      setIsAnimating(false);
    }
  }, []);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    createParticles();
    
    // Cancel any existing animation
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    
    previousTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(animateParticles);
  }, [createParticles, animateParticles]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    startAnimation();
  };

  useEffect(() => {
    // Set up canvas
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    // Clean up animation on unmount
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className={`relative px-5 py-2 text-white font-bold overflow-hidden transition-all bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 ${props.className || ''}`}
        onClick={handleClick}
        style={{
          transition: 'all 0.3s ease',
          boxShadow: isAnimating ? '0 0 20px rgba(255, 105, 180, 0.8)' : 'none',
        }}
        {...props}
      >
        <span className="relative z-10 animate-pulse">{children}</span>
      </button>
      {isAnimating && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50"
          style={{ position: 'fixed', top: 0, left: 0 }}
        />
      )}
    </>
  );
};

// 물결 효과가 있는 버튼
export const WaveButton = ({ children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; alpha: number }[]>([]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 새 물결 추가
    const newRipple = { x, y, size: 0, alpha: 1 };
    setRipples(prev => [...prev, newRipple]);
    
    // 2초 후 물결 제거
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r !== newRipple));
    }, 2000);
  };
  
  useEffect(() => {
    const animateRipples = () => {
      setRipples(prev => 
        prev.map(ripple => ({
          ...ripple,
          size: ripple.size + 5, // 물결 크기 증가
          alpha: ripple.alpha - 0.02 // 투명도 감소
        }))
      );
    };
    
    // 물결이 있을 때만 애니메이션 실행
    if (ripples.length > 0) {
      const interval = setInterval(animateRipples, 20);
      return () => clearInterval(interval);
    }
  }, [ripples.length]);
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-5 py-2 text-white font-bold bg-blue-500 rounded-md overflow-hidden ${props.className || ''}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            opacity: ripple.alpha,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.05s ease-out'
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
}; 