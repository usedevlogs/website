'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Terminal, Shield, Zap, Webhook, ArrowRight, Copy, Check, Package, Activity, Settings, Globe, GitBranch, FileText, Database } from 'lucide-react';

function MatrixRain() {
  return null;
}

function NoiseTexture() {
  return null;
}

const stats = [
  { value: '6', label: 'features built-in' },
  { value: '0', label: 'config needed' },
  { value: '100%', label: 'free & open' },
];

const features = [
  {
    icon: FileText,
    title: 'Auto CLAUDE.md',
    description: 'Bootstraps global and project-level CLAUDE.md files automatically. Always ready for your next session.',
  },
  {
    icon: Globe,
    title: 'Smart Detection',
    description: 'Automatically detects your stack — Node.js, Python, Rust, Go, Swift — and captures it in your logs.',
  },
  {
    icon: GitBranch,
    title: 'Git Integration',
    description: 'Captures branch, commit, and remote URL automatically. Know exactly where you left off.',
  },
  {
    icon: Package,
    title: 'Session Templates',
    description: 'Structured entries with What we did, Decisions made, Problems hit, Next steps, Files changed.',
  },
  {
    icon: Zap,
    title: 'Blog Auto-Post',
    description: 'Automatically creates dev log posts for your blog. Share your journey without extra work.',
  },
  {
    icon: Activity,
    title: 'Inbox Queue',
    description: 'Tracks recent sessions in your Obsidian inbox. Review and link to project notes easily.',
  },
];

const installCode = `# One-liner install
curl -sL devlogs.thealxlabs.ca/install | bash

# Or via npm
npm i -g @usedevlogs/devlog`;

const configCode = `# ~/.devlogrc
DEVLOG_VAULT=~/Documents/MyVault
DEVLOG_GH_USER=yourname
DEVLOG_BLOG=true`;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="absolute top-3 right-3 rounded border border-[#222] bg-[#0d0d0d] p-1.5 text-[#555] transition-colors hover:text-white"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-white" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="relative rounded border border-[#222] bg-[#0a0a0a] overflow-hidden">
      {label && (
        <div className="border-b border-[#222] px-4 py-2 text-xs text-[#555] font-mono">
          {label}
        </div>
      )}
      <CopyButton text={code} />
      <pre className="p-4 text-sm font-mono text-[#ccc] overflow-x-auto">{code}</pre>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="group rounded border border-[#222] bg-[#0a0a0a] p-6 transition-all hover:border-[#333]">
      <div className="mb-4 inline-flex rounded bg-[#111] p-3 text-[#e8ff47]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 font-mono text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-[#888] leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-mono text-4xl font-bold text-[#e8ff47]">{value}</div>
      <div className="mt-1 text-sm text-[#666]">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <MatrixRain />
      <NoiseTexture />

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#1a1a1a] bg-[#050505]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-xl font-bold text-white">
            devlog
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <Link href="#features" className="text-[#666] transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#install" className="text-[#666] transition-colors hover:text-white">
              Install
            </Link>
            <Link href="#config" className="text-[#666] transition-colors hover:text-white">
              Config
            </Link>
            <Link
              href="https://github.com/usedevlogs/devlog"
              className="text-[#666] transition-colors hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#e8ff47]">
            Claude Code Session Manager
          </div>
          <h1 className="mb-6 font-mono text-5xl font-bold leading-tight text-white md:text-7xl">
            Never forget<br />
            <span className="text-[#e8ff47]">what you built</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl font-mono text-lg text-[#666]">
            devlog writes structured journal entries to Obsidian automatically after every Claude Code session.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#install"
              className="rounded bg-[#e8ff47] px-8 py-4 font-mono font-bold text-[#050505] transition-all hover:bg-[#fff]"
            >
              Install Now
            </Link>
            <Link
              href="https://github.com/usedevlogs/devlog"
              className="rounded border border-[#222] px-8 py-4 font-mono text-sm text-white transition-all hover:border-[#444]"
            >
              View Source
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#1a1a1a] bg-[#0a0a0a] py-12">
        <div className="mx-auto flex max-w-3xl justify-around px-6">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded border border-[#222] bg-[#0a0a0a] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[#222] px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27ca40]" />
              <span className="ml-4 font-mono text-xs text-[#555]">bash</span>
            </div>
            <div className="p-6 font-mono text-sm text-[#888]">
              <span className="text-[#e8ff47]">$</span> cd my-project<br />
              <span className="text-[#e8ff47]">$</span> devlog &quot;built user auth&quot;<br /><br />
              devlog — my-project [2026-04-13 14:32]<br /><br />
              <span className="text-[#27ca40]">✓</span> Global CLAUDE.md written<br />
              <span className="text-[#27ca40]">✓</span> Project CLAUDE.md written<br />
              <span className="text-[#27ca40]">✓</span> Dev log: .../2026-04-13-my-project.md<br />
              <span className="text-[#27ca40]">✓</span> Blog post created
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-mono text-3xl font-bold text-white">What devlog does</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-mono text-3xl font-bold text-white">Install</h2>
          <p className="mb-8 text-center font-mono text-[#666]">One command. Done.</p>
          <CodeBlock code={installCode} label="Terminal" />
        </div>
      </section>

      {/* Config */}
      <section id="config" className="border-t border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-mono text-3xl font-bold text-white">Config</h2>
          <p className="mb-8 text-center font-mono text-[#666]">Create ~/.devlogrc</p>
          <CodeBlock code={configCode} label="~/.devlogrc" />
        </div>
      </section>

      {/* Usage */}
      <section className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-mono text-3xl font-bold text-white">Usage</h2>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-4">
              <code className="text-[#e8ff47]">devlog init</code>
              <span className="text-[#666]">Bootstrap CLAUDE.md files</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-[#e8ff47]">devlog init &quot;...&quot;</code>
              <span className="text-[#666]">Bootstrap + write first entry</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-[#e8ff47]">devlog &quot;what did&quot;</code>
              <span className="text-[#666]">Write dev log entry</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-[#e8ff47]">devlog --config</code>
              <span className="text-[#666]">Show current config</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-12">
        <div className="mx-auto flex flex-col items-center justify-between gap-6 md:flex-row max-w-6xl">
          <div className="font-mono text-xl font-bold text-[#e8ff47]">devlog</div>
          <div className="text-sm text-[#555]">
            Built by <a href="https://thealxlabs.ca" className="text-[#666] hover:text-white">TheAlxLabs</a>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://github.com/usedevlogs/devlog" className="text-[#555] hover:text-white">GitHub</a>
            <a href="https://twitter.com/thealxlabs" className="text-[#555] hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}