'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function MatrixRain() {
  const [lines, setLines] = useState<string[]>([])
  
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const count = 20
    const newLines = Array(count).fill(0).map(() => 
      Array(30).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
    )
    setLines(newLines)
  }, [])
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 font-mono text-xs leading-tight">
      {lines.map((line, i) => (
        <div 
          key={i}
          className="absolute text-[#e8ff47]"
          style={{ 
            left: `${(i / lines.length) * 100}%`, 
            top: 0,
            animation: `rain 3s linear infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        >
          {line}
        </div>
      ))}
      <style>{`
        @keyframes rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}

function Terminal({ code }: { code: string }) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-none overflow-hidden font-mono text-sm">
      <div className="bg-[#1a1a1a] px-4 py-2 flex gap-2 border-b border-[#222]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
        <span className="ml-4 text-[#555] text-xs">bash</span>
      </div>
      <div className="p-6 text-[#ccc]">
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="border border-[#222] p-6 hover:border-[#e8ff47] transition-colors group">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[#e8ff47] text-lg mb-2 group-hover:underline">{title}</h3>
      <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-[#111] border border-[#222] px-2 py-1 text-[#e8ff47] text-sm">
      {children}
    </code>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixRain />
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#e8ff47]">devlog</div>
          <div className="flex gap-8 text-sm">
            <a href="#features" className="text-[#888] hover:text-[#e8ff47] transition-colors">Features</a>
            <a href="#install" className="text-[#888] hover:text-[#e8ff47] transition-colors">Install</a>
            <a href="#config" className="text-[#888] hover:text-[#e8ff47] transition-colors">Config</a>
            <a href="https://github.com/usedevlogs/devlog" className="text-[#888] hover:text-[#e8ff47] transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#e8ff47] text-sm mb-4 tracking-widest">SESSION MANAGER FOR CLAUDE CODE</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Never forget<br/>
              <span className="text-[#e8ff47]">what you built</span>
            </h1>
            <p className="text-xl text-[#888] max-w-2xl mx-auto mb-12">
              devlog writes structured journal entries to Obsidian automatically after every Claude Code session. 
              Track decisions, problems, and next steps — automatically.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="#install"
                className="bg-[#e8ff47] text-[#0a0a0a] px-8 py-4 font-bold text-sm hover:bg-[#fff] transition-colors"
              >
                Install Now
              </a>
              <a 
                href="https://github.com/usedevlogs/devlog"
                className="border border-[#222] px-8 py-4 text-sm hover:border-[#e8ff47] hover:text-[#e8ff47] transition-colors"
              >
                View Source
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Terminal */}
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Terminal code={`$ cd my-project
$ devlog "built user auth system with JWT"

  devlog — my-project [2026-04-12 14:32]
  
  ✓ Global CLAUDE.md written: ~/.claude/CLAUDE.md
  ✓ Project CLAUDE.md written: ./CLAUDE.md
  ✓ Dev log: TheGreatVault/10 - Projects/Dev Log/2026-04-12-my-project.md
  ✓ Blog post: blog.thealxlabs.ca/content/devlog/2026-04-12-my-project.md

  → TheGreatVault/10 - Projects/Dev Log/2026-04-12-my-project.md`} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 border-t border-[#222]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">What devlog does</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature 
              icon="📝"
              title="Auto CLAUDE.md"
              desc="Bootstraps global and project-level CLAUDE.md files automatically. Always ready for your next session."
            />
            <Feature 
              icon="🔍"
              title="Smart Detection"
              desc="Automatically detects your stack — Node.js, Python, Rust, Go, Swift — and captures it in your logs."
            />
            <Feature 
              icon="🌿"
              title="Git Integration"
              desc="Captures branch, commit, and remote URL automatically. Know exactly where you left off."
            />
            <Feature 
              icon="📋"
              title="Session Templates"
              desc="Structured entries with What we did, Decisions made, Problems hit, Next steps, Files changed."
            />
            <Feature 
              icon="📰"
              title="Blog Auto-Post"
              desc="Automatically creates dev log posts for your blog. Share your journey without extra work."
            />
            <Feature 
              icon="📥"
              title="Inbox Queue"
              desc="Tracks recent sessions in your Obsidian inbox. Review and link to project notes easily."
            />
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="px-6 py-20 border-t border-[#222] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Install</h2>
          <p className="text-center text-[#888] mb-12">One command. Done.</p>
          
          <div className="bg-[#111] border border-[#222] p-6 mb-8">
            <div className="text-[#555] text-xs mb-2">Install via curl</div>
            <code className="text-[#e8ff47] text-lg">curl -sL devlogs.thealxlabs.ca/install | bash</code>
          </div>
          
          <div className="bg-[#111] border border-[#222] p-6 mb-8">
            <div className="text-[#555] text-xs mb-2">Or via npm</div>
            <code className="text-[#e8ff47] text-lg">npm i -g @usedevlogs/devlog</code>
          </div>
        </div>
      </section>

      {/* Config */}
      <section id="config" className="px-6 py-20 border-t border-[#222]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Config</h2>
          <p className="text-center text-[#888] mb-12">Create <code className="text-[#e8ff47]">~/.devlogrc</code></p>
          
          <div className="bg-[#111] border border-[#222] p-6 font-mono text-sm text-[#ccc]">
            <div className="text-[#555] mb-4"># Path to your Obsidian vault</div>
            <div className="mb-6"><span className="text-[#e8ff47]">DEVLOG_VAULT</span>=~/Documents/MyVault</div>
            
            <div className="text-[#555] mb-4"># Your GitHub username (for author tags)</div>
            <div className="mb-6"><span className="text-[#e8ff47]">DEVLOG_GH_USER</span>=yourname</div>
            
            <div className="text-[#555] mb-4"># Enable blog auto-post (default: true)</div>
            <div className="mb-6"><span className="text-[#e8ff47]">DEVLOG_BLOG</span>=true</div>
            
            <div className="text-[#555] mb-4"># Obsidian vault URL for linking</div>
            <div><span className="text-[#e8ff47]">DEVLOG_OBSIDIAN_URL</span>=obsidian://vault/MyVault</div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="px-6 py-20 border-t border-[#222] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Usage</h2>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex gap-4">
              <code className="text-[#e8ff47] w-48">devlog init</code>
              <span className="text-[#888]">Bootstrap CLAUDE.md files</span>
            </div>
            <div className="flex gap-4">
              <code className="text-[#e8ff47] w-48">devlog init "..."</code>
              <span className="text-[#888]">Bootstrap + write first entry</span>
            </div>
            <div className="flex gap-4">
              <code className="text-[#e8ff47] w-48">devlog "what did"</code>
              <span className="text-[#888]">Write dev log entry</span>
            </div>
            <div className="flex gap-4">
              <code className="text-[#e8ff47] w-48">devlog --config</code>
              <span className="text-[#888]">Show current config</span>
            </div>
            <div className="flex gap-4">
              <code className="text-[#e8ff47] w-48">devlog --help</code>
              <span className="text-[#888]">Show help</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#222]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#e8ff47] font-bold">devlog</div>
          <div className="text-[#555] text-sm">
            Built by <a href="https://thealxlabs.ca" className="text-[#888] hover:text-[#e8ff47]">TheAlxLabs</a>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://github.com/usedevlogs/devlog" className="text-[#555] hover:text-[#e8ff47]">GitHub</a>
            <a href="https://twitter.com/thealxlabs" className="text-[#555] hover:text-[#e8ff47]">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  )
}