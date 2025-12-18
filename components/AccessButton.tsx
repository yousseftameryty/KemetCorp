'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AccessButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [platform, setPlatform] = useState<'web' | 'android' | 'ios' | 'other'>('web');
  const [apkUrl, setApkUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent || '';
      const isAndroid = /Android/i.test(ua);
      const isIOS = /iPhone|iPad|iPod/i.test(ua);

      if (isAndroid) {
        setPlatform('android');
      } else if (isIOS) {
        setPlatform('ios');
      } else {
        setPlatform('web');
      }
    }

    const supabase = createClient();

    supabase
      .from('app_releases')
      .select('apk_url')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!error && data && typeof data.apk_url === 'string' && data.apk_url.length > 0) {
          setApkUrl(data.apk_url);
        } else {
          setApkUrl('/kemet_release_v2.apk');
        }
      });
  }, []);

  const handleAccess = async () => {
    setIsLoading(true);
    setStatus('> CONNECTING...');

    try {
      const supabase = createClient();

      if (platform === 'android') {
        await supabase.from('analytics_events').insert({
          event_type: 'apk_download_initiated',
          metadata: { user_agent: navigator.userAgent, referrer: document.referrer },
        });

        setStatus('> VERIFYING...');

        const targetUrl = apkUrl || '/kemet_release_v2.apk';
        const link = document.createElement('a');
        link.href = targetUrl;
        const fileName = targetUrl.split('/').pop() || 'kemet_app.apk';
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        await supabase.from('analytics_events').insert({
          event_type: 'apk_download_completed',
          metadata: { timestamp: new Date().toISOString() },
        });

        setStatus('> PACKAGE_READY');
        setIsLoading(false);
        return;
      }

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
        {platform === 'android' ? (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{isLoading ? 'INITIALIZING...' : 'Download .APK'}</span>
          </>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>{isLoading ? 'INITIALIZING...' : 'Access Web App'}</span>
          </>
        )}
      </button>

      <div className="flex justify-between text-[9px] font-mono text-gray-600 uppercase">
        <span>
          Platform:{' '}
          {platform === 'android'
            ? 'Android'
            : platform === 'ios'
            ? 'iOS'
            : 'Web'}
        </span>
        <span>
          Status: <span className="text-green-500">ONLINE</span>
        </span>
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


