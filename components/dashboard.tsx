'use client'

import { Suspense } from 'react'
import DashboardHome from '@/components/sections/dashboard-home'
import ProjectPlanning from '@/components/sections/project-planning'
import BOQGenerator from '@/components/sections/boq-generator'
import ProcurementSection from '@/components/sections/procurement'
import PurchaseOrders from '@/components/sections/purchase-orders'
import VendorsSection from '@/components/sections/vendors'
import InventorySection from '@/components/sections/inventory'
import EquipmentSection from '@/components/sections/equipment'
import ExecutionSection from '@/components/sections/execution'
import ProgressTracking from '@/components/sections/progress-tracking'
import MaterialTracking from '@/components/sections/material-tracking'
import QualityControl from '@/components/sections/quality-control'
import VarianceAnalysis from '@/components/sections/variance-analysis'
import PredictionsSection from '@/components/sections/predictions'
import AnalyticsSection from '@/components/sections/analytics'

interface DashboardProps {
  activeSection: string
}

export default function Dashboard({ activeSection }: DashboardProps) {
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardHome />
      case 'project-planning':
        return <ProjectPlanning />
      case 'boq':
        return <BOQGenerator />
      case 'procurement':
        return <ProcurementSection />
      case 'purchase-orders':
        return <PurchaseOrders />
      case 'vendors':
        return <VendorsSection />
      case 'inventory':
        return <InventorySection />
      case 'equipment':
        return <EquipmentSection />
      case 'execution':
        return <ExecutionSection />
      case 'progress':
        return <ProgressTracking />
      case 'material-tracking':
        return <MaterialTracking />
      case 'quality':
        return <QualityControl />
      case 'variance':
        return <VarianceAnalysis />
      case 'predictions':
        return <PredictionsSection />
      case 'analytics':
        return <AnalyticsSection />
      default:
        return <DashboardHome />
    }
  }

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-slate-50 to-slate-100">
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        {renderSection()}
      </Suspense>
    </div>
  )
}
