'use client';

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'project-planning', label: 'Project Planning', icon: '📋' },
  { id: 'boq', label: 'BOQ Generator', icon: '✏️' },
  { id: 'procurement', label: 'Procurement', icon: '🛒' },
  { id: 'purchase-orders', label: 'Purchase Orders', icon: '📦' },
  { id: 'vendors', label: 'Vendors', icon: '🏢' },
  { id: 'inventory', label: 'Inventory', icon: '📦' },
  { id: 'equipment', label: 'Equipment', icon: '🔧' },
  { id: 'execution', label: 'Execution', icon: '▶️' },
  { id: 'progress', label: 'Progress Tracking', icon: '📈' },
  { id: 'material-tracking', label: 'Material Tracking', icon: '🚚' },
  { id: 'quality', label: 'Quality Control', icon: '✅' },
  { id: 'variance', label: 'Variance Analysis', icon: '📊' },
  { id: 'predictions', label: 'Predictions', icon: '🔮' },
  { id: 'analytics', label: 'Analytics', icon: '📉' },
]

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const categories = {
    'Planning': ['dashboard', 'project-planning', 'boq'],
    'Procurement': ['procurement', 'purchase-orders', 'vendors'],
    'Resources': ['inventory', 'equipment'],
    'Execution': ['execution', 'progress', 'material-tracking'],
    'Quality & Analysis': ['quality', 'variance', 'predictions', 'analytics'],
  }

  return (
    <div className={`${isOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 flex flex-col border-r border-slate-700 overflow-hidden`}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-700">
        {isOpen && <h1 className="text-xl font-bold">LogicLeap</h1>}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:bg-slate-700"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {isOpen ? (
          Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <button
                onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span>{category}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${expandedCategory === category ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedCategory === category && (
                <div className="ml-2 space-y-1">
                  {items.map(itemId => {
                    const item = MENU_ITEMS.find(m => m.id === itemId)
                    if (!item) return null
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id)
                          setIsOpen(false)
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:text-white hover:bg-slate-700'
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="space-y-2 flex flex-col items-center">
            {MENU_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(true)
                }}
                className={`p-3 rounded-lg transition-colors text-xl ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                title={MENU_ITEMS.find(m => m.id === item.id)?.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="p-4 border-t border-slate-700 text-xs text-slate-400">
          <div className="mb-2">Office Interior - TechCorp</div>
          <div className="text-slate-500">Project Dashboard</div>
        </div>
      )}
    </div>
  )
}
