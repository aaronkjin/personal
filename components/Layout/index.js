import AsciiArt from "../AsciiArt";

export default function Layout({ children }) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="gradient-banner" />
      <AsciiArt />

      <main className="container mx-auto mb-16 tablet:w-[768px] laptop:w-[1024px] relative z-10">
        {children}
      </main>
    </div>
  );
}
