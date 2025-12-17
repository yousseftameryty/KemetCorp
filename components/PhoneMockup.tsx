'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { sanitize, safeUrl, formatTimeAgo } from '@/lib/utils';

interface Post {
  author_handle: string;
  author_name: string;
  author_avatar: string | null;
  content: string;
  created_at: string;
  ack_count: number;
  reply_count: number;
  view_count: number;
}

export default function PhoneMockup() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const supabase = createClient();

    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('enriched_posts')
          .select('*')
          .eq('type', 'text')
          .order('created_at', { ascending: false })
          .limit(6);

        if (!error && data) {
          setPosts([...data, ...data]); // Duplicate for seamless loop
        }
      } catch (error) {
        console.error('Feed error:', error);
      }
    };

    fetchPosts();

    // Mouse move handler for 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      const phone = document.querySelector('.phone-container') as HTMLElement;
      if (phone) {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        phone.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center perspective-1000">
      <div className="phone-container">
        <div className="notch"></div>
        <div className="app-screen">
          <div className="app-header">
            <span className="font-bold tracking-tighter text-white">KEMET.</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
          </div>
          <div className="feed-track space-y-4">
            {posts.length === 0 ? (
              <div className="text-center text-gray-600 text-xs py-8">Loading feed...</div>
            ) : (
              posts.map((post, idx) => (
                <div key={idx} className="phone-post-card">
                  <div className="flex flex-row">
                    <div className="mr-2.5 relative z-10">
                      {safeUrl(post.author_avatar) ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={safeUrl(post.author_avatar)}
                          alt=""
                          width={40}
                          height={40}
                          className="phone-post-avatar"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'%3E%3Crect fill=\'%231f2937\' width=\'40\' height=\'40\'/%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="phone-post-avatar"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="phone-post-header">
                        <div className="flex flex-row items-center flex-shrink mr-1">
                          <span className="phone-post-display-name">
                            {sanitize(post.author_name || post.author_handle)}
                          </span>
                        </div>
                        <div className="flex flex-row items-center flex-1 min-w-0">
                          <span className="phone-post-handle">@{sanitize(post.author_handle || 'anon')}</span>
                          <span className="text-gray-600 text-xs mx-1">//</span>
                          <span className="phone-post-time">{formatTimeAgo(post.created_at)}</span>
                        </div>
                      </div>
                      <div>
                        <div className="phone-post-content">{sanitize(post.content)}</div>
                      </div>
                      <div className="phone-post-footer">
                        <div className="phone-post-metrics">
                          <div className="phone-post-metric">
                            <span className="phone-post-metric-text">ACK {post.ack_count || 0}</span>
                          </div>
                          <div className="phone-post-metric">
                            <span className="phone-post-metric-text">REPLY {post.reply_count || 0}</span>
                          </div>
                          <div className="phone-post-metric">
                            <span className="phone-post-metric-text">{post.view_count || 0}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20"></div>
        </div>
      </div>
    </div>
  );
}

