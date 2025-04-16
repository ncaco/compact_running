import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
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
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);

  const colors = useMemo(() => [
    '#FF3366', '#36FF33', '#3366FF', '#FFFF33', '#FF33FF', 
    '#33FFFF', '#FF8000', '#8000FF', '#FF0080', '#00FF80'
  ], []);

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
    
    // 시간 차이 계산
    previousTimeRef.current = time;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    // Update and draw particles
    let isAnyParticleActive = false;
    
    particlesRef.current.forEach((particle) => {
      // Update position
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

// 물방울(blob) 효과가 있는 버튼
export const BlobButton = ({ children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-5 py-2 text-white font-bold bg-purple-600 rounded-full overflow-hidden transition-all hover:bg-purple-700 ${props.className || ""}`}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      style={{
        transform: isActive ? 'scale(0.98)' : 'scale(1)',
        transition: 'transform 0.2s ease, background-color 0.3s ease',
      }}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -inset-[100%] bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 opacity-70"
          style={{
            animation: 'blob 7s infinite',
            animationTimingFunction: isActive ? 'linear' : 'ease-in-out'
          }}
        ></div>
        <div 
          className="absolute -inset-[100%] bg-gradient-to-l from-blue-500 via-violet-600 to-indigo-500 opacity-70"
          style={{
            animation: 'blob 8s infinite',
            animationDelay: '2s',
            animationTimingFunction: isActive ? 'linear' : 'ease-in-out'
          }}
        ></div>
        <div 
          className="absolute -inset-[100%] bg-gradient-to-t from-purple-500 via-blue-600 to-violet-500 opacity-70"
          style={{
            animation: 'blob 9s infinite',
            animationDelay: '4s',
            animationTimingFunction: isActive ? 'linear' : 'ease-in-out'
          }}
        ></div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% { transform: translate(0%, 0%) scale(1); }
            33% { transform: translate(25%, 25%) scale(1.1); }
            66% { transform: translate(-25%, 10%) scale(0.9); }
            100% { transform: translate(0%, 0%) scale(1); }
          }
        `
      }} />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 스케치 스타일 버튼
export const SketchButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-5 py-2 text-gray-800 font-bold bg-white rounded-md transition-all hover:bg-gray-100 ${props.className || ""}`}
      style={{
        border: '2px solid #000',
        boxShadow: '2px 2px 0 0 #000',
        transform: 'rotate(-1deg)'
      }}
      {...props}
    >
      <span className="relative z-10" style={{ textDecoration: 'underline wavy #888' }}>{children}</span>
    </button>
  );
};

// 종이 조각 버튼
export const PaperNoteButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-5 py-2 text-gray-800 font-bold bg-yellow-100 hover:bg-yellow-200 transition-all ${props.className || ""}`}
      style={{
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transform: 'rotate(1deg)'
      }}
      {...props}
    >
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border border-red-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 미니멀 그래디언트 버튼
export const MinimalGradientButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-5 py-2 text-white font-medium rounded-full overflow-hidden transition-all ${props.className || ""}`}
      style={{
        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 15px rgba(125, 33, 182, 0.3)',
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 슬라이딩 배경 버튼 개선
export const SlidingBackgroundButton = ({ children, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button
      className={`relative px-5 py-2 font-bold ${isHovered ? 'text-white' : 'text-black'} overflow-hidden rounded-md transition-all duration-300 ${props.className || ""}`}
      style={{
        border: '1px solid #4299e1',
        background: 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      <div 
        className="absolute inset-0 bg-blue-500 transition-transform duration-300 ease-out" 
        style={{ 
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
          opacity: isActive ? 0.8 : 0.6,
          zIndex: 0 
        }}
      />
      <span className="relative z-10 transition-colors duration-300">{children}</span>
    </button>
  );
};

// 메탈릭 버튼
export const MetallicButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-5 py-2 font-bold text-gray-200 rounded-md transition-all hover:text-white ${props.className || ""}`}
      style={{
        background: 'linear-gradient(145deg, #3a3a3a, #202020)',
        boxShadow: 'inset 0px 0px 5px rgba(255, 255, 255, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.5)',
        border: '1px solid #111',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 텍스트 확대 버튼 개선
export const TextScaleButton = ({ children, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button
      className={`relative px-6 py-2 font-bold overflow-hidden transition-all duration-300 ${props.className || ""}`}
      style={{
        color: isHovered ? 'white' : '#2563eb',
        backgroundColor: isHovered ? '#2563eb' : 'transparent',
        border: '2px solid #2563eb',
        borderRadius: '0.375rem',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      <span 
        className="inline-block"
        style={{ 
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease',
          textShadow: isActive ? '0 0 2px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {children}
      </span>
    </button>
  );
};

// 인기 항목 버튼
export const HotItemButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-5 py-2 font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-md overflow-hidden transition-all ${props.className || ""}`}
      {...props}
    >
      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-yellow-400 animate-pulse"></div>
      <span className="relative z-10 flex items-center gap-1">
        <span>🔥</span> 
        <span>{children}</span>
      </span>
    </button>
  );
};

// 인터랙티브 테두리 버튼 개선
export const InteractiveBorderButton = ({ children, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button
      className={`relative px-6 py-2 font-bold text-indigo-800 bg-transparent rounded-md overflow-hidden transition-all ${props.className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false); 
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      <span 
        className="absolute inset-0 border-2 rounded-md transition-all duration-300"
        style={{
          borderColor: isActive ? '#4f46e5' : '#6366f1',
          transform: isHovered ? `translate(${isActive ? 3 : 2}px, ${isActive ? 3 : 2}px)` : 'translate(0, 0)',
          boxShadow: isActive ? '0 0 5px rgba(99, 102, 241, 0.5)' : 'none'
        }}
      ></span>
      <span 
        className="absolute inset-0 border-2 rounded-md transition-all duration-300"
        style={{
          borderColor: isActive ? '#7c3aed' : '#8b5cf6',
          transform: isHovered ? `translate(${isActive ? -3 : -2}px, ${isActive ? -3 : -2}px)` : 'translate(0, 0)',
          boxShadow: isActive ? '0 0 5px rgba(139, 92, 246, 0.5)' : 'none'
        }}
      ></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 펄스 물결 버튼 개선
export const PulseRippleButton = ({ children, ...props }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button
      className={`relative px-5 py-2 text-white font-bold bg-green-600 rounded-md overflow-hidden ${props.className || ""}`}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      style={{
        transform: isActive ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform 0.2s ease, background-color 0.3s ease',
        backgroundColor: isActive ? '#15803d' : '#16a34a'
      }}
      {...props}
    >
      <div className="absolute inset-0 rounded-md pointer-events-none">
        <div className={`absolute inset-0 bg-white rounded-md animate-ping-slow opacity-15 ${isActive ? 'scale-90' : ''}`}></div>
        <div className={`absolute inset-0 bg-white rounded-md animate-ping-slow animation-delay-700 opacity-15 ${isActive ? 'scale-90' : ''}`}></div>
      </div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 키네틱 에너지 버튼 개선
export const KineticButton = ({ children, ...props }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    
    // 이전 타이머 정리
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    setIsActive(true);
    timeoutRef.current = window.setTimeout(() => setIsActive(false), 600);
  };
  
  useEffect(() => {
    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <button
      className={`relative px-5 py-2 text-white font-bold bg-blue-600 rounded-md overflow-hidden transition-all ${props.className || ""}`}
      style={{
        transform: isActive ? 'scale(0.97)' : 'scale(1)',
        backgroundColor: isActive ? '#1e40af' : '#2563eb',
        transition: 'transform 0.2s ease, background-color 0.3s ease'
      }}
      onClick={handleClick}
      {...props}
    >
      <div className={`absolute inset-0 flex justify-center items-center pointer-events-none`}>
        <div 
          className={`w-2 h-2 bg-blue-200 rounded-full transition-all ${isActive ? 'animate-kinetic-1' : 'opacity-0'}`}
          style={{position: 'absolute'}}
        ></div>
        <div 
          className={`w-2 h-2 bg-blue-300 rounded-full transition-all ${isActive ? 'animate-kinetic-2' : 'opacity-0'}`}
          style={{position: 'absolute'}}
        ></div>
        <div 
          className={`w-2 h-2 bg-blue-400 rounded-full transition-all ${isActive ? 'animate-kinetic-3' : 'opacity-0'}`}
          style={{position: 'absolute'}}
        ></div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes kinetic-1 {
            0% { transform: scale(0); opacity: 0.8; }
            100% { transform: scale(5); opacity: 0; }
          }
          @keyframes kinetic-2 {
            0% { transform: scale(0); opacity: 0.7; }
            80% { transform: scale(4); opacity: 0; }
            100% { transform: scale(4); opacity: 0; }
          }
          @keyframes kinetic-3 {
            0% { transform: scale(0); opacity: 0.6; }
            60% { transform: scale(3); opacity: 0; }
            100% { transform: scale(3); opacity: 0; }
          }
          .animate-kinetic-1 {
            animation: kinetic-1 0.6s ease-out forwards;
          }
          .animate-kinetic-2 {
            animation: kinetic-2 0.55s ease-out forwards;
          }
          .animate-kinetic-3 {
            animation: kinetic-3 0.5s ease-out forwards;
          }
        `
      }} />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// 네온 라이트 버튼 개선
export const NeonLightButton = ({ children, ...props }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`relative px-5 py-2 bg-black text-white font-bold border-2 rounded-md overflow-hidden transition-all ${props.className || ""}`}
      style={{
        borderColor: '#22d3ee',
        boxShadow: isHovered 
          ? isActive 
            ? '0 0 15px #22d3ee, 0 0 30px #22d3ee' 
            : '0 0 8px #22d3ee, 0 0 15px #22d3ee' 
          : 'none',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      <div 
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{
          opacity: isHovered ? 0.5 : 0.2,
          transition: 'opacity 0.3s ease'
        }}
      >
        <div 
          className="w-1/2 h-[200%] bg-cyan-400 blur-2xl"
          style={{
            animation: isHovered ? 'neon-pulse 1.5s infinite alternate' : 'none',
            transformOrigin: 'center',
            opacity: isActive ? 0.8 : 0.5
          }}
        ></div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes neon-pulse {
            0% { opacity: 0.5; transform: scale(0.95); }
            100% { opacity: 0.8; transform: scale(1.05); }
          }
          @keyframes text-flicker {
            0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
            20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.8; }
          }
        `
      }} />
      <span 
        className="relative z-10 font-mono text-cyan-400"
        style={{
          animation: isHovered ? 'text-flicker 2s linear infinite' : 'none',
          textShadow: isHovered 
            ? isActive 
              ? '0 0 5px #22d3ee, 0 0 10px #22d3ee' 
              : '0 0 3px #22d3ee, 0 0 6px #22d3ee' 
            : 'none'
        }}
      >
        {children}
      </span>
    </button>
  );
};

// 모핑 버튼 컴포넌트
export const MorphingButton = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [morphState, setMorphState] = useState<'normal' | 'circle' | 'rectangle'>('normal');
  
  return (
    <button
      className={`relative overflow-hidden transition-all duration-300 ease-in-out text-white font-medium 
        ${morphState === 'normal' ? 'px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700' : ''}
        ${morphState === 'circle' ? 'w-12 h-12 rounded-full bg-purple-500' : ''}
        ${morphState === 'rectangle' ? 'px-8 py-1 rounded-none bg-purple-700' : ''}
        ${className}`}
      onClick={() => {
        setMorphState(current => {
          if (current === 'normal') return 'circle';
          if (current === 'circle') return 'rectangle';
          return 'normal';
        });
      }}
      {...props}
    >
      {morphState === 'normal' ? children : morphState === 'circle' ? '●' : '■'}
    </button>
  );
};

// 마우스 트래킹 버튼 컴포넌트
export const MouseTrackingButton = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`relative px-6 py-2 bg-blue-600 text-white rounded-md overflow-hidden transition-colors duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <div 
          className="absolute w-24 h-24 rounded-full bg-blue-400 opacity-50 transition-transform duration-200 ease-out pointer-events-none"
          style={{
            left: coords.x - 48,
            top: coords.y - 48,
            transform: 'scale(1.2)',
          }}
        />
      )}
    </button>
  );
};

// 버블 버튼 컴포넌트
export const BubbleButton = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  const createBubble = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !bubbleRef.current) return;
    
    const button = buttonRef.current;
    const bubble = bubbleRef.current;
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    
    bubble.classList.remove('scale-0');
    bubble.classList.add('scale-100');
    
    setTimeout(() => {
      bubble.classList.remove('scale-100');
      bubble.classList.add('scale-0');
    }, 600);
  }, []);
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-6 py-2 bg-teal-600 text-white rounded-md overflow-hidden ${className}`}
      onClick={createBubble}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div 
        ref={bubbleRef}
        className="absolute rounded-full bg-teal-400 opacity-30 scale-0 transition-transform duration-600 ease-out pointer-events-none"
      />
    </button>
  );
};

// 3D 플립 버튼 컴포넌트
export const FlipButton = ({ children, ...props }: ButtonProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="relative h-10 perspective-500">
      <button
        className={`absolute inset-0 w-full h-full px-4 py-2 font-bold text-white rounded-md transition-transform duration-500 ${props.className || ""}`}
        style={{
          background: isFlipped ? '#2563eb' : '#7c3aed',
          transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
        onClick={() => setIsFlipped(false)}
        {...props}
      >
        <span>{children}</span>
      </button>
      <button
        className={`absolute inset-0 w-full h-full px-4 py-2 font-bold text-white rounded-md transition-transform duration-500 ${props.className || ""}`}
        style={{
          background: '#2563eb',
          transform: isFlipped ? 'rotateX(0)' : 'rotateX(-180deg)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
        onClick={() => setIsFlipped(true)}
      >
        <span style={{ transform: 'rotateX(180deg)', display: 'inline-block' }}>클릭됨!</span>
      </button>
    </div>
  );
};

// 3D 카드 효과 버튼
export const CardButton = ({ children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  return (
    <button
      ref={buttonRef}
      className={`relative px-6 py-3 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ${props.className || ""}`}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div 
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30"
        style={{
          transform: 'translateZ(-10px)',
          filter: 'blur(4px)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </button>
  );
};

// 3D 입체 버튼 컴포넌트
export const CubeButton = ({ children, ...props }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <div className="relative" style={{ height: '40px', width: '120px' }}>
      <button
        className={`absolute top-0 left-0 w-full h-full px-4 py-2 font-bold text-white bg-emerald-600 rounded-md transition-all ${props.className || ""}`}
        style={{
          transform: isPressed ? 'translateY(4px)' : 'translateY(0)',
          transitionDuration: '0.1s',
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        {...props}
      >
        {children}
      </button>
      {/* 왼쪽 면 */}
      <div 
        className="absolute left-0 h-full w-2 bg-emerald-800 rounded-l-md"
        style={{
          transformOrigin: 'left center',
          transform: 'translateX(-100%) skewY(45deg)',
          height: isPressed ? '36px' : '40px',
          top: isPressed ? '4px' : '0',
          transition: 'all 0.1s',
        }}
      />
      {/* 아래쪽 면 */}
      <div 
        className="absolute bottom-0 w-full h-2 bg-emerald-800 rounded-b-md"
        style={{
          transformOrigin: 'bottom center',
          transform: 'translateY(100%) skewX(45deg)',
          height: isPressed ? '0' : '4px',
          transition: 'all 0.1s',
        }}
      />
      {/* 오른쪽 면 */}
      <div 
        className="absolute right-0 h-full w-2 bg-emerald-700 rounded-r-md"
        style={{
          transformOrigin: 'right center',
          transform: 'translateX(100%) skewY(-45deg)',
          height: isPressed ? '36px' : '40px',
          top: isPressed ? '4px' : '0',
          transition: 'all 0.1s',
        }}
      />
    </div>
  );
};

// 3D 레이어 버튼
export const LayeredButton = ({ children, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <div 
      className="relative" 
      style={{ 
        height: '40px', 
        transformStyle: 'preserve-3d', 
        perspective: '1000px' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <button
        className={`relative w-full h-full px-5 py-2 bg-indigo-600 font-bold text-white rounded-md transition-all ${props.className || ""}`}
        style={{
          transform: isPressed 
            ? 'translateZ(0)' 
            : isHovered 
              ? 'translateZ(10px)' 
              : 'translateZ(0)',
          transition: 'transform 0.2s ease',
        }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
      
      {/* 그림자 레이어 */}
      <div 
        className="absolute inset-0 rounded-md bg-black/20"
        style={{
          transform: `translateZ(-10px) ${isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          transition: 'all 0.2s ease',
          filter: `blur(${isPressed ? 2 : 4}px)`,
        }}
      />
      
      {/* 첫 번째 레이어 */}
      <div 
        className="absolute inset-0 rounded-md bg-indigo-700"
        style={{
          transform: `translateZ(-5px) ${isPressed ? 'scale(0.99)' : isHovered ? 'scale(1.03)' : 'scale(1)'}`,
          transition: 'all 0.2s ease',
        }}
      />
      
      {/* 두 번째 레이어 */}
      <div 
        className="absolute inset-0 rounded-md bg-indigo-800"
        style={{
          transform: `translateZ(-10px) ${isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          transition: 'all 0.2s ease',
        }}
      />
    </div>
  );
};

// 3D 네온 프레임 버튼
export const NeonFrameButton = ({ children, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`relative px-6 py-2 bg-slate-900 text-cyan-400 font-bold rounded-md transition-all ${props.className || ""}`}
      style={{
        boxShadow: isHovered 
          ? '0 0 15px rgba(34, 211, 238, 0.7), 0 0 30px rgba(34, 211, 238, 0.4)'
          : '0 0 5px rgba(34, 211, 238, 0.3)',
        transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)',
        transition: 'all 0.3s ease',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* 앞쪽 네온 프레임 */}
      <div 
        className="absolute inset-0 border-2 border-cyan-400 rounded-md"
        style={{
          transform: isHovered ? 'translateZ(5px)' : 'translateZ(0)',
          boxShadow: isHovered ? '0 0 10px rgba(34, 211, 238, 0.7) inset' : 'none',
          transition: 'all 0.3s ease',
        }}
      />
      
      {/* 뒤쪽 네온 프레임 */}
      <div 
        className="absolute inset-0 border-2 border-cyan-600 rounded-md"
        style={{
          transform: isHovered ? 'translateZ(-5px)' : 'translateZ(-3px)',
          opacity: isHovered ? 0.7 : 0.3,
          transition: 'all 0.3s ease',
        }}
      />
    </button>
  );
};

// 3D 슬라이딩 레이어 버튼
export const SlidingLayerButton = ({ children, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`relative px-6 py-2 bg-white font-bold text-gray-800 rounded-md overflow-hidden transition-all ${props.className || ""}`}
      style={{
        boxShadow: isHovered 
          ? '0 10px 20px rgba(0, 0, 0, 0.15)'
          : '0 4px 6px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span 
        className="relative z-10"
        style={{
          textShadow: isHovered ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
          color: isHovered ? 'white' : 'inherit',
          transition: 'all 0.3s ease',
        }}
      >{children}</span>
      
      {/* 상단 레이어 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md"
        style={{
          transformOrigin: 'bottom',
          transform: isHovered ? 'rotateX(0)' : 'rotateX(90deg)',
          transition: 'transform 0.4s ease',
          zIndex: 5,
        }}
      />
      
      {/* 하단 레이어 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md"
        style={{
          transformOrigin: 'top',
          transform: isHovered ? 'rotateX(0)' : 'rotateX(-90deg)',
          transition: 'transform 0.4s ease',
          transitionDelay: '0.05s',
          zIndex: 4,
        }}
      />
    </button>
  );
};

export const BouncySquishButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-y-2 active:translate-y-1 shadow-lg hover:shadow-xl active:shadow-md before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity"
    >
      {children}
    </button>
  );
};

export const JellyPushButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-110 active:scale-90 hover:-rotate-2 active:rotate-2 shadow-lg hover:shadow-xl active:shadow-md before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity"
    >
      {children}
    </button>
  );
};

export const PopButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl transform transition-all duration-200 hover:scale-125 active:scale-75 shadow-lg hover:shadow-2xl active:shadow-inner"
    >
      {children}
    </button>
  );
};

export const SpringButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl transform transition-all duration-300 hover:-translate-y-4 active:translate-y-2 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl active:shadow-md"
    >
      {children}
    </button>
  );
}; 