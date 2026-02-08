'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle, TrendingUp } from 'lucide-react'

const predictionData = [
  { week: 'W1', forecast: 4.8, trend: 'down' },
  { week: 'W2', forecast: 4.5, trend: 'down' },
  { week: 'W3', forecast: 4.2, trend: 'stable' },
  { week: 'W4', forecast: 3.9, trend: 'up' },
]

const priceData = [
  { month: 'Jan', price: 2800, trend: 'stable' },
  { month: 'Feb', price: 2950, trend: 'up' },
  { month: 'Mar', price: 3050, trend: 'up' },
  { month: 'Apr', price: 3100, trend: 'up' },
]

export default function PredictionsSection() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Predictions</h1>
          <p className="text-slate-600 mt-1">Model-driven predictions, delivery delays, price movements, and project risk forecasts</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">Run Predictions</Button>
          <Button variant="outline">Refresh Data</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Avg Delay (days)</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">4.8</p>
          <p className="text-xs text-slate-500 mt-1">Confidence: 87%</p>
          <div className="mt-4 h-1 bg-slate-200 rounded-full">
            <div className="h-1 bg-yellow-500 rounded-full" style={{ width: '87%' }} />
          </div>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Material Price Rise (3M)</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">+3.6%</p>
          <p className="text-xs text-slate-500 mt-1">Confidence: 76%</p>
          <div className="mt-4 h-1 bg-slate-200 rounded-full">
            <div className="h-1 bg-yellow-500 rounded-full" style={{ width: '76%' }} />
          </div>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Project Risk Score</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">0.42</p>
          <p className="text-xs text-slate-500 mt-1">Confidence: 81%</p>
          <div className="mt-4 h-1 bg-slate-200 rounded-full">
            <div className="h-1 bg-red-500 rounded-full" style={{ width: '42%' }} />
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Avg Delay (days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b' }} />
              <Legend />
              <Line type="monotone" dataKey="forecast" stroke="#f59e0b" name="Forecast" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Material Price Rise (3M)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b' }} />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#ef4444" name="Material Price" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          Top Alerts
        </h2>
        <div className="space-y-3">
          {[
            {
              title: 'Plywood price likely to spike 8% in 14 days',
              probability: '82%',
              action: 'Pre-buy 200 units',
              severity: 'high',
            },
            {
              title: 'Expected delivery delay for Vendor A',
              probability: '68%',
              action: 'Switch vendor / expedite',
              severity: 'medium',
            },
            {
              title: 'Flooring Tiles - Consumption expected plan',
              probability: '90%',
              action: 'Schedule variance tracking',
              severity: 'high',
            },
          ].map((alert, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${alert.severity === 'high' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-900">{alert.title}</p>
                  <p className="text-sm text-slate-600 mt-1">Probability: {alert.probability}</p>
                </div>
                <Button variant="outline" size="sm">
                  {alert.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Model Info */}
      <Card className="p-6 bg-blue-50 border border-blue-200">
        <div className="flex items-start gap-4">
          <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-blue-900">Predictions powered by time-series AI models</h3>
            <p className="text-sm text-blue-800 mt-1">
              Predictions powered by time-series ML models. WBS consumption and recent delivery logs. Backward data required.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
