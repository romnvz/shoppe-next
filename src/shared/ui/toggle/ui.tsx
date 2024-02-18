'use client'

import clsx from 'clsx'

interface IToggleProps {
  selected: boolean
  toggleSelected: () => void
}

export const Toggle = ({ selected, toggleSelected }: IToggleProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => toggleSelected()}
        className="sr-only peer"
      />
      <div
        className="w-11 h-6 bg-slate-600 rounded-full peer-checked:after:translate-x-full 
          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-800 peer-checked:opacity-80"></div>
    </label>
  )
}
