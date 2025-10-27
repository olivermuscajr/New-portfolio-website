import { useState, useEffect } from "react";

export default function Typewriter() {
  const texts = [
    "an aspiring frontend developer",
    "an adaptive learner",
    "a problem solver",
    "a detail-oriented developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [speed, setSpeed] = useState(120); // typing speed

  // Type & delete logic
  useEffect(() => {
    if (index === texts.length) return;

    if (
      subIndex === texts[index].length + 1 &&
      !deleting
    ) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
      I'm{" "}
      <span className="text-blue-500">
        {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </span>
    </span>
  );
}
