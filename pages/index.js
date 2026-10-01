import React from "react";
import Head from "next/head";

import { ExternalLinkIcon } from "../components/ExternalLinkIcon";
import FadeIn from "../components/FadeIn";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import TextScramble from "../components/TextScramble";

const INTRO_COPY = {
  education: "I'm a Stanford BS/MS CS grad.",
  currentRole:
    "Currently, I'm working on data pipelines, infra, and evals for post-training LLMs at ",
  previousPlatform:
    "Previously, I built a distributed benchmarking platform to orchestrate evals at LinkedIn.",
  previousApple:
    "I also integrated Apple Intelligence into Safari Suggestions and built predictive battery performance models at Apple.",
};

const AFTER_QUERY_URL = "https://www.afterquery.com";

const INTRO_WORD_DELAY_MS = 28;
const INTRO_START_DELAY_MS = 100;
const INTRO_WORD_FADE_DURATION_MS = 240;
const INTRO_WORD_OFFSET = "0.18rem";
const INTRO_WORD_MOBILE_OFFSET = "0.12rem";
const INTRO_WORD_SCRAMBLE_DURATION_MS = 540;

const DEFAULT_SCRAMBLE_DURATION_MS = 450;
const NAME_REVEAL_DURATION_MS = 900;
const NAME_MOBILE_REVEAL_DURATION_MS = 420;
const PROJECTS_FADE_DELAY_MS = 200;

const TITLE_SCRAMBLE_PROPS = {
  revealDuration: DEFAULT_SCRAMBLE_DURATION_MS,
  rescrambleOnHover: true,
  rescrambleOnTouch: true,
};

const DESCRIPTION_SCRAMBLE_PROPS = {
  revealDuration: DEFAULT_SCRAMBLE_DURATION_MS,
  scrambleOnWordHover: true,
  rescrambleOnTouch: true,
};

const INTRO_WORD_SCRAMBLE_PROPS = {
  revealDuration: INTRO_WORD_SCRAMBLE_DURATION_MS,
  scrambleOnWordHover: true,
  scrambleOnWordTouch: true,
  scrambleOnWordTouchMove: true,
};

const PROJECTS = [
  {
    name: "Ivey",
    href: "https://github.com/aaronkjin/ivey",
    description: "An RL poker engine",
    delay: 250,
  },
  {
    name: "GPT2",
    href: "https://github.com/aaronkjin/gpt2",
    description: "A decoder-only, autoregressive transformer",
    delay: 300,
  },
  {
    name: "PolymarketFM",
    href: "https://github.com/aaronkjin/polymarketfm",
    description: "A foundation model for prediction market forecasting",
    delay: 350,
  },
  {
    name: "PocketNeRF",
    href: "https://github.com/aaronkjin/pocketnerf",
    description: "A phone-to-3D indoor reconstruction pipeline",
    delay: 400,
  },
  {
    name: "Tungsten",
    href: "https://github.com/aaronkjin/tungsten",
    description: "A compiler built from scratch with no libraries",
    delay: 450,
  },
  {
    name: "Flow",
    href: "https://github.com/aaronkjin/flow",
    description: "A vibe-automation platform for knowledge work",
    delay: 500,
  },
  {
    name: "Roam",
    href: "https://github.com/aaronkjin/roam",
    description: "An AI platform that turns your inspos into curated trips",
    delay: 550,
  },
  {
    name: "Slop",
    href: "https://github.com/aaronkjin/slop",
    description: "An AI video generator for viral TikToks",
    delay: 600,
  },
  {
    name: "Jaike",
    href: "https://github.com/aaronkjin/jaike",
    description: "A lecture-to-brainrot web app",
    delay: 650,
  },
  {
    name: "Jonin",
    href: "https://github.com/aaronkjin/jonin",
    description: "A pixel ninja platformer game",
    delay: 750,
  },
];

const splitIntroWords = (text) => text.trim().split(/\s+/).filter(Boolean);
const getIntroWordDelay = (startDelay, wordIndex) =>
  startDelay + wordIndex * INTRO_WORD_DELAY_MS;

const buildIntroDelays = () => {
  const education = INTRO_START_DELAY_MS;
  const currentRole =
    education + splitIntroWords(INTRO_COPY.education).length * INTRO_WORD_DELAY_MS;
  const afterQuery =
    currentRole +
    splitIntroWords(INTRO_COPY.currentRole).length * INTRO_WORD_DELAY_MS;
  const afterQueryPeriod = afterQuery + INTRO_WORD_DELAY_MS;
  const previousPlatform = afterQueryPeriod;
  const previousApple =
    previousPlatform +
    splitIntroWords(INTRO_COPY.previousPlatform).length * INTRO_WORD_DELAY_MS;

  return {
    education,
    currentRole,
    afterQuery,
    afterQueryPeriod,
    previousPlatform,
    previousApple,
  };
};

