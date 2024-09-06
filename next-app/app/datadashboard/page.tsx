"use client"

import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const initialData = [
  { name: 'Jan', sales: 4000, revenue: 2400, profit: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398, profit: 2210 },
  { name: 'Mar', sales: 2000, revenue: 9800, profit: 2290 },
  { name: 'Apr', sales: 2780, revenue: 3908, profit: 2000 },
  { name: 'May', sales: 1890, revenue: 4800, profit: 2181 },
  { name: 'Jun', sales: 2390, revenue: 3800, profit: 2500 },
  { name: 'Jul', sales: 3490, revenue: 4300, profit: 2100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Dashboard() {
  const [data, setData] = useState(initialData)
  const [selectedDataPoint, setSelectedDataPoint] = useState(null)

  const handleChartClick = (data) => {
    setSelectedDataPoint(data)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="date-range">Date Range</Label>
            <Select>
              <SelectTrigger id="date-range">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-90-days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="profit">Profit</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search..." />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="bg-white shadow-sm mb-6 p-4">
          <h1 className="text-2xl font-bold">Data Analysis Dashboard</h1>
        </header>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} onClick={handleChartClick}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} onClick={handleChartClick}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profit Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart onClick={handleChartClick}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="profit"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Month</th>
                    <th className="px-6 py-3">Sales</th>
                    <th className="px-6 py-3">Revenue</th>
                    <th className="px-6 py-3">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedDataPoint ? [selectedDataPoint] : data).map((item, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.sales}</td>
                      <td className="px-6 py-4">{item.revenue}</td>
                      <td className="px-6 py-4">{item.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}