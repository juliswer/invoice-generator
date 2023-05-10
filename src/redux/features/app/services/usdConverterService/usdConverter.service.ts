import { HttpService } from '@/common/services/http/http.service'
import { usdConverterResponse } from '@/common/types/usdConverterResponse.type'
import { type IUsdConverterService } from '@/redux/features/app/services/usdConverterService/usdConverterInterface.service'

export default class UsdConverterService
  extends HttpService
  implements IUsdConverterService
{
  private readonly endpoint: string

  constructor() {
    super()
    this.endpoint =
      'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
  }

  async getArsFromUsd(dollars: number) {
    const dollarName = 'Dolar Blue'
    const { data } = await this.instance.get<usdConverterResponse[]>(
      this.endpoint
    )
    const blue = data.find((i) => i.casa.nombre === dollarName)
    console.log({ blue })

    return dollars
  }

  async getUsdValueFromArs() {
    const { data } = await this.instance.get<usdConverterResponse[]>(
      this.endpoint
    )
  }
}

export const usdConverterService = new UsdConverterService()
