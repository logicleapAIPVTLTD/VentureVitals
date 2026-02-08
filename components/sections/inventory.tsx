'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

const inventoryData = [
  { item: 'Plywood 18mm', location: 'Central WH', stock: 120, min: 30, eqc: 'Requisition', actions: ['Requisition', 'Transfer'] },
  { item: 'MDF Sheets', location: 'Site A', stock: 60, min: 20, eqc: 'Transfer', actions: ['Requisition', 'Transfer'] },
]

export default function InventorySection() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Inventory — Multi-location</h1>
        <p className="text-slate-600 mt-1">QR/barcode scanning, min stock alerts, EOQ & predictive reorder</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Total SKUs</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">128</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Stock Alerts</p>
          <p className="text-3xl font-bold text-red-600 mt-1">8</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Inventory Value</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₹8,45,000</p>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card className="bg-white border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Multi-location Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Item</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Location</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Min</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.item}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.location}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{item.stock}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.min}</td>
                  <td className="px-6 py-4 text-sm">
                    {item.actions.map((action, aidx) => (
                      <Button key={aidx} variant="outline" size="sm" className="mr-2 bg-transparent">
                        {action}
                      </Button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Alerts */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          Stock Alerts
        </h2>
        <div className="space-y-3">
          {[
            { item: 'Hinges Hardware', location: 'Site A', status: 'Below Min', action: 'Requisition' },
            { item: 'Cement Bags', location: 'Central WH', status: 'Expiring Soon', action: 'Use First' },
          ].map((alert, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">{alert.item}</p>
                <p className="text-xs text-slate-600">{alert.location} — {alert.status}</p>
              </div>
              <Button variant="outline" size="sm">
                {alert.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
