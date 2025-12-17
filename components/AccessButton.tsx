'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AccessButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleAccess = async () => {
    setIsLoading(true);
    setStatus('> CONNECTING...');

    try {
      const supabase = createClient();

      await supabase.from('analytics_events').insert({
        event_type: 'web_access_initiated',
        metadata: { user_agent: navigator.userAgent, referrer: document.referrer },
      });

      setTimeout(() => {
        setStatus('> VERIFYING...');
      }, 500);

      setTimeout(() => {
        setStatus('> ACCESS_GRANTED');
        setTimeout(() => {
          router.push('/app');
        }, 500);
      }, 1500);
    } catch (error) {
      console.error('Access error:', error);
      setStatus('> ERROR: NETWORK_FAIL');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md gap-4">
      <button
        onClick={handleAccess}
        disabled={isLoading}
        className="access-btn w-full h-16 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>{isLoading ? 'INITIALIZING...' : 'Access Web App'}</span>
      </button>

      <div className="flex justify-between text-[9px] font-mono text-gray-600 uppercase">
        <span>Platform: Web</span>
        <span>Status: <span className="text-green-500">ONLINE</span></span>
        <span>HTTPS Secure</span>
      </div>

      {status && (
        <div className="w-full bg-[#0a0a0a] border border-gray-800 p-4 font-mono text-[10px] text-green-500 space-y-1">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}


