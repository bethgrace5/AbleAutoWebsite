import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  public googleUrl = "https://www.google.com/maps/dir/?api=1&origin=Current%20Location&destination=Able+Auto+and+Truck+Repair,+Fruitvale+Avenue+%231,+Bakersfield,+CA&destination_place_id=ChIJzRQ-WEFC6oARnf-v_gT18YA&travelmode=driving"
  public telephoneLink = "tel:+16616370669"
  public appointmentUrl = "http://www.mitchell1crm.com/crmutilities/RequestAppointment.aspx?v=SureCritic&w=959133"
}
