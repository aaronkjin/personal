import React from "react";
import { ArrowUpRight } from "lucide-react";

const Socials = ({ className }) => {
  const socialsData = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/aaronkjin/",
    },
    {
      title: "GitHub",
      link: "https://www.github.com/aaronkjin",
    },
    {
      title: "Email",
      link: "mailto:aaronjin@stanford.edu",
    },
  ];

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap gap-4`}>
      {socialsData.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5 font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-black transition-colors duration-200"
        >
          {social.title}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
