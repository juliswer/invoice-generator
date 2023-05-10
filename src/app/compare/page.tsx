import { CompareAddresses } from '@/components/compare-addresses/compare-addresses'

function page() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <h2 className="text-center text-3xl font-extrabold mb-10">
        Compare Addresses
      </h2>
      <CompareAddresses />
    </div>
  )
}

export default page