const INTRO_DELAYS = buildIntroDelays();

const IntroWords = ({ text, startDelay }) => (
  <>
    {splitIntroWords(text).map((word, index, words) => (
      <React.Fragment key={`${startDelay}-${word}-${index}`}>
        <FadeIn
          as="span"
          delay={getIntroWordDelay(startDelay, index)}
          duration={INTRO_WORD_FADE_DURATION_MS}
          offset={INTRO_WORD_OFFSET}
          mobileOffset={INTRO_WORD_MOBILE_OFFSET}
          className="inline-block"
        >
          <TextScramble {...INTRO_WORD_SCRAMBLE_PROPS}>{word}</TextScramble>
        </FadeIn>
        {index < words.length - 1 ? " " : ""}
      </React.Fragment>
    ))}
  </>
);

const ProjectItem = ({ project }) => (
  <FadeIn delay={project.delay}>
    <div>
      <div className="flex items-center gap-2">
        <h3 className="font-baskerville font-bold">
          <TextScramble {...TITLE_SCRAMBLE_PROPS}>{project.name}</TextScramble>
        </h3>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
        >
          GitHub <ExternalLinkIcon />
        </a>
      </div>
      <p className="text-sm tablet:text-base text-gray-500">
        <TextScramble {...DESCRIPTION_SCRAMBLE_PROPS}>
          {project.description}
        </TextScramble>
      </p>
    </div>
  </FadeIn>
);

const IntroSection = () => (
  <div className="w-full mx-auto px-0 tablet:px-8 tablet:max-w-6xl">
    <div className="mt-24 p-2">
      <FadeIn delay={50}>
        <h1 className="font-baskerville font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 w-full">
          <TextScramble
            delay={50}
            revealDuration={NAME_REVEAL_DURATION_MS}
            mobileRevealDuration={NAME_MOBILE_REVEAL_DURATION_MS}
            scrambleOnMount
            rescrambleOnHover
            rescrambleOnTouch
            allowRandomScramble={false}
          >
            Aaron Jin
          </TextScramble>
        </h1>
      </FadeIn>

      <div className="p-1 tablet:p-2 w-full">
        <p className="text-sm tablet:text-base text-gray-500">
          <IntroWords
            text={INTRO_COPY.education}
            startDelay={INTRO_DELAYS.education}
          />{" "}
          <IntroWords
            text={INTRO_COPY.currentRole}
            startDelay={INTRO_DELAYS.currentRole}
          />{" "}
          <FadeIn
            as="span"
            delay={INTRO_DELAYS.afterQuery}
            duration={INTRO_WORD_FADE_DURATION_MS}
            offset={INTRO_WORD_OFFSET}
            mobileOffset={INTRO_WORD_MOBILE_OFFSET}
            className="inline-block"
          >
            <a
              href={AFTER_QUERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 underline-offset-2 transition-colors duration-200 hover:text-[#bea0dc] hover:decoration-[#bea0dc]"
            >
              AfterQuery
            </a>
          </FadeIn>
          <FadeIn
            as="span"
            delay={INTRO_DELAYS.afterQueryPeriod}
            duration={INTRO_WORD_FADE_DURATION_MS}
            offset={INTRO_WORD_OFFSET}
            mobileOffset={INTRO_WORD_MOBILE_OFFSET}
            className="inline-block"
          >
            .
          </FadeIn>{" "}
          <span className="hidden tablet:inline">
            <IntroWords
              text={INTRO_COPY.previousPlatform}
              startDelay={INTRO_DELAYS.previousPlatform}
            />{" "}
            <IntroWords
              text={INTRO_COPY.previousApple}
              startDelay={INTRO_DELAYS.previousApple}
            />
          </span>
        </p>
      </div>

      <FadeIn delay={500}>
        <div className="mt-5">
          <Socials />
        </div>
      </FadeIn>
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="mt-8 mb-16 w-full mx-auto tablet:px-8 tablet:max-w-6xl">
    <FadeIn delay={PROJECTS_FADE_DELAY_MS}>
      <div>
        <div className="w-full p-2">
          <h1 className="font-baskerville font-bold text-xs tablet:text-sm">
            <TextScramble {...TITLE_SCRAMBLE_PROPS}>Projects</TextScramble>
          </h1>
          <div className="flex-grow border-b border-black mt-2"></div>
        </div>

        <div className="p-2 grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:grid-rows-5 tablet:grid-flow-col tablet:gap-x-8 tablet:gap-y-4">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </FadeIn>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <IntroSection />
      <ProjectsSection />
    </Layout>
  );
}
