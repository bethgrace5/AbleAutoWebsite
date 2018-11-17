import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatIconRegistry,
  MatCardModule
} from '@angular/material';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ContactComponent }     from './contact/contact.component';
import { ServiceComponent }     from './service/service.component';
import { CareerComponent }      from './career/career.component';
import { AboutComponent }       from './about/about.component';
import { ApplyComponent }       from './apply/apply.component';
import { AppointmentComponent } from './appointment/appointment.component';

//import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {
  AlertModule,
  CollapseModule,
  //DatepickerModule,
  //DropdownModule
} from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: 'dashboard',   component: DashboardComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'service',     component: ServiceComponent },
  { path: 'career',      component: CareerComponent },
  { path: 'about',       component: AboutComponent },
  { path: 'apply',       component: ApplyComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: '**',   redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    ServiceComponent,
    CareerComponent,
    AboutComponent,
    ApplyComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    //DatepickerModule,
    //FormsModule,
    RouterModule.forRoot(appRoutes),
    //DropdownModule,
    CollapseModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
