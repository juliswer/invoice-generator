import Link from 'next/link'
import { Button } from '../tailwind/Button'

export default function Hero() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold">Use the tools for free</h2>

      <div className="flex items-center justify-center gap-4 mt-5 md:p-0 p-5">
        <Link href="/amount">
          <Button color="primary" size="lg">
            Get Amount from Rate
          </Button>
        </Link>
        <Link href="/percentage">
          <Button color="error" size="lg">
            Calculate Percentage
          </Button>
        </Link>
        <Link href="/compare">
          <Button color="secondary" size="lg">
            Compare Addresses
          </Button>
        </Link>
      </div>
      <h4 className="text-lg mt-10">
        <span className="font-extrabold text-xl">Note:</span> Invoice Tool is
        going to retrieve the amount in USD and ARS
      </h4>
    </div>
  )
}
