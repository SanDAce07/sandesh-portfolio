import { useState, useEffect } from 'react';

export function useTypewriter(phrases: string[], typeDelay = 80, eraseDelay = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (phrases.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0]);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const currentPhrase = phrases[phraseIndex];

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typeDelay);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, eraseDelay);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, phraseIndex, phrases, typeDelay, eraseDelay, pauseTime]);

  return text;
}
