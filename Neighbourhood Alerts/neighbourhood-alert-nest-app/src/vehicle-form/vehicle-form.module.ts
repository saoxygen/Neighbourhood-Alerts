import { Module } from '@nestjs/common';
import { VehicleFormService } from './vehicle-form.service';
import { VehicleFormController } from './vehicle-form.controller';
import {VehicleForm} from './entities/vehicle-form.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([VehicleForm])],
  controllers: [VehicleFormController],
  providers: [VehicleFormService],
})
export class VehicleFormModule {}
