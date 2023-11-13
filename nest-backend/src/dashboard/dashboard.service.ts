import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  constructor(private httpService: HttpService) {}
  async fetchAndCombineData(): Promise<any> {
    // 모든 외부 API를 호출하고 데이터를 가져온다.
    const [factory, dailyProcessRate] = await Promise.all([
      this.fetchDataFromApi1(),
      this.fetchDataFromApi2(),
    ]);
    // 데이터를 조합한다.
    return { factory, dailyProcessRate };
  }

  async fetchDataFromApi1(): Promise<any> {
    const apiUrl = 'https://65508d3a7d203ab6626de98b.mockapi.io/iot/factory';
    const response = await this.httpService.get(apiUrl).toPromise();
    return response.data;
  }
  private async fetchDataFromApi2(): Promise<any> {
    const apiUrl =
      'https://65508d3a7d203ab6626de98b.mockapi.io/iot/dailyProcessRate';
    const response = await this.httpService.get(apiUrl).toPromise();
    return response.data;
  }
}
