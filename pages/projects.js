import Head from "next/head";
import WorkCard from "../components/WorkCard";

import Layout from "../components/Layout";

export default function Projects() {
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

      <div className="mt-6 tablet:mt-10 laptop:mt-15 p-2 tablet:p-0">
        <div className="mt-6 tablet:mt-10 laptop:mt-15 pb-16 grid grid-cols-1 tablet:grid-cols-2">
          {/* Jonin */}
          <div>
            <WorkCard
              key="Jonin"
              img="/images/temp.png"
              name="Jonin"
              description="Currently building 👷‍♂️. A Python-based ninja platformer game. Built with Python, PyGame, and more."
              onClick={() => window.open("https://github.com/aaronkjin/jonin")}
            />
          </div>

          {/* Physi.cs */}
          <div>
            <WorkCard
              key="Physics"
              img="/images/temp.png"
              name="Physi.cs"
              description="Currently building 👷‍♂️. A 2D physics engine built from scratch with no libraries. Built with C#."
              onClick={() =>
                window.open("https://github.com/aaronkjin/physics")
              }
            />
          </div>

          {/* Lumen */}
          <div>
            <WorkCard
              key="Lumen"
              img="/images/temp.png"
              name="Lumen"
              description="Currently building 👷‍♂️. Your go-to LMS platform. Built with TypeScript, React, Next.js, Stripe, Mux, Prisma, and PostgreSQL."
              onClick={() => window.open("https://github.com/aaronkjin/lumen")}
            />
          </div>

          {/* Mentore */}
          <div>
            <WorkCard
              key="Mentore"
              img="/images/mentore.png"
              name="Mentore"
              description="An LLM-integrated mentor-matching platform. Built with JavaScript, React, HTML/CSS, OpenAI, Firebase, Flask, and Python's various ML libraries."
              onClick={() =>
                window.open("https://github.com/aaronkjin/mentore")
              }
            />
          </div>

          {/* Einstein.ai */}
          <div>
            <WorkCard
              key="Einstein"
              img="/images/einstein.png"
              name="Einstein.ai"
              description="An all-in-one AI content generation website powered by OpenAI and ReplicateAI. Built with TypeScript, React, Next.js, Stripe, Crisp, Prisma, and MySQL."
              onClick={() =>
                window.open("https://github.com/aaronkjin/einstein")
              }
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
              description="A full-stack Spotify Clone website. Built with TypeScript, React, Next.js, Stripe, Supabase, and PostgreSQL."
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

          {/* Sumz.ai */}
          {/* <div>
            <WorkCard
              key="Sumz"
              img="/images/sumz.png"
              name="Sumz.ai"
              description="A GPT-powered article-summarizing website. Built with JavaScript, React, Redux, Vite, and RapidAPI."
              onClick={() =>
                window.open("https://github.com/aaronkjin/sumz-ai")
              }
            />
          </div> */}

          {/* PlaceX */}
          {/* <div>
            <WorkCard
              key="PlaceX"
              img="/images/placex.png"
              name="PlaceX"
              description="A front-end travel website providing users with an immersive platform for exploring their dream destinations. Built with vanilla JavaScript, HTML, and CSS."
              onClick={() =>
                window.open("https://github.com/aaronkjin/place-x")
              }
            />
          </div> */}

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
      </div>
    </Layout>
  );
}
