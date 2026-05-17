import { useState } from "react"
import { Copy, Check } from "lucide-react"

function App() {
  const [copied, setCopied] = useState(false)

  const copyCommand = async () => {
    await navigator.clipboard.writeText("npx skills add Adamkojohnko/koskar-design")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[hsl(201,100%,13%)] text-white font-sans overflow-x-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-3xl tracking-tight font-display">
          Koskar Design<sup className="text-xs">®</sup>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#" className="text-sm text-white hover:text-white/80 transition-colors">Home</a>
          <a href="#" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">Studio</a>
          <a href="#" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">About</a>
          <a href="#" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">Journal</a>
          <a href="#" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">Reach Us</a>
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px]">
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal font-display">
          Where <em className="not-italic text-[hsl(240,4%,66%)]">dreams rise</em> through <em className="not-italic text-[hsl(240,4%,66%)]">the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay text-[hsl(240,4%,66%)] text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          Analyze any website and generate a comprehensive DESIGN.md capturing its visual system — typography, colors, spacing, components, and motion.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row gap-4 items-center">
          <button className="liquid-glass rounded-full px-6 py-3 text-sm text-white hover:scale-[1.03] transition-transform flex items-center gap-3" onClick={copyCommand}>
            <code className="font-mono text-sm">npx skills add Adamkojohnko/koskar-design</code>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <p className="text-[hsl(240,4%,66%)] text-sm mt-8">
          Works with Claude Code, Codex, Cursor, OpenCode & more
        </p>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-8 py-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="font-display text-2xl mb-3">Analyze</h3>
            <p className="text-[hsl(240,4%,66%)] text-sm">Visit any URL and inspect its CSS, fonts, colors, and patterns.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="font-display text-2xl mb-3">Document</h3>
            <p className="text-[hsl(240,4%,66%)] text-sm">Generate a detailed DESIGN.md with implementation guidance.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="font-display text-2xl mb-3">Recreate</h3>
            <p className="text-[hsl(240,4%,66%)] text-sm">Use the design doc to build sites with matching visual quality.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-[hsl(240,4%,66%)] text-sm border-t border-white/10">
        <p>Coming soon — webapp for public access</p>
      </footer>
    </div>
  )
}

export default App