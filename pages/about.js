import { useRef } from "react";
import Header from "../components/Header";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();

  /* Refs for chronological transition effect */
  const title = useRef();
  const desc = useRef();
  const work = useRef();
  const wagyu = useRef();
  const samsung = useRef();
  const typed = useRef();
  const school = useRef();
  const outside = useRef();
  const gentles = useRef();
  const ssb = useRef();
  const spba = useRef();
  const ksa = useRef();
  const sigchi = useRef();
  const sso = useRef();
  const ases = useRef();
  const inside = useRef();
  const rn = useRef();
  const rn1 = useRef();
  const rn2 = useRef();
  const rn3 = useRef();
  const rn4 = useRef();
  const past = useRef();
  const past1 = useRef();
  const past2 = useRef();
  const past3 = useRef();
  const past4 = useRef();
  const past5 = useRef();
  const past6 = useRef();
  const past7 = useRef();
  const past8 = useRef();
  const past9 = useRef();
  const past10 = useRef();
  const past11 = useRef();
  const home = useRef();
  const hobbies = useRef();
  const hdesc = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        title.current,
        desc.current,
        work.current,
        wagyu.current,
        samsung.current,
        typed.current,
        school.current,
        outside.current,
        gentles.current,
        ssb.current,
        spba.current,
        ksa.current,
        sigchi.current,
        sso.current,
        ases.current,
        inside.current,
        rn.current,
        rn1.current,
        rn2.current,
        rn3.current,
        rn4.current,
        past.current,
        past1.current,
        past2.current,
        past3.current,
        past4.current,
        past5.current,
        past6.current,
        past7.current,
        past8.current,
        past9.current,
        past10.current,
        past11.current,
        home.current,
        hobbies.current,
        hdesc.current,
      ],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="pt-2 pr-3">
        <Header />
      </div>
      {/* Use a div with the same classes for container but without margins */}
      <div className="container mx-auto mb-10 tablet:w-[768px] laptop:w-[1024px]">
        <div className="mt-10 laptop:mt-20">
          <div className="mt-5">
            <h1
              ref={title}
              className="font-medium text-4xl tablet:text-5xl p-1 tablet:p-2 text-bold w-full"
            >
              About Me
            </h1>
            <h2
              ref={desc}
              className="text-sm tablet:text-base p-1 tablet:p-2 text-bold w-full"
            >
              I love building and delivering products that are user-focused. In
              the past, I&apos;ve created user-facing products solo, with lean
              start-ups, and in big corporations. I&apos;m also passionate about
              the research between ML and human biology, strategy consulting,
              and playing the oboe.
            </h2>
          </div>
        </div>

        {/* Work */}
        <div className="mt-6 tablet:mt-10 laptop:mt-15" ref={work}>
          <div className="w-full p-2">
            <h1 className="font-bold text-xs tablet:text-sm">@ Work</h1>
            <div
              className={`flex-grow border-b ${
                theme === "dark" ? "border-white" : "border-black"
              } mt-2`}
            ></div>
          </div>
        </div>

        <div className="grid tablet:grid-cols-1 p-2 gap-4" ref={wagyu}>
          {/* Wagyu.ai */}
          <div className="flex flex-col tablet:flex-row">
            {/* Left Side */}
            <div className="w-full tablet:w-1/3">
              <p className="font-bold text-lg tablet:text-2xl">Wagyu.ai</p>
              <p
                className={`text-sm tablet:text-base ${
                  theme === "dark" ? "opacity-50" : ""
                }`}
              >
                Technical Product Manager
              </p>
              <p
                className={`text-sm tablet:text-base ${
                  theme === "dark" ? "opacity-50" : ""
                }`}
              >
                May 2023 &mdash; Present
              </p>
            </div>
            {/* Right Side */}
            <div className="w-full tablet:w-2/3">
              <p className="text-sm tablet:text-base">
                &bull; Launched{" "}
                <a
                  href="https://www.wagyu.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Wagyu.ai
                </a>
                , a pre-seed generative AI SaaS start-up, as the Founding
                Technical Product Manager (SWE + PM), directly contributing to
                its 13k+ downloads, 6k+ MAUs, and 550k+ session screens.
              </p>

              <p className="text-sm tablet:text-base mt-3">
                &bull; Developed a robust, end-to-end MVP mobile application
                using React Native, JavaScript, Redux, Express, Firebase,
                Heroku, and OpenAI API integration, resulting in an intuitive,
                seamless user experience and positive feedback from users.
              </p>

              <p className="text-sm tablet:text-base mt-3">
                &bull; Utilized R, Excel, and Google Analytics to construct
                comprehensive financial models, facilitating cash flow analysis
                and informing growth-hack strategies, scaling measures, and
                organic marketing initiatives for new user acquisition.
              </p>
            </div>
          </div>

          {/* Samsung Biologics */}
          <div
            className="flex flex-col tablet:flex-row mt-3 tablet:mt-5"
            ref={samsung}
          >
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
                Software Engineering Intern
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
                Python by leveraging data analysis techniques to optimize
                auditor selection for pharmaceutical suppliers, resulting in the
                significant streamlining of internal processes and the reduction
                of operational costs by 12%.
              </p>

              <p className="text-sm tablet:text-base mt-3">
                &bull; Streamlined AWS-driven data migration projects,
                transitioning 2k+ essential documents from outdated, separate
                systems to a unified, cloud-based system; reduced more than 50%
                company-wide paper use and improved overall workflow/efficiency
                by 16%.
              </p>
            </div>
          </div>

          {/* Typed */}
          <div
            className="flex flex-col tablet:flex-row mt-3 tablet:mt-5"
            ref={typed}
          >
            {/* Left Side */}
            <div className="w-full tablet:w-1/3">
              <p className="font-bold text-lg tablet:text-2xl">Typed</p>
              <p
                className={`text-sm tablet:text-base ${
                  theme === "dark" ? "opacity-50" : ""
                }`}
              >
                Product Strategy Intern
              </p>
              <p
                className={`text-sm tablet:text-base ${
                  theme === "dark" ? "opacity-50" : ""
                }`}
              >
                Mar 2022 &mdash; Jun 2022
              </p>
            </div>
            {/* Right Side */}
            <div className="w-full tablet:w-2/3">
              <p className="text-sm tablet:text-base">
                &bull; Advised{" "}
                <a
                  href="https://typed.do/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Typed
                </a>
                , a Series A document-based SaaS start-up, for entering the U.S.
                market by conducting comprehensive market sizing, profitability,
                and CRM analytics, leading to the development of a targeted,
                bottoms-up GTM strategy.
              </p>

              <p className="text-sm tablet:text-base mt-3">
                &bull; Spearheaded product strategy for Typed&apos;s U.S. market
                team by identifying and addressing user pain points related to
                mobile-to-web sign-ups, collaborating closely with its
                engineering and design teams, and achieving a significant 40%
                decrease in drop-off rates.
              </p>

              <p className="text-sm tablet:text-base mt-3">
                &bull; Developed a comprehensive product-marketing roadmap that
                boosted user acquisition through promotional events by 120%,
                increased MAU retention turnover by 25%, and decreased churn
                rate to 1.7%.
              </p>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="mt-6 tablet:mt-10 laptop:mt-15" ref={school}>
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
            <div
              className="font-bold tablet:font-normal text-sm tablet:text-base"
              ref={outside}
            >
              Outside of the classroom, I&apos;m...
            </div>

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={gentles}
            >
              <p>
                <span className="font-bold">
                  a bioinformatics research assistant at Stanford
                  Medicine&apos;s{" "}
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
                  , where I&apos;ve analyzed, visualized, and deconvoluted
                  complex RNA datasets to effectively treat chemo-resistant
                  cancers.
                </span>
              </p>
            </div>

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={ssb}
            >
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

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={spba}
            >
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

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={ksa}
            >
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

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={sigchi}
            >
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

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={sso}
            >
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
                  , where I&apos;ve been able to step back from academics and
                  tap into what brings me the most joy.
                </span>
              </p>
            </div>

            <div
              className="text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={ases}
            >
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
          </div>

          {/* Coursework - Right Column */}
          <div className="tablet:pl-10">
            <div
              className="font-bold tablet:font-normal text-sm tablet:text-base mt-8 tablet:mt-0"
              ref={inside}
            >
              In the classroom, I...
            </div>

            <div
              className="font-bold text-sm tablet:text-base mt-3 laptop:mt-5"
              ref={rn}
            >
              Am Currently Taking:
            </div>

            <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
              <div ref={rn1}>
                CS 111
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Operating Systems Principles
                </span>
              </div>

              <div ref={rn2}>
                MS&E 265
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Intro to Product Management
                </span>
              </div>

              <div ref={rn3}>
                CS 279
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Computational Biology
                </span>
              </div>

              <div ref={rn4}>
                STATS 191
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Applied Statistics
                </span>
              </div>
            </div>

            <div
              className="font-bold text-sm tablet:text-base mt-3 tablet:mt-5"
              ref={past}
            >
              Have Previously Taken:
            </div>

            <div className="text-sm tablet:text-base mt-1 laptop:mt-3">
              <div ref={past1}>
                CS 124
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Natural Language Processing
                </span>
              </div>

              <div ref={past2}>
                CS 193X
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Web Programming Fundamentals
                </span>
              </div>

              <div ref={past3}>
                CS 107
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Computer Systems & Organization
                </span>
              </div>

              <div ref={past4}>
                CS 106B
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Data Structures & Algorithms
                </span>
              </div>

              <div ref={past5}>
                CS 161
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Advanced Algorithms
                </span>
              </div>

              <div ref={past6}>
                CS 109
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Probability Theory
                </span>
              </div>

              <div ref={past7}>
                CS 103
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Discrete Mathematics Theory
                </span>
              </div>

              <div ref={past8}>
                MATH 51
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Linear Algebra & Multivariable Calculus
                </span>
              </div>

              <div ref={past9}>
                STATS 60
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Statistical Methods
                </span>
              </div>

              <div ref={past10}>
                Biology Sequence
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : Genetics, Physiology, Molecular Biology, Bioengineering
                </span>
              </div>

              <div ref={past11}>
                Chemistry Sequence
                <span className={theme === "dark" ? "opacity-50" : ""}>
                  : General Chemistry, Organic Chemistry, Biochemistry
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Home */}
        <div className="mt-10 laptop:mt-15" ref={home}>
          <div className="w-full p-2">
            <h1 className="font-bold text-xs tablet:text-sm">@ Home</h1>
            <div
              className={`flex-grow border-b ${
                theme === "dark" ? "border-white" : "border-black"
              } mt-2`}
            ></div>
          </div>
        </div>

        <div
          className="grid tablet:grid-cols-8  p-2 w-full pb-16"
          ref={hobbies}
        >
          {/* Left Column */}
          <div className="tablet:col-span-1 hidden tablet:flex tablet:items-center">
            <p className="font-bold text-sm tablet:text-base ">Hobbies</p>
          </div>

          {/* Right Column */}
          <div className="tablet:col-span-7" ref={hdesc}>
            <p className="text-sm tablet:text-base">
              <p>
                Music has always been the way for me to express myself when
                words couldn&apos;t. I love playing the{" "}
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
                More recently, I&apos;ve been having fun building personal web
                and mobile applications. I&apos;m always intrigued by the latest
                breakthroughs in life sciences and biotech. To keep things
                balanced and energized, I make it a point to hit the gym every
                day.
              </p>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
