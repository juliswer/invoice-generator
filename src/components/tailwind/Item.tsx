import { type Note } from '@/common/types/notes.type'
import { Avatar } from '@components/common/Avatar'
import dayjs from 'dayjs'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { findNoteById } from '@/redux/features/app/actions/notes/findNoteById/findNoteById'
import { setIsOpenDrawer } from '@/redux/features/app/store/app.slice'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { Button } from '@components/common/Button'
import { FaPen } from 'react-icons/fa'
import { Roles } from '@common/enums/roles.enum'

type Props = {
  note: Note
}

export function Item({ note }: Props) {
  const dispatch = useAppDispatch()
  const { isOpenDrawer } = useAppSelector((state) => state.app)
  const { account } = useAppSelector((state) => state.auth)

  const updateNote = ({ id }: Note) => {
    void dispatch(findNoteById(id))
    dispatch(setIsOpenDrawer(!isOpenDrawer))
  }

  const ableToEdit =
    note.author.id === account.id || account.role === Roles.ADMIN

  return (
    <div className="relative rounded-md shadow-xl h-fit">
      <div className="p-3 text-black note-top bg-slate-300 rounded-t-md ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center justify-start mb-1">
              <label className="mr-3 avatar" tabIndex={0}>
                <Avatar url={String(note.author.image)} width="w-8" />
              </label>
              <span className="font-medium capitalize">
                {note.author.firstName} {note.author.lastName}
              </span>
            </div>
            <span className="italic font-medium text-slate-500">
              {dayjs(note.createdAt).format('MM/DD/YYYY h:mm A')}{' '}
            </span>
          </div>
          {ableToEdit && (
            <div className="flex flex-row items-center">
              <Button
                color=""
                extra="bg-[#fe445e] border-none"
                onClick={() => {
                  updateNote(note)
                }}
                size="lg"
              >
                <FaPen className="mr-2" />
                Edit
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="px-4 py-3 note-body bg-slate-100 rounded-b-md">
        <h2 className="text-xl font-semibold">{note.title}</h2>
        <p className="break-words">{note.description}</p>
      </div>
    </div>
  )
}
