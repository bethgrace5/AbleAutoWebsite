import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ServiceCardModule } from './service-card/service-card.module';
import { ActivatedRoute } from '@angular/router';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatIconRegistry,
  MatCardModule,
  MatDialogModule
} from '@angular/material';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ContactComponent }     from './contact/contact.component';
import { ServiceComponent }     from './service/service.component';
import { CareerComponent }      from './career/career.component';
import { AboutComponent }       from './about/about.component';
import { ApplyComponent }       from './apply/apply.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { WarrantyComponent }    from './warranty/warranty.component';
import { AaaInfoComponent }     from './aaa-info/aaa-info.component';
import { ReviewsComponent }     from './reviews/reviews.component';
import { BlogComponent }        from './blog/blog.component';
import { FinancingComponent } from './financing/financing.component';
import { PromotionsComponent } from './promotions/promotions.component';

//import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {
  AlertModule,
  CollapseModule,
  //DatepickerModule,
  //DropdownModule
} from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: '',            component: DashboardComponent },
  // { path: 'contact',     component: ContactComponent },
  { path: 'service',     component: ServiceComponent },
  // { path: 'career',      component: CareerComponent },
  // { path: 'about',       component: AboutComponent },
  // { path: 'apply',       component: ApplyComponent },
  // { path: 'appointment', component: AppointmentComponent },
  { path: 'warranty',    component: WarrantyComponent },
  { path: 'aaa',         component: AaaInfoComponent },
  { path: 'reviews',     component: ReviewsComponent },
  { path: 'blog/:id',    component: BlogComponent },
  { path: 'blog',        component: BlogComponent },
  { path: 'financing',   component: FinancingComponent },
  { path: 'promotions',  component: PromotionsComponent },
  { path: '**',   redirectTo: '' }
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
    AppointmentComponent,
    WarrantyComponent,
    AaaInfoComponent,
    ReviewsComponent,
    BlogComponent,
    FinancingComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatCardModule,
    OverlayModule,
    MatDialogModule,
    ServiceCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
