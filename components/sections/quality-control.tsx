'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function QualityControl() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Quality Control</h1>
        <p className="text-slate-600 mt-1">Inspection checklists, mandatory photo evidence for failures, defect log and rework link</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Total Inspections</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">24</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Pass Rate</p>
          <p className="text-3xl font-bold text-green-600 mt-1">92%</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Defects Found</p>
          <p className="text-3xl font-bold text-red-600 mt-1">8</p>
        </Card>
      </div>

      {/* Active Inspections */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Active Inspections</h2>
        <div className="space-y-3">
          {[
            { inspection: 'Inspection: Partition Installation', location: 'Surface finish — Pass', evidence: '5 photos attached' },
            { inspection: 'Inspection: Joint strength — Fail', location: 'photo requires', evidence: 'Link in required' },
            { inspection: 'Dimensions — Pass', location: 'Select log', evidence: 'Defect: Joint strength — Severity: Major' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
              <p className="font-medium text-slate-900">{item.inspection}</p>
              <p className="text-sm text-slate-600 mt-1">{item.location}</p>
              <p className="text-sm text-slate-500 mt-1">{item.evidence}</p>
              <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                Create Rework Task
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Defect Log */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          Defect Log
        </h2>
        <div className="space-y-3">
          {[
            { defect: 'Joint strength — Severity: Major', location: 'Zone 2 - Partition', status: 'Open', dueDate: '2026-02-10' },
            { defect: 'Surface finish — Severity: Minor', location: 'Zone 1 - Wall', status: 'In Progress', dueDate: '2026-02-09' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">{item.defect}</p>
                <p className="text-sm text-slate-600">{item.location} — {item.status}</p>
                <p className="text-xs text-slate-500">Due: {item.dueDate}</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
