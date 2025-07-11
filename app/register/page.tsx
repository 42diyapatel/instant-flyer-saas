import { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Register - Instant Flyer AI",
  description: "Create your account on Instant Flyer AI",
}

export default function RegisterPage() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        className="object-cover opacity-50 pointer-events-none blur-[4px]"
        priority
      />
      
      {/* Content */}
      <div className="relative z-10 bg-background/80 backdrop-blur-xl p-8 rounded-lg shadow-lg w-[350px]">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Instant Flyer AI
            </h1>
            <p className="text-sm text-muted-foreground">
              Create your account to get started
            </p>
          </div>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              className="bg-background/50 backdrop-blur-sm"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-background/50 backdrop-blur-sm"
            />
            <Button className="w-full">Register</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background/80 px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-background/50 backdrop-blur-sm">
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
