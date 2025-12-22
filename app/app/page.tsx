'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function AppPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    
    // Track access
    supabase.from('analytics_events').insert({
      event_type: 'web_app_accessed',
      metadata: { timestamp: new Date().toISOString() },
    });

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="core-dot mx-auto mb-4"></div>
          <p className="text-sm font-mono text-gray-400">LOADING...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter">
            Welcome to KEMET
          </h1>
          <p className="text-gray-400 font-mono mb-8">
            Your encrypted network experience is ready. This is where the web app interface will be built.
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white text-black font-mono font-bold uppercase hover:bg-kemet-green transition-colors"
          >
            Return Home
          </button>
        </div>
      </main>
    </>
  );
}


//just to push the commit to the repo