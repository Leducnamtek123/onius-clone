import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ComingSoonPageProps = {
  title: string;
  copy: string;
};

export default function ComingSoonPage({ title, copy }: ComingSoonPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="flex min-h-[calc(100vh-160px)] items-center px-6 pb-20 pt-32 md:px-12">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">Coming soon</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">{copy}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

