import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ServiceComponent } from './service.component';

describe('DashboardComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
