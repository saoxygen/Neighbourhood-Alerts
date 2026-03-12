import { Module } from '@nestjs/common';
import { VehicleFormService } from './vehicle-form.service';
import { VehicleFormController } from './vehicle-form.controller';

@Module({
  controllers: [VehicleFormController],
  providers: [VehicleFormService],
})
export class VehicleFormModule {}
