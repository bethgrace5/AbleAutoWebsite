import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { WarrantyComponent } from './warranty.component';

describe('WarrantyComponent', () => {
  let component: WarrantyComponent;
  let fixture: ComponentFixture<WarrantyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
