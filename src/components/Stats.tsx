import React, { useState, useEffect, useRef } from 'react';
import { METRICS } from '../data/portfolioData';
import { Users, Film, Eye, Award } from 'lucide-react';

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [
    <Film className="w-6 h-6 text-blue-400" />,
    <Eye className="w-6 h-6 text-blue-400" />,
    <Users className="w-6 h-6 text-blue-400" />,
    <Award className="w-6 h-6 text-blue-400" />
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-[#0A0A0A] border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {METRICS.map((metric, index) => (
            <div
              key={metric.id}
              className="relative p-6 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:bg-blue-600/10 transition-colors">
                  {icons[index % icons.length]}
                </div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                  Métrica #{index + 1}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors">
                {isVisible ? (
                  <Counter target={metric.value} suffix={metric.suffix} />
                ) : (
                  `0${metric.suffix || ''}`
                )}
              </div>

              <div className="mt-1 text-sm font-semibold text-neutral-200">
                {metric.label}
              </div>

              <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Helper Component
const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
