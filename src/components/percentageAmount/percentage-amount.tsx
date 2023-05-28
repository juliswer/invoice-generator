'use client'

import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { Spinner } from '../tailwind/Spinner'

export default function PercentageAmount() {
  const { percentageAmount, isLoading } = useAppSelector((state) => state.app)

  return (
    <>
      {isLoading && <Spinner />}
      {percentageAmount.finalAmount > 0 && percentageAmount.percentage > 0 && (
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-normal">Total Amount:</h2>
            <h3 className="text-2xl font-extrabold text-green-500">
              U$D {percentageAmount.finalAmount}.
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-normal">Percentage Amount:</h2>
            <h3 className="text-2xl font-extrabold text-green-500">
              U$D {percentageAmount.percentage}.
            </h3>
          </div>
        </div>
      )}
    </>
  )
}
