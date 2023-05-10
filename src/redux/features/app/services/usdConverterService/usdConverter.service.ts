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
    this.endpoint = 'https://api.bluelytics.com.ar/v2/latest'
  }

  async getArsFromUsd(dollars: number) {
    const { data } = await this.instance.get<usdConverterResponse>(
      this.endpoint
    )

    const {
      blue: { value_sell }
    } = data

    return dollars * value_sell
  }

  async getUsdValueFromArs() {
    const { data } = await this.instance.get<usdConverterResponse>(
      this.endpoint
    )
    const {
      blue: { value_sell }
    } = data

    return value_sell
  }
}

export const usdConverterService = new UsdConverterService()
