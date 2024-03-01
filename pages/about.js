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
          <div className="w-full tablet:w-2/3">
            <p className="text-sm tablet:text-base">
              &bull; Developing and enhancing Safari&apos;s search algorithm and
              UI, utilizing Objective-C, C++, and Swift/SwiftUI components to
              significantly improve search efficiency, accuracy, and UX.
            </p>
          </div>
        </div>

        {/* Apple Battery */}
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
              Spring 2024
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3">
            <p className="text-sm tablet:text-base">
              &bull; Designing and building key Battery Systems applications,
              enhancing battery qualification processes across all Apple
              products by using React, JavaScript, PHP, Django, and integrating
              with MySQL databases to reinforce data integrity, scalability, and
              maintainability.
            </p>
          </div>
        </div>

        {/* NoRamp */}
        <div className="flex flex-col tablet:flex-row">
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
              Sep 2023 &mdash; Present
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full tablet:w-2/3">
            <p className="text-sm tablet:text-base">
              &bull; Designed and developed{" "}
              <a
                href="https://www.noramp.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                NoRamp
              </a>
              &apos;s new, rebranded landing page with React, TypeScript, and
              Tailwind, resulting in 380% more website traffic.
            </p>
            <p className="text-sm tablet:text-base mt-3">
              &bull; Built Prisim, a unified mobile app and social wallet
              marketplace for NFT buyers and sellers, using React Native,
              TypeScript, Expo, Next, and Nest, to enable an instant, 1-click
              checkout solution bridging traditional online shopping with
              digital asset transactions.
            </p>
            <p className="text-sm tablet:text-base mt-3">
              &bull; Spearheaded engineering initiatives within various teams,
              such as optimizing payment processing and enhancing security
              measures.
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
          <div className="w-full tablet:w-2/3">
            <p className="text-sm tablet:text-base">
              &bull; Launched Wagyu.ai (now acquired), a pre-seed generative AI
              SaaS start-up, directly contributing to its 13k+ downloads, 6k+
              MAUs, and 550k+ session screens.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              &bull; Developed a robust, end-to-end mobile app with distinct,
              humanized AI personalities using React Native, JavaScript, Redux,
              Express, Firebase, Heroku, and OpenAI API integration, resulting
              in an intuitive, seamless user experience and positive feedback
              from users.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              &bull; Utilized R, Excel, and Google Analytics to construct
              comprehensive financial models, facilitating cash flow analysis
              and leading cross-functional teams in developing growth-hack
              strategies, scaling measures, and organic marketing initiatives
              for new user acquisition.
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
          <div className="w-full tablet:w-2/3">
            <p className="text-sm tablet:text-base">
              &bull; Engineered an innovative audit-selecting program using
              Python by leveraging data analysis techniques to optimize auditor
              selection for pharmaceutical suppliers, resulting in the
              significant streamlining of internal processes and the reduction
              of operational costs by 12%.
            </p>

            <p className="text-sm tablet:text-base mt-3">
              &bull; Streamlined AWS-driven data migration projects,
              transitioning 2k+ essential documents from outdated, separate
              systems to a unified, cloud-based system; reduced more than 50%
              company-wide paper use and improved overall workflow/efficiency by
              16%.
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
                the Operations and Development Officer at{" "}
                <a
                  href="http://stanfordstudentsbiodesign.squarespace.com/#intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Stanford Students in Biodesign
                </a>
              </span>
              <span className={theme === "dark" ? "opacity-50" : ""}>
                , where I&apos;ve organized and facilitated{" "}
                <a
                  href="https://shift.stanford.edu/healthai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  CS 522
                </a>
                : AI in Healthcare.
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
                , where I&apos;ve served clients like Microsoft and Typed for
                M&amp;A and GTM strategy.
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
                  Sigma Chi
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
              CS 111
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Operating Systems
              </span>
            </div>

            <div>
              CS 224G
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : LLM Applications
              </span>
            </div>

            <div>
              CS 270
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Biomedical Systems
              </span>
            </div>

            <div>
              STATS 211
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Statistical Meta-Research
              </span>
            </div>

            <div>
              COMM 172
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Media Psychology
              </span>
            </div>
          </div>

          <div className="font-bold text-sm tablet:text-base mt-3 tablet:mt-5">
            Have Previously Taken:
          </div>

          <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
            <div>
              CS 221
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Artificial Intelligence
              </span>
            </div>

            <div>
              CS 124
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Natural Language Processing
              </span>
            </div>

            <div>
              CS 193X
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Web Programming Fundamentals
              </span>
            </div>

            <div>
              CS 148
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Computer Graphics and Imaging
              </span>
            </div>

            <div>
              CS 107
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Computer Systems & Organization
              </span>
            </div>

            <div>
              CS 106B
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Data Structures & Algorithms
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
                : Probability Theory
              </span>
            </div>

            <div>
              CS 103
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Discrete Mathematics Theory
              </span>
            </div>

            <div>
              CS 279
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Computational Biology
              </span>
            </div>

            <div>
              MATH 51
              <span className={theme === "dark" ? "opacity-50" : ""}>
                : Linear Algebra & Multivariable Calculus
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
      <div className="mt-10 laptop:mt-15">
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
              More recently, I&apos;ve been having fun building personal web and
              mobile applications. I&apos;m always intrigued by the latest
              breakthroughs in life sciences and biotech. To keep things
              balanced and energized, I make it a point to hit the gym every
              day.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
}
