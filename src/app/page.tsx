'use client'

import { CompareAddresses } from '@/components/compare-addresses/compare-addresses'
import { ConvertToArs } from '@/components/convert-to-ars/convert-to-ars'
import { PaymentAmount } from '@/components/payment-amount/payment-amount'
import { RateForm } from '@/components/rate-form/rate-form'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'

export default function Page() {
  const { paymentAmount } = useAppSelector((state) => state.app)

  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-extrabold">
        Estimate Your Monthly Payment
      </h2>
      <div className="flex items-center justify-center">
        <RateForm />
      </div>
      <PaymentAmount />

      <div className="flex items-center justify-center mt-10 flex-col">
        <h2 className="text-center text-3xl font-extrabold mb-10">
          Compare Addresses
        </h2>
        <CompareAddresses />
      </div>
    </div>
  )
}
