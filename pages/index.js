import Head from "next/head";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import FadeIn from "../components/FadeIn";
import TextScramble from "../components/TextScramble";

import { ExternalLinkIcon } from "../components/ExternalLinkIcon";

const introSentenceOne = "I'm a Stanford BS/MS CS grad.";
const introSentenceThreeBeforeAfterQuery =
  "Currently, I'm building high-throughput data pipelines for training/post-training LLMs at ";
const introSentenceFour =
  "Previously, I made a distributed benchmarking platform to orchestrate model evals at LinkedIn.";
const introSentenceFive =
  "I also integrated Apple Intelligence into Safari Suggestions and built predictive battery performance models at Apple.";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Aaron Jin</title>
      </Head>

      {/* Intro */}
      <div className="w-full mx-auto px-0 tablet:px-8 tablet:max-w-6xl">
        <div className="mt-24 p-2">
          <FadeIn delay={50}>
            <h1 className="font-baskerville font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 w-full">
              <TextScramble
                delay={50}
                revealDuration={900}
                scrambleOnMount
                rescrambleOnHover
              >
                Aaron Jin
              </TextScramble>
            </h1>
          </FadeIn>
          <div className="p-1 tablet:p-2 w-full">
            <p className="text-sm tablet:text-base text-gray-500">
              <FadeIn as="span" delay={100} className="inline">
                <TextScramble revealDuration={450} scrambleOnWordHover>
                  {introSentenceOne}
                </TextScramble>{" "}
              </FadeIn>
              <FadeIn as="span" delay={175} className="inline">
                <TextScramble revealDuration={450} scrambleOnWordHover>
                  {introSentenceThreeBeforeAfterQuery}
                  <a
                    href="https://www.afterquery.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gray-400 underline-offset-2 transition-colors duration-200 hover:text-[#bea0dc] hover:decoration-[#bea0dc]"
                  >
                    AfterQuery
                  </a>
                  .
                </TextScramble>{" "}
              </FadeIn>
              <FadeIn as="span" delay={250} className="inline">
                <TextScramble revealDuration={450} scrambleOnWordHover>
                  {introSentenceFour}
                </TextScramble>{" "}
              </FadeIn>
              <FadeIn as="span" delay={325} className="inline">
                <TextScramble revealDuration={450} scrambleOnWordHover>
                  {introSentenceFive}
                </TextScramble>
              </FadeIn>
            </p>
          </div>
          <FadeIn delay={500}>
            <div className="mt-5">
              <Socials />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mt-8 mb-16 w-full mx-auto tablet:px-8 tablet:max-w-6xl">
        <div>
          {/* Projects */}
          <FadeIn delay={200}>
            <div>
              <div className="w-full p-2">
                <h1 className="font-baskerville font-bold text-xs tablet:text-sm">
                  <TextScramble revealDuration={450} rescrambleOnHover>
                    Projects
                  </TextScramble>
                </h1>
                <div className="flex-grow border-b border-black mt-2"></div>
              </div>

              <div className="p-2 grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:grid-rows-5 tablet:grid-flow-col tablet:gap-x-8 tablet:gap-y-4">
                <div className="grid grid-cols-1 gap-4 tablet:contents">
                  {/* Ivey */}
                  <FadeIn delay={250}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Ivey
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/ivey"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          An RL poker engine
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* GPT2 */}
                  <FadeIn delay={300}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            GPT2
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/gpt2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A decoder-only, autoregressive transformer
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* PolymarketFM */}
                  <FadeIn delay={350}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            PolymarketFM
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/polymarketfm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A foundation model for prediction market forecasting
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* PocketNeRF */}
                  <FadeIn delay={400}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            PocketNeRF
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/pocketnerf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A phone-to-3D indoor reconstruction pipeline
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* Tungsten */}
                  <FadeIn delay={450}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Tungsten
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/tungsten"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A compiler built from scratch with no libraries
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                </div>

                <div className="grid grid-cols-1 gap-4 tablet:contents">
                  {/* Flow */}
                  <FadeIn delay={500}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Flow
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/flow"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A vibe-automation platform for knowledge work
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* Roam */}
                  <FadeIn delay={550}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Roam
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/roam"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          An AI platform that turns your inspos into curated
                          trips
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* Slop */}
                  <FadeIn delay={600}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Slop
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/slop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          An AI video generator for viral TikToks
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* Jaike */}
                  <FadeIn delay={650}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Jaike
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/jaike"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A lecture-to-brainrot web app
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>

                  {/* Mentore
                  <FadeIn delay={700}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Mentore
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/mentore"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          An AI search platform for mentors
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn> */}

                  {/* Pullup
                <FadeIn delay={650}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-baskerville font-bold">Pullup</h3>
                      <a
                        href="https://github.com/aaronkjin/pullup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                      >
                        GitHub <ExternalLinkIcon />
                      </a>
                    </div>
                    <p className="text-sm tablet:text-base text-gray-500">
                      A mobile bulletin to find campus events
                    </p>
                  </div>
                </FadeIn> */}

                  {/* Jonin */}
                  <FadeIn delay={750}>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-baskerville font-bold">
                          <TextScramble revealDuration={450} rescrambleOnHover>
                            Jonin
                          </TextScramble>
                        </h3>
                        <a
                          href="https://github.com/aaronkjin/jonin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-baskerville italic text-[10px] tablet:text-xs text-gray-500 hover:text-[#bea0dc] transition-colors duration-200"
                        >
                          GitHub <ExternalLinkIcon />
                        </a>
                      </div>
                      <p className="text-sm tablet:text-base text-gray-500">
                        <TextScramble revealDuration={450} scrambleOnWordHover>
                          A pixel ninja platformer game
                        </TextScramble>
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
