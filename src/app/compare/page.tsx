import { CompareAddresses } from '@/components/compare-addresses/compare-addresses'
import PageTitle from '@/components/page-title/page-title'

function page() {
  return (
    <div className="flex items-center justify-center mt-2 flex-col">
      <div className="mb-10">
        <PageTitle title="Compare Addresses" />
      </div>

      <CompareAddresses />
    </div>
  )
}

export default page
