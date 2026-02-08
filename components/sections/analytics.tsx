'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const analyticsData = [
  { month: 'Jan', projects: 4, costs: 65, revenue: 75 },
  { month: 'Feb', projects: 6, costs: 78, revenue: 88 },
  { month: 'Mar', projects: 8, costs: 92, revenue: 105 },
  { month: 'Apr', projects: 7, costs: 85, revenue: 98 },
]

export default function AnalyticsSection() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Analytics & Insights</h1>
        <p className="text-slate-600 mt-1">Business intelligence and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Avg Project Margin</p>
          <p className="text-3xl font-bold text-green-600 mt-1">18.5%</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Total Revenue (MTD)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₹15.2L</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Resource Utilization</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">82%</p>
        </Card>
      </div>

      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Business Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b' }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue" />
            <Line type="monotone" dataKey="costs" stroke="#ef4444" strokeWidth={2} name="Costs" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
