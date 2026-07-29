import { useEffect, useState } from 'react';

/**
 * Types out each string in `words`, pauses, deletes, moves to next.
 * Respects prefers-reduced-motion by just cycling text instantly.
 */
export function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) {
      const timer = setInterval(() => {
        setIndex((i) => (i + 1) % words.length);
      }, 2200);
      return () => clearInterval(timer);
    }
  }, [reduced, words.length]);

  useEffect(() => {
    if (reduced) {
      setText(words[index]);
      return;
    }

    const current = words[index % words.length];
    let timeout;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 0);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words, typeSpeed, deleteSpeed, pause, reduced]);

  return text;
}
