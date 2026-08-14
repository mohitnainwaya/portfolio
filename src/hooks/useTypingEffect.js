import { useEffect, useState } from 'react';

export function useTypingEffect(words, speed = 70, pause = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const doneTyping = !deleting && displayed === current;
    const doneDeleting = deleting && displayed === '';

    const delay = doneTyping || doneDeleting ? pause : deleting ? speed / 1.6 : speed;

    const timeout = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setDisplayed((value) =>
        deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, displayed, pause, speed, wordIndex, words]);

  return displayed;
}
