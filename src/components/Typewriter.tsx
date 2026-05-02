import { useEffect, useState } from "react";

export const Typewriter = ({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      const next = deleting
        ? word.substring(0, text.length - 1)
        : word.substring(0, text.length + 1);
      setText(next);
      if (!deleting && next === word) {
        setTimeout(() => setDeleting(true), 1600);
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-primary">|</span>
    </span>
  );
};
