import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashbardService: DashboardService) {}
  @Get()
  async getDashboardData(): Promise<any> {
    const returnData = await this.dashbardService.fetchAndCombineData();
    return { returnData };
  }
}
