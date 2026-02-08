'use client'

import { useState } from 'react'
import Dashboard from '@/components/dashboard'
import Sidebar from '@/components/sidebar'

export default function Page() {
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Dashboard activeSection={activeSection} />
    </div>
  )
}
