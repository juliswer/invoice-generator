import { type ReactNode } from 'react'
import { FaBars } from 'react-icons/fa'

type Props = {
  children: ReactNode
  type: 'toggle' | 'content' | 'side' | 'overlay' | 'mobile' | 'end' | ''
}

export function HamburgerMenu({ children, type = '' }: Props) {
  return (
    <div className={`dropdown dropdown-${type}`}>
      <label className="btn btn-ghost btn-circle avatar" tabIndex={0}>
        <div>
          <FaBars />
        </div>
      </label>
      <ul
        className="p-2 mt-6 shadow-2xl menu menu-compact dropdown-content rounded w-52 bg-white"
        tabIndex={0}
      >
        {children}
      </ul>
    </div>
  )
}
