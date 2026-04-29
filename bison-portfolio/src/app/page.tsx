"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, Bot, ChevronRight, Code2, LineChart, Network, Terminal, Zap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-500/30">
      
      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-widest text-zinc-400">DOMINIK GRZELAK<span className="text-blue-500">_</span></span>
          <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
            Kontakt <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid md:grid-cols-[1fr_400px] gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-medium text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              CTO & Data Executive
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Łączę AI, dane i egzekucję, aby <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">dowozić wynik.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Nie tworzę zabawek akademickich. Buduję architekturę data-driven i wdrażam modele ML, które optymalizują procesy i wspierają strategiczne decyzje spółki o skali ~50 mln PLN obrotu.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-4 flex gap-4">
              <a href="#bison" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
                Bison Fellowship <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#projects" className="border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 px-6 py-3 rounded-md font-medium transition-colors">
                Track Record
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10" />
            <Image 
              src="/dominik.png" 
              alt="Dominik" 
              fill
              className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Proof / Metrics */}
      <section className="py-20 border-y border-zinc-800/50 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            <MetricCard 
              number="0→1" 
              label="Budowanie systemów end-to-end"
            />
            <MetricCard 
              number="3" 
              suffix=" FTEs"
              label="Zautomatyzowana praca manualna"
            />
            <MetricCard 
              number="22" 
              suffix=" lata"
              label="Wiek / High-potential track"
            />
            <MetricCard 
              text="MIT & Harvard"
              label="Ukończone programy DS & ML"
              isText
            />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Record.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">Wybrane wdrożenia łączące technologię z realnym ROI biznesowym.</p>
        </motion.div>

        <div className="space-y-12">
          {/* Project 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative grid md:grid-cols-2 gap-8 border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Data-Driven Transformation</h3>
              <p className="text-zinc-400 leading-relaxed">
                Kompleksowa transformacja firmy (50 mln obrotu) od intuicyjnych decyzji zakupowych do architektury opartej o ML. Przeprowadzenie segmentacji ABC/XYZ i wdrożenie zaawansowanego prognozowania popytu na poziomie setek eksperymentów ML.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><Check /> Feature engineering (~30 cech: sezonowość, dynamika).</li>
                <li className="flex items-start gap-2"><Check /> Dashboardy dla logistyki ograniczające zamrożony kapitał.</li>
                <li className="flex items-start gap-2"><Check /> System alertowy wykrywający ryzyko stockoutów.</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between font-mono text-xs text-zinc-500 relative overflow-hidden group-hover:border-zinc-700 transition-colors">
              <div className="space-y-2 relative z-10">
                <p className="text-blue-400">// Model execution</p>
                <p>import {'{ XGBoost, RandomForest }'} from 'sklearn'</p>
                <p>const impact = optimizeSupplyChain(data)</p>
                <p className="text-green-400">console.log(impact) // ROI maximized</p>
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-zinc-400 mb-2">Tech Stack:</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Python</Badge> <Badge>Machine Learning</Badge> <Badge>Data Science</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative grid md:grid-cols-2 gap-8 border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">FeedLab.dev</h3>
              <p className="text-zinc-400 leading-relaxed">
                Wewnętrzna aplikacja AI rozwiązująca problem skalowania działu sprzedaży e-commerce. Automatyzacja tworzenia ofert produktowych na marketplace'y (Amazon, Allegro), w tym generowanie treści SEO, A+ Content i tłumaczenia.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><Check /> Automatyzacja pracy rzędu 1 pełnego etatu.</li>
                <li className="flex items-start gap-2"><Check /> Praktyczne wdrożenie LLM (prompt chaining, strukturyzacja).</li>
                <li className="flex items-start gap-2"><Check /> Full ownership: od discovery po development i wdrożenie.</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden group-hover:border-zinc-700 transition-colors flex items-center justify-center aspect-video md:aspect-auto">
               <video src="/projects/feedlab.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                 <Badge>LLMs</Badge> <Badge>Agent Systems</Badge>
               </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative grid md:grid-cols-2 gap-8 border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Accounting Automation</h3>
              <p className="text-zinc-400 leading-relaxed">
                Zautomatyzowane procesy księgowe redukujące błędy manualne i czas przetwarzania dokumentów. Przejście z pracy ręcznej na workflow automation.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><Check /> Automatyzacja pracy rzędu 1 pełnego etatu.</li>
                <li className="flex items-start gap-2"><Check /> Eliminacja manualnego przepisywania danych.</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden group-hover:border-zinc-700 transition-colors flex items-center justify-center aspect-video md:aspect-auto">
               <Image src="/projects/accounting_automation (1).png" alt="Accounting Automation" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                 <Badge>Workflow Automation</Badge>
               </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative grid md:grid-cols-2 gap-8 border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-orange-500/10 text-orange-400 rounded-lg">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">AI Transcription App</h3>
              <p className="text-zinc-400 leading-relaxed">
                Wewnętrzna aplikacja wspierająca procesy transkrypcji i ekstrakcji wiedzy z materiałów audio/wideo.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><Check /> Praca z wektorowymi bazami danych (Vector DBs).</li>
                <li className="flex items-start gap-2"><Check /> Integracja API modeli rozpoznawania mowy.</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden group-hover:border-zinc-700 transition-colors flex items-center justify-center aspect-video md:aspect-auto">
               <Image src="/projects/aplikacja_do_transkrypcji.png" alt="Transcription App" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative grid md:grid-cols-2 gap-8 border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">International Startups (PowerBee)</h3>
              <p className="text-zinc-400 leading-relaxed">
                Współpraca w międzynarodowych środowiskach startupowych w fazie wczesnego wzrostu. Projektowanie strategii marketingowych oraz pozyskiwanie inwestorów.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><Check /> Projektowanie strategii marketingowych.</li>
                <li className="flex items-start gap-2"><Check /> Pozyskiwanie inwestorów.</li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden group-hover:border-zinc-700 transition-colors flex items-center justify-center aspect-video md:aspect-auto">
               <video src="/projects/startupy_międzynarodowe_powerbee.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Project 6: Rapid Prototyping */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="space-y-6 max-w-4xl">
              <div className="inline-flex items-center justify-center p-3 bg-zinc-800 text-zinc-300 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Rapid Prototyping & Vibe Coding</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Traktuję szybkie dostarczanie oprogramowania jako codzienność, nie wyjątkowe osiągnięcie. Potrafię błyskawicznie wejść w nowy kontekst biznesowy i dowieźć wszystko – od stabilnej, skalowalnej architektury aż po proste gry komputerowe wspierające marketing.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <a href="https://www.drect.pl" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors group/link">
                  <span className="text-sm text-zinc-500 mb-1">Strona marki (LLM Optimized)</span>
                  <span className="font-medium text-white group-hover/link:text-blue-400 transition-colors flex items-center justify-between">
                    drect.pl <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </span>
                </a>
                <a href="https://www.smartbyleviatan.pl" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors group/link">
                  <span className="text-sm text-zinc-500 mb-1">Strona marki</span>
                  <span className="font-medium text-white group-hover/link:text-blue-400 transition-colors flex items-center justify-between">
                    smartbyleviatan.pl <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </span>
                </a>
                <a href="https://www.dladomu.sklep.pl" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors group/link">
                  <span className="text-sm text-zinc-500 mb-1">Sklep internetowy e-commerce</span>
                  <span className="font-medium text-white group-hover/link:text-blue-400 transition-colors flex items-center justify-between">
                    dladomu.sklep.pl <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 md:text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operating Model.</h2>
            <p className="text-zinc-400 text-lg max-w-2xl md:mx-auto">Zasady, według których dostarczam wartość biznesową.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ModelCard 
              icon={<Zap className="w-5 h-5 text-yellow-400" />}
              title="Execution over Theory"
              description="Szybkie tempo wdrożeń i działanie pod presją. Praktykuję 'vibe coding' i szybkie prototypowanie. Zamiast analizować w nieskończoność, testuję na produkcji i poprawiam metryki."
            />
            <ModelCard 
              icon={<BarChart3 className="w-5 h-5 text-blue-400" />}
              title="Business First"
              description="Zrozumienie P&L i realiów operacyjnych. Priorytetyzacja projektów wyłącznie na podstawie ich wpływu na ROI i likwidację bottlenecków organizacyjnych. Mapowanie procesów jako fundament zmian."
            />
            <ModelCard 
              icon={<Network className="w-5 h-5 text-indigo-400" />}
              title="Executive Leadership"
              description="Doświadczenie w bezpośredniej komunikacji z zarządem i prowadzeniu warsztatów strategicznych. Umiejętność przełożenia technologii na język wyniku i wzięcia pełnego ownershipu za obszar Tech/Data."
            />
          </div>
        </div>
      </section>

      {/* Bison Fellowship */}
      <section id="bison" className="py-32 max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border border-blue-900/50 bg-blue-950/10 rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Code2 className="w-64 h-64 text-blue-500" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold tracking-wider text-sm uppercase mb-6">
              <Terminal className="w-4 h-4" /> Application Intent
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Dlaczego Bison Fellowship?</h2>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                Program szuka młodych ludzi z pasją do AI i wysoką motywacją do budowania przełomowych rozwiązań. <strong className="text-white">Ja nie jestem tylko ambitnym teoretykiem – ja już to robię na dużą skalę.</strong>
              </p>
              <p>
                Jako 22-letni CTO posiadam już kompetencje wykonawcze, zrozumienie biznesu i odporność psychiczną wyniesioną z twardej sprzedaży. Ukończyłem programy na MIT i Harvardzie, ale moją największą przewagą jest <strong className="text-white">bezlitosna skuteczność we wdrażaniu pomysłów</strong>.
              </p>
              <p>
                Aplikuję do Bison Fellowship, ponieważ szukam elitarnych środowisk wzrostowych. Chcę zderzyć mój <em>execution mindset</em> z mentorami światowej klasy i wspólnie z 3-osobowym zespołem dowieźć rozwiązanie, które wygra Demo Day i Summer School w Dolinie Krzemowej.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="py-20 border-t border-zinc-800 bg-zinc-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Gotowy na wyzwanie technologiczne.</h2>
          <p className="text-zinc-400 mb-8">
            Jeśli ten profil odpowiada standardom Bison Fellowship, porozmawiajmy o wartości, jaką wniosę do projektów partnerskich.
          </p>
          <a 
            href="mailto:dom.grzelak@gmail.com" 
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-zinc-200 transition-colors"
          >
            dom.grzelak@gmail.com
          </a>
          <p className="mt-16 text-zinc-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} Dominik. Executive Sharpness.
          </p>
        </div>
      </footer>

    </main>
  );
}

// Subcomponents

function MetricCard({ number, suffix, text, label, isText = false }: { number?: string, suffix?: string, text?: string, label: string, isText?: boolean }) {
  return (
    <motion.div variants={fadeIn} className="space-y-2">
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">
        {isText ? text : <>{number}<span className="text-blue-500 text-3xl">{suffix}</span></>}
      </div>
      <p className="text-sm text-zinc-400 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

function ModelCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div variants={fadeIn} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-zinc-700 transition-colors">
      <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-zinc-700 bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-300">
      {children}
    </span>
  );
}

function Check() {
  return (
    <div className="mt-0.5 min-w-[16px] text-blue-500">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
  )
}
