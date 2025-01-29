import type { ReactNode } from "react"

export default function IPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-[375px] h-[812px] bg-white rounded-[60px] shadow-xl overflow-hidden border-8 border-gray-300 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-300 rounded-b-3xl"></div>
      <div className="w-full h-full pt-8 px-4 pb-4">{children}</div>
    </div>
  )
}

