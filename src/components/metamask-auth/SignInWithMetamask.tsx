import ContractService from '@/contracts/services/ContractService'

type Props = {
  onSignIn: (address: string) => void
}

export function SignInWithMetamask({ onSignIn }: Props) {
  const handleSignIn = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to sign in with Ethereum')
      return
    }

    const [address] = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })

    if (!address) {
      alert('Please connect to MetaMask to sign in with Ethereum')
      return
    }

    onSignIn(address)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: '20%',
        backgroundColor: '#232323'
      }}
    >
      <button
        onClick={handleSignIn}
        style={{
          padding: '2% 4%',
          borderRadius: '5px',
          border: '1px solid transparent',
          cursor: 'pointer'
        }}
      >
        Sign in with MetaMask
      </button>
    </div>
  )
}
