'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, AlertCircle, Clock, Zap } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const dashboardData = [
  { name: 'Jan', projects: 4, budget: 65, actual: 62 },
  { name: 'Feb', projects: 5, budget: 78, actual: 75 },
  { name: 'Mar', projects: 7, budget: 92, actual: 88 },
  { name: 'Apr', projects: 6, budget: 85, actual: 82 },
]

const projectStatus = [
  { name: 'On Track', value: 45, color: '#10b981' },
  { name: 'At Risk', value: 25, color: '#f59e0b' },
  { name: 'Delayed', value: 30, color: '#ef4444' },
]

const metrics = [
  { label: 'Active Projects', value: '12', change: '+2', icon: '📊' },
  { label: 'On-Time Delivery', value: '85%', change: '+5%', icon: '✅' },
  { label: 'Cost Overrun', value: '12%', change: '-3%', icon: '📉' },
  { label: 'Quality Score', value: '4.5/5', change: '+0.2', icon: '⭐' },
]

export default function DashboardHome() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Office Interior - TechCorp</h1>
          <p className="text-slate-600 mt-2">Project Dashboard · Last updated 2 hours ago</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">Generate Report</Button>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="p-6 bg-white border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">{metric.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{metric.value}</p>
                <p className="text-sm text-green-600 mt-1">{metric.change}</p>
              </div>
              <div className="text-3xl">{metric.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Project Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #64748b', borderRadius: '8px' }}
                labelStyle={{ color: '#cbd5e1' }}
              />
              <Legend />
              <Bar dataKey="budget" fill="#3b82f6" name="Budget" />
              <Bar dataKey="actual" fill="#8b5cf6" name="Actual Spend" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Project Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={projectStatus} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {projectStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2 text-sm">
            {projectStatus.map((status, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
                  <span className="text-slate-600">{status.name}</span>
                </div>
                <span className="font-bold text-slate-900">{status.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-yellow-600" />
            Critical Alerts
          </h2>
          <div className="space-y-3">
            {[
              { title: 'Electrical Wiring - Schedule Variance', desc: '4 days behind schedule', priority: 'high' },
              { title: 'Material Shortage - Plywood', desc: 'Delivery delayed by 2 days', priority: 'medium' },
              { title: 'Labor Shortage', desc: 'Site A missing 2 skilled workers', priority: 'high' },
            ].map((alert, idx) => (
              <div key={idx} className={`p-3 rounded-lg border-l-4 ${alert.priority === 'high' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`}>
                <p className="font-medium text-slate-900">{alert.title}</p>
                <p className="text-sm text-slate-600">{alert.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap size={20} className="text-blue-600" />
            Quick Actions
          </h2>
          <div className="space-y-2">
            {[
              'Create PO',
              'Add Site Note',
              'Update Progress',
              'Request Approval',
              'Generate Invoice',
              'Schedule Inspection',
            ].map((action, idx) => (
              <Button key={idx} variant="outline" className="w-full justify-start hover:bg-blue-50 bg-transparent">
                {action}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="p-6 bg-white border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {[
            { action: 'PO Approved', detail: 'PO-1023 approved by Finance', time: '2 hours ago', status: 'success' },
            { action: 'Material Delivered', detail: 'Plywood 18mm (120 units) arrived at Site A', time: '4 hours ago', status: 'success' },
            { action: 'QC Inspection', detail: 'Partition installation - Joint strength PASS', time: '6 hours ago', status: 'success' },
            { action: 'Variance Alert', detail: 'Flooring Tiles cost variance +12%', time: '8 hours ago', status: 'warning' },
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center gap-4 pb-4 border-b border-slate-200 last:border-0">
              <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`} />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{activity.action}</p>
                <p className="text-sm text-slate-600">{activity.detail}</p>
              </div>
              <p className="text-sm text-slate-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
