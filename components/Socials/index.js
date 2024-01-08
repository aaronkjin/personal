import React from "react";
import Button from "../Button";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFilePdf,
  AiFillMail,
} from "react-icons/ai";

const Socials = ({ className }) => {
  const socialsData = [
    {
      title: "LinkedIn",
      icon: <AiFillLinkedin style={{ fontSize: "24px" }} />,
      link: "https://www.linkedin.com/in/aaronkjin/",
    },
    {
      title: "GitHub",
      icon: <AiFillGithub style={{ fontSize: "24px" }} />,
      link: "https://www.github.com/aaronkjin",
    },
    // {
    //   title: "Resume",
    //   icon: <AiFillFilePdf style={{ fontSize: "24px" }} />,
    //   link: "/Aaron_Jin_Resume_App.pdf",
    // },
    {
      title: "Email",
      icon: <AiFillMail style={{ fontSize: "24px" }} />,
      link: "mailto:aaronjin@stanford.edu",
    },
  ];

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {socialsData.map((social, index) => (
        <Button
          className=""
          key={index}
          onClick={() => window.open(social.link)}
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
