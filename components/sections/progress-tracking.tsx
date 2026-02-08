'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Calendar, AlertCircle } from 'lucide-react'

const progressData = [
  { phase: 'Planning', completed: 100, planned: 100 },
  { phase: 'Procurement', completed: 85, planned: 90 },
  { phase: 'Execution', completed: 65, planned: 75 },
  { phase: 'QC', completed: 40, planned: 50 },
]

const milestones = [
  { name: 'Foundation', status: 'Complete', startDate: '2026-01-15', endDate: '2026-01-28', progress: 100 },
  { name: 'Partitions', status: 'In Progress', startDate: '2026-02-01', endDate: '2026-02-15', progress: 65 },
  { name: 'Finishing', status: 'Upcoming', startDate: '2026-02-16', endDate: '2026-03-05', progress: 0 },
]

const dailyLogs = [
  { date: '2026-02-06', team: 'Team A', task: 'Installed partitions in Zone 2', photos: 5 },
  { date: '2026-02-05', team: 'Team B', task: 'Electrical layout completed for 2 floors', photos: 3 },
]

export default function ProgressTracking() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Progress Tracking</h1>
          <p className="text-slate-600 mt-1">Daily / weekly progress, baselines, milestone status and quick-logs from the site teams</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Add Log Entry</Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Tasks Completed</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
          <p className="text-xs text-slate-500 mt-1">out of 30</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">This Week Progress</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">46%</p>
          <p className="text-xs text-slate-500 mt-1">vs planned 50%</p>
        </Card>
        <Card className="p-6 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Open Issues</p>
          <p className="text-3xl font-bold text-red-600 mt-2">3</p>
          <p className="text-xs text-slate-500 mt-1">needing action</p>
        </Card>
      </div>

      {/* Phase Progress Chart */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Phase-wise Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="phase" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b' }} />
            <Legend />
            <Bar dataKey="completed" fill="#10b981" name="Completed %" />
            <Bar dataKey="planned" fill="#94a3b8" name="Planned %" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Milestone Snapshot */}
      <Card className="bg-white border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Milestone Snapshot</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Milestone</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Progress</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Duration</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((milestone, idx) => (
                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{milestone.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${milestone.status === 'Complete' ? 'bg-green-100 text-green-700' : milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                      {milestone.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="w-32">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${milestone.progress}%` }} />
                      </div>
                      <span className="text-xs text-slate-600 mt-1">{milestone.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {milestone.startDate} to {milestone.endDate}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Button variant="outline" size="sm">
                      {milestone.status === 'Upcoming' ? 'Start' : 'View'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Daily Logs */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Daily Logs (Site)</h2>
        <div className="space-y-4">
          {dailyLogs.map((log, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-900">{log.date} — {log.team}</p>
                  <p className="text-sm text-slate-600 mt-1">{log.task}</p>
                  <p className="text-xs text-slate-500 mt-2">{log.photos} photos attached</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Open Issues */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          Open Issues
        </h2>
        <div className="space-y-3">
          {[
            { issue: 'Material delay - Electrical fixtures', action: 'Contact vendor / expedite' },
            { issue: 'Labor shortage on Site A', action: 'Schedule additional team' },
            { issue: 'Quality rework - Joint strength issue', action: 'Create rework task' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-slate-900">{item.issue}</p>
              <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
