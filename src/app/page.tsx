import Contact from "./components/Contact/page";
import Experience from "./components/Experience/page";
import Hero from "./components/Hero/page";
import Navbar from "./components/Navbar/page";
import Projects from "./components/Projects/page";



export default function Home() {
  return (
    <div className=" bg-slate-950 text-slate-50">
      <Navbar />
      <main className="">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
