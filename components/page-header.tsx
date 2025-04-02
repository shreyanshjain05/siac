import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("bg-warm-beige py-16 px-4", className)}>
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-rusty-red mb-4 tracking-tight">{title}</h1>
        {description && <p className="text-xl text-light-brown max-w-3xl">{description}</p>}
        {children}
      </div>
    </div>
  )
}

