import { Download, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function DownloadButton({ label = 'Download' }: { label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white/70 px-3 py-1.5 text-[12px] font-medium text-ink-600 backdrop-blur transition-all duration-200 hover:border-ink-300 hover:text-ink-900 active:scale-95"
    >
      {done ? (
        <>
          <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
          Ready
        </>
      ) : (
        <>
          <Download className="h-3.5 w-3.5" />
          {label}
        </>
      )}
    </button>
  );
}
