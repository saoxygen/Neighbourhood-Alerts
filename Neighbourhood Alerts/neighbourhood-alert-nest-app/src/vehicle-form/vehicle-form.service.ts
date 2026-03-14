import { Injectable } from '@nestjs/common';
import { CreateVehicleFormDto } from './dto/create-vehicle-form.dto';
import { UpdateVehicleFormDto } from './dto/update-vehicle-form.dto';
import { Repository } from 'typeorm';
import { VehicleForm } from './entities/vehicle-form.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class VehicleFormService {

  constructor(@InjectRepository(VehicleForm) private readonly vehicleFormRepo: Repository<VehicleForm>,) { }

  create(createVehicleFormDto: CreateVehicleFormDto) {
    const vehicleForm = this.vehicleFormRepo.create(createVehicleFormDto);

    // check if this vehicles number plate exists

    // if it does then add on to existing post or cancel the new alert being created

    // if it does create the new post

    vehicleForm.uuid = randomUUID();
    vehicleForm.userUUID = randomUUID();
    return this.vehicleFormRepo.save(vehicleForm);
  }

  findAll() {
    return this.vehicleFormRepo.find();
  }

  findOne(uuid: string) {
    return this.vehicleFormRepo.findOne({ where: { uuid } });
  }

  update(uuid: string, updateVehicleFormDto: UpdateVehicleFormDto) {
    return this.vehicleFormRepo.update({uuid: uuid}, {vehicleStatus: updateVehicleFormDto.vehicleStatus, customDescription: updateVehicleFormDto.customDescription})
  }

  remove(uuid: string) {
    return this.vehicleFormRepo.delete({ uuid: uuid });
  }
}
