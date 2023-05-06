import { isMetamaskInstalled } from '@/contracts/utils/isMetamaskInstalled'

export function MetamaskNotice() {
  if (!isMetamaskInstalled) return null

  return <>Metamask is Installed</>
}
