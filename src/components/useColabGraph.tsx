"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartArea = [
 
    { area: "Mecânico", num: 2 },
    { area: "Eletricista", num: 5 },
    { area: "Técnico em mecatrônica", num: 3 },
    { area: "Técnico em automação", num: 4 },
    { area: "Técnico em manutenção", num: 6 },
    // { area: "Engenheiro", num: 8 },
    // { area: "Técnico em refrigeração", num: 7 },
    // { area: "Soldador", num: 9 },
    // { area: "Lubrificador", num: 10 },
    // { area: "Técnico em instrumentação", num: 11 },
    // { area: "Eletromecânico", num: 12 },
    // { area: "Torneiro mecânico", num: 15 },
    // { area: "Fresador", num: 16 },
    // { area: "Técnico em hidráulica", num: 17 },
    // { area: "Técnico em pneumática", num: 17 },
    // { area: "Engenheiro mecânico", num: 18 },
    // { area: "Técnico em motores", num: 19 },



  { area: "June", num: 214 },
]

const chartConfig = {
  num: {
    label: "Num",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function GraphColabAtivos() {
  return (
    <div>
        <ChartContainer config={chartConfig} className="w-230 h-130 flex flex-col gap-8 m-5 rounded-xl border-0 py-6">
          <BarChart accessibilityLayer data={chartArea}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="area"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 50)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="num" fill="var(--color-red)" radius={8} />
          </BarChart>
        </ChartContainer>
    
    </div>
  )
}
