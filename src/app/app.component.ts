import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';
  public googleUrl = "https://www.google.com/maps/dir/?api=1&saddr=My%20Location&destination=Able+Auto+and+Truck+Repair,+Fruitvale+Avenue+%231,+Bakersfield,+CA&daddr=ChIJzRQ-WEFC6oARnf-v_gT18YA&travelmode=driving"
  public appointmentUrl = "http://www.mitchell1crm.com/crmutilities/RequestAppointment.aspx?v=SureCritic&w=959133"
  public telephoneLink = "tel:+16616370669"

  public isMenuCollapsed=true;
  public onActivate(e) {
    window.scrollTo(0, 0);
  }
}
