import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './service-card.component';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ServiceCardComponent],
  exports: [ServiceCardComponent]
})
export class ServiceCardModule { }
