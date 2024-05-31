import Head from "next/head";
import { useTheme } from "next-themes";

import WorkCard from "../components/WorkCard";
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
          <h1 className="font-medium text-4xl tablet:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
            Projects
          </h1>
          <h1 className="text-sm tablet:text-base p-1 tablet:p-2 text-bold w-full">
            I like building for fun. Here are some cool creations that I&apos;ve
            been working on.
          </h1>
        </div>
      </div>

      {/* Featured */}
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
        {/* Jonin */}
        <div>
          <WorkCard
            key="Jonin"
            img="/images/temp.png"
            name="Jonin"
            description="A pixel ninja platformer game. Built with Python and PyGame."
            onClick={() => window.open("https://github.com/aaronkjin/jonin")}
          />
        </div>

        {/* Tungsten */}
        <div>
          <WorkCard
            key="Tungsten"
            img="/images/temp.png"
            name="Tungsten"
            description="A compiler built from scratch with no libraries. Built with Rust, Cargo, and more."
            onClick={() => window.open("https://github.com/aaronkjin/tungsten")}
          />
        </div>

        {/* Physi.cs */}
        <div>
          <WorkCard
            key="Physics"
            img="/images/temp.png"
            name="Physi.cs"
            description="A 2D real-time physics engine, simulating physical systems in digital environments. Built with C#, the MonoGame framework, and more."
            onClick={() => window.open("https://github.com/aaronkjin/physics")}
          />
        </div>

        {/* Lumen */}
        <div>
          <WorkCard
            key="Lumen"
            img="/images/temp.png"
            name="Lumen"
            description="Your go-to LMS platform. Built with TypeScript, React, Next.js, Stripe, Mux, Prisma, and PostgreSQL."
            onClick={() => window.open("https://github.com/aaronkjin/lumen")}
          />
        </div>
      </div>

      {/* Building */}
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
          <WorkCard
            key="Mentore"
            img="/images/mentore.png"
            name="Mentore"
            description="An LLM-integrated mentor-matching platform. Built with JavaScript, React, HTML/CSS, OpenAI, Firebase, Flask, and Python's various ML libraries."
            onClick={() => window.open("https://github.com/aaronkjin/mentore")}
          />
        </div>

        {/* Einstein.ai */}
        <div>
          <WorkCard
            key="Einstein"
            img="/images/einstein.png"
            name="Einstein.ai"
            description="An all-in-one AI content generation web app powered by OpenAI and ReplicateAI. Built with TypeScript, React, Next.js, Stripe, Crisp, Prisma, and MySQL."
            onClick={() => window.open("https://github.com/aaronkjin/einstein")}
          />
        </div>

        {/* Quill */}
        <div>
          <WorkCard
            key="Quill"
            img="/images/star_wars.png"
            name="Quill"
            description="An ML algorithm for author attribution based on dialogue. Trained on Star Wars scripts. Built with Python and its various ML libraries."
            onClick={() => window.open("https://github.com/aaronkjin/quill")}
          />
        </div>

        {/* Longevity */}
        <div>
          <WorkCard
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
        <div>
          <WorkCard
            key="Modify"
            img="/images/modify.png"
            name="Modify"
            description="A Spotify Clone web app. Built with TypeScript, React, Next.js, Stripe, Supabase, and PostgreSQL."
            onClick={() => window.open("https://github.com/aaronkjin/modify")}
          />
        </div>

        {/* Bonsai */}
        <div>
          <WorkCard
            key="Bonsai"
            img="/images/bonsai.png"
            name="Bonsai"
            description="An iOS app for personal expense management. Built with Swift and SwiftUI."
            onClick={() => window.open("https://github.com/aaronkjin/bonsai")}
          />
        </div>

        {/* Cass */}
        <div>
          <WorkCard
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
