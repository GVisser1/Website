import { motion } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames";
import { Badge } from "./Badge";
import { Color } from "../types/Color";

interface SkillOption {
  label: string;
  color?: Color;
  x?:
    | "left-24"
    | "left-48"
    | "left-72"
    | "left-96"
    | "right-96"
    | "right-72"
    | "right-48"
    | "right-24";
  y?: "top-24" | "top-48" | "top-64" | "bottom-64" | "bottom-48" | "bottom-24";
}

export const Skills = () => {
  const constraintsRef = useRef(null);
  // const skills = ["Python", "TypeScript", "React", "R", "C#", "HTML", "CSS", "TailwindCSS"];
  const badgeColors: Color[] = ["BLUE", "GRAY", "GREEN", "PINK", "RED", "YELLOW"];

  const skills: SkillOption[] = [
    { label: "Python", color: "BLUE", x: "left-48", y: "top-64" },
    { label: "TypeScript", color: "GRAY", x: "right-72" },
    { label: "React", color: "GRAY", x: "right-24", y: "bottom-48" },
    { label: "R", color: "GRAY", x: "right-48", y: "top-64" },
    { label: "C#", color: "GRAY", x: "left-96", y: "bottom-64" },
    { label: "HTML", color: "GRAY", x: "right-72", y: "bottom-24" },
    { label: "CSS", color: "GRAY", x: "left-24", y: "bottom-48" },
    { label: "TailwindCSS", color: "GRAY", x: "left-96", y: "bottom-24" },
  ];

  const classes = (skill: SkillOption) =>
    classNames(
      "absolute flex hover:cursor-pointer active:cursor-move",
      {
        "left-8": !skill.x,
        "top-8": !skill.y,
      },
      skill.x,
      skill.y
    );

  return (
    <section id="skills" className="p-8">
      <div
        className="relative mx-auto flex h-80 max-w-screen-lg overflow-hidden rounded-lg shadow-xl ring ring-slate-500"
        ref={constraintsRef}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            className={classes(skill)}
            drag
            dragConstraints={constraintsRef}
            dragTransition={{
              bounceStiffness: 400,
              bounceDamping: 10,
            }}
            dragElastic={0}
          >
            <Badge size="lg" theme={badgeColors[i]} className="absolute">
              {skill.label}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
