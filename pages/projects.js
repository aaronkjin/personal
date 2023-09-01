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
          <div>
            <WorkCard
              key="Einstein"
              img="/images/einstein.png"
              name="Einstein.ai"
              description="An all-in-one AI content generation website powered by OpenAI and ReplicateAI. Built with TypeScript, React, Next, Tailwind, Stripe, Crisp, Prisma, and MySQL."
              onClick={() =>
                window.open("https://github.com/aaronkjin/einstein")
              }
            />
          </div>

          <div>
            <WorkCard
              key="Modify"
              img="/images/modify.png"
              name="Modify"
              description="A full-stack Spotify Clone website. Built with TypeScript, React, Next, Tailwind, Stripe, Supabase, and PostgreSQL."
              onClick={() => window.open("https://github.com/aaronkjin/modify")}
            />
          </div>

          <div>
            <WorkCard
              key="Sumz"
              img="/images/sumz.png"
              name="Sumz.ai"
              description="A GPT-powered article-summarizing website. Built with JavaScript, React, Tailwind, Redux, Vite, and RapidAPI."
              onClick={() =>
                window.open("https://github.com/aaronkjin/sumz-ai")
              }
            />
          </div>

          <div>
            <WorkCard
              key="Bonsai"
              img="/images/bonsai.png"
              name="Bonsai"
              description="An iOS app for personal expense management. Built with Swift and SwiftUI."
              onClick={() => window.open("https://github.com/aaronkjin/bonsai")}
            />
          </div>

          <div>
            <WorkCard
              key="PlaceX"
              img="/images/placex.png"
              name="PlaceX"
              description="A front-end travel website providing users with an immersive platform for exploring their dream destinations. Built with vanilla JavaScript, HTML, and CSS."
              onClick={() =>
                window.open("https://github.com/aaronkjin/place-x")
              }
            />
          </div>

          <div>
            <WorkCard
              key="Movie Recommender Chatbot"
              img="/images/chatbot.png"
              name="Movie Recommender Chatbot"
              description="A dynamic chatbot that utilizes NLP techniques and advanced dialogue strategies to deliver personalized movie recommendations. Built with Python and its various libraries."
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
