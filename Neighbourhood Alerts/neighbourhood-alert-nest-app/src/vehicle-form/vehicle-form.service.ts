import { Injectable } from '@nestjs/common';
import { CreateVehicleFormDto } from './dto/create-vehicle-form.dto';
import { UpdateVehicleFormDto } from './dto/update-vehicle-form.dto';
import { Repository } from 'typeorm';
import {VehicleForm} from './entities/vehicle-form.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class VehicleFormService {

  constructor(@InjectRepository(VehicleForm) private readonly vehicleFormRepo: Repository<VehicleForm>,) {}

  create(createVehicleFormDto: CreateVehicleFormDto) {
    const vehicleForm = this.vehicleFormRepo.create(createVehicleFormDto);
    vehicleForm.uuid = randomUUID();
    vehicleForm.userUUID = randomUUID();
    return this.vehicleFormRepo.save(vehicleForm);
  }

  findAll() {
    return this.vehicleFormRepo.find();
  }

  findOne(uuid: string) {
    return this.vehicleFormRepo.findOne({where: {uuid}});
  }

  update(id: number, updateVehicleFormDto: UpdateVehicleFormDto) {
    return `This action updates a #${id} vehicleForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleForm`;
  }
}
