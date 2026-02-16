import HeroSection from './HeroSection.jsx'
import HowItWorks from './HowItWorks.jsx'
import FloatingHearts from '../common/FloatingHearts.jsx'

export default function LandingView() {
  return (
    <main className="relative">
      {/* Ambient floating hearts — Valentine's atmosphere */}
      <FloatingHearts count={8} opacity={0.04} />
      <HeroSection />
      <HowItWorks />
    </main>
  )
}
