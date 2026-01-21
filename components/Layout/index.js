import Footer from "../Footer";
import FixedFooter from "../FixedFooter";
import AsciiArt from "../AsciiArt";
import Head from "next/head";

export default function Layout({ children, footerType = "default" }) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      <div className="gradient-banner"></div>
      <AsciiArt />

      <div className="container mx-auto mb-16 tablet:w-[768px] laptop:w-[1024px] relative z-10">
        {children}
        {footerType === "fixed" ? <FixedFooter /> : <Footer />}
      </div>
    </div>
  );
}
