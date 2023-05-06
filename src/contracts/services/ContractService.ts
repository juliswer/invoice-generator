import { IContractService } from './IContractService'
import { createContract } from '../utils/createContract'
import { BaseContract } from 'ethers'

export default class ContractService<ContractType extends BaseContract>
  implements IContractService
{
  private contract: ContractType | null

  constructor() {
    this.contract = null
  }

  public async init(): Promise<void> {
    this.contract = await createContract<ContractType>(
      'ContractAddress',
      'MarketplaceAbi'
    )
  }
}
