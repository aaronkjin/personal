import React from "react";
import { ArrowUpRight } from "lucide-react";

const SOCIAL_LINKS = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aaronkjin/",
  },
  {
    title: "GitHub",
    href: "https://www.github.com/aaronkjin",
  },
  {
    title: "Email",
    href: "mailto:aaronjin@alumni.stanford.edu",
  },
];

const Socials = ({ className = "" }) => {
  const rootClassName = [
    className,
    "flex flex-wrap mob:flex-nowrap gap-4",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.title}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5 font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
        >
          {social.title}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
