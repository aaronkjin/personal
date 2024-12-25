import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import FadeIn from "../components/FadeIn";

import { ExternalLinkIcon } from "../components/ExternalLinkIcon";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout footerType="normal">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      {/* Intro */}
      <div className="w-full mx-auto px-0 tablet:px-8 tablet:max-w-6xl">
        <div className="mt-24 p-2">
          <FadeIn delay={50}>
            <h1 className="font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 w-full">
              Aaron Jin
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-sm tablet:text-base p-1 tablet:p-2 w-full">
              I&apos;m a Stanford BS/MS CS student. I&apos;m interested in AI
              infrastructure and scalable ML systems.
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="mt-5">
              <Socials />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mt-8 mb-16 w-full mx-auto tablet:px-8 tablet:max-w-6xl">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
          {/* Work */}
          <FadeIn delay={200}>
            <div>
              <div className="w-full p-2">
                <h1 className="font-bold text-xs tablet:text-sm">Work</h1>
                <div
                  className={`flex-grow border-b ${
                    theme === "dark" ? "border-white" : "border-black"
                  } mt-2`}
                ></div>
              </div>

              <div className="grid tablet:grid-cols-1 p-2 gap-4">
                {/* Apple Safari */}
                <FadeIn delay={250}>
                  <div className="flex flex-col">
                    <div className="w-full">
                      <p className="font-bold">Apple</p>
                      <div className="flex justify-between items-center">
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
                          Summer 2024
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-1.5">
                      <p className="text-sm tablet:text-base text-gray-500">
                        Integrated Apple Intelligence into Safari Suggestions
                        for more relevant zero-keyword searches.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Apple Battery */}
                <FadeIn delay={300}>
                  <div className="flex flex-col mt-3">
                    <div className="w-full">
                      <p className="font-bold">Apple</p>
                      <div className="flex justify-between items-center">
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
                          Spring 2024
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-1.5">
                      <p className="text-sm tablet:text-base text-gray-500">
                        Developed team&apos;s first API gateway for Apple&apos;s
                        battery-testing web app.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* NoRamp */}
                <FadeIn delay={350}>
                  <div className="flex flex-col mt-3">
                    <div className="w-full">
                      <p className="font-bold">NoRamp</p>
                      <div className="flex justify-between items-center">
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
                          Fall, Winter 2023
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-1.5">
                      <p className="text-sm tablet:text-base text-gray-500">
                        Built Prisim, a social wallet marketplace for NFT buyers
                        and sellers.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Samsung Biologics */}
                <FadeIn delay={400}>
                  <div className="flex flex-col mt-3">
                    <div className="w-full">
                      <p className="font-bold">Samsung Biologics</p>
                      <div className="flex justify-between items-center">
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
                          Summer 2022
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-1.5">
                      <p className="text-sm tablet:text-base text-gray-500">
                        Developed an audit-selecting program for pharmaceutical
                        suppliers.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>

          {/* Projects */}
          <FadeIn delay={200}>
            <div>
              <div className="w-full p-2">
                <h1 className="font-bold text-xs tablet:text-sm">Projects</h1>
                <div
                  className={`flex-grow border-b ${
                    theme === "dark" ? "border-white" : "border-black"
                  } mt-2`}
                ></div>
              </div>

              <div className="p-2 grid grid-cols-1 gap-6">
                {/* Tungsten */}
                <FadeIn delay={250}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Tungsten</h3>
                      <a
                        href="https://github.com/aaronkjin/tungsten"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      A compiler built from scratch with no libraries.
                    </p>
                  </div>
                </FadeIn>

                {/* Ivey */}
                <FadeIn delay={300}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Ivey</h3>
                      <a
                        href="https://github.com/aaronkjin/ivey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      An RL poker engine.
                    </p>
                  </div>
                </FadeIn>

                {/* Physi.cs */}
                <FadeIn delay={350}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Physi.cs</h3>
                      <a
                        href="https://github.com/aaronkjin/physics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      A 2D physics engine.
                    </p>
                  </div>
                </FadeIn>

                {/* Mentore */}
                <FadeIn delay={400}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Mentore</h3>
                      <a
                        href="https://github.com/aaronkjin/mentore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      An AI search platform for mentors.
                    </p>
                  </div>
                </FadeIn>

                {/* Jonin */}
                <FadeIn delay={450}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Jonin</h3>
                      <a
                        href="https://github.com/aaronkjin/jonin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      A pixel ninja platformer game.
                    </p>
                  </div>
                </FadeIn>

                {/* Einstein.ai */}
                <FadeIn delay={500}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Einstein.ai</h3>
                      <a
                        href="https://github.com/aaronkjin/einstein"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      An all-in-one AI content generation web app.
                    </p>
                  </div>
                </FadeIn>

                {/* Quill */}
                <FadeIn delay={550}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Quill</h3>
                      <a
                        href="https://github.com/aaronkjin/quill"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      An ML algorithm for author attribution. Trained on Star
                      Wars scripts.
                    </p>
                  </div>
                </FadeIn>

                {/* Longevity
                <FadeIn delay={600}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Longevity</h3>
                      <a
                        href="https://github.com/aaronkjin/longevity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      A GPT system to suggest lifestyle habits for longer life,
                      trained on custom ontology.
                    </p>
                  </div>
                </FadeIn> */}

                {/* Bonsai */}
                <FadeIn delay={600}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">Bonsai</h3>
                      <a
                        href="https://github.com/aaronkjin/bonsai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:underline"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      An iOS app for personal expense management.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
