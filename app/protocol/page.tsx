import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProtocolPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black mb-12 uppercase tracking-tighter glitch-text" data-text="THE PROTOCOL">
            The Protocol
          </h1>
          
          <div className="space-y-8 text-gray-300 font-mono text-sm leading-relaxed">
            <section className="border-l-2 border-green-800 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-white uppercase">Zero-Knowledge Architecture</h2>
              <p>
                KEMET operates on a zero-knowledge principle. Your data is encrypted locally before transmission.
                We cannot read your content. We cannot sell your attention. We are merely the infrastructure.
              </p>
            </section>

            <section className="border-l-2 border-green-800 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-white uppercase">Chronological Feed</h2>
              <p>
                No algorithms. No engagement optimization. No dopamine manipulation. You see posts in the order
                they were created. Pure signal, zero noise.
              </p>
            </section>

            <section className="border-l-2 border-green-800 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-white uppercase">Data Sovereignty</h2>
              <p>
                Your data belongs to you. Export it anytime. Delete it permanently. We are custodians, not owners.
              </p>
            </section>

            <section className="border-l-2 border-green-800 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-white uppercase">The Signal Protocol</h2>
              <p>
                A new standard for digital interaction. Focus on meaningful connections. Discard the algorithmic
                manipulation. Join the encrypted network where silence is luxury.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


