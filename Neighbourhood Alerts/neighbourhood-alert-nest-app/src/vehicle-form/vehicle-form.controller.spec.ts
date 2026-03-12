import { Test, TestingModule } from '@nestjs/testing';
import { VehicleFormController } from './vehicle-form.controller';
import { VehicleFormService } from './vehicle-form.service';

describe('VehicleFormController', () => {
  let controller: VehicleFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleFormController],
      providers: [VehicleFormService],
    }).compile();

    controller = module.get<VehicleFormController>(VehicleFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
