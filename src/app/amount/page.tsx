'use client'

import { PaymentAmount } from '@/components/payment-amount/payment-amount'
import { RateForm } from '@/components/rate-form/rate-form'
import { setPaymentAmount } from '@/redux/features/app/store/app.slice'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function page() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPaymentAmount(0))
  }, [])

  return (
    <div className="mt-3">
      <h2 className="text-center text-3xl font-extrabold">
        Estimate Your Monthly Payment
      </h2>
      <div className="flex items-center justify-center">
        <RateForm />
      </div>
      <PaymentAmount />
    </div>
  )
}
