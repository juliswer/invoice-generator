import { type Note } from '@/common/types/notes.type'
import { saveNote } from '@/redux/features/app/actions/notes/saveNote/saveNote'
import { updateNote } from '@/redux/features/app/actions/notes/updateNote/updateNote'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { ErrorMessage } from '@hookform/error-message'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSave } from 'react-icons/fa'
import { findNotes } from '@/redux/features/app/actions/notes/findNotes/findNotes'
import { DrawerR } from './Drawer'
import { Button } from './Button'

export function Form() {
  const dispatch = useAppDispatch()
  const { account: author } = useAppSelector((state) => state.auth)
  const { filters, note } = useAppSelector((state) => state.app)
  const [isFormValid, setIsFormValid] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors, isValid }
  } = useForm<Note>({
    criteriaMode: 'all',
    defaultValues: note ?? { title: '', description: '' }
  })

  const onSubmit = async (data: Note) => {
    if (data.title === note.title) {
      setError('title', { message: 'Choose a different title' })
      setIsFormValid(false)
      return
    }
    if (data.description === note.description) {
      setError('title', { message: 'Choose a different description' })
      setIsFormValid(false)
      return
    }

    if (!note.id) {
      await dispatch(saveNote({ ...data, author }))
    } else {
      await dispatch(
        updateNote({
          ...note,
          ...data
        } as Note)
      )
    }
    void dispatch(findNotes(filters))
    reset()
  }

  useEffect(() => {
    setValue('title', note.title)
    setValue('description', note.description)
  }, [note, setValue])

  useEffect(() => {
    if (isValid && isFormValid) setIsFormValid(true)
  }, [isValid, isFormValid])

  return (
    <DrawerR openMsg="Add Note">
      <form
        className="flex flex-col w-full gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-semibold md:text-2xl">
          {note.id ? 'Update Note' : 'Create Note'}
        </h2>

        <div className="form-control">
          <label className="input-group">
            <span>Title</span>
            <input
              className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset  sm:text-sm sm:leading-6"
              placeholder="Title"
              type="text"
              {...register('title', {
                required: 'Enter a title.',
                minLength: {
                  value: 3,
                  message: 'Type a longer title'
                },
                maxLength: {
                  value: 22,
                  message: 'Type a shorter title'
                }
              })}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => <p className="text-red-600">{message}</p>}
          />
        </div>
        <div className="sm:col-span-2">
          <div className="form-control mt-2.5">
            <label className="input-group">
              <span>Description</span>
              <textarea
                autoComplete="off"
                className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6"
                placeholder="Description"
                {...register('description', {
                  required: 'Enter a description.',
                  minLength: {
                    value: 3,
                    message: 'Type a longer description'
                  }
                })}
              />
            </label>
            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => (
                <p className="text-red-600">{message}</p>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            aria-label="Close"
            color="primary"
            extra="flex w-full justify-center rounded-md gap-2 bg-[#fe445e] border-none"
            size=""
            type="submit"
          >
            {note.id ? 'Update Note' : 'Create Note'}
            <FaSave />
          </Button>
        </div>
      </form>
    </DrawerR>
  )
}
