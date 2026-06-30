import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      const el = ref.current;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
