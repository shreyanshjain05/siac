import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionTitle({ title, subtitle, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn("mb-10", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-rusty-red mb-3">{title}</h2>
      {subtitle && <p className="text-xl text-light-brown max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}

