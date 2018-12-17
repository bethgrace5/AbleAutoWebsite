import { ServiceCardModule } from './service-card.module';

describe('ServiceCardModule', () => {
  let serviceCardModule: ServiceCardModule;

  beforeEach(() => {
    serviceCardModule = new ServiceCardModule();
  });

  it('should create an instance', () => {
    expect(serviceCardModule).toBeTruthy();
  });
});
