import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your dashboard overview",
}

export default function DashboardPage() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome to your dashboard. View and manage your flyers here.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Add your dashboard content here */}
      </div>
    </div>
  )
}
