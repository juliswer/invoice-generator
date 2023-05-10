'use client'

import { usdToArs } from '@/redux/features/app/actions/usdConverter/usdToArs/usdToArs'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'

export function ConvertToArs() {
  const { paymentAmount } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  const clicker = async () => {
    await dispatch(usdToArs(2))
  }

  return (
    <div>
      <button onClick={clicker}>press me</button>
    </div>
  )
}
