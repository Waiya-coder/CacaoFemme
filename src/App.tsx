import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { OurStory } from "./components/OurStory";
import { BeanToBar } from "./components/BeanToBar";
import { Impact } from "./components/Impact";
import { Product } from "./components/Product";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <OurStory />
        <BeanToBar />
        <Impact />
        <Product />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
