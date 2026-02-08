'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle } from 'lucide-react'

const varianceData = [
  { task: 'Flooring Tiles', variance: 12, type: 'Cost' },
  { task: 'Electrical Wiring', variance: 4, type: 'Schedule' },
  { task: 'Partition Installation', variance: -2, type: 'Cost' },
]

export default function VarianceAnalysis() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Variance Analysis</h1>
          <p className="text-slate-600 mt-1">Schedule variance, cost variance, earned value metrics and recommended corrective actions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Schedule Variance (SV)</Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Schedule Variance (SV)</p>
          <p className="text-3xl font-bold text-red-600 mt-2">-5 days</p>
          <p className="text-xs text-slate-500 mt-1">5 days behind schedule</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Cost Variance (CV)</p>
          <p className="text-3xl font-bold text-red-600 mt-2">₹8,240</p>
          <p className="text-xs text-slate-500 mt-1">Cost overrun items</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">CPI / SPI</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">0.97 / 0.92</p>
          <p className="text-xs text-slate-500 mt-1">Performance Index</p>
        </Card>
      </div>

      {/* Variance Chart */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Top Variances</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={varianceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="task" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b' }} />
            <Bar dataKey="variance" fill="#ef4444" name="Variance %" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Detailed Variances */}
      <Card className="bg-white border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Detailed Variance Report</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Task</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Variance</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Reason</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { task: 'Flooring Tiles', type: 'Cost', variance: '+12%', reason: 'Material rate increase', action: 'Alternate material' },
                { task: 'Electrical Wiring', type: 'Schedule', variance: '+4 days', reason: 'Labor shortage', action: 'Expedite procurement' },
                { task: 'Partition Installation', type: 'Cost', variance: '-2%', reason: 'Efficiency gain', action: 'Monitor' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.task}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.type === 'Cost' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600">{row.variance}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.reason}</td>
                  <td className="px-6 py-4 text-sm">
                    <Button variant="outline" size="sm">
                      {row.action}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Corrective Actions */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-blue-600" />
          Recommended Corrective Actions
        </h2>
        <div className="space-y-3">
          {[
            { action: 'Consider alternate vendor', impact: 'Save 3-5%', timeline: 'Immediate' },
            { action: 'Expedite procurement', impact: 'Recover 2 days', timeline: 'Within 3 days' },
            { action: 'Schedule variance tracking', impact: 'Prevent further delays', timeline: 'Ongoing' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium text-slate-900">{item.action}</p>
              <div className="flex justify-between mt-2">
                <p className="text-sm text-slate-600">Impact: {item.impact}</p>
                <p className="text-sm text-slate-600">Timeline: {item.timeline}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
