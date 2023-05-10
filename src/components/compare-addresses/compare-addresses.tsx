'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../tailwind/Button'
import { compareAddressesForm } from '@/common/types/compareAddresses.type'
import { compareAddresses } from '@/common/utils/compareAddresses/compareAddresses.util'
import { useState } from 'react'

export function CompareAddresses() {
  const [sameAddresses, setSameAddresses] = useState<boolean | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid }
  } = useForm<compareAddressesForm>({
    defaultValues: {},
    criteriaMode: 'all'
  })

  const onSubmit = (compareAddressesForm: compareAddressesForm) => {
    const { address1, address2 } = compareAddressesForm

    const areSameAddresses = compareAddresses(address1, address2)
    setSameAddresses(areSameAddresses)
  }

  return (
    <div className="w-full md:w-5/12 p-4 md:p-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              className="input w-full"
              placeholder="First Address"
              {...register('address1', {
                required: 'First Address is required'
              })}
            />
            <input
              type="text"
              className="input w-full"
              placeholder="Second Address"
              {...register('address2', {
                required: 'Second Address is required'
              })}
            />
          </div>
          <Button
            size="lg"
            color="primary"
            type="submit"
            extra="mt-10 w-full"
            disabled={!isValid}
          >
            Compare
          </Button>
        </div>
      </form>
      <div className="mt-3">
        <h2 className="text-success font-bold text-xl text-center">
          {sameAddresses === true && 'Addresses match!'}
        </h2>
        <h2 className="text-error font-bold text-xl text-center">
          {sameAddresses === false && 'Addresses do not match!'}
        </h2>
      </div>
    </div>
  )
}
