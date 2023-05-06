export const isMetamaskInstalled = (() => {
  if (typeof window === 'undefined') return false

  const isMetamaskInstalled = window.ethereum && window.ethereum.isMetaMask

  return Boolean(isMetamaskInstalled)
})()
