import { HeroSection } from "@/components/home/HeroSection"
import { WhyForgeX } from "@/components/home/WhyForgeX"
import { CommunityStats } from "@/components/home/CommunityStats"
import { HowItWorks } from "@/components/home/HowItWorks"
import { CoreFeatures } from "@/components/home/CoreFeatures"
import { CallToAction } from "@/components/home/CallToAction"

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Why ForgeX Section */}
      <WhyForgeX />

      {/* Backed by Community Section */}
      <CommunityStats/>

      {/* How It Works Section */}
      <HowItWorks/>
      {/* Features Section */}
     <CoreFeatures/>
      {/* CTA Section */}
     <CallToAction/>
    </div>
  )
}
