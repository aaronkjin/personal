import { useRef } from "react";
import Header from "../components/Header";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Head from "next/head";
import Socials from "../components/Socials";
import FixedFooter from "../components/FixedFooter";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  /* Refs for chronological transition effect */
  const title = useRef();
  const desc = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [title.current, desc.current],
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
        <div className="mt-32 p-2 laptop:p-0">
          <h1
            ref={title}
            className="font-medium text-4xl tablet:text-5xl p-1 tablet:p-2 w-full"
          >
            {theme === "dark" ? "Hi, I'm Aaron 🌋" : "Hi, I'm Aaron 🏔️"}
          </h1>
          <h1
            ref={desc}
            className="text-sm tablet:text-base p-1 tablet:p-2 w-full"
          >
            I'm an undergrad at Stanford studying Computer Science and Data
            Science. I'm passionate about tackling challenges in the spheres of
            product, data, and business.
          </h1>
        </div>
        <div className="tablet:flex hidden">
          {/* For tablet and larger screens */}
          <Socials className="mt-5 mb-10 p-0 tablet:p-1 laptop:p-0" />
        </div>

        {/* For mobile screens */}
        <div className="flex items-center tablet:hidden">
          <Socials />
        </div>
        <FixedFooter />
      </div>
    </div>
  );
}
