import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { Item } from '@/components/common/Item'
import { findNotes } from '@/redux/features/app/actions/notes/findNotes/findNotes'
import { useEffect } from 'react'

export function List() {
  const dispatch = useAppDispatch()
  const { notes, filters } = useAppSelector((state) => state.app)

  useEffect(() => {
    void dispatch(findNotes(filters))
  }, [dispatch, filters])

  if (!notes?.length) {
    return (
      <div className="h-full min-h-[400px] w-full flex justify-center items-center mt-5 bg-slate-300 rounded">
        <p className="text-2xl font-semibold opacity-70">
          You currently don&apos;t have any notes
        </p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {notes?.map((note) => (
        <Item key={note.id} note={note} />
      ))}
    </div>
  )
}
