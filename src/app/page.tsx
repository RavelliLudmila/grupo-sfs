import About from "@/components/About";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Hero />
      <Products />
      <News />
      <About />
    </main>
  );
}
