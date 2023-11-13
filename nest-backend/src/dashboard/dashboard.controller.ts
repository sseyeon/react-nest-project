import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { AuthGuard } from 'src/auth/auth.gards';
import { ApiTags } from '@nestjs/swagger';

@Controller('dashboard')
@ApiTags('dashboard')
export class DashboardController {
  constructor(private dashbardService: DashboardService) {}
  @Get()
  @UseGuards(AuthGuard)
  async getDashboardData(): Promise<any> {
    const returnData = await this.dashbardService.fetchAndCombineData();
    return { returnData };
  }
}
