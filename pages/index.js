import { useTheme } from "next-themes";
import Head from "next/head";

import Layout from "../components/Layout";
import Socials from "../components/Socials";

export default function Home() {
  const { theme } = useTheme();

  return (
    <Layout footerType="fixed">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <div className="mt-32 p-2 laptop:p-0">
        <h1 className="font-medium text-3xl tablet:text-4xl p-1 tablet:p-2 w-full">
          {theme === "dark" ? "Hi, I'm Aaron 🌋" : "Hi, I'm Aaron 🏔️"}
        </h1>
        <h1 className="text-sm tablet:text-base p-1 tablet:p-2 w-full">
          I&apos;m a Stanford BS/MS student studying CS. I enjoy building with a focus on product and growth.
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
    </Layout>
  );
}
