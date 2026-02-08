'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProjectPlanning() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Project Planning</h1>
        <p className="text-slate-600 mt-1">Create and manage project plans, timelines, and resources</p>
      </div>
      <Card className="p-6 bg-white border border-slate-200">
        <div className="text-center py-8">
          <p className="text-slate-600">Project planning tools coming soon</p>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Explore Timeline</Button>
        </div>
      </Card>
    </div>
  )
}
