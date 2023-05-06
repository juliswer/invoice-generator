import { type ReactNode } from 'react'

type Props = {
  openMsg: string
  cancelMsg: string
  acceptMsg: string
  children: ReactNode
  modalTitle: string
}

export function Modal({
  openMsg,
  cancelMsg,
  acceptMsg,
  modalTitle,
  children
}: Props) {
  return (
    <>
      <label className="btn btn-primary" htmlFor="my-modal">
        {openMsg}
      </label>

      <input className="modal-toggle" id="my-modal" type="checkbox" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{modalTitle}</h3>
          {children}
          <div className="modal-action">
            <label className="btn btn-secondary" htmlFor="my-modal">
              {cancelMsg}
            </label>
            <label className="btn btn-primary" htmlFor="my-modal">
              {acceptMsg}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
