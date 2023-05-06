import { BaseContract, Contract, ethers, InterfaceAbi } from 'ethers'

export const createContract = async <T extends BaseContract>(
  contractAddress: string,
  contractAbi: InterfaceAbi
) => {
  const provider = new ethers.BrowserProvider(window.ethereum)

  const signer = await provider.getSigner()

  try {
    await signer.getAddress()
    return new Contract(contractAddress, contractAbi, signer) as unknown as T
  } catch (ex) {
    return new Contract(contractAddress, contractAbi, provider) as unknown as T
  }
}
