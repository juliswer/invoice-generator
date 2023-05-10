'use client'

import { usdToArs } from '@/redux/features/app/actions/usdConverter/usdToArs/usdToArs'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { Loading } from '../tailwind/Loading'
import { Button } from '../tailwind/Button'

export function ConvertToArs() {
  const { paymentAmount, isLoading, paymentInArs } = useAppSelector(
    (state) => state.app
  )
  const dispatch = useAppDispatch()

  const handleUsdToArs = async () => {
    await dispatch(usdToArs(paymentAmount))
  }

  return (
    <div>
      <Button
        color="accent"
        size="lg"
        onClick={handleUsdToArs}
        extra={`mt-5 ${isLoading && 'loading'}`}
      >
        {isLoading ? 'Converting' : 'Convert to ARS'}
      </Button>
      {!!paymentInArs && (
        <h2 className="text-success text-center font-bold text-2xl mt-4">
          ${paymentInArs} ARS
        </h2>
      )}
    </div>
  )
}
