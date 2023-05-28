'use client'

import PageTitle from '@/components/page-title/page-title'
import { PaymentAmount } from '@/components/payment-amount/payment-amount'
import { RateForm } from '@/components/rate-form/rate-form'
import { setPaymentAmount } from '@/redux/features/app/store/app.slice'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useEffect } from 'react'

export default function page() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPaymentAmount(0))
  }, [])

  return (
    <div className="mt-3">
      <PageTitle title="Estimate Your Monthly Payment" />
      <div className="flex items-center justify-center">
        <RateForm />
      </div>
      <PaymentAmount />
    </div>
  )
}
