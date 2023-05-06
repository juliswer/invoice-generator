import { Button } from '@components/common/Button'
import { setIsOpenDrawer } from '@/redux/features/app/store/app.slice'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { type ReactNode } from 'react'
import Drawer from 'react-modern-drawer'

type Props = {
  openMsg: string
  children: ReactNode
}

export function DrawerR({ children, openMsg }: Props) {
  const { isOpenDrawer } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setIsOpenDrawer(true))
  }
  const handleDrawerChange = () => {
    dispatch(setIsOpenDrawer(!isOpenDrawer))
  }

  return (
    <>
      <Drawer
        className="flex min-w-[400px] h-screen p-5"
        direction="right"
        onClose={handleDrawerChange}
        open={isOpenDrawer}
      >
        {children}
      </Drawer>
      <div className="flex justify-center">
        <Button
          color="primary"
          extra="bg-[#fe445e] border-none hover:bg-slate-700"
          onClick={handleClick}
          size="lg"
        >
          {openMsg}
        </Button>
      </div>
    </>
  )
}
