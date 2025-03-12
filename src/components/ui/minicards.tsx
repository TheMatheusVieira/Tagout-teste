import type * as React from "react"

import { cn } from "@/lib/utils"

function MiniCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-gray-100 from-gray-100 to-bbrose text-card-foreground w-80 h-40 flex flex-col gap-8 mt-5 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function SmCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2.5 px-6", className)}
      {...props}
    />
  )
}

function SmCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function SmCardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function SmCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function SmCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

function SmCardDetail({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-detail"
      className={cn("bg-red w-2 h-10 absolute top-2 right-0 rounded-l-sm", className)}
      {...props}
    />
  )
}

export { MiniCard, SmCardHeader, SmCardFooter, SmCardTitle, SmCardDescription, SmCardContent, SmCardDetail }
