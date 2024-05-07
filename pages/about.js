import Head from "next/head";
import { useTheme } from "next-themes";

import Layout from "../components/Layout";

export default function About() {
  const { theme } = useTheme();

  return (
    <Layout footerType="normal">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <div className="mt-10 laptop:mt-20">
        <div className="mt-5">
          <h1 className="font-medium text-4xl tablet:text-5xl p-1 tablet:p-2 text-bold w-full">
            About Me
          </h1>
          <h2 className="text-sm tablet:text-base p-1 tablet:p-2 text-bold w-full">
            I love building and delivering products that are user-focused. In
            the past, I&apos;ve created user-facing products solo, with lean
            start-ups, and in big corporations. I&apos;m also passionate about
            the research between ML and human biology, dissecting large data,
            and playing the oboe.
          </h2>
        </div>
      </div>

      {/* Work */}
      <div className="mt-6 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm">@ Work</h1>
          <div
            className={`flex-grow border-b ${
              theme === "dark" ? "border-white" : "border-black"
            } mt-2`}
          ></div>
        </div>
      </div>

      <div className="grid tablet:grid-cols-1 p-2 gap-4">
        {/* Apple Safari */}
        <div className="flex flex-col tablet:flex-row">
          {/* Left Side */}
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg tablet:text-2xl">Apple</p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Incoming Software Engineer Intern
            </p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Summer 2024
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              Will refine Safari&apos;s search algorithm and UI.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              C++, Objective-C, iOS SDK, Swift/SwiftUI components.
            </p>
          </div>
        </div>

        {/* Apple Battery */}
        <div className="flex flex-col tablet:flex-row mt-3 tablet:mt-5">
          {/* Left Side */}
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg tablet:text-2xl">Apple</p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Software Engineer Intern
            </p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Mar 2024 &mdash; Present
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              Built the team&apos;s first API gateway for an internal web app
              used to test battery systems in Macs. Enhanced the web app to
              support ETL feature extraction.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              React, TypeScript, PHP, Python, MySQL, Nginx, Kong, Docker, Splunk.
            </p>
          </div>
        </div>

        {/* NoRamp */}
        <div className="flex flex-col tablet:flex-row mt-3 tablet:mt-5">
          {/* Left Side */}
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg tablet:text-2xl">NoRamp</p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Software Engineer Intern
            </p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Sep 2023 &mdash; Feb 2024
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              Developed{" "}
              <a
                href="https://www.noramp.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                NoRamp
              </a>
              &apos;s new, rebranded landing page. Built Prisim, a social wallet
              marketplace for NFT buyers and sellers.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              React/React Native, TypeScript, Tailwind, Expo, Next.js, Nest.js.
            </p>
          </div>
        </div>

        {/* Wagyu.ai */}
        <div className="flex flex-col tablet:flex-row mt-3 tablet:mt-5">
          {/* Left Side */}
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg tablet:text-2xl">Wagyu.ai</p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Software Engineer Intern
            </p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Jun 2023 &mdash; Aug 2023
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              Launched Wagyu.ai (now acquired), a generative AI SaaS start-up.
              Built a mobile app with distinct, humanized AI personalities.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              React Native, JavaScript, Redux, Express.js, Firebase, Heroku,
              OpenAI API.
            </p>
          </div>
        </div>

        {/* Samsung Biologics */}
        <div className="flex flex-col tablet:flex-row mt-3 tablet:mt-5">
          {/* Left Side */}
          <div className="w-full tablet:w-1/3">
            <p className="font-bold text-lg tablet:text-2xl">
              Samsung Biologics
            </p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Software Engineer Intern
            </p>
            <p
              className={`text-sm tablet:text-base ${
                theme === "dark" ? "opacity-50" : ""
              }`}
            >
              Jun 2022 &mdash; Aug 2022
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3 mt-1.5">
            <p className="text-sm tablet:text-base">
              Developed an audit-selecting program for pharmaceutical suppliers.
              Streamlined legacy data migration projects.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              Python, SQL, AWS DataSync.
            </p>
          </div>
        </div>
      </div>

      {/* School */}
      <div className="mt-6 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm">@ School</h1>
          <div
            className={`flex-grow border-b ${
              theme === "dark" ? "border-white" : "border-black"
            } mt-2`}
          ></div>
        </div>
      </div>

      <div className="grid tablet:grid-cols-2 mt-2 p-2 w-full">
        {/* Extracurriculars - Left Column */}
        <div className="tablet:pr-10">
          <div className="font-bold tablet:font-normal text-sm tablet:text-base">
            Outside of the classroom, I&apos;m...
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                a bioinformatics research assistant at Stanford Medicine&apos;s{" "}
                <a
                  href="https://ajglab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Gentles Lab
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve analyzed, visualized, and deconvoluted complex
                RNA datasets to effectively treat chemo-resistant cancers.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                a consultant at{" "}
                <a
                  href="https://spba.sites.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford Pre-Business Association
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve strategized M&amp;A and GTM cases for clients
                like Microsoft and Typed.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                the Social Chair of{" "}
                <a
                  href="https://stanfordksa.weebly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford KSA
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve united the Korean student community and
                showcased Korean culture to Stanford through dynamic events.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                the PR Chair of{" "}
                <a
                  href="https://www.instagram.com/stanfordsigmachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford Sigma Chi
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve spearheaded all things media and online
                presence.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                an oboist in{" "}
                <a
                  href="https://web.stanford.edu/group/sso/cgi-bin/orchestras/orchestras/stanford-symphony-orchestra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford Symphony Orchestra
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve been able to step back from academics and tap
                into what brings me the most joy.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                a member of{" "}
                <a
                  href="https://ases.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford ASES
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve been dabbling with entrepreneurship.
              </span>
            </p>
          </div>

          <div className="text-sm tablet:text-base mt-3 laptop:mt-5">
            <p>
              <span className="font-bold">
                a member of{" "}
                <a
                  href="https://www.stanfordacm.org/pokerTournament"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford Poker
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve been intellectually stimulated by both
                psychology and probability.
              </span>
            </p>
          </div>
        </div>

        {/* Coursework - Right Column */}
        <div className="tablet:pl-10">
          <div className="font-bold tablet:font-normal text-sm tablet:text-base mt-8 tablet:mt-0">
            In the classroom, I...
          </div>

          <div className="font-bold text-sm tablet:text-base mt-3 laptop:mt-5">
            Am Currently Taking:
          </div>

          <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
            <div>
              {/* CS 111 */}
              <span className={theme === "dark" ? "opacity-50" : ""}>
                A gap quarter to work at Apple.
                {/* : Operating Systems */}
              </span>
            </div>
          </div>

          <div className="font-bold text-sm tablet:text-base mt-3 tablet:mt-5">
            Have Previously Taken:
          </div>

          <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
            <div>
              CS 221
              <span className={theme === "dark" ? "opacity-50" : ""}>: AI</span>
            </div>

            <div>
              CS 224G
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : LLM Apps
              </span>
            </div>

            <div>
              CS 124
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : NLP
              </span>
            </div>

            <div>
              CS 193X
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Web Programming
              </span>
            </div>

            <div>
              CS 148
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Computer Graphics
              </span>
            </div>

            <div>
              CS 111
              <span className={theme === "dark" ? "opacity-50" : ""}>: OS</span>
            </div>

            <div>
              CS 107
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Computer Systems
              </span>
            </div>

            <div>
              CS 106B
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : DS&A
              </span>
            </div>

            <div>
              CS 161
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Advanced Algorithms
              </span>
            </div>

            <div>
              CS 109
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Probability
              </span>
            </div>

            <div>
              CS 103
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Discrete Math
              </span>
            </div>

            <div>
              CS 279
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Computational Biology
              </span>
            </div>

            <div>
              CS 270
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Biomedical Systems
              </span>
            </div>

            <div>
              MATH 51
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Linear Algebra & Multivariable Calculus
              </span>
            </div>

            <div>
              STATS 211
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Statistical Meta-Research
              </span>
            </div>

            <div>
              STATS 60
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Statistical Methods
              </span>
            </div>

            <div>
              Biology Sequence
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Genetics, Physiology, Molecular Biology, Bioengineering
              </span>
            </div>

            <div>
              Chemistry Sequence
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : General Chemistry, Organic Chemistry, Biochemistry
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Home */}
      <div className="mt-6 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm">@ Home</h1>
          <div
            className={`flex-grow border-b ${
              theme === "dark" ? "border-white" : "border-black"
            } mt-2`}
          ></div>
        </div>
      </div>

      <div className="grid tablet:grid-cols-8  p-2 w-full pb-16">
        {/* Left Column */}
        <div className="tablet:col-span-1 hidden tablet:flex tablet:items-center">
          <p className="font-bold text-sm tablet:text-base ">Hobbies</p>
        </div>

        {/* Right Column */}
        <div className="tablet:col-span-7">
          <p className="text-sm tablet:text-base">
            <p>
              Music has always been the way for me to express myself when words
              couldn&apos;t. I love playing the{" "}
              <a
                href="https://youtu.be/DAcQVU2A1uw"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                oboe
              </a>{" "}
              and performing solos at concert halls.
            </p>
            <p className="pt-2">
              More recently, I&apos;ve been having fun building web and native
              apps. I&apos;m always intrigued by the latest breakthroughs in the
              life sciences and biotech. To keep things balanced and energized,
              I make it a point to hit the gym every day.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
}
