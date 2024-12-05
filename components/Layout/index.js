import Header from "../Header";
import Footer from "../Footer";
import FixedFooter from "../FixedFooter";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Layout({ children, footerType = "default" }) {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <Head>
        <title>Aaron Jin</title>
      </Head>

      {/* Add the gradient-circle here */}
      <div className="gradient-circle"></div>

      <div className="container mx-auto mb-16 tablet:w-[768px] laptop:w-[1024px]">
        {children}
        {footerType === "fixed" ? <FixedFooter /> : <Footer />}
      </div>
    </div>
  );
}
