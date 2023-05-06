import { PaymentAmount } from '@/components/payment-amount/payment-amount'
import { RateForm } from '@/components/rate-form/rate-form'

export default function Page() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-extrabold">
        Estimate Your Monthly Payment
      </h1>
      <div className="flex items-center justify-center">
        <RateForm />
      </div>
      <PaymentAmount />
    </div>
  )
}
