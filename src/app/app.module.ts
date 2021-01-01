import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ServiceComponent }     from './service/service.component';
import { WarrantyComponent }    from './warranty/warranty.component';
import { ReviewsComponent }     from './reviews/reviews.component';
import { FinancingComponent } from './financing/financing.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',            component: DashboardComponent },
  { path: 'service',     component: ServiceComponent },
  { path: 'warranty',    component: WarrantyComponent },
  { path: 'reviews',     component: ReviewsComponent },
  { path: 'financing',   component: FinancingComponent },
  { path: '**',   redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServiceComponent,
    WarrantyComponent,
    ReviewsComponent,
    FinancingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
