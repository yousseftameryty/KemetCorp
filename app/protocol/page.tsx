import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProtocolPage() {
  return (
    <>
      <Navbar />
      <div className="noise" />
      <div className="scanlines" />
      <main className="min-h-screen pt-24 pb-24 protocol-doc selection:bg-green-500 selection:text-black">
        <div className="doc-grid">
          <aside className="sidebar">
            <div className="mb-12 flex items-center gap-3">
              <div className="core-dot" />
              <span className="text-lg font-black tracking-tighter text-white">KEMET.</span>
            </div>

            <div className="space-y-1">
              <div className="text-[9px] font-mono text-gray-700 uppercase tracking-widest mb-4 mt-2 pl-2">
                Directory_Root
              </div>
              <a href="#intro" className="nav-item active">
                01.0 // Intro
              </a>
              <a href="#community" className="nav-item">
                02.0 // Standards
              </a>
              <a href="#commerce" className="nav-item">
                03.0 // Commerce
              </a>
              <a href="#privacy" className="nav-item">
                04.0 // Privacy
              </a>
              <a href="#data" className="nav-item">
                05.0 // Data_Use
              </a>
              <a href="#legal" className="nav-item">
                06.0 // Requests
              </a>
              <a href="#ip" className="nav-item">
                07.0 // Property
              </a>
              <a href="#liability" className="nav-item">
                08.0 // Liability
              </a>
              <a href="#general" className="nav-item">
                09.0 // General
              </a>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-900">
              <div className="text-[8px] font-mono text-gray-600 mb-2">FILE_HASH:</div>
              <div className="text-[8px] font-mono text-gray-500 break-all">8f4a2c91038b4c2...</div>
              <a
                href="/"
                className="block mt-6 text-[10px] font-mono text-white hover:text-green-500 transition uppercase"
              >
                {'< Back to Terminal'}
              </a>
            </div>
          </aside>

          <div className="w-full max-w-4xl px-6 md:px-16 py-20 md:py-32">
            <header className="mb-24 border-b border-gray-900 pb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white text-black text-[9px] font-bold px-2 py-1 uppercase tracking-wider">
                  Legal_Doc_V.6
                </span>
                <span className="text-[9px] font-mono text-gray-500 uppercase">Updated: 2025.01.15</span>
              </div>
              <h1 className="doc-title text-white">
                Terms of
                <br />
                <span className="text-gray-600">Service &amp;</span>
                <br />
                Privacy.
              </h1>
              <p className="text-gray-400 mt-6 max-w-2xl font-mono text-xs leading-relaxed border-l-2 border-green-900 pl-4">
                {'> INITIATING PROTOCOL HANDSHAKE...'}
                <br />
                {'> BY ACCESSING KEMET, YOU ACCEPT THE PARAMETERS DEFINED BELOW.'}
                <br />
                {'> SOVEREIGNTY OVER SURVEILLANCE.'}
              </p>
            </header>

            <article>
              <section id="intro">
                <span className="sec-num">SECTION 01.0</span>
                <h2>Introduction &amp; Access</h2>
                <p>
                  Welcome to Kemet (&quot;the Service&quot;). This document describes the Terms of Service (&quot;Terms&quot;), the
                  Privacy Policy (&quot;Privacy Terms&quot;), and additional notices governing your use of Kemet, our websites,
                  mobile applications, systems, features, algorithms, communications tools, subscription offerings, automated
                  processes, and any other digital product operated by Kemet Corp (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                  <br />
                  <br />
                  By accessing or using the Service, you agree to be bound by these Terms and the Privacy Practices listed
                  below. If you do not agree, you may not access the Service and must discontinue use immediately.
                </p>

                <div className="data-block">
                  <p>
                    Kemet is a dynamic social platform with user-generated content, algorithmic discovery, AI-driven
                    personalization, and location-based features. We retain the right to modify, suspend, update, or
                    discontinue any part of it at any time, without notice, to the fullest extent permitted by law.
                  </p>
                </div>

                <h3>1.1 // Age Restrictions</h3>
                <p>
                  Access is strictly tiered to comply with global safety standards:
                  <br />
                  You must be at least <strong>13 years old</strong> to create an account and access general features of
                  Kemet.
                </p>
                <ul>
                  <li>
                    <strong>(16+):</strong> Access to &quot;sensitive&quot; algorithmic content categories, public advertising
                    campaigns, high-reach broadcast features, political commenting, and live location tagging.
                  </li>
                  <li>
                    <strong>(18+):</strong> Required to view NSFW non-pornographic content, subscribe to Kemet paid tiers,
                    access explicit categories, enter monetization programs, and obtain business or government verification.
                  </li>
                </ul>

                <h3>1.2 // Termination Protocol</h3>
                <p>
                  We maintain a <strong>Zero-Trust</strong> architecture. We reserve the right to suspend or terminate your
                  account at any time, with or without notice, for violations of these Terms, illegal activity, fraud, abuse,
                  or any other reason we deem necessary to protect the Service and its users. While we aim to provide reasons
                  for termination, we are not obligated to do so in all circumstances.
                </p>
                <p>
                  You may terminate your account at any time by deleting it through the Service settings. Upon termination,
                  your right to use the Service immediately ceases.
                </p>
              </section>

              <section id="community">
                <span className="sec-num">SECTION 02.0</span>
                <h2>Community Standards</h2>

                <h3>2.1 // Prohibited Signals</h3>
                <p>The following data packets are instantly purged and result in node banning:</p>
                <ul>
                  <li>Pornography (Explicit sexual acts).</li>
                  <li>Extreme Violence / Gore / Shock Content.</li>
                  <li>Child Exploitation Materials (Reported to authorities).</li>
                  <li>Real-World Doxxing (Private coordinates).</li>
                  <li>Unauthorized Automation (Bots lacking the [BOT] tag).</li>
                </ul>

                <h3>2.2 // NSFW Protocol</h3>
                <p>
                  Adult content (Non-Pornographic) must be tagged as <strong>SENSITIVE</strong>. Failure to tag properly will
                  result in algorithmic demotion or shadow-banning.
                </p>
              </section>

              <section id="commerce">
                <span className="sec-num">SECTION 03.0</span>
                <h2>Commerce &amp; Subs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-800 p-4 bg-[#0a0a0a]">
                    <h4 className="text-xs font-bold text-white mb-1 uppercase">Kemet+</h4>
                    <p className="text-[10px] font-mono text-gray-500 mb-0">Verified Badge, Priority.</p>
                  </div>
                  <div className="border border-yellow-900/30 p-4 bg-yellow-900/5">
                    <h4 className="text-xs font-bold text-yellow-500 mb-1 uppercase">Kemet++</h4>
                    <p className="text-[10px] font-mono text-yellow-700 mb-0">God Mode, Archival Tools.</p>
                  </div>
                </div>

                <h3>3.1 // Refund Policy</h3>
                <div className="data-block block-warn">
                  <p>
                    <strong>FINALITY:</strong> All blockchain and fiat transactions are final. Canceling a subscription stops
                    the auto-renewal for the next cycle. It does not refund the current cycle.
                  </p>
                  <p className="mt-2">
                    <strong>EXCEPTIONS:</strong> We do not provide refunds except where required by applicable law (e.g., EU
                    14-day right of withdrawal for digital content, consumer protection laws in your jurisdiction). Refunds
                    for service defects or billing errors will be evaluated on a case-by-case basis.
                  </p>
                </div>
              </section>

              <section id="privacy">
                <span className="sec-num">SECTION 04.0</span>
                <h2>Privacy Protocol</h2>
                <p>We collect only what is necessary to maintain signal integrity.</p>

                <h3>4.1 // Data Ingested</h3>
                <ul>
                  <li>
                    <strong>Voluntary:</strong> Handle, Email, Bio, Content.
                  </li>
                  <li>
                    <strong>Telemetry:</strong> IP Address, Device Model, App Version.
                  </li>
                  <li>
                    <strong>Behavioral:</strong> Scroll depth and dwell time (used for your local algorithm).
                  </li>
                </ul>

                <h3>4.2 // Data Rejected</h3>
                <p>
                  We explicitly <strong>DO NOT</strong> collect:
                </p>
                <ul>
                  <li>Precise GPS (unless you attach a Geo-Tag).</li>
                  <li>Microphone / Camera background usage.</li>
                  <li>Private Keys or Wallet Seeds.</li>
                </ul>

                <h3>4.3 // Data Retention</h3>
                <p>
                  Upon account deletion, data is held in &quot;Cold Storage&quot; for 90 days for legal compliance, then
                  permanently overwritten.
                </p>

                <h3>4.4 // Your Privacy Rights (GDPR/CCPA)</h3>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li>
                    <strong>Right to Access:</strong> Request a copy of your personal data we hold.
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention
                    requirements).
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing of your personal data for certain purposes.
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Request limitation of how we process your data.
                  </li>
                  <li>
                    <strong>Right to Opt-Out (CCPA):</strong> Opt-out of the &quot;sale&quot; of personal information (we do
                    not sell personal information).
                  </li>
                </ul>
                <p>
                  To exercise these rights, contact us at <strong>neon101.ai@gmail.com</strong> with your request and account
                  verification.
                </p>

                <h3>4.5 // Cookie Policy</h3>
                <p>
                  We use essential cookies for authentication, session management, and security. We may use analytics cookies
                  to improve service performance. You can manage cookie preferences through your browser settings. Disabling
                  essential cookies may limit Service functionality.
                </p>
              </section>

              <section id="data">
                <span className="sec-num">SECTION 05.0</span>
                <h2>AI &amp; Usage Rights</h2>

                <h3>5.1 // Content License</h3>
                <p>
                  By posting to Kemet, you grant us a worldwide, non-exclusive, royalty-free license to use, display,
                  reproduce, and distribute your content solely for the purpose of operating and improving the Service.
                </p>

                <h3>5.2 // AI Training &amp; Opt-Out</h3>
                <p>
                  We may use public posts to train internal categorization and content moderation models (AI).{' '}
                  <strong>Private DMs are End-to-End Encrypted and are NEVER used for model training.</strong>
                </p>
                <p>
                  You may opt-out of AI training by adjusting your privacy settings in the Service. Opting out does not affect
                  your content license for Service operation.
                </p>
              </section>

              <section id="legal">
                <span className="sec-num">SECTION 06.0</span>
                <h2>Law Enforcement &amp; Data Requests</h2>
                <p>We comply with valid subpoenas, court orders, and lawful government requests. However:</p>
                <div className="data-block">
                  <p>
                    <strong>DISCLOSURE:</strong> Unless gagged by a court order, we will attempt to notify the user if their
                    data is requested by a government entity.
                  </p>
                </div>
                <p>
                  For legal requests, contact: <strong>neon101.ai@gmail.com</strong>
                </p>
              </section>

              <section id="ip">
                <span className="sec-num">SECTION 07.0</span>
                <h2>Intellectual Property</h2>

                <h3>7.1 // Service Ownership</h3>
                <p>
                  The Service, including its design, features, algorithms, code, trademarks, logos, and all intellectual
                  property rights, are owned by Kemet Corp or its licensors. You may not copy, modify, distribute, sell, or
                  lease any part of the Service without our express written permission.
                </p>

                <h3>7.2 // User Content Ownership</h3>
                <p>
                  You retain ownership of content you post. By posting, you grant us the license described in Section 5.1. You
                  represent that you have the right to grant such license and that your content does not infringe any
                  third-party rights.
                </p>

                <h3>7.3 // DMCA &amp; Copyright</h3>
                <p>We respect intellectual property rights. If you believe your copyright has been infringed, contact our
                  designated agent:</p>
                <div className="data-block">
                  <p>
                    <strong>DMCA Agent:</strong> neon101.ai@gmail.com
                    <br />
                    <strong>Subject:</strong> Copyright Infringement Notice
                    <br />
                    Include: (1) Description of copyrighted work, (2) Location of infringing material, (3) Your contact
                    information, (4) Good faith statement, (5) Signature.
                  </p>
                </div>
              </section>

              <section id="liability">
                <span className="sec-num">SECTION 08.0</span>
                <h2>Limitation of Liability &amp; Disputes</h2>

                <h3>8.1 // Service Availability</h3>
                <p>
                  The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                  either express or implied. We do not guarantee uninterrupted, error-free, or secure access to the Service.
                </p>

                <h3>8.2 // Limitation of Liability</h3>
                <div className="data-block block-warn">
                  <p>
                    <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> Kemet Corp shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, including lost profits, data loss, or business
                    interruption, arising from your use of or inability to use the Service.
                  </p>
                  <p className="mt-2">
                    Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim, or $100,
                    whichever is greater.
                  </p>
                </div>

                <h3>8.3 // Indemnification</h3>
                <p>
                  You agree to indemnify, defend, and hold harmless Kemet Corp, its officers, directors, employees, and agents
                  from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from: (1) your use
                  of the Service, (2) your violation of these Terms, (3) your violation of any third-party rights, or (4) your
                  content.
                </p>

                <h3>8.4 // Dispute Resolution</h3>
                <p>
                  <strong>Informal Resolution:</strong> Before filing a claim, contact us at <strong>neon101.ai@gmail.com</strong> to attempt
                  informal resolution.
                </p>
                <p>
                  <strong>Binding Arbitration:</strong> Except for small claims or injunctive relief, disputes shall be resolved
                  through binding arbitration under the rules of the American Arbitration Association, conducted in Cairo,
                  Egypt.
                </p>
                <p>
                  <strong>Class Action Waiver:</strong> You waive any right to participate in class actions or consolidated
                  proceedings.
                </p>

                <h3>8.5 // Governing Law</h3>
                <p>
                  These Terms are governed by the laws of the State of Egypt, without regard to conflict of law principles. Any
                  disputes not subject to arbitration shall be resolved in the state or federal courts located in Cairo, Egypt.
                </p>
              </section>

              <section id="general">
                <span className="sec-num">SECTION 09.0</span>
                <h2>General Provisions</h2>

                <h3>9.1 // Entire Agreement</h3>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Kemet Corp
                  regarding the Service.
                </p>

                <h3>9.2 // Modifications</h3>
                <p>
                  We may modify these Terms at any time. Material changes will be notified via email or Service notification.
                  Continued use after changes constitutes acceptance. If you disagree, you must stop using the Service.
                </p>

                <h3>9.3 // Severability</h3>
                <p>
                  If any provision is found unenforceable, the remaining provisions shall remain in full effect.
                </p>

                <h3>9.4 // Assignment</h3>
                <p>
                  You may not assign these Terms without our consent. We may assign these Terms to any successor or affiliate.
                </p>

                <h3>9.5 // Contact Information</h3>
                <div className="data-block">
                  <p>
                    <strong>Legal Inquiries:</strong> neon101.ai@gmail.com
                    <br />
                    <strong>Privacy Requests:</strong> neon101.ai@gmail.com
                    <br />
                    <strong>General Support:</strong> neon101.ai@gmail.com
                    <br />
                    <strong>Data Protection Officer (EU):</strong> neon101.ai@gmail.com
                  </p>
                </div>
                <p>
                  <strong>Mailing Address:</strong>
                  <br />
                  Kemet Corp Inc.
                  <br />
                  neon101.ai@gmail.com
                  <br />
                  Cairo, Egypt
                </p>
              </section>
            </article>

            <footer className="mt-32 pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between text-[10px] font-mono text-gray-600 uppercase">
              <div className="flex flex-col gap-2">
                <span>© 2025 Kemet Systems Inc.</span>
                <span>San Francisco / Tokyo / Cloud</span>
              </div>
              <div className="flex gap-8 mt-6 md:mt-0">
                <a href="#" className="hover:text-white">
                  Status_Page
                </a>
                <a href="#" className="hover:text-white">
                  Contact_Admin
                </a>
                <a href="#" className="hover:text-white">
                  Source_Code
                </a>
              </div>
            </footer>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


