'use client'

export default function BOQGenerator() {
  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      <iframe
        src="https://logicleap7.vercel.app/dashboard"
        className="w-full h-full border-0"
        title="BOQ Generator Dashboard"
        allow="fullscreen"
        style={{ display: 'block' }}
      />
    </div>
  )
}
