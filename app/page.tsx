import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillPassportLogo } from "@/components/skill-passport-logo"
import { WalletConnectionButton } from "@/components/wallet-connection-button"
import { Shield, Award, Users, Zap, CheckCircle, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-8">
            <SkillPassportLogo className="w-20 h-20 text-primary" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Skills, <span className="text-primary">Verified</span> on <span className="text-accent">Polkadot</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Create, mint, and showcase your professional achievements as verifiable digital credentials. Build trust in
            the decentralized world with blockchain-backed skill verification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <WalletConnectionButton variant="default" size="lg" />
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <Link href="/profile">View Demo</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Tamper Proof</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>Globally Recognized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Skill Passport?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Leverage the power of Polkadot's ecosystem to create immutable, verifiable credentials that showcase your
              expertise to the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Blockchain Security</CardTitle>
                <CardDescription>
                  Your credentials are secured by Polkadot's robust blockchain infrastructure, ensuring they can never
                  be forged or tampered with.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Professional Badges</CardTitle>
                <CardDescription>
                  Create beautiful, professional digital badges that represent your skills, certifications, and
                  achievements in a visually appealing format.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Global Recognition</CardTitle>
                <CardDescription>
                  Share your verified credentials across platforms and organizations worldwide. Build trust with
                  employers, clients, and collaborators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Instant Verification</CardTitle>
                <CardDescription>
                  Employers and verifiers can instantly confirm the authenticity of your credentials without lengthy
                  verification processes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Decentralized Control</CardTitle>
                <CardDescription>
                  You own and control your credentials. No central authority can revoke or modify your achievements
                  without your consent.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrate with existing HR systems, professional networks, and portfolio platforms through
                  our open standards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Build Your Skill Passport?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join the future of professional credentials. Connect your Polkadot wallet and start creating verifiable
            digital badges today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WalletConnectionButton variant="default" size="lg" />
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <Link href="/dashboard">Learn More</Link>
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Powered by Polkadot Ecosystem
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-3 mb-4 md:mb-0">
              <SkillPassportLogo className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Skill Passport</span>
            </Link>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/profile" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/dashboard" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/mint" className="hover:text-primary transition-colors">
                Support
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Skill Passport. Built for the Polkadot ecosystem hackathon.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
