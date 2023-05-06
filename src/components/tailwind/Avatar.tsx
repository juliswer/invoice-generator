type Props = {
  url: string
  width?: 'w-12' | 'w-8'
}
export function Avatar({ url, width = 'w-12' }: Props) {
  return (
    <div>
      <div className="avatar">
        <div className={`${width} rounded-full`}>
          <img alt="image" referrerPolicy="no-referrer" src={url} />
        </div>
      </div>
    </div>
  )
}
