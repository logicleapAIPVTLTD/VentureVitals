'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Package, AlertCircle } from 'lucide-react'

const deliveryData = [
  { id: 'D-1009', material: 'Plywood 18mm', qty: 50, status: 'Delivered', date: '2026-02-05' },
  { id: 'D-1010', material: 'Tiles - Ceramic', qty: 200, status: 'In Transit', date: '2026-02-08' },
  { id: 'D-1011', material: 'Hardware Set', qty: 15, status: 'Pending', date: '2026-02-12' },
]

const consumptionData = [
  { material: 'Plywood 18mm', plan: 100, actual: 95, variance: -5 },
  { material: 'Gypsum Board', plan: 150, actual: 155, variance: 5 },
  { material: 'Tiles - Ceramic', plan: 200, actual: 210, variance: 10 },
]

export default function MaterialTracking() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Material Tracking</h1>
          <p className="text-slate-600 mt-1">Deliveries, receipts, consumption vs WBS and expected actual material usage</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">New Delivery</Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Last Delivery</p>
          <p className="text-lg font-bold text-slate-900 mt-2">2026-02-05</p>
          <p className="text-xs text-slate-500 mt-1">3 days ago</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Active Receipts</p>
          <p className="text-lg font-bold text-slate-900 mt-2">6</p>
          <p className="text-xs text-slate-500 mt-1">Currently being received</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Maintenance Due</p>
          <p className="text-lg font-bold text-slate-900 mt-2">2 items</p>
          <p className="text-xs text-slate-500 mt-1">Schedule to avoid downtime</p>
        </Card>
      </div>

      {/* Recent Deliveries */}
      <Card className="bg-white border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Recent Deliveries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Delivery ID</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Material</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Qty</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveryData.map((delivery) => (
                <tr key={delivery.id} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{delivery.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{delivery.material}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{delivery.qty}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${delivery.status === 'Delivered' ? 'bg-green-100 text-green-700' : delivery.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{delivery.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <Button variant="outline" size="sm">
                      {delivery.status === 'Delivered' ? 'Extend Rental' : 'Track'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Consumption vs Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Consumption vs Plan</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={consumptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="material" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 12 }} />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b' }} />
              <Legend />
              <Bar dataKey="plan" fill="#3b82f6" name="Plan" />
              <Bar dataKey="actual" fill="#8b5cf6" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Variance Summary</h2>
          <div className="space-y-4">
            {consumptionData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900">{item.material}</span>
                  <span className={`text-sm font-bold ${item.variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {item.variance > 0 ? '+' : ''}{item.variance}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${item.variance > 0 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${Math.min(100, Math.abs(item.variance) + 50)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-yellow-600" />
          Active Alerts
        </h2>
        <div className="space-y-3">
          {[
            {
              title: 'Auto-flag mismatches when received qty differs from RO qty',
              detail: 'Plywood 18mm: Ordered 150, Received 140 units',
            },
            {
              title: 'Material consumption expected plan',
              detail: 'Tiles - Ceramic consumption 10 units above plan',
            },
          ].map((alert, idx) => (
            <div key={idx} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="font-medium text-slate-900">{alert.title}</p>
              <p className="text-sm text-slate-600 mt-1">{alert.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
