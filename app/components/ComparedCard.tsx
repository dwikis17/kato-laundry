"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: " ", with: 80, withOut: 186 },

]

const chartConfig = {
    with: {
        label: "Dengan Kato Laundry",
        color: "#2563eb"
    },
    withOut: {
        label: "Cuci Sendiri",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function ComparedCard() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={true}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                {/* <ChartTooltip content={<ChartTooltipContent />} /> */}
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="with" fill="var(--color-with)" radius={4} />
                <Bar dataKey="withOut" fill="var(--color-withOut)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
