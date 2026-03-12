import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleFormDto } from './create-vehicle-form.dto';

export class UpdateVehicleFormDto extends PartialType(CreateVehicleFormDto) {}
