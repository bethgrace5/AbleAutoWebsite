import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { FinancingComponent } from './financing.component';

describe('FinancingComponent', () => {
  let component: FinancingComponent;
  let fixture: ComponentFixture<FinancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
