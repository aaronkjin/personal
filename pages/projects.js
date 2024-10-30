import Head from "next/head";
import { useTheme } from "next-themes";

import Project from "../components/Project";
import Layout from "../components/Layout";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <Layout footerType="normal">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <div className="mt-10 tablet:mt-20">
        <div className="mt-5">
          <h1 className="font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
            Projects
          </h1>
          <h1 className="text-sm tablet:text-base p-1 tablet:p-2 text-bold w-full">
            I like building for fun. Here are some cool creations that I&apos;ve
            been working on.
          </h1>
        </div>
      </div>

      {/* Currently */}
      <div className="mt-6 tablet:mt-10 laptop:mt-15">
        <div className="w-full p-2">
          <h1 className="font-bold text-xs tablet:text-sm"> Currently</h1>
          <div
            className={`flex-grow border-b ${
              theme === "dark" ? "border-white" : "border-black"
            } mt-2 laptop:mr-16`}
          ></div>
        </div>
      </div>

      <div className="mt-2 tablet:mt-4 pb-8 grid grid-cols-1 tablet:grid-cols-2">
        {/* Tungsten */}
        <div>
          <Project
            key="Tungsten"
            img="/images/temp.png"
            name="Tungsten"
            description="A compiler, except it's built from scratch with no libraries. Built with Rust and Cargo."
            onClick={() => window.open("https://github.com/aaronkjin/tungsten")}
          />
        </div>

        {/* Ivey */}
        <div>
          <Project
            key="Ivey"
            img="/images/temp.png"
            name="Ivey"
            description="An AI-powered poker engine with reinforcement learning techniques. Built with Python and its various ML libraries."
            onClick={() => window.open("https://github.com/aaronkjin/ivey")}
          />
        </div>

        {/* Physi.cs */}
        <div>
          <Project
            key="Physics"
            img="/images/temp.png"
            name="Physi.cs"
            description="A 2D physics engine, simulating physical systems in digital environments. Built with C# and MonoGame."
            onClick={() => window.open("https://github.com/aaronkjin/physics")}
          />
        </div>

        {/* Lumen */}
        <div>
          <Project
            key="Lumen"
            img="/images/temp.png"
            name="Lumen"
            description="Your go-to LMS platform. Built with TypeScript, React, Next.js, Stripe, Mux, Prisma, and PostgreSQL."
            onClick={() => window.open("https://github.com/aaronkjin/lumen")}
          />
        </div>
      </div>

      {/* Featured */}
      <div className="w-full p-2">
        <h1 className="font-bold text-xs tablet:text-sm">Featured</h1>
        <div
          className={`flex-grow border-b ${
            theme === "dark" ? "border-white" : "border-black"
          } mt-2 laptop:mr-16`}
        ></div>
      </div>

      <div className="mt-2 tablet:mt-4  pb-16 grid grid-cols-1 tablet:grid-cols-2">
        {/* Mentore */}
        <div>
          <Project
            key="Mentore"
            img="/images/mentore.png"
            name="Mentore"
            description="An AI search platform for mentors. Built with JavaScript, React, HTML/CSS, OpenAI, Firebase, Flask, and Python's various ML libraries."
            onClick={() => window.open("https://github.com/aaronkjin/mentore")}
          />
        </div>

        {/* Jonin */}
        <div>
          <Project
            key="Jonin"
            img="/images/jonin.png"
            name="Jonin"
            description="A pixel ninja platformer game. Built with Python, PyGame, and various Python libraries for math and physics operations."
            onClick={() => window.open("https://github.com/aaronkjin/jonin")}
          />
        </div>

        {/* Einstein.ai */}
        <div>
          <Project
            key="Einstein"
            img="/images/einstein.png"
            name="Einstein.ai"
            description="An all-in-one AI content generation web app powered by OpenAI and ReplicateAI. Built with TypeScript, React, Next.js, Stripe, Crisp, Prisma, and MySQL."
            onClick={() => window.open("https://github.com/aaronkjin/einstein")}
          />
        </div>

        {/* Quill */}
        <div>
          <Project
            key="Quill"
            img="/images/star_wars.png"
            name="Quill"
            description="An ML algorithm for author attribution based on dialogue. Trained on Star Wars scripts. Built with Python and its various ML libraries."
            onClick={() => window.open("https://github.com/aaronkjin/quill")}
          />
        </div>

        {/* Longevity */}
        <div>
          <Project
            key="Longevity"
            img="/images/longevity.png"
            name="Longevity"
            description="A GPT system to suggest lifestyle habits for longer life, trained on custom ontology. Built with TypeScript, React, Next.js, Python, and its various ML libraries."
            onClick={() =>
              window.open("https://github.com/aaronkjin/longevity")
            }
          />
        </div>

        {/* Modify */}
        {/* <div>
          <Project
            key="Modify"
            img="/images/modify.png"
            name="Modify"
            description="A Spotify Clone web app. Built with TypeScript, React, Next.js, Stripe, Supabase, and PostgreSQL."
            onClick={() => window.open("https://github.com/aaronkjin/modify")}
          />
        </div> */}

        {/* Bonsai */}
        <div>
          <Project
            key="Bonsai"
            img="/images/bonsai.png"
            name="Bonsai"
            description="An iOS app for personal expense management. Built with Swift and SwiftUI."
            onClick={() => window.open("https://github.com/aaronkjin/bonsai")}
          />
        </div>

        {/* Cass */}
        <div>
          <Project
            key="Cass"
            img="/images/chatbot.png"
            name="Cass"
            description="An NLP chatbot that delivers personalized movie recommendations. Built with Python and its various ML libraries."
            onClick={() =>
              window.open(
                "https://gitfront.io/r/aaronkjin/3RJWBDccpb3M/chatbot-project/"
              )
            }
          />
        </div>
      </div>
    </Layout>
  );
}
