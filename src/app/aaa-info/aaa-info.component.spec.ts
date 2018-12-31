import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaInfoComponent } from './aaa-info.component';

describe('AaaInfoComponent', () => {
  let component: AaaInfoComponent;
  let fixture: ComponentFixture<AaaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
