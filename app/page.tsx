import Navbar from '@/components/Navbar';
import AccessButton from '@/components/AccessButton';
import PhoneMockup from '@/components/PhoneMockup';
import StatsDashboard from '@/components/StatsDashboard';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center pt-24 pb-10 px-6 max-w-7xl mx-auto gap-12 lg:gap-24">
        <div className="flex-1 flex flex-col items-start space-y-8">
          <div className="inline-block border border-green-900 bg-green-900/10 px-3 py-1">
            <p className="text-[9px] font-mono text-green-500 uppercase tracking-widest">
              &gt; SYSTEM_READY_FOR_INJECTION
            </p>
          </div>

          <h1
            className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase glitch-text"
            data-text="THE SIGNAL IS WAITING."
          >
            The Signal<br />Is Waiting.
          </h1>

          <p className="text-sm text-gray-400 font-mono max-w-md leading-relaxed border-l-2 border-green-800 pl-4">
            The algorithm is dead. Curate your reality. Join the encrypted network where silence is luxury and data is
            sovereign.
          </p>

          <AccessButton />
        </div>

        <PhoneMockup />
      </main>

      <StatsDashboard />
      <Features />
      <Footer />
    </>
  );
}


