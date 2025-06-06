import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Generate Flyer",
  description: "Generate your custom flyer",
}

export default function GeneratePage() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Generate Flyer
        </h1>
        <p className="text-lg text-muted-foreground">
          Create your custom flyer with our easy-to-use generator.
        </p>
      </div>
      <div className="grid w-full gap-6">
        {/* Add your flyer generation form here */}
      </div>
    </div>
  )
}
