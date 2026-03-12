import { Injectable } from '@nestjs/common';
import { CreateVehicleFormDto } from './dto/create-vehicle-form.dto';
import { UpdateVehicleFormDto } from './dto/update-vehicle-form.dto';

@Injectable()
export class VehicleFormService {
  create(createVehicleFormDto: CreateVehicleFormDto) {
    return 'This action adds a new vehicleForm';
  }

  findAll() {
    return `This action returns all vehicleForm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleForm`;
  }

  update(id: number, updateVehicleFormDto: UpdateVehicleFormDto) {
    return `This action updates a #${id} vehicleForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleForm`;
  }
}
