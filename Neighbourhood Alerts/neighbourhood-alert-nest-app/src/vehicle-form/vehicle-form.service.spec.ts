import { Test, TestingModule } from '@nestjs/testing';
import { VehicleFormService } from './vehicle-form.service';

describe('VehicleFormService', () => {
  let service: VehicleFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleFormService],
    }).compile();

    service = module.get<VehicleFormService>(VehicleFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
