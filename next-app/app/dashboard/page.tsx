'use client'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KRGKdoONqqK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CartesianGrid, XAxis, Line, LineChart, RadialBar, RadialBarChart, Bar, BarChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
    return (
        <div className="flex min-h-screen bg-[#e0f7fa]">
            <aside className="flex flex-col items-center w-16 p-4 bg-[#00acc1]">
                <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <nav className="flex flex-col items-center mt-4 space-y-4">
                    <HomeIcon className="w-6 h-6 text-white" />
                    <StarIcon className="w-6 h-6 text-white" />
                    <SettingsIcon className="w-6 h-6 text-white" />
                    <MenuIcon className="w-6 h-6 text-white" />
                </nav>
                <LogOutIcon className="w-6 h-6 mt-auto text-white" />
            </aside>
            <main className="flex-1 p-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lorem ipsum</CardTitle>
                            <CardDescription>Adipiscing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LinechartChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Adipiscing</CardTitle>
                            <CardDescription>Week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LinechartChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Calendar</CardTitle>
                            <CardDescription>January</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Calendar mode="single" className="border rounded-md" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Search</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input type="search" placeholder="Search..." />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>1205</CardTitle>
                            <CardDescription>Adipiscing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LinechartChart className="w-full h-[50px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>840</CardTitle>
                            <CardDescription>Consectetur</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LinechartChart className="w-full h-[50px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Lorem ipsum</CardTitle>
                            <CardDescription>Duis aute irure</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadialbarchartChart className="w-full h-[100px]" />
                            <Button className="mt-4">Suscipit</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Lorem</CardTitle>
                            <CardDescription>Voluptate dolore</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadialbarchartChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Consectetur</CardTitle>
                            <CardDescription>Lorem ipsum dolor sit amet</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarchartChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dolor sit amet</CardTitle>
                            <CardDescription>All time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LinechartmultipleChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Lorem ipsum</CardTitle>
                            <CardDescription>Adipiscing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LinechartChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Adipiscing</CardTitle>
                            <CardDescription>Week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarchartChart className="w-full h-[100px]" />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

function BarchartChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
                className="min-h-[300px]"
            >
                <BarChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LinechartChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
            >
                <LineChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
                </LineChart>
            </ChartContainer>
        </div>
    )
}


function LinechartmultipleChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                    mobile: {
                        label: "Mobile",
                        color: "hsl(var(--chart-2))",
                    },
                }}
                className="min-h-[300px]"
            >
                <LineChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186, mobile: 80 },
                        { month: "February", desktop: 305, mobile: 200 },
                        { month: "March", desktop: 237, mobile: 120 },
                        { month: "April", desktop: 73, mobile: 190 },
                        { month: "May", desktop: 209, mobile: 130 },
                        { month: "June", desktop: 214, mobile: 140 },
                    ]}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
                    <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
                </LineChart>
            </ChartContainer>
        </div>
    )
}


function LogOutIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function RadialbarchartChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    visitors: {
                        label: "Visitors",
                    },
                    chrome: {
                        label: "Chrome",
                        color: "hsl(var(--chart-1))",
                    },
                    safari: {
                        label: "Safari",
                        color: "hsl(var(--chart-2))",
                    },
                    firefox: {
                        label: "Firefox",
                        color: "hsl(var(--chart-3))",
                    },
                    edge: {
                        label: "Edge",
                        color: "hsl(var(--chart-4))",
                    },
                    other: {
                        label: "Other",
                        color: "hsl(var(--chart-5))",
                    },
                }}
                className="mx-auto aspect-square max-h-[250px]"
            >
                <RadialBarChart
                    data={[
                        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                        { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                        { browser: "other", visitors: 90, fill: "var(--color-other)" },
                    ]}
                    innerRadius={30}
                    outerRadius={110}
                >
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="browser" />} />
                    <RadialBar dataKey="visitors" background />
                </RadialBarChart>
            </ChartContainer>
        </div>
    )
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
