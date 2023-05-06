'use client'

import { useAppSelector } from '@/redux/store/hooks/useAppSelector'

export function PaymentAmount() {
  const { paymentAmount } = useAppSelector((state) => state.app)

  return (
    <div>
      {paymentAmount > 0 && (
        <h1 className="text-center text-3xl mt-5 md:p-0 p-1">
          Your Payment Amount is <br />{' '}
          <span className="font-bold text-success">U$D {paymentAmount}</span>
        </h1>
      )}
    </div>
  )
}
