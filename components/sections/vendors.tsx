'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

const vendors = [
  {
    name: 'Vendor A',
    score: 4.6,
    delivery: 'Reliable',
    quality: 'Good',
    priceCompetitiveness: 'Moderate',
    actions: ['Invite Quote', 'View Performance'],
  },
  {
    name: 'Vendor B',
    score: 4.1,
    delivery: 'On Time',
    quality: 'Excellent',
    priceCompetitiveness: 'Competitive',
    actions: ['Invite Quote', 'View Performance'],
  },
  {
    name: 'Vendor C',
    score: 3.8,
    delivery: 'Delayed',
    quality: 'Average',
    priceCompetitiveness: 'High',
    actions: ['Invite Quote', 'View Performance'],
  },
]

export default function VendorsSection() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Vendors & Intelligence</h1>
          <p className="text-slate-600 mt-1">Vendor scoring (price / delivery / quality / past performance)</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Add Vendor</Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Approved Vendors</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
          <p className="text-xs text-slate-500 mt-1">Active in last 90 days</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Best Vendor</p>
          <p className="text-lg font-bold text-slate-900 mt-2">Vendor B</p>
          <p className="text-xs text-slate-500 mt-1">4.1 ⭐ score</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Probation</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">2</p>
          <p className="text-xs text-slate-500 mt-1">Under review</p>
        </Card>
      </div>

      {/* Vendor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vendors.map((vendor, idx) => (
          <Card key={idx} className="p-6 bg-white border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">{vendor.name}</h3>
              <div className="flex items-center gap-1">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-slate-900">{vendor.score}</span>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-xs text-slate-600 font-medium">Delivery</p>
                <p className="text-sm text-slate-900">{vendor.delivery}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 font-medium">Quality</p>
                <p className="text-sm text-slate-900">{vendor.quality}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 font-medium">Price Competitiveness</p>
                <p className="text-sm text-slate-900">{vendor.priceCompetitiveness}</p>
              </div>
            </div>
            <div className="space-y-2">
              {vendor.actions.map((action, aidx) => (
                <Button key={aidx} variant={aidx === 0 ? 'default' : 'outline'} className="w-full" size="sm">
                  {action}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Vendor Intelligence */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Vendor Intelligence</h2>
        <p className="text-sm text-slate-600 mb-4">
          Vendor intelligence pulls on-time delivery times, complaint rates, and pricing history
        </p>
        <div className="space-y-3">
          {[
            { label: 'On-Time Delivery Rate', value: '94%', benchmark: 'vs 87% avg' },
            { label: 'Quality Score', value: '4.5/5', benchmark: 'vs 4.2 avg' },
            { label: 'Response Time', value: '2.3 hrs', benchmark: 'vs 4.1 hrs avg' },
          ].map((metric, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm text-slate-900 font-medium">{metric.label}</span>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.benchmark}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
