export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="group cursor-default">
          <div className="w-12 h-12 border border-gray-700 bg-gray-900 flex items-center justify-center mb-6 group-hover:border-white transition-colors">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2 uppercase">Zero-Knowledge</h3>
          <p className="text-xs text-gray-500 font-mono leading-relaxed">
            We don&apos;t sell your eyes. Your data is encrypted locally before it ever touches our servers.
          </p>
        </div>
        <div className="group cursor-default">
          <div className="w-12 h-12 border border-gray-700 bg-gray-900 flex items-center justify-center mb-6 group-hover:border-white transition-colors">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold uppercase">No Algorithm</h3>
            <span className="bg-red-900/50 text-red-500 text-[8px] font-mono px-1 border border-red-800">
              KILL_SWITCH
            </span>
          </div>
          <p className="text-xs text-gray-500 font-mono leading-relaxed">
            A pure chronological feed. You see what you follow. No manipulation. No dopamine loops.
          </p>
        </div>
        <div className="group cursor-default">
          <div className="w-12 h-12 border border-gray-700 bg-gray-900 flex items-center justify-center mb-6 group-hover:border-white transition-colors">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2 uppercase">The Protocol</h3>
          <p className="text-xs text-gray-500 font-mono leading-relaxed">
            A new standard for digital interaction. Focus on signal, discard the noise.
          </p>
        </div>
      </div>
    </section>
  );
}


