import { useRef } from "react";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Projects() {
  /* Refs for chronological transition effect */
  const title = useRef();
  const desc = useRef();
  const einstein = useRef();
  const modify = useRef();
  const sumz = useRef();
  const placex = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        title.current,
        desc.current,
        einstein.current,
        modify.current,
        sumz.current,
        placex.current,
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

      <div className="container mx-auto mb-10 tablet:w-[768px] laptop:w-[1024px]">
        <div className="mt-10 tablet:mt-20">
          <div className="mt-5">
            <h1
              ref={title}
              className="font-medium text-4xl tablet:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              Projects
            </h1>
            <h1
              ref={desc}
              className="text-sm tablet:text-base p-1 tablet:p-2 text-bold w-full"
            >
              I like building for fun. Here are some cool creations that
              I&apos;ve been working on.
            </h1>
          </div>
        </div>
        <div className="mt-6 tablet:mt-10 laptop:mt-15 p-2 tablet:p-0">
          <div className="mt-6 tablet:mt-10 laptop:mt-15 pb-16 grid grid-cols-1 tablet:grid-cols-2 items-center">
            <div ref={einstein}>
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

            <div ref={modify}>
              <WorkCard
                key="Modify"
                img="/images/modify.png"
                name="Modify"
                description="A full-stack Spotify Clone website. Built with TypeScript, React, Next, Tailwind, Stripe, Supabase, and PostgreSQL."
                onClick={() =>
                  window.open("https://github.com/aaronkjin/modify")
                }
              />
            </div>

            <div ref={sumz}>
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

            <div ref={placex}>
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
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
