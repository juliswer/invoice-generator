type Props = {
  title: string
  description: string
  actionMsg: string
  imageUrl?: string
  actionFunction: () => void
}

export function Card({
  title,
  description,
  actionMsg,
  actionFunction,
  imageUrl = ''
}: Props) {
  return (
    <div className="shadow-xl card w-96 bg-base-100 image-full">
      {imageUrl.length ? (
        <figure>
          <img alt="image" src={imageUrl} />
        </figure>
      ) : null}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <button
            className="btn btn-primary"
            onClick={actionFunction}
            type="button"
          >
            {actionMsg}
          </button>
        </div>
      </div>
    </div>
  )
}
