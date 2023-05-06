import { type ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = {
  active?: boolean
  children: ReactNode
  circle?: boolean
  color:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | ''
  disabled?: boolean
  extra?: string
  outline?: boolean
  size: 'lg' | 'sm' | 'xs' | ''
  square?: boolean
  type?: 'button' | 'submit' | 'reset'
  wide?: boolean
  onClick?: () => void
}

export function Button({
  active = false,
  circle = false,
  children,
  color,
  disabled = false,
  extra = '',
  outline = false,
  size = '',
  square = false,
  type,
  wide = false,
  onClick
}: Props) {
  return (
    <button
      className={clsx(
        `btn btn-${color}`,
        `btn-${size}`,
        `rounded-md`,
        extra,
        { 'btn-active': active },
        { 'btn-wide': wide },
        { 'btn-disabled': disabled },
        { 'btn-circle': circle },
        { 'btn-square': square },
        { 'btn-outline': outline }
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
