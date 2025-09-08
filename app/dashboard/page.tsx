"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { CredentialBadge } from "@/components/credential-badge"
import { WalletStatusIndicator } from "@/components/wallet-status-indicator"
import { usePolkadotWallet } from "@/hooks/use-polkadot-wallet"
import { getCredentialsByAddress, getCredentialStats } from "@/lib/mock-data"
import { Award, Plus, TrendingUp, Shield, Eye } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { isConnected, selectedAccount, formatAddress } = usePolkadotWallet()

  if (!isConnected || !selectedAccount) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-md mx-auto">
            <Shield className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Connect Your Wallet</h1>
            <p className="text-muted-foreground mb-6">
              Please connect your Polkadot wallet to access your skill passport dashboard.
            </p>
            <WalletStatusIndicator />
          </div>
        </div>
      </div>
    )
  }

  const credentials = getCredentialsByAddress(selectedAccount.address)
  const stats = getCredentialStats(credentials)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <div className="flex items-center gap-3">
              <p className="text-muted-foreground">Welcome back, {selectedAccount.meta.name || "User"}</p>
              <WalletStatusIndicator />
            </div>
            <p className="text-sm text-muted-foreground mt-1">{formatAddress(selectedAccount.address, 12)}</p>
          </div>

          <div className="flex gap-3">
            <Button asChild>
              <Link href="/mint">
                <Plus className="w-4 h-4 mr-2" />
                Add Credential
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profile">
                <Eye className="w-4 h-4 mr-2" />
                View Profile
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Credentials</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <p className="text-xs text-muted-foreground">Across all skill areas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.verified}</div>
              <p className="text-xs text-muted-foreground">Blockchain verified</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.thisMonth}</div>
              <p className="text-xs text-muted-foreground">New credentials earned</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Credentials */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Credentials</h2>
            <Button variant="outline" asChild>
              <Link href="/profile">View All</Link>
            </Button>
          </div>

          {credentials.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.slice(0, 4).map((credential) => (
                <CredentialBadge key={credential.id} credential={credential} size="md" showActions={true} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No Credentials Yet</h3>
              <p className="text-muted-foreground mb-6">
                Start building your skill passport by adding your first credential.
              </p>
              <Button asChild>
                <Link href="/mint">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Credential
                </Link>
              </Button>
            </Card>
          )}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to manage your skill passport</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                <Link href="/mint">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plus className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Add New Credential</div>
                      <div className="text-sm text-muted-foreground">Mint a new skill badge</div>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                <Link href="/profile">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">View Public Profile</div>
                      <div className="text-sm text-muted-foreground">See how others view your skills</div>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
