'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function StatsDashboard() {
  const [stats, setStats] = useState({
    nodes: 0,
    signals: 0,
    load: 0,
  });

  useEffect(() => {
    const supabase = createClient();

    const fetchStats = async () => {
      try {
        const { data: userCount } = await supabase.rpc('get_user_count');
        const { data: statsData } = await supabase
          .from('network_stats')
          .select('*')
          .eq('id', 1)
          .maybeSingle();

        const nodes = userCount || 0;
        let signals = 0;
        if (statsData && statsData.velocity_score > 0) {
          signals = Math.floor(statsData.velocity_score / 10);
        } else {
          signals = Math.max(1, Math.floor(nodes / 100));
        }

        let load = 0;
        if (statsData && statsData.nodes_last_60s > 0) {
          load = Math.min(100, Math.max(5, Math.floor(statsData.nodes_last_60s / 10)));
        } else {
          load = Math.max(5, Math.min(50, Math.floor(nodes / 10)));
        }

        setStats({ nodes, signals, load });
      } catch (error) {
        console.error('Stats error:', error);
      }
    };

    fetchStats();
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchStats();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="stats" className="stats-dashboard relative z-20">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Active Nodes</div>
          <div className="stat-value white">
            <span>{stats.nodes.toLocaleString()}</span>
            <span className="stat-pulse"></span>
          </div>
          <div className="stat-sublabel">Connected Users</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Signals Per Second</div>
          <div className="stat-value green">{stats.signals.toLocaleString()}</div>
          <div className="stat-sublabel">Network Activity</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Server Load</div>
          <div className="stat-value green">{stats.load}%</div>
          <div className="stat-sublabel">System Capacity</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Encryption</div>
          <div className="stat-value white">AES-256</div>
          <div className="stat-sublabel">Standard</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Region</div>
          <div className="stat-value white">GLOBAL</div>
          <div className="stat-sublabel">Network Coverage</div>
        </div>
      </div>
    </div>
  );
}


