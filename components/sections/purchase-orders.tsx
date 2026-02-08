'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Eye, Download } from 'lucide-react'

const poData = [
  { id: 'PO-1023', vendor: 'Vendor A', amount: '145,000', status: 'Approved', date: '2026-02-01' },
  { id: 'PO-1022', vendor: 'Vendor B', amount: '112,600', status: 'Pending', date: '2026-02-02' },
  { id: 'PO-1021', vendor: 'Vendor C', amount: '78,500', status: 'Approved', date: '2026-01-28' },
]

export default function PurchaseOrders() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Purchase Orders</h1>
          <p className="text-slate-600 mt-1">Create and track POs. One-click PO creation and approval flows</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
            <Plus size={20} />
            Create PO
          </Button>
          <Button variant="outline">Approve Selected</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Total POs</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">24</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Total Amount</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₹5,24,000</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Pending Approval</p>
          <p className="text-3xl font-bold text-yellow-600 mt-1">3</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Approved</p>
          <p className="text-3xl font-bold text-green-600 mt-1">21</p>
        </Card>
      </div>

      {/* PO List */}
      <Card className="bg-white border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Recent POs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">PO#</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Vendor</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {poData.map((po) => (
                <tr key={po.id} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{po.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{po.vendor}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">₹{po.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${po.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {po.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{po.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600">
                        <Download size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
