import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleFormService } from './vehicle-form.service';
import { CreateVehicleFormDto } from './dto/create-vehicle-form.dto';
import { UpdateVehicleFormDto } from './dto/update-vehicle-form.dto';

@Controller('vehicle-form')
export class VehicleFormController {
  constructor(private readonly vehicleFormService: VehicleFormService) {}

  @Post()
  create(@Body() createVehicleFormDto: CreateVehicleFormDto) {

    // check if this vehicles number plate exists

    // if it does then add on to existing post or cancel the new alert being created

    // if it does create the new post

    return this.vehicleFormService.create(createVehicleFormDto);
  }

  @Get()
  findAll() {
    return this.vehicleFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleFormService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleFormDto: UpdateVehicleFormDto) {
    return this.vehicleFormService.update(+id, updateVehicleFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleFormService.remove(+id);
  }
}
