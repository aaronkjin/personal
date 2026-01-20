import Header from "../Header";
import Footer from "../Footer";
import FixedFooter from "../FixedFooter";
import AsciiArt from "../AsciiArt";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Layout({ children, footerType = "default" }) {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <div className="gradient-circle"></div>

      {/* ASCII art bg */}
      <AsciiArt />

      <div className="container mx-auto mb-16 tablet:w-[768px] laptop:w-[1024px] relative z-10">
        {children}
        {footerType === "fixed" ? <FixedFooter /> : <Footer />}
      </div>
    </div>
  );
}
