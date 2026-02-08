'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'

const equipmentData = [
  {
    id: 1,
    name: 'Tower Crane TC-12',
    type: 'Owned',
    utilization: '78%',
    status: 'Active',
    location: 'Site A',
    nextMaintenance: '2026-02-28',
  },
  {
    id: 2,
    name: 'Scissor Lift SL-3',
    type: 'Rented',
    utilization: '45%',
    status: 'Active',
    location: 'Site B',
    nextMaintenance: '2026-02-20',
  },
  {
    id: 3,
    name: 'Concrete Mixer CM-500',
    type: 'Owned',
    utilization: '65%',
    status: 'Maintenance',
    location: 'Warehouse',
    nextMaintenance: '2026-02-15',
  },
  {
    id: 4,
    name: 'Power Drill PD-24',
    type: 'Rented',
    utilization: '90%',
    status: 'Active',
    location: 'Site A',
    nextMaintenance: '2026-02-25',
  },
]

export default function EquipmentSection() {
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Equipment & Tools</h1>
          <p className="text-slate-600 mt-1">Manage owned and rented equipment, schedule maintenance</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
          <Plus size={20} />
          Add Equipment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Total Equipment</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">24</p>
          <p className="text-xs text-slate-500 mt-2">18 owned, 6 rented</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Active Units</p>
          <p className="text-3xl font-bold text-green-600 mt-1">20</p>
          <p className="text-xs text-slate-500 mt-2">83% utilization</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Under Maintenance</p>
          <p className="text-3xl font-bold text-yellow-600 mt-1">2</p>
          <p className="text-xs text-slate-500 mt-2">8% of fleet</p>
        </Card>
        <Card className="p-4 bg-white border border-slate-200">
          <p className="text-slate-600 text-sm">Maintenance Due</p>
          <p className="text-3xl font-bold text-red-600 mt-1">3</p>
          <p className="text-xs text-slate-500 mt-2">Within 7 days</p>
        </Card>
      </div>

      {/* Equipment List */}
      <Card className="bg-white border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Equipment Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Equipment Name</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Location</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Utilization</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Next Maintenance</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((equipment) => (
                <tr key={equipment.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{equipment.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${equipment.type === 'Owned' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                      {equipment.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{equipment.location}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: equipment.utilization }} />
                    </div>
                    <span className="text-xs text-slate-600 mt-1">{equipment.utilization}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${equipment.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {equipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{equipment.nextMaintenance}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedEquipment(equipment)
                          setShowModal(true)
                        }}
                        className="text-blue-600 hover:bg-blue-50"
                      >
                        <Edit2 size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Maintenance Schedule */}
      <Card className="bg-white border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Maintenance Schedule</h2>
        <div className="space-y-3">
          {[
            { equipment: 'Concrete Mixer CM-500', dueDate: '2026-02-15', status: 'Overdue' },
            { equipment: 'Scissor Lift SL-3', dueDate: '2026-02-20', status: 'Due Soon' },
            { equipment: 'Power Drill PD-24', dueDate: '2026-02-25', status: 'Due Soon' },
          ].map((task, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <p className="font-medium text-slate-900">{task.equipment}</p>
                <p className="text-sm text-slate-600">Due: {task.dueDate}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === 'Overdue' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {task.status}
                </span>
                <Button variant="outline" size="sm">
                  Schedule
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
