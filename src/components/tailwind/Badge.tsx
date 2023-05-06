type Props = {
  text: string
  type:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  outline: boolean
}

export function Badge({ text, type, outline }: Props) {
  return (
    <>
      <div className={`badge badge-${type} ${outline ? 'badge-outline' : ''}`}>
        {text}
      </div>
      <div className={`badge badge-${type} ${outline ? 'badge-outline' : ''}`}>
        {text}
      </div>
    </>
  )
}
