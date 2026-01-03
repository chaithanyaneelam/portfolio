// app/page.tsx
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
      {/* cursor ring element (JS will position it) */}
      <div id="cursor" className="cursor-ring" />
      <ScriptCatcher />
    </>
  );
}

/* tiny client-only script to move cursor ring and add small effects */
function ScriptCatcher() {
  // keep as client code injection
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(){
          const ring = document.getElementById('cursor');
          if(!ring) return;
          window.addEventListener('mousemove', e=>{
            ring.style.left = e.clientX + 'px';
            ring.style.top = e.clientY + 'px';
          });
          document.querySelectorAll('a, button, input, textarea').forEach(el=>{
            el.addEventListener('mouseenter', ()=> ring.style.transform='translate(-50%,-50%) scale(1.8)');
            el.addEventListener('mouseleave', ()=> ring.style.transform='translate(-50%,-50%) scale(1)');
          });
        })();
      `,
      }}
    />
  );
}
